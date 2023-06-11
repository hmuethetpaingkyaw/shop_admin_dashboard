import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container } from "reactstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container className="p-0">
          <BrowserRouter>
            <Routes>
              <Route element={<AdminLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/product" element={<ProductPage />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
