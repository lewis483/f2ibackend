import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapLayerServiceBase } from "./base/mapLayer.service.base";

@Injectable()
export class MapLayerService extends MapLayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
