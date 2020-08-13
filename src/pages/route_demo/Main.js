import React from 'react'
import {Link} from 'react-router-dom'

class Main extends React.Component {
    render() {
        return (
            <div>
                this is Main2
                <br/>
                <Link to='/main/111'>嵌套路由1</Link>
                <br/>
                <Link to='/main/222'>嵌套路由2</Link>
                {this.props.children}
            </div>
        )
    }
}

export default Main