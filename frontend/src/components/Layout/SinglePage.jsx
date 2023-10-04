import React from "react";
import { useParams } from "react-router-dom";
import hotels from "../../JSON/Hotels.json";
import Card from "./Card";

const SinglePage = () => {
  const allHotels = Object.values(hotels).flat();

  const { id } = useParams();
  const hotelData = allHotels.find((hotel) => hotel.id === parseInt(id, 10));
  const city = [hotelData];

  return (
    <main className="bg-[#f4f4fd]">
      <section className=" border-red-600 flex flex-wrap items-center justify-evenly px-11 py-3">
        <Card city={city} />
      </section>
    </main>
  );
};

export default SinglePage;
