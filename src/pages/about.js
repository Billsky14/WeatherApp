import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Billy Joevansen',
      npm: '1101221128',
      image: '/img/billy.jpg',
      description: 'Just Chill...',
    },
    {
      name: 'Nandang Aryanto',
      npm: '1101221096',
      image: '/img/images.jpg',
      description: 'Hidup seperti larry.',
    },
    {
      name: 'Hendra Mauladani',
      npm: '101221085',
      image: '/img/mauladani.png',
      description: 'Pantang menyerah.',
    },
  ];

  return (
      <div className="min-h-screen">
        <Navbar />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-5xl font-bold text-center mb-6">KELOMPOK II</h1>
        <p className="text-xl text-center text-justify max-w-3xl mx-auto">
        Inisiatif kami untuk membuat informasi cuaca lebih mudah diakses oleh semua orang. Dengan website ini, kami berharap dapat membantu masyarakat dalam merencanakan aktivitas sehari-hari, serta meningkatkan kesiapsiagaan terhadap cuaca ekstrem.
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="py-12 bg-gray-100 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ANGGOTA KELOMPOK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-mono text-black font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-blue-600 text-center mb-4">{member.npm}</p>
              <p className="text-gray-600 text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-14">
        <h1 className="text-center font-bold text-4xl mb-10">POWERED BY</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyan-200 rounded-lg flex justify-center items-center"
            >
              <a href='https://nextjs.org/' target='blank' className="flex justify-center">
                <Image
                  src="/next.svg"
                  alt="logo-aplikasi"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto"
                />
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-green-200 rounded-lg flex justify-center items-center"
            >
              <a href='https://tailwindcss.com/' target='blank' className="flex justify-center">
                <Image
                  src="/tailwind.svg"
                  alt="logo-aplikasi"
                  width={400}
                  height={400}
                  priority
                  className="mx-auto"
                />
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-amber-100 rounded-lg flex flex-col justify-center items-center"
            >
              <a href='https://openweathermap.org/' target='blank' className="flex justify-center">
                <Image
                  src="/openweather.svg"
                  alt="logo-aplikasi"
                  width={150}
                  height={100}
                  priority
                  className="mx-auto"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}