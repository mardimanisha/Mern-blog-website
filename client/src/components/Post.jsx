/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  const authorUsername = author ? author.username : "Unknown Author";
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{authorUsername}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
