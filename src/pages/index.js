import { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const API_KEY = '26051bc174cc7df011fccc99145c644d';
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeather(currentWeatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=6&appid=${API_KEY}`
      );
      setForecast([currentWeatherResponse.data, ...forecastResponse.data.list.slice(1)]);

      setError(null);
    } catch (err) {
      setError('Lokasi tidak dapat ditemukan, tolong periksa kembali.');
      setWeather(null);
      setForecast([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-extrabold my-16 text-center">PERKIRAAN CUACA</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full max-w-lg">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Masukan Lokasi Yang Diinginkan"
            className="text-black px-4 py-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 w-full"
          />
          <button
            onClick={fetchWeather}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 mt-3 sm:mt-0"
          >
            CARI
          </button>
        </div>

        {error && <p className="text-red-500 mt-6 text-lg font-semibold">{error}</p>}
        {weather && (
          <div className="mt-10 bg-white p-6 sm:py-3 rounded-lg shadow-2xl text-center max-w-md w-full">
            <h1>HARI INI :</h1>
            <h2 className="text-3xl font-bold text-gray-800">
              {weather.name}, {weather.sys.country}
            </h2> 
            <p className="text-xl text-gray-700 mt-2 capitalize">{weather.weather[0].description}</p>
            <p className="text-5xl font-extrabold text-blue-500 mt-4">
              {Math.round(weather.main.temp)}°C
            </p>
            <div className="flex justify-between mt-6 text-gray-600 text-lg">
              <div>
                <p className="font-semibold">Kelembaban:</p>
                <p>{weather.main.humidity}%</p>
              </div>
              <div>
                <p className="font-semibold">Angin:</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}

        {forecast.length > 0 && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forecast.map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-xl text-center">
                <p className="text-lg font-bold text-black">{new Date(day.dt * 1000).toLocaleDateString()}</p>
                <p className="text-gray-700 capitalize mt-1">{day.weather[0].description}</p>
                <p className="text-blue-500 text-3xl font-extrabold mt-3">{Math.round(day.main.temp)}°C</p>
                <div className="flex justify-between mt-4 text-gray-600">
                  <div>
                    <p className="font-semibold">Kelembaban:</p>
                    <p>{day.main.humidity}%</p>
                  </div>
                  <div>
                    <p className="font-semibold">Angin:</p>
                    <p>{day.wind.speed} m/s</p>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        )}
        <div className="description-box text-center bg-blue-100 hover:bg-emerald-100 shadow-inner rounded-lg p-4 max-w-2xl w-full mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Informasi</h3>
          <p className="text-gray-700">
          "Selalu siap dengan cuaca! Dapatkan prakiraan cuaca terkini dan akurat langsung di genggaman Anda. Rencanakan aktivitas Anda dengan lebih baik dengan informasi suhu, curah hujan, kelembaban, dan banyak lagi. Unduh sekarang dan nikmati cuaca yang menyenangkan!"
          </p>
          <h3 className='text-xl font-semibold text-gray-800 mt-10'>Catatan :</h3>
          <i className='text-gray-700'>"Beberapa lokasi mungkin harus dtulis dengan nama lengkap"</i>
          <p className='text-gray-700'>Contoh : "Cipocok" (Error) "Cipocok Jaya" (Success)</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}