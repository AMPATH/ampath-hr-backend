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

    1. Add Config files for the database connection by creating a file `index.ts` in `src/config/index.ts` populate the file as below
    2. Uncomment config properties on `connection.ts` file [here](/src/connection/connection.ts)
    3. Uncomment config on `index.ts` [here](src/index.ts)

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

 server should by default be running [http://localhost:3000](http://localhost:3000)


