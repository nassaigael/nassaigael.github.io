import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout transparentHeader={true}>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;