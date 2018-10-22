import React from 'react';


class SelectedAccount extends React.Component{ 

    render(){ 
        return (

            <div className="flex-container">
                <div>
                <hr />
                    <div className="form-row">
                        <h4>Selected Account:</h4> 
                    </div>
                    <div className="form-row">
                        <form action="" className='form-field'>
                        <input type="text" placeholder='ammount' name='ammount'/>
                            <button className='updateBalaceButton' >Withdraw</button> 
                            <button className='updateBalaceButton'>Deposit</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default SelectedAccount;