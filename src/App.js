import { Component } from 'react'

import ImageMapEditor from './editors/imagemap/ImageMapEditor'

class App extends Component {
  renderEditor = () => {
    return <ImageMapEditor/>
  }

  render() {
    return (
      <div className="rde-content">{this.renderEditor()}</div>
    )
  }
}

export default App;
