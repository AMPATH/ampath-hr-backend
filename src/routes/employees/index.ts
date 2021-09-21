import { iroute } from "../../config/interfaces";
import { employeeController } from "../../controllers/employee.controller";

const route: Array<iroute> = [
  {
    path: "/employee",
    method: "GET",
    handler: employeeController,
    options: {
      tags: ["api"],
      description: "get, all employees that have been captured in the system",
      notes: "Returns an array of employees",
    },
  },
  {
    path: "/employee",
    method: "POST",
    handler: employeeController,
    options: {
      tags: ["api"],
      description: "post, create an employee to stored in the database",
      notes: `Request body, an example below

            {
                "firstName": "test-firstName",
                "middleName": "test-middleName",
                "lastName": "test-lastName",
                "idNumber": "78955",
                "dob": "1990-01-04T21:00:00.000Z",
                "age": 50,
                "telephone": "0722000000",
                "email": "test@example.com",
                "gender": "Male",
                "kraPin": "A001KRAPIN",
                "nssf": 565656,
                "nhif": 5454548,
                "pfNumber": 1256534,
                "salutation": "Mr."
            }
            `,
    },
  },
];

export default route;
