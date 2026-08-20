console.log("[APP] app.js loaded");
/* =========================================================
   AI MUSIC PROMPT BUILDER
   File: app.js
   Version: 1.0

   Vai trò:
   - Entry point của ứng dụng
   - Kết nối Core
   - Kết nối Music Database
   - Kết nối Prompt Builder
   - Kết nối Services
   - Khởi tạo ứng dụng

   app.js KHÔNG chứa:
   - dữ liệu genre/style/mood...
   - logic tạo prompt chi tiết
   - logic validation chi tiết
   - logic lưu trữ chi tiết
   ========================================================= */


/* =========================================================
   1. CORE
   ========================================================= */

import {
    getSongData,
    resetSongData,
    saveSongData,
    loadSongData,
    clearSongData
} from "./js/core/song-data.js";

import {
    normalizeSongData
} from "./js/core/normalize.js";

import {
    validateSongData
} from "./js/core/validation.js";


/* =========================================================
   2. MUSIC DATABASE
   ========================================================= */

import {
    genres
} from "./js/music/genres.js";

import {
    styles
} from "./js/music/styles.js";

import {
    moods
} from "./js/music/moods.js";

import {
    tempos
} from "./js/music/tempos.js";

import {
    vocals
} from "./js/music/vocals.js";

import {
    instruments
} from "./js/music/instruments.js";

import {
    arrangements
} from "./js/music/arrangements.js";

import {
    structures
} from "./js/music/structures.js";


/* =========================================================
   3. SERVICES
   ========================================================= */


/* =========================================================
   4. PROMPT
   ========================================================= */

import {
    buildMusicPrompt
} from "./js/prompt/builder.js";


/* =========================================================
   5. STORAGE
   ========================================================= 

import {
    saveSongData,
} from "./js/prompt/storage.js";
*/

/* =========================================================
   6. EXPORT
   ========================================================= 

import {
    exportPrompt
} from "./js/prompt/export.js";
*/

/* =========================================================
   7. APP STATE
   ========================================================= */

/**
 * Trạng thái trung tâm của ứng dụng.
 *
 * app.js giữ state hiện tại.
 * Các module khác không tự ý giữ state ứng dụng.
 */

const appState = {

    initialized: false,

    songData: null,

    prompt: "",

    validation: null

};


/* =========================================================
   8. MUSIC DATABASE
   ========================================================= */

const musicDatabase = {

    genres,

    styles,

    moods,

    tempos,

    vocals,

    instruments,

    arrangements,

    structures

};


/* =========================================================
   9. KHỞI TẠO SONG DATA
   ========================================================= */

/**
 * Tạo dữ liệu bài hát mới.
 */
function createNewSong() {

    appState.songData = createSongData();

    appState.prompt = "";

    appState.validation = null;

    return appState.songData;
}


/* =========================================================
   10. LOAD SONG DATA
   ========================================================= */

/**
 * Nạp dữ liệu bài hát từ storage.
 *
 * Nếu không có dữ liệu:
 * → tạo dữ liệu mới.
 */
function loadApplicationData() {

    try {

        const savedData =
            loadSongData();

        if (savedData) {

            appState.songData =
                normalizeSongData(savedData);

            console.log(
                "[APP] Đã khôi phục dữ liệu:",
                appState.songData
            );

        } else {

            createNewSong();

            console.log(
                "[APP] Không có dữ liệu đã lưu."
            );

        }

    } catch (error) {

        console.error(
            "[APP] Không thể tải dữ liệu:",
            error
        );

        createNewSong();
    }

    return appState.songData;
}
/* =========================================================
   11. SAVE SONG DATA
   ========================================================= */

/**
 * Lưu dữ liệu hiện tại.
 */
function saveApplicationData() {

    if (!appState.songData) {
        return false;
    }

    try {

        saveSongData(
            appState.songData
        );

        return true;

    } catch (error) {

        console.error(
            "[APP] Không thể lưu dữ liệu:",
            error
        );

        return false;
    }
}


