import Image from "next/image";
import { ExternalLink, GitBranch, BookOpen } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

type GithubUser = {
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  login: string;
};

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

export default async function GitHub() {
  try {
    const [userRes, repoRes] = await Promise.all([
      fetch("https://api.github.com/users/pallavkafle", { next: { revalidate: 3600 } }),
      fetch("https://api.github.com/users/pallavkafle/repos?sort=updated&per_page=20", { next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok || !repoRes.ok) throw new Error("GitHub API failed");

    const user = (await userRes.json()) as GithubUser;
    const allRepos = (await repoRes.json()) as GithubRepo[];

    // Filter out forks and the profile README repo, then take the top 4
    const repos = allRepos
      .filter((repo) => !repo.fork && repo.name !== "pallavkafle")
      .slice(0, 4);

    // Calculate top languages from the filtered repos
    const langCounts: Record<string, number> = {};
    repos.forEach((repo) => {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    });
    const topLanguages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang)
      .slice(0, 5);

    return (
      <section id="github" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          label="GitHub"
          title={
            <>
              <span className="text-text">Open </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Source.</span>
            </>
          }
          subtitle="Public profile snapshot, recent work, and language trends."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Profile Card */}
          <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <Image
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border border-white/10 object-cover"
              />
              <div>
                <h3 className="text-2xl font-serif text-text">{user.login}</h3>
                <p className="mt-1 text-sm text-white/50">{user.bio ?? "GitHub profile overview"}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-2xl font-semibold text-text">{user.public_repos}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50">Repos</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-2xl font-semibold text-text">{user.followers}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50">Followers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-2xl font-semibold text-text">{user.following}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50">Following</p>
              </div>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-emerald-400/50 hover:text-white"
            >
              View full profile <ExternalLink size={16} />
            </a>
          </Card>

          {/* Repos and Languages */}
          <div className="space-y-6">
            <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-sm tracking-[0.22em] text-white/50 uppercase">
                <GitBranch size={16} /> Recent Repos
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-4 transition-colors hover:border-emerald-400/50"
                  >
                    <div>
                      <h4 className="font-semibold text-text group-hover:text-emerald-400 transition-colors">{repo.name}</h4>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/50">
                        {repo.description ?? "No description provided."}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-white/40 uppercase">
                      <span>{repo.language || "Code"}</span>
                      {repo.stargazers_count > 0 && (
                        <span>{repo.stargazers_count} ★</span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-sm tracking-[0.22em] text-white/50 uppercase">
                <BookOpen size={16} /> Top Languages
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {topLanguages.length ? topLanguages.map((language) => (
                  <span key={language} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-xs text-white/70">
                    {language}
                  </span>
                )) : <span className="text-sm text-white/50">No language data yet.</span>}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    // If GitHub fails, silently fail (don't show a broken section to recruiters)
    return null;
  }
}