import { Provider } from 'react-redux';
import './App.css';
import Index from './components/routes/Index';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Index/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
