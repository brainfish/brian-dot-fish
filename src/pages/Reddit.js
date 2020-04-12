import React from 'react';
import ContentBox from '../components/ContentBox';
import './Reddit.css';

const API_URL = "https://api.brian.fish/reddit";

const RedditPost = ({
    author,
    title,
    upvotes,
    url,
    subreddit_name,
    subreddit_url,
    num_comments,
    permalink
}, key) => {
    return <div className="RedditPost" key={`reddit-post-${key}`}>
        <a href={url}>{title}</a> by {author}{" "}
        to <a href={subreddit_url}>{subreddit_name}</a> 
        (<a href={permalink}>{num_comments} comments</a>) ({upvotes} upvotes)
    </div>
}

const RedditPostList = ({ posts }) => {
    return <div className="RedditPostList">
        {posts.map(RedditPost)}
    </div>
}

class Reddit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.fetchPosts();
    }

    fetchPosts = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(this.receivePosts);
    }

    receivePosts = posts => {
        console.log('got posts: %o', posts);
        this.setState({ posts: posts });
    }

    render() {
        return (
            <ContentBox className="Reddit">
                Reddit!
                <RedditPostList posts={this.state.posts} />
            </ContentBox>
        )
    }
}

export default Reddit;