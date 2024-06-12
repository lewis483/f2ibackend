import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestockService } from "./restock.service";
import { RestockControllerBase } from "./base/restock.controller.base";

@swagger.ApiTags("restocks")
@common.Controller("restocks")
export class RestockController extends RestockControllerBase {
  constructor(
    protected readonly service: RestockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
