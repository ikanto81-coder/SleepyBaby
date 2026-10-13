export interface Page {
  pageNum: number;
  text: string;
  interactiveElement: string;
  activeLabel: string;
  emoji: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  textColor: string;
  accentColor: string;
  coverImage: string;
  pages: Page[];
}

export const STORIES: Story[] = [
  {
    id: "kucuk-mavi-bulut",
    title: "Little Blue Cloud",
    description: "Follow the fluffy journey of a small sleepy cloud searching for the softest sky companion.",
    emoji: "☁️",
    color: "from-sky-300 via-blue-400 to-indigo-500",
    textColor: "text-sky-900",
    accentColor: "sky",
    coverImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "High in the deep blue sky lived a little cloud named Cotton. Cotton was soft, blue, and loved to yawn as the sun went down.",
        interactiveElement: "Make Cotton Yawn",
        activeLabel: "🥱 Cotton let out a slow, fluffy yawn: 'Yaaawn! So sleepy...'",
        emoji: "☁️"
      },
      {
        pageNum: 2,
        text: "The golden sun wrapped itself in orange pajamas and slipped away. Cotton nestled on top of a quiet, peaceful hill.",
        interactiveElement: "Help Sun Sleep",
        activeLabel: "☀️ The sun set behind the mountains, leaving a soft purple twilight.",
        emoji: "🌅"
      },
      {
        pageNum: 3,
        text: "A tiny star blinked in the dark sky. Her name was Sparky. She whispered: 'The night is welcoming beautiful dreams.'",
        interactiveElement: "Wink Back",
        activeLabel: "✨ Sparky flashed a gentle silver light to protect your room.",
        emoji: "⭐"
      },
      {
        pageNum: 4,
        text: "A mild, warm night breeze began to blow, rocking Cotton like a soft sky cradle. Cotton felt lighter and lighter.",
        interactiveElement: "Blow Night Breeze",
        activeLabel: "💨 The warm wind whispered, 'Sssshhh... float away into sleep...'",
        emoji: "🍃"
      },
      {
        pageNum: 5,
        text: "A tired swallow came and rested right on Cotton's soft back, folding its wings snugly.",
        interactiveElement: "Pet the Swallow",
        activeLabel: "🐦 The swallow let out a happy soft 'chirp' and closed its eyes.",
        emoji: "🐦"
      },
      {
        pageNum: 6,
        text: "Deep below, the river looked like a shiny silver belt. It murmured a sweet water song: 'Sleep well, cloud friend...'",
        interactiveElement: "Listen to River",
        activeLabel: "🌊 The river water pattern bubbled: 'Splash-splash, drift-drift...'",
        emoji: "💧"
      },
      {
        pageNum: 7,
        text: "Grandpa Moon appeared and placed a warm, starry silver blanket over Cotton. It was cozy and snug.",
        interactiveElement: "Squeeze Blanket",
        activeLabel: "🌙 The starry blanket feels so warm and protective.",
        emoji: "🌙"
      },
      {
        pageNum: 8,
        text: "In his sleep, Cotton dreamed of floating pastel candies and fluffy sheep dancing on moonbeams.",
        interactiveElement: "Spin Candies",
        activeLabel: "🍭 Sweet pink candies spun slowly inside the safe dream.",
        emoji: "🍭"
      },
      {
        pageNum: 9,
        text: "Cotton was completely relaxed. His breath became slow and rhythmic: inhaling peace, exhaling worries.",
        interactiveElement: "Take Deep Breath",
        activeLabel: "🌬️ Let's breathe: 'Inhaaaale...' and 'Sssshhh...' feel calm.",
        emoji: "🧘"
      },
      {
        pageNum: 10,
        text: "Cotton fell into a beautiful deep slumber. Close your eyes, sweet child, and find your own cozy cloud.",
        interactiveElement: "Give Sleepy Kiss",
        activeLabel: "❤️ Muuahh! Sweet dreams and safe resting all night.",
        emoji: "💤"
      }
    ]
  },
  {
    id: "ormanin-sirri",
    title: "The Secret of the Forest",
    description: "Discover the magical nighttime secret that brings a gentle sleeping whisper to all forest creatures.",
    emoji: "🌲",
    color: "from-emerald-300 via-teal-400 to-green-600",
    textColor: "text-emerald-950",
    accentColor: "emerald",
    coverImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "The secret forest was full of towering pine trees. Every night, the leaves whispered a special calming secret.",
        interactiveElement: "Shake the Pine",
        activeLabel: "🌲 The needles whispered: 'Hush now... time to sleep...'",
        emoji: "🌲"
      },
      {
        pageNum: 2,
        text: "Rusty the little red squirrel climbed into his cozy hollow and covered his tail like a warm winter scarf.",
        interactiveElement: "Fluff Squirrel Nest",
        activeLabel: "🐿️ Rusty tucked his nose into his fluffy tail, ready for dreams.",
        emoji: "🐿️"
      },
      {
        pageNum: 3,
        text: "In the center of the forest, the golden water lily opened its petals, releasing a beautiful vanilla perfume.",
        interactiveElement: "Tickle the Lily",
        activeLabel: "🪷 The lily glowed with a soft golden light, lighting up the lake.",
        emoji: "🪷"
      },
      {
        pageNum: 4,
        text: "Fireflies sparkled in the thick forest bushes. They spun around like tiny glowing night lanterns.",
        interactiveElement: "Turn on Fireflies",
        activeLabel: "✨ The fireflies blinked together: bright, dim, bright, dim...",
        emoji: "💡"
      },
      {
        pageNum: 5,
        text: "The ancient oak tree breathed slowly, sending warm woodland air across the grassy plains.",
        interactiveElement: "Breathe with Oak",
        activeLabel: "🌳 The oak sighed: 'Wuuuush... peace to the forest...'",
        emoji: "🌳"
      },
      {
        pageNum: 6,
        text: "A family of tiny hedgehogs nested beneath the mushrooms, rubbing their wet noses to say goodnight.",
        interactiveElement: "Touch Hedgehog Nose",
        activeLabel: "🦔 The hedgehogs curled into sleepy, safe little round balls.",
        emoji: "🦔"
      },
      {
        pageNum: 7,
        text: "A gentle blue moth settled on top of an organic sleeping flower, perfectly hidden from the wind.",
        interactiveElement: "Fold Petals",
        activeLabel: "🌺 The flower closed its petals to shield the moth with love.",
        emoji: "🦋"
      },
      {
        pageNum: 8,
        text: "The white forest daisies folded their petals and nodded, listening to the secret bedtime tune.",
        interactiveElement: "Quiet Daisies",
        activeLabel: "🌼 The daisies folded their leaves together and fell asleep.",
        emoji: "🌼"
      },
      {
        pageNum: 9,
        text: "A comforting lavender-scented mist crept over the moss, wrapping the entire forest in a giant dream.",
        interactiveElement: "Spread sleep mist",
        activeLabel: "🌫️ The purple mist covers everything like an eye mask.",
        emoji: "🌫️"
      },
      {
        pageNum: 10,
        text: "The entire forest was now asleep. The secret was simple: everyone is safe and cozy. Close your eyes.",
        interactiveElement: "Listen to Silence",
        activeLabel: "😴 Mışıl mışıl... Everyone is sleeping peacefully now.",
        emoji: "🛌"
      }
    ]
  },
  {
    id: "yildiz-tozu",
    title: "Star Dust",
    description: "Join the magical dream fairy scattering vanilla-scented glowing sprinkles over sleepy heads.",
    emoji: "✨",
    color: "from-pink-300 via-rose-400 to-purple-500",
    textColor: "text-pink-900",
    accentColor: "pink",
    coverImage: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "Fairy Lily lived in a tulip cottage. Her job was to scatter magical sleeping star dust to help everyone dream.",
        interactiveElement: "Wave Fairy Wand",
        activeLabel: "🪄 The wand went: 'Ting-ting!' spreading beautiful pink rays.",
        emoji: "🧚‍♀️"
      },
      {
        pageNum: 2,
        text: "The sleepless fox was turning in his bed. Lily flew over and hovered above his nose.",
        interactiveElement: "Calm the Fox",
        activeLabel: "🦊 The fox smiled: 'Fairy dust feels so cool and relaxing.'",
        emoji: "🦊"
      },
      {
        pageNum: 3,
        text: "Lily opened her silver bag and took out a handful of vanilla star dust, throwing it high.",
        interactiveElement: "Throw Star Dust",
        activeLabel: "✨ Shimmering sparkles descended slowly like warm golden sand.",
        emoji: "🎒"
      },
      {
        pageNum: 4,
        text: "The fox yawned and slept. Lily flapped her wings, heading over to her next friend, the bunny.",
        interactiveElement: "Flap Fairy Wings",
        activeLabel: "🦋 Flutter-flutter... Her wings produced a fresh floral scent.",
        emoji: "🐰"
      },
      {
        pageNum: 5,
        text: "Bunny was still full of active thoughts. Lily whispered a beautiful sleep melody in his long ears.",
        interactiveElement: "Hum a Melody",
        activeLabel: "🎶 'Sleep, sleep little bunny... sweet carrots in your dreams...'",
        emoji: "🎵"
      },
      {
        pageNum: 6,
        text: "Inside the big wooden cave, the brown bear was sleeping but needed cozy lights so he wouldn't worry.",
        interactiveElement: "Check the Cave",
        activeLabel: "🐻 Bear was snoring peacefully: 'Hrr-pff... Hrr-pff...'",
        emoji: "🐻"
      },
      {
        pageNum: 7,
        text: "Lily attached sparkling little dream stars directly onto the dark cave ceiling.",
        interactiveElement: "Light Ceiling Stars",
        activeLabel: "🌟 The cave illuminated with a relaxing, safe amber light.",
        emoji: "💡"
      },
      {
        pageNum: 8,
        text: "The owl opened one eye on the oak branch. Lily gently stroked his feathers until he yawned.",
        interactiveElement: "Stroke the Owl",
        activeLabel: "🦉 The owl said 'Hoot-hoot...' and drifted into sleep.",
        emoji: "🦉"
      },
      {
        pageNum: 9,
        text: "With all forest friends asleep, Lily lay down on her comfortable bed made of a large pink rose petal.",
        interactiveElement: "Tuck Lily in Rose",
        activeLabel: "🌹 The rose petal feels soft and smells wonderful.",
        emoji: "🌹"
      },
      {
        pageNum: 10,
        text: "The dream sprinkles are now entering your room, filling it with safety. Sleep tight, little angel.",
        interactiveElement: "Receive Sprinkle",
        activeLabel: "💖 Sparkling star dust was placed on your pillow. Sleep well.",
        emoji: "🛌"
      }
    ]
  },
  {
    id: "kucuk-ejderha",
    title: "Little Dragon",
    description: "A warm, cozy adventure of a tiny dragon who learns to puff cooling blue dream bubbles to sleep.",
    emoji: "🐉",
    color: "from-orange-300 via-red-400 to-amber-500",
    textColor: "text-orange-950",
    accentColor: "orange",
    coverImage: "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "In the volcanic sleepy valley lived a baby dragon named Ember. Ember's nose sparked with golden warmth.",
        interactiveElement: "Spark Nose",
        activeLabel: "🔥 Ember let out a tiny, harmless gold spark and giggled.",
        emoji: "🐉"
      },
      {
        pageNum: 2,
        text: "Ember was too hot to sleep. He rolled from side to side on his stone mattress, looking for cool air.",
        interactiveElement: "Roll Ember Over",
        activeLabel: "💤 Ember groaned: 'I'm too hot! My wings are tingling.'",
        emoji: "🛌"
      },
      {
        pageNum: 3,
        text: "His mother, Mama Dragon, wrapped her giant, cool wings around him to block out the warm breeze.",
        interactiveElement: "Mama's Hug",
        activeLabel: "🫂 Mama's giant wings feel like a protective castle.",
        emoji: "🫂"
      },
      {
        pageNum: 4,
        text: "Mama gave Ember a cup of cool magic honeysuckle tea that tasted like peppermint candy.",
        interactiveElement: "Drink Magical Tea",
        activeLabel: "🍵 Sip, sip... Ember's belly became cool and wonderfully relaxed.",
        emoji: "🍵"
      },
      {
        pageNum: 5,
        text: "She taught Ember a secret: instead of breathing sparks, breathe out cooling blue dream bubbles.",
        interactiveElement: "Blow Blue Bubbles",
        activeLabel: "🫧 Puffy blue bubbles floated up, cooling down the room.",
        emoji: "🫧"
      },
      {
        pageNum: 6,
        text: "Ember watched the bubbles float and pop. Each pop left a trace of lavender scent in the cave.",
        interactiveElement: "Pop a Bubble",
        activeLabel: "🔮 Pop! A soothing lavender smell spread all over.",
        emoji: "✨"
      },
      {
        pageNum: 7,
        text: "Ember's tail relaxed. He laid his head on a soft pile of smooth river stones, which felt cool.",
        interactiveElement: "Smooth the Stones",
        activeLabel: "🪨 The river stones are cool, smooth, and perfect.",
        emoji: "🪨"
      },
      {
        pageNum: 8,
        text: "He began to count fluffy sheep made of blue mist jumping over a cooling waterfall.",
        interactiveElement: "Count Cloud Sheep",
        activeLabel: "🐑 'One mist sheep, two mist sheep...' Ember's eyes are closing.",
        emoji: "🐑"
      },
      {
        pageNum: 9,
        text: "Ember took a deep, cooling breath. His nose spark was replaced by a gentle, glowing blue night-light.",
        interactiveElement: "Breathe Cool Air",
        activeLabel: "🌬️ Warmth went out, cool peace came in. Perfect temperature.",
        emoji: "🧘"
      },
      {
        pageNum: 10,
        text: "The little dragon fell into a restful slumber, snoring with a soft blue steam. Sweet dreams, little dragon.",
        interactiveElement: "Blow Sleep Steam",
        activeLabel: "😴 Soft 'Hoo-shhh...' steam rocked Ember to sleep.",
        emoji: "💤"
      }
    ]
  },
  {
    id: "kayip-balina-yavrusu",
    title: "The Lost Baby Whale",
    description: "Sway with the ocean currents as a baby whale follows a soothing lullaby back to her family's embrace.",
    emoji: "🐳",
    color: "from-blue-400 via-cyan-400 to-indigo-600",
    textColor: "text-blue-900",
    accentColor: "blue",
    coverImage: "https://images.unsplash.com/photo-1544924497-a7796079e65a?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "Deep in the peaceful dolphin bay lived a baby whale named Lulu. She swam near the sparkling surface.",
        interactiveElement: "Splash Lulu's Tail",
        activeLabel: "🐳 Lulu splashed her tail happily: 'Splash! Splash! Swish!'",
        emoji: "🐳"
      },
      {
        pageNum: 2,
        text: "After playing, Lulu realized she had swum too far. She was alone under the starry twilight sky.",
        interactiveElement: "Look to Stars",
        activeLabel: "🌌 The ocean reflected the stars like a massive, floating playground.",
        emoji: "🌌"
      },
      {
        pageNum: 3,
        text: "But the ocean was not scary. Lulu heard a deep, resonant hum: it was her family's beautiful sleep song.",
        interactiveElement: "Listen to Echo",
        activeLabel: "🎵 'Muuuuu-oooh...' A calm, loving voice echoed through the water.",
        emoji: "🎵"
      },
      {
        pageNum: 4,
        text: "Lulu swam down, following the song. She met a giant, gentle sea turtle sliding through the waves.",
        interactiveElement: "Pet Sea Turtle",
        activeLabel: "🐢 The turtle murmured: 'Follow the gentle current, little whale...'",
        emoji: "🐢"
      },
      {
        pageNum: 5,
        text: "Jellyfish illuminated her way. They glowed like floating lanterns of soft pink and blue lights.",
        interactiveElement: "Touch Jellyfish",
        activeLabel: "🎐 Simple, gentle glow... like a soothing night lamp in your nursery.",
        emoji: "🎐"
      },
      {
        pageNum: 6,
        text: "She swam through a cozy forest of green seagrass, which swayed in a perfect lullaby rhythm.",
        interactiveElement: "Sway the Seagrass",
        activeLabel: "🌿 The seagrass tickled Lulu: 'Sssshhh... swing, swing...'",
        emoji: "🌿"
      },
      {
        pageNum: 7,
        text: "The family's song got louder and warmer. Lulu saw her mother's large, protective shadow in the blue.",
        interactiveElement: "Swim to Mom",
        activeLabel: "🫂 Lulu felt safe as her mother's smooth body touched hers.",
        emoji: "🫂"
      },
      {
        pageNum: 8,
        text: "Mama wrapped her fin around Lulu, guiding her to a soft sandy ocean bed where her pod lay.",
        interactiveElement: "Tuck Lulu in Sand",
        activeLabel: "🐚 The ocean sand feels warm, soft, and quiet.",
        emoji: "🐚"
      },
      {
        pageNum: 9,
        text: "Lulu blew out a string of tiny pearl bubbles, releasing all the tiredness from her swim.",
        interactiveElement: "Blow Pearl Bubbles",
        activeLabel: "🫧 Bubble-bubble... Lulu's heart is beating calmly now.",
        emoji: "🫧"
      },
      {
        pageNum: 10,
        text: "Surrounded by her family, Lulu closed her eyes and drifted into sweet watery dreams. Goodnight, baby whale.",
        interactiveElement: "Wave Goodnight",
        activeLabel: "😴 Goodnight Lulu... Sleep tight in the peaceful, warm ocean.",
        emoji: "💤"
      }
    ]
  },
  {
    id: "pofuduk-tavsan",
    title: "Fluffy Bunny",
    description: "Hop along a lavender field with a cozy bunny looking for the softest dandelion sleep mask.",
    emoji: "🐰",
    color: "from-yellow-100 via-orange-200 to-pink-300",
    textColor: "text-amber-950",
    accentColor: "amber",
    coverImage: "https://images.unsplash.com/photo-1598124146163-36819847286d?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "Barnaby was a little bunny with extremely fluffy fur. He had spent all day jumping in the carrot plains.",
        interactiveElement: "Pet Fluffy Fur",
        activeLabel: "🐰 Barnaby's fur is so soft and warm! He wiggled his pink nose.",
        emoji: "🐰"
      },
      {
        pageNum: 2,
        text: "Now, the twilight sky was a lovely orange. Barnaby wanted to rest, but his long ears were still twitching.",
        interactiveElement: "Calm the Ears",
        activeLabel: "👂 The twitches stopped. Barnaby's ears fell down in relaxation.",
        emoji: "👂"
      },
      {
        pageNum: 3,
        text: "He hopped into a sweet-smelling lavender field. The scent was incredibly relaxing and eye-safe.",
        interactiveElement: "Smell Lavender",
        activeLabel: "🌸 Sniff-sniff... The purple lavender smells like quiet dreams.",
        emoji: "🌸"
      },
      {
        pageNum: 4,
        text: "On a green leaf, Barnaby saw a droplet of chamomile dew. He drank it to calm his busy belly.",
        interactiveElement: "Drink Chamomile Dew",
        activeLabel: "💧 Slurp! Scent of chamomile made him feel cozy inside.",
        emoji: "🍵"
      },
      {
        pageNum: 5,
        text: "He looked for a dandelion. He found a massive, fluffy dandelion puff to use as a soft pillow.",
        interactiveElement: "Pluck Dandelion",
        activeLabel: "🌼 The dandelion puff is like a soft cloud, ready to rest his head.",
        emoji: "🌼"
      },
      {
        pageNum: 6,
        text: "A friendly cricket began to play a gentle bedtime violin tune from behind a smooth stone.",
        interactiveElement: "Listen to Cricket",
        activeLabel: "🎻 'Chirp-chirp... sleep bunny... sleep well...'",
        emoji: "🦗"
      },
      {
        pageNum: 7,
        text: "The moon shone a soft silver beam, lighting up Barnaby's grass burrow like a cozy night nest.",
        interactiveElement: "Check Burrow",
        activeLabel: "🕳️ The burrow is dry, warm, and packed with soft clover leaves.",
        emoji: "🕳️"
      },
      {
        pageNum: 8,
        text: "Barnaby's mother arrived and licked his forehead, wrapping her warm body around his.",
        interactiveElement: "Get Mother's Lick",
        activeLabel: "🫂 Mommy's lick feels comforting and removes any bad thoughts.",
        emoji: "🫂"
      },
      {
        pageNum: 9,
        text: "He closed his eyes, took a deep bunny breath, and felt completely weightless.",
        interactiveElement: "Take Bunny Breath",
        activeLabel: "🌬️ 'In-out... wiggle-wiggle...' Deep, peaceful sleep is arriving.",
        emoji: "🧘"
      },
      {
        pageNum: 10,
        text: "Barnaby fell asleep, dreaming of giant sweet carrots and blue meadows. Have a sweet sleep, fluffy bunny.",
        interactiveElement: "Blow Bunny Kiss",
        activeLabel: "😴 Goodnight Barnaby... Sleep tight and have wonderful dreams.",
        emoji: "💤"
      }
    ]
  },
  {
    id: "ucan-midilli",
    title: "The Flying Pony",
    description: "Soar through starry clouds on a magical winged pony to find the golden dream palace in the sky.",
    emoji: "🦄",
    color: "from-purple-300 via-pink-400 to-indigo-600",
    textColor: "text-purple-900",
    accentColor: "indigo",
    coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop",
    pages: [
      {
        pageNum: 1,
        text: "Beneath the starry sky lived a winged pony named Celeste. Celeste had a coat of silver and wings of purple velvet.",
        interactiveElement: "Pet Celeste",
        activeLabel: "🦄 Celeste let out a gentle 'neigh' and shook her glittery mane.",
        emoji: "🦄"
      },
      {
        pageNum: 2,
        text: "Celeste flew down quietly to your window, inviting you on a gentle, floating ride before sleep.",
        interactiveElement: "Get on Pony",
        activeLabel: "🏇 You sat snugly on Celeste's back. She felt extremely soft and warm.",
        emoji: "🏇"
      },
      {
        pageNum: 3,
        text: "With a gentle flap of her wings, Celeste lifted off into the quiet, fresh night air.",
        interactiveElement: "Flap Wings Gently",
        activeLabel: "💨 Swoosh... You are rising smoothly, leaving all concerns behind.",
        emoji: "💨"
      },
      {
        pageNum: 4,
        text: "You flew through fluffy clouds that smelled like sweet strawberry cotton candy.",
        interactiveElement: "Smell Cotton Cloud",
        activeLabel: "☁️ It smells sweet and makes you feel completely relaxed.",
        emoji: "☁️"
      },
      {
        pageNum: 5,
        text: "Celeste grabbed a sparkling golden star ribbon from a constellation and gave it to you.",
        interactiveElement: "Catch Star Ribbon",
        activeLabel: "🎗️ The ribbon glows in your hands, protecting you from bad dreams.",
        emoji: "✨"
      },
      {
        pageNum: 6,
        text: "You stopped at the Milky Way station. A friendly sheep offered you a cup of warm, cosmic honey-milk.",
        interactiveElement: "Drink Star Milk",
        activeLabel: "🥛 Yum! Sips of cosmic milk make you warmer and sleepier.",
        emoji: "🥛"
      },
      {
        pageNum: 7,
        text: "The sky became darker, and planet Saturn chimed a gentle bell melody across the solar system.",
        interactiveElement: "Listen to Saturn Chim",
        activeLabel: "🔔 'Ding... dong... sleep tight... ding... dong...'",
        emoji: "🔔"
      },
      {
        pageNum: 8,
        text: "Celeste glided effortlessly, letting you float on her back like a leaf on a gentle river.",
        interactiveElement: "Float Celeste",
        activeLabel: "🍃 You feel weightless, just swaying and gliding on the stellar mist.",
        emoji: "🍃"
      },
      {
        pageNum: 9,
        text: "In the distance, the Golden Dream Palace appeared, glowing with a soft, comforting amber light.",
        interactiveElement: "Light up Palace",
        activeLabel: "🏰 The palace windows glowed like sleepy, safe fireplace lights.",
        emoji: "🏰"
      },
      {
        pageNum: 10,
        text: "Celeste landed you safely back in your cozy bed, tucking you in with her stars. Have a magical sleep, sweet child.",
        interactiveElement: "Whisper Goodnight",
        activeLabel: "😴 Celeste flew back to the sky, winking a star at you. Goodnight.",
        emoji: "💤"
      }
    ]
  }
];
