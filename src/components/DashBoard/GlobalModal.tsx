
const GlobalModal = ({ children }: any) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-[#1c2424e6] z-40">
      {children}
    </div>
  );
};

export default GlobalModal;
