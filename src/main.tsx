
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './component/Globalmangestate/Redux/store.ts'
/* 
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
) */

  const root = ReactDOM.createRoot(document.getElementById('root')!);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