/* =========================================================
   12. NORMALIZE
   ========================================================= */

/**
 * Chuẩn hóa dữ liệu trước khi xử lý.
 */
function normalizeCurrentData() {

    if (!appState.songData) {
        createNewSong();
    }

    appState.songData =
        normalizeSongData(
            appState.songData
        );

    return appState.songData;
}


/* =========================================================
   13. VALIDATION
   ========================================================= */

/**
 * Kiểm tra dữ liệu hiện tại.
 */
function validateCurrentData() {

    normalizeCurrentData();

    appState.validation =
        validateSongData(
            appState.songData
        );

    return appState.validation;
}


/* =========================================================
   14. GET GENRE
   ========================================================= */

/**
 * Lấy thông tin genre theo ID.
 */
function getGenre(id) {

    if (!id) {
        return null;
    }

    return genres.find(
        genre => genre.id === id
    ) || null;
}

/* =========================================================
   15. GET STYLE
   ========================================================= */

/**
 * Lấy thông tin style theo ID.
 */
function getStyle(id) {

    if (!id) {
        return null;
    }

    return styles.find(
        style => style.id === id
    ) || null;
}
/* =========================================================
   16. APPLY GENRE
   ========================================================= */

/**
 * Áp dụng genre vào songData.
 *
 * Genre chỉ cung cấp giá trị mặc định.
 * Không ghi đè những lựa chọn người dùng
 * nếu chúng đã được thiết lập.
 */

function applyGenre(id) {

    const genre = getGenre(id);

    if (!genre) {
        return null;
    }

    appState.songData.genreId =
        genre.id;

    appState.songData.genre =
        genre.name;

    return genre;
}

/* =========================================================
   17. APPLY STYLE
   ========================================================= */

/**
 * Áp dụng style vào songData.
 */


function applyStyle(id) {

    const style = getStyle(id);

    if (!style) {
        return null;
    }

    appState.songData.styleId =
        style.id;

    appState.songData.style =
        style.name;

    return style;
}

/* =========================================================
   18. BUILD PROMPT
   ========================================================= */

/**
 * Tạo prompt từ songData hiện tại.
 */
function generatePrompt() {

    normalizeCurrentData();

    const validation =
        validateCurrentData();

    if (
        validation &&
        validation.valid === false
    ) {

        console.warn(
            "[APP] Dữ liệu chưa hợp lệ:",
            validation
        );

        return "";
    }

    try {

        appState.prompt =
            buildPrompt(
                appState.songData
            );

        return appState.prompt;

    } catch (error) {

        console.error(
            "[APP] Không thể tạo prompt:",
            error
        );

        appState.prompt = "";

        return "";
    }
}


/* =========================================================
   19. EXPORT PROMPT
   ========================================================= */

/**
 * Xuất prompt hiện tại.
 */
function exportCurrentPrompt() {

    if (!appState.prompt) {

        generatePrompt();

    }

    if (!appState.prompt) {

        console.warn(
            "[APP] Không có prompt để xuất."
        );

        return false;
    }

    try {

        exportPrompt(
            appState.prompt
        );

        return true;

    } catch (error) {

        console.error(
            "[APP] Không thể xuất prompt:",
            error
        );

        return false;
    }
}




/* =========================================================
   21. UI ACTION HANDLER
   ========================================================= */

function handleUIAction(event) {

    const element =
        event.target.closest(
            "[data-action]"
        );

    if (!element) {
        return;
    }

    const action =
        element.dataset.action;


    switch (action) {

        case "new-song":

            createNewSong();

            renderApplication();

            break;


        case "save":

            saveApplicationData();

            break;


        case "generate-prompt":

            generatePrompt();

            renderPrompt();

            break;


        case "export":

            exportCurrentPrompt();

            break;


	case "clear-all":

	    clearAllData();

	    break;
        
	default:

            console.warn(
                `[APP] Action không xác định: ${action}`
            );

    }

}


/* =========================================================
   22. RENDER APPLICATION
   ========================================================= */

