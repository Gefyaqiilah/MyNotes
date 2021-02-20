const initializeState = {
  todo: []
}

function todo (state = initializeState, action) {
  switch(action.type) {
    case 'SET_TODO': return {
      ...state,
      todo: action.payload
    }
    case 'ALERT' : return alert(action.payload)

    default: return state
  }}

export default todo