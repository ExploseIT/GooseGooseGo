import { useEffect, useState } from 'react';

type GooseCoinInfo = {
  id: number;
  content: string;
  updated: string;
};

export default function GooseCoinPage() {
  const [data, setData] = useState<GooseCoinInfo | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/goosecoin/`, {
        cache: 'no-store',
      });
      const json = await res.json();
      console.log("✅ GooseCoin data received:", json);
      setData(json);
    } catch (err) {
      console.error("❌ Failed to fetch GooseCoin info:", err);
    } finally {
      setLoading(false); // ✅ THIS WAS MISSING
    }
  };

  fetchData();
}, []);


  if (loading) return <p>Loading GooseCoin info...</p>;
  if (!data) return <p>Error loading GooseCoin info.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>🪙 GooseCoin Info</h1>
      <p><strong>Last Updated:</strong> {new Date(data.updated).toLocaleString()}</p>
     <div
  style={{ lineHeight: '1.5em', marginTop: '1rem' }}
  dangerouslySetInnerHTML={{ __html: data.content }}
/>

    </div>
  );
}
