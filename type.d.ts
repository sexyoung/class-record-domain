export type StudentStatus = 'join' | 'dropout';

/** @deprecated */
export interface Record<T, D = {}> {
  type: T,
  data?: D,
  date: Date,
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

export interface RollCall {
  id: number,
  createdAt: string,
}

export interface Deposit {
  id: number,
  planId: number,
  createdAt: string,
  expiresAt: string,
}

export interface Plan {
  id: number,
  times: number,
}