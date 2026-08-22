/* =========================================================
   NORMALIZE
   ========================================================= */

export function normalizeValue(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value).trim();
}


export function normalizeArray(value) {

    if (!Array.isArray(value)) {
        return [];
    }

    return value
        .map(item => String(item).trim())
        .filter(Boolean);
}


export function normalizeSongData(data) {

    return {

        ...data,

        purpose:
            normalizeValue(data.purpose),

        topic:
            normalizeValue(data.topic),

        story:
            normalizeValue(data.story),

        message:
            normalizeValue(data.message),

        genreId:
            normalizeValue(data.genreId),

        genre:
            normalizeValue(data.genre),

        subGenreId:
            normalizeValue(data.subGenreId),

        subGenre:
            normalizeValue(data.subGenre),

        styleId:
            normalizeValue(data.styleId),

        style:
            normalizeValue(data.style),

        styleDescription:
            normalizeValue(data.styleDescription),

        mood:
            normalizeArray(data.mood),

        secondaryMood:
            normalizeArray(data.secondaryMood),

        energyLevel:
            normalizeValue(data.energyLevel),

        emotionalArc:
            normalizeValue(data.emotionalArc),

        tempo:
            normalizeValue(data.tempo),

        bpm:
            normalizeValue(data.bpm),

        timeSignature:
            normalizeValue(data.timeSignature),

        vocalType:
            normalizeValue(data.vocalType),

        vocalAge:
            normalizeValue(data.vocalAge),

        vocalTone:
            normalizeValue(data.vocalTone),

        vocalStyle:
            normalizeValue(data.vocalStyle),

        vocalTechnique:
            normalizeValue(data.vocalTechnique),

        mainInstruments:
            normalizeArray(data.mainInstruments),

        secondaryInstruments:
            normalizeArray(data.secondaryInstruments),

        signatureInstruments:
            normalizeArray(data.signatureInstruments),

        arrangementStyle:
            normalizeValue(data.arrangementStyle),

        arrangementDensity:
            normalizeValue(data.arrangementDensity),

        arrangementDevelopment:
            normalizeValue(data.arrangementDevelopment),

        musicalHighlights:
            normalizeValue(data.musicalHighlights),

        introStyle:
            normalizeValue(data.introStyle),

        climaxStyle:
            normalizeValue(data.climaxStyle),

        outroStyle:
            normalizeValue(data.outroStyle),

        songStructure:
            normalizeArray(data.songStructure),

        lyricsMode:
            normalizeValue(data.lyricsMode),

        lyrics:
            normalizeValue(data.lyrics),

        lyricsIdea:
            normalizeValue(data.lyricsIdea),

        lyricsRequirements:
            normalizeValue(data.lyricsRequirements),

        language:
            normalizeValue(data.language),

        dialect:
            normalizeValue(data.dialect),

        pronunciationRequirements:
            normalizeValue(
                data.pronunciationRequirements
            ),

        audioQuality:
            normalizeValue(data.audioQuality),

        productionStyle:
            normalizeValue(data.productionStyle),

        vocalProduction:
            normalizeValue(data.vocalProduction),

        mixingRequirements:
            normalizeValue(data.mixingRequirements),

        masteringRequirements:
            normalizeValue(data.masteringRequirements),

        negativePrompt:
            normalizeValue(data.negativePrompt),

        avoidElements:
            normalizeValue(data.avoidElements)
    };
}