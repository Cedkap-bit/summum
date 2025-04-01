import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
             <h2 className="text-[40px] md:text-[60px] font-bold text-white"> Premium Car Rental in Your Area</h2>
             <h2 className="text-[20px] text-gray-500"> Book the selected car effortlessly, Pay for driving only, Book the Car Now</h2>
             <button className="p-2 mt-5 bg-[#fcb900] px-4 rounded-full hover:scale-105 transition-all text-white">Explore Car</button>
        </div>
        <div  style={{
              background: `linear-gradient(to left, #fcb900 50%, transparent 50%)`
            }}>
                <Image src="/hero.png" alt='' width={400} height={500} className="w-full object-fill "/>
        </div>
    </div>
  )
}
