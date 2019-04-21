import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

    }
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => {
                 console.log('axios response: ', res.data)
                 this.setState({
                     posts : res.data
                 })
                }
             )
             .catch( err => console.log(err))
    }

    render() {
        console.log("Post State" , this.state);
        return (
            <div>
                {this.state.posts.map( post => 
                <article>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
                )}
            </div>
        )
    }
}
    
export default Posts;

