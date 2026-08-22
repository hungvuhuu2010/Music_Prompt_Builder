/* =========================================================
   AI MUSIC PROMPT BUILDER
   style.js
   Version: 1.0

   Nhiệm vụ:
   - Quản lý cơ sở dữ liệu Style
   - Liên kết Style với Genre
   - Cung cấp Style cho UI
   - Lấy thông tin mặc định của Style
   - Chuyển Style thành dữ liệu dùng cho Prompt

   Không xử lý:
   - songData
   - Genre database
   - Mood database
   - Prompt Builder
   - Template
   ========================================================= */


/* =========================================================
   1. STYLE DATABASE
   ========================================================= */

export const STYLE_DATABASE = [

    /* =====================================================
       BOLERO VIỆT NAM
       ===================================================== */

    {
        id: "bolero_traditional",

        name: "Bolero truyền thống",

        genreId:
            "vietnamese_bolero",

        description:
            "Phong cách Bolero Việt Nam truyền thống, " +
            "mộc mạc, chậm rãi và giàu tính tự sự.",

        defaultTempo: {
            min: 68,
            max: 78,
            recommended: 72
        },

        defaultMood: [
            "nostalgic",
            "melancholic",
            "sentimental"
        ],

        defaultEnergy:
            "low",

        mainInstruments: [
            "acoustic guitar",
            "bass"
        ],

        secondaryInstruments: [
            "accordion",
            "electric guitar",
            "soft percussion"
        ],

        arrangementStyle:
            "traditional Vietnamese bolero",

        arrangementDensity:
            "sparse_to_moderate",

        vocalStyle: [
            "warm",
            "emotional",
            "storytelling"
        ],

        keywords: [
            "traditional bolero",
            "Vietnamese bolero",
            "nostalgic",
            "sentimental"
        ]
    },


    {
        id: "bolero_modern",

        name: "Bolero hiện đại",

        genreId:
            "vietnamese_bolero",

        description:
            "Bolero Việt Nam kết hợp cách phối khí hiện đại " +
            "nhưng vẫn giữ nhịp điệu và màu sắc Bolero.",

        defaultTempo: {
            min: 70,
            max: 84,
            recommended: 76
        },

        defaultMood: [
            "romantic",
            "nostalgic",
            "emotional"
        ],

        defaultEnergy:
            "low_to_medium",

        mainInstruments: [
            "acoustic guitar",
            "piano",
            "bass"
        ],

        secondaryInstruments: [
            "strings",
            "accordion",
            "soft drums",
            "electric guitar"
        ],

        arrangementStyle:
            "modern Vietnamese bolero",

        arrangementDensity:
            "moderate",

        vocalStyle: [
            "warm",
            "clear",
            "emotional"
        ],

        keywords: [
            "modern bolero",
            "Vietnamese bolero",
            "contemporary arrangement"
        ]
    },


    {
        id: "bolero_pop",

        name: "Bolero pha Pop",

        genreId:
            "vietnamese_bolero",

        description:
            "Bolero kết hợp các yếu tố Pop hiện đại, " +
            "tạo âm thanh dễ tiếp cận với khán giả trẻ.",

        defaultTempo: {
            min: 72,
            max: 90,
            recommended: 80
        },

        defaultMood: [
            "romantic",
            "emotional",
            "warm"
        ],

        defaultEnergy:
            "medium",

        mainInstruments: [
            "acoustic guitar",
            "piano",
            "bass"
        ],

        secondaryInstruments: [
            "drums",
            "strings",
            "pads",
            "electric guitar"
        ],

        arrangementStyle:
            "Bolero fused with modern Pop",

        arrangementDensity:
            "moderate_to_rich",

        vocalStyle: [
            "modern",
            "emotional",
            "expressive"
        ],

        keywords: [
            "Bolero Pop",
            "modern Vietnamese music",
            "Pop Bolero"
        ]
    },


    /* =====================================================
       NHẠC VÀNG
       ===================================================== */

    {
        id: "nhac_vang_classic",

        name: "Nhạc vàng cổ điển",

        genreId:
            "nhac_vang",

        description:
            "Phong cách nhạc vàng cổ điển với màu sắc hoài niệm " +
            "và cách thể hiện giàu tâm sự.",

        defaultTempo: {
            min: 65,
            max: 82,
            recommended: 74
        },

        defaultMood: [
            "nostalgic",
            "melancholic",
            "sentimental"
        ],

        defaultEnergy:
            "low",

        mainInstruments: [
            "acoustic guitar",
            "bass"
        ],

        secondaryInstruments: [
            "accordion",
            "piano",
            "electric guitar",
            "soft percussion"
        ],

        arrangementStyle:
            "classic Vietnamese sentimental arrangement",

        arrangementDensity:
            "sparse_to_moderate",

        vocalStyle: [
            "warm",
            "intimate",
            "expressive"
        ],

        keywords: [
            "classic Vietnamese music",
            "Nhạc vàng",
            "nostalgic",
            "sentimental"
        ]
    },


    {
        id: "nhac_vang_orchestral",

        name: "Nhạc vàng phối khí giàu",

        genreId:
            "nhac_vang",

        description:
            "Nhạc vàng với phần hòa âm và phối khí phong phú hơn, " +
            "sử dụng nhiều nhạc cụ dây và piano.",

        defaultTempo: {
            min: 68,
            max: 86,
            recommended: 76
        },

        defaultMood: [
            "emotional",
            "nostalgic",
            "dramatic"
        ],

        defaultEnergy:
            "medium",

        mainInstruments: [
            "piano",
            "acoustic guitar",
            "strings",
            "bass"
        ],

        secondaryInstruments: [
            "accordion",
            "electric guitar",
            "soft drums"
        ],

        arrangementStyle:
            "rich Vietnamese sentimental orchestration",

        arrangementDensity:
            "moderate_to_rich",

        vocalStyle: [
            "powerful",
            "emotional",
            "expressive"
        ],

        keywords: [
            "Vietnamese sentimental",
            "orchestral",
            "emotional",
            "Nhạc vàng"
        ]
    },


    /* =====================================================
       POP BALLAD VIỆT NAM
       ===================================================== */

    {
        id: "pop_ballad_piano",

        name: "Piano Ballad",

        genreId:
            "vietnamese_pop_ballad",

        description:
            "Pop Ballad lấy piano làm nhạc cụ trung tâm, " +
            "tập trung vào giọng hát và ca từ.",

        defaultTempo: {
            min: 65,
            max: 82,
            recommended: 72
        },

        defaultMood: [
            "emotional",
            "romantic",
            "melancholic"
        ],

        defaultEnergy:
            "low_to_medium",

        mainInstruments: [
            "piano",
            "bass"
        ],

        secondaryInstruments: [
            "strings",
            "acoustic guitar",
            "soft drums",
            "pads"
        ],

        arrangementStyle:
            "emotional piano pop ballad",

        arrangementDensity:
            "moderate",

        vocalStyle: [
            "clear",
            "emotional",
            "intimate"
        ],

        keywords: [
            "Piano Ballad",
            "Pop Ballad",
            "emotional",
            "Vietnamese Pop"
        ]
    },


    {
        id: "pop_ballad_acoustic",

        name: "Acoustic Ballad",

        genreId:
            "vietnamese_pop_ballad",

        description:
            "Pop Ballad mang màu sắc acoustic, " +
            "mộc mạc và gần gũi.",

        defaultTempo: {
            min: 68,
            max: 90,
            recommended: 78
        },

        defaultMood: [
            "warm",
            "intimate",
            "romantic"
        ],

        defaultEnergy:
            "low_to_medium",

        mainInstruments: [
            "acoustic guitar"
        ],

        secondaryInstruments: [
            "piano",
            "bass",
            "cajon",
            "strings"
        ],

        arrangementStyle:
            "modern acoustic pop ballad",

        arrangementDensity:
            "sparse_to_moderate",

        vocalStyle: [
            "natural",
            "warm",
            "intimate"
        ],

        keywords: [
            "Acoustic Ballad",
            "Pop Ballad",
            "unplugged",
            "Vietnamese Pop"
        ]
    },


    {
        id: "pop_ballad_cinematic",

        name: "Cinematic Ballad",

        genreId:
            "vietnamese_pop_ballad",

        description:
            "Pop Ballad có phối khí điện ảnh, " +
            "phát triển từ nhẹ nhàng đến cao trào mạnh.",

        defaultTempo: {
            min: 65,
            max: 85,
            recommended: 74
        },

        defaultMood: [
            "dramatic",
            "emotional",
            "epic"
        ],

        defaultEnergy:
            "medium_to_high",

        mainInstruments: [
            "piano",
            "strings"
        ],

        secondaryInstruments: [
            "orchestral percussion",
            "acoustic guitar",
            "bass",
            "pads"
        ],

        arrangementStyle:
            "cinematic pop ballad",

        arrangementDensity:
            "moderate_to_rich",

        vocalStyle: [
            "powerful",
            "emotional",
            "dramatic"
        ],

        keywords: [
            "Cinematic Ballad",
            "orchestral pop",
            "dramatic",
            "emotional"
        ]
    },


    /* =====================================================
       RAP VIỆT
       ===================================================== */

    {
        id: "rap_storytelling",

        name: "Rap kể chuyện",

        genreId:
            "vietnamese_rap",

        description:
            "Rap tập trung vào kể chuyện, trải nghiệm cá nhân " +
            "và phát triển nội dung qua từng verse.",

        defaultTempo: {
            min: 80,
            max: 100,
            recommended: 88
        },

        defaultMood: [
            "reflective",
            "emotional",
            "urban"
        ],

        defaultEnergy:
            "medium",

        mainInstruments: [
            "drums",
            "bass",
            "808 bass"
        ],

        secondaryInstruments: [
            "piano",
            "sample",
            "synthesizer"
        ],

        arrangementStyle:
            "storytelling hip-hop production",

        arrangementDensity:
            "moderate",

        vocalStyle: [
            "articulate",
            "rhythmic",
            "storytelling"
        ],

        keywords: [
            "storytelling rap",
            "Vietnamese Rap",
            "Hip-Hop",
            "narrative"
        ]
    },


    {
        id: "rap_trap",

        name: "Rap Trap",

        genreId:
            "vietnamese_rap",

        description:
            "Rap Việt kết hợp Trap với 808 bass, hi-hat dày " +
            "và nhịp điệu hiện đại.",

        defaultTempo: {
            min: 120,
            max: 150,
            recommended: 140
        },

        defaultMood: [
            "dark",
            "confident",
            "energetic"
        ],

        defaultEnergy:
            "high",

        mainInstruments: [
            "808 bass",
            "trap drums",
            "hi-hats"
        ],

        secondaryInstruments: [
            "synthesizer",
            "piano",
            "effects"
        ],

        arrangementStyle:
            "modern trap production",

        arrangementDensity:
            "moderate_to_rich",

        vocalStyle: [
            "rhythmic",
            "confident",
            "aggressive"
        ],

        keywords: [
            "Vietnamese Trap",
            "Trap Rap",
            "808",
            "Hip-Hop"
        ]
    },


    /* =====================================================
       ROCK VIỆT
       ===================================================== */

    {
        id: "rock_ballad",

        name: "Rock Ballad",

        genreId:
            "vietnamese_rock",

        description:
            "Rock Ballad kết hợp năng lượng của Rock " +
            "với giai điệu giàu cảm xúc.",

        defaultTempo: {
            min: 75,
            max: 105,
            recommended: 88
        },

        defaultMood: [
            "emotional",
            "powerful",
            "dramatic"
        ],

        defaultEnergy:
            "medium_to_high",

        mainInstruments: [
            "electric guitar",
            "bass",
            "drums"
        ],

        secondaryInstruments: [
            "piano",
            "strings"
        ],

        arrangementStyle:
            "emotional rock ballad",

        arrangementDensity:
            "moderate_to_rich",

        vocalStyle: [
            "powerful",
            "emotional",
            "dynamic"
        ],

        keywords: [
            "Rock Ballad",
            "Vietnamese Rock",
            "emotional rock"
        ]
    },


    {
        id: "alternative_rock",

        name: "Alternative Rock",

        genreId:
            "vietnamese_rock",

        description:
            "Rock hiện đại với âm thanh mạnh, cá tính " +
            "và có thể mang màu sắc thử nghiệm.",

        defaultTempo: {
            min: 100,
            max: 140,
            recommended: 120
        },

        defaultMood: [
            "energetic",
            "rebellious",
            "dark"
        ],

        defaultEnergy:
            "high",

        mainInstruments: [
            "electric guitar",
            "bass",
            "drums"
        ],

        secondaryInstruments: [
            "synthesizer",
            "effects"
        ],

        arrangementStyle:
            "modern alternative rock",

        arrangementDensity:
            "rich",

        vocalStyle: [
            "raw",
            "powerful",
            "expressive"
        ],

        keywords: [
            "Alternative Rock",
            "Vietnamese Rock",
            "modern rock"
        ]
    }

];


