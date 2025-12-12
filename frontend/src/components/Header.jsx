import { useRef, useState } from 'react'
import { SearchIcon } from 'lucide-react';
import LargeWeatherCard from './LargeWeatherCard';
const Header = () => {
    const [location , setLocation] = useState("");
    const locationRef = useRef();
    
    const makeChanges =  () => {
        setLocation(locationRef.current.value);
    }
    return ( 
    <div>
      <div className='relative  w-full h-full'>
            <div className='container max-7xl mx-auto '>
                <div className='flex flex-col items-center flex-wrap gap-10'>
                    <h1 className='font-bold text-4xl text-slate-400 max-w-3xl text-center break-words'>
                        How's the sky looking Today?..
                    </h1>
                    <div className='w-full flex flex-row justify-center gap-5 mx-auto p-4'>
                            <label className='input w-full max-w-md sm:max-w-lg ring-1 ring-slate-500 focus:outline-slate-400 outline-1 rounded-xl'>
                                <SearchIcon className='size-5 opacity-65'/>
                                <input type="text" placeholder='Search for particular place'
                                ref={locationRef}
                                className='input input-sm px-4 focus:outline-none'
                                />
                            </label>
                        
                        <button onClick={makeChanges} className='btn p-5 ring-1 ring-slate-100 rounded-xl bg-primary'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div className='relative w-full h-full'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center p-5'>
              <div className='flex flex-row w-[70%] '>
                <LargeWeatherCard location = {location} setLocation = {setLocation}/>
              </div>
            </div>
          </div>


        </div>

    </div>
  )
}

export default Header
