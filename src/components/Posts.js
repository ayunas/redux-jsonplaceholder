import React from 'react';
import axios from 'axios';

class Posts extends React.Component {

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => console.log('axios response: ', res.data))
             .catch( err => console.log(err))
    }

    render() {
        return (
            <h1>Posts</h1>
        )
    }

}
    
export default Posts;

