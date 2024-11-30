import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import { Button } from "./ui/button";
import { pdfDownload } from '@/helper/download';
const Navbar = ({items, refs}) => {
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="hidden md:flex  justify-between p-5">
        <nav className="flex justify-center items-center flex-1">
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="inline-block px-5 text-xl cursor-pointer hover:text-cyan-200 hover:scale-105"
                onClick={() => scrollToSection(refs[item.title.toLowerCase()])}
              >
               
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button variant="outline" onClick={pdfDownload}>DOWNLOAD CV</Button>
        </div>
      </div>
      <div className="w-full relative md:hidden p-5">
        <SidebarProvider>
          <AppSidebar scrollToSection={scrollToSection} refs={refs} items={items} />
          <div className="fixed right-5">
            <SidebarTrigger />
          </div>
        </SidebarProvider>
      </div>
    </>
  );
};
export default Navbar;
