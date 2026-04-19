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
        title: "Copied!",
        description: `${type.toUpperCase()} notes copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    if (song.sheetPath) {
      // Download the actual genshinsheet file
      try {
        const response = await fetch(song.sheetPath);
        if (!response.ok) {
          throw new Error('Failed to fetch sheet file');
        }
        
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
          title: "Downloaded!",
          description: "Sheet file downloaded successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to download sheet file",
          variant: "destructive",
        });
      }
    } else {
      // Fallback: create JSON file from notes data
      const data = {
        title: song.title,
        artist: song.artist,
        pcNotes: song.pcNotes,
        mobileNotes: song.mobileNotes
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
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
        title: "Downloaded!",
        description: "Sheet file downloaded successfully",
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-card border-border shadow-modal">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
            {song.title}
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="ml-auto hover:bg-primary/10 hover:border-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download .genshinsheet
            </Button>
          </DialogTitle>
          <p className="text-muted-foreground">{song.artist}</p>
        </DialogHeader>

        <div className="mt-6">
          {viewMode === 'selection' && (
            <div className="animate-scale-in">
              <h3 className="text-lg font-semibold mb-6 text-center text-foreground">
                Choose your platform
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  className="p-8 cursor-pointer bg-gradient-card hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                  onClick={() => setViewMode('pc')}
                >
                  <div className="text-center">
                    <Monitor className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      PC Version
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Optimized for keyboard input
                    </p>
                  </div>
                </Card>

                <Card 
                  className="p-8 cursor-pointer bg-gradient-card hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                  onClick={() => setViewMode('mobile')}
                >
                  <div className="text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      Mobile Version
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Optimized for touch input
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {viewMode === 'pc' && (
            <div className="animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <Button
                  onClick={() => setViewMode('selection')}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10"
                >
                  ← Back to selection
                </Button>
                <Button
                  onClick={() => handleCopy(song.pcNotes, 'pc')}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10"
                >
                  {copiedPC ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy PC Notes
                    </>
                  )}
                </Button>
              </div>
              <Card className="p-6 bg-muted/20 border-border/30">
                <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  PC Notes
                </h4>
                <div className="max-h-96 overflow-y-auto overflow-x-auto rounded-md border border-border/20 bg-background/50 p-4">
                  <pre className="text-sm font-mono text-foreground whitespace-pre-wrap leading-relaxed min-w-0">
                    {song.pcNotes}
                  </pre>
                </div>
              </Card>
            </div>
          )}

          {viewMode === 'mobile' && (
            <div className="animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <Button
                  onClick={() => setViewMode('selection')}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10"
                >
                  ← Back to selection
                </Button>
                <Button
                  onClick={() => handleCopy(song.mobileNotes, 'mobile')}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10"
                >
                  {copiedMobile ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Mobile Notes
                    </>
                  )}
                </Button>
              </div>
              <Card className="p-6 bg-muted/20 border-border/30">
                <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Mobile Notes
                </h4>
                <div className="max-h-96 overflow-y-auto overflow-x-auto rounded-md border border-border/20 bg-background/50 p-4">
                  <pre className="text-sm font-mono text-foreground whitespace-pre-wrap leading-relaxed min-w-0">
                    {song.mobileNotes}
                  </pre>
                </div>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}