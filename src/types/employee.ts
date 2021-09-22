export interface Employee {
  firstName: string;
  middleName?: string;
  lastName: string;
  idNumber: number | string;
  dob: string;
  telephone: string;
  email: string;
  gender: string;
  kraPin: string;
  nssf: number;
  nhif: number;
  pfNumber: Number;
  salutation: string;
}

export interface EmployeeMovements {
  pfNumber: Number;
  project: Number;
  department: Number;
  site: Number;
  county: Number;
  countyBudget: number;
  programArea: Number;
  date: string;
  endOfContract: string;
  dateOfJoining: string;
  dateOfLeaving: string;
  jobSpecification: string;
  contractStatus: string;
}
export interface EmployeeUpdate {
  firstName: string;
  middleName?: string;
  lastName: string;
  idNumber: number | string;
  dob: string;
  telephone: string;
  email: string;
  gender: string;
  kraPin: string;
  nssf: number;
  nhif: number;
  pfNumber: Number;
  salutation: string;
}
export interface TimesheetsUpdate {
  pfNumber: Number;
  month: string;
  upload: string;
}
export interface FindReport {
  department: Number;
  site: Number;
  project: Number;
  county: Number;
  budget: number;
  program: Number;
  Empstatus: string;
}
export interface UserDetails {
  userName: string;
  email: string;
  password: string;
}
