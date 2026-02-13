import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import bgMobile from "./assets/bg1.webp";
import sdImg from "./assets/sd.webp";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // proposalBoxes removed — replaced by a single proposal paragraph below

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Naa Bangaar thalli kadhuuu😓",
      "Naa Chitti Thalli Kadhuuu🥺",
      "Naa Bujjodu kadhuuu☹️",
      "Bangaaraaluuuuu💔",
      "Nannaluuuuu😔",
      "Muyy Inka😖",
      "Poyi Yes Nokkuu😡",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="app-root relative overflow-hidden flex flex-col items-center justify-center pt-4 min-h-screen selection:bg-rose-600 selection:text-white text-white">
      {/* blurred background image */}
      {/* mobile background (shown on small screens) */}
      <img
        src={bgMobile}
        alt="background-mobile"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-center block md:hidden filter brightness-95"
      />
      {/* desktop background (shown on md and larger screens) */}
      <img
        src={sdImg}
        alt="background-desktop"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-center hidden md:block transform scale-100 md:scale-100 filter blur-sm brightness-95"
      />
      {/* subtle dark overlay to improve text contrast */}
      <div className="absolute inset-0 -z-10 bg-black/40" />
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear kiss"
            className="w-full max-w-[320px] md:max-w-[520px] h-auto mx-auto rounded-lg"
          />
          <div className="w-full flex justify-center mt-6 px-4">
            <div className="mx-auto max-w-3xl px-2">
              <div className="proposal-box backdrop-blur-sm bg-black/40 border border-white/10 rounded-lg p-6 text-left shadow-md font-serif text-sm md:text-base text-white leading-relaxed">
                Naa Bangaar thalliee😘,

                <br /><br />
I wanna express my feelings from the bottom of my heart ❤️                <br /><br />

I don’t know how you feel about all the things that happened recently because of me, and I can’t do anything other than say sorry for what I’ve done 😔 I overthink a lot because I keep thinking you are crying because of me, because of my mistakes and my behavior.<br /><br />

I’ve said so many times, please don’t leave me alone at night after even a small inconvenience between us 🥺 While I want to show real love and care, I end up making so many mistakes… and still you keep giving chances to this unworthy candidate ❤️‍🩹<br /><br />

Last night, what you said was absolutely correct. I also felt like I was a torture to you, but still you are choosing me 💔 That means everything to me.<br /><br />

Now I promise I won’t overthink again. Just like I forget my anger when I’m around you, I’ll change. Just be with me and trust me. Just hold my hands 🤝 I’ll change and I’ll take care of everything.<br /><br />

I just want to care for you like my little daughter, to protect you, to keep you safe, and to love you with the purest heart 🫶 While writing this, I can’t even hold my tears 😢<br /><br />

Love you so much ❤️
                <br /><br />
                Manam Pelli cheseskundam nannaluuww🫠
              </div>
            </div>
          </div>

          <div className="headline text-3xl sm:text-4xl md:text-6xl font-bold my-6 text-center drop-shadow-lg">
            My Wifieeeeluuuww😘💖
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed z-10 animate-pulse top-6 md:left-24 left-4 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[220px] md:h-[320px] rounded-lg shadow-lg mx-auto"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
            alt="cute bear"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl my-4 text-center font-bold drop-shadow-lg">
            Will you be my Wifieee?🥺
          </h1>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-0 md:mr-4 transition-transform active:scale-95`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="app-footer fixed bottom-2 right-2 backdrop-blur-md opacity-90 hover:opacity-100 border p-2 rounded border-rose-300 text-white text-sm bg-black/20"
      href="https://www.instagram.com/nameis.shyam__/"
      target="__blank"
      rel="noreferrer"
    >
      Made with love by urs Shyam Boi 
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
