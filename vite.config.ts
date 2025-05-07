import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/types/typed-router.d.ts',
    }),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        // 自动导入 echarts 相关
        {
          'echarts/core': [
            'use',
          ],
          'echarts/charts': [
            'PieChart',
            'BarChart',
            'LineChart',
          ],
          'echarts/components': [
            'LegendComponent',
            'TitleComponent',
            'TooltipComponent',
            'GridComponent',
            'ToolboxComponent',
          ],
          'echarts/features': ['UniversalTransition'],
          'echarts/renderers': ['CanvasRenderer'],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true, // 允许在 <template> 直接使用自动导入的 API
    }),

    Layouts(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
