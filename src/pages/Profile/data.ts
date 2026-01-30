import LOGO_ICON from "@assets/nk_logo.png";

export type Person = {
  id: number
  name: string
  role: string
  designation: string
  exp: number // years
  img: string
}

export const people: Person[] = [
  {
    id: 1,
    name: 'Arjun Patel',
    role: 'Director',
    designation: 'Founder & Managing Director',
    exp: 18,
    img: LOGO_ICON,
  },
  {
    id: 2,
    name: 'Meera Sharma',
    role: 'Supervisor',
    designation: 'Production Supervisor',
    exp: 9,
    img: LOGO_ICON,
  },
  {
    id: 3,
    name: 'Ravi Kumar',
    role: 'Supervisor',
    designation: 'Quality Control Supervisor',
    exp: 11,
    img: LOGO_ICON,
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'Worker',
    designation: 'Senior Carpenter',
    exp: 7,
    img: LOGO_ICON,
  },
  {
    id: 5,
    name: 'Kamal Singh',
    role: 'Worker',
    designation: 'Assembly Technician',
    exp: 5,
    img: LOGO_ICON,
  },
  {
    id: 6,
    name: 'Priya Nair',
    role: 'Worker',
    designation: 'Finishing Specialist',
    exp: 6,
    img: LOGO_ICON,
  },
]
