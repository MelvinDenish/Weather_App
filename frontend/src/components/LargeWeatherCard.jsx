import React, { useEffect, useState } from 'react'
import api from '../lib/api';
import {formatDate} from "../lib/formatDate.js"
import { Cloudy, Sun } from 'lucide-react';
import WeatherVariableCard from './WeatherVariableCard.jsx';
const LargeWeatherCard = () => {
    const [data , setData] = useState(null);   
    const [location , setLocation] = useState("Berlin , Germany");
    const [latitude , setLatitude] = useState(11.3248);
    const [longitude , setLongitude] = useState(77.7274);
    
    useEffect(()=>
    {   
        const getDetails = async()=>{
            try {
                const res = await api.get("/forecast" , {
                    params:{
                        latitude:latitude,
                        longitude:longitude,
                        current:'temperature_2m,is_day',
                        timezone:'auto',
                    },
                })
                setData(res.data);
                console.log(formatDate(new Date(res?.current?.time)))

            }
            catch (error) {
                console.log(error , "Error in useEffect in line 7")
            }
        }
        getDetails();
    }
    ,[])

    return (
        <div className='h-full w-full'>
            <div className='bg-primary rounded-3xl flex-wrap'>
                <div className='grid md:grid-cols-2 max-md:grid-rows-2 px-10 py-20 '>
                    {
                        data?
                        <>
                        <div className='flex flex-wrap flex-col justify-center'>
                            <div className='font-bold text-2xl'>{location}</div>
                            <div >{formatDate(new Date(data?.current?.time))}<br/></div>
                        </div>
                        <div className=' flex-wrap font-bold text-[400%] flex flex-row justify-end items-center gap-7'>
                        <div> {data.current.is_day ? <Sun/> : <Cloudy/>
                            } </div>
                            {data?.current?.temperature_2m}°
                            </div>
                        </> : ("Loading...")
                    }
                    </div>
                </div>
                    <WeatherVariableCard/>

            </div>
  )
}

export default LargeWeatherCard
