# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Books from "./pages/Books";
import GenrePage from "./pages/GenrePage";
import PrivateRoute from "./routes/PrivateRoute";
import BookDetails from "./pages/BookDetails";
// import BookDetails from "./pages/BookDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* <AuthProvider> */}
        <BookProvider>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <PrivateRoute path="/books" element={<Books />}></PrivateRoute>
            <PrivateRoute
              path="/books/:bookId"
              element={<BookDetails />}
            ></PrivateRoute>
            <PrivateRoute
              path="/books/:genre"
              element={<GenrePage />}
            ></PrivateRoute>
            <Route path="*" element={<Navigate to="/books" />} />
          </Routes>
        </BookProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
