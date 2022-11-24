import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ title,  author, id }) => {
    return (
        <>
            <div className="blog-preview">
                <Link to={`/blog/${id}`}>
                    <h1 className="blog-title">{title}</h1>
                    {/* <p>{body}</p> */}
                    <p>Written By : {author}</p>
                </Link>
            </div>
        </>
    );
};

export default BlogList;