import React from 'react';


class SelectedAccount extends React.Component{ 

    render(){ 
        return (
            <div className="form-row">
                <br/>
                <br/>
                <hr />
                 <h4>Selected Account: {this.props.account.accountNumber}</h4> 
                <form action="" className='form-field'>
                    <input type="text" placeholder='ammount' name='ammount'/>
                    <button className='updateBalaceButton' >Withdraw</button> 
                   <button className='updateBalaceButton'>Deposit</button>
                </form>
            
            </div>

        )
    }
}

export default SelectedAccount;