// Web Audio API engine for Bebek Uyku Mikseri

export interface SoundState {
  id: string;
  name: string;
  emoji: string;
  category: "nature" | "household" | "synth" | "womb" | "custom" | "musicbox";
  synthType: "white" | "pink" | "brown" | "rain" | "heartbeat" | "lullaby" | "none";
  colorClass: string;
  secondaryColorClass: string;
  shadowColor: string;
  isPlaying: boolean;
  volume: number; // 0 to 1
  customFileUrl?: string; // If user uploads their own file
  localFileName?: string; // Predefined file in /public/sounds/
}

export const INITIAL_SOUNDS: SoundState[] = [
  {
    id: "gokyuzu-ruyasi",
    name: "Gökyüzü Rüyası (Ninni)",
    emoji: "🌠",
    category: "synth",
    synthType: "lullaby",
    colorClass: "from-indigo-400 to-sky-500",
    secondaryColorClass: "bg-indigo-600",
    shadowColor: "#6366f1",
    isPlaying: false,
    volume: 0.5,
  },
  {
    id: "gece-melegi",
    name: "Gece Meleği (Ninni)",
    emoji: "👼",
    category: "synth",
    synthType: "lullaby",
    colorClass: "from-amber-300 to-orange-400",
    secondaryColorClass: "bg-amber-600",
    shadowColor: "#d97706",
    isPlaying: false,
    volume: 0.5,
  },
  {
    id: "huzur-bahcesi",
    name: "Huzur Bahçesi (Yağmur)",
    emoji: "🌸",
    category: "synth",
    synthType: "rain",
    colorClass: "from-emerald-300 to-teal-400",
    secondaryColorClass: "bg-emerald-600",
    shadowColor: "#059669",
    isPlaying: false,
    volume: 0.5,
  },
  {
    id: "anne-kalbi-ninni",
    name: "Anne Kalbi & Ritmi",
    emoji: "💕",
    category: "synth",
    synthType: "heartbeat",
    colorClass: "from-pink-400 to-rose-500",
    secondaryColorClass: "bg-pink-600",
    shadowColor: "#db2777",
    isPlaying: false,
    volume: 0.5,
  },
  {
    id: "anne-karni-sesi",
    name: "Anne Karnı Sesi",
    emoji: "🤰",
    category: "womb",
    synthType: "none",
    colorClass: "from-rose-400 to-pink-500",
    secondaryColorClass: "bg-rose-600",
    shadowColor: "#ec4899",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1mxpHvf238rouFMkmJuWXV9vOVE5mvisO",
  },
  {
    id: "ates-citirtisi",
    name: "Ateş Çıtırtısı",
    emoji: "🔥",
    category: "nature",
    synthType: "none",
    colorClass: "from-orange-400 to-red-500",
    secondaryColorClass: "bg-orange-600",
    shadowColor: "#f97316",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1CZEep20tfWhiIe2Ei1Vikq3QUb_INLtP",
  },
  {
    id: "bulbul-sesi",
    name: "Bülbül Melodisi",
    emoji: "🐦",
    category: "nature",
    synthType: "none",
    colorClass: "from-teal-400 to-emerald-500",
    secondaryColorClass: "bg-teal-600",
    shadowColor: "#14b8a6",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1hA-Bw-kt_IrY9HVzQuGlfYjoZNSVKfp0",
  },
  {
    id: "circir-bocegi",
    name: "Cırcır Böceği Sesi",
    emoji: "🦗",
    category: "nature",
    synthType: "none",
    colorClass: "from-cyan-400 to-blue-500",
    secondaryColorClass: "bg-cyan-600",
    shadowColor: "#06b6d4",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1UMx06KfZRXcZUU5JMSP31rqb0RHOU4jC",
  },
  {
    id: "buyukanne-fisiltisi",
    name: "Büyükanne Fısıltısı",
    emoji: "👵",
    category: "womb",
    synthType: "none",
    colorClass: "from-fuchsia-400 to-purple-500",
    secondaryColorClass: "bg-fuchsia-600",
    shadowColor: "#c084fc",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=17C4eO5aQkFNaVLXPqDdo4K0TVVN4sVKo",
  },
  {
    id: "elektrik-supurgesi",
    name: "Elektrik Süpürgesi",
    emoji: "vacuum",
    category: "household",
    synthType: "none",
    colorClass: "from-slate-400 to-zinc-500",
    secondaryColorClass: "bg-slate-600",
    shadowColor: "#94a3b8",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=13Z3zCAGgh6zktOqBzrr4XPkxghu2Q2QL",
  },
  {
    id: "guguk-kusu",
    name: "Guguk Kuşu",
    emoji: "🐦",
    category: "nature",
    synthType: "none",
    colorClass: "from-lime-400 to-green-500",
    secondaryColorClass: "bg-lime-600",
    shadowColor: "#84cc16",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=17tLXF1m761GaX1BFxUGXgarcLiD7zhEh",
  },
  {
    id: "irmak-sesi",
    name: "Irmak Sesi",
    emoji: "🌊",
    category: "nature",
    synthType: "none",
    colorClass: "from-blue-400 to-sky-500",
    secondaryColorClass: "bg-blue-600",
    shadowColor: "#3b82f6",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=15Lx01Ma-LEvE9WzqLkD-MHqtOEgDIEpj",
  },
  {
    id: "kalp-atisi-gercek",
    name: "Gerçek Kalp Atışı",
    emoji: "❤️",
    category: "womb",
    synthType: "none",
    colorClass: "from-rose-500 to-red-600",
    secondaryColorClass: "bg-rose-700",
    shadowColor: "#f43f5e",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1VAs6_MRTgsszLvRodKc52TtJ66eFbVo6",
  },
  {
    id: "kanarya-sesi",
    name: "Kanarya Sesi",
    emoji: "🐤",
    category: "nature",
    synthType: "none",
    colorClass: "from-amber-400 to-yellow-500",
    secondaryColorClass: "bg-amber-600",
    shadowColor: "#fbbf24",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1ys14rtONsk-2mIAUzhzyqFnQbLZ8YDTQ",
  },
  {
    id: "kurbaga-senfonisi",
    name: "Kurbağa Senfonisi",
    emoji: "🐸",
    category: "nature",
    synthType: "none",
    colorClass: "from-green-400 to-emerald-500",
    secondaryColorClass: "bg-green-600",
    shadowColor: "#4ade80",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1F9fbMnBFQU4CV0NcjD17-D2NLcsbL8Hh",
  },
  {
    id: "pis-pis-sesi",
    name: "Pış Pış Sesi",
    emoji: "🤫",
    category: "womb",
    synthType: "none",
    colorClass: "from-purple-400 to-pink-500",
    secondaryColorClass: "bg-purple-600",
    shadowColor: "#c084fc",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1uzOkTMIdotb8sdb31ox9Vg-euyCxm4RB",
  },
  {
    id: "muzik-kutusu-1",
    name: "Müzik 1",
    emoji: "🧸",
    category: "musicbox",
    synthType: "none",
    colorClass: "from-fuchsia-400 to-pink-500",
    secondaryColorClass: "bg-fuchsia-600",
    shadowColor: "#d946ef",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1aEyjE4nQV5U6oF8Bhh9Yjtnlt5997AQi",
  },
  {
    id: "muzik-kutusu-2",
    name: "Müzik 2",
    emoji: "🎠",
    category: "musicbox",
    synthType: "none",
    colorClass: "from-violet-400 to-indigo-500",
    secondaryColorClass: "bg-violet-600",
    shadowColor: "#8b5cf6",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1qMPN0M9ysCWiX22Ea2cTdDWBK-nlFYfF",
  },
  {
    id: "muzik-kutusu-3",
    name: "Müzik 3",
    emoji: "🎪",
    category: "musicbox",
    synthType: "none",
    colorClass: "from-sky-400 to-cyan-500",
    secondaryColorClass: "bg-sky-600",
    shadowColor: "#0ea5e9",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1izqcylYeXcr188JKEj5FeDxv8M13Nvlm",
  },
  {
    id: "muzik-kutusu-4",
    name: "Müzik 4",
    emoji: "🎶",
    category: "musicbox",
    synthType: "none",
    colorClass: "from-rose-400 to-pink-500",
    secondaryColorClass: "bg-rose-600",
    shadowColor: "#f43f5e",
    isPlaying: false,
    volume: 0.5,
    localFileName: "https://drive.google.com/uc?export=download&id=1FW1SKIczZL4VQVGL2Pr6wWCBLOsPTh-d",
  }
];

