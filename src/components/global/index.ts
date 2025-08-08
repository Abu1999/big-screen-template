import BoderCard from './BoderCard.vue' //白色主题样式
import TitleCard from './TitleCard.vue' // 标题加图表

const MyComponents = {
  install(Vue: any) {
    Vue.component('BoderCard', BoderCard)
    Vue.component('TitleCard', TitleCard)
  },
}

export default MyComponents
