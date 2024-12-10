import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Player from "@/components/Player";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-spotify-black text-white">
      <Navbar />
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-spotify-darkgray rounded-full"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="flex-1 flex overflow-hidden pt-14">
        {/* Sidebar with mobile overlay */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:relative md:translate-x-0 z-40 h-full transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <MainContent />
      </div>
      <Player />
    </div>
  );
};

export default Index;