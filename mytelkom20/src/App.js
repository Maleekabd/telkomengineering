//import styling
import '../src/style/styleforcomponents.css';

//import component
import Navbar from './components/navbar';
import Article from './components/article';
import Menu from './components/menu';
import About from './components/About';
import Content from './components/content';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Menu />
        <Article />
        <Content />
        <About />
      </main>
    </div>
  );
}

export default App;
