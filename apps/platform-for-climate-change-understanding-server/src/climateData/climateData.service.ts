import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClimateDataServiceBase } from "./base/climateData.service.base";

@Injectable()
export class ClimateDataService extends ClimateDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
