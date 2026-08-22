/* =========================================================
   AI MUSIC PROMPT BUILDER
   File: promptBuilder.js

   Nhiệm vụ:
   - Nhận songData
   - Đọc dữ liệu người dùng đã nhập
   - Kết hợp thông tin từ music database
   - Xây dựng prompt cho AI tạo bài hát
   - Những thành phần chưa được người dùng chỉ định
     sẽ được yêu cầu AI tự quyết định
   ========================================================= */


/* =========================================================
   1. IMPORT MUSIC DATABASE
   ========================================================= */

import {
    getGenreById
} from "../music/genres.js";

import {
    getMoodById
} from "../music/moods.js";

import {
    getStyleById
} from "../music/styles.js";

import {
    getInstrumentById
} from "../music/instruments.js";


/* =========================================================
   2. UTILITY
   ========================================================= */

/**
 * Chuyển giá trị thành chuỗi an toàn
 */
function safe(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }

    return String(value).trim();
}


/**
 * Lấy tên hiển thị từ object hoặc ID
 */
function resolveName(value, getter) {

    if (!value) {
        return "";
    }

    if (typeof value === "object") {

        return (
            value.name ||
            value.label ||
            value.id ||
            ""
        );
    }

    const item =
        getter
            ? getter(value)
            : null;

    return item
        ? (
            item.name ||
            item.label ||
            item.id ||
            ""
        )
        : safe(value);
}


/**
 * Chuyển mảng thành chuỗi
 */
function joinValues(
    values,
    separator = ", "
) {

    if (!Array.isArray(values)) {

        return safe(values);
    }

    return values
        .filter(
            value =>
                value !== undefined &&
                value !== null &&
                safe(value) !== ""
        )
        .map(value =>
            typeof value === "object"
                ? (
                    value.name ||
                    value.label ||
                    value.id ||
                    ""
                )
                : safe(value)
        )
        .filter(Boolean)
        .join(separator);
}


/**
 * Thêm một dòng nếu có dữ liệu
 */
function addLine(
    lines,
    label,
    value
) {

    const text =
        safe(value);

    if (text) {

        lines.push(
            `${label}: ${text}`
        );
    }
}


/* =========================================================
   3. RESOLVE GENRE
   ========================================================= */

function resolveGenre(songData) {

    if (!songData) {
        return null;
    }

    if (songData.genre) {

        return {
            name:
                safe(songData.genre)
        };
    }

    if (songData.genreId) {

        return getGenreById(
            songData.genreId
        );
    }

    return null;
}


/* =========================================================
   4. RESOLVE STYLE
   ========================================================= */

function resolveStyle(songData) {

    if (!songData) {
        return null;
    }

    if (songData.style) {

        const databaseStyle =
            songData.styleId
                ? getStyleById(
                    songData.styleId
                )
                : null;

        if (databaseStyle) {

            return {
                ...databaseStyle,
                name:
                    safe(songData.style)
            };
        }

        return {
            name:
                safe(songData.style)
        };
    }

    if (songData.styleId) {

        return getStyleById(
            songData.styleId
        );
    }

    return null;
}


/* =========================================================
   5. RESOLVE MOOD
   ========================================================= */

function resolveMood(songData) {

    if (!songData) {
        return null;
    }

    if (songData.mood) {

        const databaseMood =
            songData.moodId
                ? getMoodById(
                    songData.moodId
                )
                : null;

        if (databaseMood) {

            return {
                ...databaseMood,
                name:
                    safe(songData.mood)
            };
        }

        return {
            name:
                safe(songData.mood)
        };
    }

    if (songData.moodId) {

        return getMoodById(
            songData.moodId
        );
    }

    return null;
}


/* =========================================================
   6. RESOLVE INSTRUMENTS
   ========================================================= */

function resolveInstruments(songData) {

    if (!songData) {
        return [];
    }

    if (
        !Array.isArray(
            songData.instruments
        )
    ) {
        return [];
    }

    return songData.instruments
        .map(instrument => {

            if (
                typeof instrument === "object"
            ) {
                return instrument;
            }

            return getInstrumentById(
                instrument
            );
        })
        .filter(Boolean);
}


