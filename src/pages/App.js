import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

class App extends React.Component {
  render () {
    return (
      // DOM 树结构，只能有一个 root 节点
      <div>
        <Header name="Header" />
        <Content name="Content" />
        <Footer name="Footer">
          <div>123</div>
          <div>456</div>
        </Footer>
      </div>
    )
  }
}

export default App