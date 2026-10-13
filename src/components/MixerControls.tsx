import React, { useState, useEffect } from "react";
import { SoundState } from "../lib/audioEngine";
import { Clock, Save, Trash2, Plus, Music } from "lucide-react";

interface SavedMix {
  id: string;
  name: string;
  audioConfigs: { [key: string]: { isPlaying: boolean; volume: number } };
}

interface MixerControlsProps {
  sounds: SoundState[];
  savedMixes: SavedMix[];
  setSavedMixes: React.Dispatch<React.SetStateAction<SavedMix[]>>;
  onApplyMix: (configs: { [key: string]: { isPlaying: boolean; volume: number } }) => void;
  onTimerChange: (secondsLeft: number | null) => void;
  timerSecondsLeft: number | null;
  onResetAllSounds: () => void;
  darkMode?: boolean;
  t?: (key: string) => string;
}

export const MixerControls: React.FC<MixerControlsProps> = ({
  sounds,
  savedMixes,
  setSavedMixes,
  onApplyMix,
  onTimerChange,
  timerSecondsLeft,
  onResetAllSounds,
  darkMode = false,
  t,
}) => {
  const localT = (key: string): string => {
    if (t) return t(key);
    if (key === "ui.timerTitle") return "Auto-Shutdown Timer";
    if (key === "ui.timerDesc") return "Set a timer to smoothly fade out and turn off the soundscape after your baby falls asleep.";
    if (key === "ui.fadeToggle") return "Gentle Fade Out";
    if (key === "ui.fadeToggleDesc") return "Sounds fade out during the last 30 seconds.";
    if (key === "ui.savedMixTitle") return "Saved Sound Mixes";
    if (key === "ui.savedMixDesc") return "Save your favorite active sound levels and combinations to easily restore them with a single tap.";
    if (key === "ui.placeholderMixName") return "Mix name e.g., Bedtime Waves";
    if (key === "ui.saveBtn") return "Save";
    if (key === "ui.cancelTimer") return "Cancel Timer";
    if (key === "ui.noSavedMixes") return "No saved mixes found yet.";
    if (key === "ui.stopAllReset") return "Stop All Playing Sounds & Reset";
    if (key === "ui.activeSounds") return "Active Sounds";
    if (key === "ui.activeSound") return "Active Sound";
    if (key === "ui.loadBtn") return "Load";
    return key;
  };

  const cardClass = darkMode 
    ? "bg-slate-900/85 backdrop-blur-md rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between"
    : "bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 border-slate-100 shadow-xl flex flex-col justify-between";

  const textTitleClass = darkMode ? "text-slate-100" : "text-slate-800";
  const textMutedClass = darkMode ? "text-slate-300" : "text-slate-500";
  
  // Timer states
  const [timerPreset, setTimerPreset] = useState<number | null>(null); // in minutes
  const [timerCustomMin, setTimerCustomMin] = useState<number>(30);
  const [fadeEnabled, setFadeEnabled] = useState<boolean>(true);

  // Delete saved mix
  const handleDeleteMix = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedMixes(prev => prev.filter(m => m.id !== id));
  };

  // Manage timer presets
  const handleSetTimerPreset = (minutes: number | null) => {
    setTimerPreset(minutes);
    if (minutes === null) {
      onTimerChange(null);
    } else {
      onTimerChange(minutes * 60);
    }
  };

  // Custom timer start
  const handleStartCustomTimer = () => {
    onTimerChange(timerCustomMin * 60);
    setTimerPreset(timerCustomMin);
  };

  // Helper formatting for countdown seconds
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 mt-8 select-none">
      
      {/* 1. AUTO-SHUTDOWN TIMER */}
      <div className={cardClass}>
        <div>
          <h3 className={`text-lg font-sans font-bold flex items-center gap-2 mb-2 ${textTitleClass}`}>
            <Clock className="w-5 h-5 text-indigo-500 animate-pulse" />
            {localT("ui.timerTitle")}
          </h3>
          <p className={`text-xs mb-4 ${textMutedClass}`}>
            {localT("ui.timerDesc")}
          </p>

          {/* Active Timer Display */}
          {timerSecondsLeft !== null ? (
            <div className={`rounded-2xl p-4 border flex flex-col items-center justify-center text-center my-4 animate-bounce ${darkMode ? "bg-slate-800/80 border-indigo-500/20" : "bg-sky-55/40 border-sky-100"}`}>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${darkMode ? "text-indigo-300" : "text-sky-500"}`}>Format: HH:MM:SS</span>
              <span className={`text-3xl font-mono font-extrabold tracking-wider ${darkMode ? "text-indigo-200" : "text-sky-700"}`}>
                {formatTime(timerSecondsLeft)}
              </span>
              <div className="w-full bg-sky-200/50 h-1.5 rounded-full overflow-hidden mt-3 max-w-[150px]">
                <div
                  className="bg-sky-500 h-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(100, (timerSecondsLeft / ((timerPreset || 30) * 60)) * 100)}%`
                  }}
                />
              </div>
              
              <button
                id="stop-timer-btn"
                onClick={() => handleSetTimerPreset(null)}
                className="mt-3.5 text-xs bg-rose-500 hover:bg-rose-600 font-semibold text-white px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all text-center cursor-pointer font-sans"
              >
                {localT("ui.cancelTimer")}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Presets */}
              <div className="grid grid-cols-3 gap-2">
                {[15, 30, 45, 60, 90, 120].map((mins) => (
                  <button
                    key={mins}
                    id={`timer-preset-${mins}-btn`}
                    onClick={() => handleSetTimerPreset(mins)}
                    className={`rounded-xl py-2 px-1 text-xs font-bold transition-all border active:scale-95 cursor-pointer ${
                      darkMode
                        ? "bg-slate-800 hover:bg-indigo-900 border-slate-700 text-slate-200 hover:text-white"
                        : "bg-slate-100 hover:bg-sky-100 border-slate-200/50 text-slate-700 hover:text-sky-700"
                    }`}
                  >
                    {mins} Min
                  </button>
                ))}
              </div>

              {/* Custom Selector Widget */}
              <div className={`border-t pt-4 mt-2 ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
                <div className={`flex justify-between items-center text-xs font-bold mb-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <span>Set Custom Timer:</span>
                  <span className="text-sky-500 font-extrabold">{timerCustomMin} min</span>
                </div>
                <input
                  id="custom-timer-slider"
                  type="range"
                  min="5"
                  max="480"
                  step="5"
                  value={timerCustomMin}
                  onChange={(e) => setTimerCustomMin(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 accent-sky-500 cursor-pointer mb-3"
                />
                <button
                  id="start-custom-timer-btn"
                  onClick={handleStartCustomTimer}
                  className="w-full jelly-btn bg-gradient-to-r from-sky-400 to-blue-500 text-white font-sans font-bold text-xs py-2 rounded-xl transition-all shadow-md cursor-pointer"
                  style={{ boxShadow: "0 4px 0 #2563eb" }}
                >
                  Start Timer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Soft Dampening Toggle */}
        <div className={`mt-4 pt-3 border-t flex items-center justify-between ${darkMode ? "border-slate-800" : "border-slate-100/80"}`}>
          <div className="flex flex-col">
            <span className={`text-xs font-bold ${textTitleClass}`}>{localT("ui.fadeToggle")}</span>
            <span className="text-[10px] text-slate-400 leading-tight">{localT("ui.fadeToggleDesc")}</span>
          </div>
          <input
            id="fade-out-toggle"
            type="checkbox"
            checked={fadeEnabled}
            onChange={(e) => setFadeEnabled(e.target.checked)}
            className="w-5 h-5 accent-emerald-500 rounded border-slate-300 pointer-events-auto cursor-pointer"
          />
        </div>
      </div>

      {/* 2. SAVED MIX MANAGER */}
      <div className={cardClass}>
        <div className="space-y-4 font-sans">
          <h3 className={`text-lg font-sans font-bold flex items-center gap-2 mb-1 ${textTitleClass}`}>
            <Save className="w-5 h-5 text-emerald-500 animate-pulse" />
            {localT("ui.savedMixTitle")} {sounds.filter(s => s.isPlaying).length > 0 ? "🌟" : "💤"}
          </h3>
          <p className={`text-xs ${textMutedClass}`}>
            {localT("ui.savedMixDesc")}
          </p>

          {/* Mix List */}
          <div className="max-h-[160px] overflow-y-auto space-y-2.5 pr-1">
            {savedMixes.length === 0 ? (
              <div className={`text-center py-4 text-xs border border-dashed rounded-2xl flex flex-col items-center ${
                darkMode 
                  ? "border-slate-800 text-slate-500" 
                  : "border-slate-200 text-slate-400"
              }`}>
                <Music className="w-6 h-6 text-slate-400 mb-1" />
                {localT("ui.noSavedMixes")}
              </div>
            ) : (
              savedMixes.map((mix) => {
                const activeCount = Object.keys(mix.audioConfigs).filter(k => mix.audioConfigs[k].isPlaying).length;
                return (
                  <div
                    key={mix.id}
                    id={`mix-item-${mix.id}`}
                    onClick={() => onApplyMix(mix.audioConfigs)}
                    className={`flex items-center justify-between p-2.5 border rounded-xl cursor-pointer transition-all hover:scale-[1.01] ${
                      darkMode
                        ? "bg-slate-800 border-slate-700/60 hover:bg-slate-750 text-slate-100"
                        : "bg-slate-50 hover:bg-emerald-55/20 border-slate-200/50 text-slate-700"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-sans font-bold truncate max-w-[150px]">
                        {mix.name}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        {activeCount} {activeCount === 1 ? localT("ui.activeSound") : localT("ui.activeSounds")}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        id={`apply-mix-play-btn-${mix.id}`}
                        className="text-[10px] bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded-full font-bold transition-colors cursor-pointer"
                      >
                        {localT("ui.loadBtn")}
                      </button>
                      <button
                        id={`delete-mix-btn-${mix.id}`}
                        onClick={(e) => handleDeleteMix(mix.id, e)}
                        className={`p-1.5 transition-colors rounded-lg ${
                          darkMode 
                            ? "text-slate-500 hover:text-red-400 hover:bg-slate-700" 
                            : "text-slate-400 hover:text-red-500 hover:bg-red-50"
                        }`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Action controllers */}
        <div className={`mt-4 pt-3 border-t border-dashed ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
          <button
            id="reset-all-sounds-btn"
            onClick={onResetAllSounds}
            className={`w-full text-center text-xs font-semibold rounded-xl border py-2.5 transition-colors active:scale-95 cursor-pointer font-sans ${
              darkMode
                ? "text-rose-400 hover:text-rose-300 border-slate-800 hover:bg-rose-950/20"
                : "text-rose-500 hover:text-rose-600 border-transparent hover:bg-rose-50 hover:border-rose-100"
            }`}
          >
            {localT("ui.stopAllReset")}
          </button>
        </div>
      </div>

    </div>
  );
};