// Audio Web Engine Core
class BabySleepAudioEngine {
  private ctx: AudioContext | null = null;
  private activeSources: Map<string, {
    source: AudioNode;
    gainNode: GainNode;
    type: "synthetic" | "file";
    htmlAudio?: HTMLAudioElement;
  }> = new Map();

  private defaultVolumeMultiplier: number = 1.0;
  private blobUrlCache: Map<string, string> = new Map();
  private playingSoundIds: Set<string> = new Set();
  private playTokens: Map<string, number> = new Map();

  constructor() {}

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private getProxyUrl(url: string): string {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      try {
        const urlObj = new URL(url);
        const id = urlObj.searchParams.get("id");
        if (id) {
          return `/api/proxy-audio?id=${id}`;
        }
      } catch (e) {
        // fallback
      }
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `/api/proxy-audio?id=${match[1]}`;
      }
    }
    return url;
  }

  private async getAudioSrc(sound: SoundState): Promise<string> {
    const rawUrl = sound.customFileUrl || sound.localFileName;
    if (!rawUrl) return "";

    if (rawUrl.includes("drive.google.com")) {
      return this.getProxyUrl(rawUrl);
    }

    if (rawUrl.startsWith("blob:") || rawUrl.startsWith("/")) {
      return rawUrl;
    }

    if (!rawUrl.startsWith("http")) {
      return rawUrl.startsWith("/") ? rawUrl : `/sounds/${rawUrl}`;
    }

    if (this.blobUrlCache.has(rawUrl)) {
      return this.blobUrlCache.get(rawUrl)!;
    }

    try {
      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      this.blobUrlCache.set(rawUrl, blobUrl);
      return blobUrl;
    } catch (err) {
      console.error(`Failed to fetch and cache remote audio URL: ${rawUrl}`, err);
      return rawUrl;
    }
  }

  public setGlobalVolume(multiplier: number) {
    this.defaultVolumeMultiplier = multiplier;
    this.activeSources.forEach((value, key) => {
      // Find matching state parameter or update directly
      // For instant reaction, we apply the gain
    });
  }

  public async playSound(sound: SoundState) {
    try {
      const ctx = this.initCtx();
      this.stopSound(sound.id);

      const token = (this.playTokens.get(sound.id) || 0) + 1;
      this.playTokens.set(sound.id, token);
      this.playingSoundIds.add(sound.id);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(sound.volume * this.defaultVolumeMultiplier, ctx.currentTime);
      gainNode.connect(ctx.destination);

      const isCustomFile = !!sound.customFileUrl;
      const staticPath = sound.localFileName?.startsWith("http")
        ? sound.localFileName
        : (sound.localFileName ? `/sounds/${sound.localFileName}` : undefined);

      if (isCustomFile || sound.localFileName) {
        let audioSrc = isCustomFile ? sound.customFileUrl! : staticPath!;

        if (audioSrc.startsWith("http")) {
          try {
            audioSrc = await this.getAudioSrc(sound);
          } catch (err) {
            console.warn(`Failed to convert remote URL to blob: ${audioSrc}`, err);
          }
        }

        // Check if user cancelled or started a new play request while fetching
        if (this.playTokens.get(sound.id) !== token || !this.playingSoundIds.has(sound.id)) {
          gainNode.disconnect();
          return;
        }

        const audio = new Audio(audioSrc);
        audio.loop = true;

        if (audioSrc.startsWith("blob:") || audioSrc.startsWith("/") || !audioSrc.startsWith("http")) {
          // Local/same-origin routing through Web Audio graph.
          audio.crossOrigin = "anonymous";
          const sourceNode = ctx.createMediaElementSource(audio);
          sourceNode.connect(gainNode);

          // Put it in activeSources IMMEDIATELY so stopSound can find and stop/pause it right away!
          this.activeSources.set(sound.id, {
            source: sourceNode,
            gainNode: gainNode,
            type: "file",
            htmlAudio: audio
          });

          audio.play().catch((err) => {
            console.warn(`File playback failed for ${sound.id}, falling back to dynamic Web Audio synthesiser:`, err);
            // If the user hasn't stopped or restarted the sound, fallback
            if (this.playTokens.get(sound.id) === token && this.playingSoundIds.has(sound.id)) {
              this.playSyntheticFallback(sound, ctx, gainNode);
            } else {
              this.stopSound(sound.id);
            }
          });
        } else {
          // Fallback direct playback
          audio.volume = sound.volume * this.defaultVolumeMultiplier;
          
          this.activeSources.set(sound.id, {
            source: gainNode, // Placeholder node
            gainNode: gainNode,
            type: "file",
            htmlAudio: audio
          });

          audio.play().catch((err) => {
            console.warn(`Direct remote URL playback failed for ${sound.id}:`, err);
            if (this.playTokens.get(sound.id) === token && this.playingSoundIds.has(sound.id)) {
              this.playSyntheticFallback(sound, ctx, gainNode);
            } else {
              this.stopSound(sound.id);
            }
          });
        }
      } else {
        this.playSyntheticFallback(sound, ctx, gainNode);
      }
    } catch (e) {
      console.error("Failed to start sound:", e);
    }
  }

  private playSyntheticFallback(sound: SoundState, ctx: AudioContext, gainNode: GainNode) {
    let sourceNode: AudioNode;

    switch (sound.synthType) {
      case "white":
        sourceNode = this.createNoiseBufferNode(ctx, "white");
        (sourceNode as AudioBufferSourceNode).start();
        break;
      case "pink":
        sourceNode = this.createNoiseBufferNode(ctx, "pink");
        (sourceNode as AudioBufferSourceNode).start();
        break;
      case "brown":
        sourceNode = this.createNoiseBufferNode(ctx, "brown");
        (sourceNode as AudioBufferSourceNode).start();
        break;
      case "rain":
        sourceNode = this.createRainSynthesizerNode(ctx, gainNode, sound.id);
        break;
      case "heartbeat":
        sourceNode = this.createHeartbeatSynthesizerNode(ctx, gainNode, sound.id);
        break;
      case "lullaby":
        sourceNode = this.createLullabySynthesizerNode(ctx, gainNode, sound.id);
        break;
      default:
        // Fallback quiet silent node (completely avoids electronic howling)
        const silentNode = ctx.createGain();
        silentNode.gain.setValueAtTime(0, ctx.currentTime);
        silentNode.connect(gainNode);
        sourceNode = silentNode;
        break;
    }

    this.activeSources.set(sound.id, {
      source: sourceNode,
      gainNode: gainNode,
      type: "synthetic"
    });
  }

  public setVolume(id: string, volume: number) {
    const active = this.activeSources.get(id);
    if (active) {
      const ctx = this.initCtx();
      active.gainNode.gain.setValueAtTime(volume * this.defaultVolumeMultiplier, ctx.currentTime);
      if (active.type === "file" && active.htmlAudio) {
        active.htmlAudio.volume = volume * this.defaultVolumeMultiplier;
      }
    }
  }

  public stopSound(id: string) {
    this.playTokens.delete(id);
    this.playingSoundIds.delete(id);
    const active = this.activeSources.get(id);
    if (active) {
      try {
        if (active.type === "file" && active.htmlAudio) {
          active.htmlAudio.pause();
          active.htmlAudio.src = "";
          active.htmlAudio.load();
        } else if (active.type === "synthetic") {
          // If it's buffer node
          if (active.source instanceof AudioBufferSourceNode) {
            active.source.stop();
          } else if (active.source instanceof OscillatorNode) {
            active.source.stop();
          } else {
            // Complex custom object synths will listen for their custom stop mechanisms,
            // or we disconnect to force silence.
            active.source.disconnect();
          }
        }
      } catch (e) {
        // Already stopped or cleaned up
      }
      try {
        active.gainNode.disconnect();
      } catch (e) {
        // Node might already be disconnected
      }
      this.activeSources.delete(id);
    }
  }

  public stopAll() {
    this.playTokens.clear();
    this.playingSoundIds.clear();
    this.activeSources.forEach((_, id) => {
      this.stopSound(id);
    });
  }

  public fadeAllOut(durationSeconds: number, onComplete: () => void) {
    if (this.activeSources.size === 0) {
      onComplete();
      return;
    }

    const ctx = this.initCtx();
    const now = ctx.currentTime;

    this.activeSources.forEach((active, id) => {
      const currentGain = active.gainNode.gain.value;
      active.gainNode.gain.setValueAtTime(currentGain, now);
      active.gainNode.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

      // Smooth custom volume fade-out for Native HTMLAudio elements bypassing createMediaElementSource
      if (active.type === "file" && active.htmlAudio) {
        const startVol = active.htmlAudio.volume;
        const fadeSteps = 20;
        const stepTime = (durationSeconds * 1000) / fadeSteps;
        let currentStep = 0;
        const fadeInterval = setInterval(() => {
          currentStep++;
          if (active.htmlAudio) {
            active.htmlAudio.volume = Math.max(0, startVol * (1 - currentStep / fadeSteps));
          }
          if (currentStep >= fadeSteps) {
            clearInterval(fadeInterval);
          }
        }, stepTime);
      }

      // Schedule actual stops
      setTimeout(() => {
        this.stopSound(id);
      }, durationSeconds * 1000);
    });

    setTimeout(() => {
      onComplete();
    }, durationSeconds * 1000 + 100);
  }

  // --- SYNTHESIS ALGORITHMS ---

  private createNoiseBufferNode(ctx: AudioContext, type: "white" | "pink" | "brown"): AudioBufferSourceNode {
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0; // For brown noise integration
    // Pink noise coefficients
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;

      if (type === "white") {
        output[i] = white;
      } else if (type === "pink") {
        // Paul Kellet's refined Pink Noise formula
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11; // compensation
        b6 = white * 0.115926;
      } else if (type === "brown") {
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // compensation
      }
    }

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;
    return source;
  }

  private createRainSynthesizerNode(ctx: AudioContext, destinationGain: GainNode, soundId: string): AudioNode {
    // Rain is pink noise + random drop sparkles
    const noiseSource = this.createNoiseBufferNode(ctx, "pink");

    // Filter noise to create a gentle storm hum
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1000, ctx.currentTime);

    noiseSource.connect(filter);
    filter.connect(destinationGain);
    noiseSource.start();

    // Create a periodic raindrop generator sound
    const dripInterval = setInterval(() => {
      // If destination is disconnected or sound stopped, cancel interval
      if (!this.activeSources.has(soundId)) {
        clearInterval(dripInterval);
        return;
      }
      try {
        const osc = ctx.createOscillator();
        const dGain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800 + Math.random() * 600, ctx.currentTime);
        // Ramp down fast
        dGain.gain.setValueAtTime(0.02 + Math.random() * 0.03, ctx.currentTime);
        dGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

        osc.connect(dGain);
        dGain.connect(destinationGain);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } catch (e) {
        clearInterval(dripInterval);
      }
    }, 150);

    return filter;
  }

  private createHeartbeatSynthesizerNode(ctx: AudioContext, destinationGain: GainNode, soundId: string): AudioNode {
    // Generate lub-dub rhythm using synthesized sine waves
    const mainNode = ctx.createGain();
    mainNode.connect(destinationGain);

    const heartbeatInterval = setInterval(() => {
      if (!this.activeSources.has(soundId)) {
        clearInterval(heartbeatInterval);
        return;
      }
      try {
        const playBeat = (freq: number, dur: number, vol: number) => {
          const osc = ctx.createOscillator();
          const beatGain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(120, ctx.currentTime);

          beatGain.gain.setValueAtTime(vol, ctx.currentTime);
          beatGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);

          osc.connect(filter);
          filter.connect(beatGain);
          beatGain.connect(mainNode);

          osc.start();
          osc.stop(ctx.currentTime + dur + 0.05);
        };

        // Standard 70 BPM rhythm has a Lub (first beat) then a short delay then a Dub (second beat) then a longer delay
        // Lub
        playBeat(65, 0.15, 0.8);
        // Dub (after 0.18s)
        setTimeout(() => {
          if (this.activeSources.has(soundId)) {
            playBeat(55, 0.15, 0.6);
          }
        }, 180);

      } catch (e) {
        clearInterval(heartbeatInterval);
      }
    }, 950); // BPM around ~63

    return mainNode;
  }

  private createLullabySynthesizerNode(ctx: AudioContext, destinationGain: GainNode, soundId: string): AudioNode {
    const mainNode = ctx.createGain();
    mainNode.connect(destinationGain);

    // Simple Twinkle Twinkle Little Star melody notes
    // C=261.6, D=293.7, E=329.6, F=349.2, G=392.0, A=440.0, B=493.9
    const melody = [
      261.6, 261.6, 392.0, 392.0, 440.0, 440.0, 392.0, // Twinkle twinkle little star
      349.2, 349.2, 329.6, 329.6, 293.7, 293.7, 261.6, // How I wonder what you are
      392.0, 392.0, 349.2, 349.2, 329.6, 329.6, 293.7, // Up above the world so high
      392.0, 392.0, 349.2, 349.2, 329.6, 329.6, 293.7, // Like a diamond in the sky
      261.6, 261.6, 392.0, 392.0, 440.0, 440.0, 392.0, // Twinkle twinkle little star
      349.2, 349.2, 329.6, 329.6, 293.7, 293.7, 261.6  // How I wonder what you are
    ];

    const noteDurations = [
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0,
      0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0
    ];

    let noteIdx = 0;
    const playNextNote = () => {
      if (!this.activeSources.has(soundId)) {
        return;
      }
      try {
        const freq = melody[noteIdx];
        const dur = noteDurations[noteIdx] * 1.5; // slow lullaby speed

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Music Box sound style: Triangle wave is very sweet + filtered
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        // Music box pluck envelope
        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.05); // quick attack
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur); // long release

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(mainNode);

        osc.start();
        osc.stop(ctx.currentTime + dur + 0.05);

        // Schedule next note
        noteIdx = (noteIdx + 1) % melody.length;
        const delayMs = noteDurations[noteIdx] * 1500;
        
        setTimeout(playNextNote, delayMs);

      } catch (err) {
        // Audio error or context stopped
      }
    };

    // Kickoff loop after short delay
    setTimeout(playNextNote, 100);

    return mainNode;
  }
}

export const audioEngineHandler = new BabySleepAudioEngine();
