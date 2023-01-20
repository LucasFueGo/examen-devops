// TODO: Add here the function to validate
function isValidGamerTag(gamerTag) {
    return gamerTag.length >= 8 && /[!@#\$%\^\&*\)\(+=._-]/.test(gamerTag) && /\d/.test(gamerTag);
}



const isEmpty = (label) => !label || label.length === 0;

module.exports = { isValidGamerTag, isEmpty};