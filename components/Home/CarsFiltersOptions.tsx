import React, { useEffect, useState } from 'react'
import {Button  } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { manufacturers } from '@/constant';

function CarsFiltersOptions({voitureLists,setNom, orderCarList}:any) {
    
    const[nomList, setNomList] = useState<any>(); 
    const BrandSet = new Set(); 
    useEffect(()=>{ 
        if (voitureLists) { filterCarlist(); } }
    ,[voitureLists]) 
        
    const filterCarlist= ()=>{ 
        voitureLists.forEach((element:any) => 
            { BrandSet.add(element.marque) }); 
    setNomList(Array.from(BrandSet)) 
  
  }

    const handleSelectCar = (value: string) => {
            setNom(value)

      }
    
      const handleSelectPrive = (value: string) => {
        orderCarList(parseInt(value))
      }
  return (
    <div className="mt-1 flex items-center justify-between">
            <div>
                <h2 className="text-[40px] font-bold">Cars Catalog</h2>
                <h2 className="text-[20px]">Explore our cars you might likes</h2>
            </div>
            <div className="flex gap-5 ">

                <Select onValueChange={handleSelectPrive}>
                <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a price"></SelectValue>
                  <SelectContent>
                    <SelectGroup >
                        <SelectLabel>Select a price</SelectLabel>
                        <SelectItem value="-1" >Min to Max</SelectItem>
                        <SelectItem value="1" >Max to Min</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>    
            

            <Select onValueChange={handleSelectCar}>
                <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a car"></SelectValue>
                  <SelectContent>
                    <SelectGroup >
                        <SelectLabel>Select a car</SelectLabel>
                        {nomList&&nomList.map((marque:string, index:number) => (
                        <SelectItem key={index} value={marque}>{marque}</SelectItem>
                        ))} 
                        <SelectItem value="All cars" >All cars</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
                    
            </div>
    </div>
  )
}
export default CarsFiltersOptions