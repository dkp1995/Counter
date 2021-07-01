
import './App.css';

import { useSelector , useDispatch } from 'react-redux';

import { increment, decrement } from './actions/Updown';

function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Increment AND Decrement Counter</h1>
        <hr></hr>
        <br/><br/><br/>

          <button className="threeequal" onClick={() => dispatch (decrement())}>-</button>
          <input type="text" className="counterbox" value={myState}/>
          <button className="threeequal" onClick={() => dispatch(increment(5))}>+</button>

       
    </div>
  );
}

export default App;
