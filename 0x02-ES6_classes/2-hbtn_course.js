export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new TypeError('Invalid type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(data) {
    if (typeof data === String) {
      this._name = data;
    } else {
      throw new TypeError("Name must be a string");
    }
  }
  
  get length() {
    return this._length;
  }
  set length(data) {
    if (typeof data === Integer) {
      this._length = data;
    } else {
      throw new TypeError("Length must be an Integer");
    }
  }

   
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an Array');
    }
    this._students = value;
  }


}
