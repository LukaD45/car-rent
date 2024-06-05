import Image from "next/image";

interface CarInfoProps {
  klasa: string;
  boja: string;
  vrstaMotora: string;
  potrosnja: number;
  ubrzanje: number;
  pogonskiKotaci: string;
}

const CarInfo: React.FC<CarInfoProps> = ({
  klasa,
  boja,
  vrstaMotora,
  potrosnja,
  ubrzanje,
  pogonskiKotaci,
}) => {
  return (
    <div className="md:max-w-[800px] text-black mt-5 space-y-5 dark:text-white">
      <div className="flex md:space-x-5 space-y-5 md:space-y-0 flex-col md:flex-row justify-center items-center ">
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/engine.png" alt="Getriba" width={40} height={30} />
          </div>

          <div className="py-3">
            <p>Vrsta motora</p>
            <p className="font-bold">{vrstaMotora}</p>
          </div>
        </div>
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/klasa.png" alt="Getriba" width={40} height={30} />
          </div>

          <div className="py-3">
            <p>Klasa</p>
            <p className="font-bold">{klasa}</p>
          </div>
        </div>
      </div>
      <div className="flex md:space-x-5 space-y-5 md:space-y-0 flex-col md:flex-row justify-center items-center ">
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/boja.png" alt="Getriba" width={40} height={30} />
          </div>

          <div className="py-3">
            <p>Boja</p>
            <p className="font-bold">{boja}</p>
          </div>
        </div>
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/fuel.png" alt="Getriba" width={40} height={30} />
          </div>

          <div className="py-3">
            <p>Potrošnja</p>
            <p className="font-bold">{potrosnja} l/100km</p>
          </div>
        </div>
      </div>
      <div className="flex md:space-x-5 space-y-5 md:space-y-0 flex-col md:flex-row justify-center items-center ">
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/drive.png" alt="Getriba" width={40} height={30} />
          </div>

          <div className="py-3">
            <p>Pogonski kotači</p>
            <p className="font-bold">{pogonskiKotaci}</p>
          </div>
        </div>
        <div className="border-2 dark:bg-neutral-900 pl-4 rounded-lg flex items-center gap-x-6 w-[380px]">
          <div>
            <Image src="/ubrzanje.png" alt="Getriba" width={40} height={50} />
          </div>

          <div className="py-3">
            <p>Ubrzanje (0-100km/h)</p>
            <p className="font-bold">{ubrzanje}s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
