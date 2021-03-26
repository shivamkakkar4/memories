import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Collapse, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";
import { clearCurrentId } from "../../actions/currentSelected";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { CLOSE_FORM } from "../../constants/actionTypes";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const currentId = useSelector(state => state.currentSelected.currentId);
  const post = useSelector(state =>
    currentId ? state.posts.find(message => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const open = useSelector(state => state.formOpen);

  useEffect(() => {
    if (post) setPostData(post);
    if (!post) setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  }, [post]);
  // useEffect(() => {
  //   if (!open) clear();
  // }, [open]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (postData.selectedFile !== "") {
      if (currentId) {
        await dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      } else {
        await dispatch(createPost({ ...postData, name: user?.result?.name }));
        window.scrollTo(0, document.body.scrollHeight);
        clear();
      }
      document.getElementById("form").reset();
      setAlertOpen(false);
      dispatch({ type: CLOSE_FORM });
    } else {
      setAlertOpen(true);
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    dispatch(clearCurrentId());
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
        id="form"
      >
        <Typography variant="h6">{currentId ? "Edit memory" : "Create a Memory"}</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
          required
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
          required
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(",") })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />{" "}
          <Collapse in={alertOpen}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="error"
            >
              Please Upload Image
            </Alert>
          </Collapse>
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button> */}
      </form>
    </Paper>
  );
};

export default Form;
