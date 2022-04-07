import React from 'react'

const Filters = () => {
  return (
      <div>
        <div className='bg-purple-50 px-12 py-6 flex flex-col gap-4 items-start h-fit sticky top-1h'>
            <h1 className='text-xl font-bold'>Filters</h1>
            
            <button className="text-blue-800 font-bold">Clear All</button>
        </div>
      </div>
  )
}

export default Filters