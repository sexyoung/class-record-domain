type StudentStatus = 'join' | 'dropout';

export interface Record<T, D = {}> {
  type: T,
  data?: D,
  date: Date,
}

export type StudentRollCall = Record<'rollcall'>

export type StudentDeposit = Record<'deposit', {
  name: string,
  money: number,
  times: number,
}>

export type StudentRecord = (StudentDeposit | StudentRollCall)[];

export interface GetStudentInfoRes {
  name: string,
  status: StudentStatus,
  picture: string,
  createdAt: Date,
  updatedAt: Date,
  records: StudentRecord
}

interface RollCallReq {
  date: Date,
  studentIdList: number[]
}

interface Req<T> {
  data: T
}

export interface Student {
  id: number,
  teacherId: number,
  name: string,
  status: StudentStatus,
  lineId: string,
  picture: string,
}