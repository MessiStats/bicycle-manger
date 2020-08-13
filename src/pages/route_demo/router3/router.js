import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Info from './info'
import Topic from '../Topic'
import Main from '../Main'
import About from '../About'
import NoMatch from './NoMatch'

class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Info>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:id" exact component={About}/>
                            </Main>
                        }>
                        </Route>
                        <Route path="/about" exact component={About}/>
                        <Route path="/topics" exact component={Topic}/>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Info>
            </HashRouter>
        )
    }
}

export default IRouter