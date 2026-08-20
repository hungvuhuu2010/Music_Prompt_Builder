/* =========================================================
   PROMPT TEMPLATE
   ========================================================= */

let promptTemplate = "";


/**
 * Đọc prompt_viet_nhac.txt
 */
export async function loadPromptTemplate() {

    try {

        const response =
            await fetch("prompt_viet_nhac.txt");

        if (!response.ok) {

            throw new Error(
                `Không thể tải prompt_viet_nhac.txt (${response.status})`
            );
        }

        const template =
            await response.text();

        setPromptTemplate(template);

        return template;

    } catch (error) {

        console.error(
            "Lỗi tải prompt template:",
            error
        );

        throw error;
    }
}


/**
 * Gán template
 */
export function setPromptTemplate(template) {

    promptTemplate =
        template || "";
}


/**
 * Lấy template
 */
export function getPromptTemplate() {

    return promptTemplate;
}


/**
 * Kiểm tra template
 */
export function isPromptTemplateLoaded() {

    return (
        promptTemplate.trim().length > 0
    );
}