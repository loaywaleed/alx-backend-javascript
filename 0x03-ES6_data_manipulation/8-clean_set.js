export default function cleanSet(set, startString) {
  if (!set || !startString || !startString.length || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }
  const newArr = [...set].filter((item) => item.startsWith(startString));
  const mapped = newArr.map((item) => item.replace(startString, ''));
  const str = mapped.join('-');
  return str;
}
