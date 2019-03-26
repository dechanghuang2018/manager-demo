import React from 'react'
import { Row, Col, Button } from 'antd';

export default class Admin extends React.Component{
    render(){
        return (
            <div>
            <Row>
                <Col span={3}>
                Left
                </Col>
                <Col span={21}>
                Right
                </Col>
            </Row>
            <Button type="primary">提交</Button>
            </div>
        );
    }
}