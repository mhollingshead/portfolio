import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { brandingDarkTheme, brandingLightTheme } from './common/misc/themeProvider.ts';

const App = () => {
    const [mode, setMode] = useState('dark');

    return (
        <ThemeProvider theme={mode === 'dark' ? brandingDarkTheme : brandingLightTheme}>
            <CssBaseline />
            <div className='App'>
                <Header setMode={setMode} />
                <Hero />
                <About />
                <Technology />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
