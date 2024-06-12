import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConsumerService } from "./consumer.service";
import { ConsumerControllerBase } from "./base/consumer.controller.base";

@swagger.ApiTags("consumers")
@common.Controller("consumers")
export class ConsumerController extends ConsumerControllerBase {
  constructor(
    protected readonly service: ConsumerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
