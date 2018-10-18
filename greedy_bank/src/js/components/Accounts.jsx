import React from 'react'

class Accounts extends React.Component {
    constructor(props){
        super(props);
        this.state = {accounts: []}
    }

    componentWillMount = () => {
        fetch('http://localhost:5000/accounts')
        .then((response) => response.json())
          .then((responseJson) => {
            this.setState({accounts: responseJson.data});
      })
    }

    render() {
        const tableRow = (accounts) => {
            return accounts.map(account => {
              return  (<tr>
                    <td>{account.accountNumber}</td>
                    <td>{account.createdDate.substring(0,10)}</td>
                    <td>R{account.balance}</td>
                    <button className='selectButton'> select</button>
                </tr>)
            }) 
        }
 

        return (
            <div className="flex-container">
               <div className="form-row">
                    <h1>Greedy Bank</h1>
                    <hr />

                    <div className='wrapper'>
                        <p className='myAccount'>My Accounts</p>
                        <p className='totalHoldings'>Total holdings:</p>
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

