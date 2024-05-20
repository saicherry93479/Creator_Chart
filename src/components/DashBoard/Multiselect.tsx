import  { useState } from "react";
import DropDown from "./DropDown";
import { DropDownIcon } from "./DropDownIcon";
import CancelIcon from "../../Icons/CancelIcon";

const Multiselect = ({ data }: any) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  const [items,_] = useState([...data]);
  // contains selected items
  const [selectedItems, setSelected] = useState([]);

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };
  // adds new item to multiselect
  const addTag = (item: any) => {
    setSelected(selectedItems.concat(item));
    setDropdown(false);
  };
  // removes item from multiselect
  const removeTag = (item: any) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };

  return (
    <div className="autcomplete-wrapper">
      <div className="w-full flex flex-col items-center mx-auto">
        <div className="w-full">
          <div className="flex flex-col items-center relative">
            <div className="w-full ">
              <div className="my-2 p-1 flex border border-gray-200 bg-white/95 rounded ">
                <div className="flex flex-auto flex-wrap">
                  {selectedItems.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-violet-700 bg-violet-100 border border-violet-300 "
                      >
                        <div className="text-xs font-normal leading-none max-w-full flex-initial">
                          {tag}
                        </div>
                        <div className="flex flex-auto flex-row-reverse">
                          <div onClick={() => removeTag(tag)}>
                            <CancelIcon></CancelIcon>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex-1">
                    <input
                      onFocus={() => setDropdown(true)}
                      placeholder="please slecet from the dropdown"
                      className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-200 placeholder-font-[300] "
                      style={{}}
                    />
                  </div>
                </div>
                <div
                  className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                  onClick={toogleDropdown}
                >
                  <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                    <DropDownIcon></DropDownIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {dropdown ? (
            <div className=" w-full relative ">
              <DropDown list={items} addItem={addTag}></DropDown>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Multiselect;
