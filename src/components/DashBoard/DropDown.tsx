
const DropDown = ({ list, addItem }: { list: any; addItem: any }) => {
  return (
    <div
      id="dropdown"
      className="absolute w-full shadow top-100 bg-white z-40  lef-0 rounded max-h-select overflow-y-auto "
    >
      <div className="flex flex-col w-full max-h-[400px] overflow-y-scroll">
        {list.map((item: any, key: any) => {
          return (
            <div
              key={key}
              className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-violet-100  "
              onClick={() => addItem(item?.desc)}
            >
              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-violet-100">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6 text-black ">{item?.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
