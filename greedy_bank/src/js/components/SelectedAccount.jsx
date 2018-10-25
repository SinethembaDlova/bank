import React from 'react';
import { connect } from 'react-redux';
import fetchAccounts from '../redux/actions/fetchAccounts';

class SelectedAccount extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {ammount: 0}
    }

    updateStore = () => {
        fetch('http://localhost:5000/accounts')
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.fetchAccounts(responseJson.data);
        });
    }

    handleWithdraw = () => {
        const ammount = {"ammount": -this.state.ammount};
        console.log(ammount);
        console.log(this.props.account._id);
        if(this.state.ammount > 0) {
            fetch('http://localhost:5000/accounts/' + this.props.account._id, {
                method: 'POST',
                body: JSON.stringify(ammount),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            .then(responce => responce.json())
            .then(data => {
                    this.updateStore(); 

                    this.setState({
                       ammount: 0
                    });
            });
           
        }
    }

    handleDeposit = () => {
        const ammount = {"ammount": this.state.ammount};
        console.log(ammount);
        console.log(this.props.account._id);
        if(this.state.ammount > 0) {
            fetch('http://localhost:5000/accounts/' + this.props.account._id, {
                method: 'POST',
                body: JSON.stringify(ammount),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            .then(responce => responce.json())
            .then(data => {
                    this.updateStore(); 

                    this.setState({
                       ammount: 0
                    });
            });
           
        }
    }

    handleChange = (event) => {
        this.setState({ammount: Number(event.target.value)
        }); 
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

export default connect(null, { fetchAccounts })(SelectedAccount);