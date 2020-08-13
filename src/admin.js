import React from 'react'
import {Row, Col} from 'antd'

// import Home from './pages/home/home'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import NavLeft from './components/NavLeft/navLeft'
import 'antd/dist/antd.css'
import './components/style/common.less'

class Admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        {/*<Home/>*/}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}

export default Admin