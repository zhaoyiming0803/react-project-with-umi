import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { connect } from 'dva'
import styles from './Login.less'
import { router } from 'umi'

const FormItem = Form.Item
const namespace = 'auth'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      accountType: 'partner'
    }
    this.hasLogin()
  }

  render () {
    const { form: { getFieldDecorator } } = this.props
    return (
      <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>后台管理系统</div>
          <Form onSubmit={(e) => this.onSubmit(e)}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [ { required: true, message: 'Please input your username!' } ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [ { required: true, message: 'Please input your password!' } ],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="password"
                />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" block htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }

  hasLogin () {
    try {
      const {Uid, Token} = JSON.parse(window.localStorage.userInfo)
      if (Uid && Token) {
        router.replace('/')
      }
    } catch (e) {
      window.localStorage.removeItem('userInfo')
    }
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, formData) => {
      if (err) {
        return console.log(err)
      }
      await this.props.dispatch({
        type: `${ namespace }/login`,
        payload: {
          ...formData,
          accountType: this.state.accountType
        }
      })
      router.replace('/')
    })
  }
}

export default connect()(Form.create()(LoginForm))