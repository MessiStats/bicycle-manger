import React from 'react'
import {Row, Col} from 'antd'

import Footer from './components/Footer/footer'
import Header from './components/Header/Header'

class Admin extends React.Component {
    render() {
        return (
            <Row>
                <Col span="3">Left</Col>
                <Col span="21">Right</Col>
            </Row>
        )
    }
}

export default Admin