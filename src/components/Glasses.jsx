import React, { useState } from "react";

export const Glasses = () => {
  const list = [
    {
      id: 1,
      url: "./glassesImage/v1.png",
    },
    {
      id: 2,
      url: "./glassesImage/v2.png",
    },
    {
      id: 3,
      url: "./glassesImage/v3.png",
    },
    {
      id: 4,
      url: "./glassesImage/v4.png",
    },
    {
      id: 5,
      url: "./glassesImage/v5.png",
    },
    {
      id: 6,
      url: "./glassesImage/v6.png",
    },
    {
      id: 7,
      url: "./glassesImage/v7.png",
    },
    {
      id: 8,
      url: "./glassesImage/v8.png",
    },
    {
      id: 9,
      url: "./glassesImage/v9.png",
    },
  ];

  const [glasses, setGlasses] = useState();
  // const handleClick = () => {
  //   setGlasses()
  // }

  console.log(glasses);

  return (
    <div className="flex items-center">
      <div className="w-1/2 relative">
        <img src="./public/glassesImage/model.jpg" alt="" />
        {glasses && (
          <img
            src={glasses}
            alt=""
            className="absolute top-[150px] left-[115px] w-[250px] h-20"
          />
        )}
      </div>
      <div className="w-1/2 flex gap-4 flex-wrap items-center">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-[200px] cursor-pointer bg-gray-50"
            onClick={() => {
              setGlasses(item.url);
            }}
          >
            <img src={item.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
