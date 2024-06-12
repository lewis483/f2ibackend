import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsumerServiceBase } from "./base/consumer.service.base";

@Injectable()
export class ConsumerService extends ConsumerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
