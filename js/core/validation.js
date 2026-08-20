/* =========================================================
   VALIDATION
   ========================================================= */

export function validateSongData(data) {

    const errors = [];

    if (!data.purpose) {
        errors.push("Thiếu mục đích.");
    }

    if (!data.topic) {
        errors.push("Thiếu chủ đề.");
    }

    if (!data.genre) {
        errors.push("Chưa chọn dòng nhạc.");
    }

    return {

        valid:
            errors.length === 0,

        errors
    };
}