/* =========================================================
   7. SONG IDEA
   ========================================================= */

function buildIdeaSection(songData) {

    const lines = [];

    addLine(
        lines,
        "Purpose",
        songData.purpose
    );

    addLine(
        lines,
        "Topic",
        songData.topic
    );

    addLine(
        lines,
        "Story",
        songData.story
    );

    addLine(
        lines,
        "Main message",
        songData.message
    );

    if (!lines.length) {
        return "";
    }

    return [
        "[SONG IDEA]",
        ...lines
    ].join("\n");
}


/* =========================================================
   8. GENRE
   ========================================================= */

function buildGenreSection(genre) {

    if (!genre) {
        return "";
    }

    const lines = [];

    addLine(
        lines,
        "Genre",
        genre.name
    );

    addLine(
        lines,
        "Genre category",
        genre.category
    );

    addLine(
        lines,
        "Genre characteristics",
        genre.description
    );

    if (
        genre.defaultTempo
    ) {

        const tempo =
            genre.defaultTempo;

        if (
            tempo.min !== undefined &&
            tempo.max !== undefined
        ) {

            lines.push(
                `Typical tempo range: ${tempo.min}-${tempo.max} BPM`
            );
        }

        addLine(
            lines,
            "Recommended BPM",
            tempo.recommended
        );
    }

    addLine(
        lines,
        "Default time signature",
        genre.defaultTimeSignature
    );

    addLine(
        lines,
        "Typical energy",
        genre.defaultEnergy
    );

    if (
        Array.isArray(
            genre.typicalVocals
        ) &&
        genre.typicalVocals.length
    ) {

        lines.push(
            `Typical vocal characteristics: ${joinValues(
                genre.typicalVocals
            )}`
        );
    }

    if (
        Array.isArray(
            genre.keywords
        ) &&
        genre.keywords.length
    ) {

        lines.push(
            `Genre keywords: ${joinValues(
                genre.keywords
            )}`
        );
    }

    if (!lines.length) {
        return "";
    }

    return [
        "[GENRE]",
        ...lines
    ].join("\n");
}


/* =========================================================
   9. STYLE
   ========================================================= */

function buildStyleSection(
    songData,
    style
) {

    const lines = [];

    addLine(
        lines,
        "Style",
        songData.style
    );

    addLine(
        lines,
        "Style description",
        songData.styleDescription
    );

    /*
     * Thông tin bổ sung từ database
     */
    if (style) {

        if (
            style.description &&
            style.description !==
                songData.styleDescription
        ) {

            addLine(
                lines,
                "Style characteristics",
                style.description
            );
        }

        if (
            style.defaultEnergy
        ) {

            addLine(
                lines,
                "Typical style energy",
                style.defaultEnergy
            );
        }

        if (
            style.arrangementStyle
        ) {

            addLine(
                lines,
                "Typical arrangement style",
                style.arrangementStyle
            );
        }

        if (
            style.arrangementDensity
        ) {

            addLine(
                lines,
                "Typical arrangement density",
                style.arrangementDensity
            );
        }

        if (
            Array.isArray(
                style.keywords
            ) &&
            style.keywords.length
        ) {

            lines.push(
                `Style keywords: ${joinValues(
                    style.keywords
                )}`
            );
        }
    }

    if (!lines.length) {
        return "";
    }

    return [
        "[STYLE]",
        ...lines
    ].join("\n");
}


/* =========================================================
   10. MOOD
   ========================================================= */

function buildMoodSection(
    songData,
    mood
) {

    const lines = [];

    addLine(
        lines,
        "Mood",
        songData.mood
    );

    if (
        songData.moodLevel !==
        undefined &&
        songData.moodLevel !==
        null
    ) {

        lines.push(
            `Emotional intensity: ${songData.moodLevel}/5`
        );
    }

    if (
        mood &&
        mood.description
    ) {

        addLine(
            lines,
            "Mood characteristics",
            mood.description
        );
    }

    if (!lines.length) {
        return "";
    }

    return [
        "[MOOD]",
        ...lines
    ].join("\n");
}


