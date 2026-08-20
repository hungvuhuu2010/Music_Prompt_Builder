/* =========================================================
   AI MUSIC PROMPT BUILDER
   MUSIC DATABASE — VOCALS

   File:
   js/music/vocals.js

   Purpose:
   - Cơ sở dữ liệu loại giọng
   - Cung cấp thông tin cho UI
   - Không xử lý DOM
   - Không tạo prompt
   ========================================================= */


/* =========================================================
   1. VOCAL DATABASE
   ========================================================= */

export const vocals = [

    {
        id: "female_soprano",

        name: "Nữ cao (Soprano)",

        gender: "female",

        register: "high",

        description:
            "Giọng nữ cao, sáng, vang và có khả năng thể hiện những giai điệu ở quãng cao.",

        characteristics: [
            "bright",
            "clear",
            "high",
            "powerful"
        ]
    },


    {
        id: "female_mezzo",

        name: "Nữ trung (Mezzo-soprano)",

        gender: "female",

        register: "medium",

        description:
            "Giọng nữ trung, ấm và cân bằng, phù hợp với nhiều phong cách âm nhạc.",

        characteristics: [
            "warm",
            "rich",
            "smooth",
            "expressive"
        ]
    },


    {
        id: "female_alto",

        name: "Nữ trầm (Alto)",

        gender: "female",

        register: "low",

        description:
            "Giọng nữ trầm, dày và ấm, tạo màu sắc sâu và giàu cảm xúc.",

        characteristics: [
            "deep",
            "warm",
            "rich",
            "dark"
        ]
    },


    {
        id: "male_tenor",

        name: "Nam cao (Tenor)",

        gender: "male",

        register: "high",

        description:
            "Giọng nam cao, sáng và giàu năng lượng, phù hợp với Pop, Rock và Ballad.",

        characteristics: [
            "bright",
            "clear",
            "powerful",
            "emotional"
        ]
    },


    {
        id: "male_baritone",

        name: "Nam trung (Baritone)",

        gender: "male",

        register: "medium",

        description:
            "Giọng nam trung, ấm và chắc, phù hợp với nhiều dòng nhạc phổ biến.",

        characteristics: [
            "warm",
            "rich",
            "smooth",
            "expressive"
        ]
    },


    {
        id: "male_bass",

        name: "Nam trầm (Bass)",

        gender: "male",

        register: "low",

        description:
            "Giọng nam trầm, sâu và dày, tạo cảm giác mạnh và giàu chiều sâu.",

        characteristics: [
            "deep",
            "dark",
            "rich",
            "powerful"
        ]
    },


    {
        id: "androgynous",

        name: "Giọng trung tính",

        gender: "neutral",

        register: "medium",

        description:
            "Giọng hát có màu sắc trung tính, không nhấn mạnh đặc trưng nam hoặc nữ.",

        characteristics: [
            "neutral",
            "smooth",
            "modern",
            "expressive"
        ]
    },


    {
        id: "child",

        name: "Giọng trẻ em",

        gender: "child",

        register: "high",

        description:
            "Giọng trẻ em tự nhiên, trong sáng và phù hợp với những ca khúc có màu sắc thiếu nhi.",

        characteristics: [
            "young",
            "bright",
            "innocent",
            "natural"
        ]
    },


    {
        id: "choir",

        name: "Hợp xướng",

        gender: "mixed",

        register: "mixed",

        description:
            "Nhiều giọng hát kết hợp tạo thành bè và lớp âm thanh tập thể.",

        characteristics: [
            "choral",
            "layered",
            "harmonic",
            "powerful"
        ]
    }

];


/* =========================================================
   2. HELPER FUNCTIONS
   ========================================================= */

export function getVocals() {

    return vocals;

}


export function getVocalById(id) {

    if (!id) {
        return null;
    }

    return vocals.find(
        vocal =>
            vocal.id === id
    ) || null;

}


export function getVocalsByGender(gender) {

    if (!gender) {
        return [];
    }

    return vocals.filter(
        vocal =>
            vocal.gender === gender
    );

}


export function getVocalsByRegister(register) {

    if (!register) {
        return [];
    }

    return vocals.filter(
        vocal =>
            vocal.register === register
    );

}


export function hasVocal(id) {

    return vocals.some(
        vocal =>
            vocal.id === id
    );

}