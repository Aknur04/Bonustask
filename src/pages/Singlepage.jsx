import React from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const Singlepage = () => {



    const  {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            <button className="custom-btn btn-2" onClick={goBack}>Back</button>
            {post && (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
            )}
        </div>
    );
};

export { Singlepage };