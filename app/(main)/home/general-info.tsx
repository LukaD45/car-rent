import Image from "next/image";
import { Button } from "../../../components/ui/button";

export const GeneralInfo = () => {
  return (
    <section>
      <div className="bg-neutral-500 p-10 md:flex justify-around">
        <Image
          className="md:w-4/12 hidden md:block"
          src="/hero-marketing.svg"
          width={400}
          height={600}
          alt="Alt"
        />
        <div className="flex md:w-5/12 flex-col p-6 space-y-10 leading-7 justify-start">
          <h1 className="text-3xl ">
            Tražite pouzdano i povoljno rešenje za iznajmljivanje automobila?
          </h1>
          <p>
            Dobrodošli u Rent, gde vaša udobnost i sigurnost dolaze na prvo
            mesto! Nudimo širok izbor vozila koja će zadovoljiti sve vaše
            potrebe, bilo da planirate poslovno putovanje, porodični odmor, ili
            jednostavno trebate vozilo za svakodnevnu upotrebu.
          </p>
          <Button className=" w-[100px]">Vozila</Button>
        </div>
      </div>
    </section>
  );
};
