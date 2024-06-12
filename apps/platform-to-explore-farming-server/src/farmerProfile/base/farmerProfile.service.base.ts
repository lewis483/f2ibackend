/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FarmerProfile as PrismaFarmerProfile } from "@prisma/client";

export class FarmerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FarmerProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.farmerProfile.count(args);
  }

  async farmerProfiles<T extends Prisma.FarmerProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerProfileFindManyArgs>
  ): Promise<PrismaFarmerProfile[]> {
    return this.prisma.farmerProfile.findMany<Prisma.FarmerProfileFindManyArgs>(
      args
    );
  }
  async farmerProfile<T extends Prisma.FarmerProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerProfileFindUniqueArgs>
  ): Promise<PrismaFarmerProfile | null> {
    return this.prisma.farmerProfile.findUnique(args);
  }
  async createFarmerProfile<T extends Prisma.FarmerProfileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerProfileCreateArgs>
  ): Promise<PrismaFarmerProfile> {
    return this.prisma.farmerProfile.create<T>(args);
  }
  async updateFarmerProfile<T extends Prisma.FarmerProfileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerProfileUpdateArgs>
  ): Promise<PrismaFarmerProfile> {
    return this.prisma.farmerProfile.update<T>(args);
  }
  async deleteFarmerProfile<T extends Prisma.FarmerProfileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmerProfileDeleteArgs>
  ): Promise<PrismaFarmerProfile> {
    return this.prisma.farmerProfile.delete(args);
  }
}
