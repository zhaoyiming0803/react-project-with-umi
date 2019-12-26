import React from 'react'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      count: 1
    }
  }

  /**
   * 组件挂载后自动调用
   */
  componentDidMount () {
    console.log('componentDidMount')
  }

  /**
   * 组件卸载前自动调用
   */
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  /**
   * 数据即将改变
   */
  componentWillUpdate () {
    console.log('componentWWillUpdate')
  }

  /**
   * UI 每次更新后调用（即组件挂载成功以后，每次调用 render 方法，都会触发这个方法）。
   */
  componentDidUpdate () {
    console.log('componentDidUpdate')
    console.log(arguments)
  }

  /**
   * 每当this.props或this.state有变化，【在render方法执行之前，就会调用这个方法】。
   * 该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false，UI 就不会更新，默认返回true。
   * 组件挂载时，render方法的第一次执行，不会调用这个方法。 
   * @param {object} nextProps 
   * @param {object} nextState 
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps: ', nextProps)
    console.log('nextState: ', nextState)
    return true
  }

  /**
   * 该方法在每次 DOM 更新之前调用，用来收集 DOM 信息。它返回的值，将作为参数传入componentDidUpdate()方法。
   */
  // getSnapshotBeforeUpdate (prevProps, prevState) {
  //   console.log('call getSnapshotBeforeUpdate, and dom update')
  //   return 123
  // }

  /**
   * 
   * @param {*} props 
   * @param {*} state 
   */
  // static getDerivedStateFromProps(props, state) {
  //   // Footer uses getDerivedStateFromProps() but also contains the following legacy lifecycles: componentWillUpdate
  //   if (1 === 2) {
  //     return {
  //       a: 1,
  //       b: 2
  //     }
  //   }

  //   // No state update necessary
  //   return null
  // }

  render () {
    console.log('call render function')
    return (
      <div>
        <div>{this.props.children && this.props.children.map((item, index) => <div key={index}>{item}</div>)}</div>
        <div>num: {this.state.count}</div>
        <button onClick={() => this.add()}>加1</button>
      </div>
    )
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Footer