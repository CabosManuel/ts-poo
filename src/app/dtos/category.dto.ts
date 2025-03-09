import { AccesType, Category } from '../models/category.model';
import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 50)
  name!: string;
  slug!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  creationAt!: Date;
  updatedAt!: Date;

  @IsNotEmpty()
  @IsEnum(AccesType)
  access?: AccesType | undefined;
}


(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'MBCV';
    dto.image = 'https://api.escuelajs.co/api/v1/products';

    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
