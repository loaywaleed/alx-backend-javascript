export default function getStudentIdsSum(lst) {
  const idLst = lst.map((item) => item.id); 
  return idLst.reduce((result, current_value) => result + current_value, 0);
}
