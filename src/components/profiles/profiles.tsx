import { ReactElement } from "react";
import { GithubProfileResponse } from "../../Utils/github-api";
import "./profiles.css";

interface ProfileProps {
  profile: GithubProfileResponse | null;
}
export function Profile({ profile }: ProfileProps): ReactElement {
  if (profile == null)
    return (
      <div className="profile-error">
        <p> Nenhum perfil foi encontrado com esse nome de usuário.</p>
        <p>Tente novamente</p>
      </div>
    );
  return (
    <div className="profile fade-down">
      <img id="image" src={profile.avatar_url} />
      <div className="information">
        <h2 id="name"> {profile.name}</h2>
        <p id="bio">{profile.bio}</p>
      </div>
    </div>
  );
}
