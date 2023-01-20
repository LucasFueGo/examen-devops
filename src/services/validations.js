// TODO: Add here the function to validate
function isValidGamerTag(gamerTag) {
    if(gamerTag.length>=8 && /[!@#\$%\^\&*\)\(+=._-]/.test(gamerTag)) return true;
    return false;
}


const isEmpty = (label) => !label || label.length === 0;

module.exports = { isValidGamerTag, isEmpty};