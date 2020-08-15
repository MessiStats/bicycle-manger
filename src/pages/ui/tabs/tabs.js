import React from 'react'
import {Card, Tabs, Button} from 'antd'
import {AndroidOutlined, AppleOutlined, WindowsOutlined, GooglePlusOutlined, WechatOutlined} from '@ant-design/icons'
import './tabs.less'

const {TabPane} = Tabs

class Tab extends React.Component {
    panes = [
        {title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1'},
        {title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2'},
    ]

    newTabIndex = 0

    state = {
        activeKey: this.panes[0].key,
        panes: this.panes
    }

    handleCallback = (key) => {
        console.log(key)
    }

    onChange = (activeKey) => {
        console.log(activeKey)
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        console.log(targetKey, action)
        this[action](targetKey)
    }

    add = () => {
        const {panes} = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
        this.setState({panes, activeKey});
    }

    remove = (targetKey) => {
        let {activeKey} = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    }

    render() {
        return (
            <div className="admin tabs">
                <Card title="Tab标签" className="tabs">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的标签" className="tabs">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><AndroidOutlined/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><AppleOutlined/>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><WindowsOutlined/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab={<span><GooglePlusOutlined/>Tab 4</span>} key="4">Content of Tab Pane 4</TabPane>
                        <TabPane tab={<span><WechatOutlined/>Tab 5</span>} key="5">Content of Tab Pane 5</TabPane>
                    </Tabs>
                </Card>
                <Card className="tabs">
                    <div style={{marginBottom: 16}}>
                        <Button onClick={this.add} type="primary">ADD</Button>
                    </div>
                    <Tabs hideAdd onChange={this.onChange} activeKey={this.state.activeKey} type="editable-card"
                          onEdit={this.onEdit}>
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key}>
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default Tab