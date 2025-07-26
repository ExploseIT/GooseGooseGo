const mockData = [
  { hour: "09:00", price: 116.20, amount: 0.0869, total: 2.019, profit: 2.28 },
  { hour: "10:00", price: 117.10, amount: 0.0854, total: 2.105, profit: 2.67 },
]

export default function DCAReplay() {
  return (
    <table className="w-full mt-6 text-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-2 py-1">Hour</th>
          <th className="border px-2 py-1">Price (GBP)</th>
          <th className="border px-2 py-1">£10 Buys (SOL)</th>
          <th className="border px-2 py-1">Total SOL</th>
          <th className="border px-2 py-1">Profit</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row, i) => (
          <tr key={i}>
            <td className="border px-2 py-1">{row.hour}</td>
            <td className="border px-2 py-1">£{row.price}</td>
            <td className="border px-2 py-1">{row.amount.toFixed(4)}</td>
            <td className="border px-2 py-1">{row.total.toFixed(3)}</td>
            <td className="border px-2 py-1">+£{row.profit.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
