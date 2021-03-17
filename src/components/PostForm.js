import React, { Component } from 'react' 
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://reqres.in/api/login', this.state)
            .then(response => {
                alert("You've sucessfully login with token: \n" + response.data.token)
            })
            .catch(error => {
                console.log(error)
                alert("200 \n something went wrong")
            })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1>Post Login Page!</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                            type="text" 
                            name="email"
                            placeholder="your email" 
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="password"
                            placeholder="your password" 
                            value={password}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm