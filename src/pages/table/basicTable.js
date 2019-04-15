import React from 'react'
import { Card, Table } from "antd"
import axios from 'axios'

export default class BasicTable extends React.Component {

    state={
        dataSource2:[]
    }

    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: '马云',
                sex: '男',
                state: '富裕',
                interest: '装逼',
                birthday: '2018-05-06',
                address: '杭州阿里',
                time: '01:20:00'
            },
            {
                id: '1',
                userName: '马化腾',
                sex: '男',
                state: '普通',
                interest: '装逼',
                birthday: '2019-01-01',
                address: '深圳腾讯',
                time: '09:30:00'
            },
            {
                id: '2',
                userName: '刘强东',
                sex: '男',
                state: '贫穷',
                interest: '装逼',
                birthday: '2017-12-23',
                address: '北京京东',
                time: '11:23:02'
            }
        ]
        this.setState({
            dataSource
        })
        this.request();
    }
    // 动态获取mock数据
    request = () =>{
        let baseUrl = 'https://www.easy-mock.com/mock/5cb4835b462c851178e00eb5/api'
        axios.get(baseUrl + '/table/list').then((res)=>{
            if(res.status == '200' && res.data.code == 0){
                this.setState({
                    dataSource2: res.data.result
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
            </div>
        );
    }
}