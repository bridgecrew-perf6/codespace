import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found";
import Home from "./pages/home";
import Playground from "./pages/playground";
import { HOME_ROUTE, PLAYGROUND_ROUTE } from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME_ROUTE} element={<Home />}></Route>
                <Route path={PLAYGROUND_ROUTE} element={<Playground />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;