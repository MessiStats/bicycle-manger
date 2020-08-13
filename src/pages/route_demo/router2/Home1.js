import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Other from './Other'
import Main from "../Main"
import About from "../About"
import Topic from "../Topic"

class Home1 extends React.Component {
    render() {
        return (
            <HashRouter>
                <Other>
                    <Route path="/main"  render={() =>
                        <Main>
                            <Route path="/main/a" exact component={About}/>
                        </Main>
                    }>
                    </Route>
                    <Route path="/about" exact component={About}/>
                    <Route path="/topics" exact component={Topic}/>
                </Other>
            </HashRouter>
        )
    }
}   

export default Home1