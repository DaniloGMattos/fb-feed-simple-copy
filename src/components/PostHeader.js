import React from "react";
import propTypes from "prop-types";

// import { Container } from './styles';

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="Avatar" srcset="" />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);
PostHeader.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  time: propTypes.string.isRequired
};

export default PostHeader;
