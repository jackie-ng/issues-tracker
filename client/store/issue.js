import axios from 'axios'

//ACTION TYPES

const GET_ISSUES = 'GET_ISSUES'
const GET_ISSUE = 'GET_ISSUE'
const SUBMIT_ISSUE = 'SUBMIT_ISSUE'
const DELETE_ISSUE = 'DELETE_ISSUE'
/**
 * INITIAL STATE
 */
const initialState = {
  issues: [],
  issue: {}
}

//ACTION CREATORS
const getAllIssues = issues => ({
  type: GET_ISSUES,
  issues
})

const submitNewIssue = issue => ({
  type: SUBMIT_ISSUE,
  issue
})

const getIssue = issue => ({
  type: GET_ISSUE,
  issue
})

const deleteIssue = issue => ({
  type: DELETE_ISSUE,
  issue
})
//THUNK CREATORS
export const getAllIssuesThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/issues')
      dispatch(getAllIssues(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getIssueThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/issues/${id}`)
      dispatch(getIssue(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const submitNewIssueThunk = issue => {
  return async dispatch => {
    try {
      const {data} = (await axios.post('/api/issues', issue))
      dispatch(submitNewIssue(data))
    } catch (error) {
      console.log('Uh Oh! There is something wrong submitting issue.');
      console.log(error)
    }
  }
}

export const deleteIssueThunk = id => {
  return async dispatch => {
    try {
      const { data: deleted } = (await axios.delete(`/api/issues/${id}`))
      dispatch(deleteIssue(deleted))
    } catch (error) {
      console.log('Uh Oh! There is something wrong deleting issue.');
      console.log(error);
    }
  }
}
//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {...state, issues: action.issues}
    case GET_ISSUE:
      return {...state, issue: action.issue}
    case SUBMIT_ISSUE:
      return {...state, issue: action.issue}
    case DELETE_ISSUE:
      return {...state, issue: state.filter(({id}) => id !== action.issue)}
    default:
      return state
  }
}
