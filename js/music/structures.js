/* =========================================================
   MUSIC DATABASE — SONG STRUCTURES
   File: structure.js
   ========================================================= */


/* =========================================================
   1. SECTION DATABASE
   ========================================================= */

/*
    Các section cơ bản của một bài hát.

    File này chỉ mô tả:
    - section là gì
    - vai trò
    - năng lượng
    - cách sử dụng

    Không quyết định cấu trúc cụ thể của từng bài.
*/

export const songSections = [

    /* -----------------------------------------------------
       INTRO
       ----------------------------------------------------- */

    {
        id: "intro",

        name: "Intro",

        nameVi: "Mở đầu",

        description:
            "Phần mở đầu của bài hát, giới thiệu màu sắc âm nhạc " +
            "và tạo không khí trước khi giọng hát xuất hiện.",

        typicalEnergy:
            "low_to_medium",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "usually_instrumental",

        function: [
            "establish_mood",
            "introduce_instruments",
            "set_tempo",
            "create_atmosphere"
        ],

        keywords: [
            "intro",
            "instrumental intro",
            "atmospheric intro",
            "soft opening"
        ]
    },


    /* -----------------------------------------------------
       VERSE
       ----------------------------------------------------- */

    {
        id: "verse",

        name: "Verse",

        nameVi: "Đoạn verse / khổ hát",

        description:
            "Phần phát triển câu chuyện và nội dung chính của bài hát. " +
            "Verse thường có năng lượng thấp hơn chorus.",

        typicalEnergy:
            "low_to_medium",

        typicalLength:
            "8_to_16_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "tell_story",
            "develop_lyrics",
            "introduce_melody",
            "build_toward_chorus"
        ],

        keywords: [
            "verse",
            "storytelling verse",
            "melodic verse",
            "soft verse"
        ]
    },


    {
        id: "verse_1",

        name: "Verse 1",

        nameVi: "Verse 1",

        description:
            "Đoạn verse đầu tiên, giới thiệu câu chuyện, nhân vật " +
            "hoặc chủ đề chính của bài hát.",

        typicalEnergy:
            "low_to_medium",

        typicalLength:
            "8_to_16_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "introduce_story",
            "introduce_theme",
            "establish_melodic_identity"
        ],

        keywords: [
            "verse 1",
            "first verse",
            "opening verse"
        ]
    },


    {
        id: "verse_2",

        name: "Verse 2",

        nameVi: "Verse 2",

        description:
            "Đoạn verse thứ hai tiếp tục phát triển nội dung " +
            "và có thể mở rộng cảm xúc so với Verse 1.",

        typicalEnergy:
            "medium",

        typicalLength:
            "8_to_16_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "continue_story",
            "develop_emotion",
            "add_new_lyrical_information"
        ],

        keywords: [
            "verse 2",
            "second verse"
        ]
    },


    /* -----------------------------------------------------
       PRE-CHORUS
       ----------------------------------------------------- */

    {
        id: "pre_chorus",

        name: "Pre-Chorus",

        nameVi: "Tiền điệp khúc",

        description:
            "Phần chuyển tiếp từ verse sang chorus, thường tăng " +
            "cao độ, mật độ hòa âm hoặc năng lượng.",

        typicalEnergy:
            "medium_to_high",

        typicalLength:
            "4_to_8_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "build_tension",
            "increase_energy",
            "prepare_chorus"
        ],

        keywords: [
            "pre-chorus",
            "build",
            "tension build",
            "rising pre-chorus"
        ]
    },


    /* -----------------------------------------------------
       CHORUS
       ----------------------------------------------------- */

    {
        id: "chorus",

        name: "Chorus",

        nameVi: "Điệp khúc",

        description:
            "Phần trung tâm và dễ nhớ nhất của bài hát, thường chứa " +
            "hook hoặc thông điệp chính.",

        typicalEnergy:
            "medium_to_high",

        typicalLength:
            "8_to_16_bars",

        vocalPresence:
            "lead_vocal_with_harmony",

        function: [
            "main_hook",
            "main_message",
            "emotional_peak",
            "memorable_section"
        ],

        keywords: [
            "chorus",
            "main chorus",
            "big chorus",
            "catchy chorus",
            "emotional chorus"
        ]
    },


    {
        id: "final_chorus",

        name: "Final Chorus",

        nameVi: "Điệp khúc cuối",

        description:
            "Điệp khúc cuối thường được mở rộng về năng lượng, " +
            "hòa âm, bè hát hoặc nhạc cụ để tạo cảm giác kết thúc.",

        typicalEnergy:
            "high",

        typicalLength:
            "8_to_24_bars",

        vocalPresence:
            "lead_vocal_with_full_harmony",

        function: [
            "final_climax",
            "emotional_resolution",
            "repeat_hook",
            "maximize_impact"
        ],

        keywords: [
            "final chorus",
            "big final chorus",
            "climactic chorus",
            "final hook"
        ]
    },


    /* -----------------------------------------------------
       BRIDGE
       ----------------------------------------------------- */

    {
        id: "bridge",

        name: "Bridge",

        nameVi: "Đoạn chuyển / Bridge",

        description:
            "Phần tạo sự tương phản với verse và chorus, thường " +
            "mang giai điệu hoặc hòa âm mới.",

        typicalEnergy:
            "medium",

        typicalLength:
            "4_to_8_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "create_contrast",
            "refresh_arrangement",
            "develop_new_melody",
            "prepare_final_chorus"
        ],

        keywords: [
            "bridge",
            "contrasting bridge",
            "emotional bridge",
            "melodic bridge"
        ]
    },


    /* -----------------------------------------------------
       BREAKDOWN
       ----------------------------------------------------- */

    {
        id: "breakdown",

        name: "Breakdown",

        nameVi: "Đoạn breakdown",

        description:
            "Phần giảm mạnh mật độ nhạc cụ hoặc năng lượng trước khi " +
            "xây dựng trở lại.",

        typicalEnergy:
            "low",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "optional",

        function: [
            "reduce_energy",
            "create_contrast",
            "prepare_drop",
            "create_space"
        ],

        keywords: [
            "breakdown",
            "minimal breakdown",
            "stripped down section"
        ]
    },


    /* -----------------------------------------------------
       BUILD
       ----------------------------------------------------- */

    {
        id: "build",

        name: "Build",

        nameVi: "Đoạn build-up",

        description:
            "Phần tăng dần năng lượng, thường sử dụng trong EDM và " +
            "nhạc điện tử để chuẩn bị cho drop hoặc cao trào.",

        typicalEnergy:
            "rising",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "optional",

        function: [
            "increase_tension",
            "increase_energy",
            "prepare_drop",
            "create_anticipation"
        ],

        keywords: [
            "build",
            "build-up",
            "rising tension",
            "energy build"
        ]
    },


    /* -----------------------------------------------------
       DROP
       ----------------------------------------------------- */

    {
        id: "drop",

        name: "Drop",

        nameVi: "Drop",

        description:
            "Phần cao trào đặc trưng của EDM và Electronic, nơi beat, " +
            "bass và synth đạt mức năng lượng cao.",

        typicalEnergy:
            "very_high",

        typicalLength:
            "8_to_32_bars",

        vocalPresence:
            "optional",

        function: [
            "main_energy_peak",
            "rhythmic_impact",
            "instrumental_hook",
            "dance_section"
        ],

        keywords: [
            "drop",
            "EDM drop",
            "powerful drop",
            "festival drop"
        ]
    },


    /* -----------------------------------------------------
       HOOK
       ----------------------------------------------------- */

    {
        id: "hook",

        name: "Hook",

        nameVi: "Hook",

        description:
            "Câu hoặc đoạn nhạc ngắn có tính nhận diện cao, " +
            "có thể là vocal hook hoặc instrumental hook.",

        typicalEnergy:
            "medium_to_high",

        typicalLength:
            "2_to_8_bars",

        vocalPresence:
            "optional",

        function: [
            "memorability",
            "identity",
            "repeatable_motif"
        ],

        keywords: [
            "hook",
            "catchy hook",
            "vocal hook",
            "instrumental hook"
        ]
    },


    /* -----------------------------------------------------
       SOLO
       ----------------------------------------------------- */

    {
        id: "instrumental_solo",

        name: "Instrumental Solo",

        nameVi: "Độc tấu nhạc cụ",

        description:
            "Đoạn nhạc tập trung vào một nhạc cụ nổi bật như guitar, " +
            "piano, violin hoặc saxophone.",

        typicalEnergy:
            "medium_to_high",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "instrumental",

        function: [
            "instrumental_highlight",
            "variation",
            "emotional_expression"
        ],

        keywords: [
            "instrumental solo",
            "guitar solo",
            "piano solo",
            "violin solo"
        ]
    },


    {
        id: "guitar_solo",

        name: "Guitar Solo",

        nameVi: "Solo guitar",

        description:
            "Đoạn độc tấu guitar, thường xuất hiện trong Rock, Pop Rock " +
            "hoặc những bài hát cần một điểm nhấn nhạc cụ.",

        typicalEnergy:
            "high",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "instrumental",

        function: [
            "instrumental_climax",
            "virtuosity",
            "emotional_expression"
        ],

        keywords: [
            "guitar solo",
            "electric guitar solo",
            "lead guitar solo"
        ]
    },


    /* -----------------------------------------------------
       OUTRO
       ----------------------------------------------------- */

    {
        id: "outro",

        name: "Outro",

        nameVi: "Kết bài",

        description:
            "Phần kết thúc bài hát, có thể giảm dần năng lượng, " +
            "kết thúc đột ngột hoặc để lại một câu nhạc cuối.",

        typicalEnergy:
            "low_to_medium",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "optional",

        function: [
            "resolution",
            "fade_out",
            "final_statement",
            "close_song"
        ],

        keywords: [
            "outro",
            "ending",
            "fade out",
            "final instrumental"
        ]
    },


    /* -----------------------------------------------------
       SPECIAL SECTIONS
       ----------------------------------------------------- */

    {
        id: "instrumental_break",

        name: "Instrumental Break",

        nameVi: "Đoạn nhạc chuyển",

        description:
            "Đoạn nhạc không có hoặc rất ít vocal, dùng để tạo khoảng " +
            "nghỉ và chuyển tiếp giữa các phần.",

        typicalEnergy:
            "medium",

        typicalLength:
            "2_to_8_bars",

        vocalPresence:
            "instrumental",

        function: [
            "transition",
            "breathing_space",
            "instrumental_variation"
        ],

        keywords: [
            "instrumental break",
            "instrumental transition",
            "music break"
        ]
    },


    {
        id: "refrain",

        name: "Refrain",

        nameVi: "Câu điệp / điệp đoạn",

        description:
            "Đoạn câu hát hoặc giai điệu được lặp lại trong bài, " +
            "đặc biệt phù hợp với các phong cách dân gian và truyền thống.",

        typicalEnergy:
            "medium",

        typicalLength:
            "2_to_8_bars",

        vocalPresence:
            "lead_vocal",

        function: [
            "repetition",
            "melodic_identity",
            "folk_structure"
        ],

        keywords: [
            "refrain",
            "repeated phrase",
            "folk refrain"
        ]
    },


    {
        id: "climax",

        name: "Climax",

        nameVi: "Cao trào",

        description:
            "Điểm đạt mức độ cảm xúc hoặc năng lượng cao nhất của bài hát.",

        typicalEnergy:
            "very_high",

        typicalLength:
            "4_to_16_bars",

        vocalPresence:
            "optional",

        function: [
            "emotional_peak",
            "dramatic_peak",
            "maximum_energy"
        ],

        keywords: [
            "climax",
            "emotional climax",
            "dramatic climax",
            "peak"
        ]
    }

];


