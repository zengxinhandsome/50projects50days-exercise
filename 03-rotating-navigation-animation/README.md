# 优化项

功能实现后看了源码，发现以下可优化项

- nav 从左到右的动画可以用 transform: translateX(百分比) 来实现，目前是用的 left + margin
- 可以用 js 操作元素的 class 来执行动画，目前是通过 js 来设置元素 style 实现动画
- 布局优化

