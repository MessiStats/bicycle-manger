import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'

class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/topics" exact component={Topic}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Home