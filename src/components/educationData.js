export const schoolList = [];

export class School {
  constructor(name, degree, gpa, graduationDate) {
    this.id = generateId();
    this.name = name;
    this.degree = degree;
    this.gpa = gpa;
    this.graduationDate = graduationDate;
    schoolList.push(this);
  }
}

function generateId() {
  return schoolList.length;
}

new School(
  'California Baptist University',
  'BS in Mechanical Engineering',
  '3.5',
  'May 3, 2018',
);
