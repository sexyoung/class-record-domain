import { StudentStatus } from domain/type;

export interface Student {
  id: number;
  name: string;
  status: StudentStatus;
  lineId: string;
  picture: string;
}

export interface OneStudent {
  name: string;
  status: string;
  picture: string | null;
  records: Array;
}

