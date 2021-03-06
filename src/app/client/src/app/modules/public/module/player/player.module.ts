import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '@sunbird/telemetry';
import { SharedModule } from '@sunbird/shared';
// import { BadgingModule } from '@sunbird/badge';
import { CoreModule } from '@sunbird/core';
import { PlayerHelperModule } from '@sunbird/player-helper';
import { SuiModalModule } from 'ng2-semantic-ui';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption-v8';
import { SharedFeatureModule } from '@sunbird/shared-feature';

@NgModule({
    imports: [
        CommonModule,
        PlayerRoutingModule,
        TelemetryModule,
        SharedModule,

        CoreModule,
        PlayerHelperModule,
        SuiModalModule,
        CommonConsumptionModule,
        SharedFeatureModule
    ],
    providers: [],
    declarations: []
})
export class PlayerModule { }
