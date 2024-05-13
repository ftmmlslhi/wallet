import { Prisma } from "@prisma/client";
import { hash } from "crypto";
import { PrismaService } from "prisma/prisma.service";
import { SignInAuthDto } from "./dto/signIn.dto";

export class AuthRepository {
    constructor(    private readonly prisma: PrismaService) { }

    async signin(data: Prisma.usersCreateInput) {
        console.log("usersCreateInput", data)
        try {
            return this.prisma.users.create({
                data,
              });
          
        }
        catch (error) {
            throw error
        }
    }
}