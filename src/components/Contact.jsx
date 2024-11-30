import { Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { forwardRef } from 'react';
import { pdfDownload } from '@/helper/download';
const Contact = forwardRef((props, ref)  => {
  return (
    <div ref={ref} className="min-h-[70vh] flex items-center max-w-7xl mx-auto p-5 mt-20">
      <div className="flex items-center justify-center flex-col w-full gap-10 text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch With Me
        </h3>

        <p className="text-xl font-medium text-gray-300 max-w-2xl">
          Feel free to reach out to me for any queries, collaboration opportunities, or just to say hi!
        </p>

        <div className="flex flex-col items-center gap-8 mt-4">
          <a 
            href="mailto:baralbiraj74@gmail.com"
            className="flex items-center gap-3 text-lg text-gray-200 hover:text-cyan-200 transition-colors duration-300"
          >
            <Mail size={24} />
            baralbiraj74@gmail.com
          </a>

          <div className='flex justify-center items-center gap-8 mt-2'>
            <a 
              href="https://github.com/pointbreak6969" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-200 transition-colors duration-300"
            >
              <Github size={28} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/biraj-baral-a46683284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-200 transition-colors duration-300"
            >
              <Linkedin size={28} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.facebook.com/baralbiraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-200 transition-colors duration-300"
            >
              <Facebook size={28} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <Button 
            className="mt-8 bg-transparent hover:bg-cyan-200/10 text-cyan-200 border-2 border-cyan-200/80 px-8"
            variant="outline"
            onClick={pdfDownload}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Contact;