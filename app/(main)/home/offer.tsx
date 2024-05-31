import { Route, ScanEye, ShieldCheck, ShieldCheckIcon } from "lucide-react";

export const Offer = () => {
  return (
    <section className="py-12 sm:py-24 lg:py-10 bg-indigo-700 px-3 md:px-10 lg:px-24 ">
      <div className="flex flex-col items-center">
        <h1 className="2xl:text-6xl mb-10 md:mb-20 text-4xl text-white sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px] md:text-center">
          Zašto izabrati nas
        </h1>

        <div className="flex flex-col xl:flex-row justify-between xl:space-x-24 space-y-12 xl:space-y-0">
          <div className="text-center space-y-6 shadow-xl rounded-md p-8 bg-white">
            <Route className="mx-auto" size={100} />
            <h2 className="text-3xl font-semibold">Fleksibilnost</h2>

            <p className="text-md max-w-[350px] m-auto">
              Prilagođavamo se vašem rasporedu i individualnim potrebama. Bilo
              da vam je vozilo potrebno na jedan dan ili na duži period, nudimo
              fleksibilne opcije najma kako bismo vam omogućili maksimalnu
              pogodnost.
            </p>
          </div>
          <div className="text-center space-y-6 shadow-xl rounded-md p-8 bg-white">
            <ScanEye className="mx-auto" size={100} />
            <h2 className="text-3xl font-semibold">Transparentnost</h2>
            <p className="text-md max-w-[350px] m-auto">
              Kod nas nema skrivenih troškova. Sve informacije o cenama i
              uslovima najma jasno su navedene od samog početka, što vam
              omogućava da sa sigurnošću planirate svoj budžet.
            </p>
          </div>
          <div className="text-center  space-y-6 shadow-xl rounded-md p-8 bg-white">
            <ShieldCheck className="mx-auto" size={100} />
            <h2 className="text-3xl font-semibold">Kvaliteta i sigurnost</h2>
            <p className="text-md max-w-[350px] m-auto">
              Naš vozni park se sastoji od pažljivo održavanih vozila koja
              redovno prolaze kroz rigorozne tehničke preglede. Posvećeni smo
              pružanju najvišeg nivoa sigurnosti i pouzdanosti kako biste se
              osećali sigurno tokom vožnje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
