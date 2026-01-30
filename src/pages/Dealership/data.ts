export type RationItem = {
  id: number
  name: string
  description?: string
  availableQty: number
  unit: string
  readyForCollection: boolean
  collectionFrom?: string // optional collection start date/time
  collectionTo?: string // optional collection end date/time
}

export const items: RationItem[] = [
  { id: 1, name: 'Rice (5kg)', description: 'Premium basmati blend', availableQty: 120, unit: 'pack', readyForCollection: true, collectionFrom: '2026-01-10', collectionTo: '2026-01-20' },
  { id: 2, name: 'Wheat (10kg)', description: 'Sharbati wheat', availableQty: 80, unit: 'bag', readyForCollection: false },
  { id: 3, name: 'Cooking Oil (5L)', description: 'Refined Sunflower Oil', availableQty: 50, unit: 'bottle', readyForCollection: true, collectionFrom: '2026-01-12', collectionTo: '2026-01-25' },
  { id: 4, name: 'Sugar (2kg)', description: 'Fine sugar', availableQty: 200, unit: 'pack', readyForCollection: true },
]

// Admin messages / notes that can be updated by editing this file
export const adminNotes: string[] = [
  '01 Jan 2026: Rice consignments have arrived — collection starts 10 Jan.',
  '05 Jan 2026: Ensure you bring valid ID at pickup.',
]
