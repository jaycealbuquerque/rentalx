import { Specification } from "../model/Specification";

interface ICreateSpecificatioDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificatioDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificatioDTO };
