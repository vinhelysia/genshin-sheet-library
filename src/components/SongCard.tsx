import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Music } from 'lucide-react';
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

  return (
    <>
      <Card 
        className="group cursor-pointer overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02] animate-fade-in backdrop-blur-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video relative overflow-hidden">
          <img
            src={song.thumbnail}
            alt={song.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Floating music note icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30">
              <Music className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          {/* Click indicator */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
            <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
              <div className="text-sm font-medium text-primary-foreground flex items-center gap-2">
                <span>View Sheets</span>
                <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10">
            <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-all duration-300 leading-tight">
              {song.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
              <div className="w-1 h-1 bg-primary/60 rounded-full"></div>
              <p className="text-sm font-medium">{song.artist}</p>
            </div>
            
            {/* Difficulty indicator */}
            <div className="mt-2">
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${song.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' : song.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                {song.difficulty === 'easy' ? 'Easy' : song.difficulty === 'medium' ? 'Medium' : 'Hard'}
              </span>
            </div>
            
            {/* Animated underline */}
            <div className="mt-4 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
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