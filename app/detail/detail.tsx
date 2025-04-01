import Image from 'next/image';
import { Car, Star, DollarSign, Fuel, Calendar, Speech as Speed, Users, Clock, ChevronRight, ArrowLeft, Shield, Gauge, Battery, Wifi, Camera, Sparkles, Award } from 'lucide-react';

function Detail({ carsId }: { carsId: any }) {
    const modelCarprice = carsId?.modelCarprice || {};

    // Extract properties safely
    const {
        id,
        name,
        image,
        price,
        performance,
        rating,
        safety,
        specification,
        features,
        description,
        gallery,
    } = modelCarprice;

    
    return (
          
        <div  className="max-w-7xl mx-auto p-10">


            <div className="py-8">
                {/* Back Button */}
                <button 
                    
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Cars
                </button>

                {/* Car Header */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                    <h1 className="text-4xl font-bold text-amber-400 mb-4">{name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white">{rating} Rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                        <DollarSign className="w-5 h-5 text-amber-400" />
                        <span className="font-semibold">{price}</span>
                        </div>
                    </div>
                    <p className="text-white text-lg mb-6">{description?.text}</p>
                    <button className="bg-amber-400 text-white px-8 py-3 rounded-lg 
                        hover:bg-blue-700 transition-colors text-lg font-semibold">
                        Schedule Test Drive
                    </button>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <img 
                        src={image?.url} 
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Gauge className="w-8 h-8 text-amber-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Top Speed</h3>
                    <p className="text-gray-600">{specification?.speed} KM/H</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Battery className="w-8 h-8 text-amber-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Fuel Type</h3>
                    <p className="text-gray-600">{specification?.fuel}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Users className="w-8 h-8 text-amber-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Seating</h3>
                    <p className="text-gray-600">{specification?.seats} Seats</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Calendar className="w-8 h-8 text-amber-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Year</h3>
                    <p className="text-gray-600"></p>
                    </div>
                </div>

                {/* Gallery */}
                <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {gallery?.map((img: any, index: number) => (
                    <div key={index} className="rounded-xl overflow-hidden h-64">
                        <img 
                        key={index}
                        src={image.url}
                        
                        className="w-full h-full object-cover"
                        />
                    </div>
                    ))}
                </div>

                {/* Features and Performance */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-amber-400" />
                        Key Features
                    </h2>
                    <ul className="grid gap-4">
                        
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            {safety?.text}
                        </li>
                        
                    </ul>
                    </div>
                    <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Award className="w-6 h-6 text-amber-400" />
                        Performance
                    </h2>
                    <div className="grid gap-4">
                        <div>
                        <h3 className="font-semibold text-amber-400">Engine</h3>
                        <p className="text-white">{performance?.engine}</p>
                        </div>
                        <div>
                        <h3 className="font-semibold text-amber-400">Acceleration</h3>
                        <p className="text-white">{performance?.acceleration}</p>
                        </div>
                        <div>
                        <h3 className="font-semibold text-amber-400">Transmission</h3>
                        <p className="text-white">{performance?.transmission}</p>
                        </div>
                        <div>
                        <h3 className="font-semibold text-amber-400">Drive Train</h3>
                        <p className="text-white">{performance?.driveTrain}</p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Safety Features */}
                <div className="bg-amber-400 rounded-2xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-8 h-8 text-white" />
                    <h2 className="text-2xl font-bold text-white">Safety Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                   
                        <div  className="flex items-center gap-4 text-white">
                        {features?.text}
                        </div>
                    
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Detail;