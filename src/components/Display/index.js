import {Component} from 'react'
import './index.css'

class Display extends Component {
  state = {show: true, searchInput: ''}

  changeText = event => {
    this.setState({searchInput: event.target.value})
  }

  changeBtn = () => {
    this.setState({show: false})
  }

  editBtn = () => {
    this.setState({show: true})
  }

  render() {
    const {show, searchInput} = this.state
    return (
      <div className="cont">
        <div className="inside">
          <h1 className="heading">Editable Text Input</h1>
          <div className="search">
            {show ? (
              <input
                type="search"
                value={searchInput}
                onChange={this.changeText}
              />
            ) : (
              <p>{searchInput}</p>
            )}
            {show ? (
              <button type="button" className="btn" onClick={this.changeBtn}>
                Save
              </button>
            ) : (
              <button type="button" className="btn" onClick={this.editBtn}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Display
