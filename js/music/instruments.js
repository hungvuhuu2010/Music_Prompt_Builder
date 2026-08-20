/* =========================================================
   MUSIC DATABASE — INSTRUMENTS
   File: instruments.js
   ========================================================= */


/* =========================================================
   1. INSTRUMENT DATABASE
   ========================================================= */

export const instruments = [

    /* =====================================================
       A. GUITAR
       ===================================================== */

    {
        id: "acoustic_guitar",

        name: "Acoustic Guitar",

        nameVi: "Guitar acoustic",

        family: "strings",

        category: "guitar",

        description:
            "Nhạc cụ dây tạo âm thanh mộc, tự nhiên và gần gũi, " +
            "thường dùng trong Pop, Ballad, Acoustic, Folk và Bolero.",

        tonalCharacter: [
            "warm",
            "natural",
            "organic",
            "intimate",
            "bright"
        ],

        typicalRole: [
            "rhythm",
            "chord accompaniment",
            "arpeggio",
            "main accompaniment"
        ],

        typicalGenres: [
            "acoustic",
            "pop",
            "pop_ballad",
            "folk",
            "vietnamese_bolero",
            "nhac_vang"
        ],

        dynamics: "soft_to_medium",

        register: "mid",

        keywords: [
            "acoustic guitar",
            "warm guitar",
            "organic guitar",
            "fingerpicked guitar",
            "strummed guitar"
        ]
    },


    {
        id: "electric_guitar",

        name: "Electric Guitar",

        nameVi: "Guitar điện",

        family: "strings",

        category: "guitar",

        description:
            "Guitar điện có khả năng tạo nhiều màu âm từ sạch, ấm " +
            "đến mạnh, dày và distortion.",

        tonalCharacter: [
            "bright",
            "powerful",
            "sustained",
            "expressive",
            "aggressive"
        ],

        typicalRole: [
            "rhythm",
            "lead",
            "riff",
            "solo",
            "texture"
        ],

        typicalGenres: [
            "rock",
            "pop",
            "blues",
            "alternative_rock",
            "vietnamese_rock"
        ],

        dynamics: "medium_to_high",

        register: "mid_to_high",

        keywords: [
            "electric guitar",
            "guitar riff",
            "lead guitar",
            "guitar solo",
            "distorted guitar"
        ]
    },


    /* =====================================================
       B. KEYBOARD / PIANO
       ===================================================== */

    {
        id: "piano",

        name: "Piano",

        nameVi: "Piano",

        family: "keyboard",

        category: "piano",

        description:
            "Piano là nhạc cụ linh hoạt, có thể đảm nhiệm hòa âm, " +
            "giai điệu, đệm hát và tạo cao trào.",

        tonalCharacter: [
            "warm",
            "clear",
            "expressive",
            "rich",
            "dynamic"
        ],

        typicalRole: [
            "chord accompaniment",
            "melody",
            "arpeggio",
            "main accompaniment",
            "dramatic accent"
        ],

        typicalGenres: [
            "pop",
            "pop_ballad",
            "rnb",
            "acoustic",
            "cinematic",
            "classical"
        ],

        dynamics: "soft_to_high",

        register: "wide",

        keywords: [
            "piano",
            "emotional piano",
            "soft piano",
            "piano accompaniment",
            "piano arpeggio"
        ]
    },


    {
        id: "electric_piano",

        name: "Electric Piano",

        nameVi: "Piano điện",

        family: "keyboard",

        category: "piano",

        description:
            "Piano điện tạo màu âm mềm, ấm và mượt, thường xuất hiện " +
            "trong R&B, Soul, Jazz và Pop hiện đại.",

        tonalCharacter: [
            "smooth",
            "warm",
            "soft",
            "groovy",
            "mellow"
        ],

        typicalRole: [
            "chord accompaniment",
            "groove",
            "harmonic texture"
        ],

        typicalGenres: [
            "rnb",
            "soul",
            "jazz",
            "pop"
        ],

        dynamics: "soft_to_medium",

        register: "mid",

        keywords: [
            "electric piano",
            "Rhodes piano",
            "warm electric piano",
            "smooth keys"
        ]
    },


    /* =====================================================
       C. STRINGS
       ===================================================== */

    {
        id: "violin",

        name: "Violin",

        nameVi: "Đàn violin",

        family: "strings",

        category: "orchestral_strings",

        description:
            "Violin có âm sắc giàu biểu cảm, thích hợp cho giai điệu, " +
            "counter-melody và những đoạn cao trào.",

        tonalCharacter: [
            "emotional",
            "expressive",
            "bright",
            "lyrical",
            "dramatic"
        ],

        typicalRole: [
            "melody",
            "counter_melody",
            "solo",
            "emotional texture"
        ],

        typicalGenres: [
            "pop_ballad",
            "cinematic",
            "classical",
            "nhac_vang",
            "ballad"
        ],

        dynamics: "soft_to_high",

        register: "high",

        keywords: [
            "violin",
            "emotional violin",
            "solo violin",
            "string melody"
        ]
    },


    {
        id: "string_section",

        name: "String Section",

        nameVi: "Dàn dây",

        family: "strings",

        category: "orchestral_strings",

        description:
            "Nhóm nhạc cụ dây gồm violin, viola và cello, thường dùng " +
            "để tạo nền hòa âm và mở rộng cảm xúc.",

        tonalCharacter: [
            "warm",
            "lush",
            "cinematic",
            "emotional",
            "dramatic"
        ],

        typicalRole: [
            "background",
            "harmonic pad",
            "crescendo",
            "emotional support",
            "climax"
        ],

        typicalGenres: [
            "pop_ballad",
            "cinematic",
            "nhac_vang",
            "pop",
            "classical"
        ],

        dynamics: "soft_to_high",

        register: "wide",

        keywords: [
            "strings",
            "string section",
            "orchestral strings",
            "lush strings",
            "cinematic strings"
        ]
    },


    {
        id: "cello",

        name: "Cello",

        nameVi: "Đàn cello",

        family: "strings",

        category: "orchestral_strings",

        description:
            "Cello có âm vực trầm ấm, sâu và giàu cảm xúc, thích hợp " +
            "cho nền hòa âm và những đoạn nhạc mang tính tự sự.",

        tonalCharacter: [
            "deep",
            "warm",
            "dark",
            "emotional",
            "rich"
        ],

        typicalRole: [
            "bass support",
            "melody",
            "counter_melody",
            "emotional texture"
        ],

        typicalGenres: [
            "cinematic",
            "classical",
            "ballad",
            "pop"
        ],

        dynamics: "soft_to_high",

        register: "low_to_mid",

        keywords: [
            "cello",
            "deep cello",
            "emotional cello",
            "warm cello"
        ]
    },


    /* =====================================================
       D. BASS
       ===================================================== */

    {
        id: "bass",

        name: "Bass Guitar",

        nameVi: "Bass điện",

        family: "strings",

        category: "bass",

        description:
            "Bass giữ nền tần số thấp, kết nối giữa hòa âm và nhịp điệu " +
            "của toàn bộ bản phối.",

        tonalCharacter: [
            "deep",
            "warm",
            "punchy",
            "groovy"
        ],

        typicalRole: [
            "bassline",
            "rhythm foundation",
            "harmonic foundation"
        ],

        typicalGenres: [
            "pop",
            "rock",
            "rnb",
            "funk",
            "hiphop",
            "vietnamese_bolero"
        ],

        dynamics: "medium_to_high",

        register: "low",

        keywords: [
            "bass",
            "bass guitar",
            "deep bass",
            "groovy bassline",
            "warm bass"
        ]
    },


    {
        id: "808_bass",

        name: "808 Bass",

        nameVi: "Bass 808",

        family: "electronic",

        category: "bass",

        description:
            "Bass điện tử có âm vực rất thấp, thường kết hợp với kick " +
            "và trap drums để tạo cảm giác mạnh và hiện đại.",

        tonalCharacter: [
            "deep",
            "sub-heavy",
            "punchy",
            "dark",
            "powerful"
        ],

        typicalRole: [
            "sub bass",
            "bassline",
            "rhythmic bass"
        ],

        typicalGenres: [
            "trap",
            "hiphop",
            "rap",
            "edm"
        ],

        dynamics: "high",

        register: "sub",

        keywords: [
            "808",
            "808 bass",
            "sub bass",
            "deep 808",
            "heavy bass"
        ]
    },


    /* =====================================================
       E. DRUMS & PERCUSSION
       ===================================================== */

    {
        id: "drum_kit",

        name: "Drum Kit",

        nameVi: "Bộ trống",

        family: "percussion",

        category: "drums",

        description:
            "Bộ trống acoustic hoặc electronic đảm nhiệm nhịp chính " +
            "và tạo động lực cho bản phối.",

        tonalCharacter: [
            "punchy",
            "dynamic",
            "powerful",
            "rhythmic"
        ],

        typicalRole: [
            "beat",
            "rhythm foundation",
            "accent",
            "dynamic build"
        ],

        typicalGenres: [
            "pop",
            "rock",
            "rnb",
            "acoustic",
            "ballad"
        ],

        dynamics: "medium_to_high",

        register: "wide",

        keywords: [
            "drums",
            "drum kit",
            "acoustic drums",
            "live drums",
            "punchy drums"
        ]
    },


    {
        id: "electronic_drums",

        name: "Electronic Drums",

        nameVi: "Trống điện tử",

        family: "electronic",

        category: "drums",

        description:
            "Trống điện tử tạo nhịp chính xác, mạnh và phù hợp với " +
            "những bản phối Pop, EDM và Electronic.",

        tonalCharacter: [
            "clean",
            "punchy",
            "precise",
            "powerful"
        ],

        typicalRole: [
            "beat",
            "groove",
            "dance rhythm"
        ],

        typicalGenres: [
            "edm",
            "pop",
            "electronic",
            "dance"
        ],

        dynamics: "medium_to_high",

        register: "wide",

        keywords: [
            "electronic drums",
            "electronic beat",
            "dance drums",
            "punchy electronic drums"
        ]
    },


    {
        id: "soft_percussion",

        name: "Soft Percussion",

        nameVi: "Bộ gõ nhẹ",

        family: "percussion",

        category: "percussion",

        description:
            "Các nhạc cụ gõ nhẹ dùng để bổ sung nhịp mà không làm dày bản phối.",

        tonalCharacter: [
            "soft",
            "organic",
            "subtle",
            "warm"
        ],

        typicalRole: [
            "rhythmic texture",
            "accent",
            "background rhythm"
        ],

        typicalGenres: [
            "bolero",
            "acoustic",
            "folk",
            "ballad"
        ],

        dynamics: "soft",

        register: "mid",

        keywords: [
            "soft percussion",
            "light percussion",
            "subtle percussion"
        ]
    },


    {
        id: "cajon",

        name: "Cajon",

        nameVi: "Cajon",

        family: "percussion",

        category: "percussion",

        description:
            "Nhạc cụ gõ dạng hộp tạo âm thanh mộc và gần gũi, " +
            "phù hợp với Acoustic và các bản phối nhẹ.",

        tonalCharacter: [
            "warm",
            "organic",
            "dry",
            "intimate"
        ],

        typicalRole: [
            "rhythm",
            "beat",
            "acoustic groove"
        ],

        typicalGenres: [
            "acoustic",
            "folk",
            "pop_ballad"
        ],

        dynamics: "soft_to_medium",

        register: "low_to_mid",

        keywords: [
            "cajon",
            "acoustic percussion",
            "organic percussion"
        ]
    },


    /* =====================================================
       F. TRADITIONAL VIETNAMESE
       ===================================================== */

    {
        id: "bamboo_flute",

        name: "Bamboo Flute",

        nameVi: "Sáo trúc",

        family: "woodwind",

        category: "vietnamese_traditional",

        description:
            "Sáo trúc Việt Nam có âm thanh trong trẻo, tự nhiên và giàu " +
            "màu sắc dân gian.",

        tonalCharacter: [
            "airy",
            "bright",
            "natural",
            "lyrical",
            "folk"
        ],

        typicalRole: [
            "melody",
            "intro",
            "interlude",
            "counter_melody"
        ],

        typicalGenres: [
            "vietnamese_folk",
            "quan_ho",
            "traditional",
            "cinematic"
        ],

        dynamics: "soft_to_medium",

        register: "mid_to_high",

        keywords: [
            "Vietnamese bamboo flute",
            "bamboo flute",
            "flute",
            "folk flute"
        ]
    },


    {
        id: "dan_tranh",

        name: "Đàn tranh",

        nameVi: "Đàn tranh",

        family: "strings",

        category: "vietnamese_traditional",

        description:
            "Đàn tranh là nhạc cụ dây truyền thống Việt Nam với âm thanh " +
            "trong, sáng và giàu chất Á Đông.",

        tonalCharacter: [
            "bright",
            "delicate",
            "airy",
            "lyrical",
            "oriental"
        ],

        typicalRole: [
            "melody",
            "arpeggio",
            "ornament",
            "texture"
        ],

        typicalGenres: [
            "vietnamese_folk",
            "traditional",
            "cinematic"
        ],

        dynamics: "soft_to_medium",

        register: "mid_to_high",

        keywords: [
            "dan tranh",
            "Vietnamese zither",
            "Vietnamese traditional zither",
            "oriental strings"
        ]
    },


    {
        id: "dan_nguyet",

        name: "Đàn nguyệt",

        nameVi: "Đàn nguyệt",

        family: "strings",

        category: "vietnamese_traditional",

        description:
            "Đàn nguyệt có âm thanh rõ, vang và đặc trưng trong âm nhạc " +
            "truyền thống Việt Nam.",

        tonalCharacter: [
            "bright",
            "resonant",
            "clear",
            "traditional"
        ],

        typicalRole: [
            "melody",
            "accompaniment",
            "ornament"
        ],

        typicalGenres: [
            "vietnamese_folk",
            "cai_luong",
            "traditional"
        ],

        dynamics: "medium",

        register: "mid",

        keywords: [
            "dan nguyet",
            "moon lute",
            "Vietnamese moon lute"
        ]
    },


    {
        id: "dan_co",

        name: "Đàn cò",

        nameVi: "Đàn cò",

        family: "strings",

        category: "vietnamese_traditional",

        description:
            "Đàn cò là nhạc cụ kéo dây truyền thống với âm thanh giàu " +
            "biểu cảm, thường xuất hiện trong âm nhạc dân gian và sân khấu.",

        tonalCharacter: [
            "expressive",
            "nasal",
            "emotional",
            "traditional"
        ],

        typicalRole: [
            "melody",
            "counter_melody",
            "ornament"
        ],

        typicalGenres: [
            "cai_luong",
            "vietnamese_folk",
            "traditional"
        ],

        dynamics: "soft_to_medium",

        register: "mid",

        keywords: [
            "dan co",
            "two-string fiddle",
            "Vietnamese fiddle",
            "traditional fiddle"
        ]
    },


    /* =====================================================
       G. ACCORDION
       ===================================================== */

    {
        id: "accordion",

        name: "Accordion",

        nameVi: "Đàn accordion",

        family: "keyboard",

        category: "accordion",

        description:
            "Accordion tạo màu âm đặc trưng, thường được sử dụng " +
            "trong Bolero, Nhạc vàng và các phong cách trữ tình.",

        tonalCharacter: [
            "warm",
            "nostalgic",
            "expressive",
            "vintage"
        ],

        typicalRole: [
            "chord accompaniment",
            "melody",
            "counter_melody",
            "texture"
        ],

        typicalGenres: [
            "vietnamese_bolero",
            "nhac_vang",
            "folk",
            "tango"
        ],

        dynamics: "soft_to_medium",

        register: "wide",

        keywords: [
            "accordion",
            "warm accordion",
            "nostalgic accordion",
            "vintage accordion"
        ]
    },


    /* =====================================================
       H. ORCHESTRAL / CINEMATIC
       ===================================================== */

    {
        id: "orchestral_percussion",

        name: "Orchestral Percussion",

        nameVi: "Bộ gõ giao hưởng",

        family: "percussion",

        category: "orchestral",

        description:
            "Các nhạc cụ gõ giao hưởng dùng để tạo cao trào, nhấn mạnh " +
            "và mở rộng quy mô cảm xúc.",

        tonalCharacter: [
            "powerful",
            "dramatic",
            "cinematic",
            "epic"
        ],

        typicalRole: [
            "climax",
            "impact",
            "crescendo",
            "dramatic accent"
        ],

        typicalGenres: [
            "cinematic",
            "orchestral",
            "epic",
            "pop_ballad"
        ],

        dynamics: "high",

        register: "wide",

        keywords: [
            "orchestral percussion",
            "cinematic percussion",
            "epic percussion",
            "dramatic drums"
        ]
    },


    /* =====================================================
       I. SYNTHESIZER / ELECTRONIC
       ===================================================== */

    {
        id: "synthesizer",

        name: "Synthesizer",

        nameVi: "Synthesizer",

        family: "electronic",

        category: "synth",

        description:
            "Synthesizer có khả năng tạo nhiều loại âm thanh điện tử, " +
            "từ pad, lead đến bass và texture.",

        tonalCharacter: [
            "modern",
            "bright",
            "dark",
            "processed",
            "wide"
        ],

        typicalRole: [
            "lead",
            "pad",
            "bass",
            "texture",
            "melody"
        ],

        typicalGenres: [
            "edm",
            "pop",
            "electronic",
            "synthpop",
            "rap"
        ],

        dynamics: "soft_to_high",

        register: "wide",

        keywords: [
            "synthesizer",
            "synth",
            "electronic synth",
            "modern synth"
        ]
    },


    {
        id: "synth_pad",

        name: "Synth Pad",

        nameVi: "Synth Pad",

        family: "electronic",

        category: "pad",

        description:
            "Lớp âm thanh nền kéo dài dùng để tạo không gian và độ rộng " +
            "cho bản phối.",

        tonalCharacter: [
            "soft",
            "ambient",
            "warm",
            "wide",
            "dreamy"
        ],

        typicalRole: [
            "background",
            "harmonic pad",
            "atmosphere",
            "texture"
        ],

        typicalGenres: [
            "pop",
            "rnb",
            "edm",
            "cinematic",
            "ambient"
        ],

        dynamics: "soft_to_medium",

        register: "wide",

        keywords: [
            "synth pad",
            "ambient pad",
            "soft pad",
            "warm pad",
            "atmospheric pad"
        ]
    },


    {
        id: "arpeggiator",

        name: "Arpeggiator",

        nameVi: "Arpeggiator",

        family: "electronic",

        category: "synth",

        description:
            "Hiệu ứng hoặc công cụ tạo chuỗi nốt lặp theo hợp âm, " +
            "thường dùng để tạo chuyển động trong bản phối điện tử.",

        tonalCharacter: [
            "rhythmic",
            "bright",
            "repetitive",
            "modern"
        ],

        typicalRole: [
            "rhythmic texture",
            "ostinato",
            "background pattern"
        ],

        typicalGenres: [
            "edm",
            "electronic",
            "synthpop",
            "pop"
        ],

        dynamics: "medium",

        register: "mid_to_high",

        keywords: [
            "arpeggiator",
            "arp",
            "synth arpeggio",
            "rhythmic synth"
        ]
    },


    /* =====================================================
       J. VOICE
       ===================================================== */

    {
        id: "vocal",

        name: "Lead Vocal",

        nameVi: "Giọng hát chính",

        family: "voice",

        category: "vocal",

        description:
            "Giọng hát chính đóng vai trò trung tâm trong bài hát, " +
            "truyền tải giai điệu, ca từ và cảm xúc.",

        tonalCharacter: [
            "expressive",
            "emotional",
            "clear",
            "dynamic"
        ],

        typicalRole: [
            "lead",
            "melody",
            "storytelling"
        ],

        typicalGenres: [
            "all"
        ],

        dynamics: "soft_to_high",

        register: "depends_on_voice",

        keywords: [
            "lead vocal",
            "main vocal",
            "expressive vocal",
            "emotional vocal"
        ]
    },


    {
        id: "backing_vocals",

        name: "Backing Vocals",

        nameVi: "Bè vocal",

        family: "voice",

        category: "vocal",

        description:
            "Giọng bè hỗ trợ giọng hát chính, tạo độ dày và mở rộng " +
            "không gian cho phần điệp khúc.",

        tonalCharacter: [
            "warm",
            "supportive",
            "harmonic",
            "wide"
        ],

        typicalRole: [
            "harmony",
            "background",
            "chorus support",
            "call and response"
        ],

        typicalGenres: [
            "pop",
            "rnb",
            "rock",
            "gospel",
            "ballad"
        ],

        dynamics: "soft_to_medium",

        register: "wide",

        keywords: [
            "backing vocals",
            "vocal harmony",
            "background vocals",
            "harmonies"
        ]
    }

];


