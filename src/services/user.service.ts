import UserRepository from '../repositories/user.repository';
import { IPasswordEncoder, IManagedUserDto } from '../types';
import { v4 } from 'uuid';
import MailService from './mail.service';
import UserMapper from '../mappers/user.mapper';

export default class UserService {

  public constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordEncoder: IPasswordEncoder,
    private readonly mailService: MailService,
    private readonly userMapper: UserMapper,
  ) {}

  public async register(userDto: IManagedUserDto) {
    const user = this.userMapper.fromManagedUserDtoToUser(userDto);
    const verificationCode = v4();
    user.verificationCode = verificationCode;
    user.password = await this.passwordEncoder.encode(user.password);

    const savedUser = await this.userRepository.saveAndGet(user);
    await this.mailService.sendVerificationCode(savedUser.email, savedUser.id!, verificationCode);
  }
}
