import React from "react";
import { connect } from "react-redux";
import Profile from "../pages/Profile";
import Timeline from "../pages/Timeline";
import NewsFeed from "../pages/NewsFeed";

const Home = ({ selected }) => {
  return (
    <main>
      {selected === "profile" ? (
        <Profile />
      ) : selected === "timeline" ? (
        <Timeline />
      ) : (
        <NewsFeed />
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  selected: state.menu.selected,
});

export default connect(mapStateToProps, null)(Home);
