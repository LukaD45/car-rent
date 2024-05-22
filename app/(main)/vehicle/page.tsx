import { Hero } from "@/components/hero";
import { Header } from "../../../components/header";
import { CarCatalog } from "./car-catalog";

const VehiclePage = () => {
  return (
    <div>
      <Header />
      <Hero title="Naša vozila" className="h-[200px] p-0 m-0 bg-green-500" />
      <CarCatalog />
    </div>
  );
};

export default VehiclePage;
