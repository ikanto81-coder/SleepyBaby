// Bedtime story translations for multi-language support (EN, DE, ES, RU, TR)

export interface StoryTranslation {
  title: string;
  description: string;
  pages: {
    pageNum: number;
    text: string;
    interactiveElement?: string;
    activeLabel?: string;
  }[];
}

export const STORY_TRANSLATIONS: Record<string, Record<string, StoryTranslation>> = {
  "kucuk-mavi-bulut": {
    en: {
      title: "Little Blue Cloud",
      description: "Follow the fluffy journey of a small sleepy cloud searching for the softest sky companion.",
      pages: [
        { pageNum: 1, text: "High in the deep blue sky lived a little cloud named Cotton. Cotton was soft, blue, and loved to yawn as the sun went down.", interactiveElement: "Make Cotton Yawn", activeLabel: "🥱 Cotton let out a slow, fluffy yawn: 'Yaaawn! So sleepy...'" },
        { pageNum: 2, text: "The golden sun wrapped itself in orange pajamas and slipped away. Cotton nestled on top of a quiet, peaceful hill.", interactiveElement: "Help Sun Sleep", activeLabel: "☀️ The sun set behind the mountains, leaving a soft purple twilight." },
        { pageNum: 3, text: "A tiny star blinked in the dark sky. Her name was Sparky. She whispered: 'The night is welcoming beautiful dreams.'", interactiveElement: "Wink Back", activeLabel: "✨ Sparky flashed a gentle silver light to protect your room." },
        { pageNum: 4, text: "A mild, warm night breeze began to blow, rocking Cotton like a soft sky cradle. Cotton felt lighter and lighter.", interactiveElement: "Blow Night Breeze", activeLabel: "💨 The warm wind whispered, 'Sssshhh... float away into sleep...'" },
        { pageNum: 5, text: "A tired swallow came and rested right on Cotton's soft back, folding its wings snugly.", interactiveElement: "Pet the Swallow", activeLabel: "🐦 The swallow let out a happy soft 'chirp' and closed its eyes." },
        { pageNum: 6, text: "Deep below, the river looked like a shiny silver belt. It murmured a sweet water song: 'Sleep well, cloud friend...'", interactiveElement: "Listen to River", activeLabel: "🌊 The river water pattern bubbled: 'Splash-splash, drift-drift...'" },
        { pageNum: 7, text: "Grandpa Moon appeared and placed a warm, starry silver blanket over Cotton. It was cozy and snug.", interactiveElement: "Squeeze Blanket", activeLabel: "🌙 The starry blanket feels so warm and protective." },
        { pageNum: 8, text: "In his sleep, Cotton dreamed of floating pastel candies and fluffy sheep dancing on moonbeams.", interactiveElement: "Spin Candies", activeLabel: "🍭 Sweet pink candies spun slowly inside the safe dream." },
        { pageNum: 9, text: "Cotton was completely relaxed. His breath became slow and rhythmic: inhaling peace, exhaling worries.", interactiveElement: "Take Deep Breath", activeLabel: "🌬️ Let's breathe: 'Inhaaaale...' and 'Sssshhh...' feel calm." },
        { pageNum: 10, text: "Cotton fell into a beautiful deep slumber. Close your eyes, sweet child, and find your own cozy cloud.", interactiveElement: "Give Sleepy Kiss", activeLabel: "❤️ Muuahh! Sweet dreams and safe resting all night." }
      ]
    },
    tr: {
      title: "Küçük Mavi Bulut",
      description: "En yumuşak gökyüzü arkadaşını arayan uykulu küçük bir bulutun pamuksu yolculuğuna eşlik edin.",
      pages: [
        { pageNum: 1, text: "Masmavi gökyüzünün derinliklerinde Pamuk adında küçük bir bulut yaşardı. Pamuk yumuşacıktı ve güneş batarken esnemeyi çok severdi.", interactiveElement: "Pamuk'u Esnet", activeLabel: "🥱 Pamuk yavaşça, pofuduk bir şekilde esnedi: 'Yaaawn! Çok uykum geldi...'" },
        { pageNum: 2, text: "Altın renkli güneş turuncu pijamalarını giyip gözden kayboldu. Pamuk sakin ve huzurlu bir tepenin üstüne yerleşti.", interactiveElement: "Güneşi Uyut", activeLabel: "☀️ Güneş dağların ardında battı ve geriye yumuşak mor bir akşam alacası bıraktı." },
        { pageNum: 3, text: "Karanlık gökyüzünde küçük bir yıldız göz kırptı. Adı Pırıltı'ydı. Fısıldadı: 'Gece en güzel rüyaları davet ediyor.'", interactiveElement: "Göz Kırp", activeLabel: "✨ Pırıltı odanı sakinleştirmek ve korumak için hafif gümüş bir ışık saçtı." },
        { pageNum: 4, text: "Hafif, ılık bir gece rüzgarı esmeye başladı, Pamuk'u yumuşak gökyüzü beşiği gibi salladı. Pamuk hafiflediğini hissetti.", interactiveElement: "Ilık Rüzgar Estir", activeLabel: "💨 Ilık rüzgar fısıldadı: 'Şşşşt... uykunun kollarına gidin...'" },
        { pageNum: 5, text: "Yorgun bir kır kırlangıcı geldi ve tam Pamuk'un yumuşak sırtına kondu, kanatlarını sevgiyle katladı.", interactiveElement: "Kırlangıcı Sev", activeLabel: "🐦 Kırlangıç mutlu bir 'cik' sesi çıkarttı ve gözlerini kapadı." },
        { pageNum: 6, text: "Aşağılarda nehir, parlak gümüş bir kemer gibi görünüyordu. Su şarkısı mırıldandı: 'İyi uykular, bulut dostum...'", interactiveElement: "Nehri Dinle", activeLabel: "🌊 Nehir suyu mırıldandı: 'Şırıl-şırıl, mışıl-mışıl...'" },
        { pageNum: 7, text: "Ay Dede belirdi ve Pamuk'un üstüne sıcak, yıldızlı gümüş bir battaniye örttü. Çok rahat ve sıcacıktı.", interactiveElement: "Battaniyeyi Sıkıştır", activeLabel: "🌙 Yıldızlı battaniye sıcacık ve koruyucu bir his veriyor." },
        { pageNum: 8, text: "Pamuk uykusunda pastel renkli uçuşan şekerler ve ay ışığında dans eden pofuduk koyunlar gördü.", interactiveElement: "Şekerleri Döndür", activeLabel: "🍭 Tatlı pembe şekerler güvenli rüyanın içinde yavaşça döndü." },
        { pageNum: 9, text: "Pamuk tamamen rahatlamıştı. Nefesi yavaşladı ve ritmikleşti: huzuru içine çekiyor, kaygıları dışarı üflüyordu.", interactiveElement: "Derin Nefes Al", activeLabel: "🌬️ Nefes alalım: 'Nefes-aaal...' ve 'Şşşşşt...' huzuru hisset." },
        { pageNum: 10, text: "Pamuk derin ve güzel bir uykuya daldı. Gözlerini kapat sevimli yavru, sen de kendi pofuduk bulutuna kavuş.", interactiveElement: "Uykucu Öpücüğü Ver", activeLabel: "❤️ Muuahh! Tüm gece boyunca tatlı rüyalar ve güvenli uykular." }
      ]
    },
    de: {
      title: "Kleine Blaue Wolke",
      description: "Folgen Sie der flauschigen Reise einer kleinen schläfrigen Wolke auf der Suche nach Ruhe.",
      pages: [
        { pageNum: 1, text: "Hoch im tiefblauen Himmel lebte eine kleine Wolke namens Wolki. Sie gähnte gerne, wenn die Sonne unterging.", interactiveElement: "Wolki gähnen lassen", activeLabel: "🥱 Wolki gähnte langsam: 'Yaaawn! So müde...'" },
        { pageNum: 2, text: "Die goldene Sonne schlüpfte in ihren Schlafanzug und ging. Wolki legte sich auf einen ruhigen Hügel.", interactiveElement: "Sonne schlafen legen", activeLabel: "☀️ Die Sonne ging hinter den Bergen unter und hinterließ lila Licht." },
        { pageNum: 3, text: "Ein winziger Stern namens Funke blinkte am dunklen Himmel. Er flüsterte: 'Die Nacht bringt schöne Träume.'", interactiveElement: "Zurückblinken", activeLabel: "✨ Funke leuchtete sanft, um dein Zimmer zu beschützen." },
        { pageNum: 4, text: "Eine milde Nachtbrise wehte und wiegte Wolki wie eine Wiege. Er fühlte sich immer leichter.", interactiveElement: "Brise wehen lassen", activeLabel: "💨 Der warme Wind flüsterte: 'Sssshhh... gleite sanft in den Schlaf...'" },
        { pageNum: 5, text: "Eine müde Schwalbe kam und ruhte sich auf Wolkis weichem Rücken aus und schloss die Augen.", interactiveElement: "Schwalbe streicheln", activeLabel: "🐦 Die Schwalbe machte ein leises 'Chirp' und schlief ein." },
        { pageNum: 6, text: "Tief unten murmelte der Fluss ein süßes Wasserlied: 'Schlaf gut, kleiner Wolkenfreund...'", interactiveElement: "Fluss lauschen", activeLabel: "🌊 Das Flusswasser floss sanft dahin: 'Plätsch-plätsch...'" },
        { pageNum: 7, text: "Der Mond erschien und legte eine warme, silberne Sternendecke über Wolki. Es war sehr gemütlich.", interactiveElement: "Decke anpassen", activeLabel: "🌙 Die Sternendecke fühlt sich warm und schützend an." },
        { pageNum: 8, text: "Im Schlaf träumte Wolki von schwebenden bunten Bonbons und flauschigen tanzenden Schafen.", interactiveElement: "Bonbons drehen", activeLabel: "🍭 Süße Bonbons drehten sich langsam im sicheren Traum." },
        { pageNum: 9, text: "Wolki war völlig entspannt. Sein Atem wurde langsam: Frieden einatmen, Sorgen ausatmen.", interactiveElement: "Tief durchatmen", activeLabel: "🌬️ Lass uns atmen: 'Einatmen...' und 'Ausatmen...' Ruhe spüren." },
        { pageNum: 10, text: "Wolki schlief tief ein. Schließe deine Augen, süßes Kind, und finde deine eigene gemütliche Wolke.", interactiveElement: "Schlafkuss geben", activeLabel: "❤️ Muuahh! Träum süß und schlaf gut die ganze Nacht." }
      ]
    },
    es: {
      title: "Pequeña Nube Azul",
      description: "Siga el viaje esponjoso de una nubecita dormilona que busca al compañero de descanso más suave.",
      pages: [
        { pageNum: 1, text: "En el cielo azul profundo vivía una nubecita llamada Algodón. Le encantaba bostezar al atardecer.", interactiveElement: "Hacer Bostezar", activeLabel: "🥱 Algodón bostezó suavemente: '¡Yaaawn! Tengo mucho sueño...'" },
        { pageNum: 2, text: "El sol dorado se vistió con su pijama naranja y se fue. Algodón se acomodó sobre una colina tranquila.", interactiveElement: "Apagar el Sol", activeLabel: "☀️ El sol se ocultó tras las montañas, dejando un suave tono púrpura." },
        { pageNum: 3, text: "Una pequeña estrella llamada Centella brilló: 'La noche te invita a soñar hermoso'.", interactiveElement: "Guiñar el Ojo", activeLabel: "✨ Centella brilló con una luz de plata para proteger tu habitación." },
        { pageNum: 4, text: "Una suave brisa nocturna sopló, meciendo a Algodón como una cuna. Se sintió ligero.", interactiveElement: "Soplar Brisa", activeLabel: "💨 El viento susurró: 'Sssshhh... déjate llevar por el sueño...'" },
        { pageNum: 5, text: "Una golondrina cansada se posó en la espalda de Algodón, plegando sus alas con cariño.", interactiveElement: "Acariciar Ave", activeLabel: "🐦 La golondrina dio un tierno 'pío' y cerró los ojos." },
        { pageNum: 6, text: "Abajo, el río cantaba una melodía de agua: 'Duerme bien, amigo de las alturas...'", interactiveElement: "Escuchar Río", activeLabel: "🌊 El agua susurró: 'Gulu-gulu, duerme tranquilo...'" },
        { pageNum: 7, text: "El Abuelo Luna apareció y cubrió a Algodón con una manta plateada de estrellas. Era muy cálida.", interactiveElement: "Arropar Manta", activeLabel: "🌙 La manta de estrellas te hace sentir seguro y abrigado." },
        { pageNum: 8, text: "Algodón soñó con dulces flotantes de colores y ovejitas que bailaban bajo la luna.", interactiveElement: "Girar Dulces", activeLabel: "🍭 Dulces de color rosa giraron suavemente en el sueño feliz." },
        { pageNum: 9, text: "Algodón estaba relajado. Respiraba despacio, inhalando paz y exhalando cualquier temor.", interactiveElement: "Respirar Profundo", activeLabel: "🌬️ Vamos a respirar: 'Inhala...' y 'Exhala...' siente la calma." },
        { pageNum: 10, text: "Algodón cayó en un sueño profundo. Cierra tus ojos, lindo niño, y busca tu propia nube suave.", interactiveElement: "Dar un Beso", activeLabel: "❤️ ¡Muuahh! Que tengas dulces sueños y descanses toda la noche." }
      ]
    },
    ru: {
      title: "Маленькое Синее Облачко",
      description: "Следуйте за пушистым путешествием сонного облачка в поисках самого мягкого ночного уюта.",
      pages: [
        { pageNum: 1, text: "Высоко в синем небе жило облачко по имени Пушок. Оно было мягким и любило зевать на закате.", interactiveElement: "Заставить зевнуть", activeLabel: "🥱 Пушок сладко зевнул: 'Оооохохо! Спать хочется...'" },
        { pageNum: 2, text: "Золотое солнце надело оранжевую пижаму и скрылось. Пушок устроился на тихом холме.", interactiveElement: "Уложить солнце", activeLabel: "☀️ Солнце зашло за горы, оставив нежные фиолетовые сумерки." },
        { pageNum: 3, text: "Маленькая звезда по имени Искорка замигала: 'Ночь приглашает тебя в гости к добрым снам.'", interactiveElement: "Подмигнуть", activeLabel: "✨ Искорка засияла серебряным светом, оберегая твой сон." },
        { pageNum: 4, text: "Подул легкий ночной ветерок, укачивая Пушка словно колыбелька. Он становился все легче.", interactiveElement: "Подуть ветерком", activeLabel: "💨 Теплый ветер прошептал: 'Шшшш... засыпай беззаботно...'" },
        { pageNum: 5, text: "Уставшая ласточка прилетела и уселась прямо на мягкую спинку Пушка, сложив крылышки.", interactiveElement: "Погладить птицу", activeLabel: "🐦 Ласточка тихонько чирикнула и закрыла глазки." },
        { pageNum: 6, text: "Внизу река блестела как серебряный пояс. Она напевала: 'Спи крепко, речной друг...'", interactiveElement: "Слушать речку", activeLabel: "🌊 Вода струилась: 'Жур-жур, пора засыпать...'" },
        { pageNum: 7, text: "Дедушка Месяц укрыл Пушка теплым серебряным одеялом из звезд. Стало так уютно.", interactiveElement: "Поправить одеяло", activeLabel: "🌙 Звездное одеяльце дарит тепло и чувство безопасности." },
        { pageNum: 8, text: "Во сне Пушок увидел летающие конфеты и пушистых овечек, танцующих на лунных лучах.", interactiveElement: "Запустить конфетки", activeLabel: "🍭 Розовые леденцы закружились в сказочном хороводе." },
        { pageNum: 9, text: "Пушок полностью расслабился. Дыхание стало ровным: вдох покоя, выдох волнений.", interactiveElement: "Сделать вдох", activeLabel: "🌬️ Подышим: 'Вдооох...' и 'Шшшш...' почувствуй мир." },
        { pageNum: 10, text: "Пушок погрузился в чудесный сон. Закрывай глазки, малыш, пусть твое облачко унесет тебя в сказку.", interactiveElement: "Поцеловать облако", activeLabel: "❤️ Целую! Спи сладко и пусть тебе приснятся отличные сны." }
      ]
    }
  },
  "ormanin-sirri": {
    en: {
      title: "The Secret of the Forest",
      description: "Discover the magical nighttime secret that brings a gentle sleeping whisper to all forest creatures.",
      pages: [
        { pageNum: 1, text: "The secret forest was full of towering pine trees. Every night, the leaves whispered a special calming secret.", interactiveElement: "Shake the Pine", activeLabel: "🌲 The needles whispered: 'Hush now... time to sleep...'" },
        { pageNum: 2, text: "Rusty the little red squirrel climbed into his cozy hollow and covered his tail like a warm winter scarf.", interactiveElement: "Fluff Squirrel Nest", activeLabel: "🐿️ Rusty tucked his nose into his fluffy tail, ready for dreams." },
        { pageNum: 3, text: "In the center of the forest, the golden water lily opened its petals, releasing a beautiful vanilla perfume.", interactiveElement: "Tickle the Lily", activeLabel: "🪷 The lily glowed with a soft golden light, lighting up the lake." },
        { pageNum: 4, text: "Fireflies sparkled in the thick forest bushes. They spun around like tiny glowing night lanterns.", interactiveElement: "Turn on Fireflies", activeLabel: "✨ The fireflies blinked together: bright, dim, bright, dim..." },
        { pageNum: 5, text: "The ancient oak tree breathed slowly, sending warm woodland air across the grassy plains.", interactiveElement: "Breathe with Oak", activeLabel: "🌳 The oak sighed: 'Wuuuush... peace to the forest...'" },
        { pageNum: 6, text: "A family of tiny hedgehogs nested beneath the mushrooms, rubbing their wet noses to say goodnight.", interactiveElement: "Touch Hedgehog Nose", activeLabel: "🦔 The hedgehogs curled into sleepy, safe little round balls." },
        { pageNum: 7, text: "A gentle blue moth settled on top of an organic sleeping flower, perfectly hidden from the wind.", interactiveElement: "Fold Petals", activeLabel: "🌺 The flower closed its petals to shield the moth with love." },
        { pageNum: 8, text: "The white forest daisies folded their petals and nodded, listening to the secret bedtime tune.", interactiveElement: "Quiet Daisies", activeLabel: "🌼 The daisies folded their leaves together and fell asleep." },
        { pageNum: 9, text: "A comforting lavender-scented mist crept over the moss, wrapping the entire forest in a giant dream.", interactiveElement: "Spread sleep mist", activeLabel: "🌫️ The purple mist covers everything like an eye mask." },
        { pageNum: 10, text: "The entire forest was now asleep. The secret was simple: everyone is safe and cozy. Close your eyes.", interactiveElement: "Listen to Silence", activeLabel: "😴 Mışıl mışıl... Everyone is sleeping peacefully now." }
      ]
    },
    tr: {
      title: "Ormanın Sırrı",
      description: "Tüm orman canlılarına narin bir uyku fısıltısı getiren mistik gece sırrını keşfedin.",
      pages: [
        { pageNum: 1, text: "Gizemli orman dev çam ağaçlarıyla kaplıydı. Her gece, yapraklar dinlendirici özel bir sır fısıldardı.", interactiveElement: "Çamı Salla", activeLabel: "🌲 Çam iğneleri fısıldadı: 'Şşşt sakin ol... uyku vakti geldi...'" },
        { pageNum: 2, text: "Sevimli kızıl sincap çıt pıt, yuvasındaki yaprakları kabarttı ve kuyruğunu sıcak bir atkı gibi üstüne örttü.", interactiveElement: "Sincap Yuvasını Koru", activeLabel: "🐿️ Sincap burnunu kuyruğuna kıvırdı, tatlı düşlere hazırlandı." },
        { pageNum: 3, text: "Ormanın ortasında, altın renkli su nilüferi yapraklarını açtı, etrafa nefis bir vanilya kokusu saçtı.", interactiveElement: "Nilüfere Dokun", activeLabel: "🪷 Nilüfer loş altın bir ışıkla parlayarak gölü aydınlattı." },
        { pageNum: 4, text: "Ateş böcekleri çalıların arkasında pırıl pırıl parladı. Küçük gökyüzü fenerleri gibi döndüler.", interactiveElement: "Böcekleri Aç", activeLabel: "✨ Ateş böcekleri ritmik şekilde yandı söndü, göz yormayan ışıklar saçtı." },
        { pageNum: 5, text: "Yaşlı meşe ağacı derin nefes aldı, yapraklardan çimenlere sıcak orman havası yaydı.", interactiveElement: "Meşeyle Nefes Al", activeLabel: "🌳 Büyük meşe iç çekti: 'Vooshhh... Tüm ormana huzur gelsin...'" },
        { pageNum: 6, text: "Mantarın altında uyuyan kirpi ailesi burunlarını sürterek iyi geceler diledi.", interactiveElement: "Kirpinin Burnuna Dokun", activeLabel: "🦔 Kirpiler mışıl mışıl uyuyan yumuşak toplara dönüştü." },
        { pageNum: 7, text: "Mavi bir gece güvesi, rüzgardan korunan uyuyan bir çiçeğin göğsüne sakince kondu.", interactiveElement: "Yaprakları Düzenle", activeLabel: "🌺 Çiçek yapraklarını kapatarak mavi güveyi şefkatle sarmaladı." },
        { pageNum: 8, text: "Beyaz orman papatyaları taç yapraklarını katlayıp başlarını öne eğdiler, uyku vaktini biliyorlardı.", interactiveElement: "Papatyayı Kapat", activeLabel: "🌼 Papatya yaprakları kapandı, doğa sessizleşti." },
        { pageNum: 9, text: "Mis kokulu bir sis perdesi yosunların üstüne serildi, ormanı kucaklayan sıcak yorgan oldu.", interactiveElement: "Sisi Yay", activeLabel: "🌫️ Mor sis ormanın üstünü örttü, her pürüzü dinlendirdi." },
        { pageNum: 10, text: "Tüm orman artık uykudaydı. Sır basitti: Sen tamamen güvendesin ve çok seviliyorsun. Gözlerini kapat.", interactiveElement: "Sessizliği Hisset", activeLabel: "😴 Mışıl mışıl... İyi geceler orman sakinleri, iyi geceler sevimli bebek." }
      ]
    },
    de: {
      title: "Das Geheimnis des Waldes",
      description: "Entdecken Sie das geheimnisvolle Flüstern des schlafenden Waldes bei Nacht.",
      pages: [
        { pageNum: 1, text: "Der geheimnisvolle Wald war voller Tannen. Jede Nacht flüsterten sie ein beruhigendes Geheimnis.", interactiveElement: "Tanne schütteln", activeLabel: "🌲 Die Nadeln flüsterten: 'Ruhig jetzt... Schlafenszeit...'" },
        { pageNum: 2, text: "Das kleine Eichhörnchen kletterte in seine Höhle und rollte seinen Schwanz wie einen Schal auf.", interactiveElement: "Nest weicher machen", activeLabel: "🐿️ Es kuschelte sich warm ein, bereit für süße Träume." },
        { pageNum: 3, text: "In der Mitte des Waldes öffnete die goldene Seerose ihre Blätter und duftete nach Vanille.", interactiveElement: "Seerose berühren", activeLabel: "🪷 Die Seerose leuchtete in sanftem Gold über dem See." },
        { pageNum: 4, text: "Glühwürmchen funkelten in den Büschen und schwebten wie kleine Laternen.", interactiveElement: "Glühwürmchen anschalten", activeLabel: "✨ Die kleinen Lichter blinkten sanft: an, aus, an, aus..." },
        { pageNum: 5, text: "Die alte Eiche atmete langsam ein und schickte warme Waldluft über die Wiese.", interactiveElement: "Eiche einatmen lassen", activeLabel: "🌳 Die Eiche seufzte: 'Wuuuush... Frieden für den Wald...'" },
        { pageNum: 6, text: "Eine kleine Igel-Familie unter den Pilzen kuschelte sich zusammen, um gute Nacht zu sagen.", interactiveElement: "Igel-Nase berühren", activeLabel: "🦔 Die Igel rollten sich zu friedlichen kleinen Kugeln zusammen." },
        { pageNum: 7, text: "Ein blauer Falter setzte sich auf eine schlafende Blume, gut geschützt vor dem Wind.", interactiveElement: "Blume schließen", activeLabel: "🌺 Die Blume schloss ihre Blätter, um den Falter zu wärmen." },
        { pageNum: 8, text: "Die Gänseblümchen falteten ihre Blätter und nickten zum sanften Schlaflied des Waldes.", interactiveElement: "Blumen beruhigen", activeLabel: "🌼 Die Gänseblümchen schliefen fest ein." },
        { pageNum: 9, text: "Ein beruhigender Lavendelnebel legte sich über das Moos wie eine schützende Decke.", interactiveElement: "Nebel ausbreiten", activeLabel: "🌫️ Der lila Nebel deckt den Wald gemütlich zu." },
        { pageNum: 10, text: "Der ganze Wald schlief nun. Schließe deine Augen und schlafe tief und fest.", interactiveElement: "Stille genießen", activeLabel: "😴 Mışıl mışıl... Alles schläft ruhig im Wald." }
      ]
    },
    es: {
      title: "El Secreto del Bosque",
      description: "Descubra el misterioso secreto nocturno que trae un dulce susurro de paz a todo el bosque.",
      pages: [
        { pageNum: 1, text: "El bosque secreto estaba lleno de pinos altos. Cada noche, las ramas contaban un secreto de paz.", interactiveElement: "Mover el Pino", activeLabel: "🌲 El pino susurró: 'Silencio ya... es hora de descansar...'" },
        { pageNum: 2, text: "La pequeña ardilla subió a su nido de árbol y se tapó con su cola suave como bufanda.", interactiveElement: "Acomodar Nido", activeLabel: "🐿️ Se acurrucó con la punta de su cola, lista para soñar." },
        { pageNum: 3, text: "En medio del bosque, la flor de loto dorada se abrió en el agua liberando aroma a vainilla.", interactiveElement: "Tocar el Loto", activeLabel: "🪷 El loto brilló con una luz de oro templada sobre el lago." },
        { pageNum: 4, text: "Las luciérnagas brillaban tras las flores, flotando como pequeñas velas al viento.", interactiveElement: "Prender Luciérnagas", activeLabel: "✨ Las luces de las hadas del bosque parpadean muy suave..." },
        { pageNum: 5, text: "El viejo roble suspiró despacio enviando aire cálido sobre los campos de musgo.", interactiveElement: "Respirar con Roble", activeLabel: "🌳 El roble dijo: 'Wuuuush... duerman tranquilos...'" },
        { pageNum: 6, text: "Una familia de erizos se escondió bajo las setas, frotando sus narices con amor.", interactiveElement: "Acariciar Erizo", activeLabel: "🦔 Los erizos se convirtieron en redonditas bolitas calientes." },
        { pageNum: 7, text: "Una mariposa azul de noche descansó en el corazón de una flor cansada de la brisa.", interactiveElement: "Cerrar la Flor", activeLabel: "🌺 La flor la abrazó cerrando sus pétalos con ternura." },
        { pageNum: 8, text: "Las margaritas del bosque se cerraron suavemente, listas para descansar.", interactiveElement: "Margaritas a dormir", activeLabel: "🌼 Las margaritas cerraron sus ojitos blancos." },
        { pageNum: 9, text: "Una manta de niebla con olor a lavanda bajó para abrigar todo el bosque.", interactiveElement: "Llamar a la Niebla", activeLabel: "🌫️ La niebla morada cubre todo el monte como un abrigo." },
        { pageNum: 10, text: "Todo el bosque duerme ya con un secreto: estás seguro y protegido. Cierra los ojos.", interactiveElement: "Oír el Silencio", activeLabel: "😴 Mışıl mışıl... Duerme tranquilo, lindo bebé." }
      ]
    },
    ru: {
      title: "Тайна Леса",
      description: "Откройте для себя лесную тайну, дарующую сладкий и безмятежный сон всем зверятам.",
      pages: [
        { pageNum: 1, text: "Секретный лес был полон высоких сосен. По ночам веточки шептали успокаивающую тайну.", interactiveElement: "Покачать сосну", activeLabel: "🌲 Сосны прошептали: 'Тшшш... время отдыхать...'" },
        { pageNum: 2, text: "Маленький бельчонок забрался в дупло и укрылся пушистым хвостиком как теплым шарфом.", interactiveElement: "Укрыть белку", activeLabel: "🐿️ Бельчонок спрятал носик в шерстку, готовый к приятным снам." },
        { pageNum: 3, text: "В самом центре леса золотая кувшинка раскрылась на воде, благоухая нежным ароматом ванили.", interactiveElement: "Тронуть кувшинку", activeLabel: "🪷 Кувшинка загорелась мягким светом, осветив весь пруд." },
        { pageNum: 4, text: "Светлячки замерцали в лесных кустах, кружась в тихом и медленном танце.", interactiveElement: "Включить светлячков", activeLabel: "✨ Огоньки горят так уютно и не слепят сонные глазки." },
        { pageNum: 5, text: "Старый дуб медленно выдохнул, разнося теплое лесное дыхание по траве.", interactiveElement: "Дышать с дубом", activeLabel: "🌳 Дуб вздохнул: 'Шууух... покой всему лесу...'" },
        { pageNum: 6, text: "Семья маленьких ежиков устроилась под грибом, целуя друг друга в носики перед сном.", interactiveElement: "Тронуть носик ежа", activeLabel: "🦔 Ежики свернулись в сонные уютные клубочки." },
        { pageNum: 7, text: "Ночной мотылек опустился на спящий цветок, надежно укрывшись от прохладного ветра.", interactiveElement: "Закрыть лепестки", activeLabel: "🌺 Цветок прикрыл мотылька своими лепестками как домиком." },
        { pageNum: 8, text: "Лесные ромашки закрыли свои бутоны и склонили головки, засыпая под колыбельную.", interactiveElement: "Спрятать ромашки", activeLabel: "🌼 Белые лепестки ромашек закрылись до самого утра." },
        { pageNum: 9, text: "Лавандовый туман мягко опустился на мох, укрывая лесную поляну воздушным одеялом.", interactiveElement: "Напустить туман", activeLabel: "🌫️ Туман спрятал все заботы прошедшего дня." },
        { pageNum: 10, text: "Весь таинственный лес уснул. Закрывай глазки, ты в абсолютной безопасности. Спи сладко.", interactiveElement: "Слушать тишину", activeLabel: "😴 Мışıl mışıl... Лес спит, засыпает и наш любимый малыш." }
      ]
    }
  },
  "yildiz-tozu": {
    en: {
      title: "Star Dust",
      description: "Join the magical dream fairy scattering vanilla-scented glowing sprinkles over sleepy heads.",
      pages: [
        { pageNum: 1, text: "Fairy Lily lived in a tulip cottage. Her job was to scatter magical sleeping star dust to help everyone dream.", interactiveElement: "Wave Fairy Wand", activeLabel: "🪄 The wand went: 'Ting-ting!' spreading beautiful pink rays." },
        { pageNum: 2, text: "The sleepless fox was turning in his bed. Lily flew over and hovered above his nose.", interactiveElement: "Calm the Fox", activeLabel: "🦊 The fox smiled: 'Fairy dust feels so cool and relaxing.'" },
        { pageNum: 3, text: "Lily opened her silver bag and took out a handful of vanilla star dust, throwing it high.", interactiveElement: "Throw Star Dust", activeLabel: "✨ Shimmering sparkles descended slowly like warm golden sand." },
        { pageNum: 4, text: "The fox yawned and slept. Lily flapped her wings, heading over to her next friend, the bunny.", interactiveElement: "Flap Fairy Wings", activeLabel: "🦋 Flutter-flutter... Her wings produced a fresh floral scent." },
        { pageNum: 5, text: "Bunny was still full of active thoughts. Lily whispered a beautiful sleep melody in his long ears.", interactiveElement: "Hum a Melody", activeLabel: "🎶 'Sleep, sleep little bunny... sweet carrots in your dreams...'" },
        { pageNum: 6, text: "Inside the big wooden cave, the brown bear was sleeping but needed cozy lights so he wouldn't worry.", interactiveElement: "Check the Cave", activeLabel: "🐻 Bear was snoring peacefully: 'Hrr-pff... Hrr-pff...'" },
        { pageNum: 7, text: "Lily attached sparkling little dream stars directly onto the dark cave ceiling.", interactiveElement: "Light Ceiling Stars", activeLabel: "🌟 The cave illuminated with a relaxing, safe amber light." },
        { pageNum: 8, text: "The owl opened one eye on the oak branch. Lily gently stroked his feathers until he yawned.", interactiveElement: "Stroke the Owl", activeLabel: "🦉 The owl said 'Hoot-hoot...' and drifted into sleep." },
        { pageNum: 9, text: "With all forest friends asleep, Lily lay down on her comfortable bed made of a large pink rose petal.", interactiveElement: "Tuck Lily in Rose", activeLabel: "🌹 The rose petal feels soft and smells wonderful." },
        { pageNum: 10, text: "The dream sprinkles are now entering your room, filling it with safety. Sleep tight, little angel.", interactiveElement: "Receive Sprinkle", activeLabel: "💖 Sparkling star dust was placed on your pillow. Sleep well." }
      ]
    },
    tr: {
      title: "Yıldız Tozu",
      description: "Uykulu gözlerin üzerine vanilya kokulu parlak rüya pırıltıları saçan sihirli peri dünyasına katılın.",
      pages: [
        { pageNum: 1, text: "Lale evinde yaşayan Peri Melis'in sihirli görevi, uykusu kaçan tatlı dostlara parıltılı uyku yıldız tozları dağıtmaktı.", interactiveElement: "Asayı Salla", activeLabel: "🪄 Sihirli küçük asa parıldadı: 'Ting-ting!' Pembe ışıklar yayıldı." },
        { pageNum: 2, text: "Uykusu kaçan tilki yatağında dönüp duruyordu. Melis hafifçe süzülerek tilkinin yanına uçtu.", interactiveElement: "Tilkiyi Yatıştır", activeLabel: "🦊 Tilki gözlerini dinlendirdi: 'Bu yıldız tozu çok rahatlatıcı ve yumuşak...'" },
        { pageNum: 3, text: "Melis gümüş kesesinden biraz vanilya kokulu yıldız tozu çıkardı, hafifçe havaya üfledi.", interactiveElement: "Tozları Savur", activeLabel: "✨ Pırıl pırıl parıldayan döküntüler yumuşak kum gibi tilkinin üstüne serildi." },
        { pageNum: 4, text: "Tilki esneyerek uyudu. Melis kanatlarını sarsarak bir sonraki arkadaşı, küçük tavşana doğru yola çıktı.", interactiveElement: "Kanat Çırp", activeLabel: "🦋 Pır pır pır... Peri kanatları havada minik serin çiçek kokuları bıraktı." },
        { pageNum: 5, text: "Tavşan koşuşturmaktan hala heyecanlıydı. Melis onun uzun kulaklarına tatlı, sessiz bir melodi fısıldadı.", interactiveElement: "Melodi Fısılda", activeLabel: "🎶 'Uyu uyu tatlı tavşancık... düşünde leziz havuçları kovala...'" },
        { pageNum: 6, text: "Büyük koca ayının mağarasına girdiler. Ayının mışıl mışıl uyuması ama karanlıkta kalmaması gerekiyordu.", interactiveElement: "Mağarayı Kontrol Et", activeLabel: "🐻 Ayıcık horul horul uyuyor: 'Hrr-pff... Hrr-pff...'" },
        { pageNum: 7, text: "Melis mağaranın tavanına parlayan sihirli uyku yıldızları yerleştirdi.", interactiveElement: "Tavana Yıldız Yak", activeLabel: "🌟 Karanlık mağara pırıl pırıl, çocukların gece lambası gibi parladı." },
        { pageNum: 8, text: "Bebek baykuş tüy yumağı ormandan göz kırpıyordu. Peri onun göz kapaklarını okşayıp esnetti.", interactiveElement: "Baykuşu Okşa", activeLabel: "🦉 Baykuş usulca gözlerini yumdu ve 'Gugu...' deyip uyudu." },
        { pageNum: 9, text: "Ormandaki tüm dostlar uyuyunca Melis de kendi yumuşacık gül yaprağından yatağına uzandı.", interactiveElement: "Güle Yerleş", activeLabel: "🌹 Gül yaprağı mis gibi kokuyor, beşik gibi sallanıyor." },
        { pageNum: 10, text: "Yıldız tozları şimdi senin odana doğru süzülüyor, başucuna dökülüyor. Sevgiyle uyu minik melek.", interactiveElement: "Tozu Kabul Et", activeLabel: "💖 Yıldız tozları yastığına kondu. Güvenle uyu, iyi geceler." }
      ]
    },
    de: {
      title: "Sternenstaub",
      description: "Folgen Sie der Traumfee, die vanilleduftenden Sternenstaub auf müde Köpfe streut.",
      pages: [
        { pageNum: 1, text: "Die kleine Fee Lily wohnte in einer Tulpe. Sie streute glänzenden Traumstaub für alle aus.", interactiveElement: "Zauberstab schwingen", activeLabel: "🪄 Der Stab machte: 'Ting-ting!' und streute lila Licht." },
        { pageNum: 2, text: "Der schlaflose Fuchs rollte sich unruhig hin und her. Lily schwebte über seiner Nase.", interactiveElement: "Fuchs beruhigen", activeLabel: "🦊 Der Fuchs lächelte: 'Dieser Traumstaub riecht so gut!'" },
        { pageNum: 3, text: "Lily öffnete ihre Tasche und warf eine Handvoll Vanille-Sternenstaub hoch in die Luft.", interactiveElement: "Staub streuen", activeLabel: "✨ Goldener Staub glänzte am Himmel wie weicher warmer Sand." },
        { pageNum: 4, text: "Der Fuchs schlief sofort ein. Lily flog weiter zum kleinen Hasen.", interactiveElement: "Flügel schlagen", activeLabel: "🦋 Ihre Flügel machten ein leises Flattern im Wind." },
        { pageNum: 5, text: "Der Hase war noch ganz unruhig. Lily summte ein süßes Schlaflied in seine Ohren.", interactiveElement: "Lied summen", activeLabel: "🎶 'Schlaf, schlaf kleiner Hase... träum von Karotten...'" },
        { pageNum: 6, text: "In der großen Bärenhöhle schlief der Bär, brauchte aber gemütliches Licht.", interactiveElement: "Höhle prüfen", activeLabel: "🐻 Der Bär schnarchte laut: 'Hrr-pff... Hrr-pff...'" },
        { pageNum: 7, text: "Lily zauberte kleine leuchtende Sterne direkt an die Decke der Bärenhöhle.", interactiveElement: "Sterne anzünden", activeLabel: "🌟 Die Höhle wurde wunderschön warm erleuchtet." },
        { pageNum: 8, text: "Die kleine Eule auf dem Ast gähnte laut, als Lily ihre weichen Federn strich.", interactiveElement: "Eule streicheln", activeLabel: "🦉 Die Eule machte 'Uhu...' und schlief selig ein." },
        { pageNum: 9, text: "Als alle schliefen, legte sich Lily auf ein weiches Bett aus einem Rosenblatt.", interactiveElement: "Rosenbett spüren", activeLabel: "🌹 Das Rosenblatt duftet fein und ist wunderbar weich." },
        { pageNum: 10, text: "Der Sternenstaub kommt nun in dein Zimmer. Schlafe gut und träume süß, kleiner Engel.", interactiveElement: "Staub annehmen", activeLabel: "💖 Sternenstaub liegt auf deinem Kopfkissen. Gute Nacht." }
      ]
    },
    es: {
      title: "Polvo de Estrellas",
      description: "Acompañe al hada mágica que esparce dulces chispas de vainilla sobre los ojos cansados.",
      pages: [
        { pageNum: 1, text: "El hada Lily vivía en un tulipán. Llenaba los cielos de polvo de estrellas para dar sueños lindos.", interactiveElement: "Mover Varita", activeLabel: "🪄 La varita sonó: '¡Ting-ting!' y soltó chispas rosas." },
        { pageNum: 2, text: "El zorro desvelado no paraba de dar vueltas. Lily flotó despacio sobre su hocico.", interactiveElement: "Calmar al Zorro", activeLabel: "🦊 El zorro sonrió: 'Este polvo mágico huele muy rico...'" },
        { pageNum: 3, text: "Lily abrió su saquito plateado y lanzó un puñado de polvo de vainilla al aire.", interactiveElement: "Lanzar Polvo", activeLabel: "✨ Las chispas flotaron como suave arena dorada." },
        { pageNum: 4, text: "El zorro se durmió de inmediato. Lily voló con prisa a casa de su amigo el conejo.", interactiveElement: "Aletear Despacio", activeLabel: "🦋 Sus alas crearon un viento con aroma de flores silvestres." },
        { pageNum: 5, text: "El conejo seguía pensando. Lily le susurró una suave canción al oído.", interactiveElement: "Cantar una Nana", activeLabel: "🎶 'Duerme, duerme conejito... sueña con dulces zanahorias...'" },
        { pageNum: 6, text: "Dentro de la cueva del oso grande, este dormía profundamente pero necesitaba luz tibia.", interactiveElement: "Ver la Cueva", activeLabel: "🐻 El oso roncaba despacio: 'Hrr-pff... Hrr-pff...'" },
        { pageNum: 7, text: "Lily colocó estrellitas de ensueño directamente en el techo de piedra de la cueva.", interactiveElement: "Encender Estrellas", activeLabel: "🌟 La cueva brilló con una luz ámbar muy relajante." },
        { pageNum: 8, text: "El búho abrió un ojo en la rama de roble. Lily acarició sus plumas hasta que bostezó.", interactiveElement: "Acariciar Búho", activeLabel: "🦉 El búho de felpa cerró los ojos y se durmió." },
        { pageNum: 9, text: "Con el bosque dormido, Lily se acostó en un pétalo de rosa rosa gigante.", interactiveElement: "Cuna de Rosa", activeLabel: "🌹 El pétalo huele delicioso y es suave como el algodón." },
        { pageNum: 10, text: "El polvo de estrellas del hada llega ya a tu cama. Duerme bien, angelito hermoso.", interactiveElement: "Recibir Magia", activeLabel: "💖 Siente la magia brillar bajo tu almohada. Buenas noches." }
      ]
    },
    ru: {
      title: "Звездная Пыль",
      description: "Отправьтесь вместе с сонной феей рассыпать ванильную сияющую пыльцу над спящей поляной.",
      pages: [
        { pageNum: 1, text: "Фея Лили жила в домике-тюльпане. Она рассыпала волшебную пыльцу, чтобы деткам снились сны.", interactiveElement: "Взмахнуть палочкой", activeLabel: "🪄 Палочка сверкнула: 'Дзинь-дзинь!' выпуская розовые лучики." },
        { pageNum: 2, text: "Уставший лисенок никак не мог уснуть. Лили подлетела к его носику.", interactiveElement: "Успокоить лиса", activeLabel: "🦊 Лис зажмурился: 'Какая нежная пыльца, пахнет ванилью.'" },
        { pageNum: 3, text: "Лили открыла сумочку и бросила горсть звездной пыльцы высоко вверх.", interactiveElement: "Рассыпать пыльцу", activeLabel: "✨ Мерцающие искорки медленно закапали как золотой песок." },
        { pageNum: 4, text: "Лис сладко зевнул и уснул. Лили замахала крылышками, летя к зайчонку.", interactiveElement: "Взмахнуть крыльями", activeLabel: "🦋 Взмах-взмах... лесные цветы запахли свежестью." },
        { pageNum: 5, text: "Зайка крутился от мыслей. Лили напела ему на ушко колыбельную песню.", interactiveElement: "Спеть песенку", activeLabel: "🎶 'Баю-бай, зайчик милый... пусть приснится кустик земляники...'" },
        { pageNum: 6, text: "В большой берлоге спал косолапый медведь, но в темноте ему нужна была защита.", interactiveElement: "Проверить берлогу", activeLabel: "🐻 Медведь сопел во сне: 'Хрр-пф... Хрр-пф...'" },
        { pageNum: 7, text: "Лили прикрепила яркие светящиеся звездочки прямо на потолок пещеры.", interactiveElement: "Зажечь огни", activeLabel: "🌟 Берлога осветилась мягким, багровым теплым светом." },
        { pageNum: 8, text: "Совенок сидел на дубовой ветке. Лили нежно гладила его перышки, пока он не зевнул.", interactiveElement: "Погладить совенка", activeLabel: "🦉 Сова тихонько ухнула и провалилась в сон." },
        { pageNum: 9, text: "Когда все звери уснули, Лили прилегла в свою мягкую кроватку из лепестка розы.", interactiveElement: "Укрыть Лили", activeLabel: "🌹 Лепесток убаюкивает фею, он такой мягкий." },
        { pageNum: 10, text: "Волшебная пыльца летит к твоей кроватке. Спокойной ночи, маленький ангелочек.", interactiveElement: "Пригреть искорку", activeLabel: "💖 Звездное сияние опустилось на подушку. Спи крепко." }
      ]
    }
  },
  "kucuk-ejderha": {
    en: {
      title: "Little Dragon",
      description: "A warm, cozy adventure of a tiny dragon who learns to puff cooling blue dream bubbles to sleep.",
      pages: [
        { pageNum: 1, text: "In the volcanic sleepy valley lived a baby dragon named Ember. Ember's nose sparked with golden warmth.", interactiveElement: "Spark Nose", activeLabel: "🔥 Ember let out a tiny, harmless gold spark and giggled." },
        { pageNum: 2, text: "Ember was too hot to sleep. He rolled from side to side on his stone mattress, looking for cool air.", interactiveElement: "Roll Ember Over", activeLabel: "💤 Ember groaned: 'I'm too hot! My wings are tingling.'" },
        { pageNum: 3, text: "His mother, Mama Dragon, wrapped her giant, cool wings around him to block out the warm breeze.", interactiveElement: "Mama's Hug", activeLabel: "🫂 Mama's giant wings feel like a protective castle." },
        { pageNum: 4, text: "Mama gave Ember a cup of cool magic honeysuckle tea that tasted like peppermint candy.", interactiveElement: "Drink Magical Tea", activeLabel: "🍵 Sip, sip... Ember's belly became cool and wonderfully relaxed." },
        { pageNum: 5, text: "She taught Ember a secret: instead of breathing sparks, breathe out cooling blue dream bubbles.", interactiveElement: "Blow Blue Bubbles", activeLabel: "🫧 Puffy blue bubbles floated up, cooling down the room." },
        { pageNum: 6, text: "Ember watched the bubbles float and pop. Each pop left a trace of lavender scent in the cave.", interactiveElement: "Pop a Bubble", activeLabel: "🔮 Pop! A soothing lavender smell spread all over." },
        { pageNum: 7, text: "Ember's tail relaxed. He laid his head on a soft pile of smooth river stones, which felt cool.", interactiveElement: "Smooth the Stones", activeLabel: "🪨 The river stones are cool, smooth, and perfect." },
        { pageNum: 8, text: "He began to count fluffy sheep made of blue mist jumping over a cooling waterfall.", interactiveElement: "Count Cloud Sheep", activeLabel: "🐑 'One mist sheep, two mist sheep...' Ember's eyes are closing." },
        { pageNum: 9, text: "Ember took a deep, cooling breath. His nose spark was replaced by a gentle, glowing blue night-light.", interactiveElement: "Breathe Cool Air", activeLabel: "🌬️ Warmth went out, cool peace came in. Perfect temperature." },
        { pageNum: 10, text: "The little dragon fell into a restful slumber, snoring with a soft blue steam. Sweet dreams, little dragon.", interactiveElement: "Blow Sleep Steam", activeLabel: "😴 Soft 'Hoo-shhh...' steam rocked Ember to sleep." }
      ]
    },
    tr: {
      title: "Küçük Ejderha",
      description: "Ateş saçmak yerine serinletici mavi rüya balonları üflemeyi öğrenen sevimli küçük ejderha ile tanışın.",
      pages: [
        { pageNum: 1, text: "Uyku dağlarının derinliklerindeki sıcak vadide Ejderha Alevcik yaşardı. Alevcik'in burnu altın renginde tatlı kıvılcımlar saçardı.", interactiveElement: "Kıvılcım Çıkart", activeLabel: "🔥 Alevcik küçük, zararsız bir altın kıvılcım üfledi ve kıkırdadı." },
        { pageNum: 2, text: "Alevcik çok sıcakladığı için uyuyamıyordu. Taş yatağında bir o yana bir bu yana döndü durdu, serinlik aradı.", interactiveElement: "Alevcik'i Çevir", activeLabel: "💤 Alevcik mırıldandı: 'Çok sıcak! Kanatlarım gıdıklanıyor...'" },
        { pageNum: 3, text: "Annesi, koca kanatlarını Alevcik'in üstüne kapadı, dışarıdaki sıcak vadi rüzgarlarını kesti.", interactiveElement: "Anneye Sığın", activeLabel: "🫂 Anne ejderhanın dev kanatları serin uyku çadırı gibidir." },
        { pageNum: 4, text: "Annesi, Alevcik'e nane ferahlığında çiçeklerden yapılmış serin bir ballı uyku çayı verdi.", interactiveElement: "Serin Çayı İç", activeLabel: "🍵 Höpür höpür... Alevcik'in göbüşü ferahladı, tüm vücudu dinlendi." },
        { pageNum: 5, text: "Annesi ona bir sır öğretti: Kıvılcım yerine, içindeki havayı serinletip mavi uyku balonları üflemesini söyledi.", interactiveElement: "Mavi Balon Üfle", activeLabel: "🫧 Pofuduk serin balonlar havada süzülerek mağarayı serinletti." },
        { pageNum: 6, text: "Mavi balonları izleyen Alevcik pıt diye sönen her balonun içinden odaya lavanta kokusu yayıldığını gördü.", interactiveElement: "Balon Patlat", activeLabel: "🔮 Pıt! Patlayan balon rüyalara lavanta kokuları saçtı." },
        { pageNum: 7, text: "Alevcik'in kuyruğu gevşedi. Başını tertemiz, nehir kenarındaki serin ve pürüzsüz taş yastığına koydu.", interactiveElement: "Serin Taşları Okşa", activeLabel: "🪨 Nehir taşları pürüzsüz, serinleticidir." },
        { pageNum: 8, text: "Serin bir şelalenin üstünden atlayan mavi buluttan yapılmış pofuduk koyunları saymaya başladı.", interactiveElement: "Mavi Koyunları Say", activeLabel: "🐑 'Bir mavi koyun, iki mavi koyun...' Alevcik'in göz kapakları düşüyor." },
        { pageNum: 9, text: "Afevck derin, serinletici nefes aldı. Burnundaki sıcak kıvılcım serin mavi bir gece lambasına dönüştü.", interactiveElement: "Serin Nefes Solu", activeLabel: "🌬️ Sıcaklık gitti, serinlik ve tatlı esinti kaldı." },
        { pageNum: 10, text: "Küçük ejderha tatlı bir serin buhar fısıldayarak mışıl mışıl uyudu. İyi geceler küçük ejderha dostum.", interactiveElement: "Sakin Buhar Çıkar", activeLabel: "😴 Yumuşak bir 'Huuuup... ve fıııss...' sesiyle Alevcik uykuya daldı." }
      ]
    },
    de: {
      title: "Kleiner Drache",
      description: "Das gemütliche Abenteuer eines kleinen Drachen, der kühle blaue Seifenblasen zum Einschlafen lernt.",
      pages: [
        { pageNum: 1, text: "In dem Tal wohnte ein kleiner Drache namens Funki. Seine Nase glühte warm und golden.", interactiveElement: "Funken machen", activeLabel: "🔥 Funki pustete einen kleinen, harmlosen Funken und kicherte." },
        { pageNum: 2, text: "Funki war es zu warm zum Schlafen. Er rollte sich hin und her auf seinem Steinbett.", interactiveElement: "Funki umdrehen", activeLabel: "💤 Er seufzte: 'Es ist so heiß! Meine Flügel kitzeln.'" },
        { pageNum: 3, text: "Seine Mama wickelte ihre großen, kühlen Flügel um ihn, um ihn zu schützen.", interactiveElement: "Mama umarmen", activeLabel: "🫂 Mamas Flügel fühlen sich an wie eine schützende Ritterburg." },
        { pageNum: 4, text: "Mama gab ihm eine Tasse kühlen Minztee, der wunderbar frisch schmeckte.", interactiveElement: "Magischen Tee trinken", activeLabel: "🍵 Schluck für Schluck... Funkis Bauch wurde angenehm kühl." },
        { pageNum: 5, text: "Sie brachte ihm bei, kühle blaue Traumbubbles zu pusten statt Feuer.", interactiveElement: "Bubbles pusten", activeLabel: "🫧 Blaue Blasen stiegen auf und kühlten die heiße Höhle ab." },
        { pageNum: 6, text: "Funki beobachtete die Blasen. Jedes Mal, wenn eine platzte, duftete es nach Lavendel.", interactiveElement: "Blase platzen lassen", activeLabel: "🔮 Pop! Lavendelduft breitete sich in der ganzen Höhle aus." },
        { pageNum: 7, text: "Sein langer Schwanz entspannte sich. Er legte den Kopf auf kühle Flusssteine.", interactiveElement: "Steine streicheln", activeLabel: "🪨 Die Steine fühlen sich herrlich glatt und kalt an." },
        { pageNum: 8, text: "Er zählte blaue Nebelschafe, die über einen kühlen Wasserfall sprangen.", interactiveElement: "Schafe zählen", activeLabel: "🐑 'Ein Nebelschaf, zwei Nebelschafe...' Funkis Augen fallen zu." },
        { pageNum: 9, text: "Er atmete die frische Luft ein. Seine Nase leuchtete wie ein blaues Nachtlicht.", interactiveElement: "Kühle Luft atmen", activeLabel: "🌬️ Hitze raus, Kälte rein. Die ideale Schlaftemperatur." },
        { pageNum: 10, text: "Der kleine Drache schlief glücklich ein. Gute Nacht, kleiner Drachenfreund.", interactiveElement: "Schlafdampf pusten", activeLabel: "😴 Ein ganz sanfter Dampf brachte Funki in das Land der Träume." }
      ]
    },
    es: {
      title: "Pequeño Dragón",
      description: "La tierna historia del dragoncito que aprende a soplar burbujas azules frías de menta para dormir.",
      pages: [
        { pageNum: 1, text: "En el valle cálido vivía un dragón bebé llamado Spark. Su nariz soltaba chispitas doradas.", interactiveElement: "Hacer Chispitas", activeLabel: "🔥 Spark lanzó una pequeña chispa dorada y se rio." },
        { pageNum: 2, text: "Spark tenía calor. Se movía de un lado a otro sobre sus sábanas buscando aire frío.", interactiveElement: "Girar a Spark", activeLabel: "💤 Spark gimió: '¡Tengo calor! No puedo dormir con estas alas.'" },
        { pageNum: 3, text: "Mamá Dragona lo abrazó con sus alas grandes, bloqueando la brisa caliente.", interactiveElement: "Abrazo de Mamá", activeLabel: "🫂 Las alas de mamá son como una carpa fresca y segura." },
        { pageNum: 4, text: "Le dio un té helado de menta y miel que sabía delicioso y refrescante.", interactiveElement: "Tomar Té Lindo", activeLabel: "🍵 ¡Glup, glup! Su pancita se sintió fresca y relajada." },
        { pageNum: 5, text: "Mamá le enseñó a soplar burbujas azules frías de menta en vez de chispitas de fuego.", interactiveElement: "Soplar Burbujas", activeLabel: "🫧 Burbujas azules subieron por la cueva, enfriando el aire." },
        { pageNum: 6, text: "Spark las miró flotar. Al estallar, dejaban un suave aroma a lavanda.", interactiveElement: "Estallar Burbuja", activeLabel: "🔮 ¡Pop! El cuarto se llenó de un rico aroma a menta y lavanda." },
        { pageNum: 7, text: "Su colita se relajó. Apoyó la cabeza sobre piedras lisas de río que estaban frías.", interactiveElement: "Sentir las Piedras", activeLabel: "🪨 Las piedras son suaves, frescas y perfectas." },
        { pageNum: 8, text: "Empezó a contar ovejitas azules que saltaban sobre un río frío de montaña.", interactiveElement: "Contar Ovejitas", activeLabel: "🐑 'Una ovejita, dos ovejitas...' Los ojitos de Spark se cierran." },
        { pageNum: 9, text: "Respiró aire fresco. El fuego de su nariz cambió por una lucecita azul nocturna.", interactiveElement: "Respirar Aire Frío", activeLabel: "🌬️ Se fue el calor y entró paz y frescor en su cuerpo." },
        { pageNum: 10, text: "El pequeño dragón se durmió roncando con un humito azul. Duerme bien, dragoncito.", interactiveElement: "Blowing Humito", activeLabel: "😴 Un humito azul tierno durmió a Spark toda la noche. Buenas noches." }
      ]
    },
    ru: {
      title: "Маленький Дракончик",
      description: "Теплое и уютное приключение дракончика Огонька, научившегося пускать прохладные синие пузыри.",
      pages: [
        { pageNum: 1, text: "В уютной вулканической долине жил дракончик по имени Огонек. Его носик светился золотым теплом.", interactiveElement: "Искрить носиком", activeLabel: "🔥 Огонек пустил крошечную искорку и весело рассмеялся." },
        { pageNum: 2, text: "Ему было слишком жарко. Он вертелся на своей каменной постельке, ища прохладу.", interactiveElement: "Перевернуть Огонька", activeLabel: "💤 Он жаловался: 'Как жарко! Мои крылышки гудят.'" },
        { pageNum: 3, text: "Мама-Дракониха обняла его своими прохладными крыльями, спрятав от горячего ветра.", interactiveElement: "Обнять маму", activeLabel: "🫂 Мамины объятия — как надежный и прохладный замок." },
        { pageNum: 4, text: "Мама дала ему кружку волшебного мятного чая с медом, который приятно охлаждал.", interactiveElement: "Выпить чаю", activeLabel: "🍵 Глоток... животик Огонька наполнился свежестью." },
        { pageNum: 5, text: "Она научила его тайне: вместо огня дуть прохладными синими мыльными пузырями сна.", interactiveElement: "Пускать пузыри", activeLabel: "🫧 Нежные синие шарики полетели вверх, охлаждая берлогу." },
        { pageNum: 6, text: "Огонек следил за пузырями. Лопаясь, они оставляли приятный аромат лаванды.", interactiveElement: "Лопнуть шарик", activeLabel: "🔮 Лоп! Воздух наполнился лавандовым ароматом покоя." },
        { pageNum: 7, text: "Хвостик обмяк. Огонек положил голову на кучу речных прохладных камней.", interactiveElement: "Погладить камни", activeLabel: "🪨 Речные камни такие гладкие и приятно холодят лобик." },
        { pageNum: 8, text: "Он стал считать пушистых овечек из тумана, прыгающих через чистый прохладный ручей.", interactiveElement: "Считать овец", activeLabel: "🐑 'Раз овечка, два овечка...' Глазки Огонька закрываются." },
        { pageNum: 9, text: "Он глубоко вдохнул. Пламя в носике сменилось спокойным синим ночником.", interactiveElement: "Дышать прохладой", activeLabel: "🌬️ Жар улетучился, уступая место прохладной свежести." },
        { pageNum: 10, text: "Дракончик сладко уснул. Спи крепко и пусть тебе приснятся отличные сны, дракоша.", interactiveElement: "Пустить синий дымок", activeLabel: "😴 Тихое сопение и прохладный дымок убаюкали дракончика." }
      ]
    }
  },
  "kayip-balina-yavrusu": {
    en: {
      title: "The Lost Baby Whale",
      description: "Sway with the ocean currents as a baby whale follows a soothing lullaby back to her family's embrace.",
      pages: [
        { pageNum: 1, text: "Deep in the peaceful dolphin bay lived a baby whale named Lulu. She swam near the sparkling surface.", interactiveElement: "Splash Lulu's Tail", activeLabel: "🐳 Lulu splashed her tail happily: 'Splash! Splash! Swish!'" },
        { pageNum: 2, text: "After playing, Lulu realized she had swum too far. She was alone under the starry twilight sky.", interactiveElement: "Look to Stars", activeLabel: "🌌 The ocean reflected the stars like a massive, floating playground." },
        { pageNum: 3, text: "But the ocean was not scary. Lulu heard a deep, resonant hum: it was her family's beautiful sleep song.", interactiveElement: "Listen to Echo", activeLabel: "🎵 'Muuuuu-oooh...' A calm, loving voice echoed through the water." },
        { pageNum: 4, text: "Lulu swam down, following the song. She met a giant, gentle sea turtle sliding through the waves.", interactiveElement: "Pet Sea Turtle", activeLabel: "🐢 The turtle murmured: 'Follow the gentle current, little whale...'" },
        { pageNum: 5, text: "Jellyfish illuminated her way. They glowed like floating lanterns of soft pink and blue lights.", interactiveElement: "Touch Jellyfish", activeLabel: "🎐 Simple, gentle glow... like a soothing night lamp in your nursery." },
        { pageNum: 6, text: "She swam through a cozy forest of green seagrass, which swayed in a perfect lullaby rhythm.", interactiveElement: "Sway the Seagrass", activeLabel: "🌿 The seagrass tickled Lulu: 'Sssshhh... swing, swing...'" },
        { pageNum: 7, text: "The family's song got louder and warmer. Lulu saw her mother's large, protective shadow in the blue.", interactiveElement: "Swim to Mom", activeLabel: "🫂 Lulu felt safe as her mother's smooth body touched hers." },
        { pageNum: 8, text: "Mama wrapped her fin around Lulu, guiding her to a soft sandy ocean bed where her pod lay.", interactiveElement: "Tuck Lulu in Sand", activeLabel: "🐚 The ocean sand feels warm, soft, and quiet." },
        { pageNum: 9, text: "Lulu blew out a string of tiny pearl bubbles, releasing all the tiredness from her swim.", interactiveElement: "Blow Pearl Bubbles", activeLabel: "🫧 Bubble-bubble... Lulu's heart is beating calmly now." },
        { pageNum: 10, text: "Surrounded by her family, Lulu closed her eyes and drifted into sweet watery dreams. Goodnight, baby whale.", interactiveElement: "Wave Goodnight", activeLabel: "😴 Goodnight Lulu... Sleep tight in the peaceful, warm ocean." }
      ]
    },
    tr: {
      title: "Kayıp Balina Yavrusu",
      description: "Kayıp bir balina yavrusunun derin denizlerin ninni melodisini takip ederek ailesine kavuşmasını izleyin.",
      pages: [
        { pageNum: 1, text: "Masmavi okyanusun derinliklerinde sevimli bir yavru balina yaşardı. Adı Maviş'ti. Maviş, kuyruğunu sallayarak yüzmeyi çok severdi.", interactiveElement: "Kuyruk Salla", activeLabel: "🐳 Maviş suyunu fışkırttı: 'Şıkır-şıkır, fışşşt!' suyla dans etti." },
        { pageNum: 2, text: "Çok oyun oynayan Maviş, bir an için sürüsünden biraz uzaklaştığını fark etti. Akşam oluyordu ve gökyüzü morarıyordu.", interactiveElement: "Gökyüzüne Bak", activeLabel: "🌌 Okyanus yüzeyi yıldızları yansıtıyor, büyük ve şefkatli oda lambası gibi parlıyordu." },
        { pageNum: 3, text: "Ancak okyanus ürkütücü değildi. Derinlerden gelen çok yumuşak bir uğultu duydu: Ailesinin söylediği ninniydi.", interactiveElement: "Yankıyı Dinle", activeLabel: "🎵 'Muuuuuoooouuu...' Şefkatli bir balina melodisi suyun altını kapladı." },
        { pageNum: 4, text: "Maviş melodiye doğru yüzmeye başladı. Yolda süzülerek giden bilge ve sakin kaplumbağayla karşılaştı.", interactiveElement: "Kaplumbağayı Sev", activeLabel: "🐢 Kaplumbağa fısıldadı: 'Sakince süzül dostum, ailen yakında...'" },
        { pageNum: 5, text: "Deniz anaları onun için yollarını aydınlattı. Yumuşacık yeşil ve pembe ışıklarıyla gece fenerleri gibi sallandılar.", interactiveElement: "Deniz Anasını Okşa", activeLabel: "🎐 Göz yormayan, sakin renkler okyanusu kapladı." },
        { pageNum: 6, text: "Sıcak yosun ormanının içinden geçti, yosunlar akıntıyla sanki beşik beşik sallanıyordu.", interactiveElement: "Yosunları Salla", activeLabel: "🌿 Yosunlar gıdıkladı: 'Saaalın... uyu yeşil yatakta...'" },
        { pageNum: 7, text: "Ninni sesi giderek yaklaştı. Maviş, tonda annesinin o dev, koruyucu gölgesini hissetti.", interactiveElement: "Anneye Karış", activeLabel: "🫂 Annesinin pürüzsüz cildine değdiğinde yüreği huzur ve sevinçle doldu." },
        { pageNum: 8, text: "Annesi yüzgeciyle Maviş'i kucakladı, yumuşak deniz yatağında uyuyan balinaların yanına götürdü.", interactiveElement: "Kum Yatağına Yat", activeLabel: "🐚 Sıcak deniz kumu sıcacık bir battaniye gibi hissettiriyor." },
        { pageNum: 9, text: "Maviş burnundan inci gibi minik baloncuklar çıkarttı, günün yorgunluğunu suların kucağına bıraktı.", interactiveElement: "İnci Balonları Üfle", activeLabel: "🫧 Pırıl pırıl baloncuklar daldı... kalbi artık mışıl mışıl atıyor." },
        { pageNum: 10, text: "Ailesiyle çevrelenen Maviş gözlerini kapadı ve okyanusun derin rüya masalına daldı. İyi uykular balina yavrusu.", interactiveElement: "Uykulu El Salla", activeLabel: "😴 Okyanustaki tüm canlılar mışıl mışıl rüyalarında kavuşuyor." }
      ]
    },
    de: {
      title: "Das Verlorene Walbaby",
      description: "Wiegen Sie sich im Takt der Wellen, während ein kleines Walbaby nach Hause singt.",
      pages: [
        { pageNum: 1, text: "Tief in der blauen Bucht lebte das Walbaby Lulu. Sie schwamm glücklich im warmen Wasser.", interactiveElement: "Lulus Schwanz bewegen", activeLabel: "🐳 Lulu platschte glücklich mit dem Schwanz: 'Splash! Splash!'" },
        { pageNum: 2, text: "Nach dem Spielen merkte Lulu, dass sie zu weit geschwommen war. Sie war ganz allein unter den Sternen.", interactiveElement: "Sterne betrachten", activeLabel: "🌌 Das Meer glänzte wie ein riesiger Spielplatz im Mondlicht." },
        { pageNum: 3, text: "Aber das Meer war friedlich. Lulu hörte ein tiefes Summen: das Schlaflied ihrer Familie.", interactiveElement: "Echo lauschen", activeLabel: "🎵 'Muuuuu-oooh...' Ein warmer Ton trug sie durch das Wasser." },
        { pageNum: 4, text: "Sie schwamm nach unten und traf eine riesige, freundliche Meeresschildkröte.", interactiveElement: "Schildkröte streicheln", activeLabel: "🐢 Sie raunte: 'Folge einfach der warmen Strömung, Kleines...'" },
        { pageNum: 5, text: "Quallen beleuchteten ihren Weg. Sie glühten sanft in Rosa und Blau.", interactiveElement: "Qualle berühren", activeLabel: "🎐 Sie leuchteten wie das sanfte Nachtlicht in deinem Zimmer." },
        { pageNum: 6, text: "Sie schwamm durch weiches Seegras, das sich im Schlafliedrhythmus bewegte.", interactiveElement: "Seegras bewegen", activeLabel: "🌿 Das Seegras wiegte sie ganz sanft: 'Sshhh... hin und her...'" },
        { pageNum: 7, text: "Lulu sah den großen schützenden Schatten ihrer Mama im Wasser.", interactiveElement: "Zu Mama schwimmen", activeLabel: "🫂 Lulu kuschelte sich glücklich an Mamas weichen Bauch." },
        { pageNum: 8, text: "Mama führte sie zu einem weichen Sandbett, wo ihre Familie schlief.", interactiveElement: "Lulu in den Sand legen", activeLabel: "🐚 Der warme Meersand ist weich, warm und still." },
        { pageNum: 9, text: "Lulu pustete eine kleine Kette aus Perlenblasen aus, um alle Sorgen wegzupusten.", interactiveElement: "Perlenblasen pusten", activeLabel: "🫧 Blub-blub... Lulus Herz klopft nun ganz ruhig." },
        { pageNum: 10, text: "Umgeben von ihrer Familie schlief Lulu tief ein. Gute Nacht, kleines Walbaby.", interactiveElement: "Gute Nacht winken", activeLabel: "😴 Schlaf gut in dem kuschligen, warmen Ozean." }
      ]
    },
    es: {
      title: "La Ballenita Perdida",
      description: "Siga las corrientes del océano mientras un bebé ballena regresa a casa oyendo una dulce canción.",
      pages: [
        { pageNum: 1, text: "En la bahía tranquila vivía una ballena bebé llamada Lulu. Nadaba alegre bajo el agua.", interactiveElement: "Mover Colita", activeLabel: "🐳 Lulu salpicó agua feliz: '¡Splash! ¡Splash!'" },
        { pageNum: 2, text: "Después de nadar, se dio cuenta de que estaba lejos. Estaba solita bajo las estrellas.", interactiveElement: "Ver las Estrellas", activeLabel: "🌌 El mar reflejaba las luces como un lindo cuarto de dormir." },
        { pageNum: 3, text: "Pero el agua no era fría. Lulu oyó un zumbido dulce: era la nana de su mamá.", interactiveElement: "Escuchar Eco", activeLabel: "🎵 'Muuuuu-oooh...' Una voz de amor cruzaba todo el océano." },
        { pageNum: 4, text: "Lulu se sumergió y vio a una tortuga marina muy grande y paciente.", interactiveElement: "Tocar la Tortuga", activeLabel: "🐢 La tortuga dijo: 'Sigue el canal de agua tibia, ballenita...'" },
        { pageNum: 5, text: "Lindas medusas alumbraron su camino brillando de color rosa y azul.", interactiveElement: "Tocar Medusa", activeLabel: "🎐 Luces opacas que brillan suave como tu lámpara de noche." },
        { pageNum: 6, text: "Cruzó un campo de yosun verde que se movía despacio como una cuna marina.", interactiveElement: "Mover las Algas", activeLabel: "🌿 Las algas acariciaron a Lulu: 'Sssshhh... duerme...'" },
        { pageNum: 7, text: "La nana sonó fuerte. Vio la sombra de su mamá ballena flotando en el agua.", interactiveElement: "Nadar con Mamá", activeLabel: "🫂 Lulu se pegó al cuerpo de mamá sintiéndose muy cuidada." },
        { pageNum: 8, text: "Mamá la llevó a una cama de arena suave donde dormía todo su grupo.", interactiveElement: "Acostar en Arena", activeLabel: "🐚 La arena del fondo está tibia, suave y en total silencio." },
        { pageNum: 9, text: "Lulu botó burbujas de perla durmiendo todas sus prisas.", interactiveElement: "Lanzar Burbujas", activeLabel: "🫧 Burbuja-burbuja... su corazón late lento y feliz." },
        { pageNum: 10, text: "Con el abrazo del grupo de ballenas, Lulu durmió sonriendo en el fondo del mar.", interactiveElement: "Decir Adiós", activeLabel: "😴 Buenas noches Lulu, sueña con el agua azul." }
      ]
    },
    ru: {
      title: "Потерявшийся Китенок",
      description: "Покачивайтесь на волнах, пока китенок плывет к дому на нежный шепот колыбельной.",
      pages: [
        { pageNum: 1, text: "В глубокой теплой бухте жил маленький китенок по имени Лулу. Она плавала у самой воды.", interactiveElement: "Ударить хвостиком", activeLabel: "🐳 Лулу весело плеснула хвостиком: 'Плюх! Плюх!'" },
        { pageNum: 2, text: "После игр Лулу поняла, что уплыла далеко. Она осталась одна под звездными сумерками.", interactiveElement: "Посмотреть на небо", activeLabel: "🌌 Море отражало звезды как зеркало детской спальни." },
        { pageNum: 3, text: "Но под водой не было страшно. Ветер донес песню: колыбельную её дружной семьи.", interactiveElement: "Слушать эхо", activeLabel: "🎵 'Муууууу-ооо...' Знакомый голос звал её домой." },
        { pageNum: 4, text: "Она поплыла вниз и встретила мудрую морскую черепаху, скользящую по волнам.", interactiveElement: "Гладить черепаху", activeLabel: "🐢 Черепаха прошептала: 'Плыви по теплому течению, крошка...'" },
        { pageNum: 5, text: "Медузы освещали путь. Они светились оранжевым и голубым.", interactiveElement: "Тронуть медузу", activeLabel: "🎐 Мягкое свечение... как ночничок возле твоей кроватки." },
        { pageNum: 6, text: "Она проплыла через водоросли, качающиеся в ритме колыбельной.", interactiveElement: "Покачать траву", activeLabel: "🌿 Водоросли щекотали китенка: 'Шшшш... уют и покой...'" },
        { pageNum: 7, text: "Песня становилась громче. Лулу увидела большую мамину тень в воде.", interactiveElement: "Плыть к маме", activeLabel: "🫂 Безопасно и тепло рядом с маминым гладким боком." },
        { pageNum: 8, text: "Мама прижала Лулу и уложила на песочек, где спали остальные киты.", interactiveElement: "Положить на песок", activeLabel: "🐚 Морской песок такой мягкий и теплый." },
        { pageNum: 9, text: "Лулу выпустила жемчужные пузыри, отпуская всю дневную усталость.", interactiveElement: "Пустить жемчужины", activeLabel: "🫧 Буль-буль... Лулу дышит ровно и безмятежно." },
        { pageNum: 10, text: "В окружении близких Лулу закрыла глазки. Спокойной ночи, маленький китенок.", interactiveElement: "Помахать ручкой", activeLabel: "😴 Спи крепко в объятиях тихого ночного океана." }
      ]
    }
  },
  "pofuduk-tavsan": {
    en: {
      title: "Fluffy Bunny",
      description: "Hop along a lavender field with a cozy bunny looking for the softest dandelion sleep mask.",
      pages: [
        { pageNum: 1, text: "Barnaby was a little bunny with extremely fluffy fur. He had spent all day jumping in the carrot plains.", interactiveElement: "Pet Fluffy Fur", activeLabel: "🐰 Barnaby's fur is so soft and warm! He wiggled his pink nose." },
        { pageNum: 2, text: "Now, the twilight sky was a lovely orange. Barnaby wanted to rest, but his long ears were still twitching.", interactiveElement: "Calm the Ears", activeLabel: "👂 The twitches stopped. Barnaby's ears fell down in relaxation." },
        { pageNum: 3, text: "He hopped into a sweet-smelling lavender field. The scent was incredibly relaxing and eye-safe.", interactiveElement: "Smell Lavender", activeLabel: "🌸 Sniff-sniff... The purple lavender smells like quiet dreams." },
        { pageNum: 4, text: "On a green leaf, Barnaby saw a droplet of chamomile dew. He drank it to calm his busy belly.", interactiveElement: "Drink Chamomile Dew", activeLabel: "💧 Slurp! Scent of chamomile made him feel cozy inside." },
        { pageNum: 5, text: "He looked for a dandelion. He found a massive, fluffy dandelion puff to use as a soft pillow.", interactiveElement: "Pluck Dandelion", activeLabel: "🌼 The dandelion puff is like a soft cloud, ready to rest his head." },
        { pageNum: 6, text: "A friendly cricket began to play a gentle bedtime violin tune from behind a smooth stone.", interactiveElement: "Listen to Cricket", activeLabel: "🎻 'Chirp-chirp... sleep bunny... sleep well...'" },
        { pageNum: 7, text: "The moon shone a soft silver beam, lighting up Barnaby's grass burrow like a cozy night nest.", interactiveElement: "Check Burrow", activeLabel: "🕳️ The burrow is dry, warm, and packed with soft clover leaves." },
        { pageNum: 8, text: "Barnaby's mother arrived and licked his forehead, wrapping her warm body around his.", interactiveElement: "Get Mother's Lick", activeLabel: "🫂 Mommy's lick feels comforting and removes any bad thoughts." },
        { pageNum: 9, text: "He closed his eyes, took a deep bunny breath, and felt completely weightless.", interactiveElement: "Take Bunny Breath", activeLabel: "🌬️ 'In-out... wiggle-wiggle...' Deep, peaceful sleep is arriving." },
        { pageNum: 10, text: "Barnaby fell asleep, dreaming of giant sweet carrots and blue meadows. Have a sweet sleep, fluffy bunny.", interactiveElement: "Blow Bunny Kiss", activeLabel: "😴 Goodnight Barnaby... Sleep tight and have wonderful dreams." }
      ]
    },
    tr: {
      title: "Pofuduk Tavşan",
      description: "En yumuşak karahindiba göz maskesini arayan sevimli pofuduk bir tavşancıkla lavanta tarlalarında gezinin.",
      pages: [
        { pageNum: 1, text: "Pofuduk, tüyleri pamuk gibi bembeyaz bir tavşandı. Bütün gün çayırlarda havuç peşinde zıplamıştı.", interactiveElement: "Tüylerini Okşa", activeLabel: "🐰 Pofuduk'un tüyleri sıcacık! Minik pembe burnunu kıpırdattı." },
        { pageNum: 2, text: "Akşam gökyüzü tatlı bir turuncuya boyandı. Pofuduk dinlenmek istiyordu ama kulakları hala kıpır kıpırdı.", interactiveElement: "Kulakları Sakinleştir", activeLabel: "👂 Kıpırdama durdu. Kulakları rahatça iki yanına düştü." },
        { pageNum: 3, text: "Lavanta tarlasına giden yola zıpladı. Lavantaların kokusu o kadar taze ve rahattı ki uykusunu getirdi.", interactiveElement: "Lavantayı Kokla", activeLabel: "🌸 Kokla... Mor lavantalar sessiz ve derin düşler kokuyor." },
        { pageNum: 4, text: "Yeşil bir yaprağın üstünde papatya çiği gördü. Göbüşünü sakinleştirmek için o çiği tatlı tatlı yuttu.", interactiveElement: "Papatya Çiği Yudumla", activeLabel: "💧 Hüp! papatyanın tınısı içini ısıttı ve gevşetti." },
        { pageNum: 5, text: "Yumuşacık uyku yastığı yapmak için dev boyutta pofuduk bir karahindiba buldu.", interactiveElement: "Karahindibayı Kopar", activeLabel: "🌼 Karahindiba pamuk bir bulut gibi başucuna yerleşti." },
        { pageNum: 6, text: "Arkadaş canlısı bir cırcır böceği, pürüzsüz taşın arkasından keman çalmaya başladı.", interactiveElement: "Cırcır Böceğini Dinle", activeLabel: "🎻 'Cır-cır... uyu tavşancık... düşlere dal...'" },
        { pageNum: 7, text: "Gümüş ay ışığı Pofuduk'un otlarla kaplı yuvasını aydınlattı, yuvayı sıcak bir çadıra dönüştürdü.", interactiveElement: "Yuvayı Kontrol Et", activeLabel: "🕳️ Yuva kuru, yumuşak yonca yapraklarıyla örtülüydü." },
        { pageNum: 8, text: "Annesi yanına uzandı ve alnını okşayıp sıcacık vücuduyla Pofuduk'u kucakladı.", interactiveElement: "Anneyi Hisset", activeLabel: "🫂 Annesinin nefesi tüm endişeleri sildi ve uzaklaştırdı." },
        { pageNum: 9, text: "Gözlerini kapayıp derin bir tavşan nefesi aldı, kendini kuş gibi hafif hissetti.", interactiveElement: "Tavşan Nefesi Al", activeLabel: "🌬️ 'Nefes al... nefes ver... kıpırdat burun...' Derin uyku tüm bedenini kaplıyor." },
        { pageNum: 10, text: "Pofuduk uykuya daldı, rüyasında dev havuç tarlalarında koşuyordu. Sana da iyi uykular pofuduk tavşanım.", interactiveElement: "Tavşan Öpücüğü Gönder", activeLabel: "😴 İyi uykular Pofuduk... Güzel düşler seni sarsın." }
      ]
    },
    de: {
      title: "Flauschiges Häschen",
      description: "Hüpfen Sie durch ein Lavendelfeld mit einem kuscheligen Häschen auf der Suche nach Ruhe.",
      pages: [
        { pageNum: 1, text: "Häschen Flitzi hatte sehr weiches Fell. Er war den ganzen Tag über Wiesen gesprungen.", interactiveElement: "Fell streicheln", activeLabel: "🐰 Flitzis Fell ist warm und weich! Seine Nase zuckte süß." },
        { pageNum: 2, text: "Der Himmel färbte sich orange. Flitzi wollte schlafen, aber seine Ohren zuckten noch.", interactiveElement: "Ohren beruhigen", activeLabel: "👂 Das Zucken hörte auf. Die langen Ohren sanken entspannt nach unten." },
        { pageNum: 3, text: "Er hoppelte in ein duftendes Lavendelfeld. Der Geruch machte ihn sofort müde.", interactiveElement: "Lavendel riechen", activeLabel: "🌸 Schnupper-schnupper... Der Lavendel riecht nach ruhigen Träumen." },
        { pageNum: 4, text: "Auf einem Blatt trank Flitzi einen Tautropfen Kamillentee für seinen kleinen Magen.", interactiveElement: "Tautropfen trinken", activeLabel: "💧 Schluck! Die Kamille wärmte ihn von innen." },
        { pageNum: 5, text: "Er fand eine große Pusteblume als kuscheliges Kissen für seinen Kopf.", interactiveElement: "Pusteblume pflücken", activeLabel: "🌼 Der Löwenzahn ist so weich wie eine kleine weiße Wolke." },
        { pageNum: 6, text: "Eine kleine Grille spielte ein Schlaflied auf ihrer Violine hinter einem Stein.", interactiveElement: "Grille lauschen", activeLabel: "🎻 'Zirp-zirp... schlaf Häschen... träum süß...'" },
        { pageNum: 7, text: "Der Mond schien sanft in Flitzis kleine Höhle und wärmte sein weiches Grasbett.", interactiveElement: "Bau prüfen", activeLabel: "🕳️ Die Höhle ist warm und voll von weichen Kleeblättern." },
        { pageNum: 8, text: "Flitzis Mama kuschelte sich an ihn und gab ihm einen Schlafkuss auf die Stirn.", interactiveElement: "Mama spüren", activeLabel: "🫂 Mamas Nähe bringt tiefe Geborgenheit und beruhigt." },
        { pageNum: 9, text: "Er schloss die Augen und atmete ganz tief durch die kleine Nase ein.", interactiveElement: "Atem holen-geben", activeLabel: "🌬️ 'Ein-aus... die Nase rütteln...' Ein tiefer Schlaf stellt sich ein." },
        { pageNum: 10, text: "Flitzi schlief tief ein und träumte von Karotten. Schlaf gut, kleines flauschiges Häschen.", interactiveElement: "Kuss hinschicken", activeLabel: "😴 Gute Nacht, träume süß in deinem gemütlichen Nest." }
      ]
    },
    es: {
      title: "Conejito Esponjoso",
      description: "Camine por un campo de lavanda con un lindo conejito que busca dulces sueños.",
      pages: [
        { pageNum: 1, text: "Barnaby era un conejito con un pelaje muy suave. Brincó todo el día entre flores.", interactiveElement: "Acariciar Pelaje", activeLabel: "🐰 ¡Su pelo es tibio! Movió su naricita de color rosa." },
        { pageNum: 2, text: "El cielo se puso de color naranja brillante. Quería dormir pero sus orejas seguían moviéndose.", interactiveElement: "Orejas quietas", activeLabel: "👂 Paró de moverse. Las orejas cayeron a los lados de su cabeza." },
        { pageNum: 3, text: "Llegó a un campo de lavanda morada. El olor era muy relajante para sus ojos.", interactiveElement: "Oler Lavanda", activeLabel: "🌸 Sniff-sniff... La lavanda huele a campo y a silencio tierno." },
        { pageNum: 4, text: "En una hoja tomó una gota de rocío de manzanilla para entibiar su pancita.", interactiveElement: "Tomar Rocío", activeLabel: "💧 ¡Glup! El sabor a flor le dio mucha paz y calor interno." },
        { pageNum: 5, text: "Buscó un diente de león gigante para usarlo de almohada esponjosa.", interactiveElement: "Tomar Flor", activeLabel: "🌼 Es como una nube de algodón dulce para apoyar su cabeza." },
        { pageNum: 6, text: "Un grillo amigo sonó su violín de noche detrás de una piedrita lisa.", interactiveElement: "Oír al Grillo", activeLabel: "🎻 'Cri-cri... descansa conejito lindo...'" },
        { pageNum: 7, text: "La luna plateada brilló alumbrando su madriguera de musgo seco.", interactiveElement: "Ver Madriguera", activeLabel: "🕳️ El nido es seco, tibio y lleno de hojas suaves de trébol." },
        { pageNum: 8, text: "Mamá coneja llegó y lamió su frente dándole un abrazo tibio.", interactiveElement: "Abrazo de Mamá", activeLabel: "🫂 El amor de mamá aleja cualquier pensamiento triste." },
        { pageNum: 9, text: "Cerró sus ojos, respiró hondo y se sintió liviano como hoja al viento.", interactiveElement: "Respirar Lindo", activeLabel: "🌬️ 'Inhala... exhala... mueve la nariz...' El sueño profundo llegó." },
        { pageNum: 10, text: "Barnaby se durmió soñando con campos azules. Duerme bien, conejito esponjoso.", interactiveElement: "Lanzar un Beso", activeLabel: "😴 Buenas noches Barnaby, descansa y sueña lindo." }
      ]
    },
    ru: {
      title: "Пушистый Кролик",
      description: "Прогуляйтесь по лавандовому лугу с кроликом, ищущим самую мягкую цветочную подушечку.",
      pages: [
        { pageNum: 1, text: "Пушок был маленьким и очень пушистым кроликом. Весь день он прыгал по траве.", interactiveElement: "Погладить шерстку", activeLabel: "🐰 Шерстка Пушка такая теплая! Он смешно шевелит носиком." },
        { pageNum: 2, text: "Оранжевый закат укутал небо. Кролик хотел спать, но ушки все еще прислушивались.", interactiveElement: "Успокоить уши", activeLabel: "👂 Ушки расслабились и опустились по бокам головой." },
        { pageNum: 3, text: "Он прискакал на лавандовое поле. Горный запах лаванды клонил ко сну.", interactiveElement: "Понюхать лаванду", activeLabel: "🌸 Шмыг-шмыг... Фиолетовые цветы пахнут тишиной и покоем." },
        { pageNum: 4, text: "На листике Пушок увидел росу ромашкового чая и выпил её, согревая животик.", interactiveElement: "Выпить росу", activeLabel: "💧 Глоток... теплая ромашка успокоила кролика изнутри." },
        { pageNum: 5, text: "Он нашел огромный пушистый одуванчик, чтобы спать на нем как на подушке.", interactiveElement: "Сорвать цветок", activeLabel: "🌼 Одуванчик мягкий словно облачко, нежно греет щечку." },
        { pageNum: 6, text: "Маленький сверчок начал играть нежную колыбельную мелодию на скрипке из-за камня.", interactiveElement: "Слышать сверчка", activeLabel: "🎻 'Цвирк-цвирк... засыпай, зайчик... спи сладко...'" },
        { pageNum: 7, text: "Луна осветила норку Пушка, превращая её в уютный серебряный шалаш.", interactiveElement: "Зайти в норку", activeLabel: "🕳️ Норка сухая, теплая и усыпана мягкими листиками клевера." },
        { pageNum: 8, text: "Мама-крольчиха прилегла рядом и нежно облизнула его лобик, обняв лапками.", interactiveElement: "Обнять маму", activeLabel: "🫂 Мамино тепло убирает все тревоги прошедшего дня." },
        { pageNum: 9, text: "Он закрыл глаза, сделал глубокий вдох и почувствовал себя совсем невесомым.", interactiveElement: "Дышать глубоко", activeLabel: "🌬️ 'Вдох-выдох... носик спит...' Крепкий сон окутывает тело." },
        { pageNum: 10, text: "Пушок заснул, видя во сне поля синего клевера. Приятного сна, пушистый зайчик.", interactiveElement: "Послать воздушный", activeLabel: "😴 Спокойной ночи, засыпай на своей мягкой подушечке." }
      ]
    }
  },
  "ucan-midilli": {
    en: {
      title: "The Flying Pony",
      description: "Soar through starry clouds on a magical winged pony to find the golden dream palace in the sky.",
      pages: [
        { pageNum: 1, text: "Beneath the starry sky lived a winged pony named Celeste. Celeste had a coat of silver and wings of purple velvet.", interactiveElement: "Pet Celeste", activeLabel: "🦄 Celeste let out a gentle 'neigh' and shook her glittery mane." },
        { pageNum: 2, text: "Celeste flew down quietly to your window, inviting you on a gentle, floating ride before sleep.", interactiveElement: "Get on Pony", activeLabel: "🏇 You sat snugly on Celeste's back. She felt extremely soft and warm." },
        { pageNum: 3, text: "With a gentle flap of her wings, Celeste lifted off into the quiet, fresh night air.", interactiveElement: "Flap Wings Gently", activeLabel: "💨 Swoosh... You are rising smoothly, leaving all concerns behind." },
        { pageNum: 4, text: "You flew through fluffy clouds that smelled like sweet strawberry cotton candy.", interactiveElement: "Smell Cotton Cloud", activeLabel: "☁️ It smells sweet and makes you feel completely relaxed." },
        { pageNum: 5, text: "Celeste grabbed a sparkling golden star ribbon from a constellation and gave it to you.", interactiveElement: "Catch Star Ribbon", activeLabel: "🎗️ The ribbon glows in your hands, protecting you from bad dreams." },
        { pageNum: 6, text: "You stopped at the Milky Way station. A friendly sheep offered you a cup of warm, cosmic honey-milk.", interactiveElement: "Drink Star Milk", activeLabel: "🥛 Yum! Sips of cosmic milk make you warmer and sleepier." },
        { pageNum: 7, text: "The sky became darker, and planet Saturn chimed a gentle bell melody across the solar system.", interactiveElement: "Listen to Saturn Chim", activeLabel: "🔔 'Ding... dong... sleep tight... ding... dong...'" },
        { pageNum: 8, text: "Celeste glided effortlessly, letting you float on her back like a leaf on a gentle river.", interactiveElement: "Float Celeste", activeLabel: "🍃 You feel weightless, just swaying and gliding on the stellar mist." },
        { pageNum: 9, text: "In the distance, the Golden Dream Palace appeared, glowing with a soft, comforting amber light.", interactiveElement: "Light up Palace", activeLabel: "🏰 The palace windows glowed like sleepy, safe fireplace lights." },
        { pageNum: 10, text: "Celeste landed you safely back in your cozy bed, tucking you in with her stars. Have a magical sleep, sweet child.", interactiveElement: "Whisper Goodnight", activeLabel: "😴 Celeste flew back to the sky, winking a star at you. Goodnight." }
      ]
    },
    tr: {
      title: "Uçan Midilli",
      description: "Gökyüzündeki altın rüya sarayını keşfetmek için sihirli kanatlı midillinin sırtında bulutlar arasında süzülün.",
      pages: [
        { pageNum: 1, text: "Yıldızlı çayırlarda Celeste adında kanatlı gökyüzü midillisi yaşardı. Celeste gümüş pelerinliydi ve kadife mor kanatları vardı.", interactiveElement: "Celeste'i Okşa", activeLabel: "🦄 Celeste mutlu bir şekilde kişnedi, pırıltılı yelesini salladı." },
        { pageNum: 2, text: "Celeste sakin bir rüzgarla pencerene kondu, seni uykudan önce yıldızların üstünde uçmaya davet etti.", interactiveElement: "Midilliye Bin", activeLabel: "🏇 Celeste'in sırtına kuruldun, tüyleri sıcacık ve kadife gibiydi." },
        { pageNum: 3, text: "Kanatlarını hafifçe iki yana çırpan Celeste seni gökyüzünün sakin ve mis kokulu havasına yükseltti.", interactiveElement: "Kanatları Çırptır", activeLabel: "💨 Voosh... Süzülerek tüm kaygıları ve yorgunluğu geride bıraktın." },
        { pageNum: 4, text: "Çilekli pamuk şeker gibi kokan pembe rüya bulutlarının içinden süzüldünüz.", interactiveElement: "Bulutu Kokla", activeLabel: "☁️ Mis gibi taze çilek kokusu yüreğini huzurla doldurdu." },
        { pageNum: 5, text: "Celeste bir takım yıldızdan sıcacık parlayan altın bir dilek kurdelesi yakalayıp sana verdi.", interactiveElement: "Kurdeleyi Tut", activeLabel: "🎗️ Kurdele elinde yumuşakça parlayarak kötü düşleri odandan uzaklaştırdı." },
        { pageNum: 6, text: "Samanyolu istasyonunda mola verdiniz. Pofuduk koyun dostumuz sana bir kupa sıcak süt ikram etti.", interactiveElement: "Galaksi Sütü Yudumla", activeLabel: "🥛 Yudum yudum... Sıcacık ballı süt karnını doyurdu, uyku getirdi." },
        { pageNum: 7, text: "Gökyüzü loşlaştı ve halkalı Satürn gezegeni uzaydan çocuklara tatlı bir ninni çanı çaldı.", interactiveElement: "Çan Sesini Dinle", activeLabel: "🔔 'Ding... dong... tatlı uykular... ding... dong...'" },
        { pageNum: 8, text: "Celeste hiç yorulmadan süzüldü, seni bir nehirde süzülen hafif küçük yaprak gibi taşıdı.", interactiveElement: "Gökyüzünde Süzül", activeLabel: "🍃 Kendini uykunun kollarına bıraktın, rüzgarda hafif sallanıyorsun." },
        { pageNum: 9, text: "Uzaklarda, altın rengi ışıklar saçan Hayal Sarayı belirdi, pencereleri çocuklara gülümsüyordu.", interactiveElement: "Sarayı Aydınlat", activeLabel: "🏰 Sarayın pencerelerinden sevgi ışıkları odana kadar yansıdı." },
        { pageNum: 10, text: "Celeste seni yumuşak ve güvenli yatağına bıraktı, üstünü yıldızlarla örttü. İyi uykular sevimli melek.", interactiveElement: "Celeste'e El Salla", activeLabel: "😴 Celeste gökyüzüne uçtu, koruyucu yıldızı odana bıraktı." }
      ]
    },
    de: {
      title: "Das Fliegende Pony",
      description: "Fliegen Sie mit einem geflügelten Pony durch Wolken zu einem goldenen Schloss.",
      pages: [
        { pageNum: 1, text: "Unter den Sternen wohnte das geflügelte Pony Celeste. Celeste hatte lila Flügel.", interactiveElement: "Pony streicheln", activeLabel: "🦄 Celeste wieherte leise und schüttelte ihre glitzernde Mähne." },
        { pageNum: 2, text: "Celeste landete leise an deinem Fenster und rief dich auf eine kleine Reise vor dem Schlafen.", interactiveElement: "Aufsteigen", activeLabel: "🏇 Du sitzt warm und gemütlich auf Celestes weichem Rücken." },
        { pageNum: 3, text: "Mit einem sanften Flügelschlag hob Celeste in die frische, kühle Nachtluft ab.", interactiveElement: "Flügel schlagen lassen", activeLabel: "💨 Swoosh... Ihr fliegt ruhig durch die Nacht und lässt Sorgen hinter euch." },
        { pageNum: 4, text: "Ihr flogt durch weiche Wolken, die wie Erdbeer-Zuckerwatte dufteten.", interactiveElement: "Wolke riechen", activeLabel: "☁️ Es riecht herrlich süß und lässt dich tief entspannen." },
        { pageNum: 5, text: "Celeste fing ein goldenes Sternenband am Himmel und schenkte es dir.", interactiveElement: "Sternenband fangen", activeLabel: "🎗️ Das Band glüht in deiner Hand und beschützt deine Träume." },
        { pageNum: 6, text: "Ihr machtet Halt an der Milchstraße, wo ein Schaf euch warme Sternenmilch reichte.", interactiveElement: "Milch trinken", activeLabel: "🥛 Mmm! Die warme Milch macht dich noch schläfriger." },
        { pageNum: 7, text: "Am dunklen Himmel läutete Planet Saturn ein leises Glockenspiel für Kinder.", interactiveElement: "Glockenspiel hören", activeLabel: "🔔 'Ding... dong... schlaf gut... ding... dong...'" },
        { pageNum: 8, text: "Celeste gleitete schwerelos durch den weichen Sternenstaub am Himmel.", interactiveElement: "Pony gleiten lassen", activeLabel: "🍃 Du fühlst dich federleicht, wie eine kleine Feder im Wind." },
        { pageNum: 9, text: "In der Ferne erschien das Goldene Traumschloss mit einem warmen Licht.", interactiveElement: "Schloss erleuchten", activeLabel: "🏰 Die Fenster glühten einladend und warm vor Geborgenheit." },
        { pageNum: 10, text: "Celeste brachte dich zurück in dein Bett und deckte dich mit Sternen zu. Gute Nacht.", interactiveElement: "Gute Nacht flüstern", activeLabel: "😴 Celeste flog zurück in den Himmel und schloss die Augen. Schlaf gut." }
      ]
    },
    es: {
      title: "El Pony Volador",
      description: "Vuele por nubes de estrellas con un pony alado hasta el castillo de oro de los sueños.",
      pages: [
        { pageNum: 1, text: "Detrás de las nubes vivía un pony con alas de terciopelo llamado Celeste. Su pelo brillaba como plata.", interactiveElement: "Acariciar Pony", activeLabel: "🦄 Celeste relinchó suavemente moviendo sus alas de terciopelo." },
        { pageNum: 2, text: "Celeste bajó sin hacer ruido a tu ventana invitándote a montar en el cielo.", interactiveElement: "Montar a Celeste", activeLabel: "🏇 Te sentaste en su espalda tibia. Es extremadamente cómoda." },
        { pageNum: 3, text: "Celeste batió sus alas alzando el vuelo por el aire fresco de la noche.", interactiveElement: "Aletear Despacio", activeLabel: "💨 Swoosh... Suben despacio, dejando atrás todo el cansancio." },
        { pageNum: 4, text: "Volaron sobre nubes suaves que olían a dulce de fresa.", interactiveElement: "Oler la Nube", activeLabel: "☁️ El aroma es tan agradable que te da sueño de inmediato." },
        { pageNum: 5, text: "Celeste tomó una cinta de estrellas brillante y te la dio con cariño.", interactiveElement: "Tomar la Cinta", activeLabel: "🎗️ La cinta brilla suave en tus manos, alejando sueños tristes." },
        { pageNum: 6, text: "Pararon en el camino de leche. Una oveja te convidó un vaso de leche con miel estelar.", interactiveElement: "Tomar Leche Stelar", activeLabel: "🥛 ¡Sip! Qué tibia y rica está la leche, te calienta la pancita." },
        { pageNum: 7, text: "El cielo se puso oscuro y el planeta Saturno tocó campanas de música para niños.", interactiveElement: "Oír Campanas", activeLabel: "🔔 'Ding... dong... duerme ya... ding... dong...'" },
        { pageNum: 8, text: "Celeste flotó en el aire sin esfuerzo alguno, meciéndote muy despacio.", interactiveElement: "Mecer a Celeste", activeLabel: "🍃 Te sientes liviano, flotando entre nubes de gas morado." },
        { pageNum: 9, text: "A lo lejos brilló el Castillo Dorado de los Sueños con luces ámbar muy tibias.", interactiveElement: "Prender el Castillo", activeLabel: "🏰 Las ventanas brillan como velitas tiernas en la noche." },
        { pageNum: 10, text: "Celeste te acostó con cuidado en tu camita abrigándote con estrellas. Duerme bien, mi niño.", interactiveElement: "Susurrar Adiós", activeLabel: "😴 Celeste voló al cielo guiñándote el ojo. Buenas noches." }
      ]
    },
    ru: {
      title: "Летающий Пони",
      description: "Парите среди облаков на волшебном крылатом пони, летящем к золотому замку сновидений.",
      pages: [
        { pageNum: 1, text: "Под звездным небом жил крылатый пони по имени Селеста. Её шкурка была из серебра, а крылья — из бархата.", interactiveElement: "Погладить коника", activeLabel: "🦄 Селеста тихонько заржала и встряхнула блестящей гривой." },
        { pageNum: 2, text: "Селеста тихо приземлилась у твоего окошка, приглашая в красивый полет перед сном.", interactiveElement: "Сесть верхом", activeLabel: "🏇 Ты устроился на её теплой спинке, усыпанной звездной пылью." },
        { pageNum: 3, text: "Сделав взмах крыльев, Селеста поднялась вверх в ночную прохладу.", interactiveElement: "Взмахнуть крыльями", activeLabel: "💨 Шууух... вы плавно летите, забывая дневную суету." },
        { pageNum: 4, text: "Вы пролетели сквозь пушистые облака, пахнущие клубничной сахарной ватой.", interactiveElement: "Понюхать облако", activeLabel: "☁️ Розовое облачко пахнет сладко и расслабляет тело." },
        { pageNum: 5, text: "Селеста поймала золотую звездную ленточку и подарила её тебе.", interactiveElement: "Поймать ленточку", activeLabel: "🎗️ Лента светится золотом, защищая тебя от плохих снов." },
        { pageNum: 6, text: "Она остановилась на Млечном Пути, где пушистая овечка угостила тебя звездным молоком.", interactiveElement: "Выпить молока", activeLabel: "🥛 Ура! Вкусное теплое молоко убаюкивает и согревает." },
        { pageNum: 7, text: "Темнело. Планета Сатурн заиграла мелодию тихих колокольчиков для детей.", interactiveElement: "Слушать Сатурн", activeLabel: "🔔 'Динь... дон... спи крепко... динь... дон...'" },
        { pageNum: 8, text: "Селеста плавно парила, убаюкивая тебя на своей серебряной спинке.", interactiveElement: "Качать полет", activeLabel: "🍃 Ты качаешься словно легкий листик на звездном ветру." },
        { pageNum: 9, text: "Вдали показался Золотой Замок Снов, светящийся ласковыми теплыми окнами.", interactiveElement: "Включить замок", activeLabel: "🏰 Окна замка горят мягко, призывая укладываться спать." },
        { pageNum: 10, text: "Селеста бережно опустила тебя в кроватку и укрыла звездным светом. Спи сладко.", interactiveElement: "Шепнуть пони", activeLabel: "😴 Селеста улетела в ночное небо, весело подмигнув. Спокойной ночи." }
      ]
    }
  }
};

