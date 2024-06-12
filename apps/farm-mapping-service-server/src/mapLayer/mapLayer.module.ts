import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MapLayerModuleBase } from "./base/mapLayer.module.base";
import { MapLayerService } from "./mapLayer.service";
import { MapLayerController } from "./mapLayer.controller";
import { MapLayerResolver } from "./mapLayer.resolver";

@Module({
  imports: [MapLayerModuleBase, forwardRef(() => AuthModule)],
  controllers: [MapLayerController],
  providers: [MapLayerService, MapLayerResolver],
  exports: [MapLayerService],
})
export class MapLayerModule {}
