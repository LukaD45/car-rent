import Image from "next/image";

interface CarHeadProps {
  src: string;
  marka: string;
  model: string;
}

const CarHead: React.FC<CarHeadProps> = ({ src, marka, model }) => {
  const imagePath = src.startsWith("/") ? src : `/${src}`;

  return (
    <div className="mx-auto max-w-xl ">
      <h1 className="mt-24 md:mt-10 text-4xl font-light md:text-5xl">
        {marka} {model}
      </h1>
      <Image src={imagePath} alt="Car Image" width={500} height={700} />
      <div className="flex justify-end items-end mt-10">
        <p>
          <sub>
            <i>Fotografije su indikativne.</i>
          </sub>
        </p>
      </div>
    </div>
  );
};

export default CarHead;
