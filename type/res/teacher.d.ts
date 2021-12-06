export interface Teacher {
  id: number;
  name: string;
  email: string;
  token: string;
  password: string;
  note: string|null;
}

export interface Detail extends Teacher {
  emailVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// {
//   "id": 1,
//   "name": "sexyoung",
//   "email": "sexyoung@gmail.com",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3OTEzMDA5LCJleHAiOjE2Mzc5OTk0MDl9.uO0IPQqrOACzxYl95uUpB9Rot1Aqy09yLp2m2wjNSVA",
//   "password": "$2a$08$VdWy0hRKoEmjEMmbtv/11.U9XK4wKcHT0xgb5rlcvQRKQpHum7zA6",
//   "note": null,
//   "emailVerifiedAt": "2021-09-28 22:29:12",
//   "createdAt": "2021-09-28 22:29:12",
//   "updatedAt": "2021-11-26 15:50:09"
// }