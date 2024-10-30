import { IsString, IsNotEmpty } from 'class-validator';

export class FindOrderDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
