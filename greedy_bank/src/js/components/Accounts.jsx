import React from 'react'

class Accounts extends React.Component {
    constructor(props){
        super(props);
        this.state = {accounts: []}
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/accounts')
        .then((response) => response.json())
          .then((responseJson) => {
            this.setState({accounts: responseJson.data});
      })
    }

    render() {

        console.log(this.state.accounts)
        const tableRow = (accounts) => {
            return accounts.map(account => {
              return  (<tr>
                    <td>{account.accountNumber}</td>
                    <td>{account.createdDate}</td>
                    <td>{account.balance}</td>
                </tr>)
            }) 
        }
 

        return (
            <div className="flex-container">
               <div className="form-row">
                    <h1>Greedy Bank</h1>
                    <hr />

                    <div>
                        <p>My Account</p>
                        <p>Total holdings</p>
                    </div>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Account Number</th>
                                    <th>Created Date</th>
                                    <th>Balance</th>

                                </tr>
                            </thead>
                            <tbody>
                                {tableRow(this.state.accounts)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
export default Accounts;

