/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CropType as PrismaCropType } from "@prisma/client";

export class CropTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CropTypeCountArgs, "select">): Promise<number> {
    return this.prisma.cropType.count(args);
  }

  async cropTypes<T extends Prisma.CropTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropTypeFindManyArgs>
  ): Promise<PrismaCropType[]> {
    return this.prisma.cropType.findMany<Prisma.CropTypeFindManyArgs>(args);
  }
  async cropType<T extends Prisma.CropTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropTypeFindUniqueArgs>
  ): Promise<PrismaCropType | null> {
    return this.prisma.cropType.findUnique(args);
  }
  async createCropType<T extends Prisma.CropTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropTypeCreateArgs>
  ): Promise<PrismaCropType> {
    return this.prisma.cropType.create<T>(args);
  }
  async updateCropType<T extends Prisma.CropTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropTypeUpdateArgs>
  ): Promise<PrismaCropType> {
    return this.prisma.cropType.update<T>(args);
  }
  async deleteCropType<T extends Prisma.CropTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CropTypeDeleteArgs>
  ): Promise<PrismaCropType> {
    return this.prisma.cropType.delete(args);
  }
}
