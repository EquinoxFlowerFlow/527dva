import React, { Component } from 'react';
import { connect } from 'dva'
import { Table, Space, Button } from 'antd';
import Mode from '@/pages/mode'

@connect(({home}) => {
  return {
    data: home.data,
    status: home.status
  }
})
export default class Home extends Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'home/getList',
    })
  }

  add = () => {
    this.props.dispatch({
      type: 'mode/show',
      payload: true
    })
 
  }

  dele = (record) => {
    this.props.dispatch({
      type: 'home/getDele',
      payload: record
    })
  }

  update = (record) => {
    
  }
  render() {
    const { data } = this.props
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Msg',
        dataIndex: 'msg',
        key: 'msg',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" onClick={() => this.add(record)} >添加</Button>
            <Button type="primary" onClick={() => this.update(record)} >编辑</Button>
            <Button type="primary" danger onClick={() => this.dele(record)} >删除</Button>
          </Space>
        ),
      },
    ];
    
    
    return (
      <div>
        <Mode />
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey={(v) => v.id}
        />
      </div>
    );
  }
}

