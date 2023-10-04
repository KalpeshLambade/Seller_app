import { useState } from "react";
import Card from "../Layout/Card";
import hotels from "../../JSON/Hotels.json";

const Homepage = () => {
  const [city, setCity] = useState(hotels.london);
  const [more, setMore] = useState(false);

  const changeCity = (name) => {
    setCity(hotels[name]);
    setMore(false);
  };

  return (
    <>
      <main className="bg-[#f4f4fd]">
        {/* title bar */}
        <section className=" border-red-600 flex justify-between items-center px-10 pt-5">
          {/* Cities */}
          <div className=" border-blue-500 flex">
            <div
              className={`border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer ${
                city === hotels.newYork ? "bg-blue-600 text-white" : "bg-none"
              }`}
              onClick={() => changeCity("newYork")}
            >
              New York
            </div>
            <div
              className={`border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer ${
                city === hotels.mumbai ? "bg-blue-600 text-white" : "bg-none"
              }`}
              onClick={() => changeCity("mumbai")}
            >
              Mumbai
            </div>

            <div
              className={`border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer ${
                city === hotels.paris ? "bg-blue-600 text-white" : "bg-none"
              }`}
              onClick={() => changeCity("paris")}
            >
              Paris
            </div>
            <div
              className={`border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer ${
                city === hotels.london ? "bg-blue-600 text-white" : "bg-none"
              }`}
              onClick={() => changeCity("london")}
            >
              London
            </div>
          </div>

          {/* View All btn */}
          <div>
            <button className=" hover:bg-[#373ae30a] text-[#373ae3] font-bold py-2 px-4 inline-flex items-center border border-[#373ae3] rounded-3xl cursor-pointer">
              <span>View all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#373ae3"
                viewBox="0 0 256 256"
                className="fill-current w-4 h-4 mr-2 mx-2"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </section>
        {/* hotels */}
        <section className=" border-red-600 flex flex-wrap items-center justify-evenly px-11 py-3">
          {city ? (
            more ? (
              <Card city={city} />
            ) : (
              <Card city={city.slice(0, 6)}/>
            )
          ) : (
            <>No Data Found</>
          )}
        </section>
        {/* show more */}
        {!more && (
          <div className="border-red-500 flex justify-center items-center">
            <button
              className="h-10 border border-[#373ae3] m-1 p-1 px-2 rounded-2xl bg-[#373ae3] text-white flex items-center justify-around"
              onClick={() => setMore((pre) => !pre)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM72,216V192H184v24ZM184,75.64,128,118,72,76V40H184Z"></path>
              </svg>
              Show More
            </button>
          </div>
        )}
      </main>
    </>
  );
};
export default Homepage;
