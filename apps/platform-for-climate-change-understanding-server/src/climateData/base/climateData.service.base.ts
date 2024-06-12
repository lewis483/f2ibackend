/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClimateData as PrismaClimateData } from "@prisma/client";

export class ClimateDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClimateDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.climateData.count(args);
  }

  async climateDataItems<T extends Prisma.ClimateDataFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClimateDataFindManyArgs>
  ): Promise<PrismaClimateData[]> {
    return this.prisma.climateData.findMany<Prisma.ClimateDataFindManyArgs>(
      args
    );
  }
  async climateData<T extends Prisma.ClimateDataFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClimateDataFindUniqueArgs>
  ): Promise<PrismaClimateData | null> {
    return this.prisma.climateData.findUnique(args);
  }
  async createClimateData<T extends Prisma.ClimateDataCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClimateDataCreateArgs>
  ): Promise<PrismaClimateData> {
    return this.prisma.climateData.create<T>(args);
  }
  async updateClimateData<T extends Prisma.ClimateDataUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClimateDataUpdateArgs>
  ): Promise<PrismaClimateData> {
    return this.prisma.climateData.update<T>(args);
  }
  async deleteClimateData<T extends Prisma.ClimateDataDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClimateDataDeleteArgs>
  ): Promise<PrismaClimateData> {
    return this.prisma.climateData.delete(args);
  }
}
