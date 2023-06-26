import { Gender } from "./gender";
import { Pronoun } from "./pronoun";
import { Rank } from "./rank";
import { UserSocial } from "./user-social";
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
    status: string;
    gender: Gender;
    pronoun: Pronoun;
    rank: Rank;
    socials: UserSocial[];
}
