import React from 'react'
import { Card, Button } from 'antd'
import { connect } from 'dva'

const namespace = 'business'

const mapStateToProps = state => {
  const cardList = state[namespace].cardList
  return {
    cardList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      }
      dispatch(action)
    },
    onDidMount: () => {
      dispatch({
        type: `${namespace}/getCardList`
      });
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class AddBusiness extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.onDidMount()
  }

  render () {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>setup: {card.setup}</div>
                <div>
                  <strong>punchline: {card.punchline}</strong>
                </div>
              </Card>
            )
          })
        }
        <Button onClick={() => this.addNewCard()}>添加卡片</Button>
      </div>
    )
  }

  addNewCard () {
    const now = Date.now()
    this.props.onClickAdd({
      id: now,
      setup: 'setup' + now,
      punchline: 'punchline' + now
    })
  }
}

export default AddBusiness