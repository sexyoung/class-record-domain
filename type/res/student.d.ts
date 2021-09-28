import { StudentStatus } from "domain/type";

export interface Student {
  id: number;
  name: string;
  status: StudentStatus;
  lineId: string;
  picture: string;
}

