import { REPLACEMENTS } from "../constants/replacements";
import { FORBIDDEN_WORDS } from "../constants/forbiddenWords";

const normalizeText = (text: string): string => {
    return text.split('').map(char => REPLACEMENTS[char] || char).join('')
}

export const noForbiddenWords = (value: string): string | boolean => {
    const normalizedValue = normalizeText(value.toLowerCase());
    return !FORBIDDEN_WORDS.some(word => normalizedValue.includes(normalizeText(word.toLowerCase()))) || "Обнаружено запрещенное слово"
}