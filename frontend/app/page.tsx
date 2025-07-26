import Header from '../components/Header'
import DCAReplay from '../components/DCAReplay'
import DCAChart from '../components/DCAChart'

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <Header />
      <h1 className="text-2xl font-bold my-4">24-Hour DCA Replay (SOL)</h1>
      <DCAChart />
      <DCAReplay />
    </main>
  )
}
