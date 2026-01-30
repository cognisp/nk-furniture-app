import React from 'react'
import LOGO_ICON from "@assets/nk_logo.png";
import { Person, people } from './data'

const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
      <img
        src={person.img}
        alt={person.name}
        className="w-20 h-20 rounded-full object-cover border border-gray-200"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <span className="text-xs uppercase px-2 py-1 rounded-md bg-indigo-50 text-indigo-700">{person.role}</span>
        </div>
        <p className="text-sm text-gray-600">{person.designation}</p>
        <p className="mt-1 text-sm text-gray-500">Experience: {person.exp} year{person.exp > 1 ? 's' : ''}</p>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const directors = people.filter((p) => p.role === 'Director')
  const supervisors = people.filter((p) => p.role === 'Supervisor')
  const workers = people.filter((p) => p.role === 'Worker')

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Company Profile</h1>
        <p className="text-gray-600 mt-2">About our company, leadership, and team.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={LOGO_ICON}
              alt="Company"
              className="w-full md:w-1/2 rounded-lg object-cover border border-gray-100"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">NK Furniture</h2>
              <p className="text-gray-600 mt-2">
                NK Furniture is committed to delivering the right product to our customers — on time
                and with excellent quality. We combine skilled craftsmanship with modern processes
                to ensure durable, beautiful furniture tailored to your needs.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-green-600">●</span>
                  <span className="text-gray-700">Right product selection and expert recommendations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">●</span>
                  <span className="text-gray-700">On-time delivery and clear scheduling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">●</span>
                  <span className="text-gray-700">Quality materials and inspection at every step.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">●</span>
                  <span className="text-gray-700">Customer-first warranty and support.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Quick Facts</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex justify-between"><span>Established</span><strong>2008</strong></div>
            <div className="flex justify-between"><span>Locations</span><strong>3</strong></div>
            <div className="flex justify-between"><span>Avg Delivery</span><strong>2-4 weeks</strong></div>
            <div className="flex justify-between"><span>Warranty</span><strong>1 year</strong></div>
          </div>
        </aside>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {directors.map((d) => (
            <PersonCard key={d.id} person={d} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Supervisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supervisors.map((s) => (
            <PersonCard key={s.id} person={s} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Craftsmen & Workers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workers.map((w) => (
            <PersonCard key={w.id} person={w} />
          ))}
        </div>
      </section>
    </main>
  )
}
