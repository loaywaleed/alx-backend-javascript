export default function cleanSet(set, startString) {
  const newArr = [...set].filter(item => item.startsWith(startString);
  )
  str = newArr.join('-');
  return str;
}
