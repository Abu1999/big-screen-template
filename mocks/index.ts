import { Router } from 'vite-plugin-koa-mocks'

export const router = new Router()

router.post('/mock/home', (ctx) => {
  ctx.response.body = {
    code: 200,
    data: {
      Authorization: '123456',
    },
  }
})
