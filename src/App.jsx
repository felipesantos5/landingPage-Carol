import { Header } from "./components/sections/header";
import { AboutUs } from "./components/sections/about-us";
import { Initial } from "./components/sections/initial";
import { Services } from "./components/sections/services";
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
        <Services />
        <WhoWorks />
        <WhatTheySay />
        <Footer />
      </main>
    </div>
  );
}

export default App;
