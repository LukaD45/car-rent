import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Timeline() {
  return (
    <TracingBeam className="px-10 md:px-0 mt-3 md:mt-10">
      <div className="lg:max-w-10xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className={`mb-10 md:flex p-0 md:items-center justify-center ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse "
            }`}
          >
            <div className="md:w-6/12 md:px-4">
              {item.badge && item.badge.trim() !== "" && (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
              )}

              <p className="text-4xl  mb-4 fon font-bold">{item.title}</p>
              <div className="space-y-3  mb-5 w-full md:w-10/12   ">
                {item.description}
              </div>
            </div>

            <div className="text-sm prose prose-sm dark:prose-invert md:w-6/12 flex items-center justify-center">
              {item?.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-r-md"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Osnovan Rent-A-Car",
    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Rent-A-Car nije samo tvrtka - mi smo zajednica entuzijasta, stručnjaka
          i vizionara koji dijele istu strast prema automobilima. Naše
          vrijednosti, poput inovacije, integriteta i zadovoljstva korisnika,
          utkane su u sve što radimo. S ponosom gradimo mostove između ideja i
          realizacije, povezujući ljude s vozilima na način koji nadilazi obične
          poslovne transakcije.
        </p>
      </div>
    ),
    badge: "01.01.2005.",
    image: "/timeline-slika12.jpg",
  },
  {
    title: "Prva Flota",
    description: (
      <div className="space-y-3">
        <p>
          U proteklom desetljeću postali smo lider u industriji najma automobila
          u Hrvatskoj.
        </p>
        <p>
          Omogućujemo vam jednostavno i povoljno da dođete do željenog najma
          automobila, nudeći širok raspon vozila prilagođenih vašim potrebama.
        </p>
      </div>
    ),
    badge: "15.01.2005.",
    image: "/prva-flota.jpg",
  },
  {
    title: "99% Zadovoljnih Klijenata",
    description: (
      <p className="leading-7">
        U središtu naše misije leži predanost izvrsnosti i kvaliteti. Naš tim
        stručnjaka, s bogatim iskustvom u različitim područjima automobilske
        industrije, posvećen je pružanju rješenja koja nadmašuju očekivanja
        naših klijenata. Svaki projekt koji preuzimamo nije samo izazov, već
        prilika za stvaranje nečeg izvanrednog.
      </p>
    ),
    badge: "01.01.2005.",
    image: "/timeline-slika1.jpg",
  },
  {
    title: "Danas",
    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Kroz svaki korak našeg puta, ostajemo predani ideji da tehnologija
          treba biti pristupačna svima. Za bolju budućnost - jednu u kojoj su
          inovacije dostupne svima, potičući rast i napredak u zajednici. Nismo
          samo tvrtka. Mi smo nositelji promjena.
        </p>
        <p className="leading-7">Dobrodošli u naš svijet.</p>
      </div>
    ),
    image: "/timeline-slika3.jpg",
  },
];
