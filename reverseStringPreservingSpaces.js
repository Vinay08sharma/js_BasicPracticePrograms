const str = 'I am a good boy';
const reverseWordsWithin = (str = '') => {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== ' ') {
      res += str[i];
    }
    if (str[res.length] === ' ') {
      res += str[res.length];
    }
  }
  return res;
};
console.log(reverseWordsWithin(str));
