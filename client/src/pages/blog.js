import React, { useState } from "react";
import "../css/blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const body = form.body.value;
        const author = form.author.value;
        setPosts([...posts, { title, body, author }]);
        form.reset();
    }

    return (
        <div className="container">
            <div className="center">
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
                    <label>
                        Author:
                        <input type="text" name="author" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {posts.map((post, index) => (
                <div key={index} className="post-container">
                    <div className="profile-picture"></div>
                    <div>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                      <p>Author: {post.author}</p>
                    </div>
                </div>
            ))}


        </div>
    );


}

export default Blog
