import React from 'react';
import { connect } from 'react-redux';
import fetchAccounts from '../redux/actions/fetchAccounts';

class Accounts extends React.Component {
    componentDidMount = () => {
        fetch('http://localhost:5000/accounts')
            .then((response) => response.json())
            .then((responseJson) => {
                setTimeout(() => this.props.fetchAccounts(responseJson.data), 5000);
            })
    }

    render() {
        const tableRow = (accounts) => {
            return accounts.map(account => {
                return (<tr key={account.accountNumber}>
                    <td>{account.accountNumber}</td>
                    <td>{account.createdDate.substring(0, 10)}</td>
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
                                {tableRow(this.props.accounts)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    accounts: state.accounts
});

export default connect(mapStateToProps, { fetchAccounts })(Accounts);

