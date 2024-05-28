interface CarInfoProps {
  marka: string;
  model: string;
  klasa: string;
  cijena: string;
  boja: string;
  vrstaMotora: string;
  potrosnja: number;
  ubrzanje: number;
}

const CarInfo: React.FC<CarInfoProps> = ({
  marka,
  model,
  klasa,
  cijena,
  boja,
  vrstaMotora,
  potrosnja,
  ubrzanje,
}) => {
  return (
    <div className="max-w-[800px]">
      <div className="flex justify-center  items-center ">
        <h1 className="mt-10 text-4xl">
          {marka} {model}
        </h1>
      </div>
      <div className="flex border max-w-[500px] mt-10 mx-auto border-black rounded-xl justify-center items-center">
        <div className="flex flex-col text-xl justify-center p-5  space-y-5  mt-3">
          <p>Klasa: {klasa}</p>
          <p>Vrsta Motora: {vrstaMotora}</p>
          <p>Boja: {boja}</p>
        </div>
        <div className="flex flex-col text-xl justify-center p-5 space-y-5 mt-3">
          <p>Potrošnja: {potrosnja} L/100km</p>
          <p>Ubrzanje: {ubrzanje}</p>
          <p>Cijena: {cijena}$/dan</p>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
