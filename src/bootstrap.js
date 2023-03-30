import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { App } from './App';
import { store } from '@store/init'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);