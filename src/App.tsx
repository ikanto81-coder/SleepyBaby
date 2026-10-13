/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { INITIAL_SOUNDS, SoundState, audioEngineHandler } from "./lib/audioEngine";
import { AudioCard } from "./components/AudioCard";
import { YouTubePencereleri } from "./components/YouTubePencereleri";
import { MixerControls } from "./components/MixerControls";
import { MasalOkuyucu } from "./components/MasalOkuyucu";
import { UI_TRANSLATIONS } from "./data/translations";
import { 
  Music, 
  BookOpen, 
  Moon, 
  Sparkles, 
  Baby,
  VolumeX,
  Plus,
  X,
  Upload,
  ChevronDown,
  Languages,
  Crown,
  Lock,
  CreditCard,
  ShieldCheck,
  Loader2
} from "lucide-react";

export default function App() {
  // Splash Screen State
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [splashCountdown, setSplashCountdown] = useState<number>(5);

  // Master View State
  const [activeView, setActiveView] = useState<"home" | "mixer" | "fun_time" | "youtube" | "tales">("home");

  // Global Language State
  const [lang, setLang] = useState<"en" | "tr" | "de" | "es" | "ru">(() => {
    const saved = localStorage.getItem("bebek_uyku_lang");
    if (saved === "en" || saved === "tr" || saved === "de" || saved === "es" || saved === "ru") {
      return saved as any;
    }
    return "tr";
  });

  useEffect(() => {
    localStorage.setItem("bebek_uyku_lang", lang);
  }, [lang]);

  const t = (key: string): string => {
    return UI_TRANSLATIONS[key]?.[lang] || key;
  };
  
  // Dropdown Language selector states & close on click outside
  const [showLangMenu, setShowLangMenu] = useState<boolean>(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("bebek_uyku_dark_mode") === "true";
  });

  // Dark Mode side effect
  useEffect(() => {
    localStorage.setItem("bebek_uyku_dark_mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  // Sound board state
  const [sounds, setSounds] = useState<SoundState[]>(() => {
    // 1. Try to load entire sounds metadata
    const savedMetadata = localStorage.getItem("bebek_uyku_sounds_metadata");
    if (savedMetadata) {
      try {
        const parsed = JSON.parse(savedMetadata) as SoundState[];
        const merged: SoundState[] = [];
        
        // Add all INITIAL_SOUNDS but override with custom metadata if existed
        INITIAL_SOUNDS.forEach(initSound => {
          const saved = parsed.find(p => p.id === initSound.id);
          if (saved) {
            merged.push({
              ...initSound,
              volume: saved.volume ?? initSound.volume,
              customFileUrl: saved.customFileUrl,
              localFileName: saved.localFileName,
              isPlaying: false // always starts stopped
            });
          } else {
            merged.push(initSound);
          }
        });
        
        // Add completely custom cards (which are not in INITIAL_SOUNDS)
        const customCards = parsed.filter(p => !INITIAL_SOUNDS.some(init => init.id === p.id));
        merged.push(...customCards.map(s => ({ ...s, isPlaying: false })));
        
        return merged;
      } catch (e) {
        console.error("Failed to parse saved sounds metadata:", e);
      }
    }
    
    // Fallback to legacy custom sounds storage or raw defaults
    const savedCustom = localStorage.getItem("bebek_uyku_custom_sounds");
    if (savedCustom) {
      try {
        const parsed = JSON.parse(savedCustom);
        return [...INITIAL_SOUNDS, ...parsed.map((s: any) => ({ ...s, customFileUrl: undefined, isPlaying: false }))];
      } catch (e) {
        return INITIAL_SOUNDS;
      }
    }
    return INITIAL_SOUNDS;
  });

  // Modal and custom sound creator inputs
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [newCardName, setNewCardName] = useState("");
  const [newCardEmoji, setNewCardEmoji] = useState("🎵");
  const [newCardCategory, setNewCardCategory] = useState<"nature" | "household" | "synth" | "womb" | "custom" | "musicbox">("custom");
  const [newCardFileUrl, setNewCardFileUrl] = useState<string | undefined>(undefined);
  const [newCardFileName, setNewCardFileName] = useState<string | undefined>(undefined);
  const [newCardColorPreset, setNewCardColorPreset] = useState(0);

  const colorPresets = [
    { colorClass: "from-purple-400 to-indigo-500", secondaryColorClass: "bg-purple-600", shadowColor: "#8b5cf6" },
    { colorClass: "from-pink-400 to-rose-500", secondaryColorClass: "bg-pink-600", shadowColor: "#db2777" },
    { colorClass: "from-amber-300 to-orange-400", secondaryColorClass: "bg-amber-600", shadowColor: "#d97706" },
    { colorClass: "from-emerald-300 to-teal-400", secondaryColorClass: "bg-emerald-600", shadowColor: "#059669" },
    { colorClass: "from-sky-400 to-blue-500", secondaryColorClass: "bg-sky-600", shadowColor: "#3b82f6" },
  ];

  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Saved mixes state
  const [savedMixes, setSavedMixes] = useState<any[]>(() => {
    const saved = localStorage.getItem("bebek_uyku_saved_mixes");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Sync savedMixes to localStorage
  useEffect(() => {
    localStorage.setItem("bebek_uyku_saved_mixes", JSON.stringify(savedMixes));
  }, [savedMixes]);

  // Save Mix modal states
  const [showSaveMixModal, setShowSaveMixModal] = useState(false);
  const [mixErrorModal, setMixErrorModal] = useState(false);
  const [newMixName, setNewMixName] = useState("");

  // Premium & Checkout States
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem("sleepy_baby_premium") === "true";
  });
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  
  const [checkoutCardNumber, setCheckoutCardNumber] = useState("");
  const [checkoutCardHolder, setCheckoutCardHolder] = useState("John Doe");
  const [checkoutExpiry, setCheckoutExpiry] = useState("");
  const [checkoutCvv, setCheckoutCvv] = useState("");
  const [paymentState, setPaymentState] = useState<"idle" | "processing" | "success">("idle");
  const [processingStep, setProcessingStep] = useState(0);

  const [adminPassInput, setAdminPassInput] = useState("");
  const [adminError, setAdminError] = useState("");
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem("sleepy_baby_admin") === "true";
  });

  const handleSetPremium = (val: boolean) => {
    setIsPremium(val);
    localStorage.setItem("sleepy_baby_premium", val ? "true" : "false");
  };

  const handleSetAdmin = (val: boolean) => {
    setIsAdmin(val);
    localStorage.setItem("sleepy_baby_admin", val ? "true" : "false");
  };

  const handleAdminLogin = () => {
    if (adminPassInput === "admin123") {
      handleSetPremium(true);
      handleSetAdmin(true);
      setShowPremiumModal(false);
      setAdminPassInput("");
      setAdminError("");
    } else {
      setAdminError(lang === "tr" ? "Hatalı şifre!" : "Invalid password!");
    }
  };

  useEffect(() => {
    if (paymentState !== "processing") return;
    setProcessingStep(0);
    
    const interval = setInterval(() => {
      setProcessingStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          setPaymentState("success");
          handleSetPremium(true);
          return 3;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [paymentState]);

  const processingMessages = [
    t("checkout.step1"),
    t("checkout.step2"),
    t("checkout.step3"),
    t("checkout.step4")
  ];

  // Timer state
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ad transition states
  const [showAdModal, setShowAdModal] = useState<boolean>(false);
  const [adCountdown, setAdCountdown] = useState<number>(10);
  const [adTargetView, setAdTargetView] = useState<"home" | "mixer" | "fun_time" | "youtube" | "tales" | null>(null);

  // Ad timer effect
  useEffect(() => {
    if (!showAdModal) return;
    if (adCountdown <= 0) return;

    const timer = setInterval(() => {
      setAdCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showAdModal, adCountdown]);

  const handleEnterFunTime = () => {
    if (isPremium) {
      setActiveView("fun_time");
    } else {
      setAdCountdown(10);
      setAdTargetView("fun_time");
      setShowAdModal(true);
    }
  };

  const handleCloseAd = () => {
    if (adCountdown > 0) return;
    setShowAdModal(false);
    if (adTargetView) {
      setActiveView(adTargetView);
      setAdTargetView(null);
    }
  };

  // Splash countdown effect (5 seconds)
  useEffect(() => {
    if (!showSplash) return;
    const interval = setInterval(() => {
      setSplashCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowSplash(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showSplash]);

  // Sync custom sounds metadata (no binary urls) to LocalStorage
  useEffect(() => {
    const savableList = sounds.map(s => {
      const isBlob = s.customFileUrl && s.customFileUrl.startsWith("blob:");
      return {
        ...s,
        customFileUrl: isBlob ? undefined : s.customFileUrl,
        isPlaying: false // don't save play state
      };
    });
    localStorage.setItem("bebek_uyku_sounds_metadata", JSON.stringify(savableList));
    
    const customList = sounds.filter(s => s.category === "custom");
    localStorage.setItem("bebek_uyku_custom_sounds", JSON.stringify(customList));
  }, [sounds]);

  // Timer tick down clock
  useEffect(() => {
    if (timerSecondsLeft !== null) {
      // Start interval ticks
      timerIntervalRef.current = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev === null || prev <= 1) {
            // Timer expired!
            clearInterval(timerIntervalRef.current!);
            handleStopAllSounds();
            return null;
          }

          const nextSec = prev - 1;

          // Smoothly ramp down volume at the final 30 seconds
          if (nextSec <= 30) {
            const ratio = nextSec / 30; // 1 down to 0
            setSounds(curr =>
              curr.map(s => {
                if (s.isPlaying) {
                  const targetVol = s.volume * ratio;
                  audioEngineHandler.setVolume(s.id, targetVol);
                }
                return s;
              })
            );
          }

          return nextSec;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [timerSecondsLeft]);

  // Clean play state on unmount
  useEffect(() => {
    return () => {
      audioEngineHandler.stopAll();
    };
  }, []);

  // Play / Pause Toggle action
  const handleTogglePlay = (id: string) => {
    const targetSound = sounds.find(s => s.id === id);
    if (targetSound && (targetSound.category === "synth" || targetSound.category === "custom") && !isPremium) {
      setShowPremiumModal(true);
      return;
    }
    setSounds(prev =>
      prev.map(sound => {
        if (sound.id === id) {
          const nextPlaying = !sound.isPlaying;
          if (nextPlaying) {
            audioEngineHandler.playSound(sound);
          } else {
            audioEngineHandler.stopSound(sound.id);
          }
          return { ...sound, isPlaying: nextPlaying };
        }
        return sound;
      })
    );
  };

  // Sound channel slider modification
  const handleVolumeChange = (id: string, newVolume: number) => {
    const targetSound = sounds.find(s => s.id === id);
    if (targetSound && (targetSound.category === "synth" || targetSound.category === "custom") && !isPremium) {
      setShowPremiumModal(true);
      return;
    }
    setSounds(prev =>
      prev.map(sound => {
        if (sound.id === id) {
          audioEngineHandler.setVolume(id, newVolume);
          return { ...sound, volume: newVolume };
        }
        return sound;
      })
    );
  };

  // Apply complete mix values (volumes + play states)
  const handleApplyMix = (configs: { [key: string]: { isPlaying: boolean; volume: number } }) => {
    // We apply each config value to audioEngine and react state
    setSounds(prev =>
      prev.map(sound => {
        const config = configs[sound.id];
        if (config) {
          const nextPlaying = config.isPlaying && !((sound.category === "synth" || sound.category === "custom") && !isPremium);
          audioEngineHandler.setVolume(sound.id, config.volume);
          if (nextPlaying) {
            audioEngineHandler.playSound({ ...sound, isPlaying: true, volume: config.volume });
          } else {
            audioEngineHandler.stopSound(sound.id);
          }
          return { ...sound, isPlaying: nextPlaying, volume: config.volume };
        } else {
          // If this sound is not in the mix configuration, stop it cleanly
          audioEngineHandler.stopSound(sound.id);
          return { ...sound, isPlaying: false };
        }
      })
    );
  };

  const handleSaveCurrentMix = (name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const configs: { [key: string]: { isPlaying: boolean; volume: number } } = {};
    sounds.forEach(s => {
      configs[s.id] = { isPlaying: s.isPlaying, volume: s.volume };
    });

    const newMix = {
      id: "mix-" + Date.now(),
      name: trimmedName,
      audioConfigs: configs,
    };

    setSavedMixes(prev => [...prev, newMix]);
  };

  // Complete clean state stop
  const handleStopAllSounds = () => {
    audioEngineHandler.stopAll();
    setSounds(prev => prev.map(s => ({ ...s, isPlaying: false })));
    setTimerSecondsLeft(null);
  };

  const handleCustomFileChange = (id: string, fileUrl: string | undefined, fileName?: string) => {
    setSounds(prev =>
      prev.map(sound => {
        if (sound.id === id) {
          if (sound.isPlaying) {
            audioEngineHandler.stopSound(sound.id);
          }
          return {
            ...sound,
            customFileUrl: fileUrl,
            localFileName: fileName,
            isPlaying: false
          };
        }
        return sound;
      })
    );
  };

  const handleDeleteCustomCard = (id: string) => {
    audioEngineHandler.stopSound(id);
    setSounds(prev => prev.filter(s => s.id !== id));
  };

  const handleAddCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPremium) {
      setShowPremiumModal(true);
      return;
    }
    if (!newCardName.trim()) return;

    const id = `custom-${Date.now()}`;
    const preset = colorPresets[newCardColorPreset];

    const newSound: SoundState = {
      id,
      name: newCardName.trim(),
      emoji: newCardEmoji || "🎵",
      category: newCardCategory,
      synthType: "none",
      colorClass: preset.colorClass,
      secondaryColorClass: preset.secondaryColorClass,
      shadowColor: preset.shadowColor,
      isPlaying: false,
      volume: 0.5,
      customFileUrl: newCardFileUrl,
      localFileName: newCardFileName,
    };

    setSounds(prev => [...prev, newSound]);

    // Reset input fields
    setNewCardName("");
    setNewCardEmoji("🎵");
    setNewCardCategory("custom");
    setNewCardFileUrl(undefined);
    setNewCardFileName(undefined);
    setNewCardColorPreset(0);
    setShowAddCardModal(false);
  };

  const filteredSounds = (() => {
    const list = sounds.filter(sound => {
      if (activeCategory === "all") return true;
      if (activeCategory === "recommended") return ["anne-karni", "pis-pis", "yagmur", "ninniler"].includes(sound.id);
      return sound.category === activeCategory;
    });

    if (activeCategory === "all") {
      const normal = list.filter(sound => sound.category !== "synth" && sound.category !== "custom");
      const premium = list.filter(sound => sound.category === "synth" || sound.category === "custom");
      return [...normal, ...premium];
    }
    return list;
  })();

  if (showSplash) {
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#050914] via-[#0B132B] to-[#151F33] overflow-hidden select-none cursor-pointer"
        onClick={() => setShowSplash(false)}
      >
        
        {/* Twinkling star field */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "12%", left: "8%", delay: "0s", size: "w-1 h-1" },
            { top: "8%", left: "45%", delay: "1.5s", size: "w-2 h-2" },
            { top: "15%", left: "82%", delay: "0.7s", size: "w-1.5 h-1.5" },
            { top: "28%", left: "18%", delay: "2.1s", size: "w-2 h-2" },
            { top: "35%", left: "70%", delay: "1.2s", size: "w-1 h-1" },
            { top: "48%", left: "88%", delay: "3s", size: "w-2.5 h-2.5" },
            { top: "55%", left: "12%", delay: "0.3s", size: "w-1.5 h-1.5" },
            { top: "72%", left: "30%", delay: "1.8s", size: "w-2 h-2" },
            { top: "64%", left: "78%", delay: "2.4s", size: "w-1 h-1" },
            { top: "88%", left: "15%", delay: "0.9s", size: "w-2 h-2" },
            { top: "82%", left: "55%", delay: "2.2s", size: "w-1.5 h-1.5" },
            { top: "90%", left: "80%", delay: "1.1s", size: "w-2.5 h-2.5" },
          ].map((star, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-yellow-100 animate-twinkle shadow-[0_0_8px_rgba(254,240,138,0.75)]"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                width: star.size.split(" ")[0] === "w-1" ? "4px" : star.size.split(" ")[0] === "w-1.5" ? "6px" : star.size.split(" ")[0] === "w-2" ? "8px" : "10px",
                height: star.size.split(" ")[0] === "w-1" ? "4px" : star.size.split(" ")[0] === "w-1.5" ? "6px" : star.size.split(" ")[0] === "w-2" ? "8px" : "10px",
              }}
            />
          ))}

          {/* Glowing planetary light fields */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Welcome Splash Content Card */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          
          {/* CRADLE RIG (Rocking cradle graphic) */}
          <div className="relative p-6 bg-transparent animate-cradle flex flex-col items-center justify-center w-72 h-72 sm:w-96 sm:h-96">
            
            {/* Embedded custom design visual */}
            <img
              src="https://lh3.googleusercontent.com/d/1lvMCRnMHBnph3Bbv4nmsqgLwYejdCLg_"
              alt="SleepyBaby Welcome"
              className="max-w-full max-h-full object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Beautiful illustration fallback
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop";
              }}
            />

            {/* Glowing spot reflection */}
            <div className="absolute -bottom-4 w-44 h-2 bg-pink-400/20 rounded-full blur-md animate-pulse" />
          </div>

        </div>

      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans pb-16 antialiased transition-all duration-500 relative ${
      darkMode 
        ? "animated-bg-dark text-slate-100 selection:bg-indigo-900 selection:text-indigo-100" 
        : "animated-bg text-slate-800 selection:bg-pink-100 selection:text-pink-900"
    }`}>
      
      {/* Visual background cloud graphics floating */}
      <div className="absolute top-12 left-5 md:left-24 text-sky-200/50 text-[100px] select-none pointer-events-none animate-float-slow leading-none">
        ☁️
      </div>
      <div className="absolute top-48 right-8 text-pink-200/40 text-[120px] select-none pointer-events-none animate-float leading-none">
        ☁️
      </div>
      <div className="absolute bottom-16 left-12 text-purple-200/40 text-[90px] select-none pointer-events-none animate-float-slow leading-none">
        ☁️
      </div>

      {/* Main Container Wrapper */}
      <div className="max-w-6xl mx-auto px-4 pt-6 md:pt-10 relative z-10 flex flex-col min-h-screen">
        
        {/* ========================================================
            PREMIUM RESPONSIVE HEADER - ALWAYS VISIBLE EXCEPT MAYBE SPLASH
            ======================================================== */}
        <div className={`relative z-50 flex flex-row items-center justify-between gap-1 sm:gap-2 py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-full mb-8 border transition-all duration-300 ${
          darkMode 
            ? "bg-slate-900/80 border-slate-800 text-white shadow-md shadow-slate-950/40 backdrop-blur-md" 
            : "bg-white/80 border-slate-100 text-slate-800 shadow-sm shadow-slate-100/40 backdrop-blur-md"
        }`}>
          {/* Logo / Brand - Also acts as Home Button */}
          <div 
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:opacity-80 transition-opacity shrink-0" 
            onClick={() => {
              if (activeView === "home") {
                // If already on home, go back to splash screen
                setSplashCountdown(5);
                setShowSplash(true);
              } else {
                // Otherwise go back to home
                setActiveView("home");
              }
            }}
          >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 border-2 ${darkMode ? "border-indigo-500/30" : "border-pink-200"}`}>
              <img 
                src="https://lh3.googleusercontent.com/d/1lvMCRnMHBnph3Bbv4nmsqgLwYejdCLg_" 
                alt="SleepyBaby Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-1.5">
              <span className="font-extrabold text-xs sm:text-base tracking-tight block leading-none">SleepyBaby</span>
              {activeView !== "home" && <span className="text-[7px] sm:text-[9px] text-pink-500 block font-mono uppercase font-bold leading-none mt-0.5 md:mt-0">Back</span>}
            </div>
          </div>

          {/* Contextual navigation based on activeView */}
          {activeView !== "home" && (
            <div className={`p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border flex gap-0.5 sm:gap-1 ${darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
              {activeView === "mixer" && (
                <button
                  type="button"
                  onClick={() => {
                    const hasActive = sounds.some(s => s.isPlaying);
                    if (!hasActive) {
                      setMixErrorModal(true);
                    } else {
                      setNewMixName("");
                      setShowSaveMixModal(true);
                    }
                  }}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl bg-pink-500 hover:bg-pink-600 text-white shadow-md flex items-center gap-1 active:scale-95 transition-all cursor-pointer select-none border-none"
                  title="Şu anki aktif sesleri yeni bir miks olarak kaydet"
                >
                  <Music className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
                  <span className="hidden xs:inline sm:inline">SleepyMixer</span>
                  <span className="xs:hidden sm:hidden">Mixer</span>
                </button>
              )}
              {activeView === "fun_time" && (
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl bg-indigo-500 text-white shadow-md flex items-center gap-1 select-none">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Fun Time
                </div>
              )}
              {activeView === "youtube" && (
                <button
                  onClick={() => setActiveView("fun_time")}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl transition-all flex items-center gap-1 cursor-pointer select-none ${
                    darkMode ? "bg-red-600 hover:bg-red-700 text-white shadow-md" : "bg-red-500 hover:bg-red-600 text-white shadow-md"
                  }`}
                >
                  ◀ <span className="hidden xs:inline sm:inline">Back to Fun Time</span><span className="xs:hidden sm:hidden">Back</span>
                </button>
              )}
              {activeView === "tales" && (
                <button
                  onClick={() => setActiveView("fun_time")}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl transition-all flex items-center gap-1 cursor-pointer select-none ${
                    darkMode ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md" : "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                  }`}
                >
                  ◀ <span className="hidden xs:inline sm:inline">Back to Fun Time</span><span className="xs:hidden sm:hidden">Back</span>
                </button>
              )}
            </div>
          )}

          {/* Controls: Dark Mode & Full screen etc. */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {sounds.some(s => s.isPlaying) && (
              <button
                onClick={handleStopAllSounds}
                className="px-2 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all cursor-pointer flex items-center justify-center gap-1 bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/20 active:scale-95 animate-pulse"
                title="Hepsini Sustur / Stop All Sounds"
              >
                <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Sustur</span>
              </button>
            )}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all cursor-pointer flex items-center justify-center gap-1 border ${
                darkMode
                  ? "bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20 text-amber-300"
                  : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <>
                  <span className="text-xs sm:text-sm">☀️</span>
                  <span className="hidden md:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 animate-pulse" />
                  <span className="hidden md:inline">Dark</span>
                </>
              )}
            </button>

            {/* Global Flag Language Selector Dropdown */}
            <div className="relative z-50 shrink-0" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`p-1 px-2 sm:p-1.5 sm:px-2.5 rounded-full border flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-semibold cursor-pointer select-none transition-all ${
                  darkMode 
                    ? "bg-slate-950/60 border-slate-800 hover:bg-slate-900 text-slate-200" 
                    : "bg-slate-100 border-slate-200 hover:bg-slate-200/80 text-slate-700"
                }`}
                title="Change Language / Dili Değiştir"
              >
                <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-500 shrink-0" />
                <span className="text-xs sm:text-sm leading-none shrink-0">
                  {lang === "tr" ? "🇹🇷" : lang === "en" ? "🇬🇧" : lang === "de" ? "🇩🇪" : lang === "es" ? "🇪🇸" : "🇷🇺"}
                </span>
                <span className="hidden sm:inline uppercase text-[9px] sm:text-[10px] tracking-wider text-slate-400 shrink-0 font-mono">
                  {lang}
                </span>
                <ChevronDown className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 transition-transform shrink-0 ${showLangMenu ? "rotate-180" : ""}`} />
              </button>

              {showLangMenu && (
                <div className={`absolute right-0 mt-2 z-[100] rounded-2xl border shadow-xl p-1.5 min-w-[130px] animate-in fade-in slide-in-from-top-2 duration-150 ${
                  darkMode 
                    ? "bg-slate-900/95 border-slate-800 text-white backdrop-blur-md" 
                    : "bg-white/95 border-slate-200 text-slate-800 shadow-slate-200/50 backdrop-blur-md"
                }`}>
                  {[
                    { code: "tr", flag: "🇹🇷", label: "Türkçe" },
                    { code: "en", flag: "🇬🇧", label: "English" },
                    { code: "de", flag: "🇩🇪", label: "Deutsch" },
                    { code: "es", flag: "🇪🇸", label: "Español" },
                    { code: "ru", flag: "🇷🇺", label: "Русский" },
                  ].map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLang(item.code as any);
                        setShowLangMenu(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer ${
                        lang === item.code
                          ? "bg-indigo-500 text-white"
                          : darkMode
                            ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                            : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      <span className="text-sm shrink-0">{item.flag}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- DYNAMIC VIEWS ROUTER --- */}

        {activeView === "home" && (
          <div className="flex-1 flex flex-col gap-8 pb-16 px-4 pt-4 min-h-[60vh] justify-center">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
              <button
                onClick={() => setActiveView("mixer")}
                className="flex-1 w-full rounded-[3rem] bg-gradient-to-b from-pink-400 to-rose-500 text-white shadow-[inset_0_8px_20px_rgba(255,255,255,0.6),_inset_0_-12px_20px_rgba(0,0,0,0.2),_0_20px_35px_rgba(251,113,133,0.4)] hover:-translate-y-2 hover:shadow-[inset_0_10px_25px_rgba(255,255,255,0.7),_inset_0_-14px_25px_rgba(0,0,0,0.25),_0_25px_45px_rgba(251,113,133,0.5)] active:translate-y-2 active:shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),_inset_0_-6px_10px_rgba(0,0,0,0.15),_0_10px_20px_rgba(251,113,133,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 gap-4 border border-pink-300/50 ring-4 ring-white/10 cursor-pointer"
              >
                <Music className="w-20 h-20 md:w-24 md:h-24 mb-2 drop-shadow-md" />
                <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight drop-shadow-md">
                  SleepyMixer
                </div>
              </button>
              <button
                onClick={handleEnterFunTime}
                className="flex-1 w-full rounded-[3rem] bg-gradient-to-b from-indigo-400 to-purple-500 text-white shadow-[inset_0_8px_20px_rgba(255,255,255,0.6),_inset_0_-12px_20px_rgba(0,0,0,0.2),_0_20px_35px_rgba(167,139,250,0.4)] hover:-translate-y-2 hover:shadow-[inset_0_10px_25px_rgba(255,255,255,0.7),_inset_0_-14px_25px_rgba(0,0,0,0.25),_0_25px_45px_rgba(167,139,250,0.5)] active:translate-y-2 active:shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),_inset_0_-6px_10px_rgba(0,0,0,0.15),_0_10px_20px_rgba(167,139,250,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 gap-4 border border-indigo-300/50 ring-4 ring-white/10 cursor-pointer"
              >
                <Sparkles className="w-20 h-20 md:w-24 md:h-24 mb-2 drop-shadow-md text-yellow-200" />
                <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight drop-shadow-md">
                  Fun Time
                </div>
              </button>
            </div>

            {/* Premium HUD bar at bottom */}
            <div className="w-full max-w-2xl mx-auto mt-2">
              {isPremium ? (
                <div className={`p-5 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl transition-all ${
                  darkMode ? "bg-slate-900/60 border-indigo-500/30 text-white" : "bg-white/95 border-indigo-100 text-slate-800"
                }`}>
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 shrink-0">
                      <Crown className="w-5.5 h-5.5 fill-white" />
                    </div>
                    <div>
                      <h4 className="font-sans font-extrabold text-base tracking-tight">{t("premium.activeTitle")}</h4>
                      <p className={`text-xs mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {t("premium.activeDesc")}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleSetPremium(false)}
                    className="text-xs font-semibold text-rose-500 hover:text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 px-3.5 py-2 rounded-xl transition-colors cursor-pointer border-none"
                  >
                    {t("premium.resetBtn")}
                  </button>
                </div>
              ) : (
                <div className={`p-6 md:p-8 rounded-[2.5rem] border text-center relative overflow-hidden shadow-2xl transition-all ${
                  darkMode 
                    ? "bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-amber-500/20 text-white shadow-amber-950/20" 
                    : "bg-gradient-to-r from-white via-indigo-50/20 to-white border-amber-200 text-slate-800 shadow-indigo-100/30"
                }`}>
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-3xl -z-10" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

                  <div className="flex flex-col items-center max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 mb-3 animate-bounce">
                      <Crown className="w-6 h-6 fill-white" />
                    </div>

                    <h3 className="font-sans font-black text-xl tracking-tight leading-tight">
                      {t("premium.inactiveTitle")}
                    </h3>
                    <p className={`text-xs mt-1.5 font-medium leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {t("premium.inactiveDesc")}
                    </p>

                    <div className="mt-4 mb-1.5 flex items-baseline gap-1 bg-amber-500/10 text-amber-500 px-3.5 py-1 rounded-xl border border-amber-500/25 font-mono">
                      <span className="text-[10px] font-bold font-sans">{t("premium.priceBadgeMonthly")}</span>
                      <span className="text-xl font-black">$10</span>
                      <span className="text-[10px] font-bold font-sans">{t("premium.priceBadgePerMonth")}</span>
                    </div>

                    <button
                      onClick={() => setShowCheckoutModal(true)}
                      className="w-full mt-3 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-xs font-bold tracking-wide shadow-lg shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                    >
                      <Crown className="w-4 h-4 fill-white" />
                      {t("premium.buyBtn")}
                    </button>

                    {!showAdminForm ? (
                      <div className="w-full">
                        <button
                          onClick={() => setShowAdminForm(true)}
                          className={`w-full mt-3 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                            darkMode 
                              ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80" 
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {lang === "tr" ? "Admin Girişi" : "Admin Login"}
                        </button>
                      </div>
                    ) : (
                      <div className="w-full mt-4 pt-4 border-t border-dashed border-slate-500/20 text-left">
                        <div className="flex gap-2">
                          <input
                            type="password"
                            placeholder={lang === "tr" ? "Yönetici şifresi..." : "Admin password..."}
                            className={`flex-1 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                              darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                            }`}
                            value={adminPassInput}
                            onChange={(e) => setAdminPassInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleAdminLogin();
                            }}
                            autoFocus
                          />
                          <button
                            onClick={handleAdminLogin}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md border-none flex items-center gap-1 shrink-0"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            {lang === "tr" ? "Giriş" : "Login"}
                          </button>
                        </div>
                        {adminError && (
                          <span className="text-[10px] text-rose-500 font-medium mt-1.5 block text-center">
                            {adminError}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeView === "fun_time" && (
          <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 pb-16 px-4 pt-4 min-h-[60vh] animate-fade-in">
            <button
              onClick={() => setActiveView("youtube")}
              className="flex-1 w-full rounded-[3rem] bg-gradient-to-b from-red-400 to-orange-500 text-white shadow-[inset_0_8px_20px_rgba(255,255,255,0.6),_inset_0_-12px_20px_rgba(0,0,0,0.2),_0_20px_35px_rgba(248,113,113,0.4)] hover:-translate-y-2 hover:shadow-[inset_0_10px_25px_rgba(255,255,255,0.7),_inset_0_-14px_25px_rgba(0,0,0,0.25),_0_25px_45px_rgba(248,113,113,0.5)] active:translate-y-2 active:shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),_inset_0_-6px_10px_rgba(0,0,0,0.15),_0_10px_20px_rgba(248,113,113,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 gap-4 border border-red-300/50 ring-4 ring-white/10"
            >
              <div className="w-32 h-32 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-sans font-black tracking-tight drop-shadow-md text-center leading-tight whitespace-pre-line">
                {t("ui.youtubeScreens")}
              </div>
            </button>
            <button
              onClick={() => setActiveView("tales")}
              className="flex-1 w-full rounded-[3rem] bg-gradient-to-b from-amber-300 to-orange-400 text-white shadow-[inset_0_8px_20px_rgba(255,255,255,0.6),_inset_0_-12px_20px_rgba(0,0,0,0.2),_0_20px_35px_rgba(251,191,36,0.4)] hover:-translate-y-2 hover:shadow-[inset_0_10px_25px_rgba(255,255,255,0.7),_inset_0_-14px_25px_rgba(0,0,0,0.25),_0_25px_45px_rgba(251,191,36,0.5)] active:translate-y-2 active:shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),_inset_0_-6px_10px_rgba(0,0,0,0.15),_0_10px_20px_rgba(251,191,36,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 gap-4 border border-amber-200/50 ring-4 ring-white/10"
            >
              <div className="w-32 h-32 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-16 h-16 drop-shadow-md text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-sans font-black tracking-tight drop-shadow-md text-center leading-tight whitespace-pre-line">
                {t("ui.storyTales")}
              </div>
            </button>
          </div>
        )}

        {activeView === "mixer" && (
          <div className="space-y-8 animate-fade-in flex-1">
            
            {/* SOUND CATEGORIES FILTERING HUD */}
            <div className={`backdrop-blur-sm p-3 rounded-2xl border shadow-sm flex flex-wrap gap-2 justify-center select-none transition-colors ${
              darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white/40 border-white/50"
            }`}>
              {["all", "synth", "musicbox", "nature", "womb", "custom"].map((cat) => {
                const isCatLocked = cat === "custom" && !isPremium;
                return (
                  <button
                    key={cat}
                    id={`filter-${cat}-btn`}
                    onClick={() => {
                      if (isCatLocked) {
                        setShowPremiumModal(true);
                        return;
                      }
                      setActiveCategory(cat as any);
                    }}
                    className={`text-xs font-bold font-sans py-2 px-4 rounded-xl shadow-sm border transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === cat
                        ? "bg-slate-800 text-white border-slate-950 scale-102 font-bold"
                        : (darkMode 
                           ? "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800" 
                           : "bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border-slate-200")
                    }`}
                  >
                    {isCatLocked && <Lock className="w-3 h-3 text-amber-500 fill-amber-500/20" />}
                    <span>{t(`category.${cat}`)}</span>
                  </button>
                );
              })}
            </div>

            {/* SOUND GRID CHANNEL TRACK CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredSounds.map((sound) => {
                // Dynamic translation mapping
                const hasTranslation = t(`sound.${sound.id}`) !== `sound.${sound.id}`;
                const translatedSound = {
                  ...sound,
                  name: hasTranslation ? t(`sound.${sound.id}`) : sound.name
                };
                return (
                  <AudioCard
                    key={sound.id}
                    sound={translatedSound}
                    onTogglePlay={handleTogglePlay}
                    onVolumeChange={handleVolumeChange}
                    onCustomFileChange={handleCustomFileChange}
                    onDeleteCustomCard={handleDeleteCustomCard}
                    darkMode={darkMode}
                    isPremium={isPremium}
                  />
                );
              })}
              
              {/* Special Dotted "Add Custom Sound Card" */}
              {(activeCategory === "all" || activeCategory === "custom") && (
                <button
                  onClick={() => {
                    if (!isPremium) {
                      setShowPremiumModal(true);
                      return;
                    }
                    setShowAddCardModal(true);
                  }}
                  className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-3xl p-5 min-h-[220px] transition-all cursor-pointer overflow-hidden ${
                    darkMode
                      ? "border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200"
                      : "border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 text-slate-505 hover:text-slate-800"
                  }`}
                >
                  {!isPremium && (
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-full shadow-md z-10 font-sans tracking-wide">
                      <Crown className="w-2.5 h-2.5 text-yellow-100 fill-yellow-100 animate-pulse" />
                      <span>PREMIUM</span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center mb-4 text-xl font-bold">
                    {!isPremium ? <Lock className="w-4 h-4 text-amber-500 fill-amber-500/10" /> : "＋"}
                  </div>
                  <span className="text-xs font-bold font-sans">{t("ui.addCustomSound")}</span>
                  <span className="text-[10px] text-slate-400 mt-1 text-center px-2">{t("ui.addCustomDesc")}</span>
                </button>
              )}
            </div>

            {/* Auxiliary Controller Widget Panel: Mixes + Timeouts */}
            <div className="pt-6 border-t border-slate-200/20">
              <MixerControls
                sounds={sounds}
                savedMixes={savedMixes}
                setSavedMixes={setSavedMixes}
                onApplyMix={handleApplyMix}
                onTimerChange={setTimerSecondsLeft}
                timerSecondsLeft={timerSecondsLeft}
                onResetAllSounds={handleStopAllSounds}
                darkMode={darkMode}
                t={t}
              />
            </div>


          </div>
        )}

        {activeView === "youtube" && (
          <div className="space-y-6 animate-fade-in flex-1">
            <YouTubePencereleri lang={lang} isPremium={isPremium} isAdmin={isAdmin} />
          </div>
        )}

        {activeView === "tales" && (
          <div className="space-y-6 animate-fade-in flex-1">
            <MasalOkuyucu 
              darkMode={darkMode} 
              isPremium={isPremium} 
              onRequestPremium={() => setShowPremiumModal(true)} 
              lang={lang}
            />
          </div>
        )}

      </div>

      {/* Decorative footer credentials */}
      <footer className="mt-8 text-center select-none max-w-lg mx-auto text-[11px] text-slate-400/85 leading-normal pb-6 relative z-10">
        <p>🍼 SleepyBaby Mixer and Interactive Tales © 2026</p>
        <p className="mt-1 font-mono">Developed with love by your AI Coding and Design Partner</p>
      </footer>

      {/* Add Custom Sound Card Modal */}
      {showAddCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <div 
            onClick={() => setShowAddCardModal(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <div className={`relative w-full max-w-md rounded-3xl p-6 border shadow-2xl z-10 transform transition-all animate-scale-up ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            <button
              onClick={() => setShowAddCardModal(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold font-sans flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-indigo-500" />
              {t("ui.addCardTitle")}
            </h3>

            <form onSubmit={handleAddCustomCard} className="space-y-4">
              {/* 1. Name */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {t("ui.addCardName")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("ui.addCardNamePlaceholder")}
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                />
              </div>

              {/* 2. Emoji & Category (Flex group) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    {t("ui.addCardEmoji")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={2}
                    placeholder="💨"
                    value={newCardEmoji}
                    onChange={(e) => setNewCardEmoji(e.target.value)}
                    className={`w-full text-center rounded-xl px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                      darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    {t("ui.addCardCategory")}
                  </label>
                  <select
                    value={newCardCategory}
                    onChange={(e) => setNewCardCategory(e.target.value as any)}
                    className={`w-full rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                      darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    <option value="custom">{t("category.custom")}</option>
                    <option value="nature">{t("category.nature")}</option>
                    <option value="household">{t("category.household")}</option>
                    <option value="womb">{t("category.womb")}</option>
                    <option value="synth">{t("category.synth")}</option>
                    <option value="musicbox">{t("category.musicbox")}</option>
                  </select>
                </div>
              </div>

              {/* 3. Gradient Color Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {t("ui.addCardColorTheme")}
                </label>
                <div className="flex gap-2">
                  {colorPresets.map((preset, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setNewCardColorPreset(index)}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${preset.colorClass} border-2 transition-all relative ${
                        newCardColorPreset === index ? "border-indigo-500 scale-110 shadow-lg" : "border-transparent"
                      }`}
                    >
                      {newCardColorPreset === index && (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Audio Input Selection */}
              <div className="space-y-3 pt-2 border-t border-slate-200/20">
                {/* File input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    {t("ui.sourceDeviceUpload")}
                  </label>
                  <label className={`flex items-center justify-center gap-2 border border-dashed rounded-xl p-3 cursor-pointer text-xs transition-colors ${
                    darkMode ? "border-slate-800 hover:bg-slate-950/50 text-slate-300" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                  }`}>
                    <Upload className="w-4 h-4 text-indigo-500" />
                    <span className="font-semibold text-xs">
                      {newCardFileName ? `${t("ui.sourceLocal")}: ${newCardFileName}` : t("ui.sourceDeviceSelectBtn")}
                    </span>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const fileUrl = URL.createObjectURL(file);
                          setNewCardFileUrl(fileUrl);
                          setNewCardFileName(file.name);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="relative flex py-0.5 items-center">
                  <div className="flex-grow border-t border-slate-200/20"></div>
                  <span className="flex-shrink mx-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    {lang === "tr" ? "VEYA" : lang === "de" ? "ODER" : lang === "es" ? "O" : lang === "ru" ? "ИЛИ" : "OR"}
                  </span>
                  <div className="flex-grow border-t border-slate-200/20"></div>
                </div>

                {/* URL input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    {t("ui.sourceUrlPaste")}
                  </label>
                  <input
                    type="url"
                    placeholder="https://site.com/ninnisesi.mp3"
                    value={newCardFileUrl && !newCardFileUrl.startsWith("blob:") ? newCardFileUrl : ""}
                    onChange={(e) => {
                      const val = e.target.value.trim();
                      if (val) {
                        setNewCardFileUrl(val);
                        setNewCardFileName("Custom Link");
                      } else {
                        setNewCardFileUrl(undefined);
                        setNewCardFileName(undefined);
                      }
                    }}
                    className={`w-full rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                      darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-98 mt-4"
              >
                {t("ui.addCardSaveBtn")}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Save Mix Modal */}
      {showSaveMixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowSaveMixModal(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className={`relative w-full max-w-md rounded-3xl p-6 border shadow-2xl z-10 transform transition-all animate-scale-up ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            <button
              onClick={() => setShowSaveMixModal(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold font-sans flex items-center gap-2 mb-2">
              <Music className="w-5 h-5 text-emerald-500" />
              {lang === "tr" ? "Yeni Bebek Miksini Kaydet" : "Save New Baby Mix"}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {lang === "tr" 
                ? "Şu an çalmakta olan tüm sesleri ve ses seviyelerini kaydederek daha sonra tek tıkla geri yükleyebilirsiniz."
                : "You can save all currently playing sounds and volume levels to restore them later with a single click."}
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSaveCurrentMix(newMixName);
              setShowSaveMixModal(false);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {lang === "tr" ? "Miks İsmi" : "Mix Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === "tr" ? "Örn: Gece Uykusu, Tatlı Rüyalar..." : "e.g., Bedtime, Sweet Dreams..."}
                  value={newMixName}
                  onChange={(e) => setNewMixName(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-98 mt-4"
              >
                {lang === "tr" ? "Mikseri Kaydet" : "Save Mix"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Premium Ol (Unlock) Alert Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowPremiumModal(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />
          <div className={`relative w-full max-w-sm rounded-[2.5rem] p-6 border shadow-2xl z-10 transform transition-all animate-scale-up text-center overflow-hidden ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <button
              onClick={() => setShowPremiumModal(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/25 mb-4 animate-bounce">
                <Crown className="w-7 h-7 fill-white" />
              </div>

              <h3 className="text-xl font-sans font-black tracking-tight leading-tight">
                Premium Özellik!
              </h3>
              
              <p className={`text-xs mt-3.5 leading-relaxed px-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Sentezleyici sesler, özel ses kategorisi, ses ekleme özelliği ve gelişmiş ayarlara yalnızca Premium üyelerimiz ulaşabilir.
              </p>

              <div className="mt-4 mb-2 flex items-baseline gap-1 bg-amber-500/10 text-amber-500 px-3.5 py-1 rounded-xl border border-amber-500/20 font-mono text-xs">
                <span className="font-sans font-semibold">Aylık sadece</span>
                <span className="text-lg font-black">$10</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2 w-full">
              <button
                onClick={() => {
                  setShowPremiumModal(false);
                  setShowCheckoutModal(true);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer border-none"
              >
                <Crown className="w-4 h-4 fill-white" />
                Hemen Premium Ol ($10)
              </button>
              <button
                onClick={() => setShowPremiumModal(false)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors border-none cursor-pointer ${
                  darkMode ? "text-slate-400 hover:text-slate-200 hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                Daha Sonra
              </button>
            </div>

          </div>
        </div>
      )}

      {/* SECURE CHECKOUT PAYMENT CARD MODAL */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            onClick={() => {
              if (paymentState !== "processing") {
                setShowCheckoutModal(false);
                setPaymentState("idle");
              }
            }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          
          <div className={`relative w-full max-w-md rounded-[2.5rem] p-6 border shadow-2xl z-10 transform transition-all animate-scale-up overflow-hidden ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            <button
              onClick={() => {
                if (paymentState !== "processing") {
                  setShowCheckoutModal(false);
                  setPaymentState("idle");
                }
              }}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
              disabled={paymentState === "processing"}
            >
              <X className="w-5 h-5" />
            </button>

            {paymentState === "idle" && (
              <div>
                {/* Header info */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                    <Crown className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-sans font-black tracking-tight leading-none">SleepyBaby Premium</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">{t("checkout.subtitle")}</p>
                  </div>
                </div>

                {/* VISUAL VIRTUAL CREDIT CARD */}
                <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white p-5 shadow-lg relative overflow-hidden select-none mb-6">
                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-40 transform -skew-x-12 translate-x-12" />
                  
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] tracking-widest font-sans font-bold text-indigo-200">{t("checkout.cardType")}</span>
                      <span className="text-sm font-sans font-extrabold tracking-tight mt-0.5">SleepyBaby</span>
                    </div>
                    <Crown className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
                  </div>

                  {/* Card Chip icon simulated */}
                  <div className="w-8 h-6 rounded bg-yellow-400/80 mt-4 relative">
                    <div className="absolute inset-1 border border-amber-600/30 rounded-sm" />
                  </div>

                  {/* Card Number */}
                  <div className="mt-3.5 text-base font-mono font-bold tracking-widest text-center">
                    {checkoutCardNumber || "•••• •••• •••• ••••"}
                  </div>

                  <div className="flex justify-between items-end mt-3 text-left">
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-indigo-200 block">{t("checkout.cardHolder")}</span>
                      <span className="text-xs font-mono font-bold tracking-wide truncate max-w-[180px] block uppercase">
                        {checkoutCardHolder || t("checkout.cardHolderPlaceholder")}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] uppercase tracking-wider text-indigo-200 block">{t("checkout.cardExpiry")}</span>
                      <span className="text-xs font-mono font-bold tracking-wide block">
                        {checkoutExpiry || "MM/YY"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* FORM INPUTS */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPaymentState("processing");
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left mb-1">
                      {t("checkout.inputHolderLabel")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("checkout.inputHolderPlaceholder")}
                      value={checkoutCardHolder}
                      onChange={(e) => setCheckoutCardHolder(e.target.value)}
                      className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans ${
                        darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left mb-1">
                      {t("checkout.inputNumberLabel")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="4111 1111 1111 1111"
                      maxLength={19}
                      value={checkoutCardNumber}
                      onChange={(e) => {
                        // Card number format e.g. 4111 1111 1111 1111
                        const val = e.target.value.replace(/\D/g, "");
                        const formatted = val.match(/.{1,4}/g)?.join(" ") || val;
                        setCheckoutCardNumber(formatted);
                      }}
                      className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono ${
                        darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left mb-1">
                        {t("checkout.inputExpiryLabel")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        value={checkoutExpiry}
                        onChange={(e) => {
                          // Expiry format e.g. 12/28
                          const val = e.target.value.replace(/\D/g, "");
                          if (val.length >= 2) {
                            setCheckoutExpiry(val.slice(0, 2) + "/" + val.slice(2, 4));
                          } else {
                            setCheckoutExpiry(val);
                          }
                        }}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono ${
                          darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left mb-1">
                        {t("checkout.inputCvvLabel")}
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="•••"
                        maxLength={3}
                        value={checkoutCvv}
                        onChange={(e) => setCheckoutCvv(e.target.value.replace(/\D/g, ""))}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono ${
                          darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-[10px] text-slate-400 justify-center">
                    <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{t("checkout.securityFooter")}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-xs font-bold tracking-wide shadow-lg shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                  >
                    <CreditCard className="w-4 h-4" />
                    {t("checkout.submitBtn")}
                  </button>
                </form>
              </div>
            )}

            {/* PROCESSING STATE LOADER */}
            {paymentState === "processing" && (
              <div className="py-12 flex flex-col items-center text-center space-y-6">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
                  <Lock className="w-8 h-8 text-amber-500 absolute animate-pulse" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-base font-sans font-bold tracking-tight">{t("checkout.processingTitle")}</h3>
                  <p className="text-xs text-amber-500 font-semibold animate-pulse font-sans">
                    {processingMessages[processingStep]}
                  </p>
                  <p className="text-[10px] text-slate-400 leading-normal max-w-xs mx-auto">
                    {t("checkout.processingDesc")}
                  </p>
                </div>
              </div>
            )}

            {/* SUCCESS CONGRATS SCREEN */}
            {paymentState === "success" && (
              <div className="py-8 flex flex-col items-center text-center space-y-5 animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 animate-bounce">
                  <ShieldCheck className="w-9 h-9" />
                </div>

                <div className="space-y-1 px-4">
                  <h3 className="text-xl font-sans font-black tracking-tight text-emerald-500">{t("checkout.successTitle")}</h3>
                  <p className="text-sm font-sans font-bold text-slate-400">{t("checkout.successSubtitle")}</p>
                  <p className={`text-xs leading-relaxed pt-2.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {t("checkout.successDesc")}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    setPaymentState("idle");
                    // Clear inputs
                    setCheckoutCardNumber("");
                    setCheckoutCardHolder("John Doe");
                    setCheckoutExpiry("");
                    setCheckoutCvv("");
                  }}
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold tracking-wide shadow-lg shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  {t("checkout.successBtn")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Google AdMob / Google Ads Interstitial Ad Simulator */}
      {showAdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
          
          <div className={`relative w-full max-w-md rounded-[2.5rem] border shadow-2xl z-10 transform transition-all animate-scale-up overflow-hidden ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            {/* Top Bar (AdMob Header) */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              darkMode ? "border-slate-800 bg-slate-950/40" : "border-slate-100 bg-slate-50"
            }`}>
              <div className="flex items-center gap-2">
                {/* Simulated Google AdMob Color Icon */}
                <div className="flex gap-0.5 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-sans font-black tracking-widest text-slate-400 block uppercase">
                    GOOGLE ADMOB
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium">
                    {lang === "tr" ? "Sponsorlu Geçiş Reklamı" : "Sponsored Interstitial Ad"}
                  </span>
                </div>
              </div>

              {/* Countdown / Close Button */}
              {adCountdown > 0 ? (
                <div className="flex items-center gap-2 bg-amber-500/10 text-amber-500 px-3.5 py-1.5 rounded-full border border-amber-500/20 font-sans text-xs font-bold animate-pulse">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" />
                  <span>
                    {lang === "tr" ? `Kapat (${adCountdown}s)` : `Close (${adCountdown}s)`}
                  </span>
                </div>
              ) : (
                <button
                  onClick={handleCloseAd}
                  className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-sans text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer border-none"
                >
                  <span>{lang === "tr" ? "Reklamı Kapat ✕" : "Close Ad ✕"}</span>
                </button>
              )}
            </div>

            {/* Ad Content Body */}
            <div className="p-6 text-center space-y-6">
              {/* Google AdMob Logo Area */}
              <div className="relative group select-none flex flex-col items-center justify-center space-y-4 w-full py-4">
                {/* Modern 3D/Flat Google AdMob SVG Logo */}
                <div className="relative w-28 h-28 flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-[2rem] p-5 shadow-inner border border-slate-100 dark:border-slate-800/80 transition-transform duration-500 hover:scale-105 mx-auto">
                  {/* Glowing halo behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 rounded-[2rem] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
                  
                  {/* Beautiful & accurate Google AdMob SVG Logo */}
                  <svg viewBox="0 0 240 240" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background grid representation */}
                    <path d="M40 80h160M40 120h160M40 160h160" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-200 dark:text-slate-800/40" />
                    <path d="M80 40v160M120 40v160M160 40v160" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-200 dark:text-slate-800/40" />
                    
                    {/* The iconic Google AdMob "A/M" Red/Blue/Green curved shape */}
                    <g transform="translate(10, 10)">
                      {/* Left blue curved wing */}
                      <path d="M45 175 C45 110, 85 70, 130 70" stroke="#4285F4" strokeWidth="24" strokeLinecap="round" />
                      {/* Right green curved wing overlapping */}
                      <path d="M175 175 C175 110, 135 70, 90 70" stroke="#34A853" strokeWidth="24" strokeLinecap="round" opacity="0.9" />
                      {/* Top red bar */}
                      <path d="M55 70 L165 70" stroke="#EA4335" strokeWidth="24" strokeLinecap="round" />
                      {/* Golden center circle */}
                      <circle cx="110" cy="120" r="22" fill="#FBBC05" className="animate-pulse" />
                    </g>
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-sans font-black tracking-tight flex items-center justify-center gap-1.5">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">AdMob</span>
                  </h3>
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {lang === "tr" ? "GEÇİŞ REKLAMI" : "INTERSTITIAL AD"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    setShowAdModal(false);
                    setShowPremiumModal(true);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black py-3.5 px-4 rounded-xl text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer border-none"
                >
                  <Crown className="w-4 h-4 fill-white" />
                  {lang === "tr" ? "Premium ile Reklamları Kaldır ($10)" : "Remove Ads with Premium ($10)"}
                </button>

                {adCountdown > 0 ? (
                  <button
                    disabled
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border-none cursor-not-allowed opacity-50 ${
                      darkMode ? "text-slate-500 bg-slate-800" : "text-slate-400 bg-slate-100"
                    }`}
                  >
                    {lang === "tr" ? `Reklam ${adCountdown} saniye sonra kapatılabilir` : `Ad can be closed in ${adCountdown} seconds`}
                  </button>
                ) : (
                  <button
                    onClick={handleCloseAd}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors border-none cursor-pointer ${
                      darkMode ? "text-slate-400 hover:text-slate-200 hover:bg-slate-800" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {lang === "tr" ? "Reklama Devam Et ve Kapat" : "Continue and Close Ad"}
                  </button>
                )}
              </div>
            </div>

            {/* Ad Footer */}
            <div className={`px-6 py-3 text-[10px] text-slate-400 font-mono flex justify-between ${
              darkMode ? "border-t border-slate-800/60 bg-slate-950/20" : "border-t border-slate-100 bg-slate-50/50"
            }`}>
              <span>Ads by Google</span>
              <span>ID: SB-INTERSTITIAL-10S</span>
            </div>
          </div>
        </div>
      )}

      {/* Mix Error Warning Modal */}
      {mixErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setMixErrorModal(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className={`relative w-full max-w-sm rounded-3xl p-6 border shadow-2xl z-10 transform transition-all animate-scale-up ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-100 text-slate-800"
          }`}>
            <button
              onClick={() => setMixErrorModal(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center py-4 space-y-3">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-base font-bold font-sans">
                {lang === "tr" ? "Aktif Ses Bulunamadı!" : "No Active Sounds!"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed px-2">
                {lang === "tr" 
                  ? "Miks kaydetmek için lütfen önce arka planda çalacak en az bir ses kartını aktif hale getirin ve sesini ayarlayın."
                  : "To save a mix, please first activate and adjust the volume of at least one sound card."}
              </p>
            </div>

            <button
              onClick={() => setMixErrorModal(false)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors active:scale-95 border-none cursor-pointer"
            >
              {lang === "tr" ? "Anladım" : "I Understand"}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
