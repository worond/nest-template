import { ApiProperty } from '@nestjs/swagger';

export class Company {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}