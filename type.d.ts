export interface RollCall {
  type: 'rollcall',
  date: Date,
}

export interface Deposit {
  type: 'deposit',
  name: string,
  money: number,
  times: number,
  date: Date,
}