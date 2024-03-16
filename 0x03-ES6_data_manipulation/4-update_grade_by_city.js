export default function updateStudentGradeByCity(lst, city, newGrades) {
  const arr = lst.filter((item) => item.location === city);
  const newArr = arr.map((item) => {
    const grades = newGrades.find((grade) => grade.studentId === item.id);
    const grade = grades ? grades.grade : 'N/A';
    return { ...item, grade };
  });
  return newArr;
}
