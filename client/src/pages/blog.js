import React, { useState, useEffect } from "react";
import "../css/blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const body = form.body.value;
        setPosts([...posts, { title, body, author: "John Wu", date: currentDate }]);
        form.reset();
        setShowForm(false);
    }

    return (
        <div className="container">
            <div className="center">
                {!showForm && (
                    <button type="add" onClick={() => setShowForm(true)}>Add</button>
                )}
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input type="text" name="title" />
                        </label>
                        <br />
                        <label>
                            Body:
                            <textarea name="body"></textarea>
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
            {posts.map((post, index) => (
                <div key={index} className="post-container">
                    <div className="profile- picture"></div>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>Author: {post.author}</p>
                        <p>Date: {post.date.toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
