import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import Cube from "./Cube";
import "../style/Home.css";
const Home = () => {
  const { theme, card } = useContext(UserContext);
  return (
    <>
      <div className={`main ${theme} flex flex-col items-center  p-5 h-full`}>
        <Cube></Cube>
        <div className=" text-5xl">
          <h1 className="">let</h1>
          <h1>Dive Deep</h1>
          <h1>In the world of</h1>
          <h1 className="mb-5">Food</h1>

          <span className="flex">
            <BsArrowReturnRight></BsArrowReturnRight>
            <span
              className={`ml-5 scale-105 bg-slate-700 rounded-lg uppercase p-2 transition-all ease-in-out
              hover:scale-110   `}
            >
              <Link className="text-4xl text-white " to="/res">
                restaurant
              </Link>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Home;
