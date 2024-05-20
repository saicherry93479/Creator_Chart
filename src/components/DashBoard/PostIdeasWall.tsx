import MenuIcon from "../../Icons/MenuIcon";
import PlusIcon from "../../Icons/PlusIcon";
import Multiselect from "./Multiselect";
import LikeIcon from "../../Icons/LikeIcon";
import Dislike from "../../Icons/Dislike";
import GlobalModal from "./GlobalModal";
import CancelIcon from "../../Icons/CancelIcon";
import { useState } from "react";

const PostIdeasWall = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalChild, setModalChild] = useState<any>(null);
  const itemsPerPage = 5; // You can adjust the number of items per page

  // Calculate the current data slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SampleData.slice(indexOfFirstItem, indexOfLastItem);

  console.log("current items are ", currentItems);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <main className=" w-full w-screen bg-white  dark:bg-[#121827] !h-screen overflow-scroll">
      {showModal && <GlobalModal children={modalChild}></GlobalModal>}
      
        <div className="flex min-w-0 items-center py-3.5 px-6 pr-4 leading-5 border-b border-[#eee]  dark:border-white/20  ">
          <div className="mr-2 flex w-6 shrink-0 justify-center md:hidden">
            <button className="text-gray-900 hover:text-gray-700 flex h-8 items-center">
              <MenuIcon></MenuIcon>
            </button>
          </div>
          <h2 className="text-gray-900 mr-5 shrink-0 grow truncate whitespace-nowrap text-lg font-bold leading-8 dark:text-gray-100">
            Post Idea Wall
          </h2>
          <div className="flex gap-2  bg-violet-700 items-center justify-center text-gray-900 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 focus:outline-none focus:ring  p-2 sm:px-4 sm:py-2 rounded-full">
            <p className="hidden text-white dark:text-white sm:block">Create a Post </p>
            <PlusIcon></PlusIcon>
          </div>
        </div>

        <div className="p-4">
          <div className="w-full lg:w-[50%] ml-auto mb-2">
            <Multiselect data={SampleData}></Multiselect>
          </div>
          <div className="rounded-sm   border border-white/20 bg-white    px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-[#374151]  sm:px-7.5 xl:pb-1 ">
            <div className="  p-2 overflow-x-auto">
              <table className="w-full table-auto shadow   ">
                <thead className="">
                  <tr className="text-left  border-b border-white/20 bg-[#e9eef7] dark:bg-[#12182770] ">
                    <th className="min-w-[220px] px-4 py-4 font-medium text-[#1c2434] dark:text-white xl:pl-11">
                      Description
                    </th>
                    <th className="min-w-[150px] px-4 py-4 font-medium text-[#1c2434] dark:text-white">
                      Buckets
                    </th>
                    <th className="min-w-[120px] px-4 py-4 font-medium text-[#1c2434] dark:text-white">
                      Category
                    </th>
                    <th className="px-4 py-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((d) => (
                    <tr
                      className="cursor-pointer hover:bg-[#e9eef7]  hover:dark:bg-[#12182770]"
                      onClick={() => {
                        setShowModal(true),
                          setModalChild(
                            <PostIdeaModal
                              setShowModal={setShowModal}
                              item={d}
                            ></PostIdeaModal>
                          );
                      }}
                    >
                      <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-white/20 xl:pl-11">
                        <h5 className="font-bold text-black dark:text-white/90 ellipsis-3-lines-small md:!ellipsis-3-lines">
                          {d?.desc}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-white/20">
                        <p className="text-black dark:text-white/90  ellipsis-3-lines-small md:!ellipsis-3-lines">
                          {d?.buck}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-white/20">
                        <p className="text-black dark:text-white/90 ellipsis-3-lines-small md:!ellipsis-3-lines">
                          {d?.cate}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-white/20">
                        <div className="flex items-center gap-2 ">
                          {/* <button className="hover:text-primary">l</button>
                          <button className="hover:text-primary">d</button> */}
                          <div className="text-green-500 h-6 w-6 cursor-pointer">
                            <LikeIcon></LikeIcon>
                          </div>
                          <div className="text-green-500 h-6 w-6 cursor-pointer">
                            <Dislike></Dislike>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          {/* Here you can implement or use a pagination component */}
          {Array.from(
            { length: Math.ceil(SampleData.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className="mx-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {i + 1}
              </button>
            )
          )}
        </div>

    </main>
  );
};

export default PostIdeasWall;

const PostIdeaModal = ({ setShowModal, item, setCurrentPost }: any) => {
  return (
    <div className="flex justify-center items-center h-full w-full py-4 ">
      <div className="w-[90%]  md:w-[70%] lg:w-[50%] max-w-142.5 rounded-lg bg-white px-2  max-h-[90%] overflow-y-scroll md:px-8 py-2 text-center dark:bg-[#24303f] md:px-17.5 md:py-15">
        <div
          onClick={() => {
            setShowModal(false), setCurrentPost(null);
          }}
          className="w-full flex justify-end "
        >
          <CancelIcon css={"h-6 w-6 hover:!text-blue-600"}></CancelIcon>
        </div>
        <h3 className="pb-2  text-center w-fit font-bold text-black dark:text-white sm:text-2xl border-b-[4px] border-blue-500">
          You Chose correct one
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary" />
        <TextArea data={item?.desc} index={0}></TextArea>
        <TextArea data={item?.buck} index={1}></TextArea>
        <TextArea data={item?.cate} index={2}></TextArea>

        {/* <div className="w-full    flex  justify-center   gap-4">
          <button className="block w-fit rounded border border-white/20 bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
            Cancel
          </button>

          <button className="block w-fit rounded border border-white/20 bg-blue-600 p-3 text-center font-medium text-white transition hover:bg-opacity-90">
            View Details
          </button>
        </div> */}
      </div>
    </div>
  );
};

const TextArea = ({ data,index }: { data: string,index:number }) => {
  return (
    <div className="mb-6">
      <label className="mb-3 w-fit block text-sm font-medium text-black dark:text-white/90 text-left border-b-2 border-blue-500 py-2 text-[12px]">
        {
            index===0 && 'Description'

        }
         {
            index===1 && 'Bucket'

        }
         {
            index===2 && 'Category'

        }
      </label>
      <p
        className="w-full  text-left rounded  bg-transparent  font-normal text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white tracking-[1.5px] leading-[30px]"
        style={{ height: "auto" }}
        
      >{data}</p>
    </div>
  );
};

const SampleData = [
  {
    desc: "Current row's getSheetsDB s Topical 0",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmedCurrent row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmedCurrent row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmedCurrent row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 1",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 2",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 3",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 4",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 5",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 6",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 7",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 8",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 9",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 10",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 11",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 12",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },

  {
    desc: "Current row's getSheetsDB s Topical 13",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },

  {
    desc: "Current row's getSheetsDB s Topical 14",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 15",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  {
    desc: "Current row's getSheetsDB s Topical 16",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  ,
  {
    desc: "Current row's getSheetsDB s Topical 17",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  ,
  {
    desc: "Current row's getSheetsDB s Topical 18",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  ,
  {
    desc: "Current row's getSheetsDB s Topical 19",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  ,
  {
    desc: "Current row's getSheetsDB s Topical 20",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
  ,
  {
    desc: "Current row's getSheetsDB s Topical 21",
    buck: "Current row's getSheetsDB s Topical",
    cate: "Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed Current row's getSheets DB's Buckets affected:split by (,):each item:trimmed intersect with Multidropdown Choose your Buckets's value:trimmed",
  },
];
