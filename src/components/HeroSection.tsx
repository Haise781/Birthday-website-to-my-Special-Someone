import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  onOpenAlbum: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAlbum }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayMusic = () => {
    setIsPlaying(!isPlaying);
    // Audio functionality can be implemented here
    console.log('Music toggle:', !isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - REPLACEABLE: Change src to your preferred hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/40" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-primary/30 animate-float-hearts"
            size={24}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-romantic-entrance">
        {/* Main Heading - REPLACEABLE: Change [Her Name] to actual name */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-gentle-bounce">
          Happy 18th Birthday,<br />
          <span className="text-primary font-bold">[Her Name]!</span>
        </h1>

        {/* Subheading - REPLACEABLE: Change to your preferred sweet line */}
        <p className="font-elegant text-xl md:text-2xl text-foreground/80 mb-8 animate-scale-in">
          "To my forever leading lady"
        </p>

        {/* Short Intro - REPLACEABLE: Customize this intro text */}
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Today marks not just another year, but a celebration of the beautiful soul who brings magic to every day.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={onOpenAlbum}
            className="btn-romantic text-xl px-12 py-6 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            Open Album ✨
          </Button>

          {/* Audio Button - REPLACEABLE: Add your romantic track */}
          <Button 
            onClick={handlePlayMusic}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg animate-scale-in backdrop-blur-sm"
            style={{ animationDelay: '0.4s' }}
          >
            <Play className={`mr-2 ${isPlaying ? 'animate-pulse' : ''}`} size={20} />
            {isPlaying ? 'Pause Music' : 'Play Music'} 🎵
          </Button>
        </div>

        {/* Sparkle Elements */}
        <div className="absolute top-20 right-10 text-accent text-2xl animate-sparkle">✨</div>
        <div className="absolute bottom-32 left-10 text-accent text-xl animate-sparkle" style={{ animationDelay: '0.7s' }}>💖</div>
        <div className="absolute top-1/2 right-20 text-accent text-lg animate-sparkle" style={{ animationDelay: '1.4s' }}>⭐</div>
      </div>
    </section>
  );
};

export default HeroSection;