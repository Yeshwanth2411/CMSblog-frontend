import React from "react";
import axios from "axios";
import PostListItem from "./postListItem";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";



class PostList extends React.Component{

    static contextType = UserContext;

    state = {
        posts: []
    };
    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        const res = await axios.get("https://glacial-castle-99512.herokuapp.com/api/post");
        this.setState({ posts: res.data });
        console.log(res);
    }

    renderList() {
        return this.state.posts.map(post => {
            return (<PostListItem post={post} key={post._id}/>);
        })
    }

    render() {
        const { userData } = this.context;
        return (
            <div className="container">
                {userData.user ? (
                    <div className="post-list">{this.renderList()}</div>
                ) : (
                        <div>
                            <h2>You are not logged in</h2>
                            <Link to="/login">Log in</Link>
                        </div>
                )}
            </div>
            );
    }
}

export default PostList;