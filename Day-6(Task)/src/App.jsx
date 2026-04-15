import React from 'react'
import Cards from './components/Cards'

const App = () => {
  const cardDetails = [
    {
      fullName: "Noah Thompson",
      description: "Product Designer who focuses on simplicity & usability.",
      likes: 72.9,
      posts: 828,
      views: 342.9,
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1741924242861-b301b4c04353?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fullName: "Emma Rodriguez",
      description: "UX Researcher passionate about user-centered design solutions.",
      likes: 89.4,
      posts: 642,
      views: 456.2,
      image: "https://images.unsplash.com/vector-1740801152014-dd3a3246af19?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1746092444052-661ae4de13a4?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fullName: "Liam Chen",
      description: "Frontend Developer specializing in React & modern frameworks.",
      likes: 125.7,
      posts: 1034,
      views: 789.1,
      image: "https://images.unsplash.com/vector-1742118848550-cafc9d362a98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1751196065564-a2ab51333c78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fullName: "Sophia Patel",
      description: "Brand Strategist creating memorable visual identities.",
      likes: 64.3,
      posts: 523,
      views: 298.7,
      image: "https://images.unsplash.com/vector-1744877946870-2fdd2d1442cd?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1769292737813-40323ff3e062?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fullName: "Alexander Kim",
      description: "Motion Designer bringing interfaces to life with animation.",
      likes: 156.8,
      posts: 947,
      views: 623.4,
      image: "https://images.unsplash.com/vector-1739283864562-8a8eff9b1cd2?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1766662025583-5a0ca840b621?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fullName: "Olivia Nguyen",
      description: "Graphic Designer crafting bold visuals and typography.",
      likes: 98.2,
      posts: 712,
      views: 521.6,
      image: "https://images.unsplash.com/vector-1751981367114-6df571b5aa68?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      coverImage: "https://images.unsplash.com/vector-1761633623751-c8c6d5340eb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];


  return (
    <div className='flex justify-between gap-10 flex-wrap py-10 px-10'>
      <Cards details={cardDetails} />
    </div>
  )
}

export default App