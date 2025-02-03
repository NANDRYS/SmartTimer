import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function App() {
  return (
    <>
    <DotLottieReact className="centralitys"
      src="https://lottie.host/af563d04-5a31-4223-be44-148aacf29543/sCI2lijgje.lottie"
      loop
      autoplay
    />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