/* =========================================================
   11. VOCAL
   ========================================================= */

function buildVocalSection(
    songData
) {

    const lines = [];

    addLine(
        lines,
        "Vocal type",
        songData.vocal
    );

    addLine(
        lines,
        "Vocal age / character",
        songData.vocalAge
    );

    addLine(
        lines,
        "Vocal tone",
        songData.vocalTone
    );

    if (!lines.length) {
        return "";
    }

    return [
        "[VOCAL]",
        ...lines
    ].join("\n");
}


/* =========================================================
   12. LYRICS
   ========================================================= */

function buildLyricsSection(
    songData
) {

    const lines = [];

    addLine(
        lines,
        "Lyrics mode",
        songData.lyricsMode
    );

    addLine(
        lines,
        "Lyrics idea",
        songData.lyricsIdea
    );

    addLine(
        lines,
        "Existing lyrics",
        songData.lyrics
    );

    addLine(
        lines,
        "Lyrics requirements",
        songData.lyricsRequirements
    );

    if (!lines.length) {
        return "";
    }

    return [
        "[LYRICS]",
        ...lines
    ].join("\n");
}


/* =========================================================
   13. USER SELECTED INSTRUMENTS
   ========================================================= */

function buildSelectedInstrumentSection(
    instruments
) {

    if (
        !instruments.length
    ) {
        return "";
    }

    const names =
        instruments
            .map(instrument =>
                instrument.name ||
                instrument.label ||
                instrument.id ||
                ""
            )
            .filter(Boolean);

    if (!names.length) {
        return "";
    }

    return [
        "[USER SELECTED INSTRUMENTS]",
        `Instruments: ${joinValues(names)}`
    ].join("\n");
}


/* =========================================================
   14. AUTOMATIC MUSIC DECISIONS
   ========================================================= */

function buildAutomaticMusicSection(
    songData,
    genre,
    style,
    mood
) {

    const lines = [];

    lines.push(
        "[AUTOMATIC MUSICAL DECISIONS]"
    );

    lines.push(
        "The user has not manually specified all musical production parameters."
    );

    lines.push(
        "You must intelligently determine the following elements:"
    );

    lines.push(
        "- Tempo and BPM"
    );

    lines.push(
        "- Time signature"
    );

    lines.push(
        "- Key and harmonic direction"
    );

    lines.push(
        "- Main and supporting instruments"
    );

    lines.push(
        "- Arrangement style and density"
    );

    lines.push(
        "- Intro approach"
    );

    lines.push(
        "- Verse development"
    );

    lines.push(
        "- Chorus development"
    );

    lines.push(
        "- Bridge or transition"
    );

    lines.push(
        "- Emotional climax"
    );

    lines.push(
        "- Outro"
    );

    lines.push(
        "- Overall production approach"
    );

    lines.push("");

    lines.push(
        "Base these decisions on the following hierarchy:"
    );

    lines.push(
        "1. User-specific requirements"
    );

    lines.push(
        "2. Song topic, story and message"
    );

    lines.push(
        "3. Genre"
    );

    lines.push(
        "4. Style"
    );

    lines.push(
        "5. Mood and emotional intensity"
    );

    lines.push(
        "6. Vocal characteristics"
    );

    lines.push(
        "7. General musical conventions"
    );

    lines.push("");

    lines.push(
        "Do not introduce musical elements that contradict the user's instructions."
    );

    /*
     * Gợi ý bổ sung từ database.
     * Không bắt AI phải sao chép hoàn toàn.
     */

    if (
        genre &&
        genre.defaultTempo
    ) {

        const tempo =
            genre.defaultTempo;

        if (
            tempo.min !== undefined &&
            tempo.max !== undefined
        ) {

            lines.push("");

            lines.push(
                `Genre reference tempo range: ${tempo.min}-${tempo.max} BPM`
            );
        }
    }

    if (
        style &&
        style.defaultTempo &&
        style.defaultTempo.recommended
    ) {

        lines.push(
            `Style reference BPM: ${style.defaultTempo.recommended}`
        );
    }

    if (
        mood &&
        mood.description
    ) {

        lines.push(
            `Mood should strongly influence the musical development: ${mood.description}`
        );
    }

    return lines.join("\n");
}


