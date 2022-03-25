import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from "./interfaces/user.interface";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDoc } from "./interfaces/user-document.interface";

const mockUser = (
    username = 'julieramarojohn',
    password = '1234abcd',
    children = ['Raphaël'],
    avatar = 'me.png',
    role = 'PARENT',
    contracts = [],
    id = 'a uuid'
): User => ({
  username,
  password,
  children,
  avatar,
  role,
  contracts,
  id
});

// still lazy, but this time using an object instead of multiple parameters
const mockUserDoc = (mock?: Partial<User>): Partial<UserDoc> => ({
  username: mock?.username || 'julieramarojohn',
  password: mock?.password || '1234abcd',
  children: mock?.children || ['Raphaël'],
  avatar: mock?.avatar || 'me.png',
  role: mock?.role || 'PARENT',
  contracts: mock?.contracts || [],
  _id: mock?.id || 'a uuid',
});

describe('UsersService', () => {
  let service: UsersService;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          UsersService,
        {
          provide: getModelToken('User'),
          // notice that only the functions we call from the model are mocked
          useValue: {
            new: jest.fn().mockResolvedValue(mockUser()),
            constructor: jest.fn().mockResolvedValue(mockUser()),
            findOne: jest.fn(),
            create: jest.fn(),
            findByIdAndUpdate: jest.fn()
          },
        },],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should insert a new user', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
        Promise.resolve({
          username: 'lepotrelea',
          password: 'azerty',
          children: ['Olympe'],
          avatar: 'oiseau.png',
          role: 'PARENT',
          contracts: [],
          id: 'some id',
        }),
    );
    const newUser = await service.create({
      username: 'lepotrelea',
      password: 'azerty',
      children: ['Olympe'],
      avatar: 'oiseau.png',
      role: 'PARENT',
    });
    expect(newUser).toEqual(mockUser('lepotrelea', 'azerty', ['Olympe'], 'oiseau.png', 'PARENT',  [],'some id'));
  });

  /*it('should update user', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockImplementationOnce(() =>
      Promise.resolve({
        username: 'lepotrelea',
        password: 'azerty',
        children: ['Olympe'],
        avatar: 'soleil.png',
        role: 'PARENT',
        contracts: [],
        id: 'some id',
      }),
    );
  });*/
});
