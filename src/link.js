import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Test from './page/Test';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='test' element={<Test />} />
            </ Routes>
        </BrowserRouter>
    )
} export default Router;