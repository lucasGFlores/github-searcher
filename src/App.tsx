import { useState } from "react";
import { GithubProfileResponse } from "./Utils/github-api";
import { Profile } from "./components/profiles/profiles";
import { Searcher } from "./components/searcher/searcher";
import GitHubLogo from "./assets/github.svg";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null as GithubProfileResponse | null); // machine state for previus search
  const [searched, setSearched] = useState(false);
  return (
    <>
      <div className="logo">
        <img id="image" src={GitHubLogo} />
        <h1 id="thin"> Perfil</h1>
        <h1 id="bold">Github</h1>
      </div>
      <Searcher
        onSearch={(profile) => {
          setProfile(profile);
          setSearched(true);
        }}
      />

      {searched ? <Profile profile={profile} /> : <></>}
    </>
  );
}

export default App;
