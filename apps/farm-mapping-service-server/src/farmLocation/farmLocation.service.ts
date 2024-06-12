import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmLocationServiceBase } from "./base/farmLocation.service.base";

@Injectable()
export class FarmLocationService extends FarmLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
