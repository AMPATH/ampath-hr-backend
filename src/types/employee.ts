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
    pfNumber: string;
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
    pfNumber: string;
    salutation: string;
}
