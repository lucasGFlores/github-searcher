export interface GithubProfileResponse {
  name: string;
  bio: string;
  avatar_url: string;
}

export class GithubApi {
  public static async getUserInfo(
    username: string
  ): Promise<GithubProfileResponse | null> {
    if (!username || username.includes(" ")) return null;
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) return null;
    const json: GithubProfileResponse = await response.json();
    return json;
  }
}
