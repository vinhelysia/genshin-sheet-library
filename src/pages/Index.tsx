import { SongCard } from '@/components/SongCard';
import { songs } from '@/data/songs';
import { Music, Download } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section — same structure */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./iamage/hero-liyue.png"
            alt="Genshin Impact Music"
            className="w-full h-full object-cover object-center"
          />
          {/* Soft wash only — art is already light enough for black type */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.18em] uppercase text-foreground/55">
              Genshin Music Nightly
            </p>
            <h1 className="text-6xl md:text-7xl font-semibold text-foreground mb-6 leading-[1.05]">
              Genshin
              <span className="block">Sheet Library</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Sheet music for PC keyboard and mobile. Download{' '}
              <span className="text-foreground/80">.genshinsheet</span> files and play.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/40 px-4 py-2 backdrop-blur-sm">
                <Music className="w-4 h-4 text-foreground/70" />
                <span className="font-medium">{songs.length} songs</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/40 px-4 py-2 backdrop-blur-sm">
                <Download className="w-4 h-4 text-foreground/70" />
                <span className="font-medium">PC &amp; mobile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet scroll cue — no bounce/pulse */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 pt-2">
            <div className="h-1.5 w-1 rounded-full bg-primary/70" />
          </div>
        </div>
      </section>

      {/* Songs Grid — same structure */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 h-px w-12 bg-primary/70" />
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Music Collection
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Open a song for PC or mobile notes. Copy the notation or download the sheet file.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>

      {/* Footer — same structure */}
      <footer className="border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center text-muted-foreground">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Genshin Sheet Library</h3>
              <div className="mx-auto h-px w-12 bg-primary/60" />
            </div>
            <p className="text-base mb-4 max-w-xl mx-auto">
              Sheets for fellow travelers. Compatible with Genshin Music Nightly.
            </p>
            <p className="text-sm opacity-80 mb-2">
              Made by VinhElysia for the Genshin community
            </p>
            <p className="text-xs opacity-55 mb-5">
              Fanmade, non-commercial. Not affiliated with miHoYo / HoYoverse.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.tiktok.com/@vinhelysia1"
                title="TikTok"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://github.com/VinhElysia"
                title="GitHub"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@vinhelysia"
                title="YouTube"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
