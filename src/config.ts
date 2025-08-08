import pic1 from '@/assets/bg/18.png'

const themeSwitch: string = 'dark'

const darkConfig = {
  $theme: 'dark', //主题   light|dark
  $bg: `url(${pic1})`,
  $textColour: '#fff',
  $borderName: 'dv-border-box1', //datav + globalComponents
}

const lightConfig = {
  $theme: 'light', //主题   light|dark|vintage
  $bg: `#F8FAFC`,
  $textColour: '#000',
  $borderName: 'BoderCard',
}

let config: any = {}

switch (themeSwitch) {
  case 'dark':
    config = darkConfig
    break
  case 'light':
    config = lightConfig
    break
  default:
    config = darkConfig
    break
}

export { config }
