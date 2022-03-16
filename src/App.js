import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/page-not-found";
import Home from "./pages/home";
import Playground from "./pages/playground";
import { HOME_ROUTE, LOGIN_ROUTE, PLAYGROUND_ROUTE, SIGNUP_ROUTE } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { AuthProvider } from "./contexts/auth-context";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME_ROUTE} element={<Home />}></Route>
                    <Route path={LOGIN_ROUTE} element={<Login />}></Route>
                    <Route path={SIGNUP_ROUTE} element={<Signup />}></Route>
                    <Route path={PLAYGROUND_ROUTE + "/:codeID"} element={<Playground />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
