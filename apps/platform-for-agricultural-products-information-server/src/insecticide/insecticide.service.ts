import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsecticideServiceBase } from "./base/insecticide.service.base";

@Injectable()
export class InsecticideService extends InsecticideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
