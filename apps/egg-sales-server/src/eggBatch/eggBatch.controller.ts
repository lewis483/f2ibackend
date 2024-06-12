import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EggBatchService } from "./eggBatch.service";
import { EggBatchControllerBase } from "./base/eggBatch.controller.base";

@swagger.ApiTags("eggBatches")
@common.Controller("eggBatches")
export class EggBatchController extends EggBatchControllerBase {
  constructor(
    protected readonly service: EggBatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
