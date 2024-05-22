import { MobileHeader } from "@/components/mobile-header";
import { Header } from "../../../components/header";
import { Hero } from "@/components/hero";

import { Offer } from "@/app/(main)/home/offer";
import { GeneralInfo } from "./general-info";
import Map from "./map";
import ImageSlider from "./image-carousel";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MobileHeader />
      <Hero title="Pronađite što vam odgovara" />
      <GeneralInfo />
      <Offer />
      <ImageSlider />
      <Map />
    </div>
  );
};

export default HomePage;
