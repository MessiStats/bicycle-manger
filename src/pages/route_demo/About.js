import React from 'react'

class About extends React.Component{
    render() {
        return (
            <div>
                动态路由:{this.props.match.params.id}
            </div>
        )
    }
}

export default About