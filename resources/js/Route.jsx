import {
    BrowserRouter as Router,
    Routes ,
    Route,
    } from "react-router-dom";
    // import Example from './components/Example';
    import Index from "./components/index";
    import Create from "./components/create";
    import Edit from "./components/update"

const route = () => {
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
    </Router>
    )
}


export default route;
