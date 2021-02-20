import './home.scoped.css'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {db} from '../../../configs/firebase/firebase-config'
import firebase from 'firebase'
import { addToDo, getToDo } from '../../../configs/redux/actions/index'

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
  
  useEffect(()=> {
    // dispatch(getToDo())
    // console.log('toDoState :>> ', toDoState.todo.length);
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
          return <div className="note"> 
                  <h4 className="color-white">{el.id}</h4>
                  <p className="color-white">{el.id}</p>
                 </div>
        })
        }
        <div className="note d-flex justify-content-between"> 
          <div className="desc">
            <h4 className="color-white">mau ke wc</h4>
            <p className="color-white">on Progress</p>
          </div>
          <div className="action d-flex justify-content-round">
            <h4 className="color-white">DONE</h4>
            <i className="fa fa-trash color-white"></i>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Home