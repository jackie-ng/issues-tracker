import React from 'react'
import {connect} from 'react-redux'
import {submitNewIssueThunk} from '../store'
import Axios from 'axios'
import {Link} from 'react-router-dom'

class SubmitIssue extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      severity: '',
      imageUrl: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.submitNewIssueThunk({
      name: this.state.name,
      description: this.state.description,
      severity: this.state.severity,
      imageUrl: this.state.imageUrl
    })
  }
  handleChange(event) {
    event.preventDefault()
    const value = event.target.value
    this.setState({
      [event.target.name]: value
    })
  }

  render() {
    console.log(this.state)
    const {handleChange, handleSubmit} = this
    const {name, description, imageUrl, severity} = this.state
    return (
      <div>
        <h2>Submit New Issue</h2>
        <div>
          {' '}
          {
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                required
              />
              <label htmlFor="description">Description: </label>
              <input
                onChange={handleChange}
                type="integer"
                name="description"
                value={description}
                required
              />
              <label htmlFor="severity">Severity: </label>
              <input
                onChange={handleChange}
                type="text"
                name="severity"
                value={severity}
                required
              />
              <label htmlFor="imageUrl">imageUrl: </label>
              <input
                onChange={handleChange}
                type="text"
                name="imageUrl"
                value={imageUrl}
                required
              />
              <button className="btn" type="submit">
                Submit New Issue
              </button>
            </form>
          }
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    submitNewIssueThunk: issue => dispatch(submitNewIssueThunk(issue))
  }
}
export default connect(null, mapDispatch)(SubmitIssue)

/**ALTERNATIVE */
// class SubmitIssue extends React.Component {
//   constructor(){
//       super()
//       this.state = {
//           name: '',
//           description: '',
//           severity: '',
//           imageUrl: ''
//       }
//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     event.preventDefault()
//       this.setState({
//           [event.target.name]: event.target.value
//       })
//   }
//   async handleSubmit(event) {
//       event.preventDefault()
//      await Axios.post('/api/issues', {
//           name: this.state.name,
//           description: this.state.description,
//           severity: this.state.severity,
//           imageUrl: this.state.imageUrl
//       })
//       this.setState({
//           name: '',
//           description: '',
//           severity: '',
//           imageUrl: ''
//       })
//   }

//   render() {
//       const { name, description, imageUrl, severity } = this.state
//       const { handleChange, handleSubmit } = this
//       return (
//           <div>
// <div> {
//       <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name: </label>
//           <input onChange={handleChange} type="text" name="name" value={name} required></input>
//           <label htmlFor="description">Description: </label>
//           <input onChange={handleChange} type="integer" name="description" value={description} required ></input>
//           <label htmlFor="severity">Severity: </label>
//           <input onChange={handleChange} type="text" name="severity" value={severity} required ></input>
//           <label htmlFor="imageUrl">imageUrl: </label>
//           <input onChange={handleChange} type="text" name="imageUrl" value={imageUrl} required ></input>
//           <button className="btn" type="submit">Submit New Issue</button>
//       </form>}
// </div>
//           </div>
//       );
//   }
// }

// export default SubmitIssue;
