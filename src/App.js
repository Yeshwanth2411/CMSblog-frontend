import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostList from "./components/postList";
import Post from "./components/Post";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";

import "./style.css";

class App extends React.Component{

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect( () => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post(
                "http://localhost:5000/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            );
            if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", {
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
    
    render() {
        return <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Header />
                <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/posts/:id" component={Post} />
                <Route path="/posts/" component={PostList} />
            </Switch>
            </UserContext.Provider>
        </BrowserRouter>;
    }
}

export default App;