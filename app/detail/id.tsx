"use client";
import React from 'react'
import { useEffect, useState } from "react";
import {  getCarsList} from "@/services";
import { useRouter } from "next/router"

/*const [carList, setCarsList] = useState<any>([])
const [carsOrgList, setCarsOrgList] = useState<any>([])
useEffect(()=>{
  getCarList_();
},[])


const getCarList_= async() =>{
  const result:any = await getCarsList();
  setCarsList(result?.voitureLists);
  setCarsOrgList(result?.voitureLists);
}

const detailCarList=(id:any)=>{
  const filterList = carsOrgList.filter((item:any)=> item.id == id);
  return setCarsList(filterList) ;
}

export async function getServerSideProps() {
  const data = await getCarsList().then((res) => res);
 // fetch('https://api.example.com/data').then((res) => res.json());
  return { props: { data } };
}*/
export default  function ddytd({params}:any)
{
    
  return (
    <div>page --- {} </div>
  )
}


   
    
  
   
 
 