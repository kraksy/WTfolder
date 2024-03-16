import { SetStateAction, useState } from "react";
import Search from "./components/search";
import Weather from "./components/weather";
import HowTo from "./components/intro";
import Login from "./components/login";

import type { Location } from "./types/location";

export default function App() {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedInUsername: SetStateAction<string>) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn ? 
      (
        <div className="bg-stone-50 text-neutral-900 min-h-screen px-4">
        <div className="container mx-auto py-10 flex justify-around items-center">
          <h1 className="text-3xl pr-5">
            <a href="/">
            </a>
          </h1>
          <Search setLocation={setLocation} />
          <a className="w-20"></a>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="container mx-auto py-5">
          {location !== null ? <Weather location={location} /> : <HowTo />}
        </div>
      </div>
      ) : 
      (
        <Login onLogin={handleLogin} />
      )
      }
    </>
  );
}
