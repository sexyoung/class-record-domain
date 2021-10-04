export interface Plan {
  id: number;
  teacherId: number;
  name: string;
  money: number;
  times: number;
  expiresDays: number;
  isActive: boolean;
}