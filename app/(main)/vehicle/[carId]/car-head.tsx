import Image from "next/image";

interface CarHeadProps {
  src: string;
}

const CarHead: React.FC<CarHeadProps> = ({ src }) => {
  const imagePath = src.startsWith("/") ? src : `/${src}`;

  return (
    <div className="mx-auto max-w-lg">
      <Image src={imagePath} alt="Car Image" width={500} height={300} />
    </div>
  );
};

export default CarHead;
