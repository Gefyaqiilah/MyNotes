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

export const updateToDo = (payload) => {
  return async dispatch => {
    try {
      await db.collection('todolist').doc(payload.id).update({
        onProgress: payload.onProgress? false : true
      })
      return alert('success')
    } catch (error) {
      return alert('Looks like server having trouble')
    }
  }
}

export const deleteToDo = (id) => {
  return async dispatch => {
    try {
      await db.collection('todolist').doc(id).delete()
    } catch (error) {
      return alert('Looks like server havng trouble')
    }
  }
}

export const getRealTimeData = () => {
  return dispatch => {
    const doc = db.collection('cities').doc('SF');

const observer = doc.onSnapshot(docSnapshot => {
  console.log(`Received doc snapshot: ${docSnapshot}`);
  // ...
}, err => {
  console.log(`Encountered error: ${err}`);
});
  }
}