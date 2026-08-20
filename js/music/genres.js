/* =========================================================
   AI MUSIC PROMPT BUILDER
   MUSIC DATABASE — GENRES

   File:
   js/music/genres.js

   Purpose:
   - Cơ sở dữ liệu các thể loại âm nhạc
   - Cung cấp thông tin mặc định cho từng genre
   - Không chứa UI
   - Không chứa logic tạo prompt
   - Không phụ thuộc DOM
   ========================================================= */


/* =========================================================
   1. GENRES DATABASE
   ========================================================= */

export const genres = [

    /* =====================================================
       VIỆT NAM — TRỮ TÌNH
       ===================================================== */

    {
        id: "vietnamese_bolero",

        name: "Bolero Việt Nam",

        category: "vietnamese_traditional_pop",

        description:
            "Dòng nhạc trữ tình mang màu sắc Bolero Việt Nam, " +
            "thường gắn với tâm sự, tình yêu, quê hương và hoài niệm.",

        defaultTempo: {
            min: 68,
            max: 82,
            recommended: 74
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "nostalgic",
            "melancholic",
            "romantic",
            "sentimental"
        ],

        defaultEnergy: "low_to_medium",

        typicalVocals: [
            "warm",
            "emotional",
            "expressive"
        ],

        mainInstruments: [
            "acoustic guitar",
            "bass"
        ],

        secondaryInstruments: [
            "accordion",
            "electric guitar",
            "soft percussion",
            "keyboard"
        ],

        arrangement: {
            style: "traditional Vietnamese bolero",
            density: "moderate",
            dynamics: "gentle and expressive"
        },

        structure: [
            "intro",
            "verse_1",
            "verse_2",
            "chorus",
            "verse_3",
            "chorus",
            "outro"
        ],

        keywords: [
            "Vietnamese Bolero",
            "nostalgic",
            "sentimental",
            "romantic",
            "traditional Vietnamese popular music"
        ]
    },


    {
        id: "nhac_vang",

        name: "Nhạc vàng",

        category: "vietnamese_sentimental",

        description:
            "Âm nhạc trữ tình Việt Nam mang màu sắc hoài niệm, " +
            "thường sử dụng giai điệu giàu cảm xúc và ca từ gần gũi.",

        defaultTempo: {
            min: 65,
            max: 90,
            recommended: 76
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "nostalgic",
            "melancholic",
            "sentimental"
        ],

        defaultEnergy: "low_to_medium",

        typicalVocals: [
            "warm",
            "emotional",
            "intimate"
        ],

        mainInstruments: [
            "acoustic guitar",
            "bass"
        ],

        secondaryInstruments: [
            "piano",
            "accordion",
            "electric guitar",
            "strings",
            "soft percussion"
        ],

        arrangement: {
            style: "classic Vietnamese sentimental arrangement",
            density: "moderate",
            dynamics: "gentle and emotional"
        },

        structure: [
            "intro",
            "verse",
            "chorus",
            "verse",
            "chorus",
            "outro"
        ],

        keywords: [
            "Vietnamese sentimental music",
            "Nhạc vàng",
            "nostalgic",
            "classic Vietnamese song"
        ]
    },


    /* =====================================================
       VIỆT NAM — HIỆN ĐẠI
       ===================================================== */

    {
        id: "vietnamese_pop_ballad",

        name: "Pop Ballad Việt Nam",

        category: "modern_vietnamese",

        description:
            "Pop Ballad hiện đại Việt Nam với giai điệu dễ nhớ, " +
            "tập trung vào cảm xúc và câu chuyện của ca từ.",

        defaultTempo: {
            min: 65,
            max: 90,
            recommended: 76
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "emotional",
            "romantic",
            "melancholic"
        ],

        defaultEnergy: "low_to_medium",

        typicalVocals: [
            "clear",
            "emotional",
            "intimate"
        ],

        mainInstruments: [
            "piano",
            "acoustic guitar"
        ],

        secondaryInstruments: [
            "strings",
            "bass",
            "drums",
            "pads"
        ],

        arrangement: {
            style: "modern pop ballad",
            density: "moderate_to_rich",
            dynamics: "soft verses with powerful chorus"
        },

        structure: [
            "intro",
            "verse_1",
            "pre_chorus",
            "chorus",
            "verse_2",
            "pre_chorus",
            "chorus",
            "bridge",
            "final_chorus",
            "outro"
        ],

        keywords: [
            "Vietnamese Pop",
            "Pop Ballad",
            "emotional",
            "modern",
            "romantic"
        ]
    },


    {
        id: "vietnamese_rock",

        name: "Rock Việt",

        category: "modern_vietnamese",

        description:
            "Rock được thể hiện với ca từ và màu sắc Việt Nam, " +
            "có thể kết hợp Rock hiện đại với các yếu tố bản địa.",

        defaultTempo: {
            min: 100,
            max: 150,
            recommended: 125
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "energetic",
            "powerful",
            "rebellious"
        ],

        defaultEnergy: "high",

        typicalVocals: [
            "powerful",
            "dynamic",
            "expressive"
        ],

        mainInstruments: [
            "electric guitar",
            "bass",
            "drums"
        ],

        secondaryInstruments: [
            "piano",
            "synthesizer",
            "strings"
        ],

        arrangement: {
            style: "modern rock",
            density: "rich",
            dynamics: "dynamic and powerful"
        },

        structure: [
            "intro",
            "verse_1",
            "chorus",
            "verse_2",
            "chorus",
            "guitar_solo",
            "bridge",
            "final_chorus",
            "outro"
        ],

        keywords: [
            "Vietnamese Rock",
            "Rock",
            "electric guitar",
            "powerful"
        ]
    },


    {
        id: "vietnamese_rap",

        name: "Rap Việt",

        category: "modern_vietnamese",

        description:
            "Rap/Hip-hop với ca từ tiếng Việt, chú trọng flow, " +
            "rhythm, rhyme và khả năng kể chuyện.",

        defaultTempo: {
            min: 80,
            max: 110,
            recommended: 90
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "confident",
            "urban",
            "energetic"
        ],

        defaultEnergy: "medium_to_high",

        typicalVocals: [
            "rhythmic",
            "articulate",
            "expressive"
        ],

        mainInstruments: [
            "drums",
            "808 bass"
        ],

        secondaryInstruments: [
            "piano",
            "synthesizer",
            "samples",
            "percussion"
        ],

        arrangement: {
            style: "modern Vietnamese hip-hop production",
            density: "moderate_to_rich",
            dynamics: "rhythmic and punchy"
        },

        structure: [
            "intro",
            "verse_1",
            "hook",
            "verse_2",
            "hook",
            "bridge",
            "final_hook",
            "outro"
        ],

        keywords: [
            "Vietnamese Rap",
            "Vietnamese Hip-Hop",
            "Rap",
            "Hip-Hop",
            "flow",
            "808"
        ]
    },


    /* =====================================================
       VIỆT NAM — DÂN GIAN / TRUYỀN THỐNG
       ===================================================== */

    {
        id: "vietnamese_folk",

        name: "Dân ca Việt Nam",

        category: "vietnamese_folk",

        description:
            "Âm nhạc mang đặc trưng dân gian Việt Nam, " +
            "có thể phát triển theo màu sắc vùng miền.",

        defaultTempo: {
            min: 70,
            max: 110,
            recommended: 88
        },

        defaultTimeSignature: "2/4",

        defaultMood: [
            "warm",
            "traditional",
            "nostalgic",
            "folk"
        ],

        defaultEnergy: "low_to_medium",

        typicalVocals: [
            "natural",
            "expressive",
            "folk_style"
        ],

        mainInstruments: [
            "traditional Vietnamese instruments"
        ],

        secondaryInstruments: [
            "bamboo flute",
            "zither",
            "two-string fiddle",
            "moon lute",
            "traditional percussion"
        ],

        arrangement: {
            style: "Vietnamese traditional folk",
            density: "sparse_to_moderate",
            dynamics: "natural and organic"
        },

        structure: [
            "intro",
            "folk_verse",
            "refrain",
            "folk_verse",
            "refrain",
            "outro"
        ],

        keywords: [
            "Vietnamese folk",
            "traditional Vietnamese music",
            "folk melody",
            "regional Vietnamese music"
        ]
    },


    {
        id: "quan_ho",

        name: "Quan họ Bắc Ninh",

        category: "vietnamese_folk",

        description:
            "Phong cách âm nhạc dân gian Quan họ Bắc Ninh, " +
            "đặc trưng bởi lối hát đối đáp và giai điệu mềm mại.",

        defaultTempo: {
            min: 65,
            max: 95,
            recommended: 78
        },

        defaultTimeSignature: "free_rhythm",

        defaultMood: [
            "gentle",
            "lyrical",
            "traditional",
            "romantic"
        ],

        defaultEnergy: "low",

        typicalVocals: [
            "clear",
            "resonant",
            "ornamented",
            "folk_style"
        ],

        mainInstruments: [
            "voice"
        ],

        secondaryInstruments: [
            "traditional Vietnamese instruments"
        ],

        arrangement: {
            style: "Quan họ vocal tradition",
            density: "sparse",
            dynamics: "vocal-centered"
        },

        structure: [
            "opening_exchange",
            "vocal_phrase",
            "response_phrase",
            "development",
            "closing_exchange"
        ],

        keywords: [
            "Quan họ",
            "Bac Ninh folk music",
            "Vietnamese folk singing",
            "call and response"
        ]
    },


    {
        id: "cai_luong",

        name: "Cải lương",

        category: "vietnamese_traditional_theatre",

        description:
            "Âm nhạc sân khấu truyền thống Nam Bộ với tính tự sự, " +
            "kịch tính và giàu biểu cảm.",

        defaultTempo: {
            min: 60,
            max: 100,
            recommended: 76
        },

        defaultTimeSignature: "flexible",

        defaultMood: [
            "dramatic",
            "emotional",
            "traditional",
            "expressive"
        ],

        defaultEnergy: "variable",

        typicalVocals: [
            "dramatic",
            "expressive",
            "ornamented"
        ],

        mainInstruments: [
            "two-string fiddle",
            "moon lute"
        ],

        secondaryInstruments: [
            "zither",
            "flute",
            "traditional percussion"
        ],

        arrangement: {
            style: "Vietnamese cải lương",
            density: "moderate",
            dynamics: "dramatic and expressive"
        },

        structure: [
            "instrumental_intro",
            "narrative_section",
            "song_section",
            "dramatic_section",
            "climax",
            "resolution"
        ],

        keywords: [
            "Cai Luong",
            "Vietnamese southern theatre",
            "dramatic Vietnamese traditional music"
        ]
    },


    /* =====================================================
       QUỐC TẾ — R&B / ACOUSTIC
       ===================================================== */

    {
        id: "rnb",

        name: "R&B",

        category: "modern",

        description:
            "R&B hiện đại với groove mềm mại, vocal giàu cảm xúc " +
            "và hòa âm phong phú.",

        defaultTempo: {
            min: 70,
            max: 105,
            recommended: 86
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "smooth",
            "sensual",
            "emotional",
            "groovy"
        ],

        defaultEnergy: "medium",

        typicalVocals: [
            "smooth",
            "soulful",
            "expressive"
        ],

        mainInstruments: [
            "electric piano",
            "bass",
            "drums"
        ],

        secondaryInstruments: [
            "synthesizer",
            "electric guitar",
            "pads"
        ],

        arrangement: {
            style: "modern R&B",
            density: "moderate",
            dynamics: "smooth and groove-oriented"
        },

        structure: [
            "intro",
            "verse",
            "pre_chorus",
            "chorus",
            "verse",
            "chorus",
            "bridge",
            "final_chorus",
            "outro"
        ],

        keywords: [
            "R&B",
            "Soul",
            "groove",
            "smooth vocal"
        ]
    },


    {
        id: "acoustic",

        name: "Acoustic",

        category: "modern",

        description:
            "Phong cách acoustic mộc, gần gũi, tập trung vào giọng hát " +
            "và nhạc cụ tự nhiên.",

        defaultTempo: {
            min: 65,
            max: 105,
            recommended: 80
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "warm",
            "intimate",
            "peaceful",
            "natural"
        ],

        defaultEnergy: "low_to_medium",

        typicalVocals: [
            "natural",
            "warm",
            "intimate"
        ],

        mainInstruments: [
            "acoustic guitar"
        ],

        secondaryInstruments: [
            "piano",
            "cajon",
            "strings",
            "bass"
        ],

        arrangement: {
            style: "organic acoustic arrangement",
            density: "sparse_to_moderate",
            dynamics: "natural and intimate"
        },

        structure: [
            "intro",
            "verse_1",
            "chorus",
            "verse_2",
            "chorus",
            "bridge",
            "final_chorus",
            "outro"
        ],

        keywords: [
            "Acoustic",
            "organic",
            "intimate",
            "unplugged"
        ]
    },


    /* =====================================================
       QUỐC TẾ — ELECTRONIC
       ===================================================== */

    {
        id: "edm",

        name: "EDM",

        category: "electronic",

        description:
            "Electronic Dance Music với nhịp mạnh, năng lượng cao " +
            "và cấu trúc hướng đến drop.",

        defaultTempo: {
            min: 120,
            max: 135,
            recommended: 128
        },

        defaultTimeSignature: "4/4",

        defaultMood: [
            "energetic",
            "euphoric",
            "uplifting"
        ],

        defaultEnergy: "high",

        typicalVocals: [
            "powerful",
            "bright",
            "processed"
        ],

        mainInstruments: [
            "synthesizer",
            "electronic drums",
            "bass"
        ],

        secondaryInstruments: [
            "pads",
            "arpeggiator",
            "effects"
        ],

        arrangement: {
            style: "modern EDM",
            density: "rich",
            dynamics: "build and drop"
        },

        structure: [
            "intro",
            "build",
            "drop",
            "verse",
            "build",
            "drop",
            "breakdown",
            "final_drop",
            "outro"
        ],

        keywords: [
            "EDM",
            "Electronic Dance Music",
            "dance",
            "drop",
            "synth"
        ]
    }

];


