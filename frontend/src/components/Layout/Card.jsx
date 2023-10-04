import { useNavigate } from "react-router-dom";

const Card = ({ city }) => {

const route = useNavigate();

const propertyPage = (e) => {
  route(`/property/${e}`)
}

  return (
    <>
      {city &&
        city.map((e, i) => (
          <section className="bg-white rounded-xl w-80 mx-5 my-3" key={i} onClick={()=> propertyPage(e.id)}>
            {/* Top div  */}
            <div className="relative p-1 h-72">
              <div
                className="bg-cover bg-center h-full rounded-md"
                style={{
                  backgroundImage: `url('${e.image}')`,
                }}
              >
                <div className="absolute inset-0 opacity-40"></div>
              </div>
              <div className="absolute top-0 left-0 flex items-center justify-between w-full px-3 py-3">
                <p className="text-base font-semibold text-[#373ae3] border border-[#373ae3] bg-white w-28 flex justify-center items-center rounded-3xl h-8">
                  For {e.available}
                </p>
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
            {/* bottom div */}
            <div className="border-red-600 h-48 flex flex-col justify-evenly">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ecc813"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
                <p className="text-blue-900 font-medium">{e.address}</p>
              </div>

              <div className="px-2">
                <p className="font-bold text-gray-800">{e.name}</p>
              </div>

              <div className="flex items-center justify-evenly">
                <div className="flex flex-col justify-evenly items-center px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#3c3f67"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
                  </svg>
                  <p>{e.description.room} Rooms</p>
                </div>
                <div className="flex flex-col justify-evenly items-center px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#3c3f67"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z"></path>
                  </svg>
                  <p>{e.description.bed} Beds</p>
                </div>
                <div className=" flex flex-col justify-evenly items-center px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#3c3f67"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H24A16,16,0,0,0,8,112v32a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V112A16,16,0,0,0,232,96Zm-40,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"></path>
                  </svg>
                  <p>{e.description.bath} Bath</p>
                </div>
                <div className=" flex flex-col justify-evenly items-center px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#3c3f67"
                    viewBox="0 0 256 256"
                  >
                    <path d="M90.34,61.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L136,43.31V96a8,8,0,0,1-16,0V43.31L101.66,61.66A8,8,0,0,1,90.34,61.66Zm64,132.68L136,212.69V160a8,8,0,0,0-16,0v52.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm83.32-72-32-32a8,8,0,0,0-11.32,11.32L212.69,120H160a8,8,0,0,0,0,16h52.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,237.66,122.34ZM43.31,136H96a8,8,0,0,0,0-16H43.31l18.35-18.34A8,8,0,0,0,50.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32Z"></path>
                  </svg>
                  <p>{e.description.area} sqft</p>
                </div>
              </div>

              <div className="flex justify-between px-2 mt-1">
                <p>
                  <span className="text-[#373ae3] font-bold">${e.price}</span>
                  /month
                </p>
                <button className="border border-[#373ae3] rounded-3xl p-1 text-[#373ae3] font-semibold px-2">
                  Read More
                </button>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};
export default Card;
