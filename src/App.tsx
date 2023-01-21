import { About } from "./components/About";
import { Container } from "./components/Container";
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
        </Container>
      </div>
    </div>
  );
}

export default App;
