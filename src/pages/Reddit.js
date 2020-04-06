import React from 'react';
import './Reddit.css';

const API_URL = "https://api.brian.fish/reddit";

const RedditPost = ({
    // author,
    title,
    // ups,
    url,
    // subreddit_name_prefixed,
    // subreddit_url,
    // num_comments,
    // permalink
}, key) => {
    return <div className="RedditPost" key={`reddit-post-${key}`}>
        <a href={url}>{title}</a> by {/*{author}{" "}*/}
        {/* to <a href={subreddit_url}>{subreddit_name_prefixed}</a> 
        (<a href={permalink}>{num_comments} comments</a>) ({ups} upvotes) */}
    </div>
}

const RedditPostList = ({ posts }) => {
    return <div className="RedditPostList">
        {posts.map(RedditPost)}
    </div>
}

// const testposts = [
//     {"title": "No corporate bailouts!! Direct financial resources to the working people, not the capitalist elite!", "url": "http://www.wsws.org/en/articles/2020/03/23/pers-m23.html", "author": "exgalactic", "ups": 7132},
//     {"title": "gqless: GraphQL client without queries", "url": "https://gqless.netlify.com/", "author": "shinework", "ups": 182}
// ]

class Reddit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
            // posts: testposts
        };
        this.fetchPosts();
    }

    fetchPosts() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.receivePosts(data));
            // .then(data => {
            //     console.log(data);
            //     this.setState({posts: data});
            // });
        // console.log('fetching!');
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", API_URL, true);

        // xhr.onload = e => {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status === 200) {
        //             console.log(xhr.responseText);
        //         } else {
        //             console.error(xhr.statusText);
        //         }
        //     }
        // };
        // xhr.onerror = e => console.error(xhr.statusText);
        // xhr.send(null);
    }

    receivePosts(posts) {
        console.log('got posts: %o', posts);
        this.setState({ posts: posts });
    }

    render() {
        return (
            <div className="Reddit">
                Reddit!
                <RedditPostList posts={this.state.posts} />
            </div>
        )
    }
}

export default Reddit;