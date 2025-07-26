export async function fetchDCAData() {
  const res = await fetch('/api/dca24')
  if (!res.ok) throw new Error('Failed to fetch DCA data')
  return res.json()
}
