import express from 'express'
import fs from 'fs/promises'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const DATA_FILE = path.resolve('./src/pages/CarRent/data.txt')

app.get('/api/bookings', async (req, res) => {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    let raw = ''
    try {
      raw = await fs.readFile(DATA_FILE, 'utf8')
    } catch (e) {
      raw = ''
    }
    const lines = raw.split('\n').filter(Boolean)
    const items = lines.map((l) => JSON.parse(l))
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.post('/api/bookings', async (req, res) => {
  try {
    const booking = req.body
    const record = { ...booking, createdAt: new Date().toISOString() }
    const line = JSON.stringify(record) + '\n'
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
    await fs.appendFile(DATA_FILE, line, 'utf8')
    res.status(201).json(record)
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Booking server listening on http://localhost:${port}`))
