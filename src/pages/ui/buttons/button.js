import React from 'react'
import {Card, Button, Tooltip, Radio} from 'antd'
import './button.less'
import 'antd/dist/antd.css'
import {SearchOutlined, DownloadOutlined, ArrowLeftOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons'

class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }

    handleSizeChange = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    render() {
        const {loading, size} = this.state
        return (
            <div className="admin currency">
                <Card title="基础按钮">
                    <Button type="primary">Island</Button>
                    <Button>Island</Button>
                    <Button type="deshed">Island</Button>
                    <Button type="danger">Island</Button>
                    <Button disabled>Island</Button>
                </Card>
                <Card title="图形按钮">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Button shape="circle" icon={<SearchOutlined/>}/>
                    <Button type="primary" icon={<PlusOutlined/>}>添加</Button>
                    <Button type="primary" icon={<DeleteOutlined/>}>删除</Button>
                    <Button type="primary" shape="round" icon={<DownloadOutlined/>} size>
                        Download
                    </Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={loading}/>
                    <Button type="deshed" loading={loading}>点击加载</Button>
                    <Button shape="circle" loading={loading}>Island</Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br/>
                    <br/>
                    <Button type="primary" size={size}>Primary</Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                    <br/>
                    <br/>
                    <Button type="primary" icon={<DownloadOutlined/>} size={size}/>
                    <Button type="primary" shape="circle" icon={<ArrowLeftOutlined/>} size={size}/>
                    <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}/>
                    <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined/>} size={size}>
                        Download
                    </Button>
                </Card>
            </div>
        )
    }
}

export default Buttons