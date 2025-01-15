import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme, font, setFont } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
            Pengaturan Tampilan Web
          </h1>
          
          {/* Theme Settings */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <label className="block text-gray-700 dark:text-gray-200 text-xl font-bold mb-4">
              Tema Backgound
            </label>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Pilihlah antara gelap atau terang untuk kenyamanan tampilan
            </p>
            <button
              onClick={toggleTheme}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg 
                       font-semibold text-lg hover:from-blue-600 hover:to-purple-600 
                       transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Pindah ke {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          {/* Font Settings */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <label className="block text-gray-700 dark:text-gray-200 text-xl font-bold mb-4">
              Pengaturan Font
            </label>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Pilih Font yang anda sukai
            </p>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 
                       rounded-lg p-3 bg-white dark:bg-gray-800 focus:border-blue-500 
                       focus:outline-none transition duration-200"
            >
              <option value="serif">Serif</option>
              <option value="mono">Monospace</option>
            </select>

            {/* Font Preview */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Preview:</p>
              <p className={`font-${font} text-gray-800 dark:text-gray-200 text-lg`}>
                Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa   
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}