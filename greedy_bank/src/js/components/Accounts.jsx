import React from 'react';
import { connect } from 'react-redux';
import fetchAccounts from '../redux/actions/fetchAccounts';
import SelectedAccount from './SelectedAccount';

class Accounts extends React.Component {

    constructor(props) {
        super(props)
        this.state = { accouuntDetails: null }
    }

    componentDidMount = () => {
        fetch('http://localhost:5000/accounts')
            .then((response) => response.json())
            .then((responseJson) => {
                setTimeout(() => this.props.fetchAccounts(responseJson.data), 2000);
            })
    }


    handleClick = (account_number) => {
        const selectedAccount = this.props.accounts.find(account =>
            account.accountNumber === account_number
        )

        if (selectedAccount) {
            this.setState({
                accouuntDetails: selectedAccount
            });
        }
    }


    render() {
        const tableRow = (accounts) => {
            return accounts.map(account => {
                return (<tr key={account.accountNumber}>
                    <td>{account.accountNumber}</td>
                    <td>{account.createdDate.substring(0, 10)}</td>
                    <td>R{account.balance}</td>
                    <button className='selectButton' onClick={() => this.handleClick(account.accountNumber)} > select</button>
                </tr>)
            })
        }

        // onClick={ this.handleClick(account._id) }
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
                        {this.state.accouuntDetails && <SelectedAccount account={this.state.accouuntDetails}/>}
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

