import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter2 from './component/Globalmangestate/Redux/FastwithTS/Counter2';
import Snapshot from './component/ManagingState/State_snapshot/Snapshot';
/* import { QueryClient, QueryClientProvider} from '@tanstack/react-query'; */


/* const queryClient = new QueryClient(); */

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={'src/assets/logo_redux.svg'} className="App-logo" alt="logo" />
       {/*  <Counter /> */}
        {/* <Counter2/> */}
        <Snapshot/>
        </header>
    </div>
  );
}

export default App
