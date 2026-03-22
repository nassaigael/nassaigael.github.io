import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;