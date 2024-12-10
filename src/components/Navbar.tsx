import { Search, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-spotify-black/95 backdrop-blur-md z-50 px-4 py-3 flex items-center justify-between border-b border-spotify-darkgray">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify"
          className="h-8 md:h-9"
        />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center max-w-md w-full mx-4 relative">
        <Search className="absolute left-3 text-spotify-lightgray" size={16} />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full bg-spotify-darkgray/40 text-white placeholder:text-spotify-lightgray rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="text-spotify-lightgray hover:text-black text-sm font-medium"
        >
          Sign up
        </Button>
        <Button className="bg-white hover:bg-white/90 text-black text-sm font-medium">
          <User size={16} className="mr-2" />
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;