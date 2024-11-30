import { Copyright, Heart } from 'lucide-react';

const Footer = () => {
 return (
   <footer className="mt-20 py-6 border-t border-gray-800">
     <div className="max-w-7xl mx-auto px-5">
       <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
         <div className='flex items-center gap-2'>
           <Copyright size={16} className="text-gray-400" />
           <p className='text-gray-400 text-sm'>
             {new Date().getFullYear()} All rights reserved.
           </p>
         </div>

         <div className='flex items-center gap-2'>
           <p className='text-gray-300 text-sm flex items-center gap-2'>
             Made with {' '}
             <Heart 
               size={16} 
               className="text-cyan-200 fill-cyan-200 animate-pulse" 
             /> 
             by Biraj Baral
           </p>
         </div>
       </div>
     </div>
   </footer>
 );
};

export default Footer;