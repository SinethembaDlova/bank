import React from 'react'
import fetchAccounts from '../api/fetchAccounts';

class Accounts extends React.Component {

    render() {

        const data = fetchAccounts();
        console.log(data);

        // data.map(account => {
        //     console.log(account)});

        const tableRow = () => { 
            data.map(account => {
            return (
                <tr>
                    <td>{account.accountNumber}</td>
                    <td>{account.balance}</td>
                </tr>
                )
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
                            <tr>
                                <th>Account Number</th>
                                <th>Balance</th>
                            </tr>
                            { tableRow }
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
export default Accounts;