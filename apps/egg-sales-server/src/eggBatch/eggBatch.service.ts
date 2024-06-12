import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EggBatchServiceBase } from "./base/eggBatch.service.base";

@Injectable()
export class EggBatchService extends EggBatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
