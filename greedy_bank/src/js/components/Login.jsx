import React, { Component } from 'react';
import '../.././css/App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: 'bob', password: 'givemec@sh', showMessage: false };
    }

    handleClick = (event) => {
        const isUsername = this.state.username === event.target.username.value;
        const isPassword = this.state.password === event.target.password.value;

        isUsername && isPassword ?  this.props.history.push('/accounts') : this.setState({ showMessage: true });

        if(this.state.showMessage){
            this.props.setTimeout(() => {
                this.setState({showMessage: false})  
            }, 3000);
        }
    }

 

    render() {
        const styles =
        {
            display: !this.state.showMessage ? 'none' : 'block',
        }

        return (
            <div className="flex-container">
                <div className="form-row">
                    <h1>Greedy Bank</h1>
                    <hr />
                    
                    <h4 className='alert' style={ styles }> You have enter a wrong email or password. </h4>
                    
                    <form  onSubmit={this.handleClick}>
                        <div className='form-field'>
                            <input type='text' placeholder='username' name='username' />
                        </div>
                        <div className='form-field'>
                            <input type='password' placeholder='password' name='password' />
                        </div>
                        <button className='button'>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;