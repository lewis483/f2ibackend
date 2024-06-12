import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmProduceService } from "./farmProduce.service";
import { FarmProduceControllerBase } from "./base/farmProduce.controller.base";

@swagger.ApiTags("farmProduces")
@common.Controller("farmProduces")
export class FarmProduceController extends FarmProduceControllerBase {
  constructor(
    protected readonly service: FarmProduceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
