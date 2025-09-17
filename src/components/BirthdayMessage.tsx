import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Heart } from 'lucide-react';

const BirthdayMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger confetti animation when message becomes visible
          setTimeout(() => setShowConfetti(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    const messageElement = document.getElementById('birthday-message');
    if (messageElement) {
      observer.observe(messageElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadPDF = () => {
    // PDF generation functionality - you can implement this with libraries like jsPDF
    console.log('Downloading birthday message as PDF...');
    alert('PDF download feature can be implemented with libraries like jsPDF or html2canvas + jsPDF');
  };

  return (
    <section 
      id="birthday-message" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float-hearts"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              {['🎉', '🎊', '💖', '✨', '🎂', '🎈'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Message Container */}
        <div 
          className={`message-letter ${isVisible ? 'animate-romantic-entrance' : 'opacity-0'}`}
        >
          {/* Script Headline */}
          <div className="text-center mb-8">
            <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
              Happy, happy birthday, my Honey! 🎉
            </h2>
            <div className="flex justify-center">
              <Heart className="text-primary animate-gentle-bounce" size={32} />
            </div>
          </div>

          {/* Birthday Message Content */}
          <div className="font-elegant text-lg md:text-xl leading-relaxed text-foreground space-y-6">
            <p>
              Happy happy birth day my honey ko huhuhuh its your day hahahaha you turn 18 this day ackkkkkkkkk your officialy mine ackkkk huhuhuhu di joke lang heheh, happy birth day honey ko , i write this birthday letter to you , that im telling you this is the very important days of my life, because this is the day you were born ackkk and ma papasakin din soon hahahahah the day the world was blessed with your presence.
            </p>

            <p>
              Sa bawat taon na dumadaan, mas napapatunayan kong hindi lang ikaw ang dahilan kung bakit mas maganda ang bukas, kundi ikaw din ang nagbibigay saysay sa lahat ng nakaraan ackkkk napaka lupit. Hindi ko man hawak ang pinakamagarang regalo o ang pinakamahal na surpresa, hawak ko naman ang pinakatapat na damdamin at iyon ay ang wagas na pagmamahal ko sayo yediiiii ayyyyy lupit ko mag english hahahah eheemmmm ako lang ito makata kasi ako.emmmm
            </p>

            <p>
              Meeting you felt like finding a chapter in a book na matagal ko nang hinahanap. Sa unang pagkakataon na nakita kita, para bang biglang huminto ang oras. Ang daming tao sa paligid, ang daming boses na naririnig, pero ikaw lang ang nakita at ikaw lang ang natandaan ko. Doon ko napagtanto na may espesyal na papel kang gagampanan sa istorya ng buhay ko at nag yari na nga yon ngayon at still counting parin.
            </p>

            <p>
              As the days went by, you became the heroine of my story. Ikaw yung nagbigay ng kulay sa bawat pahina, ikaw yung nagsulat ng musika sa bawat katahimikan, at ikaw yung naglagay ng direksyon sa bawat pagkaligaw ko. Every chapter of my life felt empty before you came, but now, each page is filled with joy, laughter, and hope.
            </p>

            <p>
              Ngayong 18 bithday mo , hindi lang ako bumabati; ipinagdiriwang ko ang buong ikaw ang tapang mo, ang kabutihan ng puso mo, at ang bawat pangarap na gusto mong abutin. Sa bawat kandilang ihipin mo, ipagdarasal ko na matupad lahat ng mithiin mo, at sana'y lagi kang maging masaya, hindi lang ngayon kundi sa bawat araw na susunod.
            </p>

            <p>
              Sometimes I imagine, what if we never met? Siguro, my life would be like a book with missing pages parang kulang, parang walang saysay. Kaya sobra-sobra ang pasasalamat ko, hindi lang dahil minahal mo ako, kundi dahil dumating ka sa tamang panahon, at minahal mo ako nang buong puso.
            </p>

            <p>
              actually Hindi mawawala ang mga pagsubok sa buhay natin , pero gaya ng isang nobela na may plot twists, alam kong mas titibay tayo sa bawat pagsubok. Ang mahalaga ay pipiliin natin ang isa't isa sa bawat pagkakataon, at hindi natin hahayaang matapos ang ating kwento nang hindi magkasama.
            </p>

            <p>
              I promise to keep writing your name in every page of my story. I promise to love you in every word, in every line, in every chapter of our shared life. At higit sa lahat, ipinangangako kong hindi ka mawawala sa kwento ko dahil ikaw mismo ang kwento nag bigay ng kulay.
            </p>

            <p className="text-xl font-semibold text-primary">
              So today, on your special day, I want you to know how deeply loved you are. You are not just my girlfriend hahah kahit hindi paman but—you are my best friend, my safe place, my inspiration, and my forever leading lady ackkkkkk.
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleDownloadPDF}
              className="btn-romantic"
            >
              <Download className="mr-2" size={20} />
              Download as PDF 📄
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-center mt-12 space-y-4">
          <div className="text-4xl animate-sparkle">💝</div>
          <p className="font-script text-2xl text-primary">
            With all my love, forever and always
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;