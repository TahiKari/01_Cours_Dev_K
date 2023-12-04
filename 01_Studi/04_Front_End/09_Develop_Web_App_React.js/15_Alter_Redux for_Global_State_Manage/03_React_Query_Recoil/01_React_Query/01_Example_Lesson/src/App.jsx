import './App.css'
import User from './components/User'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  )
}
export default App
