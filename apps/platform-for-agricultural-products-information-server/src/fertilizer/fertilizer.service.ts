import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FertilizerServiceBase } from "./base/fertilizer.service.base";

@Injectable()
export class FertilizerService extends FertilizerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
