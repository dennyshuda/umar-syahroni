import { About } from "./components/About";
import { CardProject } from "./components/CardProject";
import { Connect } from "./components/Connect";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="bg-primary">
        <Container>
          <Nav />
          <Header />
          <About />
          <CardProject />
          <Connect />
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default App;
