import { iroute } from "../../config/interfaces";
import indexController from "../../controllers/index.controller";

const route: iroute = {
  path: "/",
  method: "GET",
  handler: indexController,
};

export default route;
