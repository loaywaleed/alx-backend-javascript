export default function getStudentsByLocation(lst, city) {
  return lst.filter((item) => item.location === city);
}
