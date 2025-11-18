export type Project = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  technologies: string[]
  links: { demo: string; github: string }
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'erp-manufacturing-system',
    title: 'ERP Manufacturing System',
    description:
      'Enterprise ERP for manufacturing: production planning, procurement, inventory, BOM, finance, QA, and shop-floor tracking with real-time dashboards.',
    category: 'ERP',
    date: '2025',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/erp.png',
  },
  {
    slug: 'doc-spot-doctor-appointment-system',
    title: 'Doc Spot (Doctor Appointment System)',
    description:
      'Multi-clinic booking with doctor schedules, tele-consultation, e-prescriptions, reminders, and payments.',
    category: 'Healthcare',
    date: '2025',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Twilio'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/DocSpot.png',
  },
  {
    slug: 'food-delivery-application',
    title: 'Food Delivery Application',
    description:
      'End-to-end food ordering with restaurant panel, delivery partner app, live tracking, and payments.',
    category: 'Mobile',
    date: '2024',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/FoodDeliveryApp.png',
  },
  {
    slug: 'student-portal',
    title: 'Student Portal',
    description:
      'Student self-service portal for courses, attendance, results, fees, assignments, and notifications.',
    category: 'Web App',
    date: '2024',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/studentPortal.png',
  },
  {
    slug: 'real-estate-management-system',
    title: 'Real Estate Management System',
    description:
      'Property listing and sales CRM with leads, site visits, inventory, and commission workflows.',
    category: 'Real Estate',
    date: '2024',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/realestate.jpeg',
  },
  {
    slug: 'real-estate-rental-management',
    title: 'Real Estate Rental Management',
    description:
      'Rentals platform for listings, tenant onboarding, leases, rent collection, and maintenance.',
    category: 'Real Estate',
    date: '2024',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'farmer-procurement-application',
    title: 'Farmer Procurement Application',
    description:
      'Farm procurement with supplier onboarding, purchase cycles, quality checks, and logistics.',
    category: 'Supply Chain',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/FarmerProcurement.png',
  },
  {
    slug: 'inventory-and-warehousing-system',
    title: 'Inventory & Warehousing System',
    description:
      'Inventory control, warehouse locations, pick-pack-ship, GRN, and barcode-based operations.',
    category: 'ERP',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RabbitMQ'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/wms.jpeg',
  },
  {
    slug: 'accounting-system',
    title: 'Accounting System',
    description:
      'Financial accounting with ledgers, vouchers, GST/VAT, bank reconciliation, and reports.',
    category: 'Finance',
    date: '2023',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/accounting app.jpeg',
  },
  {
    slug: 'hrms',
    title: 'HRMS',
    description:
      'Human Resource Management: recruitment, onboarding, attendance, payroll, and performance.',
    category: 'HR',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/hrms.jpeg',
  },
  {
    slug: 'school-management-system',
    title: 'School Management System',
    description:
      'End-to-end school operations: admissions, timetable, exams, fees, LMS, and parent app.',
    category: 'EdTech',
    date: '2023',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/school_management_app.jpeg',
  },
  {
    slug: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Vehicle tracking, trip planning, fuel logs, maintenance schedules, and driver scorecards.',
    category: 'Logistics',
    date: '2023',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Maps API'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/fleetmanagement.png',
  },
  {
    slug: 'real-estate-platform-admin-panel',
    title: 'Real Estate Platform with Admin Panel',
    description:
      'Designed comprehensive real estate management system for admins and managers, ensuring seamless operations with an intuitive dashboard. Created a scalable design system and optimized user flows, improving property discovery time by 30%.',
    category: 'Real Estate',
    date: '2024',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'interior-design-website',
    title: 'Interior Design Website',
    description:
      'Designed a storytelling-focused interior design website with style quiz, cost estimator, and rich project galleries. Built a lightweight admin panel for project uploads and enquiries, boosting qualified leads by 22%.',
    category: 'Web Design',
    date: '2024',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Node.js'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'pixel-bharat-employee-management-system',
    title: 'Pixel Bharat Employee Management System & Mobile App (Admin)',
    description:
      'Designed and developing the employee management system, streamlining HR operations with a user-friendly interface for managing employee records and performance. Developed the mobile application specifically for admins, allowing easy access to employee data, attendance, and real-time management on the go.',
    category: 'HR',
    date: '2024',
    technologies: ['React', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'scott-keever-personal-websites',
    title: 'Scott Keever - 5 Personal Websites',
    description:
      'Designed five unique, brand-consistent personal websites for Scott Keever, integrating modern layouts, SEO-focused structures, and optimized UX for conversions. Delivered high-performance, responsive designs with tailored visual identities to enhance personal branding and online authority.',
    category: 'Portfolio',
    date: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'roamin-tribe-travel-website',
    title: 'Roamin Tribe - Travel Website',
    description:
      'Designed a visually immersive travel website with destination guides, booking integration, and experience-based search filters. Crafted a mobile-first, performance-optimized UI with interactive elements to boost user engagement and trip planning efficiency.',
    category: 'Travel',
    date: '2024',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    links: { demo: '#', github: '#' },
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentSlugs(slug: string): { prev?: string; next?: string } {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return {}
  const prev = index > 0 ? projects[index - 1].slug : undefined
  const next = index < projects.length - 1 ? projects[index + 1].slug : undefined
  return { prev, next }
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug)
  if (!current) return projects.slice(0, limit)
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category)
  const others = projects.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}


