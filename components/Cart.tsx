interface CartProps {
  name: string;
}

export const Cart: React.FC<CartProps> = ({ name }) => {
  return (
    <div className="w-[200px] h-24 flex justify-center items-center bg-slate-600 rounded-xl cursor-pointer hover:scale-[102%] transition-transform duration-300">
      <p className="text-white">{name}</p>
    </div>
  );
};
