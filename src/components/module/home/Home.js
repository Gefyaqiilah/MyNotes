import './home.scoped.css'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {db} from '../../../configs/firebase/firebase-config'
import firebase from 'firebase'
import { addToDo, getToDo, updateToDo, deleteToDo } from '../../../configs/redux/actions/index'

function Home () {
  const dispatch = useDispatch()
  const initialInput = {
    input: { title: 'awd' }
  }
  const [input, setInput] = useState(initialInput.input)
  const toDoState = useSelector((state) => state.todo)
  const onChange = (e) => {
    switch(e.target.name) {
      case 'text-title': return setInput({...input, title: e.target.value})
      default: return alert('oops')
    }
  }
  const handleAddToDo = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const data = {
        onProgress: true,
        todo: input.title,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }
      dispatch(addToDo(data))
    }
  } 
  const handleUpdateToDo = async (data) => {
    try {
      await dispatch(updateToDo(data))
      await dispatch(getToDo())
    } catch (error) {
      alert('error')
    }
  }
  
  const handleDeleteToDo = async (id) => {
    try {
      await dispatch(deleteToDo(id))
      await dispatch(getToDo())
    } catch (error) {
      alert('error')
    }
  }
  useEffect(()=> {
    dispatch(getToDo())
  }, [])

  return (
    <div className="container pt-5">
      <h1 className="title color-orange">My Notes ✍</h1>
      <form action="" className="form mx-auto mt-3">
        <div className="form-group">
          <label htmlFor="text-title" className="color-white">Note Title:</label>
          <input type="text" onKeyDown={(e) => handleAddToDo(e)} name="text-title"  value={input.title}  onChange={(e)=>onChange(e)} id="text-title" className="form-control color-white bg border-bottom shadow-none"/>
        </div>
      </form>
      <div className="list-notes mx-auto">
        {toDoState.todo.map(el=> {
          return <div className="note d-flex justify-content-between" key={el.id}> 
            <div className="desc">
              <h4 className={!el.data.onProgress ? 'text-line-trough color-gray': 'color-white' }>{el.data.todo}</h4>
              <p className={!el.data.onProgress ? 'color-gray': 'color-white'}>{el.data.onProgress ? 'On Progress' : 'Done'}</p>
            </div>
            <div className="action d-flex justify-content-between align-items-center">
              <h4  className={!el.data.onProgress ? 'text-line-trough color-gray': 'color-white' } onClick={() => handleUpdateToDo({ id: el.id, onProgress: el.data.onProgress })}>DONE</h4>
              <i className={!el.data.onProgress ? 'fa fa-check color-gray' : 'fa fa-trash color-white'} onClick={()=> handleDeleteToDo(el.id)}></i>
            </div>
        </div>
        })
        }

      </div>
    </div>
  ) 
}

export default Home