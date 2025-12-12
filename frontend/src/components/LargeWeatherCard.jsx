import { useEffect, useState } from 'react'
import api from '../lib/api';
// import {formatDate} from "../lib/formatDate.js"
import WeatherVariableCard from './WeatherVariableCard.jsx';
import DailyWeather from './DailyWeather.jsx';
import reverseGeocodingApi from '../lib/reverseGeocodingApi.js';
import IconsSelector from './IconsSelector.jsx';
import geocodingApi from '../lib/geocodingapi.js';
const LargeWeatherCard = ({location , setLocation}) => {
    const [data , setData] = useState(null);
    const [latitude , setLatitude] = useState(0);
    const [longitude , setLongitude] = useState(0);
    
    useEffect(()=>
    {   if(!location)
        {        const getDetails = async()=>{
                    try {
                        const loc = navigator.geolocation.getCurrentPosition(async(pos)=>{
                            const lat = pos.coords.latitude;
                            const lon = pos.coords.longitude;
                            console.log(lat);
                            console.log(lon);
                            setLatitude(lat);
                            setLongitude(lon);  
                        const res = await api.get("/forecast" , {
                            params:{
                                latitude:lat,
                                longitude:lon,
                                current:'temperature_2m,weather_code',
                                timezone:'auto',
                            },
                        })
                        const loc = await reverseGeocodingApi.get("/reverse" , {
                            params:{
                                lat:lat,
                                lon:lon,
                                apiKey:"9412d2310eff498d958f9127b9bc5760"
                            }
                        })
                        const city = loc.data.features[0].properties.city;
                        const country = loc.data.features[0].properties.country;
                        console.log(loc);
                        setLocation(city + " , " + country);
                        setData(res.data);

                        console.log((new Date(res?.current?.time)).toDateString)
                        },(error)=>{console.log(error);}
                    )
                    }
                    catch (error) {
                        console.log(error , "Error in useEffect : " + error);
                    }
                }
                getDetails();}
        else{
            const getDetailsFromLocation =async() => {
                const res = await geocodingApi.get("/search" , {
                    params : {text:location,
                    apiKey : "9412d2310eff498d958f9127b9bc5760"}
                })
                const lat = res.data.features[0].properties.lat;
                const lon = res.data.features[0].properties.lon;
                setLatitude(lat);
                setLongitude(lon);
                const response = await api.get("/forecast" , {
                            params:{
                                latitude:lat,
                                longitude:lon,
                                current:'temperature_2m,weather_code',
                                timezone:'auto',
                            },
                        })
                setData(response.data);
            }
            getDetailsFromLocation();
        }
        
        }
    ,[location])

    return (
        <div className='h-full w-full'>
            <div className='bg-primary rounded-3xl flex-wrap'>  
                <div className='grid md:grid-cols-2 max-md:grid-rows-2 px-10 py-20 '>
                    {
                        data?
                        <>
                            <div className='flex flex-col justify-center'>
                                    <div className='font-bold text-4xl'>{location}</div>
                                    <div >{(new Date(data?.current?.time).toDateString())}<br/>
                                    </div>
                                </div>
                                <div className='font-bold text-[400%] flex flex-row items-center'>
                                <div> {
                                <IconsSelector weather_code = {data?.current?.weather_code}/>
                                }
                            </div>
                                <div>
                                    {data?.current?.temperature_2m}°
                                </div>
                            </div>
                        </> : ("Loading...")
                    }
                    </div>
                </div>
                    <WeatherVariableCard  latitude = {latitude}  longitude = {latitude}  />
                <div className='text-lg font-mono'>
                    Daily forecast
                </div>
                <DailyWeather latitude = {latitude}  longitude = {longitude}/>

            </div>
  )
}

export default LargeWeatherCard
