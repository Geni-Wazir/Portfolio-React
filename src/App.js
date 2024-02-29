import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Education from './Routes/Education';
import Experience from './Routes/Experience';
import Achievements from './Routes/Achievements';
import Skills from './Routes/Skills';
import Projects from './Routes/Projects';
import Blogs from './Routes/Blogs';
import Home from './Routes/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    // Initialize mode state with the value stored in localStorage or false if not present
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Function to toggle mode
    const toggleMode = () => {
        const newMode = !mode;
        setMode(newMode);
        // Store the new mode in localStorage
        localStorage.setItem('dark-mode', JSON.stringify(newMode));
    }

    // Set initial background color based on mode
    useEffect(() => {
        document.body.style.backgroundColor = mode ? '#e6f1fa' : '#1f2937';
    }, [mode]);

    // Define bgColor variable based on mode
    const bgColor = mode ? '#b6d3fc' : '#d4e5fc';

    return (
        <>
            <Router>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Routes>
                    <Route exact path="/" element={<Home mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/education" element={<Education mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/experience" element={<Experience mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/achievements" element={<Achievements mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/skills" element={<Skills mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/projects" element={<Projects mode={mode} bgColor={bgColor} />} />
                    <Route exact path="/blogs" element={<Blogs mode={mode} bgColor={bgColor} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
