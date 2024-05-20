import { useAuth } from "../components/AuthProvider";
import NavBar_DashBoard from "../components/DashBoard/NavBar_DashBoard";
import PostIdeasWall from "../components/DashBoard/PostIdeasWall";
import ScheduleNewMeeting from "../components/DashBoard/ScheduleNewMeeting";

const DashBoard = () => {
  const context = useAuth();

  return (
    <div className="!bg-[#121827] flex  relative">
      {/* <GlobalModal></GlobalModal> */}
      <NavBar_DashBoard
        setCurrentScreen={context?.updateScreen}
      ></NavBar_DashBoard>

      {context?.currentScreen === 2 && (
        <ScheduleNewMeeting></ScheduleNewMeeting>
      )}
      {context?.currentScreen === 1 && <PostIdeasWall></PostIdeasWall>}
    </div>
  );
};

export default DashBoard;
