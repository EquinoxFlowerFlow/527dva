import dynamic from 'dva/dynamic'
const app = window.app


const Home = dynamic({
  app,
  models: () => [
    import('@/models/home'),
    import('@/models/mode')
  ],
  component: () => import('@/pages/home')
})


export {
  Home
}