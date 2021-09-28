import { StudentStatus } from "../../type";

export enum Query {
  Join = 'join',
  Dropout = 'dropout',
  Current = 'current',
  Zero = 'zero',
  Debts = 'debts',
}

export interface IRecord<T, D = {}> {
  type: T;
  data?: D;
  date: Date;
}

export type RollCall = IRecord<'rollcall'>

export type Deposit = IRecord<'deposit', {
  name: string;
  money: number;
  times: number;
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