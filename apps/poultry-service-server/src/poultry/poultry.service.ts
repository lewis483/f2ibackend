import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoultryServiceBase } from "./base/poultry.service.base";

@Injectable()
export class PoultryService extends PoultryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
