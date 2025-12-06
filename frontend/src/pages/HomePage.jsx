import Header from '../components/Header.jsx';
import LargeWeatherCard from '../components/LargeWeatherCard.jsx';
import Navbar from '../components/NavBar.jsx';
import { SearchIcon } from 'lucide-react';
import WeatherVariableCard from '../components/WeatherVariableCard.jsx';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='relative w-full h-full'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center p-5'>
              <div className='flex flex-row w-[70%]'>
                <LargeWeatherCard/>
              </div>
            </div>
          </div>


        </div>
    </div>
  )
}

export default HomePage;
