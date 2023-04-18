import { Provider } from 'react-redux'
import { store } from './redux/store'
import Pages from './pages';

function App() {

  return (
    <Provider store={store}>
      <Pages></Pages>
    </Provider>
  )
}

export default App
