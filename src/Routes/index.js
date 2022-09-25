
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import CreateEvent from '../Pages/CreateEvent';
import DisplayEvent from '../Pages/DisplayEvent';
import Landing from '../Pages/Landing';



const AllRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/Create' element={<CreateEvent />} />
                <Route path='/event' element={<DisplayEvent />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoutes;