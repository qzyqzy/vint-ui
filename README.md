# Vint UI

> 支持 **Vue 3.0** 的移动端组件库

- [Github]()
- [Docs]()

## 安装
```shell
pnpm install vint-ui
```

## 使用

全部引入

```javascript

// 引入样式
import 'vint/lib/style.css'

import { createApp } from 'vue'
createApp(App).use(Vint).mount('#app')

```

按需引入.

```javascript
<template>
  <vint-button>我是自定义按钮</vint-button>
</template>

<script lang="ts">
import { Button } from 'vint-ui'

export default {
  components: {
    [Button.name]: Button,
  },
}
</script>
```

```javascript
<template>
  <Button>我是自定义按钮</Button>
</template>

<script setup lang="ts">
import { Button } from 'vint-ui'
</script>
```

## License
MIT
