import { ReactElement, useState } from "react";
import { GithubApi, GithubProfileResponse } from "../../Utils/github-api";
import seachImage from "../../assets/search-svgrepo-com.svg";
import "./searcher.css";

interface SearcherProps {
  onSearch: (response: GithubProfileResponse | null) => void;
}

export function Searcher({ onSearch }: SearcherProps): ReactElement {
  const [user, setUser] = useState("");

  return (
    <div className="searcher fade-in">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Digite um usuário do Github"
      />
      <button
        onClick={async () => onSearch(await GithubApi.getUserInfo(user.trim()))}
      >
        <img className="icon" src={seachImage} />
      </button>
    </div>
  );
}
