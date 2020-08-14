import React from 'react'
import {Button, Card, Modal} from 'antd'
import 'antd/dist/antd.css'

class Modals extends React.Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        ModalText: 'Content of the modal',
        Asyncvisible: false,
        confirmLoading: false,
        visible: false,
        loading: false,
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认',
            content: '你真的会 react 了吗',
            onOk() {
                console.log('ok')
            },
        })
    }

    handleCancel = () => {
        this.setState({
            showModal1: false,
            showModal2: false,
            showModal3: false
        })
    }

    handleAsyncCancel = () => {
        console.log('Clicked cancel button')
        this.setState({
            Asyncvisible: false,
        })
    }

    showAsyncModal = () => {
        this.setState({
            Asyncvisible: true
        })
    }

    handleAsyncOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true
        })
        setTimeout(() => {
            this.setState({
                Asyncvisible: false,
                confirmLoading: false
            })
        }, 2000)
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({loading: false, visible: false})
        }, 3000)
    }

    handleCancel1 = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const {ModalText, Asyncvisible, confirmLoading, visible, loading} = this.state
        return (
            <div>
                <Card title="基础模态框">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Card title="异步关闭模态框">
                    <Button type="primary" onClick={this.showAsyncModal}>Confirm</Button>
                </Card>
                <Card title="自定义页脚">
                    <Button type="primary" onClick={this.showModal}>Confirm</Button>
                </Card>
                <Modal title="Open Modal" visible={this.state.showModal1}
                       onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Modal title="Basic Modal" visible={this.state.showModal2}
                       onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Modal title="20px to Top" visible={this.state.showModal3}
                       onCancel={this.handleCancel} style={{top: 20}}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                {/* 异步关闭模态框 */}
                <Modal title={ModalText} visible={Asyncvisible} onOk={this.handleAsyncOk}
                       onCancel={this.handleAsyncCancel} confirmLoading={confirmLoading}>
                    <p>{ModalText}</p>
                </Modal>
                {/* 自定义页脚模态框 */}
                <Modal title="Title" visible={visible} onOk={this.handleOk}
                       onCancel={this.handleCancel1} confirmLoading={confirmLoading}
                       footer={[
                           <Button key="back" onClick={this.handleCancel}>Return</Button>,
                           <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                               Submit
                           </Button>,
                       ]}>
                    <p>{ModalText}</p>
                </Modal>
            </div>
        )
    }
}

export default Modals