import React from 'react'
import {Card, Spin, Alert} from 'antd'
import 'antd/dist/antd.css'

class Loading extends React.Component {
    render() {
        return (
            <div className="admin currency">
                <Card title="Spin study">
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

export default Loading