import React from 'react'


export default function Home() {
  return (
      
  <>
  <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
  <div className="bg-teal-100 p-4 shadow-md rounded-lg">
    
    <h2 className="text-xl font-semibold">Card 1</h2>
    <p>Details about card 1...</p>
  </div>
  <div className="bg-teal-100 p-4 shadow-md rounded-lg">
    
    <h2 className="text-xl font-semibold">Card 2</h2>
    <p>Details about card 2...</p>
  </div>
  <div className="bg-teal-100 p-4 shadow-md rounded-lg">
    
    <h2 className="text-xl font-semibold">Card 2</h2>
    <p>Details about card 2...</p>
  </div>
</div>

  </>
  )
}
