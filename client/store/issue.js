import axios from 'axios'

//ACTION TYPES

const GET_ISSUES = 'GET_ISSUES'

/**
 * INITIAL STATE
 */
const initialState = {
  issues: []
}

//ACTION CREATORS
const getAllIssues = issues => ({
  type: GET_ISSUES,
  issues
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

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {...state, issues: action.issues}
    default:
      return state
  }
}
