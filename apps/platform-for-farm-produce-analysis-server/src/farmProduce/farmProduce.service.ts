import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmProduceServiceBase } from "./base/farmProduce.service.base";

@Injectable()
export class FarmProduceService extends FarmProduceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
