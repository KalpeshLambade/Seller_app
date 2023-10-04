import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import hotels from "../../JSON/Hotels.json"

const SinglePage = () => {
  const {id} = useParams();
  console.log(id);

//   const city = hotels.filter((data) => {
//     return data.id === id
//   });

//   console.log(city);

    


  return (
    <main className="bg-[#f4f4fd]">
        <section className=" border-red-600 flex flex-wrap items-center justify-evenly px-11 py-3">
            {/* <Card city={}/> */}
        </section>
    </main>
  )
}

export default SinglePage;
