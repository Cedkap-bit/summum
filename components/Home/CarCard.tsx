import { Calendar, DollarSign, Fuel, Star, Users } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';



function CarCard(props:any){
  const [car, setCard]= useState(props.car);
  
  useEffect (()=>{
      if (props.car) {
        setCard(props.car)
      }
  },[props.car]);
  const [selectedCar, setSelectedCar] = useState<any>([]);

  
 
  return car&&(
    <motion.div
    initial ={{opacity:0}}
    animate= {{
      opacity:1,
      transition: {delay:0.4, duration:0.4, ease:"easeIn"},
    }}
      >
    <div className="">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl  hover:bg-amber-5  0 transition-colors">
              <img 
                src={car.image.url} 
                alt={car.name}
                className="h-48 w-96 object-cover mt-1"
                
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{car?.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{car.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">${car.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{(car.specification.year).split("-")[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Fuel className="w-4 h-4" />
                    <span>{car.specification.fuel}</span>
                  </div>
                  
                </div>
                <Link href={`/detail/${car?.id}`}  key={car.id} as={`/detail/${car.id}`}>
                  <button className="w-full mt-6 bg-[#fcb900] text-white py-2 rounded-lg
                    transition-colors font-semibold">
                    View Details
                  </button>
                  
                </Link>
                
              </div>
            </div>
    </div>
    </motion.div>
  )
}

export default CarCard