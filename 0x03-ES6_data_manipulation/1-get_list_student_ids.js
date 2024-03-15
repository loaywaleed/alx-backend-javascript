export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const newArr = arr.map((item) => item.id);
  return newArr;
}
