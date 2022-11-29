
# 开始

> 描述此组件库搭建过程。


## 环境

- Node 16.5
- Pnpm 7.13.4

## 创建项目

搭建项目

```sh
pnpm create vite
```

选择如下：

```sh
✔ Project name: Vint
✔ Package name: vint
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript
```

在根目录下新建一个 `/packages` 目录，后续组件的开发都会在该目录进行。

以一个 `<vint-button />` 组件为例，看看 `/packages` 目录内部是什么样的。

此时都一切从简的，后续会继续优化。

```markdown
packages
├── Button
│   ├── index.ts       // 模块导出文件
│   └── src
│       └── index.vue  // 组件本体
├── index.ts           // 组件库导出文件
```

packages/Button/src/index.vue 代码如下

```html
<template>
  <button class="vint-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'vint-button',
}
</script>
<script lang="ts" setup>
defineEmits(['click'])
</script>

<style scoped>
.vint-button {
  color: #fff;
  background-color: #2288ff;
}
</style>
```

组件引用两种方式，大概如下：

全局引用

```typescript
import vint from 'vint-ui'
app.use(vint)
```

按需引入

```typescript
import { Button } from 'vint-ui'
Vue.component('vint-button', Button)
```

定义 Button 组件的引用方式：package/Button/index.ts

```typescript
import { App, Plugin } from 'vue'
import Button from './src/index.vue'

// 全量引入
export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('vint-button', Button)
  },
}

// 按需引入
export { Button }
```

**Note**：文件如果提示错误：找不到模块 “./src/index.vue” 或其相应的类型声明。这是因为 .ts 文件是识别不了.vue 文件导致的。

在根目录 tsconfig.json 文件中的 include 新增  "packages/**/*.ts"。将我们新增的 packages 也包含进去。

```json
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "packages/**/*.ts"
  ]
```

packages/index.ts：该文件是作为组件库本身的导出文件，它默认导出了一个 `VuePlugin`，同时也导出了不同的组件

```typescript
import { App, Plugin } from 'vue'
import { ButtonPlugin } from './Button'

const VintPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  },
}

// 全部引入所需
export default VintPlugin

// 按需引入所需
export * from './Button'

```

## 引入

回到根目录下找到 `src/main.ts` 文件，我们整体引入：

```typescript
import Vint from './../packages'
createApp(App).use(Vint).mount('#app')
```

改写 `src/App.vue`

```html
<template>
  <vint-button>我是自定义按钮</vint-button>
</template>
<script setup lang="ts"></script>

<style scoped></style>
```

如果可以正常展示，就没问题。

下面测试局部引入，先将上面的整体引入的删除

第一种引入：

```vue
<template>
  <vint-button>我是自定义按钮</vint-button>
</template>

<script lang="ts">
import { Button } from './../packages/Button'

export default {
  components: {
    [Button.name]: Button,
  },
}
</script>
```

第二种引入

```vue
<template>
  <Button>我是自定义按钮</Button>
</template>

<script setup lang="ts">
import { Button } from './../packages/Button'
</script>
```

如果都可以运行成功，就可以继续往下。

## 打包成库

修改 vite.config.ts  如下：

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "lib", // 指定输出路径
    // https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "vint",
      // the proper extensions will be added
      fileName: "vint",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
```

主要是修改 build 选项，因为 vite 打包支持库模式。

Note：如果 vite.config.ts 文件提示 找不到模块 “path” 或其相应的类型声明，运行如下命令

```sh
pnpm add @types/node -D
```

如果此时 vue 文件中 @click 提示错误信息，将 @types/node 降级到 18.8.0

打包

```sh
pnpm build
```

打包完成之后，在 package.json 新增或修改以下属性

```json
{
  "name": "vint",
  "private": false,
  "version": "0.0.0",
  "type": "module",
  "license": "MIT",
  "keywords": [
    "component",
    "vue3",
    "mobile",
    "vint"
  ],
  "files": [
    "lib"
  ],
  "main": "./lib/my-lib.umd.cjs",
  "module": "./lib/my-lib.js",
  "exports": {
    ".": {
      "import": "./lib/my-lib.js",
      "require": "./lib/my-lib.umd.cjs"
    },
    "./lib/style.css": {
      "import": "./lib/style.css",
      "require": "./lib/style.css"
    }
  }
}
```

主要是调整入口与导出的文件，文件地址就是我们刚才打包的路径。

## npm 上传

上传库到 npm 官网不能把所有文件都上传，所以还需要在根目录添加一个`.npmignore` 文件，其作用是忽略不需要上传的文件内容，内容如下：

```json
.DS_Store
node_modules
src
public
docs
packages
dist



# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

新增 readme.md，并发布 npm 即可


## 编写文档

为何选用 vuepress
```markdown
VitePress 是早期的 WIP！目前的重点首先是让 Vite 稳定和功能完善。目前，不推荐将其用于任何正式的场景。

这是官网目前的提示，就没有使用它
```

[vuepress](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html) 基本就是按照官网的文档一步一步建立就行了。


将 VuePress 安装为本地依赖

```
pnpm add -D vuepress@next
```

创建你的第一篇文档

```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

在本地启动服务器

```
pnpm docs:dev
```

此时就能看到文档的页面了。

按照默认主题
```
pnpm add -D @vuepress/theme-default@next
```


// TODO 下面的还没写完
```
pnpm add -D @vuepress/client@next
```

md 渲染 vue 代码  

```bash
pnpm i -D vuepress-plugin-demo-code@next
```

https://buptsteve.github.io/vuepress-plugin-demo-code/zh/#install

客户端配置文件 可以在 md 文件中 直接使用组件

https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6

## 文档部署






