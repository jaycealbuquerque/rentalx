import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRouters = Router();

specificationsRouters.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRouters };
