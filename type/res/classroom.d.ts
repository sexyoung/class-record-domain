interface Student {
  id: number;
  name: string;
  picture: string;
}

export interface Class {
  id: number;
  date: Date;
  students: Student[];
}
