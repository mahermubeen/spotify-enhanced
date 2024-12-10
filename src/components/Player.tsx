import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

const Player = () => {
  return (
    <div className="h-16 md:h-20 bg-spotify-black border-t border-spotify-darkgray px-2 md:px-4 animate-slide-up">
      <div className="h-full flex items-center justify-between">
        <div className="w-1/3">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-spotify-darkgray rounded"></div>
            <div className="hidden sm:block">
              <h4 className="text-white font-medium text-sm md:text-base">
                Song Title
              </h4>
              <p className="text-spotify-lightgray text-xs md:text-sm">
                Artist Name
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center gap-1 md:gap-2">
          <div className="flex items-center gap-2 md:gap-4">
            <button className="text-spotify-lightgray hover:text-white transition-colors">
              <SkipBack size={14} className="md:w-4 md:h-4" />
            </button>
            <button className="bg-white rounded-full p-1.5 hover:scale-105 transition-transform">
              <Play size={14} className="md:w-4 md:h-4" fill="black" />
            </button>
            <button className="text-spotify-lightgray hover:text-white transition-colors">
              <SkipForward size={14} className="md:w-4 md:h-4" />
            </button>
          </div>
          <div className="w-full bg-spotify-darkgray rounded-full h-1">
            <div className="bg-spotify-green w-1/3 h-full rounded-full"></div>
          </div>
        </div>

        <div className="w-1/3 hidden sm:flex justify-end items-center gap-2">
          <Volume2 size={14} className="text-spotify-lightgray md:w-4 md:h-4" />
          <div className="w-24 bg-spotify-darkgray rounded-full h-1">
            <div className="bg-spotify-green w-2/3 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;