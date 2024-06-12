import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProduceInfoService } from "./produceInfo.service";
import { ProduceInfoControllerBase } from "./base/produceInfo.controller.base";

@swagger.ApiTags("produceInfos")
@common.Controller("produceInfos")
export class ProduceInfoController extends ProduceInfoControllerBase {
  constructor(
    protected readonly service: ProduceInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
