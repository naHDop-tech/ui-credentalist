import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { App } from './App';
import { store } from '@store/init'
import { ThemeContextProvider as ThemeProvider } from "@components/provider/ThemeContextProvider";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
);