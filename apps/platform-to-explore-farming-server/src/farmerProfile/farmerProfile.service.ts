import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmerProfileServiceBase } from "./base/farmerProfile.service.base";

@Injectable()
export class FarmerProfileService extends FarmerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
