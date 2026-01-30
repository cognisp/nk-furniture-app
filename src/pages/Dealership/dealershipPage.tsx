import React, { useState } from 'react'
import { items, adminNotes, RationItem } from './data'

export default function DealershipPage() {
  const [selectedItem, setSelectedItem] = useState<RationItem | null>(null)
  const [interestName, setInterestName] = useState('')
  const [interestPhone, setInterestPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function openModal(item: RationItem) {
    setSelectedItem(item)
    setSubmitted(false)
    setInterestName('')
    setInterestPhone('')
  }

  function submitInterest(e: React.FormEvent) {
    e.preventDefault()
    // We keep this client-side only. Admin can check incoming calls or manual records.
    setSubmitted(true)
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Dealership — Ration Distribution</h1>
        <p className="text-gray-600">You are a distributor. Check what stock is ready for collection and read admin notes here.</p>
      </header>

      {adminNotes.length > 0 && (
        <section className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h2 className="font-semibold">Latest Notes</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {adminNotes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <article key={it.id} className="bg-white rounded shadow p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{it.name}</h3>
                {it.description && <p className="text-sm text-gray-600">{it.description}</p>}
                <div className="text-sm text-gray-600 mt-2">Available: <strong>{it.availableQty} {it.unit}</strong></div>
                {it.readyForCollection ? (
                  <div className="mt-2 text-sm text-green-700">Ready for collection{it.collectionFrom ? ` from ${it.collectionFrom}` : ''}{it.collectionTo ? ` until ${it.collectionTo}` : ''}</div>
                ) : (
                  <div className="mt-2 text-sm text-gray-500">Not yet ready for collection</div>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => openModal(it)} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">I'm coming</button>
                <a href="tel:+911234567890" className="text-sm text-indigo-600">Call to book</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* modal-like panel */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Collect: {selectedItem.name}</h3>
              <button onClick={() => setSelectedItem(null)} className="text-gray-500">Close</button>
            </div>
            <div className="text-sm text-gray-700 mb-4">
              <div>Available: <strong>{selectedItem.availableQty} {selectedItem.unit}</strong></div>
              {selectedItem.collectionFrom && <div>Collection window: {selectedItem.collectionFrom}{selectedItem.collectionTo ? ` - ${selectedItem.collectionTo}` : ''}</div>}
            </div>

            {!submitted ? (
              <form onSubmit={submitInterest} className="space-y-3">
                <input required placeholder="Your name" value={interestName} onChange={(e) => setInterestName(e.target.value)} className="block w-full border rounded px-3 py-2" />
                <input required placeholder="Phone number" value={interestPhone} onChange={(e) => setInterestPhone(e.target.value)} className="block w-full border rounded px-3 py-2" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Notify Admin</button>
                  <a href="tel:+911234567890" className="text-sm text-indigo-600">Or call +91 12345 67890</a>
                </div>
              </form>
            ) : (
              <div className="text-green-700">Thanks — your interest has been recorded. Admin will contact you.</div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
