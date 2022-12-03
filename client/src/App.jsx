import { Navbar, Welcome, Footer, Services, Transactions, Market } from "./components";


function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Market />
      <Footer />
    </div>
  )
}

export default App;
