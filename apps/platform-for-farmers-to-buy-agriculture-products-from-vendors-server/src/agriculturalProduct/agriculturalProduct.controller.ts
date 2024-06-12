import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AgriculturalProductService } from "./agriculturalProduct.service";
import { AgriculturalProductControllerBase } from "./base/agriculturalProduct.controller.base";

@swagger.ApiTags("agriculturalProducts")
@common.Controller("agriculturalProducts")
export class AgriculturalProductController extends AgriculturalProductControllerBase {
  constructor(
    protected readonly service: AgriculturalProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
