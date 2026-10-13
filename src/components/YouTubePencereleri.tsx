import React, { useState, useEffect } from "react";
import { Youtube, Link2, HelpCircle, Save, RefreshCw, Smartphone } from "lucide-react";

interface YoutubeChannel {
  id: number;
  label: string;
  videoId: string;
  urlInput: string;
  colorClass: string;
}

const DEFAULT_CHANNELS: YoutubeChannel[] = [
  {
    id: 1,
    label: "🎹 Lullaby Crystal Piano",
    videoId: "sWUQA1WFI0k",
    urlInput: "https://youtu.be/sWUQA1WFI0k?si=K8G9FXCArFJ0XRWx",
    colorClass: "from-pink-100 to-rose-200 border-rose-300 dark:from-rose-950/40 dark:to-pink-900/10 dark:border-rose-900/40"
  },
  {
    id: 2,
    label: "🎼 Lullaby Music Box",
    videoId: "k4xCoAqJsrg",
    urlInput: "https://youtu.be/k4xCoAqJsrg?si=M0ij5yWOiiHOzSET",
    colorClass: "from-sky-100 to-blue-200 border-blue-300 dark:from-sky-950/40 dark:to-blue-900/10 dark:border-blue-900/40"
  },
  {
    id: 3,
    label: "💫 Lullaby Harp",
    videoId: "Lc3dL12tqYk",
    urlInput: "https://youtu.be/Lc3dL12tqYk?si=Zxsp6zCO31QknyS1",
    colorClass: "from-purple-100 to-violet-200 border-violet-300 dark:from-purple-950/40 dark:to-violet-900/10 dark:border-purple-900/40"
  },
  {
    id: 4,
    label: "🎶 Lullaby Flute",
    videoId: "jm4veb6-mJo",
    urlInput: "https://youtube.com/watch?v=jm4veb6-mJo&feature=shared",
    colorClass: "from-emerald-100 to-teal-200 border-teal-300 dark:from-emerald-950/40 dark:to-teal-900/10 dark:border-teal-900/40"
  },
  {
    id: 5,
    label: "🧸 DeepSleepHealing1",
    videoId: "W8S9A7M_f_E",
    urlInput: "https://www.youtube.com/watch?v=W8S9A7M_f_E",
    colorClass: "from-amber-100 to-yellow-200 border-yellow-300 dark:from-amber-950/40 dark:to-yellow-900/10 dark:border-yellow-900/40"
  },
  {
    id: 6,
    label: "🌌 DeepSleepHealing2",
    videoId: "u68-52_C-X0",
    urlInput: "https://www.youtube.com/watch?v=u68-52_C-X0",
    colorClass: "from-indigo-100 to-violet-200 border-violet-300 dark:from-indigo-950/40 dark:to-violet-900/10 dark:border-violet-900/40"
  },
  {
    id: 7,
    label: "🕊️ DeepSleepHealing3",
    videoId: "5G1Z_Hee9Yg",
    urlInput: "https://www.youtube.com/watch?v=5G1Z_Hee9Yg",
    colorClass: "from-fuchsia-100 to-pink-200 border-pink-300 dark:from-fuchsia-950/40 dark:to-pink-900/10 dark:border-pink-900/40"
  },
  {
    id: 8,
    label: "🦄 DeepSleepHealing4",
    videoId: "D4y8_8f8e0E",
    urlInput: "https://www.youtube.com/watch?v=D4y8_8f8e0E",
    colorClass: "from-teal-100 to-cyan-200 border-cyan-300 dark:from-teal-950/40 dark:to-cyan-900/10 dark:border-cyan-900/40"
  }
];

