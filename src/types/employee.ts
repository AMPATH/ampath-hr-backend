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
  pfNumber: string;
  month: string;
  upload: any;
}
export interface FindReport {
  department: string;
  site: string;
  project: string;
  county: string;
  budget: string;
  program: string;
  Empstatus: string;
}
export interface UserDetails {
  userName: string;
  email: string;
  password: string;
}
export interface BudgetDetails {
  name: string;
  county: number;
  mflCode: string | number;
}
export interface UpdateBudgetDetails {
  name: string;
  county: number;
  mflCode: string | number;
  budgetId: number
}
export interface CountyDetails {
  name: string;
  countyId: number;
}
export interface DepartmentDetails {
  name: string;
  departmentId: number;
}
