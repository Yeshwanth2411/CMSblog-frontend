import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PostList from "./components/postList";
import Post from "./components/Post";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/userContext";
import Axios from "axios";
import Header from "./components/layout/Header";
import AddPost from "./components/addPost";

import "./style.css";


export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post(
                "https://glacial-castle-99512.herokuapp.com/api/user/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            );
            if (tokenRes.data) {
                const userRes = await Axios.get("https://glacial-castle-99512.herokuapp.com/api/user/", {
                    headers: { "x-auth-token": token },
                });
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        };

        checkLoggedIn();
    }, []);

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/posts/:id" component={Post} />
                        <Route path="/posts/" component={PostList} />
                        <Route path="/addpost" component={AddPost} />
                    </Switch>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    );
}
