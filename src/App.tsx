import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <Layout transparentHeader={true}>
      <Hero />
      {/* Les autres sections viendront ici */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-center">À propos</h2>
        </div>
      </section>
    </Layout>
  );
}

export default App;