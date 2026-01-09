<template>
  <div class="w-full h-full p-5 overflow-auto">
    <div class="text-xl mb-4">图表样式预览（components/charts/options）</div>

    <div v-for="group in chartGroups" :key="group.key" class="mb-8">
      <div class="text-lg mb-3">{{ group.title }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          v-for="item in group.items"
          :key="item.key"
          class="w-full"
          :style="{ height: `${item.height}px` }"
        >
          <ChartCard :title="item.title">
            <ChartsMain :id="item.domId" :option="item.option" />
          </ChartCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartCard from '@/components/ChartCard.vue'
import ChartsMain from '@/components/charts/main.vue'

type ChartItem = {
  key: string
  title: string
  domId: string
  height: number
  option: any
}

type ChartGroup = {
  key: string
  title: string
  items: ChartItem[]
}

const demo = {
  bar: {
    xAxisData: ['一月', '二月', '三月', '四月', '五月'],
    seriesData: [
      { name: '系列A', data: [12, 20, 16, 28, 32] },
      { name: '系列B', data: [8, 14, 22, 18, 26] },
    ],
  },
  stacked: {
    xAxis: ['专科', '本科', '硕士研究生', '博士研究生'],
    yAxis: [
      { name: '与朋友/家人倾诉', data: [26, 31, 28, 29] },
      { name: '运动或兴趣爱好', data: [12, 23, 23, 22] },
      { name: '寻求心理咨询', data: [14, 13, 19, 19] },
      { name: '自我调节', data: [19, 18, 13, 15] },
      { name: '其他', data: [29, 14, 17, 14] },
    ],
  },
  horizontal: {
    xAxis: ['非常了解', '基本了解', '不太了解', '完全不了解'],
    yAxis: [
      { name: '男', data: [152, 78, 63, 63] },
      { name: '女', data: [140, 88, 70, 50] },
    ],
  },
  sort: [
    { name: '杭州', value: 120 },
    { name: '宁波', value: 98 },
    { name: '金华', value: 76 },
    { name: '台州', value: 68 },
    { name: '温州', value: 55 },
  ],
  bar3d: {
    categories: ['一季度', '二季度'],
    series: [
      { name: '线上', data: [30, 60] },
      { name: '线下', data: [20, 45] },
    ],
  },
  gradientBar: {
    xData: ['A组', 'B组', 'C组', 'D组'],
    seriesData: [
      { name: '来源1', data: [20, 30, 15, 25] },
      { name: '来源2', data: [10, 15, 25, 12] },
      { name: '来源3', data: [5, 10, 8, 18] },
    ],
    total: [35, 55, 48, 55],
  },
  area: {
    xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    yAxis: [{ name: '访问量', data: [80, 120, 90, 150, 110, 180, 160] }],
  },
  sortLIne: {
    xAxis: ['一月', '二月', '三月', '四月', '五月'],
    seriesData: [
      { name: '男性', data: [30, 44, 36, 58, 62] },
      { name: '女性', data: [28, 40, 42, 50, 55] },
      { name: '未知', data: [10, 12, 8, 15, 13] },
    ],
  },
  multicurve: {
    xAxis: ['一月', '二月', '三月', '四月', '五月', '六月'],
    yAxis: [
      { name: '渠道A', data: [120, 132, 101, 134, 90, 230] },
      { name: '渠道B', data: [220, 182, 191, 234, 290, 330] },
      { name: '渠道C', data: [150, 232, 201, 154, 190, 130] },
    ],
  },
  pie: [
    { name: '杭州', value: 98 },
    { name: '宁波', value: 62 },
    { name: '金华', value: 150 },
    { name: '温州', value: 54 },
    { name: '台州', value: 38 },
  ],
  roseArea: [
    { name: 'A类', value: 40 },
    { name: 'B类', value: 28 },
    { name: 'C类', value: 18 },
    { name: 'D类', value: 12 },
  ],
  radar: [
    { name: '维度一', text: '维度一', min: 0, max: 100, value: 80 },
    { name: '维度二', text: '维度二', min: 0, max: 100, value: 62 },
    { name: '维度三', text: '维度三', min: 0, max: 100, value: 75 },
    { name: '维度四', text: '维度四', min: 0, max: 100, value: 90 },
    { name: '维度五', text: '维度五', min: 0, max: 100, value: 68 },
  ],
}

const groupTitleMap: Record<string, string> = {
  bar: '柱状图',
  line: '折线图',
  pie: '饼图',
  radar: '雷达图',
}

const titleMap: Record<string, string> = {
  bar: '基础柱状图（渐变）',
  gradientBar: '渐变堆叠柱状图',
  sort: '横向排序条形图',
  stacked: '堆叠柱状图',
  horizontal: '横向对比柱状图',
  bar3d: '立体柱状图',
  line: '基础折线图',
  area: '面积折线图',
  sortLIne: '排序折线图',
  multicurve: '渐变曲线图',
  sex: '男女占比饼图',
  nightingale: '玫瑰饼图（Nightingale）',
  doughnut: '圆环饼图（Doughnut）',
  IntervalPie: '环形分隔饼图（IntervalPie）',
  roesArea: '南丁格尔环饼图（Rose Area）',
  threeD: '3D 饼图',
  radar: '雷达图',
}

const heightMap: Record<string, number> = {
  bar3d: 360,
  threeD: 420,
  radar: 420,
}

function getDemoArgs(groupKey: string, fileBase: string): any[] {
  if (groupKey === 'bar') {
    if (fileBase === 'bar') return [demo.bar]
    if (fileBase === 'gradientBar') return [demo.gradientBar, 'vertical']
    if (fileBase === 'sort') return [demo.sort.slice()]
    if (fileBase === 'stacked') return [demo.stacked]
    if (fileBase === 'horizontal') return [demo.horizontal]
    if (fileBase === 'bar3d') return [demo.bar3d]
  }
  if (groupKey === 'line') {
    if (fileBase === 'line') return []
    if (fileBase === 'area') return [demo.area]
    if (fileBase === 'sortLIne') return [demo.sortLIne]
    if (fileBase === 'multicurve') return [demo.multicurve]
  }
  if (groupKey === 'pie') {
    if (fileBase === 'sex')
      return [
        [
          { name: '男性', value: 60 },
          { name: '女性', value: 40 },
        ],
      ]
    if (fileBase === 'nightingale') return [demo.pie, true]
    if (fileBase === 'doughnut') return [demo.pie]
    if (fileBase === 'IntervalPie') return [demo.pie]
    if (fileBase === 'roesArea') return [demo.roseArea]
    if (fileBase === 'threeD') return [demo.pie, 0.6, 25]
  }
  if (groupKey === 'radar') {
    if (fileBase === 'radar') return [demo.radar]
  }
  return []
}

function parsePathInfo(modulePath: string) {
  const normalized = modulePath.replace(/\\/g, '/')
  const parts = normalized.split('/options/')
  const after = parts[1] || ''
  const segs = after.split('/')
  const groupKey = segs[0] || 'other'
  const fileName = segs[segs.length - 1] || ''
  const fileBase = fileName.replace(/\.(ts|js)$/, '')
  return { groupKey, fileBase }
}

function toTitle(groupKey: string, fileBase: string) {
  return titleMap[fileBase] || `${groupTitleMap[groupKey] || groupKey}：${fileBase}`
}

function toHeight(fileBase: string) {
  return heightMap[fileBase] || 320
}

const optionModules = import.meta.glob('@/components/charts/options/**/*.{ts,js}', {
  eager: true,
}) as Record<string, any>

function buildChartGroups(): ChartGroup[] {
  const groups = new Map<string, ChartGroup>()

  for (const modulePath of Object.keys(optionModules)) {
    if (modulePath.endsWith('/index.ts') || modulePath.endsWith('/index.js')) continue

    const mod = optionModules[modulePath]
    if (!mod) continue

    const { groupKey, fileBase } = parsePathInfo(modulePath)
    const fn = typeof mod.default === 'function' ? mod.default : undefined
    if (!fn) continue

    const args = getDemoArgs(groupKey, fileBase)
    const option = fn(...args)
    if (!option) continue

    const groupTitle = groupTitleMap[groupKey] || groupKey
    const group = groups.get(groupKey) || { key: groupKey, title: groupTitle, items: [] }
    const domId = `charts-options-${groupKey}-${fileBase}`

    group.items.push({
      key: `${groupKey}-${fileBase}`,
      title: toTitle(groupKey, fileBase),
      domId,
      height: toHeight(fileBase),
      option,
    })

    groups.set(groupKey, group)
  }

  const result = Array.from(groups.values()).map((g) => ({
    ...g,
    items: g.items.sort((a, b) => a.key.localeCompare(b.key)),
  }))

  return result.sort((a, b) => a.key.localeCompare(b.key))
}

const chartGroups: ChartGroup[] = buildChartGroups()
</script>
