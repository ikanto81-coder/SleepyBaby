import React, { useState } from "react";
import { SoundState } from "../lib/audioEngine";
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  AlertCircle, 
  Settings, 
  Upload, 
  X, 
  FileAudio, 
  Check, 
  Trash2,
  Crown,
  Lock
} from "lucide-react";

interface AudioCardProps {
  sound: SoundState;
  onTogglePlay: (id: string) => void;
  onVolumeChange: (id: string, newVolume: number) => void;
  onCustomFileChange?: (id: string, fileUrl: string | undefined, fileName?: string) => void;
  onDeleteCustomCard?: (id: string) => void;
  darkMode?: boolean;
  isPremium?: boolean;
}

export const AudioCard: React.FC<AudioCardProps> = ({
  sound,
  onTogglePlay,
  onVolumeChange,
  onCustomFileChange,
  onDeleteCustomCard,
  darkMode = false,
  isPremium = false,
}) => {
  const {
    id,
    name,
    emoji,
    isPlaying,
    volume,
    colorClass,
    secondaryColorClass,
    shadowColor,
  } = sound;

  const [showSettings, setShowSettings] = useState(false);
  const [tempUrl, setTempUrl] = useState(sound.customFileUrl || "");

  const handleSliderClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering toggle play when sliding
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onCustomFileChange) {
      const fileUrl = URL.createObjectURL(file);
      onCustomFileChange(id, fileUrl, file.name);
      setShowSettings(false);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCustomFileChange) {
      if (tempUrl.trim()) {
        onCustomFileChange(id, tempUrl.trim(), "Custom Link");
      } else {
        onCustomFileChange(id, undefined, undefined);
      }
      setShowSettings(false);
    }
  };

  const handleResetSound = () => {
    setTempUrl("");
    if (onCustomFileChange) {
      onCustomFileChange(id, undefined, undefined);
    }
    setShowSettings(false);
  };

  // Build the inline styling for realistic 3D jelly shadows
  // We use shadowColor to generate a matched ambient 3D button rim
  const jellyStyle = isPlaying
    ? {
        boxShadow: `0 4px 0 ${shadowColor}, 0 4px 10px rgba(0,0,0,0.15), inset 0 -4px 12px rgba(0,0,0,0.2), inset 0 4px 12px rgba(255,255,255,0.4)`,
        transform: "translateY(4px)",
      }
    : {
        boxShadow: `0 9px 0 ${shadowColor}, 0 10px 15px rgba(0,0,0,0.12), inset 0 -4px 12px rgba(0,0,0,0.25), inset 0 4px 12px rgba(255,255,255,0.4)`,
        transform: "translateY(0px)",
      };

  const isLocked = (sound.category === "synth" || sound.category === "custom") && !isPremium;
  const isCustomSource = !!(sound.customFileUrl || sound.localFileName);

  return (
    <div
      id={`audio-card-${id}`}
      className={`relative flex flex-col items-center backdrop-blur-md rounded-3xl p-5 border transition-all ${
        isLocked
          ? (darkMode ? "bg-slate-950/40 border-slate-900/60" : "bg-slate-100/40 border-slate-200/50")
          : (darkMode 
            ? "bg-slate-900/80 border-slate-800/80 hover:bg-slate-900/95" 
            : "bg-white/70 border-slate-100 hover:bg-white/90")
      }`}
      style={{
        boxShadow: darkMode 
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Premium Lock Badge */}
      {isLocked && (
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-full shadow-md z-10 font-sans tracking-wide">
          <Crown className="w-2.5 h-2.5 text-yellow-100 fill-yellow-100 animate-pulse" />
          <span>PREMIUM</span>
        </div>
      )}

      {/* Absolute top controls */}
      <div className="absolute top-3.5 right-3.5 flex items-center gap-1 z-10">
        {onDeleteCustomCard && id.startsWith("custom-") && (
          <button
            onClick={() => onDeleteCustomCard(id)}
            className={`p-1.5 rounded-full transition-colors ${
              darkMode ? "hover:bg-slate-800 text-rose-400 hover:text-rose-300" : "hover:bg-slate-100 text-rose-500 hover:text-rose-600"
            }`}
            title="Sesi Sil / Delete Card"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          onClick={() => {
            if (isLocked) {
              onTogglePlay(id);
            } else {
              setShowSettings(!showSettings);
            }
          }}
          className={`p-1.5 rounded-full transition-colors ${
            darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
          }`}
          title="Ses Dosyası Yükle / Paste URL"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3D Jelly Button Core */}
      <button
        id={`jelly-play-btn-${id}`}
        onClick={() => onTogglePlay(id)}
        style={jellyStyle}
        className={`jelly-btn relative w-24 h-24 rounded-full flex flex-col items-center justify-center bg-gradient-to-br ${colorClass} cursor-pointer select-none active:outline-none focus:outline-none`}
      >
        {/* Jelly highlights for glassy plastic illusion */}
        <span className="jelly-highlight" />
        <span className="absolute top-2 right-4 w-4 h-2 bg-white/30 rounded-full blur-[1px]" />
        
        {/* Central visual indicator */}
        <span className="text-3xl filter drop-shadow-md mb-1 select-none flex items-center justify-center">
          {emoji === "vacuum" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white filter drop-shadow-sm"
            >
              {/* Canister Body */}
              <rect x="3" y="11" width="8" height="8" rx="1.5" />
              {/* Wheels */}
              <circle cx="5" cy="19" r="1" />
              <circle cx="9" cy="19" r="1" />
              {/* Hose */}
              <path d="M7 11c0-4 4-6 7-6s5 2 5 5v3" />
              {/* Wand */}
              <path d="M19 13v7" />
              {/* Nozzle */}
              <path d="M16 21h6l-1-1h-4z" />
            </svg>
          ) : (
            emoji
          )}
        </span>
        
        {/* Play State icon */}
        <div className="absolute bottom-2 bg-white/95 rounded-full p-1 shadow-sm flex items-center justify-center transition-transform hover:scale-110">
          {isLocked ? (
            <Lock className="w-3.5 h-3.5 text-amber-600" />
          ) : isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-slate-800 fill-slate-800" />
          ) : (
            <Play className="w-3.5 h-3.5 text-slate-600 fill-slate-600 translate-x-[0.5px]" />
          )}
        </div>
      </button>

      {/* Track info & volume controls */}
      <div className="w-full text-center mt-6 select-none">
        <h4 className={`font-sans font-semibold text-sm tracking-tight mb-2 truncate px-4 ${darkMode ? "text-slate-100" : "text-slate-800"}`}>
          {name}
        </h4>
        
        {/* Slider bar with cute matching style */}
        <div className="flex items-center gap-2 px-1 mt-3">
          <button
            id={`audio-mute-btn-${id}`}
            onClick={(e) => {
              e.stopPropagation();
              if (isLocked) {
                onTogglePlay(id);
              } else {
                onVolumeChange(id, volume > 0 ? 0 : 0.5);
              }
            }}
            className={`transition-colors ${darkMode ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`}
          >
            {volume === 0 ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <input
            id={`audio-volume-range-${id}`}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              if (isLocked) {
                // Intercept
                return;
              }
              onVolumeChange(sound.id, parseFloat(e.target.value));
            }}
            onClick={(e) => {
              if (isLocked) {
                e.stopPropagation();
                onTogglePlay(id);
                return;
              }
              handleSliderClick(e);
            }}
            className={`w-full h-2.5 rounded-lg cursor-pointer accent-sky-500 appearance-none focus:outline-none transition-all ${
              darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200/80 hover:bg-slate-300"
            }`}
            style={{
              background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${volume * 100}%, ${darkMode ? "#2d3748" : "#e2e8f0"} ${volume * 100}%, ${darkMode ? "#2d3748" : "#e2e8f0"} 100%)`,
            }}
          />
          
          <span className={`text-[10px] font-mono w-6 text-right ${darkMode ? "text-slate-400" : "text-slate-400"}`}>
            %{Math.round(volume * 100)}
          </span>
        </div>
      </div>
      
      {/* File status info */}
      {sound.customFileUrl ? (
        <div className="mt-2.5 flex items-center gap-1 text-[9px] bg-sky-500/10 text-sky-400 py-0.5 px-2 rounded-full border border-sky-500/25">
          <AlertCircle className="w-2.5 h-2.5" />
          <span className="truncate max-w-[80px]">{sound.localFileName || "Yüklü Ses"}</span>
        </div>
      ) : isCustomSource ? (
        <div className="mt-2.5 flex items-center gap-1 text-[9px] bg-amber-500/10 text-amber-500 py-0.5 px-2 rounded-full border border-amber-500/25">
          <AlertCircle className="w-2.5 h-2.5" />
          <span>Uzaktan Bağlı</span>
        </div>
      ) : (
        <div className="mt-2.5 flex items-center gap-1 text-[9px] bg-emerald-500/10 text-emerald-500 py-0.5 px-2 rounded-full border border-emerald-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Sentezleyici</span>
        </div>
      )}

      {/* Settings Overlay Drawer */}
      {showSettings && (
        <div className={`absolute inset-0 z-20 flex flex-col p-4 rounded-3xl backdrop-blur-lg ${
          darkMode ? "bg-slate-950/95 text-slate-100" : "bg-white/95 text-slate-800"
        } animate-fade-in`}>
          <div className="flex items-center justify-between border-b pb-2 mb-3">
            <span className="text-xs font-bold flex items-center gap-1.5">
              <FileAudio className="w-4 h-4 text-indigo-500 animate-pulse" />
              Ses Kaynağı Seç
            </span>
            <button
              onClick={() => setShowSettings(false)}
              className={`p-1 rounded-full transition-colors ${
                darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              }`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-3 text-left">
            {/* 1. LOCAL FILE UPLOAD */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Cihazdan MP3/WAV Yükle
              </label>
              <label className={`flex items-center justify-center gap-2 border border-dashed rounded-xl p-2 cursor-pointer text-xs transition-colors ${
                darkMode ? "border-slate-800 hover:bg-slate-900 text-slate-300" : "border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}>
                <Upload className="w-4 h-4 text-sky-500" />
                <span className="font-semibold text-[10px]">Dosya Seçin</span>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* OR separator */}
            <div className="relative flex py-0.5 items-center">
              <div className="flex-grow border-t border-slate-200/20"></div>
              <span className="flex-shrink mx-2 text-[8px] text-slate-400 font-bold uppercase tracking-widest">VEYA</span>
              <div className="flex-grow border-t border-slate-200/20"></div>
            </div>

            {/* 2. DIRECT AUDIO URL INPUT */}
            <form onSubmit={handleUrlSubmit} className="space-y-1.5">
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Ses URL'si Yapıştır
              </label>
              <div className="flex gap-1.5">
                <input
                  type="url"
                  placeholder="https://site.com/ses.mp3"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className={`flex-1 text-[11px] rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-500 ${
                    darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-2.5 rounded-lg text-xs font-bold transition-all"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Reset option */}
          {(sound.customFileUrl || sound.localFileName) && (
            <div className="mt-2 pt-2 border-t border-slate-200/20">
              <button
                onClick={handleResetSound}
                className="w-full text-center text-[10px] font-bold text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 py-1 rounded-lg transition-colors"
              >
                Sıfırla (Doğal Sese Dön)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

