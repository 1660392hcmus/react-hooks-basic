import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  //khởi tạo props post trong component với props type kiểu array
  post: PropTypes.array
};

PostList.defaultProps = {
  posts: [] //giá trị mặc định của props là rỗng
};

function PostList(props) {
  //hàm component chính
  const { posts } = props; //khai báo props sử dụng trong component

  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
