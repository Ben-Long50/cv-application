export const jobList = [];

export class Job {
  constructor(company, position, description, startDate, endDate) {
    this.id = jobList.length;
    this.company = company;
    this.position = position;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    jobList.push(this);
  }
}

export class JobDesc {
  constructor(parent, description) {
    this.id = parent.length;
    this.description = description;
  }
}

const firstJob = new Job(
  'Weistec Engineering',
  'Lead Mechanical Design Engineer',
  [],
  'June, 2021',
  'March, 2024',
);

export function addJob(parentJob, description) {
  parentJob.push(new JobDesc(parentJob, description));
}

addJob(
  firstJob.description,
  'Innovatively conceived, designed, and prototyped high-performance aftermarket parts for European sports cars.',
);
addJob(
  firstJob.description,
  'Optimized part designs for cost-effective manufacturing via rotational molding, injection molding, machining, investment casting, and sand casting.',
);
addJob(
  firstJob.description,
  'Collaborated closely with fabrication and production teams to streamline processes and ensure efficient production.',
);
addJob(
  firstJob.description,
  'Led design meetings to achieve cost-effective, aesthetically pleasing, and high-performing solutions.',
);
addJob(
  firstJob.description,
  'Coordinated with vendors to develop durable and cost-effective part and mold designs.',
);

const secondJob = new Job(
  'S&B Filters',
  'Mechanical Design Engineer',
  [],
  'June, 2018',
  'June, 2021',
);

addJob(
  secondJob.description,
  'Innovatively conceived, designed, and prototyped high-performance aftermarket parts for European sports cars.',
);
addJob(
  secondJob.description,
  'Optimized part designs for cost-effective manufacturing via rotational molding, injection molding, machining, investment casting, and sand casting.',
);
addJob(
  secondJob.description,
  'Collaborated closely with fabrication and production teams to streamline processes and ensure efficient production.',
);
addJob(
  secondJob.description,
  'Led design meetings to achieve cost-effective, aesthetically pleasing, and high-performing solutions.',
);
addJob(
  secondJob.description,
  'Coordinated with vendors to develop durable and cost-effective part and mold designs.',
);
