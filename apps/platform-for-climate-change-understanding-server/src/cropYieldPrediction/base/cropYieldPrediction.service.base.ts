/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CropYieldPrediction as PrismaCropYieldPrediction,
} from "@prisma/client";

export class CropYieldPredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CropYieldPredictionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cropYieldPrediction.count(args);
  }

  async cropYieldPredictions<T extends Prisma.CropYieldPredictionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropYieldPredictionFindManyArgs>
  ): Promise<PrismaCropYieldPrediction[]> {
    return this.prisma.cropYieldPrediction.findMany<Prisma.CropYieldPredictionFindManyArgs>(
      args
    );
  }
  async cropYieldPrediction<T extends Prisma.CropYieldPredictionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropYieldPredictionFindUniqueArgs>
  ): Promise<PrismaCropYieldPrediction | null> {
    return this.prisma.cropYieldPrediction.findUnique(args);
  }
  async createCropYieldPrediction<
    T extends Prisma.CropYieldPredictionCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CropYieldPredictionCreateArgs>
  ): Promise<PrismaCropYieldPrediction> {
    return this.prisma.cropYieldPrediction.create<T>(args);
  }
  async updateCropYieldPrediction<
    T extends Prisma.CropYieldPredictionUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CropYieldPredictionUpdateArgs>
  ): Promise<PrismaCropYieldPrediction> {
    return this.prisma.cropYieldPrediction.update<T>(args);
  }
  async deleteCropYieldPrediction<
    T extends Prisma.CropYieldPredictionDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.CropYieldPredictionDeleteArgs>
  ): Promise<PrismaCropYieldPrediction> {
    return this.prisma.cropYieldPrediction.delete(args);
  }
}