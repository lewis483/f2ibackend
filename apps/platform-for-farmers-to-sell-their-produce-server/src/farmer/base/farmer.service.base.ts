/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Farmer as PrismaFarmer } from "@prisma/client";

export class FarmerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FarmerCountArgs, "select">): Promise<number> {
    return this.prisma.farmer.count(args);
  }

  async farmers<T extends Prisma.FarmerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerFindManyArgs>
  ): Promise<PrismaFarmer[]> {
    return this.prisma.farmer.findMany<Prisma.FarmerFindManyArgs>(args);
  }
  async farmer<T extends Prisma.FarmerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerFindUniqueArgs>
  ): Promise<PrismaFarmer | null> {
    return this.prisma.farmer.findUnique(args);
  }
  async createFarmer<T extends Prisma.FarmerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerCreateArgs>
  ): Promise<PrismaFarmer> {
    return this.prisma.farmer.create<T>(args);
  }
  async updateFarmer<T extends Prisma.FarmerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerUpdateArgs>
  ): Promise<PrismaFarmer> {
    return this.prisma.farmer.update<T>(args);
  }
  async deleteFarmer<T extends Prisma.FarmerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerDeleteArgs>
  ): Promise<PrismaFarmer> {
    return this.prisma.farmer.delete(args);
  }
}