/* =========================================================
   2. HELPER FUNCTIONS
   ========================================================= */


/**
 * Lấy genre theo ID
 *
 * @param {string} id
 * @returns {Object|null}
 */
export function getGenreById(id) {

    if (!id) {
        return null;
    }

    return (
        genres.find(
            genre => genre.id === id
        ) || null
    );
}


/**
 * Lấy danh sách genre theo category
 *
 * @param {string} category
 * @returns {Array}
 */
export function getGenresByCategory(category) {

    if (!category) {
        return [];
    }

    return genres.filter(
        genre => genre.category === category
    );
}


/**
 * Lấy tất cả category của genre
 *
 * @returns {Array<string>}
 */
export function getGenreCategories() {

    return [
        ...new Set(
            genres.map(
                genre => genre.category
            )
        )
    ];
}


/**
 * Tìm genre theo từ khóa
 *
 * Tìm trong:
 * - id
 * - name
 * - category
 * - description
 * - keywords
 *
 * @param {string} keyword
 * @returns {Array}
 */
export function searchGenres(keyword) {

    if (
        typeof keyword !== "string" ||
        !keyword.trim()
    ) {
        return [];
    }

    const query =
        keyword
            .toLowerCase()
            .trim();

    return genres.filter(genre => {

        const text = [

            genre.id,

            genre.name,

            genre.category,

            genre.description,

            ...(genre.keywords || [])

        ]
            .join(" ")
            .toLowerCase();

        return text.includes(query);
    });
}


/**
 * Lấy genre mặc định đầu tiên
 *
 * @returns {Object|null}
 */
export function getDefaultGenre() {

    return genres.length > 0
        ? genres[0]
        : null;
}


/**
 * Kiểm tra genre có tồn tại hay không
 *
 * @param {string} id
 * @returns {boolean}
 */
export function hasGenre(id) {

    return genres.some(
        genre => genre.id === id
    );
}