import React, { useEffect } from 'react'
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import iconFog from "../assets/images/icon-fog.webp";
import iconSunny from "../assets/images/icon-sunny.webp";
import iconStorm from "../assets/images/icon-storm.webp";
import iconSnow from "../assets/images/icon-snow.webp";
import iconRain from "../assets/images/icon-rain.webp";
import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
export const weather = (code)=>{
        if (code === 0) return iconSunny;

        if (code >= 1 && code <= 3) return iconPartlyCloudy;

        if (code >= 45 && code <= 48) return iconFog;

        if (code >= 51 && code <= 55) return iconDrizzle;

        if (code >= 61 && code <= 65) return iconRain;

        if (code >= 71 && code <= 75) return iconSnow;

        if(code > 75 && code <= 95) return iconStorm

        if (code >= 95) return iconStorm;
    
}
const IconsSelector = ({weather_code}) => {
    
    return (
        <div>
            <img src={weather(weather_code)} className='size-[70%] max-sm:size-[10%]' alt="weather_icon" />
        </div>
    )
}

export default IconsSelector
