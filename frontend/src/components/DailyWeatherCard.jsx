import React from 'react'
import sunny from  "../assets/images/icon-sunny.webp"
import IconsSelector from './IconsSelector'
import { weather } from './IconsSelector'
const DailyWeatherCard = ({datas}) => {
    return (
    
    <div className='relative h-full w-full'>
        <div className='flex flex-col bg-slate-500 rounded-xl '>
            <div className='flex flex-col items-center p-4 '>
                {(new Date(datas[0])).toDateString().substring(0,3)}
                {console.log(datas[3] + weather(datas[3]))}
                <img src={weather(datas[3])} alt="" />

            </div>
            <div className='flex flex-row justify-between p-2 '>
                <div>
                    {datas[1]}°
                </div>
                <div>
                    {datas[2]}°
                </div>
            </div>
        </div>
    </div>
  )
}

export default DailyWeatherCard
