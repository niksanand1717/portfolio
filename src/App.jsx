import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

// import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import HeroSection from "./pages/HeroSection";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/Theme";

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
