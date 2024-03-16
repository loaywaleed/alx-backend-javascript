export default function cleanSet(set, startString) {
  if (set === false || startString === '') {
    return '';
  }
  const newArr = [...set].filter(item => item.startsWith(startString));
  const mapped = newArr.map(item => item.replace(startString, ''))
  const str = mapped.join('-');
  return str;
}
