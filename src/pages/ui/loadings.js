import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'

import './ui.less'

export default class Loadings extends React.Component {
    render() {
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React后台系统"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到React后台系统"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React后台系统"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}