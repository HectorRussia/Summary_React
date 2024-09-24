import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginStatus from './component/Globalmangestate/Recuder/Logins/LoginStatus';
/* import { QueryClient, QueryClientProvider} from '@tanstack/react-query'; */


/* const queryClient = new QueryClient(); */

function App() {
 
  return (
    <>
      {/*  <QueryClientProvider client={queryClient}> */}
        {/* <InfinityList/> */}
        {/* <TestIn/> */}
      {/* </QueryClientProvider>  */}
     <LoginStatus/>
    </>
  )
}

export default App
