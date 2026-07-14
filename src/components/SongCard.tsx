import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SheetModal } from './SheetModal';

interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  pcNotes: string;
  mobileNotes: string;
  sheetPath?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const difficultyClass =
    song.difficulty === 'easy'
      ? 'bg-emerald-600/10 text-emerald-800'
      : song.difficulty === 'medium'
        ? 'bg-amber-500/15 text-amber-900'
        : 'bg-red-600/10 text-red-800';

  const difficultyLabel =
    song.difficulty === 'easy' ? 'Easy' : song.difficulty === 'medium' ? 'Medium' : 'Hard';

  return (
    <>
      <Card
        className="group cursor-pointer overflow-hidden border-border/50 bg-gradient-card shadow-card transition-colors duration-200 hover:border-primary/35"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video relative overflow-hidden">
          <img
            src={song.thumbnail}
            alt={song.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-5">
          <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {song.title}
          </h3>
          <p className="text-sm text-muted-foreground">{song.artist}</p>
          <div className="mt-3">
            <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${difficultyClass}`}>
              {difficultyLabel}
            </span>
          </div>
        </div>
      </Card>

      <SheetModal
        song={song}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
