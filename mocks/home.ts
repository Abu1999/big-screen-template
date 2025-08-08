import { Router } from 'vite-plugin-koa-mocks'

export const router = new Router()

router.get('/mock/options', (ctx) => {
  ctx.response.body = {
    code: 200,
    data: [],
  }
})
router.post('/mock/response', (ctx) => {
  ctx.response.body = {
    code: 200,
    data: [],
  }
})
