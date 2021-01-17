import axios from "axios";
import React from "react";

class Post extends React.Component {
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
        return (<div className="container">{ this.renderPost()}</div>);
    }
}

export default Post;