/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Vendor as PrismaVendor } from "@prisma/client";

export class VendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VendorCountArgs, "select">): Promise<number> {
    return this.prisma.vendor.count(args);
  }

  async vendors<T extends Prisma.VendorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VendorFindManyArgs>
  ): Promise<PrismaVendor[]> {
    return this.prisma.vendor.findMany<Prisma.VendorFindManyArgs>(args);
  }
  async vendor<T extends Prisma.VendorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VendorFindUniqueArgs>
  ): Promise<PrismaVendor | null> {
    return this.prisma.vendor.findUnique(args);
  }
  async createVendor<T extends Prisma.VendorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VendorCreateArgs>
  ): Promise<PrismaVendor> {
    return this.prisma.vendor.create<T>(args);
  }
  async updateVendor<T extends Prisma.VendorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VendorUpdateArgs>
  ): Promise<PrismaVendor> {
    return this.prisma.vendor.update<T>(args);
  }
  async deleteVendor<T extends Prisma.VendorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VendorDeleteArgs>
  ): Promise<PrismaVendor> {
    return this.prisma.vendor.delete(args);
  }
}
