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

            </div>
        )
    }
}