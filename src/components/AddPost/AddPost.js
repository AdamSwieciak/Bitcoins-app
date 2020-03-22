import React, { Component } from "react";
import Axios from "axios";
import "./AddPost.css";

class AddPost extends Component {
  //LINKOWANIE DO INNEGO KOMPONETU
  redirectToHome = () => {
    const { history } = this.props;
    history.push("/");
  };

  addPost = e => {
    e.preventDefault();

    let newPost = {
      title: this.inputTitle.value,
      shortTitle: this.inputShoTitle.value,
      description: this.inputContents.value,
      imgPath: this.inputURLsrc.value,
      imgDescription: this.inputImgName.value
    };

    //CHECK VALIDATOR
    let flag = true;
    for (let key in newPost) {
      if (newPost[key] === "") {
        flag = false;
      }
    }

    if (flag) {
      Axios.post(
        "http://ak108.developer-lc.pl/api/ak108/blog_create.php",
        newPost
      );
    } else {
      alert("wpisz dane");
    }
    setTimeout(this.redirectToHome, 1000);
  };

  render() {
    return (
      <div className="addPost">
        <form onSubmit={this.addPost}>
          <input
            type="text"
            placeholder="Tytuł"
            ref={data => {
              this.inputTitle = data;
            }}
          />
          <input
            type="text"
            placeholder="Krótki tytuł"
            ref={data => {
              this.inputShoTitle = data;
            }}
          />

          <input
            type="text"
            placeholder="ścieżka do zdjecia"
            ref={data => {
              this.inputURLsrc = data;
            }}
          />
          <input
            type="text"
            placeholder="nazwa zdjęcia"
            ref={data => {
              this.inputImgName = data;
            }}
          />
          <textarea
            type="text"
            placeholder="treść"
            ref={data => {
              this.inputContents = data;
            }}
          />
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

export default AddPost;