/* =========================================================
   2. SONG STRUCTURE PRESETS
   ========================================================= */

/*
    Các cấu trúc mẫu.

    Mỗi preset chỉ mô tả thứ tự section.
    Prompt builder sẽ kết hợp preset này với
    genre + style + mood + instruments.
*/

export const structures = [

    /* =====================================================
       POPULAR
       ===================================================== */

    {
        id: "simple_pop",

        name: "Pop cơ bản",

        nameVi: "Pop cơ bản",

        category: "popular",

        description:
            "Cấu trúc Pop đơn giản, dễ sử dụng cho nhiều bài hát.",

        sections: [
            "intro",
            "verse_1",
            "chorus",
            "verse_2",
            "chorus",
            "bridge",
            "final_chorus",
            "outro"
        ],

        energyCurve: [
            "low",
            "medium",
            "high",
            "medium",
            "high",
            "medium",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "pop",
            "vietnamese_pop_ballad",
            "acoustic"
        ],

        keywords: [
            "simple pop structure",
            "verse chorus structure",
            "modern pop arrangement"
        ]
    },


    {
        id: "modern_pop",

        name: "Modern Pop",

        nameVi: "Pop hiện đại",

        category: "popular",

        description:
            "Cấu trúc Pop hiện đại với pre-chorus và final chorus rõ ràng.",

        sections: [
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

        energyCurve: [
            "low",
            "medium",
            "medium_to_high",
            "high",
            "medium",
            "medium_to_high",
            "high",
            "medium",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_pop_ballad",
            "pop",
            "rnb",
            "acoustic"
        ],

        keywords: [
            "modern pop structure",
            "pre-chorus",
            "big final chorus"
        ]
    },


    /* =====================================================
       BALLAD
       ===================================================== */

    {
        id: "pop_ballad",

        name: "Pop Ballad",

        nameVi: "Pop Ballad",

        category: "ballad",

        description:
            "Cấu trúc Ballad tập trung vào cảm xúc, ca từ và sự phát triển " +
            "dần của phần phối khí.",

        sections: [
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

        energyCurve: [
            "low",
            "low_to_medium",
            "medium",
            "high",
            "medium",
            "medium_to_high",
            "high",
            "medium",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_pop_ballad",
            "pop_ballad",
            "ballad"
        ],

        keywords: [
            "emotional ballad",
            "piano ballad",
            "powerful final chorus"
        ]
    },


    {
        id: "cinematic_ballad",

        name: "Cinematic Ballad",

        nameVi: "Ballad điện ảnh",

        category: "ballad",

        description:
            "Cấu trúc Ballad có quá trình phát triển lớn về hòa âm và " +
            "năng lượng, hướng tới cao trào điện ảnh.",

        sections: [
            "intro",
            "verse_1",
            "pre_chorus",
            "chorus",
            "verse_2",
            "pre_chorus",
            "chorus",
            "instrumental_break",
            "bridge",
            "climax",
            "final_chorus",
            "outro"
        ],

        energyCurve: [
            "low",
            "low",
            "medium",
            "high",
            "medium",
            "medium_to_high",
            "high",
            "medium",
            "medium",
            "very_high",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_pop_ballad"
        ],

        keywords: [
            "cinematic ballad",
            "emotional build",
            "orchestral climax",
            "dramatic final chorus"
        ]
    },


    /* =====================================================
       BOLERO / NHẠC VÀNG
       ===================================================== */

    {
        id: "vietnamese_bolero",

        name: "Bolero Việt Nam",

        nameVi: "Cấu trúc Bolero Việt Nam",

        category: "vietnamese",

        description:
            "Cấu trúc phù hợp với Bolero Việt Nam, chú trọng kể chuyện " +
            "và lặp lại giai điệu.",

        sections: [
            "intro",
            "verse_1",
            "verse_2",
            "chorus",
            "verse_3",
            "chorus",
            "outro"
        ],

        energyCurve: [
            "low",
            "low",
            "medium",
            "medium_to_high",
            "medium",
            "high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_bolero",
            "nhac_vang"
        ],

        keywords: [
            "Vietnamese bolero structure",
            "traditional bolero",
            "storytelling arrangement"
        ]
    },


    {
        id: "sentimental_vietnamese",

        name: "Nhạc trữ tình Việt Nam",

        nameVi: "Cấu trúc nhạc trữ tình",

        category: "vietnamese",

        description:
            "Cấu trúc phù hợp với các bài hát trữ tình, hoài niệm " +
            "và giàu tính tự sự.",

        sections: [
            "intro",
            "verse_1",
            "verse_2",
            "chorus",
            "verse_2",
            "chorus",
            "instrumental_break",
            "final_chorus",
            "outro"
        ],

        energyCurve: [
            "low",
            "low",
            "medium",
            "medium",
            "medium",
            "high",
            "medium",
            "high",
            "low"
        ],

        suitableGenres: [
            "nhac_vang",
            "vietnamese_bolero"
        ],

        keywords: [
            "Vietnamese sentimental structure",
            "nostalgic arrangement",
            "emotional storytelling"
        ]
    },


    /* =====================================================
       RAP / HIP-HOP
       ===================================================== */

    {
        id: "rap",

        name: "Rap cơ bản",

        nameVi: "Cấu trúc Rap",

        category: "hiphop",

        description:
            "Cấu trúc Rap tập trung vào verse, hook và flow.",

        sections: [
            "intro",
            "verse_1",
            "hook",
            "verse_2",
            "hook",
            "bridge",
            "final_hook",
            "outro"
        ],

        energyCurve: [
            "low",
            "medium",
            "high",
            "medium",
            "high",
            "medium",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_rap",
            "rap",
            "hiphop"
        ],

        keywords: [
            "rap structure",
            "hip-hop structure",
            "verse hook structure"
        ]
    },


    {
        id: "rap_storytelling",

        name: "Rap kể chuyện",

        nameVi: "Rap storytelling",

        category: "hiphop",

        description:
            "Cấu trúc dành cho Rap kể chuyện, trong đó nội dung phát triển " +
            "qua nhiều verse.",

        sections: [
            "intro",
            "verse_1",
            "hook",
            "verse_2",
            "hook",
            "verse_3",
            "bridge",
            "final_hook",
            "outro"
        ],

        energyCurve: [
            "low",
            "medium",
            "medium_to_high",
            "medium",
            "high",
            "medium_to_high",
            "medium",
            "high",
            "low"
        ],

        suitableGenres: [
            "vietnamese_rap"
        ],

        keywords: [
            "storytelling rap",
            "narrative rap",
            "long verse",
            "lyrical hip-hop"
        ]
    },


    /* =====================================================
       ROCK
       ===================================================== */

    {
        id: "rock",

        name: "Rock",

        nameVi: "Cấu trúc Rock",

        category: "rock",

        description:
            "Cấu trúc Rock với chorus mạnh và có thể có guitar solo.",

        sections: [
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

        energyCurve: [
            "medium",
            "medium",
            "high",
            "medium",
            "high",
            "very_high",
            "medium",
            "very_high",
            "medium"
        ],

        suitableGenres: [
            "vietnamese_rock",
            "rock",
            "alternative_rock"
        ],

        keywords: [
            "rock structure",
            "guitar solo",
            "power chorus",
            "rock arrangement"
        ]
    },


    /* =====================================================
       R&B
       ===================================================== */

    {
        id: "rnb",

        name: "R&B",

        nameVi: "Cấu trúc R&B",

        category: "rnb",

        description:
            "Cấu trúc R&B với groove ổn định, pre-chorus và bridge " +
            "tạo sự biến đổi.",

        sections: [
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

        energyCurve: [
            "low",
            "medium",
            "medium",
            "high",
            "medium",
            "high",
            "medium",
            "high",
            "low"
        ],

        suitableGenres: [
            "rnb"
        ],

        keywords: [
            "R&B structure",
            "smooth groove",
            "vocal harmony"
        ]
    },


    /* =====================================================
       ACOUSTIC
       ===================================================== */

    {
        id: "acoustic",

        name: "Acoustic",

        nameVi: "Cấu trúc Acoustic",

        category: "acoustic",

        description:
            "Cấu trúc đơn giản, tập trung vào giọng hát và nhạc cụ mộc.",

        sections: [
            "intro",
            "verse_1",
            "chorus",
            "verse_2",
            "chorus",
            "bridge",
            "final_chorus",
            "outro"
        ],

        energyCurve: [
            "low",
            "low",
            "medium",
            "low_to_medium",
            "medium",
            "medium",
            "high",
            "low"
        ],

        suitableGenres: [
            "acoustic"
        ],

        keywords: [
            "acoustic structure",
            "unplugged arrangement",
            "organic arrangement"
        ]
    },


    /* =====================================================
       EDM
       ===================================================== */

    {
        id: "edm",

        name: "EDM",

        nameVi: "Cấu trúc EDM",

        category: "electronic",

        description:
            "Cấu trúc EDM dựa trên build-up, drop và breakdown.",

        sections: [
            "intro",
            "build",
            "drop",
            "verse",
            "build",
            "drop",
            "breakdown",
            "build",
            "final_drop",
            "outro"
        ],

        energyCurve: [
            "low",
            "medium_to_high",
            "very_high",
            "medium",
            "high",
            "very_high",
            "low",
            "high",
            "very_high",
            "low"
        ],

        suitableGenres: [
            "edm",
            "electronic"
        ],

        keywords: [
            "EDM structure",
            "build drop",
            "electronic arrangement",
            "dance structure"
        ]
    },


    /* =====================================================
       FOLK / TRADITIONAL
       ===================================================== */

    {
        id: "folk",

        name: "Folk",

        nameVi: "Cấu trúc dân ca",

        category: "folk",

        description:
            "Cấu trúc linh hoạt, chú trọng câu hát, đối đáp và sự lặp lại " +
            "của giai điệu dân gian.",

        sections: [
            "intro",
            "folk_verse",
            "refrain",
            "folk_verse",
            "refrain",
            "instrumental_break",
            "refrain",
            "outro"
        ],

        energyCurve: [
            "low",
            "medium",
            "medium",
            "medium",
            "medium",
            "low_to_medium",
            "medium",
            "low"
        ],

        suitableGenres: [
            "vietnamese_folk",
            "folk"
        ],

        keywords: [
            "folk structure",
            "traditional structure",
            "folk refrain",
            "call and response"
        ]
    },


    {
        id: "quan_ho",

        name: "Quan họ",

        nameVi: "Cấu trúc Quan họ",

        category: "vietnamese_traditional",

        description:
            "Cấu trúc dựa trên hình thức hát đối đáp, trong đó các câu hát " +
            "được trao đổi giữa các bên.",

        sections: [
            "opening_exchange",
            "vocal_phrase",
            "response_phrase",
            "development",
            "response_phrase",
            "closing_exchange"
        ],

        energyCurve: [
            "low",
            "medium",
            "medium",
            "medium",
            "medium",
            "low"
        ],

        suitableGenres: [
            "quan_ho"
        ],

        keywords: [
            "Quan ho structure",
            "call and response",
            "Bac Ninh folk",
            "vocal exchange"
        ]
    }

];


/* =========================================================
   3. HELPER FUNCTIONS
   ========================================================= */


/**
 * Lấy section theo ID
 */
export function getSectionById(id) {

    return songSections.find(
        section => section.id === id
    ) || null;
}


/**
 * Lấy structure preset theo ID
 */
export function getStructureById(id) {

    return structures.find(
        structure => structure.id === id
    ) || null;
}


/**
 * Lấy structures theo category
 */
export function getStructuresByCategory(category) {

    return structures.filter(
        structure => structure.category === category
    );
}


/**
 * Lấy structures phù hợp với genre
 */
export function getStructuresByGenre(genreId) {

    return structures.filter(
        structure =>
            structure.suitableGenres.includes(genreId)
    );
}


/**
 * Lấy danh sách section từ structure
 */
export function getSectionsFromStructure(structureId) {

    const structure =
        getStructureById(structureId);

    if (!structure) {
        return [];
    }

    return structure.sections
        .map(sectionId =>
            getSectionById(sectionId)
        )
        .filter(Boolean);
}


/**
 * Tìm structure theo từ khóa
 */
export function searchStructures(keyword) {

    const query = String(keyword || "")
        .toLowerCase()
        .trim();

    if (!query) {
        return [];
    }

    return structures.filter(structure => {

        const text = [

            structure.id,

            structure.name,

            structure.nameVi,

            structure.category,

            structure.description,

            ...structure.sections,

            ...structure.suitableGenres,

            ...structure.keywords

        ]
            .join(" ")
            .toLowerCase();

        return text.includes(query);
    });
}


/**
 * Tìm section theo từ khóa
 */
export function searchSections(keyword) {

    const query = String(keyword || "")
        .toLowerCase()
        .trim();

    if (!query) {
        return [];
    }

    return songSections.filter(section => {

        const text = [

            section.id,

            section.name,

            section.nameVi,

            section.description,

            section.typicalEnergy,

            section.typicalLength,

            section.vocalPresence,

            ...section.function,

            ...section.keywords

        ]
            .join(" ")
            .toLowerCase();

        return text.includes(query);
    });
}


/**
 * Lấy tất cả structure category
 */
export function getStructureCategories() {

    return [
        ...new Set(
            structures.map(
                structure => structure.category
            )
        )
    ];
}


/**
 * Kiểm tra một structure có phù hợp với genre hay không
 */
export function isStructureSuitableForGenre(
    structureId,
    genreId
) {

    const structure =
        getStructureById(structureId);

    if (!structure) {
        return false;
    }

    return structure.suitableGenres.includes(
        genreId
    );
}