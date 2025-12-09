import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
const COMMON_PROVIDERS: Provider[] = [];

@NgModule()
export class CommonModule {
  static forRoot(additionalProviders: Provider[] = []): ModuleWithProviders<CommonModule> {
    return {
      ngModule: CommonModule,
      providers: [...COMMON_PROVIDERS, ...additionalProviders]
    };
  }
}

