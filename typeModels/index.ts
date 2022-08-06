export interface Employee {
  id: number;
  employeeName: string;
  employeeAge: number;
  employeePastExperience: EmployeePreviousExperience[];
}

export interface EmployeePreviousExperience {
  employeePreviousCompanyName: string;
  employeePreviousCompanyExperience: number;
}
