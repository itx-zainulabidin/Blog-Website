/* eslint-disable */
import "./BlogDetails.css"
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const clickHandler = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        });
    };


    return (
        <>
            {isPending && <h1>Loading....</h1>}
            {error && <h1>{error}</h1>}
            {
                blog &&
                <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <p className="Author">Author : {blog.author}</p>
                    <button onClick={clickHandler}>Delete</button>
                </div>
            }
        </>
    );
};

export default BlogDetails;