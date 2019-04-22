import React from 'react'
import { Card, Table, Button, Modal, message } from "antd"
import axios from './../../axios/index';
import Util from './../../utils/utils';

export default class HighTable extends React.Component {

    state = {

    }

    params = {
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    handleChange =(pagination, filters, sorter) =>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    // 删除操作
    handleDelete = (item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request()
            }
        })
    }

    // 动态获取mock数据
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                    pagination: Util.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: '序号',
                width:80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width:80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width:80,
                dataIndex: 'sex'
            },
            {
                title: '状态',
                width:80,
                dataIndex: 'state'
            },
            {
                title: '爱好',
                width:80,
                dataIndex: 'interest'
            },
            {
                title: '生日',
                width:80,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                dataIndex: 'time'
            }
        ]

        const columns2 = [
            {
                title: '序号',
                width:80,
                fixed:'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width:80,
                fixed:'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width:80,
                fixed:'left',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                width:80,
                dataIndex: 'state'
            },
            {
                title: '爱好',
                width:80,
                dataIndex: 'interest'
            },
            {
                title: '生日',
                width:80,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width:80,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                dataIndex: 'time'
            }
        ]

        const columns3 = [
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
                title: '年龄',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                sortOrder:this.state.sortOrder
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

        const columns4 = [
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
                title: '年龄',
                dataIndex: 'age',
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
                title: '操作',
                render:(text, item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:1610}}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}  />
                </Card>
            </div>
        )
    }
}