import { Car, Map, Calendar1Icon } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

export const SearchInput = () => {
  return (
    <div className="p-15 mt-5">
        <h2 className="text-center text-[20px] text-gray-400">Lets Search what you need</h2>
        <div className="flex justify-center">
            <div className="flex flex-wrap bg-gray-100 p-1 px-5 gap-2 border-amber-300 border-5  ">
                <div className="flex items-center ">
                    <Map className="w-8 h-8 text-gray-400 " />
                    <Input type="text" placeholder='location' className="p-2 outline-none bg-trans text-gray-400" />
                    
                </div>
                <div className="flex items-center">
                    <Calendar1Icon className="w-8 h-8 text-gray-400" />
                    <Input type="date" placeholder='location' className="p-2 outline-none bg-trans text-gray-400" />
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
