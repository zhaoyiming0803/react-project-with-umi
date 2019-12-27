import React from 'react'
import { Card } from 'antd'

const style = {
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [
        { title: '操作一title', description: '操作一description' },
        { title: '操作二title', description: '操作二description' }
      ],
      currentTab: 0
    }
  }

  switchTab(currentTab) {
    this.setState({
      currentTab
    })
  }

  render () {
    return (
      <div>
        <div>{this.props.name}</div>
        <Card style={style} actions={[ <a onClick={() => this.switchTab(0)}>操作一</a>, <a onClick={() => this.switchTab(1)}>操作二</a> ]}>
          {this.state.cards.map((card, index) => {
            return index === this.state.currentTab && <Card.Meta
              avatar={<img
                alt=""
                style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              />}
              key={card.title}
              title={card.title}
              description={card.description}
            ></Card.Meta>
          })}
        </Card>
      </div>
    )
  }
}

export default Content