import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    return this.groupRepository.find();
  }

  findOne(id: number): Promise<Group> {
    return this.groupRepository.findOne({ where: { id } });
  }

  create(group: Group): Promise<Group> {
    return this.groupRepository.save(group);
  }

  async update(id: number, group: Partial<Group>): Promise<Group> {
    await this.groupRepository.update(id, group);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.groupRepository.delete(id).then(() => {});
  }
}
