import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmerProfileService } from "./farmerProfile.service";
import { FarmerProfileControllerBase } from "./base/farmerProfile.controller.base";

@swagger.ApiTags("farmerProfiles")
@common.Controller("farmerProfiles")
export class FarmerProfileController extends FarmerProfileControllerBase {
  constructor(
    protected readonly service: FarmerProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
