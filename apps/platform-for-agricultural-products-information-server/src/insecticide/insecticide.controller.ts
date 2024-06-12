import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InsecticideService } from "./insecticide.service";
import { InsecticideControllerBase } from "./base/insecticide.controller.base";

@swagger.ApiTags("insecticides")
@common.Controller("insecticides")
export class InsecticideController extends InsecticideControllerBase {
  constructor(
    protected readonly service: InsecticideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
