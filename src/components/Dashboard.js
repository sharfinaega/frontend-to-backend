import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function Dashboard() {
  const [post, setPosts] = useState({
    title: "",
    content: ""
  });
  const [error, setError] = useState(null);
  // const [post, setPost] = useState({})
  const [file, setFile] = useState(null);

  // get post from database
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URI}/users-posts`)
  //     .then(result => {
  //       console.log(result);
  //       setPosts(result.data.result);
  //     })
  //     .catch(error => setError(error.message));
  // }, []);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const decoded = jwt.decoded(localStorage.getItem("token"));
  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND_URI}/users-posts`, { ...post, userId: decoded.user.id })
  //     .then(result => {
  //       console.log.log(result);
  //     })
  //     .catch(error => setError(error.message));
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const decoded = jwt.decode(localStorage.getItem("token"));
    const fd = new FormData();
    fd.append("imagePost", file);
    fd.append("title", post.title);
    fd.append("content", post.content);
    fd.append("userId", decoded.user.id);
    console.log(decoded);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users-posts`, fd)
      .then(result => {
        console.log(result);
      })
      .catch(error => setError(error.message));
  };

  const handleChange = event => {
    setPosts({
      ...post,
      [event.target.name]: event.target.value
    });
  };

  const handleFile = event => {
    setFile(event.target.files[0]);
    console.log(event.target.files);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label> <br />
        <input type="text" name="title" onChange={handleChange} value={post.title} /> <br /> <br />
        <label htmlFor="content">Content</label> <br />
        <textarea name="content" cols="50" rows="10" onChange={handleChange} value={post.content}></textarea>
        <br />
        <input type="file" onChange={handleFile} />
        <button>Add New Post</button>
      </form>

      <div id="posts"></div>
    </div>
  );
}
