import { Gender, Pronoun, Rank, UserSocial, UserStatusEnum } from "@hubi/types";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateBirth: Date;
  genderId: number;
  createdAt: Date;
  updatedAt: Date;
  howDidKnowHubi: string;
  timeInCommunity: string;
  pronounId: number;
  riotId: string;
  rankId: number;
  isAdmin: boolean;
  status: UserStatusEnum;

  gender: Gender;
  pronoun: Pronoun;
  rank: Rank;
  socials: UserSocial[];
}
