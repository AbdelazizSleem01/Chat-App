import { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route
            path="/"
            element={<AuthPage onAuth={(user) => setUser(user)} />}
          />
        ) : (
          <Route
            path="/"
            element={<ChatsPage user={user} />}
          />
        )}
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
