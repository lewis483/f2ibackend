import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClimateDataService } from "./climateData.service";
import { ClimateDataControllerBase } from "./base/climateData.controller.base";

@swagger.ApiTags("climateData")
@common.Controller("climateData")
export class ClimateDataController extends ClimateDataControllerBase {
  constructor(
    protected readonly service: ClimateDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
