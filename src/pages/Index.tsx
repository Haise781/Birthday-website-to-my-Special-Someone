import React from 'react';
import HeroSection from '@/components/HeroSection';
import PhotoAlbum from '@/components/PhotoAlbum';
import BirthdayMessage from '@/components/BirthdayMessage';

const Index = () => {
  const scrollToAlbum = () => {
    const albumSection = document.getElementById('album');
    if (albumSection) {
      albumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "18th Birthday Celebration",
          "description": "A romantic birthday celebration website",
          "eventStatus": "https://schema.org/EventScheduled"
        })}
      </script>

      {/* Hero Section */}
      <HeroSection onOpenAlbum={scrollToAlbum} />
      
      {/* Photo Album Section */}
      <PhotoAlbum />
      
      {/* Birthday Message Section (Final Section) */}
      <BirthdayMessage />
    </main>
  );
};

export default Index;
