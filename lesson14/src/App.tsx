

 import './index.css';
 import store from './lib/store';

 import { Provider } from 'react-redux';
 import InboxScreen from './components/InboxScreen/InboxScreen';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
  
     <Counter />
   
  );
}
export default App;