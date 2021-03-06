import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div className={s.textarea}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
          <button onClick={addPost}>Add Post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