/* =========================================================
   15. NEGATIVE PROMPT
   ========================================================= */

function buildNegativeSection(
    songData
) {

    const negative =
        safe(
            songData.negativePrompt
        );

    if (!negative) {
        return "";
    }

    return [
        "[NEGATIVE PROMPT]",
        negative,
        "",
        "Do not introduce elements that violate these requirements."
    ].join("\n");
}


/* =========================================================
   16. FINAL INSTRUCTION
   ========================================================= */

function buildFinalInstruction() {

    return `[FINAL INSTRUCTION]

Create a complete and coherent song based on the information provided.

Treat all user-provided information as one unified musical specification.

The song should have:

- A clear musical identity
- A strong connection between lyrics and music
- A coherent emotional progression
- A memorable and singable melody
- Appropriate vocal writing
- Natural musical development
- Professional arrangement logic
- A satisfying climax
- A suitable ending

When information is not explicitly provided by the user, make the most appropriate musical decision yourself.

Do not invent details that contradict the user's requirements.

Do not mention these instructions in the generated song.

The final result should feel like one intentional musical work rather than a collection of independent parameters.`;
}


/* =========================================================
   17. BUILD COMPLETE PROMPT
   ========================================================= */

async function loadPromptTemplate() {

    try {

        const url =
            new URL(
                "./music-prompt.txt",
                import.meta.url
            );

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }

        return await response.text();

    } catch (error) {

        console.error(
            "[PROMPT] Không thể tải music-prompt.txt:",
            error
        );

        return "";
    }
}

export async function buildMusicPrompt(songData = {}) {

    /*
     * -----------------------------------------------------
     * 1. Kiểm tra dữ liệu
     * -----------------------------------------------------
     */

    if (!songData) {
        songData = {};
    }


    /*
     * -----------------------------------------------------
     * 2. Resolve dữ liệu từ music database
     * -----------------------------------------------------
     */

    const genre =
        resolveGenre(songData);

    const style =
        resolveStyle(songData);

    const mood =
        resolveMood(songData);

    const instruments =
        resolveInstruments(songData);


    /*
     * -----------------------------------------------------
     * 3. Tạo dữ liệu dùng cho Prompt Template
     * -----------------------------------------------------
     *
     * Các giá trị này sẽ được đưa vào music-prompt.txt
     */

    const variables = {

        PURPOSE:
            safe(songData.purpose),

        TOPIC:
            safe(songData.topic),

        STORY:
            safe(songData.story),

        MESSAGE:
            safe(songData.message),


        GENRE:
            safe(
                songData.genre ||
                genre?.name
            ),


        STYLE:
            safe(
                songData.style ||
                style?.name
            ),

        STYLE_DESCRIPTION:
            safe(
                songData.styleDescription
            ),


        MOOD:
            safe(
                songData.mood ||
                mood?.name
            ),

        MOOD_LEVEL:
            safe(
                songData.moodLevel
            ),


        VOCAL:
            safe(
                songData.vocal
            ),

        VOCAL_AGE:
            safe(
                songData.vocalAge
            ),

        VOCAL_TONE:
            safe(
                songData.vocalTone
            ),


        LYRICS_MODE:
            safe(
                songData.lyricsMode
            ),

        LYRICS_IDEA:
            safe(
                songData.lyricsIdea
            ),

        LYRICS:
            safe(
                songData.lyrics
            ),

        LYRICS_REQUIREMENTS:
            safe(
                songData.lyricsRequirements
            ),


        NEGATIVE_PROMPT:
            safe(
                songData.negativePrompt
            ),


        INSTRUMENTS:
            joinValues(
                instruments
            )
    };


    /*
     * -----------------------------------------------------
     * 4. Tạo các thông tin AI tự động quyết định
     * -----------------------------------------------------
     */

    variables.AUTO_MUSIC_DECISIONS =

`The AI should automatically determine:

- Tempo and BPM
- Time signature
- Key
- Harmonic direction
- Main instruments
- Supporting instruments
- Arrangement style
- Arrangement density
- Intro
- Verse development
- Chorus development
- Bridge or transition
- Musical climax
- Outro
- Overall production direction

These decisions must be musically consistent with the user's topic, story, message, genre, style, mood, vocal characteristics, lyrics, and negative prompt.`;


    /*
     * -----------------------------------------------------
     * 5. Lấy Prompt Template
     * -----------------------------------------------------
     *
     * music-prompt.txt phải được load trước.
     *
     * window.musicPromptTemplate được tạo
     * bởi phần load template trong app.js
     */

    const template =
    await loadPromptTemplate();

    if (!template) {

        console.error(
            "[PROMPT] Không tìm thấy music-prompt.txt"
        );

        return "";
    }


    /*
     * -----------------------------------------------------
     * 6. Thay {{VARIABLE}} bằng dữ liệu thực tế
     * -----------------------------------------------------
     */

    let prompt =
        template;


    Object.entries(
        variables
    ).forEach(
        ([key, value]) => {

            const placeholder =
                `{{${key}}}`;

            prompt =
                prompt.replaceAll(
                    placeholder,
                    safe(value)
                );
        }
    );


    /*
     * -----------------------------------------------------
     * 7. Xử lý placeholder chưa có dữ liệu
     * -----------------------------------------------------
     *
     * Ví dụ:
     *
     * {{TOPIC}}
     *
     * nếu người dùng không nhập thì để trống.
     */

    prompt =
        prompt.replace(
            /\{\{[A-Z0-9_]+\}\}/g,
            ""
        );


    /*
     * -----------------------------------------------------
     * 8. Làm sạch khoảng trắng dư thừa
     * -----------------------------------------------------
     */

    prompt =
        prompt
            .replace(
                /\n{3,}/g,
                "\n\n"
            )
            .trim();


    /*
     * -----------------------------------------------------
     * 9. Trả về Prompt hoàn chỉnh
     * -----------------------------------------------------
     */

    return prompt;
}


