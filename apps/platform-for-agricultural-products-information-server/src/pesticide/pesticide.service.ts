import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PesticideServiceBase } from "./base/pesticide.service.base";

@Injectable()
export class PesticideService extends PesticideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
