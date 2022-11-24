/* eslint-disable  */
import "./Home.css";
import React, { useState, useEffect } from 'react';
import BlogList from "./BlogList";
import useFetch from "../useFetch";


const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <>
            <div className="Home">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {blogs && blogs.map((blog, key) => (
                    <BlogList title={blog.title} body={blog.body} author={blog.author} key={key} id={blog.id} />

                ))}
            </div>
        </>
    );
};

export default Home;