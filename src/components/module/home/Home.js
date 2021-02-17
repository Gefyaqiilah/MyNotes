import './home.scoped.css'
import React, {useState} from 'react'
import {db} from '../../../configs/firebase/firebase-config'
import firebase from 'firebase'

function Home () {
  const initialInput = {
    input: { title: 'awd' }
  }
  const [input, setInput] = useState(initialInput.input)
  const onChange = (e) => {
    switch(e.target.name) {
      case 'text-title': return setInput({...input, title: e.target.value})
      default: return alert('oops')
    }
  }
  const addToDo = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      db.collection("todolist").add({
        onProgress: true,
        todo: input.title,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }  
  return (
    <div className="container pt-5">
      <h1 className="title color-orange">My Notes ✍</h1>
      <form action="" className="form mx-auto mt-3">
        <div className="form-group">
          <label htmlFor="text-title" className="color-white">Note Title:</label>
          <input type="text" onKeyDown={(e) => addToDo(e)} name="text-title"  value={input.title}  onChange={(e)=>onChange(e)} id="text-title" className="form-control color-white bg border-bottom shadow-none"/>
        </div>
      </form>
      <div className="list-notes mx-auto">
        <div className="note"> 
          <h4 className="color-white">halo</h4>
          <p className="color-white">awdawdawd</p>
        </div>
      </div>
    </div>
  ) 
}

export default Home