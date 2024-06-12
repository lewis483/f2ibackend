import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CropTypeServiceBase } from "./base/cropType.service.base";

@Injectable()
export class CropTypeService extends CropTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
