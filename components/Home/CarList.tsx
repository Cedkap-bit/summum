import React from 'react'
import CarCard from './CarCard'

function CarList(props:any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-10">
        {props.voitureLists.map(( car:any, index:number)=>(
            <div className="" key={index}>
                <CarCard   car={car} />
            </div>
        ))}
    </div>
  )
}

export default CarList