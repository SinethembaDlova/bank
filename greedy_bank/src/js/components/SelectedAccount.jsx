import React from 'react';


class SelectedAccount extends React.Component{ 

    render(){ 
        return (

            <div className="flex-container">
                <div>
                    <div className="form-row">
                        <h4>Selected Account:</h4> 
                    </div>
                    <div className="form-row">
                        <div className='form-field'>
                            <input type="text" placeholder='ammount'/>
                            <button className='button'>Withdraw</button> 
                            <button className='button'>Deposit</button>
                         </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SelectedAccount;