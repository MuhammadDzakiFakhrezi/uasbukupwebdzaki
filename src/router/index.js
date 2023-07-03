import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buku',
      name: 'buku',

      component: () => import('../views/BukuView.vue')
    },
    {
      path: '/buku/:kode',
      name: 'detail-buku',
      component: () => import('../views/DetailBukuView.vue')
    },
    {
      path: '/addbuku',
      name: 'add-buku',
      component: () => import('../views/AddBukuView.vue')
    },
    {
      path: '/kategori',
      name: 'kategori',

      component: () => import('../views/KategoriView.vue')
    },
    {
      path: '/kategori/:kode',
      name: 'detail-kategori',
      component: () => import('../views/DetailKategoriView.vue')
    },
    {
      path: '/addkategori',
      name: 'add-kategori',
      component: () => import('../views/AddKategoriView.vue')
    },
    {
      path: '/anggota',
      name: 'anggota',

      component: () => import('../views/AnggotaView.vue')
    },
    {
      path: '/anggota/:nomor',
      name: 'detail-anggota',
      component: () => import('../views/DetailAnggotaView.vue')
    },
    {
      path: '/addanggota',
      name: 'add-anggota',
      component: () => import('../views/AddAnggotaView.vue')
    },
    {
      path: '/peminjaman',
      name: 'peminjaman',

      component: () => import('../views/PeminjamanBukuView.vue')
    },
    {
      path: '/peminjaman/:id',
      name: 'detail-peminjaman',
      component: () => import('../views/DetailPeminjamanView.vue')
    },
    {
      path: '/addpeminjaman',
      name: 'add-peminjaman',
      component: () => import('../views/AddPeminjamanView.vue')
    },
    {
      path: '/call',
      name: 'cp',

      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
