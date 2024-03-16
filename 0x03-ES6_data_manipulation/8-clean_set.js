export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  const newArr = [...set].filter(item => item.startsWith(startString));
  const mapped = newArr.map(item => item.replace(startString, ''))
  const str = mapped.join('-');
  return str;
}
