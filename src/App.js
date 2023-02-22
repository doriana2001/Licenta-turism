import React from "react"
import NavbarMain from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tour from "./pages/Tour"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"

function App () {
  return (
    <>
    <NavbarMain />
    <Router>
      <Routes>
      
        <Route index element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>

  </>
)
}



export default App;
