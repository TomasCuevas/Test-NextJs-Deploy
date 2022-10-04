import Image from "next/image";

interface CartProps {
  name: string;
  image: string;
}

export const Cart: React.FC<CartProps> = ({ name, image }) => {
  return (
    <div className="w-[200px] flex flex-col justify-center items-center bg-slate-600 rounded-xl cursor-pointer hover:scale-[102%] py-5 transition-transform duration-300">
      <Image src={image} alt={name} width="100%" height="100%" />
      <p className="text-white text-xl">{name}</p>
    </div>
  );
};
