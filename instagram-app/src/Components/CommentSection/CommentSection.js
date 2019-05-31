import React from "react";
import "./CommentSection.css";
import Comment from "../Comment/Comment";
import styled from "styled-components";

//Define and style components

const CommentBox = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  font-size: 14px;
  border-top: 1px solid lightgray;
`;
class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = { comments: [], inputText: "", numberOfLikes: 0 };
  }
  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  addNewComment(event, index) {
    console.log("added comment");
    console.log(event.target);
    let comments = [
      ...this.state.comments,
      { username: "gant123", text: this.state.inputText }
    ];
    console.log(comments);
    this.setState({ comments: comments, inputText: "" });
  }
  handleChange(event) {
    //set value of comment input to Comment state obj
    this.setState({ inputText: event.target.value });

    //Clear comment input box
    //this.setState({ inputText: "" });
  }

  addLike() {
    console.log("post was liked");
    let likes = this.state.numberOfLikes + 1;
    console.log(likes);
    this.setState({ numberOfLikes: likes });
  }
  render() {
    return (
      <div className="comment-section">
        <div className="comment-icons">
          <i class="far fa-heart" onClick={() => this.addLike()} />
          <i class="far fa-comment" />
        </div>
        <p className="likes">{this.state.numberOfLikes} likes</p>
        {this.state.comments.map(comment => (
          <Comment comment={comment} />
        ))}
        <form
          onSubmit={event => {
            event.preventDefault();
            this.addNewComment(event, 0);
          }}
        >
          <CommentBox
            type="text"
            placeholder="Add a comment..."
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

// const CommentSection = props => {

//   return <p>hellooo</p>;
// };

export default CommentSection;