/* =========================================================
   2. GET ALL STYLES
   ========================================================= */

export function getStyles() {

    return STYLE_DATABASE;

}


/* =========================================================
   3. GET STYLE BY ID
   ========================================================= */

export function getStyleById(styleId) {

    return STYLE_DATABASE.find(
        style =>
            style.id === styleId
    ) || null;

}


/* =========================================================
   4. GET STYLES BY GENRE
   ========================================================= */

function getStylesByGenre(genreId) {

    return STYLE_DATABASE.filter(
        style =>
            style.genreId === genreId
    );

}


/* =========================================================
   5. GET STYLE DEFAULTS
   ========================================================= */

function getStyleDefaults(styleId) {

    const style =
        getStyleById(styleId);

    if (!style) {
        return null;
    }

    return {

        tempo:
            {
                ...style.defaultTempo
            },

        mood:
            [...style.defaultMood],

        energyLevel:
            style.defaultEnergy,

        mainInstruments:
            [...style.mainInstruments],

        secondaryInstruments:
            [...style.secondaryInstruments],

        arrangementStyle:
            style.arrangementStyle,

        arrangementDensity:
            style.arrangementDensity,

        vocalStyle:
            [...style.vocalStyle],

        keywords:
            [...style.keywords]

    };

}


/* =========================================================
   6. GET STYLE PROMPT DATA
   ========================================================= */

