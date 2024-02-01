// import {createHashRouter} from 'react-dom'
import { createBrowserRouter } from "react-router-dom";
import App from './App'
import OneFilm from './components/OneFilm'
import OnePlanet from './components/OnePlanet'
import OneCharacter from "./components/OneCharacter";
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
                path: '/characters/:id',
                element: <OneCharacter />
            },
            {
                path: '/films/:id',
                element: <OneFilm />
            },
            {
                path: '/planets/:id',
                element: <OnePlanet />
            },
             

        ]
    }
]);

export default Router;