/* =========================================================
   2. HELPER FUNCTIONS
   ========================================================= */


/**
 * Lấy nhạc cụ theo ID
 */
export function getInstrumentById(id) {

    return instruments.find(
        instrument => instrument.id === id
    ) || null;
}


/**
 * Lấy nhạc cụ theo family
 */
export function getInstrumentsByFamily(family) {

    return instruments.filter(
        instrument => instrument.family === family
    );
}


/**
 * Lấy nhạc cụ theo category
 */
export function getInstrumentsByCategory(category) {

    return instruments.filter(
        instrument => instrument.category === category
    );
}


/**
 * Lấy danh sách family
 */
export function getInstrumentFamilies() {

    return [
        ...new Set(
            instruments.map(
                instrument => instrument.family
            )
        )
    ];
}


/**
 * Lấy danh sách category
 */
export function getInstrumentCategories() {

    return [
        ...new Set(
            instruments.map(
                instrument => instrument.category
            )
        )
    ];
}


/**
 * Tìm nhạc cụ theo từ khóa
 */
export function searchInstruments(keyword) {

    const query = String(keyword || "")
        .toLowerCase()
        .trim();

    if (!query) {
        return [];
    }

    return instruments.filter(instrument => {

        const text = [

            instrument.id,

            instrument.name,

            instrument.nameVi,

            instrument.family,

            instrument.category,

            instrument.description,

            ...instrument.tonalCharacter,

            ...instrument.typicalRole,

            ...instrument.typicalGenres,

            ...instrument.keywords

        ]
            .join(" ")
            .toLowerCase();

        return text.includes(query);
    });
}


/**
 * Lấy nhạc cụ phù hợp với genre
 */
export function getInstrumentsByGenre(genreId) {

    return instruments.filter(instrument => {

        return instrument.typicalGenres.includes("all") ||
               instrument.typicalGenres.includes(genreId);

    });
}


/**
 * Lấy nhạc cụ phù hợp với mood
 *
 * Ví dụ:
 * getInstrumentsByMood("warm")
 */
export function getInstrumentsByMood(mood) {

    const query = String(mood || "")
        .toLowerCase()
        .trim();

    if (!query) {
        return [];
    }

    return instruments.filter(instrument => {

        return instrument.tonalCharacter
            .some(character =>
                character.toLowerCase() === query
            );

    });
}


/**
 * Lấy danh sách nhạc cụ theo nhiều ID
 */
export function getInstrumentsByIds(ids = []) {

    return ids
        .map(id => getInstrumentById(id))
        .filter(Boolean);
}