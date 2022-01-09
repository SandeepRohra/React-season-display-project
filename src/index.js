import React, { Component } from 'react'
import reactDom from 'react-dom'
import SeasonDisplay from './components/Season-display'
import Buffering from './components/Buffer'
class App extends Component {
  // We initalise state here  but there is also a alternate way which is some what large and complicated
  //Reffer to reference and rough work convert in inyto jsx file for more clearity
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //After that we always use this.setState
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }),
    )
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h1>Error:{this.state.errorMessage}</h1>
        </div>
      )
    }
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      )
    } else {
      return <Buffering message="Please allow location acsess to continue" />
    }
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

reactDom.render(<App />, document.getElementById('root'))
