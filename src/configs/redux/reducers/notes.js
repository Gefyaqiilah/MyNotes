const initializeState = {
  notes: []
}

function notes (state = initializeState, action) {
  switch(action.type) {
    case 'ADD_NOTES': return {
      ...state
    }
    default: return state
  }}

export default notes