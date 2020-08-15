import React from 'react'
import {Card, Button, notification} from 'antd'
import {SmileOutlined} from '@ant-design/icons'

class Notice extends React.Component {

    openNotification = (type, placement) => {
        if (placement) {
            notification.config({
                placement
            })
        }
        notification[type]({
            message: '发工资了',
            description: '上个月考勤22天，迟到12天，实发工资250，请笑纳'
        })
    }

    customOpenNotification = () => {
        notification.open({
            message: '发工资了',
            description: '上个月考勤22天，迟到12天，实发工资250，请笑纳',
            icon: <SmileOutlined style={{color: '#108ee9'}}/>
        })
    }

    render() {
        return (
            <div className="admin currency">
                <Card title="带有图标的通知提示框">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="切换位置提示框">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
                    <Button type="primary"
                            onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>Error</Button>
                </Card>
                <Card title="自定义图标提示框">
                    <Button type="primary" onClick={this.customOpenNotification}>Open the notification box</Button>
                </Card>
            </div>
        )
    }
}

export default Notice