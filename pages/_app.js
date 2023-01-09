import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import Sidebar from "../components/Admin/Sidebar";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin")) {
    return (
      <div className="flex gap-5 w-full h-full bg-accentBG">
        <div className="min-w-[20%] min-h-screen h-full  overflow-y-scroll bg-accentBG ">
          <Sidebar className="" />
        </div>
        <div className="w-[78%] ">
          <Component {...pageProps} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
