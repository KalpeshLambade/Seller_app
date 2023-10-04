const Homepage = () => {
  return (
    <>
      <main>
        {/* title bar */}
        <section className=" border-red-600 flex justify-between items-center px-10">
          {/* Cities */}
          <div className=" border-blue-500 flex">
            <div className="border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer">
              New York
            </div>
            <div className="border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer">
              Mumbai
            </div>
            <div className="border border-[#373ae3]  w-20 h-10 rounded-3xl flex justify-center items-center mx-2 cursor-pointer">
              Paris
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
          <div className="border border-blue-600 h-96 w-72 mx-5 my-3">
            <div className="relative">
              <div
                className="bg-cover bg-center h-80"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
              >
                <div className="absolute inset-0 opacity-40"></div>
              </div>
              <div className="absolute top-0 left-0 flex items-center justify-between w-full px-3 py-3">
                <p className="text-base font-semibold text-[#373ae3] border border-[#373ae3] bg-white w-28 flex justify-center items-center rounded-3xl h-8">For Rent</p>
                <button className="rounded-full border-red-500 h-9 w-9 bg-white flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#373ae3"
                    viewBox="0 0 256 256"
                    className=""
                  >
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border border-blue-600 h-96 w-72 mx-5 my-3"></div>
          <div className="border border-blue-600 h-96 w-72 mx-5 my-3"></div>
          <div className="border border-blue-600 h-96 w-72 mx-5 my-3"></div>
          <div className="border border-blue-600 h-96 w-72 mx-5 my-3"></div>
          <div className="border border-blue-600 h-96 w-72  mx-5 my-3 "></div>
        </section>
      </main>
    </>
  );
};
export default Homepage;
