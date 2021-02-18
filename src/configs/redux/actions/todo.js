import {db} from '../../firebase/firebase-config'

export const addToDo2= async (data) => {
  return (dispatch) => {
    const toDo = db.collection("todolist").add(data)
    function onSuccess (success) {
      dispatch({ type: 'ALERT', payload: 'berhasil menambahkan todo' })
      return success
    }
    toDo.then(res => {
      onSuccess(res)
    }) 
    .catch(err =>{
      console.log(err)
    })
  }
}
export const addToDo = async (data) => (dispatch) => {
    const toDo = db.collection("todolist").add(data)
    toDo.then(res => {
      alert('buatin')
    }) 
    .catch(err =>{
      console.log(err)
    })
}