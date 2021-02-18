const initializeState = {
  notes: []
}

function notes (state = initializeState, action) {
  switch(action.type) {
    case 'ADD_NOTES': return {
      ...state
    }
    case 'ALERT' : return alert(action.payload)

    default: return state
  }}

export default notes