import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";

export default function Home() {
    const { userData } = useContext(UserContext);

    return (
        <div className="page">
            {userData.user ? (
                <div className="container">
                    <h1>Blog!</h1>
                    <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new!</p>
                    <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new!</p>
                    <h3>Latest Posts:</h3>
                </div>
            ) : (
                    <>
                        <h2>You are not logged in</h2>
                        <Link to="/login">Log in</Link>
                    </>
                )}
        </div>
    );
}