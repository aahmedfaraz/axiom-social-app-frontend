import React, { useState } from "react";
import { connect } from "react-redux";

const Timeline = ({ current }) => {
  const [body, setBody] = useState("");

  let myPosts = [
    {
      _id: "0",
      user: "0",
      body: "Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
    {
      _id: "1",
      user: "0",
      body: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
    {
      _id: "2",
      user: "0",
      body: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
  ];

  // myPosts = [];

  return (
    <div className='timeline'>
      <form action=''>
        <h2>{!current ? "Add" : "Update"} Your Post</h2>
        <div className='form-control'>
          <label htmlFor='body'>
            {!current ? "Enter New" : "Edit Your"} Post
          </label>
          <input
            type='text'
            name='body'
            value={body}
            onChange={(e) => setBody(e.value)}
            placeholder='Enter Post Here'
          />
        </div>
        <div className='controls'>
          {!current ? (
            <input type='submit' value='Add' className='btn add' />
          ) : (
            <>
              <button className='btn update'>Update</button>
              <button className='btn cancel'>Cancel</button>
            </>
          )}
        </div>
      </form>
      <h1>My Posts</h1>
      {myPosts.length > 0 ? (
        <ul className='posts'>
          {myPosts.map((post) => (
            <li key={post._id}>
              <small>Add Date: {post.date}</small>
              <p>{post.body}</p>
              <div className='controls'>
                <button className='btn update'>Update</button>
                <button className='btn delete'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Post Found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.user.current,
});

export default connect(mapStateToProps, null)(Timeline);
