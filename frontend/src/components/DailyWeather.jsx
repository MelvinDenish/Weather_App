import React, { useEffect, useState } from 'react'
import reverseGeocodingApi from '../lib/reverseGeocodingApi';
import axios from 'axios';
import api from '../lib/api';
import DailyWeatherCard from './DailyWeatherCard';

const DailyWeather = ({latitude ,longitude}) => {
    const [dates , setDates] = useState([]);
    const [maxs , setMaxs] = useState([]);
    const [mins , setMins] = useState([]);
    const [w_codes , setW_codes] = useState([]);
    useEffect(()=>{
        const getValues = async()=>
        {
                const res = await api.get("/forecast" , {
                    params:{
                        latitude,
                        longitude,
                        daily : "apparent_temperature_max,apparent_temperature_min,weather_code"
                    }
                })
                const dates = res.data.daily.time
                const maxs = res.data.daily.apparent_temperature_max;
                const mins = res.data.daily.apparent_temperature_min;
                const w_codes = res.data.daily.weather_code;
                setDates(dates);
                setMaxs(maxs);
                setMins(mins);
                setW_codes(w_codes);
        }
        getValues();
        },[latitude , longitude]
    )
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-5'>{

            dates.length > 0 ?
                dates.map((key , index)=>{
                     console.log(
            "index:", index,
            "date:", dates[index],
            "max:", maxs[index],
            "min:", mins[index],
            "code:", w_codes[index]
        );
          return (          <DailyWeatherCard key={index}
                                      datas={[
                                        dates[index] , 
                                        maxs[index],
                                        mins[index],
                                        w_codes[index]
                                      ]}
                    />)
                })
             : "Nothing"
            
              
    }
        </div>
    )
}

export default DailyWeather
