import React from "react";
import axios from "axios";
import PostListItem from "./postListItem";

class PostList extends React.Component{

    state = {
        posts: []
    };
    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        const res = await axios.get("http://192.168.0.108:5000/api/post");
        this.setState({ posts: res.data });
        console.log(res);
    }

    renderList() {
        return this.state.posts.map(post => {
            return (<PostListItem post={post} key={post._id}/>);
        })
    }

    render() {
        return <div className="container"><div className="post-list">{this.renderList()}</div></div>;
    }
}

export default PostList;