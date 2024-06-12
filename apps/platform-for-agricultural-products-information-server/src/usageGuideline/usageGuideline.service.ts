import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsageGuidelineServiceBase } from "./base/usageGuideline.service.base";

@Injectable()
export class UsageGuidelineService extends UsageGuidelineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
