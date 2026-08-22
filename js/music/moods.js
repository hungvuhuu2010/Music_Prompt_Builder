/* =========================================================
   AI MUSIC PROMPT BUILDER
   mood.js
   Version: 1.0

   Nhiệm vụ:
   - Quản lý cơ sở dữ liệu Mood
   - Quản lý mức độ cảm xúc
   - Tìm Mood theo ID
   - Lọc Mood theo nhóm
   - Cung cấp dữ liệu cho UI
   - Cung cấp giá trị cho Prompt Builder

   Không xử lý:
   - Genre
   - Style
   - Tempo
   - Vocal
   - Arrangement
   - Lyrics
   ========================================================= */


/* =========================================================
   1. MOOD DATABASE
   ========================================================= */

export const MOOD_DATABASE = [

    {
        id: "romantic",
        name: "Lãng mạn",
        group: "love",

        description:
            "Cảm xúc yêu đương, tình cảm và gần gũi.",

        levels: {
            1: "romantic",
            2: "warm romantic",
            3: "deeply romantic",
            4: "passionate romantic",
            5: "intensely passionate romantic"
        }
    },


    {
        id: "nostalgic",
        name: "Hoài niệm",
        group: "memory",

        description:
            "Gợi nhớ quá khứ, kỷ niệm và những điều đã qua.",

        levels: {
            1: "slightly nostalgic",
            2: "nostalgic",
            3: "deeply nostalgic",
            4: "strongly nostalgic",
            5: "profoundly nostalgic"
        }
    },


    {
        id: "melancholic",
        name: "Buồn",
        group: "sadness",

        description:
            "Buồn, trầm lắng và có chiều sâu cảm xúc.",

        levels: {
            1: "slightly melancholic",
            2: "melancholic",
            3: "deeply melancholic",
            4: "strongly melancholic",
            5: "profoundly melancholic"
        }
    },


    {
        id: "happy",
        name: "Vui tươi",
        group: "positive",

        description:
            "Niềm vui, sự tươi sáng và tích cực.",

        levels: {
            1: "slightly cheerful",
            2: "cheerful",
            3: "bright and cheerful",
            4: "very cheerful",
            5: "extremely joyful"
        }
    },


    {
        id: "peaceful",
        name: "Bình yên",
        group: "calm",

        description:
            "Nhẹ nhàng, thư thái và yên bình.",

        levels: {
            1: "slightly peaceful",
            2: "peaceful",
            3: "calm and peaceful",
            4: "deeply peaceful",
            5: "profoundly serene"
        }
    },


    {
        id: "warm",
        name: "Ấm áp",
        group: "positive",

        description:
            "Cảm giác gần gũi, thân thuộc và dễ chịu.",

        levels: {
            1: "slightly warm",
            2: "warm",
            3: "deeply warm",
            4: "very warm",
            5: "deeply heartfelt and warm"
        }
    },


    {
        id: "hopeful",
        name: "Hy vọng",
        group: "positive",

        description:
            "Niềm tin, hy vọng và hướng đến tương lai.",

        levels: {
            1: "slightly hopeful",
            2: "hopeful",
            3: "clearly hopeful",
            4: "strongly hopeful",
            5: "deeply uplifting and hopeful"
        }
    },


    {
        id: "dramatic",
        name: "Kịch tính",
        group: "dramatic",

        description:
            "Cảm xúc có sự căng thẳng, biến chuyển và cao trào.",

        levels: {
            1: "slightly dramatic",
            2: "dramatic",
            3: "clearly dramatic",
            4: "highly dramatic",
            5: "intensely dramatic"
        }
    },


    {
        id: "energetic",
        name: "Năng lượng",
        group: "energy",

        description:
            "Sôi động, mạnh mẽ và giàu năng lượng.",

        levels: {
            1: "slightly energetic",
            2: "energetic",
            3: "moderately energetic",
            4: "highly energetic",
            5: "extremely energetic"
        }
    },


    {
        id: "uplifting",
        name: "Phấn khởi",
        group: "positive",

        description:
            "Tạo cảm giác hứng khởi, tích cực và nâng cao tinh thần.",

        levels: {
            1: "slightly uplifting",
            2: "uplifting",
            3: "clearly uplifting",
            4: "highly uplifting",
            5: "extremely uplifting"
        }
    },


    {
        id: "dark",
        name: "U tối",
        group: "dark",

        description:
            "Màu sắc tối, bí ẩn và có phần nặng nề.",

        levels: {
            1: "slightly dark",
            2: "dark",
            3: "deeply dark",
            4: "very dark",
            5: "extremely dark and ominous"
        }
    },


    {
        id: "mysterious",
        name: "Bí ẩn",
        group: "dark",

        description:
            "Gợi cảm giác bí ẩn, chưa được khám phá.",

        levels: {
            1: "slightly mysterious",
            2: "mysterious",
            3: "deeply mysterious",
            4: "highly mysterious",
            5: "intensely mysterious"
        }
    },


    {
        id: "powerful",
        name: "Mạnh mẽ",
        group: "energy",

        description:
            "Quyết liệt, mạnh và có sức tác động lớn.",

        levels: {
            1: "slightly powerful",
            2: "powerful",
            3: "strong and powerful",
            4: "highly powerful",
            5: "extremely powerful"
        }
    },


    {
        id: "reflective",
        name: "Suy tư",
        group: "introspective",

        description:
            "Nội tâm, chiêm nghiệm và suy ngẫm.",

        levels: {
            1: "slightly reflective",
            2: "reflective",
            3: "deeply reflective",
            4: "highly introspective",
            5: "profoundly introspective"
        }
    },


    {
        id: "playful",
        name: "Tinh nghịch",
        group: "positive",

        description:
            "Vui nhộn, trẻ trung và tinh nghịch.",

        levels: {
            1: "slightly playful",
            2: "playful",
            3: "clearly playful",
            4: "very playful",
            5: "extremely playful"
        }
    }

];


