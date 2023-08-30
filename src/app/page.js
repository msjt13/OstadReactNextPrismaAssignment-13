'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState({ language: 'en', theme: 'light' });

  // Fetch cookie data on component mount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/cookie');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  const toggleData = async () => {
    const newLanguage = data.language === 'en' ? 'bn' : 'en';
    const newTheme = data.theme === 'light' ? 'dark' : 'light';

    const response = await fetch('/api/cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: newLanguage,
        theme: newTheme,
      }),
    });

    const result = await response.json();
    setData(result);
  };
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Cookie App</h1>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-gray-100 p-5 rounded-md shadow-md space-y-2">
            <p className="text-xl font-semibold">Language: {data.language}</p>
            <p className="text-xl font-semibold">Theme: {data.theme}</p>
          </div>
          <button onClick={toggleData} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">Toggle Data</button>
        </div>
      </main>
  )
}
