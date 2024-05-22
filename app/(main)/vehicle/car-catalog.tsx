import CarCard from "./car-card";
import { Filters } from "./filters";

export const CarCatalog = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1280px] mx-auto bg-red-400">
        <Filters />
      </div>
    </div>
  );
};
