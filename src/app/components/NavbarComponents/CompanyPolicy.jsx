import Link from 'next/link'
import React from 'react'

const CompanyPolicy = () => {
  return (
    <div className="group relative">
               <button className="text-white hover:text-orange-600">About</button>
               <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded-md shadow-lg min-w-[160px] z-50">
                 <Link
                   href="/about"
                   className="block px-4 py-2 hover:bg-cyan-500 hover:text-white"
                 >
                   About Us
                 </Link>
                 <Link
                   href="/refundpolicy"
                   className="block px-4 py-2 hover:bg-cyan-500 hover:text-white"
                 >
                   Refund Policy
                 </Link>
                 <Link
                   href="/privacypolicy"
                   className="block px-4 py-2 hover:bg-cyan-500 hover:text-white"
                 >
                   Privacy Policy
                 </Link>
               </div>
             </div>
  )
}

export default CompanyPolicy