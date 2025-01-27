import Container from "react-bootstrap/Container";
import Resources from "../Components/Resources/Resources";
import Rights from "../Components/Rights/Rights";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./App.scss";
import Share from "../Components/Share/Share";

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
