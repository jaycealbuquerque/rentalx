import { SpecificationsRepository } from "../../repositories/implemantations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationControler";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
