import { Header } from "./components/sections/header";
import { AboutUs } from "./components/sections/about-us";
import { Initial } from "./components/sections/initial";
import { Cards } from "./components/about-us-card/cards";
import { WhoWorks } from "./components/sections/jorney";
import { WhatTheySay } from "./components/sections/whatTheySay";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <div className="tiger">
      <main className="wrapper">
        <Header />
        <Initial />
        <AboutUs />
        <Cards />
        <WhoWorks />
        <WhatTheySay />
        <Footer />
      </main>
    </div>
  );
}

export default App;
