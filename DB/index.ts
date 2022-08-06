import { Employee } from '../typeModels/index';

export const employees: Employee[] = [
  {
    id: 1,
    employeeName: 'Bob harris',
    employeeAge: 35,
    employeePastExperience: [
      {
        employeePreviousCompanyName: 'ABC Infosolutions',
        employeePreviousCompanyExperience: 12,
      },
      {
        employeePreviousCompanyName: 'Techno Giants',
        employeePreviousCompanyExperience: 13,
      },
    ],
  },
  {
    id: 2,
    employeeName: 'David Malan',
    employeeAge: 24,
    employeePastExperience: [
      {
        employeePreviousCompanyName: 'Iris Softwares',
        employeePreviousCompanyExperience: 0.5,
      },
    ],
  },
];
