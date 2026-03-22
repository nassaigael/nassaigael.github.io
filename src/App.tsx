import { Layout } from './components/layout/Layout';
import { About } from './components/sections/About';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      <About />
    </Layout>
  );
}

export default App;