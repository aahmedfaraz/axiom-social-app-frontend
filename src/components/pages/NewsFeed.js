import React from "react";

const NewsFeed = () => {
  let myId = "1";
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
      user: "1",
      body: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
    {
      _id: "3",
      user: "0",
      body: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
    {
      _id: "4",
      user: "1",
      body: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      date: "02-01-2022",
    },
  ];
  return (
    <div className='newsfeed'>
      <h1>NewsFeed</h1>
      {myPosts.length > 0 ? (
        <ul className='posts'>
          {myPosts.map((post) => (
            <li key={post._id} className={post.user === myId ? "my-post" : ""}>
              <h4>Owner: {post.user}</h4>
              <small>Add Date: {post.date}</small>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Post Found.</p>
      )}
    </div>
  );
};

export default NewsFeed;
