import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card h-100">
      <img src={`http://localhost:3000/${post.image}`} className="card-img-top" alt={post.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text flex-grow-1">{post.content}</p>
        <Link to={`/blog/${post.id}`} className="btn btn-primary mt-auto">
          Leggi di più
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
