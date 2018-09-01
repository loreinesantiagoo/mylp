import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
	FlexLayoutModule,
	MatToolbarModule, MatCardModule, MatIconModule,
	MatFormFieldModule, MatInputModule, MatSliderModule,
	MatListModule, MatButtonModule
]

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class MaterialModule { }