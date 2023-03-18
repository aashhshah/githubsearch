import { GitHubResModel } from "@/model/githubresmodel";
import { Octokit } from "octokit";

export class GitHubSearch {

  static async sendRequest(q: string, order: "desc" | "asc", sort: "stars" | "forks" | "help-wanted-issues" | "updated" | null): Promise<GitHubResModel | null> {
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    });

    const options: { q: string, order: "desc" | "asc", sort?: "stars" | "forks" | "help-wanted-issues" | "updated" } = {
      q: q,
      order: order,
    }
    if (sort != null) { options['sort'] = sort }
    try {
      const res = await octokit.request('GET /search/repositories', options)
      debugger;
      if (res.status == 200) {
        return res.data as unknown as GitHubResModel
      } else {
        return null
      }
    } catch {
      return null
    }
  }
}
