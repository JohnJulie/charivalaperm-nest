import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide: UsersService,
        useValue: {
          create: jest
          .fn()
          .mockImplementation((user: CreateUserDto) =>
              Promise.resolve({ _id: 'a uuid', ...user }),
          ),
        },
      }]
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('create new user', () => {
    it('should create a new user', () => {
      const newUserDTO: CreateUserDto = {
        username: 'lepotrelea',
        password: 'azerty',
        children: ['Olympe'],
        avatar: 'oiseau.png',
        role: 1
      };
      expect(usersController.create(newUserDTO)).resolves.toEqual({
        _id: 'a uuid',
        ...newUserDTO,
      });
    });
  });
});
