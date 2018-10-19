import React from 'react';
import Login from '.././js/components/Login';
import  Accounts from '.././js/components/Accounts'
import {  BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import SelectedAccount from './components/SelectedAccount';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={ (props) => <Redirect to='/login' { ...props } /> } />
                    <Route path="/login" component={ Login } />
                    <Route path="/accounts" component={ Accounts } />
                    <Route path="/selectedaccount" component= { SelectedAccount } />
                </Switch>
            </Router> 
            
 

        )
    } 
}

export default App;
