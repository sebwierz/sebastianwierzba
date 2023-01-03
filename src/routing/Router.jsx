import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from '../components/Layout';

export const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
        
    </Route>
));