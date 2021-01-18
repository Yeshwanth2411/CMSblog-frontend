import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import PostList from "../components/postList";

export default function Home() {

    const { userData } = useContext(UserContext);

    return (
        <div className="container">
            {userData.user ? (
                <div>
                    <h1>Blog!</h1>
                    <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new!</p>
                    <h3>Latest Posts:</h3>
                    <PostList />
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