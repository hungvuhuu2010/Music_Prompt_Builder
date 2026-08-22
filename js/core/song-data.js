/* =========================================================
   AI MUSIC PROMPT BUILDER
   File: song-data.js
   Version: 2.0

   Vai trò:
   - Định nghĩa cấu trúc songData
   - Tạo songData mới
   - Reset songData
   - Cung cấp dữ liệu bài hát hiện tại

   Không xử lý:
   - UI
   - Prompt Builder
   - Music Database
   - Validation
   - Storage
   ========================================================= */


/* =========================================================
   1. DEFAULT SONG DATA
   ========================================================= */

/**
 * Tạo một đối tượng songData mới.
 *
 * Mỗi lần gọi hàm sẽ tạo một object mới,
 * tránh dùng chung reference giữa các bài hát.
 */

/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "ai_music_prompt_builder_song_data";

const songData = {


    /* =====================================================
       01. Ý TƯỞNG BÀI HÁT
       ===================================================== */

    purpose: "",

    topic: "",

    story: "",

    message: "",


    /* =====================================================
       02. DÒNG NHẠC
       ===================================================== */

    genreId: "",

    genre: "",


    /* =====================================================
       03. PHONG CÁCH
       ===================================================== */

    styleId: "",

    style: "",

    styleDescription: "",


    /* =====================================================
       04. CẢM XÚC
       ===================================================== */

    moodId: "",

    mood: "",

    moodLevel: 3,


    /* =====================================================
       05. Nhịp độ
       ===================================================== */

	tempo: "",

    /* =====================================================
       05. GIỌNG HÁT
       ===================================================== */

    vocalId: "",

    vocal: "",

	vocalTechnique: "",
	vocalAge: "",
	
	vocalTone: "",

	
/*====================
LỜI BÀI HÁT
======================*/

lyricsMode: "",

lyricsIdea: "",

lyrics: "",

lyricsRequirements: "",

    /* =====================================================
       06. NHẠC
       AI TỰ ĐỘNG QUYẾT ĐỊNH
       ===================================================== */

    tempo: "",

    bpm: "",

    timeSignature: "",

    instruments: [],


    /* =====================================================
       07. PHỐI KHÍ
       AI TỰ ĐỘNG QUYẾT ĐỊNH
       ===================================================== */

    arrangement: "",

    arrangementStyle: "",

    arrangementDensity: "",


    /* =====================================================
       08. CẤU TRÚC
       AI TỰ ĐỘNG QUYẾT ĐỊNH
       ===================================================== */

    songStructure: [],


    /* =====================================================
       09. CHẤT LƯỢNG / PRODUCTION
       AI TỰ ĐỘNG QUYẾT ĐỊNH
       ===================================================== */

    audioQuality: "",


    /* =====================================================
       10. ĐIỀU CẦN TRÁNH
       ===================================================== */

    negativePrompt: "",

};

export function createSongData() {

    return {

        /* -------------------------------------------------
           01. PURPOSE
           ------------------------------------------------- */

        purpose: "",


        /* -------------------------------------------------
           02. TOPIC / STORY
           ------------------------------------------------- */

        topic: "",

        story: "",


        /* -------------------------------------------------
           03. GENRE
           ------------------------------------------------- */

        genreId: "",
        genre: "",


        /* -------------------------------------------------
           04. STYLE
           ------------------------------------------------- */

        styleId: "",
        style: "",
        styleDescription: "",


        /* -------------------------------------------------
           05. MOOD
           ------------------------------------------------- */

        moodId: "",
        mood: "",

        moodLevel: 3,


        /* -------------------------------------------------
           06. TEMPO
           ------------------------------------------------- */

        tempo: {
            tempo: "",
        },


        /* -------------------------------------------------
           07. VOCAL
           ------------------------------------------------- */

        vocalId: "",
        vocal: "",


        /* -------------------------------------------------
           08. INSTRUMENTS
           ------------------------------------------------- */

        instruments: [],


        /* -------------------------------------------------
           09. ARRANGEMENT
           ------------------------------------------------- */

        arrangementId: "",
        arrangement: "",


        /* -------------------------------------------------
           10. STRUCTURE
           ------------------------------------------------- */

        structureId: "",
        structure: "",


        /* -------------------------------------------------
           11. LYRICS
           ------------------------------------------------- */

        lyrics: "",


        /* -------------------------------------------------
           12. SONG STRUCTURE DATA
           ------------------------------------------------- */

        sections: [],


        /* -------------------------------------------------
           13. EXTRA
           ------------------------------------------------- */

        language: "Vietnamese",

        duration: "",

        energy: "",

        key: "",


        /* -------------------------------------------------
           14. CUSTOM NOTES
           ------------------------------------------------- */

        notes: "",


        /* -------------------------------------------------
           15. METADATA
           ------------------------------------------------- */

        version: 1,

        createdAt: null,

        updatedAt: null

    };

}


