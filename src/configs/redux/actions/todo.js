import {db} from '../../firebase/firebase-config'

export const addToDo = (data) =>{
    return async dispatch => {
      try {
        await db.collection("todolist").add(data)
        alert('berhasil')
      } catch (error) {
        return alert('failed')
      }
    }
}

export const getToDo = () => {
  return async dispatch => {
    try {
      const toDo = db.collection('todolist')
      const doc = await toDo.get();

      const data = []
      doc.forEach(doc => {
        data.push({ id: doc.id, data: doc.data() })
      })
      dispatch({type: 'SET_TODO', payload: data})
    } catch (error) {
      console.log('error :>> ', error);
      return alert('server error')
    }
  }
}