import { Test, TestingModule } from '@nestjs/testing';
import { ContractsService } from './contracts.service';
import { Contract } from "./interfaces/contract.interface";
import { Model } from "mongoose";
import {getModelToken} from "@nestjs/mongoose";

describe('ContractsService', () => {
  let service: ContractsService;
  let model: Model<Contract>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          ContractsService,
        {
          provide: getModelToken('Contract'),
          useValue: {}
        }
      ],
    }).compile();

    service = module.get<ContractsService>(ContractsService);
    model = module.get<Model<Contract>>(getModelToken('Contract'))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
