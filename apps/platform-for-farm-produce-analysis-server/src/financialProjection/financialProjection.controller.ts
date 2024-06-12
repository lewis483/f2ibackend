import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialProjectionService } from "./financialProjection.service";
import { FinancialProjectionControllerBase } from "./base/financialProjection.controller.base";

@swagger.ApiTags("financialProjections")
@common.Controller("financialProjections")
export class FinancialProjectionController extends FinancialProjectionControllerBase {
  constructor(
    protected readonly service: FinancialProjectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
