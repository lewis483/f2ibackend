import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgriculturalProductServiceBase } from "./base/agriculturalProduct.service.base";

@Injectable()
export class AgriculturalProductService extends AgriculturalProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
