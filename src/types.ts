export default interface IUser {
  id: number;
  email: string;
  firstName: string;
  lasstName: string;
  password: string;
  verificationCode: string;
  createdOn: Date;
  verifiedOn: Date;
  lastLoginOn: Date;
}
