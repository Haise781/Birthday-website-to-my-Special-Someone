import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// REPLACEABLE IMAGES: Import your 6 photos here
import photo1 from '@/assets/photo1.jpg';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import photo4 from '@/assets/photo4.jpg';
import photo5 from '@/assets/photo5.jpg';
// Add photo6 when you have a 6th image

interface Photo {
  src: string;
  caption: string;
}

const PhotoAlbum: React.FC = () => {
  // REPLACEABLE PHOTOS: Update this array with your photos and captions
  const photos: Photo[] = [
    { src: photo1, caption: "Our sweet moments together 💕" },
    { src: photo2, caption: "Celebrating life's beautiful moments 🥂" },
    { src: photo3, caption: "Adventures and memories we create ✨" },
    { src: photo4, caption: "Special occasions made sweeter with you 🎂" },
    { src: photo5, caption: "Every day is brighter with your smile 😊" },
    // Add more photos here - aim for 6 total
    { src: photo1, caption: "Forever grateful for you 💝" } // Placeholder 6th photo
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  };

  return (
    <section id="album" className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-romantic-entrance">
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-6">
            Our Beautiful Memories
          </h2>
          <p className="font-elegant text-xl text-foreground/70 max-w-2xl mx-auto">
            Every photo tells a story, every moment captures a piece of our journey together
          </p>
        </div>

        {/* Featured Image (First photo larger) */}
        <div className="mb-12 flex justify-center animate-scale-in">
          <div 
            className="photo-item max-w-2xl w-full"
            onClick={() => openLightbox(0)}
          >
            <img 
              src={photos[0].src} 
              alt={photos[0].caption}
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {photos.slice(1).map((photo, index) => (
            <div 
              key={index + 1}
              className="photo-item animate-scale-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => openLightbox(index + 1)}
            >
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Edit Images Comment Block */}
        <div className="text-center p-6 bg-muted/50 rounded-2xl border border-primary/20">
          <p className="text-muted-foreground font-medium">
            💡 <strong>To customize:</strong> Replace the imported images in PhotoAlbum.tsx and update the captions array
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </Button>

            {/* Previous Button */}
            <Button
              onClick={prevPhoto}
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
              aria-label="Previous photo"
            >
              <ChevronLeft size={32} />
            </Button>

            {/* Next Button */}
            <Button
              onClick={nextPhoto}
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white"
              aria-label="Next photo"
            >
              <ChevronRight size={32} />
            </Button>

            {/* Image */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos[currentPhotoIndex].src}
                alt={photos[currentPhotoIndex].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-xl font-elegant text-center">
                  {photos[currentPhotoIndex].caption}
                </p>
              </div>
            </div>

            {/* Photo Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoAlbum;