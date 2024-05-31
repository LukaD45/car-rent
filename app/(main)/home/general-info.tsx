import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export const GeneralInfo = () => {
  return (
    <section>
      <div className="p-1 md:p-10 md:flex items-center justify-around">
        <Image
          className="md:w-4/12 hidden md:block"
          src="/toyota-chr.png"
          width={900}
          height={200}
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
          <Link href="/vehicle">
            <Button variant="primary" className=" w-[100px]">
              Iznajmi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
