import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialProjectionServiceBase } from "./base/financialProjection.service.base";

@Injectable()
export class FinancialProjectionService extends FinancialProjectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
