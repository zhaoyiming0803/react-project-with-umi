import React from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { connect } from 'dva'

const namespace = 'coupon'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
}

const mapStatesToProps = state => {
  const { couponList } = state[ namespace ]
  return {
    couponList
  }
}

class CouponForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    console.log('couponList: ', this.props.couponList)
  }

  render () {
    const { visible } = this.state
    const { form: { getFieldDecorator } } = this.props

    return (
      <div>
        <Form {...formItemLayout}>
          <FormItem label="名称" >
            {getFieldDecorator('name', {
              rules: [ { required: true } ],
            })(<Input />)}
          </FormItem>
          <FormItem label="描述">
            {getFieldDecorator('desc')(<Input />)}
          </FormItem>
          <FormItem label="链接">
            {getFieldDecorator('url', {
              rules: [ { type: 'url' } ],
            })(<Input />)}
          </FormItem>
          <FormItem style={{textAlign: 'center'}}>
            <Button style={{marginRight: '10px'}} onClick={() => this.resetForm()}>重置</Button>
            <Button type="primary" onClick={() => this.submit()}>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

  resetForm () {
    this.props.form.resetFields()
  }

  submit () {
    console.log('props: ', this.props)

    this.props.form.validateFieldsAndScroll((err, formData) => {
      if (!err) {
        console.log('Received values of form: ', formData);
        this.props.dispatch({
          type: `${ namespace }/addCoupon`,
          payload: formData
        })
      }
    })
  }
}

export default connect(mapStatesToProps)(Form.create()(CouponForm))
