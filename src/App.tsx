import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </Layout>
  );
}

export default App;