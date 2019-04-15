import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'

import './ui.less'

const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {

    newTabIndex = 0;
    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: '一蓑烟雨任平生',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: '一树梨花压海棠',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: '一曲高歌诉离殇',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    callback = (key) => {
        message.info("HI, 当前页签是：" + key)
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
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
        this.setState({ panes, activeKey });
    }


    render() {
        return (
            <div>
                <Card title="Tab标签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">一蓑烟雨任平生</TabPane>
                        <TabPane tab="Tab 2" key="2">一树梨花压海棠</TabPane>
                        <TabPane tab="Tab 3" key="3">一曲高歌诉离殇</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的标签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">一蓑烟雨任平生</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">一树梨花压海棠</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">一曲高歌诉离殇</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab卡片式标签" className="card-wrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panes) => {
                                return <TabPane
                                    tab={panes.title}
                                    key={panes.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}