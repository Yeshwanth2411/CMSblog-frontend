import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";

class Post extends React.Component {

    static contextType = UserContext;
    state = {
        post: {}
    };

    componentDidMount() {
        this.getPost();
    }

    async getPost() {
        const res = await axios.get(`http://192.168.0.108:5000/api/post/${this.props.match.params.id}`);
        console.log(res);
        this.setState({ post: res.data });
    }

    renderHTML() {
        return { __html: this.state.post.html };
    }
    renderPost() {
        return <div dangerouslySetInnerHTML={this.renderHTML()}>

        </div>;
    }
    render() {
        const { userData } = this.context;
        return (
            <div className="container">
                {userData.user ? (
                    <div>{this.renderPost()}</div>
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

export default Post;