import React from 'react';


class PostForm extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {

        return (
            <div>
                <h3>Add a Post</h3>
                <form>
                    <div>
                        <label>Title: </label>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={this.state.title}
                        onChange={this.onChange}
                        />
                        <br/>
                    </div>
                        
                    <div>
                        <label>Body: </label>
                        <textarea 
                        name="body" 
                        placeholder="Body" 
                        value={this.state.body}
                        onChange={this.onChange}
                        />
                        <br/>
                        <button type="submit">Click</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default PostForm;
