import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 动画效果模块（需要安装依赖@angular/animations）
import { SharedModule } from '../shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { loadSvgResources } from "../utils/svg.util"

// 只加载一次的模块，loadSvgResources装载一次资源 全部都可以使用，引入自定义的工具类svg.util.ts

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule, // 引入
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error("模块已存在，只能加载一次！")
    }
    loadSvgResources(ir, ds)
  }
}

// @SkipSelf() -> 该注解的作用是告诉应用在进行依赖注入时要排除自身（即：不想从当前元素获取依赖），
// 这样注入器就会从一个在自己 上一级 的组件开始搜索一个CoreModule依赖；如果不添加时就会出现解析错误

// @Optional() -> 该注解的作用是保证依赖找不到时报错，当CoreModule不存在时就进行了依赖注入就会报错；
// 当无法确保依赖是否存在的情况下，而又为了避免抛出找不到依赖的错误情况，可以使用@Optional()注解，这样该依赖是可选的，此处我们是为了保证都次导入核心模块时不依赖注入CoreModule；如果不添加就会出现实例找不到的错误