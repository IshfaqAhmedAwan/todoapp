import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import Todo from './components/Todo';


function App() {
  return (
    <Provider store={store}>
   <div className="main">
     <Todo/>
   </div>
   </Provider>
    );
}

export default App;
