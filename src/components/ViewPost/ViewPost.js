import React, { Component } from "react";
import "./ViewPost.css";

class ViewPost extends Component {
  redirectToHome = () => {
    const { history } = this.props;
    history.push("/addpost");
  };

  createPost = post => {
    if (post.title !== "") {
      return (
        <div className="viewpost" key={post.id}>
          <button
            className="viewpost__button button"
            onClick={() => this.removePost(post)}
          >
            Usuń
          </button>
          <h2 className="viewpost__title">{post.title}</h2>
          <p className="viewpost__shorttitle">{post.shortTitle}</p>
          <section>
            <img src={post.imgPath} alt={post.imgDescription} />
            <span className="viewpost__content">{post.description}</span>
          </section>
        </div>
      );
    }
  };

  removePost = post => {
    this.props.deleteFunc(post.id);
  };
  render() {
    let allPost = this.props.poste;
    let onePost;
    if (allPost.length > 0) {
      onePost = allPost.map(this.createPost);
    } else {
      onePost = <h2>Brak postów</h2>;
    }

    return <div>{onePost}</div>;
  }
}

export default ViewPost;
