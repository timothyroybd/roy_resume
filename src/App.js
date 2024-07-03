import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="container">
      <header className="fixed_left header">
        <Header />
      </header>
      <main className="main_content">
        <About />
        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="project">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>
      </main>
    </div>
  );
}

export default App;
