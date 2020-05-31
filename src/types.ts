export interface IUser {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  verificationCode: string | null;
  registeredAt?: Date;
  verifiedAt?: Date;
  lastLoginAt?: Date;
  status: number;
  verified: boolean;
  blocked: boolean;
  deleted: boolean;
}

export interface IManagedUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  agree: boolean;
}

export interface IContact {
  id: number;
  userId: number;
  type: number;
  value: string;
  privacy: number;
}

export interface IJob {
  id: number;
  title: string;
  description: string;
  salary: number;
  companyId: number;
}

export interface ISkill {
  id: number;
  name: string;
}

export interface ITag {
  id: number;
  name: string;
}

export interface IMessage {
  id: number;
  fromId: number;
  toId: number;
  read: boolean;
  body: string;
  createdOn: Date;
}

export interface ILanguage {
  id: number;
  code: string;
  name: string;
}

export interface ICompany {
  id: number;
  name: string;
}

export interface IFeedback {
  id?: number;
  email: string;
  userId?: number;
  reasonId: number;
  body: string;
  createdAt?: Date;
  status?: number;
  processedAt?: number;
  processedBy?: number;
  response?: string;
}

export interface IManagedFeedbackDto {
  reasonId: number;
  email: string;
  body: string;
}

export interface IPasswordEncoder {
  encode(plain: string): Promise<string>;
  verify(plain: string, encoded: string): Promise<boolean>;
}

export interface IMailProvider {
  send(from: string, to: string, subject: string, body: string, isHtml: boolean): Promise<void>;
}
