import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import {Route, Routes, useLocation} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
// import ChatBot from './ChatBot';
// import Chatbot from './chatbot/ChatBot'; // Use correct relative path
import { Provider } from 'react-redux'; // Import Provider
// import Main from './pages/Main';
// import OtherPage from "../pages/OtherPage";
// import Footer from "../pages/Footer";
// import ContactPage from "../pages/ContactPage";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
          <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
      {/* Other components */}
    </div>
  );
};

export default App;
