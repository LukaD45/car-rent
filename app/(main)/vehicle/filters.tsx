import CarCard from "./car-card";

export const Filters = () => {
  return (
    <div>
      <div className="flex bg-none bg-red-500 justify-between p-4">
        <div>Search by make</div>
        <div>Search by model</div>
        <div>Sorting</div>
      </div>
      <CarCard />
    </div>
  );
};
