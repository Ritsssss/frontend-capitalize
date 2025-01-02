export default function capitalize(word) {
    if (word === '') {
        return '';
    }
    const [firstLetter, ...otherLetters] = word;
    return `${firstLetter.toUpperCase()}${otherLetters.join('')}`;
};