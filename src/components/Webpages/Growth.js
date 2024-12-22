import React, { useContext } from "react";
import { DContext } from "../Datacontext/Datacontext";

export const Growth = () => {
  const { client } = useContext(DContext);
  console.log("client", client);

  // Split client data into chunks of 3
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const clientChunks = chunkArray(client || [], 3);

  return (
    <div className="companygrowth px-4 md:px-8 lg:px-16 py-8">
      {clientChunks && clientChunks.length > 0 ? (
        clientChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {chunk.map((data, index) => (
              <div
                key={index}
                className="flex-1 min-w-[240px] max-w-[320px] text-center p-4 border border-gray-200 rounded-lg shadow-md bg-white"
              >
                <img
                  src={data.image}
                  alt="Growth"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-2xl font-bold text-gray-800">{data.number}</p>
                <p className="text-gray-600 font-medium">{data.content}</p>
                <p className="text-sm text-gray-500 mt-2">{data.para}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No data available</div>
      )}
    </div>
  );
};
