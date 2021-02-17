import './home.scoped.css'
import { InputGroup,Form ,FormControl } from 'react-bootstrap'

function Home () {
  return (
    <div className="container pt-5">
      <h1 className="title color-orange">My Notes ✍</h1>
      <form action="" className="form mx-auto mt-3">
        <div className="form-group">
          <label htmlFor="text-title" className="color-white">Note Title:</label>
          <input type="text" name="" id="text-title" className="form-control color-white bg border-bottom shadow-none"/>
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