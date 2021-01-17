import React from "react";
import { Link } from "react-router-dom";

class PostListItem extends React.Component {
 
    renderDate(dateString) {
        const monthNames = ["January"];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const date = new Date(dateString);
        return `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderTags(tags) {
        return tags.map(tag => {
            return <span className="tag" key={tag}>{tag}</span>;
        });
    }

    render() {
        const { post } = this.props;
        return (<Link className="post-list-item" to={`/posts/${post._id}`}>
            <h3 className="title">
                {post.title}
            </h3>
            <span className="date">{this.renderDate(post.createdAt)}</span>
            <div className="tags">{this.renderTags(post.tags)}</div>
        </Link>);
    }
}

export default PostListItem;