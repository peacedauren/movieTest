import './App.scss'
import {Layout} from "./layout/layout.tsx";
import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/routes.tsx";

function App() {
  return (
    <>
        <Layout>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </Layout>
    </>
  )
}

export default App