/**
 * app.js chỉ điều phối render.
 *
 * Chưa phụ thuộc vào một UI framework nào.
 *
 * Các phần UI cụ thể sẽ được bổ sung sau.
 */
function renderApplication() {

console.log("[APP] renderApplication called");
    renderSongData();
restoreFormData();
    renderPrompt();

   
}


/* =========================================================
   23. RENDER SONG DATA
   ========================================================= */

function renderGenreSelector() {

    const select =
        document.querySelector("#genre");

    if (!select) {
        console.warn(
            "[APP] Không tìm thấy #genre"
        );
        return;
    }

    select.innerHTML = `
        <option value="">
            -- Chọn dòng nhạc --
        </option>
    `;

    genres.forEach(genre => {

        const option =
            document.createElement("option");

        option.value = genre.id;
        option.textContent = genre.name;

        select.appendChild(option);
    });
}


function renderSongData() {

    renderMoodSelector();
    renderMoodLevels();
}




function renderMoodSelector() {

    const select =
        document.getElementById("mood");

    if (!select) {
        return;
    }

    select.innerHTML = "";

    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent =
        "-- Chọn cảm xúc chủ đạo --";

    select.appendChild(defaultOption);


    musicDatabase.moods.forEach(mood => {

        const option =
            document.createElement("option");

        option.value =
            mood.id;

        option.textContent =
            mood.name;

        select.appendChild(option);

    });

}