export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  "category.all": {
    en: "All Sounds",
    tr: "Tüm Sesler",
    de: "Alle Töne",
    es: "Todos los Sonidos",
    ru: "Все Звуки"
  },
  "category.nature": {
    en: "Nature",
    tr: "Doğa",
    de: "Natur",
    es: "Naturaleza",
    ru: "Природа"
  },
  "category.household": {
    en: "Household",
    tr: "Ev",
    de: "Haushalt",
    es: "Hogar",
    ru: "Дом"
  },
  "category.synth": {
    en: "Adjustable",
    tr: "Değiştirilebilir",
    de: "Einstellbar",
    es: "Ajustable",
    ru: "Настраиваемые"
  },
  "category.musicbox": {
    en: "Music Box",
    tr: "Müzik Kutusu",
    de: "Spieluhr",
    es: "Caja de Música",
    ru: "Музыкальная шкатулка"
  },
  "category.womb": {
    en: "Womb",
    tr: "Anne Karnı",
    de: "Mutterleib",
    es: "Útero",
    ru: "Утроба"
  },
  "category.custom": {
    en: "Custom",
    tr: "Özel",
    de: "Eigene",
    es: "Personalizado",
    ru: "Свой"
  },
  "sound.gokyuzu-ruyasi": {
    en: "Sky Dream (Lullaby)",
    tr: "Gökyüzü Rüyası (Ninni)",
    de: "Himmelstraum (Wiegenlied)",
    es: "Sueño del Cielo (Nana)",
    ru: "Небесная Мечта (Колыбельная)"
  },
  "sound.gece-melegi": {
    en: "Night Angel (Lullaby)",
    tr: "Gece Meleği (Ninni)",
    de: "Nachtengel (Wiegenlied)",
    es: "Ángel de la Noche (Nana)",
    ru: "Ночной Ангел (Колыбельная)"
  },
  "sound.huzur-bahcesi": {
    en: "Peace Garden (Rain)",
    tr: "Huzur Bahçesi (Yağmur)",
    de: "Friedensgarten (Regen)",
    es: "Jardín de la Paz (Lluvia)",
    ru: "Сад Покоя (Дождь)"
  },
  "sound.anne-kalbi-ninni": {
    en: "Mother's Heartbeat & Rhythm",
    tr: "Anne Kalbi & Ritmi",
    de: "Mutterherzschlag & Rhythmus",
    es: "Latido y Ritmo de la Madre",
    ru: "Сердцебиение и Ритм Матери"
  },
  "sound.anne-karni-sesi": {
    en: "Womb Sounds",
    tr: "Anne Karnı Sesi",
    de: "Mutterleibsgeräusche",
    es: "Sonidos del Útero",
    ru: "Звуки Утробы"
  },
  "sound.ates-citirtisi": {
    en: "Fire Crackle",
    tr: "Ateş Çıtırtısı",
    de: "Kaminfeuer Knistern",
    es: "Crepitar del Fuego",
    ru: "Потрескивание костра"
  },
  "sound.bulbul-sesi": {
    en: "Nightingale Melody",
    tr: "Bülbül Melodisi",
    de: "Nachtigall-Melodie",
    es: "Melodía de Ruiseñor",
    ru: "Пение соловья"
  },
  "sound.circir-bocegi": {
    en: "Night Crickets",
    tr: "Cırcır Böceği Sesi",
    de: "Nachtgrillen",
    es: "Grillos Nocturnos",
    ru: "Ночные Сверчки"
  },
  "sound.buyukanne-fisiltisi": {
    en: "Grandmother's Whisper",
    tr: "Büyükanne Fısıltısı",
    de: "Großmutters Flüstern",
    es: "Susurro de la Abuela",
    ru: "Шепот бабушки"
  },
  "sound.elektrik-supurgesi": {
    en: "Vacuum Cleaner",
    tr: "Elektrik Süpürgesi",
    de: "Staubsauger",
    es: "Aspiradora",
    ru: "Пылесос"
  },
  "sound.guguk-kusu": {
    en: "Cuckoo Bird",
    tr: "Guguk Kuşu",
    de: "Kuckucksvogel",
    es: "Pájaro Cuco",
    ru: "Кукушка"
  },
  "sound.irmak-sesi": {
    en: "River Stream",
    tr: "Irmak Sesi",
    de: "Flussrauschen",
    es: "Sonido del Río",
    ru: "Звук реки"
  },
  "sound.kalp-atisi-gercek": {
    en: "Real Heartbeat",
    tr: "Gerçek Kalp Atışı",
    de: "Echter Herzschlag",
    es: "Latido Real",
    ru: "Настоящее сердцебиение"
  },
  "sound.kanarya-sesi": {
    en: "Canary Song",
    tr: "Kanarya Sesi",
    de: "Kanarienvogel-Gesang",
    es: "Canto de Canario",
    ru: "Пение канарейки"
  },
  "sound.kurbaga-senfonisi": {
    en: "Frog Symphony",
    tr: "Kurbağa Senfonisi",
    de: "Frosch-Symphonie",
    es: "Sinfonía de Ranas",
    ru: "Лягушачья симфония"
  },
  "sound.pis-pis-sesi": {
    en: "Shushing Sound",
    tr: "Pış Pış Sesi",
    de: "Einschlaf-Zischen (Psch)",
    es: "Sonido Silbante (Shush)",
    ru: "Звук шипения (Пыш-пыш)"
  },
  "sound.muzik-kutusu-1": {
    en: "Music 1",
    tr: "Müzik 1",
    de: "Musik 1",
    es: "Música 1",
    ru: "Музыка 1"
  },
  "sound.muzik-kutusu-2": {
    en: "Music 2",
    tr: "Müzik 2",
    de: "Musik 2",
    es: "Música 2",
    ru: "Музыка 2"
  },
  "sound.muzik-kutusu-3": {
    en: "Music 3",
    tr: "Müzik 3",
    de: "Musik 3",
    es: "Música 3",
    ru: "Музыка 3"
  },
  "sound.muzik-kutusu-4": {
    en: "Music 4",
    tr: "Müzik 4",
    de: "Musik 4",
    es: "Música 4",
    ru: "Musik 4"
  },
  "ui.youtubeScreens": {
    en: "YouTube\nScreens",
    tr: "YouTube\nMonitörü",
    de: "YouTube\nMonitore",
    es: "Monitores\nde YouTube",
    ru: "Мониторы\nYouTube"
  },
  "ui.storyTales": {
    en: "Story\nTales",
    tr: "Masal\nOkumaları",
    de: "Guteacht\ngeschichten",
    es: "Cuentos de\nHadas",
    ru: "Сказки на\nночь"
  },
  "ui.title": {
    en: "SleepyBaby Mixer",
    tr: "SleepyBaby Mikseri",
    de: "SleepyBaby-Mischer",
    es: "Mezclador SleepyBaby",
    ru: "Микшер SleepyBaby"
  },
  "ui.subtitle": {
    en: "Mix soothing synthetic signals or custom loops to help your baby drift off safely.",
    tr: "Bebeğinizin güvenle uykuya dalması için yatıştırıcı sinyalleri ve özel döngüleri karıştırın.",
    de: "Mischen Sie beruhigende Signale, damit Ihr Baby sicher einschläft.",
    es: "Mezcle señales relajantes para ayudar a su bebé a conciliar el sueño de forma segura.",
    ru: "Смешивайте успокаивающие сигналы, чтобы ваш ребенок безопасно заснул."
  },
  "ui.timerTitle": {
    en: "Auto-Shutdown Timer",
    tr: "Otomatik Kapanma Zamanlayıcısı",
    de: "Auto-Ausschalt-Timer",
    es: "Temporizador de Apagado",
    ru: "Таймер Автовыключения"
  },
  "ui.timerDesc": {
    en: "Set a timer to smoothly fade out and turn off the soundscape after your baby falls asleep.",
    tr: "Bebeğiniz uykuya daldıktan sonra seslerin hafifçe kısılarak kapanması için bir zamanlayıcı ayarlayın.",
    de: "Stellen Sie einen Timer ein, um die Geräusche nach dem Einschlafen sanft auszublenden.",
    es: "Configure un temporizador para atenuar los sonidos una vez que el bebé se duerma.",
    ru: "Настройте таймер для плавного затухания звуков после того, как малыш уснет."
  },
  "ui.fadeToggle": {
    en: "Gentle Fade Out",
    tr: "Yumuşak Kapanış",
    de: "Sanftes Ausblenden",
    es: "Atenuación Suave",
    ru: "Плавное Затухание"
  },
  "ui.fadeToggleDesc": {
    en: "Sounds fade out during the last 30 seconds.",
    tr: "Sesler son 30 saniye içinde yavaşça kısılarak kapanır.",
    de: "Töne blenden in den letzten 30 Sekunden sanft aus.",
    es: "Los sonidos se atenúan durante los últimos 30 segundos.",
    ru: "Звуки затихают в течение последних 30 секунд."
  },
  "ui.savedMixTitle": {
    en: "Saved Sound Mixes",
    tr: "Kaydedilmiş Ses Miksleri",
    de: "Gespeicherte Tonmischungen",
    es: "Mezclas de Sonido Guardadas",
    ru: "Сохраненные Звуковые Миксы"
  },
  "ui.savedMixDesc": {
    en: "Save your favorite active sound levels and combinations to easily restore them with a single tap.",
    tr: "En sevdiğiniz aktif ses seviyelerini ve kombinasyonlarını tek bir dokunuşla geri yüklemek için kaydedin.",
    de: "Speichern Sie Ihre Lieblingsmischungen, um sie mit einem Fingertipp wiederherzustellen.",
    es: "Guarde sus niveles y combinaciones favoritos para restaurarlos con un solo toque.",
    ru: "Сохраняйте любимые уровни и комбинации звуков для восстановления одним нажатием."
  },
  "ui.placeholderMixName": {
    en: "Mix name e.g., Bedtime Waves",
    tr: "Miks adı örn: Uyku Vakti Dalgaları",
    de: "Mischungsname z.B. Schlafenszeit",
    es: "Nombre de la mezcla, ej: Olas de dormir",
    ru: "Название микса, например, Время Сна"
  },
  "ui.saveBtn": {
    en: "Save",
    tr: "Kaydet",
    de: "Speichern",
    es: "Guardar",
    ru: "Сохранить"
  },
  "ui.addCustomSound": {
    en: "Add Custom Sound",
    tr: "Kendi Sesini Ekle",
    de: "Eigenen Ton hinzufügen",
    es: "Agregar Sonido Propio",
    ru: "Добавить Свой Звук"
  },
  "ui.addCustomDesc": {
    en: "Upload from device or paste direct URL",
    tr: "Cihazından yükle veya doğrudan URL yapıştır",
    de: "Vom Gerät hochladen oder URL einfügen",
    es: "Subir desde dispositivo o pegar URL directa",
    ru: "Загрузить с устройства или вставить ссылку"
  },
  "ui.muteAll": {
    en: "Mute",
    tr: "Sustur",
    de: "Stumm",
    es: "Silenciar",
    ru: "Глушить"
  },
  "ui.cancelTimer": {
    en: "Cancel Timer",
    tr: "Süreyi İptal Et",
    de: "Timer abbrechen",
    es: "Cancelar Tiempo",
    ru: "Сбросить Таймер"
  },
  "ui.noSavedMixes": {
    en: "No saved mixes found yet.",
    tr: "Henüz kaydedilmiş miks bulunamadı.",
    de: "Noch keine gespeicherten Mischungen gefunden.",
    es: "Aún no hay mezclas guardadas.",
    ru: "Сохраненные миксы не найдены."
  },
  "ui.stopAllReset": {
    en: "Stop All Playing Sounds & Reset",
    tr: "Tüm Çalan Sesleri Durdur ve Sıfırla",
    de: "Alle Töne stoppen & zurücksetzen",
    es: "Detener Todos los Sonidos y Reiniciar",
    ru: "Остановить Все Звуки и Сбросить"
  },
  "ui.activeSounds": {
    en: "Active Sounds",
    tr: "Aktif Sesler",
    de: "Aktive Töne",
    es: "Sonidos Activos",
    ru: "Активные Звуки"
  },
  "ui.activeSound": {
    en: "Active Sound",
    tr: "Aktif Ses",
    de: "Aktiver Ton",
    es: "Sonido Activo",
    ru: "Активный Звук"
  },
  "ui.loadBtn": {
    en: "Load",
    tr: "Yükle",
    de: "Laden",
    es: "Cargar",
    ru: "Загрузить"
  },
  "ui.sourceSynthesizer": {
    en: "Synthesizer",
    tr: "Sentezleyici",
    de: "Synthesizer",
    es: "Sintetizador",
    ru: "Синтезатор"
  },
  "ui.sourceRemote": {
    en: "Remote URL",
    tr: "Uzaktan Bağlı",
    de: "Remote-URL",
    es: "URL Remota",
    ru: "Удаленный URL"
  },
  "ui.sourceLocal": {
    en: "Local File",
    tr: "Yüklü Ses",
    de: "Lokale Datei",
    es: "Archivo Local",
    ru: "Локальный Файл"
  },
  "ui.sourceSelectorTitle": {
    en: "Select Audio Source",
    tr: "Ses Kaynağı Seç",
    de: "Audioquelle wählen",
    es: "Elegir Origen de Audio",
    ru: "Выбрать Источник Звука"
  },
  "ui.sourceDeviceUpload": {
    en: "Upload MP3/WAV from Device",
    tr: "Cihazdan MP3/WAV Yükle",
    de: "MP3/WAV vom Gerät hochladen",
    es: "Subir MP3/WAV desde el Dispositivo",
    ru: "Загрузить MP3/WAV с Устройства"
  },
  "ui.sourceDeviceSelectBtn": {
    en: "Choose File",
    tr: "Dosya Seçin",
    de: "Datei auswählen",
    es: "Elegir Archivo",
    ru: "Выбрать Файл"
  },
  "ui.sourceUrlPaste": {
    en: "Paste Audio URL",
    tr: "Ses URL'si Yapıştır",
    de: "Audio-URL einfügen",
    es: "Pegar URL de Audio",
    ru: "Вставить ссылку на аудио"
  },
  "ui.sourceResetBtn": {
    en: "Reset (Return to Synthesizer)",
    tr: "Sıfırla (Doğal Sese Dön)",
    de: "Zurücksetzen (Zum Synthesizer)",
    es: "Reiniciar (Volver al Sintetizador)",
    ru: "Сбросить (Вернуться к Синтезатору)"
  },
  "ui.addCardTitle": {
    en: "Add New Sound Card",
    tr: "Yeni Ses Kartı Ekle",
    de: "Neue Tonkarte hinzufügen",
    es: "Agregar Nueva Tarjeta de Sonido",
    ru: "Добавить Новую Звуковую Карту"
  },
  "ui.addCardName": {
    en: "Sound Name",
    tr: "Ses Adı",
    de: "Tonname",
    es: "Nombre de Sonido",
    ru: "Название Звука"
  },
  "ui.addCardNamePlaceholder": {
    en: "e.g., Hairdryer, Rainstorm",
    tr: "Örn: Saç Kurutma Makinesi, Anne Fısıltısı",
    de: "z.B. Föhn, Regenschauer",
    es: "Ej: Secador de pelo, Lluvia fuerte",
    ru: "Например, Фен, Ливень"
  },
  "ui.addCardEmoji": {
    en: "Emoji Icon",
    tr: "Emoji / Simge",
    de: "Emoji-Symbol",
    es: "Icono Emoji",
    ru: "Иконка Эмодзи"
  },
  "ui.addCardCategory": {
    en: "Category",
    tr: "Kategori",
    de: "Kategorie",
    es: "Categoría",
    ru: "Категория"
  },
  "ui.addCardColorTheme": {
    en: "Select Color Theme",
    tr: "Renk Teması Seçin",
    de: "Farbthema wählen",
    es: "Elegir Tema de Color",
    ru: "Выбрать Цветовую Гамму"
  },
  "ui.addCardSaveBtn": {
    en: "Save and Create Card",
    tr: "Kayıt Et ve Kartı Ekle",
    de: "Speichern und Karte erstellen",
    es: "Guardar y Crear Tarjeta",
    ru: "Сохранить и Создать Карту"
  },
  "ui.backToHome": {
    en: "Back to Home",
    tr: "Ana Sayfaya Dön",
    de: "Zurück zur Startseite",
    es: "Volver al Inicio",
    ru: "На Главную"
  },
  "premium.activeTitle": {
    en: "You are a SleepyBaby Premium Member!",
    tr: "SleepyBaby Premium Üyesisiniz!",
    de: "Sie sind ein SleepyBaby Premium-Mitglied!",
    es: "¡Eres Miembro Premium de SleepyBaby!",
    ru: "Вы являетесь премиум-участником SleepyBaby!"
  },
  "premium.activeDesc": {
    en: "All synthesizers, custom sound cards, sound upload features, 100% ad-free experience (no transition ads), and advanced settings are fully unlocked.",
    tr: "Tüm sentezleyici ve özel ses kartları, ses ekleme özelliği, %100 reklamsız deneyim (geçiş reklamsız) ve gelişmiş ayarlar sınırsız açık.",
    de: "Alle Synthesizer, benutzerdefinierten Soundkarten, Upload-Funktionen, 100% werbefreies Erlebnis (keine Übergangswerbung) und erweiterten Einstellungen sind vollständig freigeschaltet.",
    es: "Todos los sintetizadores, tarjetas de sonido personalizadas, funciones de carga, experiencia 100% sin anuncios (sin anuncios de transición) y ajustes avanzados están completamente desbloqueados.",
    ru: "Все синтезаторы, пользовательские звуковые карты, функции загрузки, 100% без рекламы (без межстраничных объявлений) и настройки полностью разблокированы."
  },
  "premium.resetBtn": {
    en: "Reset Membership",
    tr: "Üyeliği Sıfırla",
    de: "Mitgliedschaft zurücksetzen",
    es: "Restablecer Membresía",
    ru: "Сбросить подписку"
  },
  "premium.inactiveTitle": {
    en: "Become a SleepyBaby Premium Member",
    tr: "SleepyBaby Premium Üye Olun",
    de: "SleepyBaby Premium-Mitglied werden",
    es: "Hazte Miembro Premium de SleepyBaby",
    ru: "Станьте премиум-участником SleepyBaby"
  },
  "premium.inactiveDesc": {
    en: "Access all synthesizer and custom sound cards, custom sound upload features, remove all transition ads (100% ad-free), and advanced settings. Just $10/month!",
    tr: "Tüm sentezleyici ve özel ses kartlarına, özel ses ekleme özelliğine, geçiş reklamlarının kaldırılmasına (%100 reklamsız) ve gelişmiş ayarlara erişin. Aylık sadece 10 dolar!",
    de: "Greifen Sie auf alle Synthesizer- und benutzerdefinierten Soundkarten, Upload-Funktionen, werbefreies Erlebnis (keine Übergangswerbung) und erweiterten Einstellungen zu. Nur 10 $/Monat!",
    es: "Accede a todos los sintetizadores, tarjetas de sonido personalizadas, funciones de carga, eliminación de todos los anuncios (100% sin anuncios) y de ajustes avanzados. ¡Solo $10/mes!",
    ru: "Получите доступ ко всем синтезаторам, пользовательским звуковым картам, функциям загрузки, удалению всей межстраничной рекламы (100% без рекламы) и настройкам. Всего 10 $/месяц!"
  },
  "premium.priceBadgeMonthly": {
    en: "Monthly",
    tr: "Aylık",
    de: "Monatlich",
    es: "Mensual",
    ru: "Ежемесячно"
  },
  "premium.priceBadgePerMonth": {
    en: "/ Month",
    tr: "/ Ay",
    de: "/ Monat",
    es: "/ Mes",
    ru: "/ Месяц"
  },
  "premium.buyBtn": {
    en: "Become Premium - $10 / Month",
    tr: "Premium Üye Ol - $10 / Ay",
    de: "Premium werden - 10 $ / Monat",
    es: "Hazte Premium - $10 / Mes",
    ru: "Стать Premium - 10 $ / Месяц"
  },
  "checkout.subtitle": {
    en: "SSL 256-Bit Secure Checkout Page",
    tr: "SSL 256-Bit Güvenli Ödeme Sayfası",
    de: "SSL 256-Bit Sichere Kasse",
    es: "Página de Pago Seguro SSL de 256 bits",
    ru: "Страница безопасной оплаты SSL 256-бит"
  },
  "checkout.cardType": {
    en: "PREMIUM MEMBER",
    tr: "PREMIUM ÜYE",
    de: "PREMIUM-MITGLIED",
    es: "MIEMBRO PREMIUM",
    ru: "ПРЕМИУМ-УЧАСТНИК"
  },
  "checkout.cardHolder": {
    en: "CARD HOLDER",
    tr: "KART SAHİBİ",
    de: "KARTENINHABER",
    es: "TITULAR DE LA TARJETA",
    ru: "ВЛАДЕЛЕЦ КАРТЫ"
  },
  "checkout.cardHolderPlaceholder": {
    en: "CARDHOLDER NAME",
    tr: "KART SAHİBİ ADI",
    de: "NAME DES INHABERS",
    es: "NOMBRE DEL TITULAR",
    ru: "ИМЯ ВЛАДЕЛЬЦА"
  },
  "checkout.cardExpiry": {
    en: "EXPIRY",
    tr: "SON KUL.",
    de: "GÜLTIG BIS",
    es: "VENCIMIENTO",
    ru: "СРОК ДЕЙСТВ."
  },
  "checkout.inputHolderLabel": {
    en: "CARDHOLDER'S NAME",
    tr: "KART SAHİBİNİN ADI",
    de: "NAME DES KARTENINHABERS",
    es: "NOMBRE DEL TITULAR DE LA TARJETA",
    ru: "ИМЯ НА КАРТЕ"
  },
  "checkout.inputHolderPlaceholder": {
    en: "e.g., John Doe",
    tr: "Örn: John Doe",
    de: "z.B. John Doe",
    es: "Ej: John Doe",
    ru: "Напр.: John Doe"
  },
  "checkout.inputNumberLabel": {
    en: "CARD NUMBER",
    tr: "KART NUMARASI",
    de: "KARTENNUMMER",
    es: "NÚMERO DE TARJETA",
    ru: "НОМЕР КАРТЫ"
  },
  "checkout.inputExpiryLabel": {
    en: "EXPIRATION DATE",
    tr: "SON KULLANMA TARİHİ",
    de: "ABLAUFDATUM",
    es: "FECHA DE CADUCIDAD",
    ru: "СРОК ДЕЙСТВИЯ"
  },
  "checkout.inputCvvLabel": {
    en: "SECURITY CODE (CVV)",
    tr: "GÜVENLİK KODU (CVV)",
    de: "SICHERHEITSCODE (CVV)",
    es: "CÓDIGO DE SEGURIDAD (CVV)",
    ru: "КОД БЕЗОПАСНОСТИ (CVV)"
  },
  "checkout.securityFooter": {
    en: "Your payments are protected under SSL 256-bit encryption.",
    tr: "Ödemeleriniz SSL 256-bit şifreleme koruması altındadır.",
    de: "Ihre Zahlungen sind durch SSL-256-Bit-Verschlüsselung geschützt.",
    es: "Sus pagos están protegidos con cifrado SSL de 256 bits.",
    ru: "Ваши платежи защищены 256-битным шифрованием SSL."
  },
  "checkout.submitBtn": {
    en: "Complete Payment - $10.00",
    tr: "Ödemeyi Tamamla - $10.00",
    de: "Zahlung abschließen - 10,00 $",
    es: "Completar Pago - $10.00",
    ru: "Завершить Оплату - $10.00"
  },
  "checkout.processingTitle": {
    en: "Secure Payment Processing",
    tr: "Güvenli Ödeme İşleniyor",
    de: "Sichere Zahlung wird verarbeitet",
    es: "Procesamiento de Pago Seguro",
    ru: "Обработка Безопасного Платежа"
  },
  "checkout.processingDesc": {
    en: "Please do not close or refresh this page. An encrypted connection is being established with your bank.",
    tr: "Lütfen bu sayfayı kapatmayın veya yenilemeyin. Bankanızla bağlantı şifreli olarak kuruluyor.",
    de: "Bitte schließen oder aktualisieren Sie diese Seite nicht. Eine verschlüsselte Verbindung zu Ihrer Bank wird hergestellt.",
    es: "Por favor, no cierre ni actualice esta página. Se está estableciendo una conexión cifrada con su banco.",
    ru: "Пожалуйста, не закрывайте и не обновляйте эту страницу. Устанавливается зашифрованное соединение с вашим банком."
  },
  "checkout.successTitle": {
    en: "Payment Successful!",
    tr: "Ödeme Başarılı!",
    de: "Zahlung erfolgreich!",
    es: "¡Pago Exitoso!",
    ru: "Оплата Успешна!"
  },
  "checkout.successSubtitle": {
    en: "SleepyBaby Premium Activated!",
    tr: "SleepyBaby Premium Aktif Edildi!",
    de: "SleepyBaby Premium aktiviert!",
    es: "¡SleepyBaby Premium Activado!",
    ru: "SleepyBaby Premium Активирован!"
  },
  "checkout.successDesc": {
    en: "Welcome to our premium world prepared with endless love. All customizable synthesizer sound cards and premium features are now unlocked for your unlimited use!",
    tr: "Sonsuz sevgiyle hazırlanan premium dünyamıza hoş geldiniz. Tüm değiştirilebilir sentezleyici ses kartları ve premium özellikler şu andan itibaren sınırsız kullanımınıza açıldı!",
    de: "Willkommen in unserer mit unendlicher Liebe vorbereiteten Premium-Welt. Alle anpassbaren Synthesizer-Soundkarten und Premium-Funktionen sind jetzt für Ihre unbegrenzte Nutzung freigeschaltet!",
    es: "Bienvenido a nuestro mundo premium preparado con amor infinito. ¡Todos los sintetizadores personalizables y funciones premium ahora están desbloqueados para su uso ilimitado!",
    ru: "Добро пожаловать в наш премиальный мир, созданный с бесконечной любовью. Все настраиваемые звуковые карты синтезаторов и премиум-функции теперь разблокированы для вашего неограниченного использования!"
  },
  "checkout.successBtn": {
    en: "Awesome! Start Using Now",
    tr: "Harika! Hemen Kullanmaya Başla",
    de: "Genial! Jetzt nutzen",
    es: "¡Genial! Empezar a usar ahora",
    ru: "Отлично! Начать Использовать"
  },
  "checkout.step1": {
    en: "Verifying card credentials...",
    tr: "Kart bilgileri doğrulanıyor...",
    de: "Karteninformationen werden überprüft...",
    es: "Verificando credenciales de la tarjeta...",
    ru: "Проверка данных карты..."
  },
  "checkout.step2": {
    en: "Establishing secure 3D Secure connection with your bank...",
    tr: "Bankanızla güvenli 3D Secure bağlantısı kuruluyor...",
    de: "Sichere 3D Secure-Verbindung zu Ihrer Bank wird hergestellt...",
    es: "Estableciendo conexión segura 3D Secure con su banco...",
    ru: "Установление безопасного соединения 3D Secure с вашим банком..."
  },
  "checkout.step3": {
    en: "Processing transaction...",
    tr: "Ödeme işlemi gerçekleştiriliyor...",
    de: "Transaktion wird verarbeitet...",
    es: "Procesando transacción...",
    ru: "Обработка транзакции..."
  },
  "checkout.step4": {
    en: "Activating premium membership features...",
    tr: "Premium üyelik özellikleri aktif ediliyor...",
    de: "Premium-Mitgliedschaftsfunktionen werden aktiviert...",
    es: "Activando funciones de membresía premium...",
    ru: "Активация функций премиум-подписки..."
  }
};

