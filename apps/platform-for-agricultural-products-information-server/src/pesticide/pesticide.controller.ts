import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PesticideService } from "./pesticide.service";
import { PesticideControllerBase } from "./base/pesticide.controller.base";

@swagger.ApiTags("pesticides")
@common.Controller("pesticides")
export class PesticideController extends PesticideControllerBase {
  constructor(
    protected readonly service: PesticideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
