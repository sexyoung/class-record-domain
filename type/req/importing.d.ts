import { StudentStatus } from "domain/type";

export interface Plan {
  name: string;
  money: number;
  times: number;
  expiresDays: number;
}

export interface Student {
  name: string;
  status: StudentStatus;
  plan: string;
  depositDay: string;
}

export interface RollCall {
  datetime: string;
  student: string;
}