/* =========================================================
   2. MOOD LEVELS
   ========================================================= */

const MOOD_LEVELS = [

    {
        value: 1,
        name: "Rất nhẹ"
    },

    {
        value: 2,
        name: "Nhẹ"
    },

    {
        value: 3,
        name: "Vừa"
    },

    {
        value: 4,
        name: "Mạnh"
    },

    {
        value: 5,
        name: "Rất mạnh"
    }

];


/* =========================================================
   3. MOOD GROUPS
   ========================================================= */

const MOOD_GROUPS = [

    {
        id: "love",
        name: "Tình cảm"
    },

    {
        id: "memory",
        name: "Hoài niệm"
    },

    {
        id: "sadness",
        name: "Buồn"
    },

    {
        id: "positive",
        name: "Tích cực"
    },

    {
        id: "calm",
        name: "Bình yên"
    },

    {
        id: "dramatic",
        name: "Kịch tính"
    },

    {
        id: "energy",
        name: "Năng lượng"
    },

    {
        id: "dark",
        name: "U tối / Bí ẩn"
    },

    {
        id: "introspective",
        name: "Nội tâm"
    }

];


/* =========================================================
   4. GET MOODS
   ========================================================= */

export function getMoods() {

    return MOOD_DATABASE;

}


/* =========================================================
   5. GET MOOD BY ID
   ========================================================= */

export function getMoodById(moodId) {

    return MOOD_DATABASE.find(
        mood =>
            mood.id === moodId
    ) || null;

}


/* =========================================================
   6. GET MOODS BY GROUP
   ========================================================= */

function getMoodsByGroup(groupId) {

    return MOOD_DATABASE.filter(
        mood =>
            mood.group === groupId
    );

}


/* =========================================================
   7. GET MOOD LEVELS
   ========================================================= */

function getMoodLevels() {

    return MOOD_LEVELS;

}


/* =========================================================
   8. GET MOOD GROUPS
   ========================================================= */

function getMoodGroups() {

    return MOOD_GROUPS;

}


/* =========================================================
   9. GET MOOD TEXT
   ========================================================= */

/**
 * Chuyển:
 *
 * moodId = romantic
 * level = 4
 *
 * thành:
 *
 * "passionate romantic"
 */

function getMoodPromptValue(
    moodId,
    level = 3
) {

    const mood =
        getMoodById(moodId);

    if (!mood) {
        return "";
    }

    const normalizedLevel =
        Math.min(
            5,
            Math.max(
                1,
                Number(level) || 3
            )
        );

    return (
        mood.levels[
            normalizedLevel
        ] ||
        mood.levels[3] ||
        ""
    );

}


/* =========================================================
   10. CREATE MOOD OBJECT
   ========================================================= */

/**
 * Tạo dữ liệu Mood chuẩn cho songData.
 */

function createMood(
    moodId,
    level = 3
) {

    const mood =
        getMoodById(moodId);

    if (!mood) {
        return null;
    }

    const normalizedLevel =
        Math.min(
            5,
            Math.max(
                1,
                Number(level) || 3
            )
        );

    return {

        id:
            mood.id,

        name:
            mood.name,

        level:
            normalizedLevel,

        prompt:
            getMoodPromptValue(
                mood.id,
                normalizedLevel
            )

    };

}


/* =========================================================
   11. FORMAT MOODS FOR PROMPT
   ========================================================= */

/**
 * Nhận danh sách Mood:
 *
 * [
 *   { id: "romantic", level: 4 },
 *   { id: "nostalgic", level: 3 }
 * ]
 *
 * Trả về:
 *
 * "passionate romantic, deeply nostalgic"
 */

function formatMoodsForPrompt(
    moods
) {

    if (!Array.isArray(moods)) {
        return "";
    }

    return moods

        .map(item => {

            if (
                typeof item === "string"
            ) {

                return getMoodPromptValue(
                    item,
                    3
                );

            }

            return getMoodPromptValue(
                item.id,
                item.level
            );

        })

        .filter(Boolean)

        .join(", ");

}


/* =========================================================
   12. DEFAULT MOOD
   ========================================================= */

const DEFAULT_MOOD = {

    primary: null,

    secondary: [],

    intensity: 3

};


/* =========================================================
   13. EXPORT
   ========================================================= */

export const moods = MOOD_DATABASE;

window.MusicMood = {

    MOOD_DATABASE,

    MOOD_LEVELS,

    MOOD_GROUPS,

    DEFAULT_MOOD,

    getMoods,

    getMoodById,

    getMoodsByGroup,

    getMoodLevels,

    getMoodGroups,

    getMoodPromptValue,

    createMood,

    formatMoodsForPrompt

};