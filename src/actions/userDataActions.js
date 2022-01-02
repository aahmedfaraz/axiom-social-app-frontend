import axios from "axios";
import {
  GET_USER_DATA,
  GET_USER_POSTS,
  GET_ALL_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_CURRENT,
  SET_LOADING,
} from "./types";

const backendURL = "http://axiom-social-app-backend.herokuapp.com";

// Action to SignUp and Get Token
export const signup = async (userData) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/users`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    });
    const token = await res.data;
    // Storing Token in Local Storage
    localStorage.setItem("axiom-auth-token", token);
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to Login and Get Token
export const login = async (loginData) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/auth`,
      data: loginData,
    });
    const token = await res.data;
    // Storing Token in Local Storage
    localStorage.setItem("axiom-auth-token", token);
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to Get User Data using Token
export const getUser = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/auth`,
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    const user = await res.data;

    dispatch({
      type: GET_USER_DATA,
      payload: user,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to Get User Posts
export const getUserPosts = (userID) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/posts/${userID}`,
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    const userPosts = await res.data;

    dispatch({
      type: GET_USER_POSTS,
      payload: userPosts,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to Get All Posts
export const getAllPosts = () => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "GET",
      url: `${backendURL}/api/posts`,
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    const allPosts = await res.data;

    dispatch({
      type: GET_ALL_POSTS,
      payload: allPosts,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to add post
export const addPost = (postData) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      url: `${backendURL}/api/posts`,
      data: postData,
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    const post = await res.data;

    dispatch({
      type: ADD_POST,
      payload: post,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to update post
export const updatePost = (updatedPost) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "PUT",
      url: `${backendURL}/api/posts/${updatedPost.id}`,
      data: {
        body: updatedPost.body,
      },
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    const returnedUpdatedPost = await res.data;

    dispatch({
      type: UPDATE_POST,
      payload: returnedUpdatedPost,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to delete post
export const deletePost = (id) => async (dispatch) => {
  setLoading(true);
  try {
    await axios({
      method: "DELETE",
      url: `${backendURL}/api/posts/${id}`,
      headers: {
        "Content-Type": "application/json",
        "axiom-auth-token": `${localStorage.getItem("axiom-auth-token")}`,
      },
    });

    console.log("The Post has been Deleted");

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (err) {
    console.log("Error ", err);
  }
  setLoading(false);
};

// Action to Set Current to Update Post
export const setCurrent = (post) => ({
  type: SET_CURRENT,
  payload: post,
});

// Action to Set Loading
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});
