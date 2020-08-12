import React from 'react'
import jsonp from 'jsonp'
import {Row, Col} from 'antd'
import Utils from '../../utils/utils'
import 'antd/dist/antd.css'
import './header.css'

class Header extends React.Component {
    state = {
        sysTime: '',
        dayPictureUrl: '',
        dayWeather: ''
    }

    componentWillMount() {
        this.getWeatherData()
        this.setNowDate()
    }

    setNowDate(){
        let sysTime
        setInterval(() => {
            sysTime = Utils.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)
    }

    getWeatherData = () => {
        const url = 'http://api.map.baidu.com/telematics/v3/weather?location=深圳&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        jsonp(url, null, (err, data) => {
            if (err) throw new Error(err.message)
            const {dayPictureUrl, weather} = data.results[0].weather_data[0]
            this.setState({
                dayPictureUrl,
                dayWeather: weather
            })
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，MessiStats</span>
                        <a href="/">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=''/>
                        </span>
                        <span className="weater-detail">{this.state.dayWeather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header