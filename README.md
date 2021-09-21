# ampath-hr-backend

![Node.js CI](https://github.com/AMPATH/ampath-hr-backend/workflows/Node.js%20CI/badge.svg)

This is Ampath HR Back end 


### Instructions

#### Prerequisite 

- NodeJS >= 12
- Git
- Text Editor Visual Studio Code

### setup

1. Clone the repo and install dependencies

    - add config files for the database connection by creating a file `index.ts` in `src/config/index.ts` populate the file as below
    - uncomment config properties on `connection.ts` file [here](/src/connection/connection.ts)
    - uncomment config on `index.ts` [here](src/index.ts)

        ```sh 
        export default {
            port: process.env.PORT || 3000,
            mysql: {
                connectionLimit: ,
                host: "",
                user: "",
                password: "",
                database: ""
            }
        }
        ```

To start the server
```
 yarn start or npm start

 ```

    -   API endpoint base URL http://localhost:3000

 2. Documentation

    -   Documentation runs on [http://localhost:3000/documentation](http://localhost:3000/documentation)


