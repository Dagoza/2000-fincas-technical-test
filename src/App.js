import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Login } from "./containers/Login";
import { Registers } from "./containers/Registers";
import { NotFound } from "./containers/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./constants/routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path={`/${routes.login}`} element={<Login />} />
            <Route path={`/${routes.registers}`} element={<Registers />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
