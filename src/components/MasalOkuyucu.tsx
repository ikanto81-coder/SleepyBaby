import React, { useState, useEffect, useRef } from "react";
import { STORIES, Story, Page } from "../data/stories";
import { STORY_TRANSLATIONS } from "../data/translations";
import { ArrowLeft, ArrowRight, BookOpen, Star, HelpCircle, RefreshCcw, Sparkles, Heart, VolumeX, Crown } from "lucide-react";

type StoryLang = "en" | "de" | "es" | "ru" | "tr";

interface MasalOkuyucuProps {
  darkMode?: boolean;
  isPremium?: boolean;
  onRequestPremium?: () => void;
  lang?: StoryLang;
}

const LANGUAGES = [
  { code: "en" as const, label: "English", flag: "🇬🇧" },
  { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
  { code: "es" as const, label: "Español", flag: "🇪🇸" },
  { code: "ru" as const, label: "Русский", flag: "🇷🇺" },
  { code: "tr" as const, label: "Türkçe", flag: "🇹🇷" },
];

const LOCAL_UI_TRANSLATIONS = {
  headerTitle: {
    en: "Interactive Bedtime Stories 📖",
    tr: "İnteraktif Uyku Masalları 📖",
    de: "Interaktive Gute-Nacht-Geschichten 📖",
    es: "Cuentos Interactivos para Dormir 📖",
    ru: "Интерактивные сказки на ночь 📖"
  },
  headerDesc: {
    en: "7 magical bedtime stories guiding our little ones into the land of sweet dreams. You can use left-right arrow keys to flip pages and tap the magical buttons to engage.",
    tr: "Küçüklerimizi tatlı rüyalar diyarına götüren 7 büyülü uyku masalı. Sayfaları çevirmek için sol-sağ ok tuşlarını kullanabilir ve etkileşime geçmek için sihirli düğmelere dokunabilirsiniz.",
    de: "7 magische Gute-Nacht-Geschichten, die unsere Kleinen in das Land der süßen Träume begleiten. Sie können die Pfeiltasten nach links und rechts verwenden, um die Seiten umzublättern, und auf die magischen Schaltflächen tippen, um zu interagieren.",
    es: "7 cuentos mágicos para dormir que guiarán a nuestros pequeños al país de los dulces sueños. Puede usar las teclas de flecha izquierda-derecha para pasar las páginas y tocar los botones mágicos para interactuar.",
    ru: "7 волшебных сказок на ночь, уносящих наших малышей в страну сладких снов. Вы можете использовать клавиши со стрелками влево и вправо для перелистывания страниц и нажимать на волшебные кнопки для взаимодействия."
  },
  backToLibrary: {
    en: "Back to Library",
    tr: "Kütüphaneye Dön",
    de: "Zurück zur Bibliothek",
    es: "Volver a la Biblioteca",
    ru: "Назад в библиотеку"
  },
  starsCount: {
    en: "Stars",
    tr: "Yıldız",
    de: "Sterne",
    es: "Estrellas",
    ru: "Звезд"
  },
  pageScene: {
    en: "Page Scene",
    tr: "Sayfa Sahnesi",
    de: "Seitenszene",
    es: "Escena de Página",
    ru: "Сцена страницы"
  },
  intro: {
    en: "📖 INTRO",
    tr: "📖 GİRİŞ",
    de: "📖 INTRO",
    es: "📖 INTRO",
    ru: "📖 ВВЕДЕНИЕ"
  },
  end: {
    en: "💤 END",
    tr: "💤 SON",
    de: "💤 ENDE",
    es: "💤 FIN",
    ru: "💤 КОНЕЦ"
  },
  pageOf: {
    en: "PAGE",
    tr: "SAYFA",
    de: "SEITE",
    es: "PÁGINA",
    ru: "СТРАНИЦА"
  },
  prevPage: {
    en: "Previous Page",
    tr: "Önceki Sayfa",
    de: "Vorherige Seite",
    es: "Página Anterior",
    ru: "Предыдущая страница"
  },
  nextPage: {
    en: "Next Page",
    tr: "Sonraki Sayfa",
    de: "Nächste Seite",
    es: "Siguiente Página",
    ru: "Следующая страница"
  },
  finishBook: {
    en: "Finish Book & Sleep 🌙",
    tr: "Kitabı Bitir ve Uyu 🌙",
    de: "Buch beenden & Schlafen 🌙",
    es: "Terminar Libro y Dormir 🌙",
    ru: "Закончить книгу и спать 🌙"
  },
  autoReadTitle: {
    en: "Auto-Read Aloud",
    tr: "Otomatik Sesli Kitap Oku",
    de: "Automatisches Vorlesen",
    es: "Lectura Automática",
    ru: "Авточтение вслух"
  },
  autoReadDesc: {
    en: 'Listen to "{title}" with a soothing voice narration and automatic page flips.',
    tr: '"{title}" masalını huzur verici ses tonu ve otomatik sayfa geçişleriyle dinleyin.',
    de: 'Hören Sie sich "{title}" mit einer beruhigenden Stimme und automatischem Umblättern an.',
    es: 'Escuche "{title}" con una narración de voz relajante y cambio de página automático.',
    ru: 'Слушайте сказку «{title}» с успокаивающим голосом и автоматическим перелистыванием страниц.'
  },
  stopAutoRead: {
    en: "Stop Auto-Read",
    tr: "Okumayı Durdur",
    de: "Vorlesen stoppen",
    es: "Detener Lectura",
    ru: "Остановить чтение"
  },
  startAutoRead: {
    en: "Start Auto-Read",
    tr: "Otomatik Oku ve Geç",
    de: "Vorlesen starten",
    es: "Iniciar Lectura",
    ru: "Начать авточтение"
  },
  bedtimeStoryBadge: {
    en: "Bedtime Story",
    tr: "Uyku Masalı",
    de: "Gute-Nacht-Geschichte",
    es: "Cuento para Dormir",
    ru: "Сказка на ночь"
  },
  readBtn: {
    en: "Read",
    tr: "Oku",
    de: "Lesen",
    es: "Leer",
    ru: "Читать"
  },
  pagesBadge: {
    en: "PAGES",
    tr: "SAYFA",
    de: "SEITEN",
    es: "PÁGINAS",
    ru: "СТРАНИЦ"
  },
  magicButtonTip: {
    en: "Touch the screen above to reveal magic!",
    tr: "Sihri ortaya çıkarmak için yukarıdaki ekrana dokunun!",
    de: "Berühre den Bildschirm oben, um Magie zu enthüllen!",
    es: "¡Toca la pantalla de arriba para revelar la magia!",
    ru: "Коснитесь экрана выше, чтобы открыть волшебство!"
  },
  magicTriggered: {
    en: "✨ Magical interaction triggered!",
    tr: "✨ Sihirli etkileşim tetiklendi!",
    de: "✨ Magische Interaktion ausgelöst!",
    es: "¡✨ Interacción mágica activada!",
    ru: "✨ Волшебное взаимодействие запущено!"
  }
};

export const MasalOkuyucu: React.FC<MasalOkuyucuProps> = ({ 
  darkMode = false,
  isPremium = false,
  onRequestPremium = () => {},
  lang = "tr"
}) => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [interactiveActivated, setInteractiveActivated] = useState<boolean>(false);
  const [starsCollected, setStarsCollected] = useState<number>(0);
  const [animatingSparkle, setAnimatingSparkle] = useState<boolean>(false);
  const [isAutoReading, setIsAutoReading] = useState<boolean>(false);
  const autoFlipTimeoutRef = useRef<any>(null);

  // Default reading languages state per book ID
  const [storyLanguages, setStoryLanguages] = useState<Record<string, StoryLang>>(() => {
    const defaults: Record<string, StoryLang> = {};
    STORIES.forEach((s) => {
      defaults[s.id] = (lang || "tr") as StoryLang; // Default all to global lang or fallback to "tr"
    });
    return defaults;
  });

  // Sync storyLanguages when global lang prop changes
  useEffect(() => {
    setStoryLanguages((prev) => {
      const updated = { ...prev };
      STORIES.forEach((s) => {
        updated[s.id] = (lang || "tr") as StoryLang;
      });
      return updated;
    });
  }, [lang]);

  // Turn page logic
  const handleNextPage = () => {
    if (selectedStory && currentPage < 10) {
      setCurrentPage((prev) => prev + 1);
      setInteractiveActivated(false);
    }
  };

  const handlePrevPage = () => {
    if (selectedStory && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setInteractiveActivated(false);
      // Stop auto reading when user manually goes back
      setIsAutoReading(false);
    }
  };

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setCurrentPage(1);
    setInteractiveActivated(false);
    setIsAutoReading(false);
  };

  const handleCloseBook = () => {
    setSelectedStory(null);
    setCurrentPage(1);
    setInteractiveActivated(false);
    setIsAutoReading(false);
  };

  const triggerInteractive = () => {
    if (!interactiveActivated) {
      setStarsCollected((prev) => prev + 1);
      setAnimatingSparkle(true);
      setTimeout(() => setAnimatingSparkle(false), 800);
    }
    setInteractiveActivated(true);
  };

  // Handle Speech Synthesis & Auto-Page Flip loop
  useEffect(() => {
    if (!selectedStory) return;

    if (isAutoReading) {
      const activeLang = storyLanguages[selectedStory.id] || "en";
      const translation = STORY_TRANSLATIONS[selectedStory.id]?.[activeLang];
      const pageTranslation = translation?.pages[currentPage - 1];
      const displayText = pageTranslation?.text || selectedStory.pages[currentPage - 1].text;

      if (window.speechSynthesis && displayText) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(displayText);
        
        const langMap: Record<string, string> = {
          en: "en-US",
          de: "de-DE",
          es: "es-ES",
          ru: "ru-RU",
          tr: "tr-TR"
        };
        utterance.lang = langMap[activeLang] || "en-US";
        utterance.rate = 0.82; // Warm, slow cozy bedtime pace
        utterance.pitch = 1.05;

        utterance.onend = () => {
          if (isAutoReading) {
            autoFlipTimeoutRef.current = setTimeout(() => {
              if (currentPage < 10) {
                setCurrentPage((prev) => prev + 1);
              } else {
                setIsAutoReading(false);
              }
            }, 3000); // 3 seconds delay after reading completes before flipping
          }
        };

        window.speechSynthesis.speak(utterance);
      }
    } else {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (autoFlipTimeoutRef.current) {
        clearTimeout(autoFlipTimeoutRef.current);
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentPage, isAutoReading, selectedStory ? storyLanguages[selectedStory.id] : "en", selectedStory]);

  // If a book is active, render the page turner
  if (selectedStory) {
    const activeLang = storyLanguages[selectedStory.id] || "en";
    const translation = STORY_TRANSLATIONS[selectedStory.id]?.[activeLang];
    
    const displayTitle = translation?.title || selectedStory.title;
    
    // Page translations
    const pageTranslation = translation?.pages[currentPage - 1];
    
    const displayText = pageTranslation?.text || selectedStory.pages[currentPage - 1].text;
    const displayInteractive = pageTranslation?.interactiveElement || selectedStory.pages[currentPage - 1].interactiveElement;
    const displayActiveLabel = pageTranslation?.activeLabel || selectedStory.pages[currentPage - 1].activeLabel;
    const fallbackEmoji = selectedStory.pages[currentPage - 1].emoji;

    return (
      <div
        id="book-viewer"
        className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transition-all duration-500"
      >
        {/* Book Outer Background */}
        <div className={`p-6 sm:p-10 bg-gradient-to-tr ${selectedStory.color} min-h-[600px] flex flex-col justify-between text-white relative`}>
          
          {/* Sparkly Floating Star particles for children */}
          <div className="absolute top-10 left-10 text-white/20 text-3xl animate-float">⭐</div>
          <div className="absolute bottom-10 right-10 text-white/20 text-4xl animate-float-slow">☁️</div>
          <div className="absolute top-1/2 right-6 text-white/10 text-2xl animate-pulse">✨</div>

          {/* Book Header Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-black/10 backdrop-blur-md rounded-2xl p-3 gap-3 border border-white/10 select-none z-10">
            <button
              id="back-to-library-btn"
              onClick={handleCloseBook}
              className="flex items-center gap-2 text-xs font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/20 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {LOCAL_UI_TRANSLATIONS.backToLibrary[activeLang]}
            </button>

            {/* Quick Language bar select inside reading view */}
            <div className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
              {LANGUAGES.map((lang) => {
                const isSelected = activeLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`active-lang-btn-${lang.code}`}
                    onClick={() => {
                      setStoryLanguages(prev => ({ ...prev, [selectedStory.id]: lang.code }));
                    }}
                    title={lang.label}
                    className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 leading-none ${
                      isSelected
                        ? "bg-white text-indigo-700 shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="hidden sm:inline text-[10px]">{lang.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/20 font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 shadow-inner">
                {currentPage === 1 
                  ? LOCAL_UI_TRANSLATIONS.intro[activeLang] 
                  : currentPage === 10 
                    ? LOCAL_UI_TRANSLATIONS.end[activeLang] 
                    : `${LOCAL_UI_TRANSLATIONS.pageOf[activeLang]} ${currentPage} / 10`}
              </span>

              {/* Stars Tracker */}
              <div className={`flex items-center gap-1.5 text-xs font-bold text-yellow-300 bg-black/25 px-3.5 py-1.5 rounded-full border border-yellow-500/20 shadow-md ${animatingSparkle ? "scale-125 duration-300" : ""}`}>
                <Star className="w-4 h-4 fill-yellow-300 shadow-sm" />
                <span>{starsCollected} {LOCAL_UI_TRANSLATIONS.starsCount[activeLang]}</span>
              </div>
            </div>
          </div>

          {/* Book Layout Grid - Single Column with Watercolor Feel */}
          <div className="flex flex-col mx-auto max-w-2xl w-full bg-[#fcfaf5] rounded-3xl shadow-xl my-6 overflow-hidden z-10 relative">
            
            {/* ILLUSTRATION DIVISION (Top) */}
            <div className={`relative w-full h-56 sm:h-72 flex items-center justify-center bg-gradient-to-tr ${selectedStory.color} border-b border-white/20 overflow-hidden`}>
               {/* Decorative background visual elements */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
               <div className="absolute top-8 left-12 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" />
               <div className="absolute bottom-6 right-20 w-36 h-36 bg-black/10 rounded-full blur-3xl pointer-events-none" />
               
               {/* Soft glittering dust */}
               <div className="absolute top-4 left-6 text-white/30 text-xl animate-float">✨</div>
               <div className="absolute top-1/4 right-8 text-white/20 text-lg animate-float-slow">✨</div>
               <div className="absolute bottom-8 left-1/4 text-white/15 text-sm animate-pulse">🌟</div>
               
               {/* Illustration content */}
               <div className="flex flex-col items-center justify-center text-center relative z-10">
                 <div className="bg-white/95 backdrop-blur-md w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50 animate-float">
                   <div className="text-6xl sm:text-7xl drop-shadow-lg select-none leading-none">
                     {fallbackEmoji}
                   </div>
                 </div>
                 <div className="mt-4 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                   <span className="text-[10px] text-white uppercase tracking-widest font-bold font-sans">
                     {displayTitle} {LOCAL_UI_TRANSLATIONS.pageScene[activeLang]}
                   </span>
                 </div>
               </div>
            </div>

            {/* TEXT NARRATION & INTERACTION (Bottom) */}
            <div className="p-6 sm:p-8 md:p-10 relative flex flex-col items-center justify-center text-center">
              <div className="text-slate-100 text-6xl font-serif leading-none absolute top-4 left-4 select-none">“</div>
              <p className="text-base sm:text-lg md:text-xl font-serif text-slate-700 font-medium relative z-10 leading-loose text-center px-4">
                {displayText}
              </p>

              {/* Magical Interaction Area */}
              {displayInteractive && (
                <div className="mt-8 pt-6 border-t border-dashed border-slate-200/80 w-full flex flex-col items-center justify-center gap-3">
                  {interactiveActivated ? (
                    <div className="bg-indigo-50/60 dark:bg-indigo-950/10 border border-indigo-100/60 rounded-2xl p-4 animate-fade-in text-center max-w-md">
                      <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-2 inline-block">
                        {LOCAL_UI_TRANSLATIONS.magicTriggered[activeLang]}
                      </span>
                      <p className="text-xs sm:text-sm font-sans font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                        {displayActiveLabel}
                      </p>
                    </div>
                  ) : (
                    <button
                      id="magic-interaction-btn"
                      onClick={triggerInteractive}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full text-xs sm:text-sm font-extrabold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 flex items-center gap-2 cursor-pointer animate-bounce-subtle"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                      <span>{displayInteractive}</span>
                    </button>
                  )}
                  {!interactiveActivated && (
                    <span className="text-[10px] text-slate-400 font-sans">
                      {LOCAL_UI_TRANSLATIONS.magicButtonTip[activeLang]}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Premium Auto-Read Aloud Section */}
            <div className="border-t border-slate-100 bg-indigo-50/20 dark:bg-slate-900/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                <div className="p-2.5 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0 relative">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  {isAutoReading && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-pink-500"></span>
                    </span>
                  )}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 font-sans">
                      {LOCAL_UI_TRANSLATIONS.autoReadTitle[activeLang]}
                    </span>
                    <span className="flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-[9px] text-white font-extrabold px-2 py-0.5 rounded-full shadow-sm font-sans tracking-wide">
                      <Crown className="w-2.5 h-2.5 fill-white text-white" />
                      PREMIUM
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    {LOCAL_UI_TRANSLATIONS.autoReadDesc[activeLang].replace("{title}", displayTitle)}
                  </p>
                </div>
              </div>

              <button
                id="auto-read-premium-btn"
                onClick={() => {
                  if (!isPremium) {
                    onRequestPremium();
                  } else {
                    setIsAutoReading(!isAutoReading);
                  }
                }}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2 border cursor-pointer ${
                  isAutoReading
                    ? "bg-rose-500 hover:bg-rose-600 text-white border-transparent animate-pulse"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-transparent hover:shadow-lg hover:scale-[1.02] active:scale-98"
                }`}
              >
                {isAutoReading ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>{LOCAL_UI_TRANSLATIONS.stopAutoRead[activeLang]}</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    <span>{LOCAL_UI_TRANSLATIONS.startAutoRead[activeLang]}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Controls (Turning Page) */}
          <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4 select-none z-10">
            <button
              id="prev-page-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-1.5 bg-white/25 hover:bg-white/35 text-white text-xs font-bold px-4 py-2.5 rounded-full border border-white/15 shadow-sm transition-all cursor-pointer ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "active:scale-90"}`}
            >
              <ArrowLeft className="w-4 h-4" />
              {LOCAL_UI_TRANSLATIONS.prevPage[activeLang]}
            </button>

            {/* Indicator dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    setInteractiveActivated(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${currentPage === i + 1 ? "bg-white scale-125 shadow-md" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>

            {currentPage < 10 ? (
              <button
                id="next-page-btn"
                onClick={handleNextPage}
                className="flex items-center gap-1.5 bg-white/25 hover:bg-white/35 text-white text-xs font-bold px-4 py-2.5 rounded-full border border-white/15 shadow-sm active:scale-90 transition-all animate-pulse-subtle cursor-pointer"
              >
                {LOCAL_UI_TRANSLATIONS.nextPage[activeLang]}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="finish-book-btn"
                onClick={handleCloseBook}
                className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg border border-emerald-400/20 active:scale-95 transition-all cursor-pointer"
              >
                {LOCAL_UI_TRANSLATIONS.finishBook[activeLang]}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, render storybook listings
  return (
    <div className="space-y-6 select-none animate-fade-in">
      <div className={`text-center pb-4 border-b max-w-2xl mx-auto ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
        <h3 className={`text-2xl font-sans font-bold flex items-center justify-center gap-2 ${darkMode ? "text-slate-100" : "text-slate-800"}`}>
          <BookOpen className="w-7 h-7 text-indigo-500 animate-pulse" />
          {LOCAL_UI_TRANSLATIONS.headerTitle[lang]}
        </h3>
        <p className={`text-xs mt-2 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          {LOCAL_UI_TRANSLATIONS.headerDesc[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {STORIES.map((story) => {
          const currentLang = lang; // Use global lang instead of hardcoded "en"!
          // Look up translated titles and descriptions
          const translation = STORY_TRANSLATIONS[story.id]?.[currentLang];
          const displayTitle = translation?.title || story.title;
          const displayDesc = translation?.description || story.description;

          return (
            <div
              key={story.id}
              id={`story-card-${story.id}`}
              onClick={() => handleSelectStory(story)}
              className={`group flex flex-col justify-between backdrop-blur-md rounded-3xl p-5 border transition-all cursor-pointer transform hover:-translate-y-1.5 ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800/80 hover:bg-slate-900/95 text-slate-100"
                  : "bg-white/70 border-slate-100/60 hover:bg-white/95 text-slate-800"
              }`}
              style={{
                boxShadow: darkMode
                  ? "0 10px 15px rgba(0,0,0,0.4)"
                  : "0 10px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div>
                {/* Illustrated Book Jacket Mock */}
                <div className={`w-full h-36 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center shadow-md relative overflow-hidden mb-4 hover:shadow-xl transition-shadow duration-300`}>
                  
                  {/* Spine mimic for Book feel */}
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/15 z-20 border-r border-white/10 shadow-sm" />
                  
                  {/* Glowing warm light effects mapping bedtime vibe */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="absolute -bottom-4 -left-2 w-20 h-20 bg-black/10 rounded-full blur-lg pointer-events-none" />
                  
                  {/* Subtle floaty sparkles */}
                  <div className="absolute top-2 left-6 text-white/20 text-xs animate-pulse">✨</div>
                  <div className="absolute bottom-4 right-6 text-white/30 text-xs animate-float">✨</div>
                  
                  {/* Medallion with the Story's main Emoji */}
                  <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-md border-2 border-white/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10 animate-float-slow">
                    <span className="text-3xl select-none leading-none filter drop-shadow">
                      {story.emoji}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3 bg-black/45 text-white font-mono text-[9px] px-2.5 py-0.5 rounded-full backdrop-blur-md font-semibold tracking-wider">
                    10 {LOCAL_UI_TRANSLATIONS.pagesBadge[lang]}
                  </div>
                </div>

                {/* Title & Text */}
                <h4 className={`font-sans font-bold text-base leading-tight transition-colors ${
                  darkMode ? "text-slate-100 group-hover:text-indigo-400" : "text-slate-800 group-hover:text-indigo-600"
                }`}>
                  {displayTitle}
                </h4>
                
                <p className={`text-xs mt-2 line-clamp-2 leading-relaxed min-h-[32px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {displayDesc}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t flex items-center justify-between ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
                <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">
                  {LOCAL_UI_TRANSLATIONS.bedtimeStoryBadge[lang]}
                </span>
                
                <button
                  id={`read-story-btn-${story.id}`}
                  onClick={() => handleSelectStory(story)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm transition-all flex items-center gap-1 border cursor-pointer ${
                    darkMode
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white border-transparent"
                      : "bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border-indigo-100"
                  }`}
                >
                  <span>{LOCAL_UI_TRANSLATIONS.readBtn[lang]}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
