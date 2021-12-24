import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catRepository.save(createCatDto);
  }

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: string) {
    return this.catRepository.findOne({ id });
  }

  update(updateCatDto: UpdateCatDto) {
    return this.catRepository.save(updateCatDto);
  }

  remove(id: string) {
    return this.catRepository.delete(id);
  }
}
