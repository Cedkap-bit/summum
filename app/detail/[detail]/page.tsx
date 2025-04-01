"use client"

import { useEffect, useState } from "react";
import {  getCarsID, getCarsList, getCarsModelID} from "@/services";
import { usePathname } from 'next/navigation';
import Detail from "../detail";


export default  function  carDetail()
{

  const [carsId, setId] = useState([]);
  const param = usePathname();


  useEffect(()=>{
    carIdDetail(param.split("/")[2]);
  },[]);
  const carIdDetail= async(carID:any) =>{
    getCarsModelID(carID).then((resp:any)=>setId(resp));
    
     }
      
  return (
  
    <div>
     <Detail carsId= {carsId} />
    </div>
    
  )
}
