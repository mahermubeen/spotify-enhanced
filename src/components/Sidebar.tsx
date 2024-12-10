import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Library, label: "Your Library" },
  ];

  const playlists = [
    "Liked Songs",
    "Your Episodes",
    "Driving Mix",
    "Chill Vibes",
    "Top Hits 2024",
  ];

  return (
    <div className="w-64 max-w-[90vw] bg-spotify-black h-full flex flex-col gap-4 md:gap-6 p-4 md:p-6">
      <div className="space-y-2 md:space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-4 text-spotify-lightgray hover:text-white transition-colors w-full",
              "py-1.5 md:py-2 px-3 md:px-4 rounded-lg hover:bg-spotify-darkgray"
            )}
          >
            <item.icon size={16} className="md:w-5 md:h-5" />
            <span className="font-medium text-sm md:text-base">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-spotify-darkgray">
        <button
          className={cn(
            "flex items-center gap-4 text-spotify-lightgray hover:text-white transition-colors w-full",
            "py-1.5 md:py-2 px-3 md:px-4 rounded-lg hover:bg-spotify-darkgray"
          )}
        >
          <Plus size={16} className="md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">
            Create Playlist
          </span>
        </button>
        <button
          className={cn(
            "flex items-center gap-4 text-spotify-lightgray hover:text-white transition-colors w-full",
            "py-1.5 md:py-2 px-3 md:px-4 rounded-lg hover:bg-spotify-darkgray"
          )}
        >
          <Heart size={16} className="md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">Liked Songs</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {playlists.map((playlist) => (
          <button
            key={playlist}
            className="text-spotify-lightgray hover:text-white transition-colors w-full text-left py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base"
          >
            {playlist}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;