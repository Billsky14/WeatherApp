import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeContext';

export default function ContactUs() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'yuzusuika23@gmail.com'
      };

      await emailjs.send(
        'service_fcq2x89', 
        'template_bdm3niu', 
        templateParams,
        '8Z3mrLU7q6mrNLLP9' 
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Navbar />
      <main className="flex-grow py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Contact Info */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">informasi Kontak</h2>
              <div className="space-y-2 text-gray-600">
                <p>Email: yuzusuika23@gmail.com</p>
                <p>Telepon: (+62) 895-3288-20988</p>
                <p>Alamat: Warung pojok di, Jl. Ciwaru Raya No.73, Cipare, Kec. Serang, Kota Serang, Banten</p>
              </div>
            </div>

            {/* Status Messages */}
            {status === 'sending' && (
              <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded">
                Mengirim pesan...
              </div>
            )}
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Pesan berhasi; dikirim!
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                Gagal mengirim pesan. Silahkan coba kembali.
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Nama Lengkap :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Tulisa Pesan :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}