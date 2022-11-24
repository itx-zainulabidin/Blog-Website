/* eslint-disable  */
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Create from "./Create";
import Create from "./Components/Create";

import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

const App = () => {
    return (
        <>
            <div className="App">
                <Router>
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path={'/'}>
                                <Home />
                            </Route>
                            <Route exact path={'/create'}>
                                {/* <Home /> */}
                                <Create />
                            </Route>
                            <Route exact path={'/blog/:id'}>
                                <BlogDetails />
                            </Route>
                            <Route exact path={'*'}>
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );
};

export default App;