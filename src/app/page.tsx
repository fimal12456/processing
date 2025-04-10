import Header from "@/componens/Header/Header";
import TrustUs from "@/componens/TheyTrustUs/TrustUs";
import OurAdvantages from "@/componens/Our_advantages/OurAdvantages";
import Experience from "@/componens/Experience/Experience";
import Footer from "@/componens/Footer/Footer";


export default function Home() {
  return (
      <div className={"home_page"} >
          <Header/>
          <TrustUs/>
          <OurAdvantages/>
          <Experience/>
          <Footer/>
      </div>
  );
}
