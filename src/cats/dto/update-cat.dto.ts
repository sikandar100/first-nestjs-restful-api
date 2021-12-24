import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  @IsString()
  @ApiProperty({ type: String })
  id: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  nickName?: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  breed?: string;

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  aggressive?: boolean;
}
