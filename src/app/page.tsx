
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/home";

export default function Home() {
  return (     
<div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-[80vh] p-6 md:p-12 pb-24 gap-16 sm:p-24 font-[family-name:var(--font-geist-sans)]">
    <Header /> 
    <HomePage />
    <Footer />
</div>
  );
}
