export default function getStudentIdsSum(lst) {
  const idLst = lst.map((item) => item.id);
  return idLst.reduce((result, currentValue) => result + currentValue, 0);
}
