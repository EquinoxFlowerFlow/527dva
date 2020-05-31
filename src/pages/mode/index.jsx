import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { connect } from 'dva'

@connect(({ mode }) => {
  return {
    visible: mode.visible
  }
})
export default class Mode extends Component {

  handleCancel = e => {
    this.props.dispatch({
      type: 'mode/show',
      payload: false
    })
  }

  onFinish = values => {
    this.props.dispatch({
      type: 'home/getAdd',
      payload: values
    })
    this.props.dispatch({
      type: 'mode/show',
      payload: false
    })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  render() {
    const { visible } = this.props
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: '请输入姓名' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: '请输入年龄' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Msg"
              name="msg"
              rules={[{ required: true, message: '请输入地址' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                添加
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}





