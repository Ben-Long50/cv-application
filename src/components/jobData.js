export const jobList = [];

export class Job {
  constructor(company, position, description, startDate, endDate) {
    this.id = generateId();
    this.company = company;
    this.position = position;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    jobList.push(this);
  }
}

function generateId() {
  return jobList.length;
}

new Job(
  'Weistec Engineering',
  'Mechanical Design Engineer',
  'Design',
  'June, 2021',
  'March, 2024',
);
