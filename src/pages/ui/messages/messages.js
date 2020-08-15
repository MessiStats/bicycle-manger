import React from 'react'
import {Card, Button, message} from 'antd'

class Message extends React.Component {

    showMessage = (type) => {
        message[type]('This is a normal message')
    }

    showDelayedMessage = (type) => {
        message[type]('This is a normal message', 5)
    }

    render() {
        return (
            <div className="admin currency">
                <Card title="全局提示框">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
                <Card title="全局提示框延时修改">
                    <Button type="primary" onClick={() => this.showDelayedMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showDelayedMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.showDelayedMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.showDelayedMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showDelayedMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}

export default Message