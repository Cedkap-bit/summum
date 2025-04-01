
"use client";
import React from 'react'
import { Car, Star, DollarSign, Fuel, Calendar, Speech as Speed, Users, Clock, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

const history = () => {
  return (
    
    <div  className="max-w-7xl mx-auto ">
        <motion.div
            initial ={{opacity:0}}
            animate= {{
              opacity:1,
              transition: {delay:0.4, duration:0.4, ease:"easeIn"},
            }}
              >
        
            <div className="py-12">
            <div className="relative overflow-hidden mb-12">
            <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Car"
            className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="px-8 md:px-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Experience Luxury <br />at Its Finest
                </h2>
                <p className="text-gray-200 text-lg mb-8 max-w-xl">
                Discover our premium selection of luxury vehicles, 
                where performance meets sophistication.
                </p>
                <button className="bg-amber-400 text-white px-8 py-3 rounded-lg 
                hover:bg-blue-700 transition-colors text-lg font-semibold">
                Explore Cars
                </button>
            </div>
            </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                {
                    title: "The Birth of Mercedes-Benz",
                    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2070&q=80",
                    date: "March 15, 2024",
                    readTime: "8 min read",
                    excerpt: "How two innovative minds, Gottlieb Daimler and Karl Benz, revolutionized the automotive industry..."
                },
                {
                    title: "Ferrari: A Legacy of Speed",
                    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=2070&q=80",
                    date: "March 12, 2024",
                    readTime: "6 min read",
                    excerpt: "From racing glory to luxury street cars, the story of Enzo Ferrari's vision..."
                },
               
                ].map((post, index) => (
                <div key={index} className="bg-white  overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                        Read More <ChevronRight className="w-4 h-4" />
                    </button>
                    </div>
                </div>
                ))}
            </div>

            {/* Featured Article */}
            <div className="bg-[#fcb900]  overflow-hidden">
                <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-black mb-4">
                    The Golden Age of American Muscle Cars
                    </h3>
                    <p className="text-gray-400 mb-6">
                    Dive deep into the era that gave birth to legendary vehicles like the Ford Mustang, 
                    Chevrolet Camaro, and Dodge Charger. Discover how these powerful machines became 
                    symbols of American automotive excellence.
                    </p>
                    <button className="bg-amber-200 text-black px-6 py-3 rounded-lg 
                    hover:bg-amber-800 transition-colors font-semibold self-start">
                    Read Full Story
                    </button>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=2070&q=80"
                    alt="Classic Muscle Car"
                    className="h-full w-full object-cover"
                />
                </div>
            </div>
            </div>
            </motion.div>
    </div>
    
  )
}

export default history