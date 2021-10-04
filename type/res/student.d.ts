import { StudentStatus } from '../../type';

export interface Student {
  id: number;
  name: string;
  status: StudentStatus;
  lineId: string;
  picture: string;
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

export interface Detail {
  name: string;
  status: StudentStatus;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  records: Record;
}