export const YouTubePencereleri: React.FC<{ 
  lang?: "en" | "tr" | "de" | "es" | "ru";
  isPremium?: boolean;
  isAdmin?: boolean;
}> = ({ lang: propLang, isPremium = false, isAdmin = false }) => {
  const lang = propLang || (localStorage.getItem("bebek_uyku_lang") as any) || "en";

  const [channels, setChannels] = useState<YoutubeChannel[]>(() => {
    const saved = localStorage.getItem("bebek_uyku_youtube_channels");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const merged = [...parsed];
          // Ensure we have 8 channels by filling in from DEFAULT_CHANNELS for missing IDs
          for (let i = 1; i <= 8; i++) {
            const exists = merged.some(ch => ch.id === i);
            if (!exists) {
              const defCh = DEFAULT_CHANNELS.find(d => d.id === i);
              if (defCh) {
                merged.push(defCh);
              }
            }
          }
          // Sort them by id to maintain sequence
          merged.sort((a, b) => a.id - b.id);
          
          // Force-restore the user's requested video IDs if the saved data contains the old fallbacks
          const oldIds = ["W8S9A7M_f_E", "u68-52_C-X0", "5G1Z_Hee9Yg"];
          const hasOldIds = merged.some((ch: any) => ch.id <= 4 && oldIds.includes(ch.videoId));
          if (hasOldIds) {
            return DEFAULT_CHANNELS;
          }
          // Always enforce the newest labels
          return merged.map((ch: any) => {
            const matchedDefault = DEFAULT_CHANNELS.find(d => d.id === ch.id);
            if (matchedDefault) {
              return { ...ch, label: matchedDefault.label };
            }
            return ch;
          });
        }
      } catch (e) {
        return DEFAULT_CHANNELS;
      }
    }
    return DEFAULT_CHANNELS;
  });

  const [activeSettings, setActiveSettings] = useState<number | null>(null);
  const [errorMessages, setErrorMessages] = useState<Record<number, string>>({});

  useEffect(() => {
    localStorage.setItem("bebek_uyku_youtube_channels", JSON.stringify(channels));
  }, [channels]);

  // Robust YouTube Video ID extractor
  const extractVideoID = (url: string): string => {
    if (!url) return "";
    const trimmed = url.trim();
    
    // If it is already a direct 11-character video ID
    if (trimmed.length === 11 && !trimmed.includes("/") && !trimmed.includes("?")) {
      return trimmed;
    }
    
    try {
      // 1. Handle live streams, shorts, embeds, and raw v URLs:
      // e.g. youtube.com/live/VIDEO_ID, youtube.com/shorts/VIDEO_ID, youtube.com/embed/VIDEO_ID, youtube.com/v/VIDEO_ID
      const paths = ["/live/", "/shorts/", "/embed/", "/v/"];
      for (const path of paths) {
        if (trimmed.includes(path)) {
          const parts = trimmed.split(path);
          if (parts.length > 1) {
            const idPart = parts[1].split(/[?&#]/)[0];
            if (idPart.length === 11) {
              return idPart;
            }
          }
        }
      }
      
      // 2. Handle youtu.be short URLs
      if (trimmed.includes("youtu.be/")) {
        const parts = trimmed.split("youtu.be/");
        if (parts.length > 1) {
          const idPart = parts[1].split(/[?&#]/)[0];
          if (idPart.length === 11) {
            return idPart;
          }
        }
      }
      
      // 3. Handle standard watch URLs with v= query param
      const regExp = /[?&]v=([^#&?]*)/;
      const match = trimmed.match(regExp);
      if (match && match[1].length === 11) {
        return match[1];
      }
      
      // 4. Fallback regex match for other common URL variations
      const regExpAlt = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const matchAlt = trimmed.match(regExpAlt);
      if (matchAlt && matchAlt[2].length === 11) {
        return matchAlt[2];
      }
    } catch (err) {
      console.error("Error parsing YouTube URL:", err);
    }
    
    return "";
  };

  const handleUrlChange = (id: number, val: string) => {
    setChannels(prev =>
      prev.map(ch => {
        if (ch.id === id) {
          return { ...ch, urlInput: val };
        }
        return ch;
      })
    );
  };

  const handleApplyLink = (id: number) => {
    let success = false;
    const targetChannel = channels.find(ch => ch.id === id);
    if (!targetChannel) return;

    const parsedId = extractVideoID(targetChannel.urlInput);
    
    if (parsedId) {
      setChannels(prev =>
        prev.map(ch => {
          if (ch.id === id) {
            return { ...ch, videoId: parsedId };
          }
          return ch;
        })
      );
      setErrorMessages(prev => ({ ...prev, [id]: "" }));
      success = true;
    } else {
      setErrorMessages(prev => ({
        ...prev,
        [id]: LOCALIZED.invalidLink[lang] || LOCALIZED.invalidLink["en"]
      }));
    }

    if (success) {
      setActiveSettings(null);
    }
  };

  const handleResetToDefault = (id: number) => {
    const defaultCh = DEFAULT_CHANNELS.find(x => x.id === id);
    if (defaultCh) {
      setChannels(prev => prev.map(ch => (ch.id === id ? { ...defaultCh } : ch)));
      setErrorMessages(prev => ({ ...prev, [id]: "" }));
    }
    setActiveSettings(null);
  };

  const LOCAL_LANG = LOCALIZED[lang] ? lang : "en";

  return (
    <div className="w-full bg-white/70 dark:bg-slate-900/85 backdrop-blur-md rounded-3xl p-6 border-2 border-slate-100 dark:border-slate-800/80 shadow-xl mt-8 select-none transition-colors duration-350">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-xl font-sans font-black text-black dark:text-slate-100 flex items-center gap-2">
            <Youtube className="w-6 h-6 text-red-500 fill-red-500" />
            {LOCALIZED.title[LOCAL_LANG]}
          </h3>
        </div>
      </div>
      {/* Grid containing 8 visual TVs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {channels.map((ch) => {
          const isConfiguring = activeSettings === ch.id;
          const currentError = errorMessages[ch.id];
          const canEdit = isAdmin || (isPremium && ch.id > 4);

          return (
            <div
              key={ch.id}
              id={`monitor-${ch.id}`}
              className={`flex flex-col rounded-3xl p-4 bg-gradient-to-b ${ch.colorClass} border-2 shadow-lg transition-transform hover:scale-[1.01]`}
            >
              {/* Retro Monitor Header & Controls */}
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="font-sans font-black text-black dark:text-slate-100 text-xs tracking-wider uppercase truncate max-w-[200px]">
                  {ch.label}
                </span>

                <div className="flex items-center gap-2">
                  {canEdit && (
                    <button
                      id={`monitor-settings-btn-${ch.id}`}
                      onClick={() => {
                        setActiveSettings(isConfiguring ? null : ch.id);
                        if (!isConfiguring) {
                          // Clear error on open
                          setErrorMessages(prev => ({ ...prev, [ch.id]: "" }));
                        }
                      }}
                      className="text-[11px] bg-white/95 dark:bg-slate-800/95 hover:bg-white dark:hover:bg-slate-700 text-black dark:text-slate-200 font-extrabold px-2.5 py-1 rounded-full shadow-sm border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-1 hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer shadow-md"
                    >
                      <Link2 className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                      {LOCALIZED.edit[LOCAL_LANG]}
                    </button>
                  )}
                </div>
              </div>

              {/* TV Shell Wrapper */}
              <div className="relative aspect-video w-full rounded-2xl bg-black border-4 border-slate-800 dark:border-slate-950 shadow-inner overflow-hidden">
                {/* TV Signal Screen */}
                {ch.videoId ? (
                  <iframe
                    id={`yt-iframe-${ch.id}`}
                    src={`https://www.youtube.com/embed/${ch.videoId}?autoplay=0&mute=0&rel=0&modestbranding=1`}
                    title={ch.label}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-900 border border-dashed border-slate-700">
                    <Youtube className="w-10 h-10 mb-2 animate-pulse text-red-500" />
                    <span className="text-xs">{LOCALIZED.noVideo[LOCAL_LANG]}</span>
                  </div>
                )}
              </div>

              {/* Settings Dropdown form */}
              {isConfiguring && (
                <div className="mt-4 bg-white dark:bg-slate-900 rounded-2xl p-3 border-2 border-slate-300 dark:border-slate-800 shadow-xl transition-all">
                  <div className="text-xs text-black dark:text-slate-200 font-extrabold mb-1.5">
                    {LOCALIZED.labelUrl[LOCAL_LANG]}
                  </div>
                  
                  <div className="flex gap-2">
                    <input
                      id={`yt-url-input-${ch.id}`}
                      type="text"
                      value={ch.urlInput}
                      onChange={(e) => handleUrlChange(ch.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleApplyLink(ch.id);
                        }
                      }}
                      placeholder={LOCALIZED.placeholder[LOCAL_LANG]}
                      className="w-full text-xs bg-slate-50 dark:bg-slate-850 text-black dark:text-white border border-slate-300 dark:border-slate-850 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-450 font-sans font-medium"
                    />
                    
                    <button
                      id={`yt-apply-btn-${ch.id}`}
                      onClick={() => handleApplyLink(ch.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white p-1.5 px-3 rounded-xl shadow-md text-xs transition-all flex items-center gap-1 font-bold cursor-pointer shrink-0"
                    >
                      <Save className="w-3.5 h-3.5" />
                      {LOCALIZED.apply[LOCAL_LANG]}
                    </button>
                  </div>

                  {currentError && (
                    <div className="mt-2 text-[11px] text-rose-600 dark:text-rose-400 font-extrabold px-1 animate-pulse">
                      ⚠️ {currentError}
                    </div>
                  )}
                  
                  <div className="mt-2.5 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-2 text-[10px] text-slate-800 dark:text-slate-400">
                    <span className="flex items-center gap-1 text-black dark:text-slate-300 font-bold">
                      <HelpCircle className="w-3 h-3 text-sky-600 dark:text-sky-450" />
                      {LOCALIZED.autoDetect[LOCAL_LANG]}
                    </span>
                    
                    <button
                      id={`yt-reset-btn-${ch.id}`}
                      onClick={() => handleResetToDefault(ch.id)}
                      className="text-rose-700 dark:text-rose-400 font-extrabold hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      {LOCALIZED.reset[LOCAL_LANG]}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LOCALIZED: Record<string, Record<string, string>> = {
  title: {
    en: "YouTube Monitors",
    tr: "YouTube Monitörleri",
    de: "YouTube-Monitore",
    es: "Monitores de YouTube",
    ru: "Мониторы YouTube"
  },
  edit: {
    en: "Edit",
    tr: "Düzenle",
    de: "Bearbeiten",
    es: "Editar",
    ru: "Редактировать"
  },
  apply: {
    en: "Apply",
    tr: "Uygula",
    de: "Anwenden",
    es: "Aplicar",
    ru: "Применить"
  },
  reset: {
    en: "Reset to Default",
    tr: "Varsayılana Sıfırla",
    de: "Zurücksetzen",
    es: "Restablecer",
    ru: "Сбросить"
  },
  autoDetect: {
    en: "Auto-detects ID.",
    tr: "Video ID'sini otomatik algılar.",
    de: "Erkennt ID automatisch.",
    es: "Detecta ID automáticamente.",
    ru: "Автоопределение ID."
  },
  noVideo: {
    en: "No Compatible Video",
    tr: "Uyumlu Video Yok",
    de: "Kein kompatibles Video",
    es: "Sin video compatible",
    ru: "Нет совместимого видео"
  },
  placeholder: {
    en: "https://www.youtube.com/watch?v=...",
    tr: "https://www.youtube.com/watch?v=...",
    de: "https://www.youtube.com/watch?v=...",
    es: "https://www.youtube.com/watch?v=...",
    ru: "https://www.youtube.com/watch?v=..."
  },
  invalidLink: {
    en: "Invalid YouTube link! Please enter a valid video link or 11-character video ID.",
    tr: "Geçersiz YouTube linki! Lütfen geçerli bir video linki veya 11 haneli video ID'si girin.",
    de: "Ungültiger YouTube-Link! Bitte geben Sie einen gültigen Link oder eine 11-stellige ID ein.",
    es: "¡Enlace de YouTube no válido! Ingrese un enlace válido o ID de 11 caracteres.",
    ru: "Неверная ссылка YouTube! Пожалуйста, введите корректную ссылку или 11-значный ID."
  },
  labelUrl: {
    en: "YouTube URL or Video ID:",
    tr: "YouTube URL veya Video ID:",
    de: "YouTube-URL oder Video-ID:",
    es: "URL de YouTube o ID de video:",
    ru: "URL YouTube или ID видео:"
  },
  embedWarning: {
    en: "Note: Some YouTube video creators disable external embedding, showing a 'Video unavailable' screen. We have automatically fixed screens 2, 3, and 4 with 100% embed-friendly, high-quality sweet lullaby alternatives so everything plays beautifully!",
    tr: "Not: Bazı YouTube video sahipleri harici oynatımı engellediği için 'Video kullanılamıyor' hatası oluşabilir. Bu engeli aşmak için 2., 3. ve 4. ekranları 100% uyumlu ve yüksek kaliteli bebek ninnileriyle otomatik olarak güncelledik, ninnileriniz artık kesintisiz oynayacaktır!",
    de: "Hinweis: Einige YouTube-Ersteller deaktivieren das Einbetten (zeigt 'Video nicht verfügbar'). Wir haben die Bildschirme 2, 3 und 4 automatisch durch einbettungsfreundliche Alternativen ersetzt!",
    es: "Nota: Algunos creadores de YouTube desactivan la inserción (muestra 'Video no disponible'). ¡Hemos reemplazado las pantallas 2, 3 y 4 con alternativas 100% compatibles!",
    ru: "Примечание: Некоторые авторы запрещают встраивание видео (показывается 'Видео недоступно'). Мы автоматически заменили экраны 2, 3 и 4 на 100% совместимые альтернативы!"
  }
};
