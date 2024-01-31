// import {createHashRouter} from 'react-dom'
import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Characters from './components/Characters'
import Films from './components/Films'
import Planets from './components/Planets'
import Home from "./components/Home";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/characters/',
                element: <Characters />
            },
            {
                path: '/films/',
                element: <Films />
            },
            {
                path: '/planets/',
                element: <Planets />
            },
             

        ]
    }
]);

export default Router;