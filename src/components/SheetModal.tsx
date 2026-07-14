import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Smartphone, Download, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

interface SheetModalProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
}

type ViewMode = 'selection' | 'pc' | 'mobile';

export function SheetModal({ song, isOpen, onClose }: SheetModalProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('selection');
  const [copiedPC, setCopiedPC] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (text: string, type: 'pc' | 'mobile') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'pc') {
        setCopiedPC(true);
        setTimeout(() => setCopiedPC(false), 2000);
      } else {
        setCopiedMobile(true);
        setTimeout(() => setCopiedMobile(false), 2000);
      }
      toast({
        title: 'Copied',
        description: `${type.toUpperCase()} notes copied to clipboard`,
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to copy to clipboard',
        variant: 'destructive',
      });
    }
  };

  const handleDownload = async () => {
    if (song.sheetPath) {
      try {
        const response = await fetch(song.sheetPath);
        if (!response.ok) throw new Error('Failed to fetch sheet file');

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${song.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.genshinsheet`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast({
          title: 'Downloaded',
          description: 'Sheet file downloaded successfully',
        });
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to download sheet file',
          variant: 'destructive',
        });
      }
    } else {
      const data = {
        title: song.title,
        artist: song.artist,
        pcNotes: song.pcNotes,
        mobileNotes: song.mobileNotes,
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${song.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.genshinsheet`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: 'Downloaded',
        description: 'Sheet file downloaded successfully',
      });
    }
  };

  const resetAndClose = () => {
    setViewMode('selection');
    setCopiedPC(false);
    setCopiedMobile(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden border-border bg-gradient-card shadow-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-semibold text-foreground">
            <span className="min-w-0 flex-1 font-[inherit]">{song.title}</span>
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="ml-auto shrink-0 hover:border-primary hover:bg-primary/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download .genshinsheet
            </Button>
          </DialogTitle>
          <p className="text-muted-foreground">{song.artist}</p>
        </DialogHeader>

        <div className="mt-6">
          {viewMode === 'selection' && (
            <div>
              <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
                Choose your platform
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card
                  className="cursor-pointer border-border/50 bg-gradient-card p-8 transition-colors duration-200 hover:border-primary/45 hover:bg-primary/5 group"
                  onClick={() => setViewMode('pc')}
                >
                  <div className="text-center">
                    <Monitor className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h4 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      PC Version
                    </h4>
                    <p className="text-sm text-muted-foreground">Keyboard notation</p>
                  </div>
                </Card>

                <Card
                  className="cursor-pointer border-border/50 bg-gradient-card p-8 transition-colors duration-200 hover:border-primary/45 hover:bg-primary/5 group"
                  onClick={() => setViewMode('mobile')}
                >
                  <div className="text-center">
                    <Smartphone className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h4 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      Mobile Version
                    </h4>
                    <p className="text-sm text-muted-foreground">Touch notation</p>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {viewMode === 'pc' && (
            <NotesPanel
              label="PC Notes"
              icon={<Monitor className="h-5 w-5" />}
              notes={song.pcNotes}
              copied={copiedPC}
              onBack={() => setViewMode('selection')}
              onCopy={() => handleCopy(song.pcNotes, 'pc')}
            />
          )}

          {viewMode === 'mobile' && (
            <NotesPanel
              label="Mobile Notes"
              icon={<Smartphone className="h-5 w-5" />}
              notes={song.mobileNotes}
              copied={copiedMobile}
              onBack={() => setViewMode('selection')}
              onCopy={() => handleCopy(song.mobileNotes, 'mobile')}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function NotesPanel({
  label,
  icon,
  notes,
  copied,
  onBack,
  onCopy,
}: {
  label: string;
  icon: React.ReactNode;
  notes: string;
  copied: boolean;
  onBack: () => void;
  onCopy: () => void;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <Button onClick={onBack} variant="outline" size="sm" className="hover:bg-primary/10">
          ← Back to selection
        </Button>
        <Button onClick={onCopy} variant="outline" size="sm" className="hover:bg-primary/10">
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-primary" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy {label}
            </>
          )}
        </Button>
      </div>
      <Card className="border-border/30 bg-muted/20 p-6">
        <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
          {icon}
          {label}
        </h4>
        <div className="max-h-96 overflow-y-auto overflow-x-auto rounded-md border border-border/20 bg-background/50 p-4">
          <pre className="min-w-0 whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
            {notes}
          </pre>
        </div>
      </Card>
    </div>
  );
}
