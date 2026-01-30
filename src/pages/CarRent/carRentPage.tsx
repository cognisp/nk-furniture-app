import React, { useEffect, useState } from 'react'
import { cars, Car } from './data'

type Booking = {
  id?: string
  name: string
  phone: string
  email?: string
  carId: number
  from: string
  to: string
  message?: string
  createdAt?: string
}

const API_BASE = 'http://localhost:4000'

export default function CarRentPage() {
  const [selectedCar, setSelectedCar] = useState<number>(cars[0].id)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  async function fetchBookings() {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE}/api/bookings`)
      const data = await res.json()
      setBookings(data as Booking[])
    } catch (err: any) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!name || !phone || !from || !to) {
      setError('Please fill required fields')
      return
    }

    const booking: Booking = {
      name,
      phone,
      email,
      carId: selectedCar,
      from,
      to,
      message,
    }

    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      })
      if (!res.ok) throw new Error('Failed to save booking')
      const saved = await res.json()
      setBookings((s) => [saved, ...s])
      // clear form
      setName('')
      setPhone('')
      setEmail('')
      setFrom('')
      setTo('')
      setMessage('')
    } catch (err: any) {
      setError(String(err))
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Car Rental</h1>
        <p className="text-gray-600">Book a car by phone or via the form below. All bookings are saved for admin records.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Book Online</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Select Car</label>
              <select value={selectedCar} onChange={(e) => setSelectedCar(Number(e.target.value))} className="mt-1 block w-full border rounded px-3 py-2">
                {cars.map((c: Car) => (
                  <option key={c.id} value={c.id}>{c.name} — ₹{c.pricePerDay}/day</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium">From (date & time)</label>
                <input type="datetime-local" value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">To (date & time)</label>
                <input type="datetime-local" value={to} onChange={(e) => setTo(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
              <input placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            <div>
              <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            <div>
              <textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>

            {error && <div className="text-red-600">{error}</div>}

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Submit Booking</button>
              <span className="text-sm text-gray-500">Or call us at <a href="tel:+911234567890" className="text-indigo-600">+91 12345 67890</a></span>
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-3">Available Cars</h3>
            <div className="grid grid-cols-1 gap-3">
              {cars.map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <img src={c.img} alt={c.name} className="w-24 h-16 object-cover rounded" />
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-gray-500">Seats: {c.seats} • ₹{c.pricePerDay}/day</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-3">Existing Bookings</h3>
            {loading ? (
              <div>Loading...</div>
            ) : bookings.length === 0 ? (
              <div className="text-sm text-gray-500">No bookings yet.</div>
            ) : (
              <ul className="space-y-2 max-h-64 overflow-auto">
                {bookings.map((b, i) => (
                  <li key={i} className="border rounded p-2">
                    <div className="flex justify-between text-sm">
                      <strong>{b.name}</strong>
                      <span className="text-gray-500">{new Date(b.createdAt || '').toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-600">{b.phone} • {b.email}</div>
                    <div className="text-sm mt-1">Car: {cars.find(c=>c.id===b.carId)?.name || '—'}</div>
                    <div className="text-sm text-gray-600">From: {b.from} • To: {b.to}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </section>
    </main>
  )
}
