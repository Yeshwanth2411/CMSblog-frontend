import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import Axios from "axios";

export default function Login() {

    const [title, setTitle] = useState();
    const [tags, setTags] = useState();
    const [html, setHTML] = useState();

    const { userData } = useContext(UserContext);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const data = { title, tags, html };
            const postAdd = await Axios.post(
                "https://glacial-castle-99512.herokuapp.com/api/post",
                data
            );
            
            console.log(postAdd);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            {userData.user ? (
                <div>
            <h2>Add Post</h2>
            <form className="form" onSubmit={submit}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="tags">Tags</label>
                <input
                    id="tags"
                    type="text"
                    onChange={(e) => setTags(e.target.value)}
                />
                <label htmlFor="html">Description:</label>
                <input
                    id="html"
                    type="text"
                    onChange={(e) => setHTML(e.target.value)}
                />

                <input type="submit" value="Add Post" />
                    </form>
                    </div>
            ) : (
                    <div>
                        <h2>You are not logged in</h2>
                        <Link to="/login">Log in</Link>
                    </div>
                )}
        </div>
    );
}