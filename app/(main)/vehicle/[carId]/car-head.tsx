import Image from "next/image";

interface CarHeadProps {
  src: string;
}

const CarHead: React.FC<CarHeadProps> = ({ src }) => {
  const imagePath = src.startsWith("/") ? src : `/${src}`;

  return (
    <div className="mx-auto max-w-xl pt-10">
      <Image src={imagePath} alt="Car Image" width={500} height={700} />
    </div>
  );
};

export default CarHead;