/* =========================================================
   2. CURRENT SONG DATA
   ========================================================= */

/**
 * Dữ liệu bài hát hiện tại.
 *
 * App có thể import trực tiếp nếu cần.
 */



/* =========================================================
   3. RESET SONG DATA
   ========================================================= */

/**
 * Tạo lại songData từ đầu.
 *
 * Hàm này thay thế toàn bộ dữ liệu hiện tại.
 */

export function resetSongData() {

    songData = createSongData();

    return songData;

}


/* =========================================================
   4. GET SONG DATA
   ========================================================= */

/**
 * Lấy dữ liệu bài hát hiện tại.
 */

export function getSongData() {

    return loadSongData();

}


/* =========================================================
   5. SET SONG DATA
   ========================================================= */

/**
 * Gán dữ liệu bài hát.
 *
 * Dùng khi load dữ liệu từ storage
 * hoặc import dữ liệu bên ngoài.
 */

export function setSongData(data = {}) {

    const defaults =
        createSongData();

    songData = {

        ...defaults,

        ...data,

        tempo: {
            ...defaults.tempo,
            ...(data.tempo || {})
        },

        instruments:
            Array.isArray(data.instruments)
                ? [...data.instruments]
                : [],

        sections:
            Array.isArray(data.sections)
                ? [...data.sections]
                : []

    };

    return songData;

}


/* =========================================================
   6. UPDATE SONG DATA
   ========================================================= */

/**
 * Cập nhật một hoặc nhiều trường.
 */

export function updateSongData(data = {}) {

    songData = {

        ...songData,

        ...data

    };

    return songData;

}


/* =========================================================
   7. UPDATE FIELD
   ========================================================= */

/**
 * Cập nhật một trường riêng lẻ.
 */

export function updateSongField(
    field,
    value
) {

    if (!field) {
        return songData;
    }

    songData[field] =
        value;

    return songData;

}


/* =========================================================
   8. CLEAR SONG DATA
   ========================================================= */

/**
 * Xóa dữ liệu người dùng nhưng giữ cấu trúc mặc định.
 */

export function clearSongData() {

    songData =
        createSongData();

    return songData;

}


/* =========================================================
   9. CLONE SONG DATA
   ========================================================= */

/**
 * Tạo bản sao songData.
 *
 * Dùng khi cần xử lý dữ liệu mà không muốn
 * tác động trực tiếp vào dữ liệu hiện tại.
 */

export function cloneSongData() {

    return JSON.parse(
        JSON.stringify(songData)
    );

}


/* =========================================================
   10. GET SONG DATA VALUE
   ========================================================= */

/**
 * Lấy một giá trị theo tên field.
 */

export function getSongValue(field) {

    if (!field) {
        return undefined;
    }

    return songData[field];

}


/* =========================================================
   11. SET SONG DATA VALUE
   ========================================================= */

/**
 * Gán một giá trị cho field.
 */

export function setSongValue(
    field,
    value
) {

    if (!field) {
        return songData;
    }

    songData[field] =
        value;

    return songData;

}


/* =========================================================
   12. HAS SONG DATA
   ========================================================= */

/**
 * Kiểm tra songData đã tồn tại chưa.
 */

export function hasSongData() {

    return Boolean(songData);

}


/* =========================================================
   13. RESET SELECTED MUSIC DATA
   ========================================================= */

/**
 * Reset riêng các lựa chọn âm nhạc.
 *
 * Không xóa chủ đề, mục đích, lời bài hát...
 */

export function resetMusicData() {

    songData.genreId = "";
    songData.genre = "";

    songData.styleId = "";
    songData.style = "";
    songData.styleDescription = "";

    songData.moodId = "";
    songData.mood = "";
    songData.moodLevel = 3;

    songData.tempo = {
        bpm: null,
        min: null,
        max: null
    };

    songData.vocalId = "";
    songData.vocal = "";

    songData.instruments = [];

    songData.arrangementId = "";
    songData.arrangement = "";

    songData.structureId = "";
    songData.structure = "";

    return songData;

}


/* =========================================================
   14. VERSION
   ========================================================= */

export const SONG_DATA_VERSION = 1;


export function saveSongData(data) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

        return true;

    } catch (error) {

        console.error(
            "[STORAGE] Không thể lưu songData:",
            error
        );

        return false;
    }

}
export function loadSongData() {

    try {

        const raw =
            localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return null;
        }

        return JSON.parse(raw);

    } catch (error) {

        console.error(
            "[STORAGE] Không thể đọc songData:",
            error
        );

        return null;

    }

}
