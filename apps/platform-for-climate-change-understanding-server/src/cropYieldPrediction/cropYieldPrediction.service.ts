import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CropYieldPredictionServiceBase } from "./base/cropYieldPrediction.service.base";

@Injectable()
export class CropYieldPredictionService extends CropYieldPredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
