import * as Type from '../../type';

export interface Student {
  id: number;
  name: string;
  lineId: string;
  phone: string;
  email: string;
  picture: string;
  times: number;
  expiresAt?: string;
  planTimes: number;
  rollcalls?: number;
  status: Type.StudentStatus;
}

export interface IRecord<T, D = {}> {
  id: number;
  type: T;
  data?: D;
  date: Date;
}

export type RollCall = IRecord<'rollcall'>

export type Deposit = IRecord<'deposit', {
  name: string;
  money: number;
  times: number;
  expiresAt: string;
}>

export type Record = (Deposit | RollCall)[];

export interface Detail extends Student {
  createdAt: Date;
  updatedAt: Date;
  records: Record;
}

export type StudentQuery = Student & {
  deposits: (Type.Deposit & {plan: Type.Plan})[];
  rollcalls: Type.RollCall[];
}