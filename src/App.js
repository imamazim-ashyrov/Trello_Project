import { Provider } from 'react-redux';
import './App.css';
import Index from './components/routes/Index';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/store/store';
import ReactDOM from 'react-dom'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Index/>
        <div id='modal-root'></div>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App;
