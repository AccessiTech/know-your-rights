import Container from "react-bootstrap/Container";
import Resources from "../Components/Resources";
import Rights from "../Components/Rights";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./App.scss";
import Share from "../Components/Share";

function App() {
  return (
    <Container>
      <Header />
      <main id="content">
        <Rights />
        <Resources />
        <Share />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
