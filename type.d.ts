export type StudentStatus = 'join' | 'dropout';

/** @deprecated */
export interface Record<T, D = {}> {
  type: T,
  data?: D,
  date: Date,
}

/** @deprecated */
export type StudentRollCall = Record<'rollcall'>

/** @deprecated */
export type StudentDeposit = Record<'deposit', {
  name: string,
  money: number,
  times: number,
}>

/** @deprecated */
export type StudentRecord = (StudentDeposit | StudentRollCall)[];

/** @deprecated */
export interface GetStudentInfoRes {
  name: string,
  status: StudentStatus,
  picture: string,
  createdAt: Date,
  updatedAt: Date,
  records: StudentRecord
}

/** @deprecated */
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