import { StudentStatus } from "domain/type";

export interface Plan {
  name: string;
  money: number;
  times: number;
  expiresDays: number;
}

export interface Student {
  name: string;
  plan: string;
  depositDay: string;
  status: StudentStatus;
}

export interface RollCall {
  datetime: string;
  student: string;
}
