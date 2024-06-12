import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProduceInfoServiceBase } from "./base/produceInfo.service.base";

@Injectable()
export class ProduceInfoService extends ProduceInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
