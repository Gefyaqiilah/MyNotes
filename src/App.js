import './App.css';
import { Provider } from 'react-redux'
import store from './configs/redux/store'
import Routes from './routes/index'
function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
