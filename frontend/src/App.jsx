import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Timetable from "./pages/Timetable"
import NotesSummarizer from "./pages/NotesSummarizer"
import PaperAnalyzer from "./pages/PaperAnalyzer"
import ToDoList from "./pages/ToDoList"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/Auth/SignIn"
import SignUp from "./pages/Auth/SignUp"
import Profile from "./pages/Auth/Profile"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/notesSummarizer' element={<NotesSummarizer />} />
        <Route path='/paperAnalyzer' element={<PaperAnalyzer />} />
        <Route path='/toDoList' element={<ToDoList />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App