import { Play } from "lucide-react";

const playlists = [
  {
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    imageUrl: "https://picsum.photos/seed/1/300/300",
  },
  {
    title: "RapCaviar",
    description: "New music from Drake, Travis Scott and more",
    imageUrl: "https://picsum.photos/seed/2/300/300",
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    imageUrl: "https://picsum.photos/seed/3/300/300",
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    imageUrl: "https://picsum.photos/seed/4/300/300",
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    imageUrl: "https://picsum.photos/seed/5/300/300",
  },
  {
    title: "Viva Latino",
    description: "Today's top Latin hits",
    imageUrl: "https://picsum.photos/seed/6/300/300",
  },
];

const MainContent = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-darkgray to-spotify-black p-4 md:p-8 overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
        Good afternoon
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.title}
            className="bg-spotify-darkgray/30 p-3 md:p-4 rounded-lg group hover:bg-spotify-darkgray/60 transition-all duration-300 animate-fade-in cursor-pointer"
          >
            <div className="relative">
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-md mb-3 md:mb-4"
              />
              <button className="absolute bottom-4 right-4 bg-spotify-green rounded-full p-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg">
                <Play fill="black" size={36} />
              </button>
            </div>
            <h3 className="text-white font-semibold mb-1 text-sm">
              {playlist.title}
            </h3>
            <p className="text-spotify-lightgray text-xs line-clamp-2">
              {playlist.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;