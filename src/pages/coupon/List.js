import React from 'react'
import { Table, Select, Button, message } from "antd"
import { connect } from 'dva'

const { Option } = Select
const namespace = 'coupon'

const mapStateToProps = state => {
  const { couponList, classify } = state[ namespace ]
  return {
    couponList,
    classify
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCouponList: payload => {
      dispatch({
        type: `${ namespace }/getCouponList`,
        payload
      })
    },
    getCouponClassify () {
      dispatch({
        type: `${ namespace }/getCouponClassify`
      })
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class CouponList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '名称',
          dataIndex: 'coupon_name',
        },
        {
          title: '描述',
          dataIndex: 'coupon_explain',
        },
        {
          title: '已被抢',
          dataIndex: 'coupon_recived_num'
        },
        {
          title: '操作',
          render: (item) => {
            return (
              <div>
                <Button type="danger" icon="delete" shape="circle" onClick={() => this.deleteCoupon()}></Button>
              </div>
            )
          }
        }
      ],
      page: 1,
      classifyId: 1
    }
  }

  componentDidMount () {
    this.props.getCouponClassify()
    this._getCouponList()
  }

  _getCouponList () {
    this.props.getCouponList({
      page: this.state.page,
      classifyId: this.state.classifyId
    })
  }

  render () {
    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="请选择优惠券分类"
          defaultValue={this.state.classifyId}
          onChange={this.changeClassify.bind(this)}
        >
          {this.props.classify.map(item => <Option value={item.id} key={item.id}>{item.classify_name}</Option>)}
        </Select>
        <Table
          columns={this.state.columns}
          dataSource={this.props.couponList}
          rowKey="id"
          pagination={{
            defaultCurrent: 1,
            onChange: this.changePage.bind(this)
          }}
        >
        </Table>
      </div>
    )
  }

  async changePage (page) {
    await this.setState(prevState => {
      return {
        page
      }
    })
    this._getCouponList()
  }

  async changeClassify (classifyId) {
    await this.setState(prevState => {
      return {
        classifyId
      }
    })
    this._getCouponList()
  }

  deleteCoupon () {
    message.info('已删除');
  }
}

export default CouponList