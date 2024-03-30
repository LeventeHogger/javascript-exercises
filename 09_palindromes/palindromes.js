const palindromes = function (words) {
  const allowed = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz0123456789";

  const wordsfiltered = words
    .toLowerCase()
    .split("")
    .filter((char) => allowed.includes(char))
    .join("");

  const reversed = wordsfiltered.split("").reverse().join("");

  return reversed == wordsfiltered;
};

// Do not edit below this line
module.exports = palindromes;
