"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GitBranch, BookOpen } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Card from "@/components/ui/Card";

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
};

export default function GitHub() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHub() {
      try {
        setLoading(true);
        setError(null);

        const [userResponse, repoResponse] = await Promise.all([
          fetch("https://api.github.com/users/pallavkafle", { signal: controller.signal }),
          fetch("https://api.github.com/users/pallavkafle/repos?sort=updated&per_page=6", { signal: controller.signal })
        ]);

        if (!userResponse.ok || !repoResponse.ok) {
          throw new Error("GitHub data is temporarily unavailable.");
        }

        const userData = (await userResponse.json()) as GithubUser;
        const repoData = (await repoResponse.json()) as GithubRepo[];

        setUser(userData);
        setRepos(repoData.slice(0, 4));
      } catch (fetchError) {
        if ((fetchError as Error).name !== "AbortError") {
          setError("Unable to load GitHub profile right now.");
        }
      } finally {
        setLoading(false);
      }
    }

    void loadGitHub();

    return () => controller.abort();
  }, []);

  const topLanguages = useMemo(() => {
    const counts = new Map<string, number>();
    repos.forEach((repo) => {
      if (repo.language) {
        counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
      }
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([language]) => language);
  }, [repos]);

  return (
    <section id="github" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mb-12 max-w-2xl"
      >
        <p className="text-sm font-medium tracking-[0.3em] text-text/60 uppercase">GitHub</p>
        <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">Public profile snapshot, recent work, and language trends.</h2>
      </motion.div>

      {loading ? (
        <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-text/70 backdrop-blur-xl">Loading GitHub profileâ€¦</Card>
      ) : error ? (
        <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-text/70 backdrop-blur-xl">{error}</Card>
      ) : user ? (
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Image src={user.avatar_url} alt={`${user.login} avatar`} width={80} height={80} className="h-20 w-20 rounded-full border border-white/10 object-cover" />
                <div>
                  <h3 className="text-2xl font-semibold text-text">{user.login}</h3>
                  <p className="mt-1 text-text/70">{user.bio ?? "GitHub profile overview"}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-semibold text-text">{user.public_repos}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text/55">Repos</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-semibold text-text">{user.followers}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text/55">Followers</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-semibold text-text">{user.following}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text/55">Following</p>
                </div>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/85"
              >
                View full profile <ExternalLink size={16} />
              </a>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm font-medium tracking-[0.22em] text-text/55 uppercase">
                  <GitBranch size={16} /> Recent Repos
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {repos.map((repo) => (
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/25 p-4 transition-colors hover:border-[#2d5d4f]/45">
                      <h4 className="font-semibold text-text">{repo.name}</h4>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-text/70">{repo.description ?? "No description provided."}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-text/55">
                        <span>{repo.language ?? "Unknown"}</span>
                        <span>{repo.stargazers_count}â˜… Â· {repo.forks_count} forks</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm font-medium tracking-[0.22em] text-text/55 uppercase">
                  <BookOpen size={16} /> Top Languages
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {topLanguages.length ? topLanguages.map((language) => (
                    <span key={language} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-text/80">
                      {language}
                    </span>
                  )) : <span className="text-sm text-text/65">No language data yet.</span>}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
