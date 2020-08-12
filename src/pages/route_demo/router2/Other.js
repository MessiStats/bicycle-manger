import React from 'react'
import {Link} from 'react-router-dom'

class Other extends React.Component {
    render() {
        console.log(this.props)
        return (
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
                {this.props.children}
            </div>
        )
    }
}

export default Other