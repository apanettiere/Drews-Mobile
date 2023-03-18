import {
  Navbar,
  Home,
  About,
  Tutors,
  Contact,
  Subjects,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Subjects />
      <Tutors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
