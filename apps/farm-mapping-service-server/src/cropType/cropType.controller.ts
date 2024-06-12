import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CropTypeService } from "./cropType.service";
import { CropTypeControllerBase } from "./base/cropType.controller.base";

@swagger.ApiTags("cropTypes")
@common.Controller("cropTypes")
export class CropTypeController extends CropTypeControllerBase {
  constructor(
    protected readonly service: CropTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
