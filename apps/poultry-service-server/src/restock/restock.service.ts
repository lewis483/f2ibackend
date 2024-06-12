import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestockServiceBase } from "./base/restock.service.base";

@Injectable()
export class RestockService extends RestockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
