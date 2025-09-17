// ========== REPLACEABLE PHOTOS AND CAPTIONS ==========
        // Update this array with your photos and captions
        const photos = [
            { src: 'src/assets/photo1.jpg', caption: 'Our sweet moments together 💕' },
            { src: 'src/assets/photo2.jpg', caption: 'Celebrating life\'s beautiful moments 🥂' },
            { src: 'src/assets/photo3.jpg', caption: 'Adventures and memories we create ✨' },
            { src: 'src/assets/photo4.jpg', caption: 'Special occasions made sweeter with you 🎂' },
            { src: 'src/assets/photo5.jpg', caption: 'Every day is brighter with your smile 😊' },
            { src: 'src/assets/photo1.jpg', caption: 'Forever grateful for you 💝' } 
            { src: 'src/assets/62cdf32f-427c-44e1-83a9-a1e362967fa3.jpg', caption: 'Fashion young lady 💝' } 
        ];

        // ========== VARIABLES ==========
        let currentPhotoIndex = 0;
        let isPlaying = false;
        let confettiShown = false;

        // ========== MUSIC FUNCTIONALITY ==========
        // REPLACEABLE: Add your romantic music file here
        // const audio = new Audio('path/to/your/romantic-song.mp3');

        function toggleMusic() {
            const musicBtn = document.getElementById('musicBtn');
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                musicBtn.innerHTML = '⏸️ Pause Music 🎵';
                musicBtn.classList.add('animate-pulse');
                // audio.play(); // Uncomment when you add your audio file
                console.log('Music playing...');
            } else {
                musicBtn.innerHTML = '▶️ Play Music 🎵';
                musicBtn.classList.remove('animate-pulse');
                // audio.pause(); // Uncomment when you add your audio file
                console.log('Music paused...');
            }
        }

        // ========== SCROLL FUNCTIONALITY ==========
        function scrollToAlbum() {
            const albumSection = document.getElementById('album');
            if (albumSection) {
                albumSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // ========== LIGHTBOX FUNCTIONALITY ==========
        function openLightbox(index) {
            currentPhotoIndex = index;
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const photoCounter = document.getElementById('photoCounter');

            lightboxImage.src = photos[index].src;
            lightboxImage.alt = photos[index].caption;
            lightboxCaption.textContent = photos[index].caption;
            photoCounter.textContent = `${index + 1} / ${photos.length}`;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function nextPhoto() {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            updateLightboxContent();
        }

        function prevPhoto() {
            currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
            updateLightboxContent();
        }

        function updateLightboxContent() {
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const photoCounter = document.getElementById('photoCounter');

            lightboxImage.src = photos[currentPhotoIndex].src;
            lightboxImage.alt = photos[currentPhotoIndex].caption;
            lightboxCaption.textContent = photos[currentPhotoIndex].caption;
            photoCounter.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
        }

        // ========== CONFETTI ANIMATION ==========
        function showConfetti() {
            if (confettiShown) return;
            
            const confettiContainer = document.getElementById('confetti');
            confettiContainer.style.display = 'block';
            confettiShown = true;

            const confettiElements = ['🎉', '🎊', '💖', '✨', '🎂', '🎈'];
            
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece animate-float-hearts';
                confetti.textContent = confettiElements[Math.floor(Math.random() * confettiElements.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = i * 0.3 + 's';
                confetti.style.animationDuration = (4 + Math.random() * 3) + 's';
                
                confettiContainer.appendChild(confetti);
            }
        }

        // ========== PDF DOWNLOAD FUNCTIONALITY ==========
        function downloadPDF() {
            // PDF generation functionality - you can implement this with libraries like jsPDF
            console.log('Downloading birthday message as PDF...');
            alert('PDF download feature can be implemented with libraries like jsPDF or html2canvas + jsPDF');
        }

        // ========== INTERSECTION OBSERVER FOR MESSAGE ANIMATION ==========
        function initializeMessageObserver() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            // Trigger confetti animation when message becomes visible
                            setTimeout(() => showConfetti(), 500);
                        }
                    });
                },
                { threshold: 0.3 }
            );

            const messageElement = document.getElementById('messageContainer');
            if (messageElement) {
                messageElement.style.opacity = '0';
                messageElement.style.transform = 'translateY(40px)';
                messageElement.style.transition = 'all 0.8s ease-out';
                observer.observe(messageElement);
            }
        }

        // ========== KEYBOARD NAVIGATION ==========
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextPhoto();
                if (e.key === 'ArrowLeft') prevPhoto();
            }
        });

        // ========== CLOSE LIGHTBOX ON BACKGROUND CLICK ==========
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }


            // Music play/pause toggle
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.textContent = "⏸️ Pause Music 🎶";
  } else {
    music.pause();
    btn.textContent = "▶️ Play Music 🎵";
  }
}

// Scroll to Album section
function scrollToAlbum() {
  document.getElementById("album").scrollIntoView({ behavior: "smooth" });
}

// Lightbox placeholder functions
function openLightbox(index) {
  document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

        });