function renderMoodLevels() {


	console.log("[APP] renderMoodLevels called");
    const container =
        document.getElementById("moodLevelList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const levels = [
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

    const title =
        document.createElement("div");

    title.textContent =
        "Mức độ cảm xúc";

    title.className =
        "mood-level-title";

    container.appendChild(title);


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "mood-level-control";


    const label =
        document.createElement("span");

    label.textContent =
        "Vừa";

    label.className =
        "mood-level-value";

    const slider =
        document.createElement("input");

    slider.type = "range";
slider.id = "moodLevel";
    slider.min = "1";

    slider.max = "5";

    slider.step = "1";

    slider.value = "3";

    slider.className =
        "mood-level-slider";


    slider.addEventListener(
        "input",
        () => {

            const level =
                levels.find(
                    item =>
                        item.value ===
                        Number(slider.value)
                );

            label.textContent =
                level
                    ? level.name
                    : "";

        }
    );


    wrapper.appendChild(slider);

    wrapper.appendChild(label);

    container.appendChild(wrapper);

}

/* =========================================================
   24. RENDER PROMPT
   ========================================================= */

function renderPrompt() {

    const output =
        document.querySelector(
            "[data-prompt-output]"
        );

    if (!output) {
        return;
    }

    output.value =
        appState.prompt || "";

}


/* =========================================================
   25. INITIALIZE APP
   ========================================================= */

function initApp() {

    if (appState.initialized) {
        return;
    }

    console.log(
        "[APP] AI Music Prompt Builder"
    );

    console.log(
        "[APP] Loading music database..."
    );

    console.log(
        "[APP] Genres:",
        musicDatabase.genres.length
    );

    console.log(
        "[APP] Styles:",
        musicDatabase.styles.length
    );

    console.log(
        "[APP] Moods:",
        musicDatabase.moods.length
    );

    console.log(
        "[APP] Tempos:",
        musicDatabase.tempos.length
    );

    console.log(
        "[APP] Vocals:",
        musicDatabase.vocals.length
    );

    console.log(
        "[APP] Instruments:",
        musicDatabase.instruments.length
    );

    console.log(
        "[APP] Arrangements:",
        musicDatabase.arrangements.length
    );

    console.log(
        "[APP] Structures:",
        musicDatabase.structures.length
    );


    /* -----------------------------------------------------
       LOAD DATA
       ----------------------------------------------------- */

    loadApplicationData();


    /* -----------------------------------------------------
       BIND UI
       ----------------------------------------------------- */

    bindUI();


    /* -----------------------------------------------------
       INITIAL RENDER
       ----------------------------------------------------- */

    renderApplication();


    appState.initialized = true;

    console.log(
        "[APP] Application initialized."
    );

}


/* =========================================================
   26. PUBLIC APP API
   ========================================================= */

export const App = {

    /* State */

    state: appState,

    database: musicDatabase,


    /* Song */

    createNewSong,

    loadApplicationData,

    saveApplicationData,


    /* Core */

    normalizeCurrentData,

    validateCurrentData,


    /* Music */

    getGenre,

    getStyle,

    applyGenre,

    applyStyle,


    /* Prompt */

    generatePrompt,

    exportCurrentPrompt,


    /* UI */

    renderApplication,


    /* Init */

    init: initApp

};


/* =========================================================
   27. AUTO INITIALIZE
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initApp
    );

} else {

    initApp();

}


function clearAllData() {

    const confirmed =
        confirm(
            "Xóa toàn bộ dữ liệu bài hát?"
        );

    if (!confirmed) {
        return;
    }

    clearSongData();

    renderApplication();

}


/* =========================================================
   20. UI EVENT BINDING
   ========================================================= */

/**
 * Kết nối các phần tử giao diện.
 *
 * HTML có thể dùng data-action thay vì
 * gắn logic trực tiếp vào HTML.
 *
 * Ví dụ:
 *
 * <button data-action="new-song">
 * <button data-action="generate-prompt">
 * <button data-action="save">
 * <button data-action="export">
 */



function bindUI() {

    document.addEventListener(
        "click",
        handleUIAction
    );

    document.addEventListener(
        "input",
        handleAutoSave
    );

    document.addEventListener(
        "change",
        handleAutoSave
    );

}


function handleAutoSave(event) {

    const element = event.target;

    if (
        !element.matches(
            "input, textarea, select"
        )
    ) {
        return;
    }

	updateSongDataFromElement(element);
    saveCurrentFormData();

}


function updateSongDataFromElement(element) {

    const id = element.id;

    if (!id) {
        return;
    }

    let value;

    if (element.type === "checkbox") {

        value = element.checked;

    } else {

        value = element.value;

    }

    switch (id) {

        /* =========================================
           THÔNG TIN CƠ BẢN
           ========================================= */

        case "purpose":
            appState.songData.purpose = value;
            break;

        case "topic":
            appState.songData.topic = value;
            break;

        case "story":
            appState.songData.story = value;
            break;

        case "message":
            appState.songData.message = value;
            break;


        /* =========================================
           ÂM NHẠC
           ========================================= */

        case "genre":

            appState.songData.genreId = value;

            const genre =
                getGenre(value);

            appState.songData.genre =
                genre
                    ? genre.name
                    : "";

            break;


        case "style":

            appState.songData.styleId = value;

            const style =
                getStyle(value);

            appState.songData.style =
                style
                    ? style.name
                    : "";

            break;


        case "mood":

            appState.songData.moodId =
                value;

            const mood =
                musicDatabase.moods.find(
                    item => item.id === value
                );

            appState.songData.mood =
                mood
                    ? mood.name
                    : "";

            break;


        /* =========================================
           MỨC ĐỘ CẢM XÚC
           ========================================= */

        case "moodLevel":

            appState.songData.moodLevel =
                Number(value);

            break;


        /* =========================================
           GIỌNG HÁT
           ========================================= */

        case "vocal":

            appState.songData.vocalId =
                value;

            const vocal =
                musicDatabase.vocals.find(
                    item => item.id === value
                );

            appState.songData.vocal =
                vocal
                    ? vocal.name
                    : "";

            break;

    }

}

function saveCurrentFormData() {

    if (!appState.songData) {
        return false;
    }

    try {

        /* =====================================================
           01. Ý TƯỞNG BÀI HÁT
           ===================================================== */

        appState.songData.purpose =
            document.getElementById("purpose")?.value || "";

        appState.songData.topic =
            document.getElementById("topic")?.value || "";

        appState.songData.story =
            document.getElementById("story")?.value || "";

        appState.songData.message =
            document.getElementById("message")?.value || "";


        /* =====================================================
           02. DÒNG NHẠC
           ===================================================== */

        const genre =
            document.getElementById("genre");

        if (genre) {

            appState.songData.genreId =
                genre.value;

            appState.songData.genre =
                genre.options[
                    genre.selectedIndex
                ]?.text || "";
        }


        /* =====================================================
           03. PHONG CÁCH
           ===================================================== */

        const style =
            document.getElementById("style");

        if (style) {

            appState.songData.styleId =
                style.value;

            appState.songData.style =
                style.options[
                    style.selectedIndex
                ]?.text || "";
        }


        const styleDescription =
            document.getElementById(
                "styleDescription"
            );

        if (styleDescription) {

            appState.songData.styleDescription =
                styleDescription.value;
        }


        /* =====================================================
           04. CẢM XÚC
           ===================================================== */

        const mood =
            document.getElementById("mood");

        if (mood) {

            appState.songData.moodId =
                mood.value;

            appState.songData.mood =
                mood.options[
                    mood.selectedIndex
                ]?.text || "";
        }


        const moodLevel =
            document.getElementById("moodLevel");

        if (moodLevel) {

            appState.songData.moodLevel =
                Number(moodLevel.value);
        }


        /* =====================================================
           05. GIỌNG HÁT
           ===================================================== */

        const vocal =
    document.getElementById("vocal");

if (vocal) {

    appState.songData.vocalId =
        vocal.value;

    appState.songData.vocal =
        vocal.options[
            vocal.selectedIndex
        ]?.text || "";
}


        const vocalAge =
            document.getElementById("vocalAge");

        if (vocalAge) {

            appState.songData.vocalAge =
                vocalAge.value;
        }


        const vocalTone =
            document.getElementById("vocalTone");

        if (vocalTone) {

            appState.songData.vocalTone =
                vocalTone.value;
        }

/* =====================================================
   06. LỜI BÀI HÁT
   ===================================================== */

const lyricsMode =
    document.getElementById("lyricsMode");

if (lyricsMode) {

    appState.songData.lyricsMode =
        lyricsMode.value;
}


const lyricsIdea =
    document.getElementById("lyricsIdea");

if (lyricsIdea) {

    appState.songData.lyricsIdea =
        lyricsIdea.value;
}


const lyrics =
    document.getElementById("lyrics");

if (lyrics) {

    appState.songData.lyrics =
        lyrics.value;
}


const lyricsRequirements =
    document.getElementById("lyricsRequirements");

if (lyricsRequirements) {

    appState.songData.lyricsRequirements =
        lyricsRequirements.value;
}

/* =====================================================
   07. ĐIỀU CẦN TRÁNH
   ===================================================== */

const negativePrompt =
    document.getElementById("negativePrompt");

if (negativePrompt) {

    appState.songData.negativePrompt =
        negativePrompt.value;
}

        /* =====================================================
           SAVE
           ===================================================== */

        const saved =
            saveSongData(
                appState.songData
            );

        if (saved) {

            console.log(
                "[APP] Auto-saved:",
                appState.songData
            );

        }

        return saved;

    } catch (error) {

        console.error(
            "[APP] Auto-save thất bại:",
            error
        );

        return false;
    }
}


function restoreFormData() {

    if (!appState.songData) {
        return;
    }

    console.log(
        "[APP] Restoring form data:",
        appState.songData
    );


    /* =====================================================
       01. Ý TƯỞNG BÀI HÁT
       ===================================================== */

    const purpose =
        document.getElementById("purpose");

    if (purpose) {
        purpose.value =
            appState.songData.purpose || "";
    }


    const topic =
        document.getElementById("topic");

    if (topic) {
        topic.value =
            appState.songData.topic || "";
    }


    const story =
        document.getElementById("story");

    if (story) {
        story.value =
            appState.songData.story || "";
    }


    const message =
        document.getElementById("message");

    if (message) {
        message.value =
            appState.songData.message || "";
    }


    /* =====================================================
       02. DÒNG NHẠC
       ===================================================== */

    const genre =
        document.getElementById("genre");

    if (genre) {

        genre.value =
            appState.songData.genreId || "";

    }


    /* =====================================================
       03. PHONG CÁCH
       ===================================================== */

    const style =
        document.getElementById("style");

    if (style) {

        style.value =
            appState.songData.styleId || "";

    }


    const styleDescription =
        document.getElementById("styleDescription");

    if (styleDescription) {

        styleDescription.value =
            appState.songData.styleDescription || "";

    }


    /* =====================================================
       04. CẢM XÚC
       ===================================================== */

    const mood =
        document.getElementById("mood");

    if (mood) {

        mood.value =
            appState.songData.moodId || "";

    }


    const moodLevel =
        document.getElementById("moodLevel");

    if (moodLevel) {

        moodLevel.value =
            appState.songData.moodLevel ?? 3;

    }


/* =====================================================
   05. GIỌNG HÁT
   ===================================================== */

const vocal =
    document.getElementById("vocal");

if (vocal) {

    vocal.value =
        appState.songData.vocalId || "";
}

const vocalAge =
    document.getElementById("vocalAge");

if (vocalAge) {

    vocalAge.value =
        appState.songData.vocalAge || "";
}


const vocalTone =
    document.getElementById("vocalTone");

if (vocalTone) {

    vocalTone.value =
        appState.songData.vocalTone || "";
}

/* =====================================================
   06. LỜI BÀI HÁT
   ===================================================== */

const lyricsMode =
    document.getElementById("lyricsMode");

if (lyricsMode) {

    lyricsMode.value =
        appState.songData.lyricsMode || "";
}


const lyricsIdea =
    document.getElementById("lyricsIdea");

if (lyricsIdea) {

    lyricsIdea.value =
        appState.songData.lyricsIdea || "";
}


const lyrics =
    document.getElementById("lyrics");

if (lyrics) {

    lyrics.value =
        appState.songData.lyrics || "";
}


const lyricsRequirements =
    document.getElementById("lyricsRequirements");

if (lyricsRequirements) {

    lyricsRequirements.value =
        appState.songData.lyricsRequirements || "";
}

/* =====================================================
   07. ĐIỀU CẦN TRÁNH
   ===================================================== */

const negativePrompt =
    document.getElementById("negativePrompt");

if (negativePrompt) {

    negativePrompt.value =
        appState.songData.negativePrompt || "";
}


}



async function loadMusicPromptTemplate() {

    try {

        const response =
            await fetch(
                "../js/prompt/music-prompt.txt"
            );

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }

        window.musicPromptTemplate =
            await response.text();

        console.log(
            "[PROMPT] music-prompt.txt loaded"
        );

        return true;

    } catch (error) {

        console.error(
            "[PROMPT] Không thể tải music-prompt.txt:",
            error
        );

        return false;
    }
}


/* =========================================================
   BUILD PROMPT
   ========================================================= */

const btnBuild =
    document.getElementById("btnBuild");

if (btnBuild) {

    btnBuild.addEventListener("click", async () => {

    console.log("[APP] Build prompt...");

    /* 1. Lưu dữ liệu hiện tại */
    saveCurrentFormData();


    /* 2. Lấy songData */
    const data =
        appState.songData;

    console.log(
        "[APP] Song data for prompt:",
        data
    );


    /* 3. Gọi Builder */
    const prompt =
        await buildMusicPrompt(data);

    console.log(
        "[APP] Generated prompt:",
        prompt
    );


    /* 4. Đưa prompt vào ô kết quả */
    const output =
        document.getElementById("promptOutput");

    if (!output) {

        console.error(
            "[APP] Không tìm thấy #promptOutput"
        );

        return;
    }


    output.value =
        prompt;


    /* 5. Thông báo */
    const status =
        document.getElementById("status");

    if (status) {

        status.textContent =
            "Prompt đã được tạo.";
    }

});
}