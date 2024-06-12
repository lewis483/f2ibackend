import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmLocationService } from "./farmLocation.service";
import { FarmLocationControllerBase } from "./base/farmLocation.controller.base";

@swagger.ApiTags("farmLocations")
@common.Controller("farmLocations")
export class FarmLocationController extends FarmLocationControllerBase {
  constructor(
    protected readonly service: FarmLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
