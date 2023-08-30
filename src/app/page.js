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
    const newLanguage = data.language === 'en' ? 'es' : 'en';
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to the Cookie App</h1>
      <div>
        <div>
          <p>Language: {data.language}</p>
          <p>Theme: {data.theme}</p>
        </div>
        <button onClick={toggleData}>Toggle Data</button>
      </div>
    </main>
  )
}