/**
 * Chuyển Style thành dữ liệu gọn
 * để Prompt Builder sử dụng.
 */

function getStylePromptData(styleId) {

    const style =
        getStyleById(styleId);

    if (!style) {
        return null;
    }

    return {

        name:
            style.name,

        description:
            style.description,

        genreId:
            style.genreId,

        tempo:
            `${style.defaultTempo.min}-${style.defaultTempo.max} BPM`,

        recommendedBpm:
            style.defaultTempo.recommended,

        mood:
            [...style.defaultMood],

        energy:
            style.defaultEnergy,

        mainInstruments:
            [...style.mainInstruments],

        secondaryInstruments:
            [...style.secondaryInstruments],

        arrangement:
            style.arrangementStyle,

        arrangementDensity:
            style.arrangementDensity,

        vocalStyle:
            [...style.vocalStyle],

        keywords:
            [...style.keywords]

    };

}


/* =========================================================
   7. SEARCH STYLES
   ========================================================= */

/**
 * Tìm Style theo tên hoặc từ khóa.
 */

function searchStyles(keyword) {

    if (!keyword) {
        return [];
    }

    const query =
        String(keyword)
            .trim()
            .toLowerCase();

    if (!query) {
        return [];
    }

    return STYLE_DATABASE.filter(
        style => {

            const searchableText = [

                style.name,

                style.description,

                style.genreId,

                style.arrangementStyle,

                ...style.keywords,

                ...style.vocalStyle

            ]
                .join(" ")
                .toLowerCase();

            return searchableText
                .includes(query);

        }
    );

}


/* =========================================================
   8. GET STYLE IDS
   ========================================================= */

function getStyleIds() {

    return STYLE_DATABASE.map(
        style =>
            style.id
    );

}


/* =========================================================
   9. VALIDATE STYLE
   ========================================================= */

function isValidStyle(styleId) {

    return Boolean(
        getStyleById(styleId)
    );

}


/* =========================================================
   10. EXPORT
   ========================================================= */

export const styles = STYLE_DATABASE;
window.MusicStyle = {

    STYLE_DATABASE,

    getStyles,

    getStyleById,

    getStylesByGenre,

    getStyleDefaults,

    getStylePromptData,

    searchStyles,

    getStyleIds,

    isValidStyle

};