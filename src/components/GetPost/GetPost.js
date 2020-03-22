import React, { Component } from "react";
import Axios from "axios";
import ViewPost from "../ViewPost/ViewPost";

class GetPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      canUpdate: false
    };
  }

  getPost() {
    Axios.get("http://ak108.developer-lc.pl/api/ak108/blog.php").then(res => {
      this.setState({
        post: res.data
      });
    });
  }

  deletePost = idPost => {
    Axios.delete("http://ak108.developer-lc.pl/api/ak108/blog_delet.php", {
      data: { id: idPost }
    });
    this.setState({
      canUpdate: true
    });
    this.getPost();
  };

  componentDidMount() {
    //po wczytaniu komponentu
    this.getPost();
  }

  componentWillUpdate(prevProps, PrevState) {
    if (this.state.canUpdate === true) {
      this.setState({
        canUpdate: false
      });
      this.getPost();
    }
  }
  render() {
    return (
      <div>
        <ViewPost poste={this.state.post} deleteFunc={this.deletePost} />
      </div>
    );
  }
}

export default GetPost;
