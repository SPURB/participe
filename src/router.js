import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

// Pages
const Home = () => import('@/components/pages/Home')
const Anhembi2 = () => import('@/components/pages/Anhembi2')
const ArcoPinheiros = () => import('@/components/pages/ArcoPinheiros')
const WifiLivreSP = () => import('@/components/pages/WifiLivreSP')
const DigilabLivreSP = () => import('@/components/pages/DigilabLivreSP')

// Login
const Login = () => import('@/components/pages/Login')

// Admin
const Admin = () => import('@/components/pages/admin/Admin')
const AdminHome = () => import('@/components/pages/admin/AdminHome')
const AdminNovaConsulta = () => import('@/components/pages/admin/AdminNovaConsulta')
// const AdminSide = () => import('@/components/pages/admin/AdminSide')
const AdminPagConsulta = () => import('@/components/pages/admin/AdminPagConsulta')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: { Home }
    },
    {
      path: '/anhembi2',
      name: 'Anhembi2',
      components: { Anhembi2 },
      meta: {
        id: 8
      }
    },
    {
      path: '/arco-pinheiros',
      name: 'ArcoPinheiros',
      components: { ArcoPinheiros },
      meta: {
        id: 9
      }
    },
    {
      path: '/arco--pinheiros',
      redirect: '/arco-pinheiros'
    },
    {
      path: '/wifi-livre-sp',
      name: 'WifiLivreSP',
      components: { WifiLivreSP },
      meta: {
        id: 34
      }
    },
    {
      path: '/digilab-livre-sp',
      name: 'DigilabLivreSP',
      components: { DigilabLivreSP },
      meta: {
        id: 35
      }
    },
    // Modelo para novas consultas
    /*
    {
      path: '/nome-da-consulta',
      name: 'NomeDaConsulta',
      components: { NomeDaConsulta },
      meta: {
        id: #
      }
    },
    */
    {
      path: '/login',
      name: 'Login',
      components: { Login }
    },
    {
      path: '/admin',
      components: { Admin },
      children: [
        {
          path: '',
          name: 'Admin',
          component: AdminHome
        },
        {
          path: 'novaconsulta',
          name: 'novaConsulta',
          title: 'Nova Consulta',
          component: AdminNovaConsulta
        },
        {
          path: ':id',
          name: 'pageConsulta',
          component: AdminPagConsulta
        }
      ]
    }
  ]
})
