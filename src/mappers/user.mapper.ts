import { IUser, IManagedUserDto } from '../types';

export default class UserMapper {

  public fromManagedUserDtoToUser(userDto: IManagedUserDto): IUser {
    return {
      email: userDto.email,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      password: userDto.password,
      blocked: false,
      verified: false,
      deleted: false,
      status: 0,
      verificationCode: null,
    };
  }
}
