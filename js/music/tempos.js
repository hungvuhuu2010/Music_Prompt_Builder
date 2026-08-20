/* =========================================================
   AI MUSIC PROMPT BUILDER
   MUSIC DATABASE — TEMPOS

   File:
   js/music/tempos.js

   Purpose:
   - Cơ sở dữ liệu tempo
   - Không chứa UI
   - Không chứa logic tạo prompt
   ========================================================= */


/* =========================================================
   1. TEMPO DATABASE
   ========================================================= */

export const tempos = [

    {
        id: "very_slow",

        name: "Rất chậm",

        min: 40,

        max: 59,

        recommended: 52,

        description:
            "Tempo rất chậm, phù hợp với cảm xúc sâu lắng, buồn, suy tư."
    },

    {
        id: "slow",

        name: "Chậm",

        min: 60,

        max: 75,

        recommended: 68,

        description:
            "Tempo chậm, phù hợp với ballad, trữ tình và những ca khúc giàu cảm xúc."
    },

    {
        id: "moderate_slow",

        name: "Hơi chậm",

        min: 76,

        max: 89,

        recommended: 82,

        description:
            "Tempo hơi chậm, cân bằng giữa sự nhẹ nhàng và chuyển động."
    },

    {
        id: "moderate",

        name: "Vừa",

        min: 90,

        max: 109,

        recommended: 100,

        description:
            "Tempo trung bình, phù hợp với Pop, Acoustic và nhiều phong cách phổ biến."
    },

    {
        id: "moderate_fast",

        name: "Hơi nhanh",

        min: 110,

        max: 119,

        recommended: 115,

        description:
            "Tempo hơi nhanh, tạo cảm giác năng động nhưng chưa quá mạnh."
    },

    {
        id: "fast",

        name: "Nhanh",

        min: 120,

        max: 139,

        recommended: 128,

        description:
            "Tempo nhanh, phù hợp với Dance, EDM, Pop năng động."
    },

    {
        id: "very_fast",

        name: "Rất nhanh",

        min: 140,

        max: 180,

        recommended: 150,

        description:
            "Tempo rất nhanh, tạo năng lượng cao và cảm giác mạnh."
    }

];


/* =========================================================
   2. HELPER FUNCTIONS
   ========================================================= */

export function getTempoById(id) {

    if (!id) {
        return null;
    }

    return tempos.find(
        tempo => tempo.id === id
    ) || null;

}


export function getTempoByBPM(bpm) {

    const value =
        Number(bpm);

    if (
        !Number.isFinite(value)
    ) {
        return null;
    }

    return tempos.find(
        tempo =>
            value >= tempo.min &&
            value <= tempo.max
    ) || null;

}


export function getDefaultTempo() {

    return tempos.find(
        tempo =>
            tempo.id === "moderate"
    ) || tempos[0] || null;

}