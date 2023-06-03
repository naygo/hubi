import { StatusEnum } from "@hubi/types";

export interface UserSocial {
  id: number;
  socialId: number;
  userId: number;
  url: string;
  createdAt: Date;
  status: StatusEnum;
}