/* =========================================================
   18. COMPACT PROMPT
   ========================================================= */

export function buildCompactMusicPrompt(
    songData = {}
) {

    const parts = [];

    addLine(
        parts,
        "Purpose",
        songData.purpose
    );

    addLine(
        parts,
        "Topic",
        songData.topic
    );

    addLine(
        parts,
        "Story",
        songData.story
    );

    addLine(
        parts,
        "Message",
        songData.message
    );

    addLine(
        parts,
        "Genre",
        songData.genre
    );

    addLine(
        parts,
        "Style",
        songData.style
    );

    addLine(
        parts,
        "Style description",
        songData.styleDescription
    );

    addLine(
        parts,
        "Mood",
        songData.mood
    );

    if (
        songData.moodLevel !==
        undefined &&
        songData.moodLevel !==
        null
    ) {

        parts.push(
            `Emotional intensity: ${songData.moodLevel}/5`
        );
    }

    addLine(
        parts,
        "Vocal",
        songData.vocal
    );

    addLine(
        parts,
        "Vocal age",
        songData.vocalAge
    );

    addLine(
        parts,
        "Vocal tone",
        songData.vocalTone
    );

    addLine(
        parts,
        "Lyrics mode",
        songData.lyricsMode
    );

    addLine(
        parts,
        "Lyrics idea",
        songData.lyricsIdea
    );

    addLine(
        parts,
        "Lyrics",
        songData.lyrics
    );

    addLine(
        parts,
        "Lyrics requirements",
        songData.lyricsRequirements
    );

    addLine(
        parts,
        "Negative prompt",
        songData.negativePrompt
    );


    parts.push(
        "Automatically determine tempo, BPM, time signature, key, instrumentation, arrangement, song structure, musical development, climax, outro, and production based on the provided requirements."
    );


    return parts.join("\n");
}


/* =========================================================
   19. EXPORT DEFAULT
   ========================================================= */

export default {

    buildMusicPrompt,

    buildCompactMusicPrompt

};


