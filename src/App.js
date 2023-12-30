// import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
// import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {

    return (
        <FeedbackProvider>
        <Router>
        <Header/>
        
        <div className="container">
            <Routes>
                <Route exact path="/" element={
                    <>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <FeedbackList/>

                    </>
                }>
                    
                </Route>
            </Routes>
            <Routes>
                <Route path="/about" element={<AboutPage/>}>This is the about route</Route>
            </Routes>
            <AboutIconLink></AboutIconLink>
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App