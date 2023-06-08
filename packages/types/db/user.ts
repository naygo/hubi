import { Gender, Pronoun, Rank, UserSocial } from "@hubi/types/db";

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

  gender: Gender;
  pronoun: Pronoun;
  rank: Rank;
  socials: UserSocial[];
}
