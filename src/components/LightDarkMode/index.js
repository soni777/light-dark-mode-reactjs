import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lights: false}

  onClickButton = () => {
    this.setState(prevState => ({
      lights: !prevState.lights,
    }))
  }

  getButtonText = () => {
    const {lights} = this.state
    return lights ? 'Dark Mode' : 'Light Mode'
  }

  getBackgroundColor = () => {
    const {lights} = this.state
    return lights ? 'light' : 'dark'
  }

  render() {
    const background = this.getBackgroundColor()
    const text = this.getButtonText()

    return (
      <div className="container">
        <div className={`${background} card`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
