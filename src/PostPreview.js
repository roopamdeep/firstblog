import React, { Component } from "react";
class PostPreview extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              Science has not yet mastered prophecy
            </h2>
            <h3 className="post-subtitle">
              We predict too much for the next year and yet far too little for
              the next ten.
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#">Start Bootstrap</a>
            on August 24, 2019
          </p>
        </div>
        <hr />
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">Failure is not an option</h2>
            <h3 className="post-subtitle">
              Many say exploration is part of our destiny, but it’s actually our
              duty to future generations.
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#">Start Bootstrap</a>
            on July 8, 2019
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default PostPreview;
