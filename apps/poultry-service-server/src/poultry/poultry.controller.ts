import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoultryService } from "./poultry.service";
import { PoultryControllerBase } from "./base/poultry.controller.base";

@swagger.ApiTags("poultries")
@common.Controller("poultries")
export class PoultryController extends PoultryControllerBase {
  constructor(
    protected readonly service: PoultryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
