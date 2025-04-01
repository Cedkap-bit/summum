"use client"

import { Hero } from "@/components/Home/Hero";
import { SearchInput } from "@/components/Home/SearchInput";
import Image from "next/image";
import { useEffect, useState } from "react";
import {  getCarsList, getCarsListModele} from "@/services";
import CarList from "@/components/Home/CarList";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import { motion } from "framer-motion";
import Footer from "@/components/Home/Footer";
import Detail from "./detail/id";

export default function Home() {
  
  const [carList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])
  
  useEffect(()=>{
    getCarList_();
  },[])
  
  
  const getCarList_= async() =>{
    /*const result:any = await getCarsList();
    setCarsList(result?.voitureLists);
    setCarsOrgList(result?.voitureLists);*/
    const result:any = await getCarsListModele();
    setCarsList(result?.modelCarprices);
    setCarsOrgList(result?.modelCarprices);
  } 

  /*const getCarsListModele_= async() =>{
    const result:any = await getCarsListModele();
    setCarsList(result?.modelCarprices);
    setCarsOrgList(result?.modelCarprices);
    console.log(result.data.modelCarprices)
  }*/
  const filterCarList=(marque:string)=>{
    const filterList = carsOrgList.filter((item:any)=> item.marque == marque);
    if (marque =="All cars") {
      getCarList_()
    } else{setCarsList(filterList) }
    
  }

  const orderCarList=(order:any)=>{
    const sorteData = [... carsOrgList].sort((a,b)=>
    order== -1?a.price - b.price:b.price - a.price);
    setCarsList(sorteData);
  }

  //console.log(getCarsListModele_)

  return (
   <div  className="max-w-7xl mx-auto p-10">
      <motion.div
                  initial ={{opacity:0}}
                  animate= {{
                    opacity:1,
                    transition: {delay:0.4, duration:0.4, ease:"easeIn"},
                  }}
                    >
              <Hero/>
              <SearchInput/>
              <CarsFiltersOptions 
              voitureLists = {carsOrgList} 
              setNom={(value:string) =>
                filterCarList(value)} 
              orderCarList= {(value:string) =>orderCarList(value)}
              />
              <CarList voitureLists={carList} />
              
              
              </motion.div>
   </div>
  );
}
