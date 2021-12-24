import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @ApiProperty({ type: String })
  nickName: string;

  @IsString()
  @ApiProperty({ type: String })
  breed: string;

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  aggressive?: boolean;
}
