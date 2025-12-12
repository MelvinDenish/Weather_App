import React, { useState, useEffect } from "react";
import api from "../lib/api";

const WeatherVariableCard = ({latitude , longitude}) => {
  const [data, setData] = useState(null);

  const varsList = [
    "apparent_temperature",
    "relative_humidity_2m",
    "wind_speed_10m",
    "precipitation"
  ];

  const varsLabelList = [
    "Feels Like",
    "Humidity",
    "Wind Speed",
    "Precipitation"
  ];
  const units = [
    "°" , "%" , "km/h" , "mm"
  ]

  useEffect(() => {
    const getVars = async () => {
      const response = await api.get("/forecast", {
        params: {
          latitude,
          longitude,
          current: varsList.join(","),
          timezone: "auto",
        },
      });

      setData(response.data);
    };

    getVars();
  }, [latitude, longitude]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 items-center my-10">
        {varsList.map((key, index) => (
        
    <div className="flex flex-col md:mx-5 max-md:my-3 max-md:items-center">
      <div className="bg-slate-500 w-[90%] p-5 rounded-xl flex flex-col border-2 border-indigo-600">
          <div key={key}> 
            <div className="text-sm pb-4 font-serif font-bold text-slate-200">
              {varsLabelList[index]}
            </div>
            <div className="text-2xl font-semibold">
              {data.current[key]}
              {units[index]}
            </div>
          </div>
          
      </div>
    </div>
        ))}
        </div>
  );
};

export default WeatherVariableCard;
