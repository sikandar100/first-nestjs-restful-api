import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

import { AuthGuard } from 'src/auth/authGuard';

@Controller('cats')
@ApiTags('posts')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('findall')
  findAll() {
    return this.catsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id/find')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(updateCatDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
