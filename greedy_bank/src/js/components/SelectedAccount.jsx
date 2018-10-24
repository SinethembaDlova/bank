import React from 'react';


class SelectedAccount extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {ammount: 0}
    }

    // componentDidMount = () => {
    //     const ammount = {"ammount": }
    //     fetch('http://localhost:5000/accounts', {
    //         method: 'post',
    //         body: JSON.stringify(ammount)
    //       })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setTimeout(() => this.props.fetchAccounts(responseJson.data), 2000);
    //         })
    // }

    handleWithdraw = (event) => {
        const ammount = {"ammount": -this.state.ammount}
        console.log(ammount);
        // event.preventDefault();
        return ammount;
    }

    handleDeposit = (event) => {
        const ammount = {"ammount": this.state.ammount}; 
        console.log(ammount);
        // event.preventDefault();
        return ammount;
    }

    handleChange = (event) => {
        this.setState({ammount: event.target.value}); 
    }

    render(){ 
        return (
            <div className="form-row">
                <br/>
                <br/>
                <hr />
                 <h4>Selected Account: {this.props.account.accountNumber}</h4> 
                <div className='form-field'>
                    <input type="text" placeholder='ammount' name='ammount' value={this.state.value} onChange={this.handleChange} />
                </div>
                <button className='updateBalaceButton' onClick={this.handleWithdraw} >Withdraw</button> 
                <button className='updateBalaceButton' onClick={this.handleDeposit}>Deposit</button>
            
            </div>

        )
    }
}

export default SelectedAccount;