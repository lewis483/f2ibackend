import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FertilizerService } from "./fertilizer.service";
import { FertilizerControllerBase } from "./base/fertilizer.controller.base";

@swagger.ApiTags("fertilizers")
@common.Controller("fertilizers")
export class FertilizerController extends FertilizerControllerBase {
  constructor(
    protected readonly service: FertilizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
