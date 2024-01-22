import { Provider } from 'react-redux';
import { store } from './global_state/store';
import Counted from './Counted';

export default function App() {
  return (
    <Provider store={store}>
        <Counted />
    </Provider>
  );
}
