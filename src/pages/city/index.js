import React from 'react'
import { Card, Table, Button, Form, Select } from "antd"
import axios from './../../axios/index';
import Util from './../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends React.Component {

    componentDidMount(){

    }
   
    // 开通城市
    handleOpenCity = () =>{

    }
    // 默认请求我们的接口数据
    requestList = ()=>{
    }


    render(){
        const columns = [
            {
                title:'城市ID',
                dataIndex:'id'
            },
            {
                title:'城市名称',
                dataIndex:'name'
            },
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                    <Card>
                        <Button type="primary" onClick={this.handleOpenCity}></Button>
                    </Card>
                </Card>
                <Table 
                columns={columns}
                dataSource={this.state.list}
                pagination={this.state.pagination }
                />
            </div>
        )
    }
}