import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login/login'
import Buttons from './pages/ui/buttons/button'
import Loadings from './pages/ui/loadings/loadings'
import Notice from './pages/ui/notice/notice'
import Modals from './pages/ui/modals/modals'
import NoMatch from './pages/nomatch/nomatch'

class Irouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons}/>
                                <Route path='/admin/ui/modals' component={Modals}/>
                                <Route path='/admin/ui/loadings' component={Loadings}/>
                                <Route path='/admin/ui/notification' component={Notice}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}

export default Irouter