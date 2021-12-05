import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/posts`, {
        headers: { Authorization: `bearer ${token}` },
      });
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (id) => {
    try {
      const result = await axios.delete(`${BASE_URL}/post/${id}`, {
        headers: { Authorization: `bearer ${token}` },
      });
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const newTodo = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${BASE_URL}/post`,
        {
          desc: e.target.todo.value,
        },
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      e.target.todo.value = "";
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Todos:</h1>
      {data.map((item) => {
        return (
          <>
            <h2 style={{ display: "inline" }}>{item.desc}</h2>
            <button onClick={() => del(item._id)}>x</button>
            <br />
          </>
        );
      })}
      <form onSubmit={newTodo}>
        <p>New todo:</p>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Post;
