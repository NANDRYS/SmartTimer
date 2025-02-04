import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  return (
    <>
      <div className="centralitys">
        <DotLottieReact
          src="https://lottie.host/af563d04-5a31-4223-be44-148aacf29543/sCI2lijgje.lottie"
          loop
          style={{ width: "400px", height: "400px" }}
          autoplay
        />
      </div>

      <div className="center__block">
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
