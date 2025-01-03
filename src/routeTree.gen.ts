/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SellerImport } from './routes/_seller'
import { Route as BuyerImport } from './routes/_buyer'
import { Route as IndexImport } from './routes/index'
import { Route as SellerShopIndexImport } from './routes/_seller.shop.index'
import { Route as SellerSellerprofileIndexImport } from './routes/_seller.sellerprofile.index'
import { Route as SellerAddIndexImport } from './routes/_seller.add.index'
import { Route as BuyerProfileIndexImport } from './routes/_buyer.profile.index'
import { Route as BuyerLikedIndexImport } from './routes/_buyer.liked.index'
import { Route as BuyerDiscoverIndexImport } from './routes/_buyer.discover.index'
import { Route as BuyerCartIndexImport } from './routes/_buyer.cart.index'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SellerRoute = SellerImport.update({
  id: '/_seller',
  getParentRoute: () => rootRoute,
} as any)

const BuyerRoute = BuyerImport.update({
  id: '/_buyer',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SellerShopIndexRoute = SellerShopIndexImport.update({
  id: '/shop/',
  path: '/shop/',
  getParentRoute: () => SellerRoute,
} as any)

const SellerSellerprofileIndexRoute = SellerSellerprofileIndexImport.update({
  id: '/sellerprofile/',
  path: '/sellerprofile/',
  getParentRoute: () => SellerRoute,
} as any)

const SellerAddIndexRoute = SellerAddIndexImport.update({
  id: '/add/',
  path: '/add/',
  getParentRoute: () => SellerRoute,
} as any)

const BuyerProfileIndexRoute = BuyerProfileIndexImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => BuyerRoute,
} as any)

const BuyerLikedIndexRoute = BuyerLikedIndexImport.update({
  id: '/liked/',
  path: '/liked/',
  getParentRoute: () => BuyerRoute,
} as any)

const BuyerDiscoverIndexRoute = BuyerDiscoverIndexImport.update({
  id: '/discover/',
  path: '/discover/',
  getParentRoute: () => BuyerRoute,
} as any)

const BuyerCartIndexRoute = BuyerCartIndexImport.update({
  id: '/cart/',
  path: '/cart/',
  getParentRoute: () => BuyerRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_buyer': {
      id: '/_buyer'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BuyerImport
      parentRoute: typeof rootRoute
    }
    '/_seller': {
      id: '/_seller'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SellerImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_buyer/cart/': {
      id: '/_buyer/cart/'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof BuyerCartIndexImport
      parentRoute: typeof BuyerImport
    }
    '/_buyer/discover/': {
      id: '/_buyer/discover/'
      path: '/discover'
      fullPath: '/discover'
      preLoaderRoute: typeof BuyerDiscoverIndexImport
      parentRoute: typeof BuyerImport
    }
    '/_buyer/liked/': {
      id: '/_buyer/liked/'
      path: '/liked'
      fullPath: '/liked'
      preLoaderRoute: typeof BuyerLikedIndexImport
      parentRoute: typeof BuyerImport
    }
    '/_buyer/profile/': {
      id: '/_buyer/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof BuyerProfileIndexImport
      parentRoute: typeof BuyerImport
    }
    '/_seller/add/': {
      id: '/_seller/add/'
      path: '/add'
      fullPath: '/add'
      preLoaderRoute: typeof SellerAddIndexImport
      parentRoute: typeof SellerImport
    }
    '/_seller/sellerprofile/': {
      id: '/_seller/sellerprofile/'
      path: '/sellerprofile'
      fullPath: '/sellerprofile'
      preLoaderRoute: typeof SellerSellerprofileIndexImport
      parentRoute: typeof SellerImport
    }
    '/_seller/shop/': {
      id: '/_seller/shop/'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof SellerShopIndexImport
      parentRoute: typeof SellerImport
    }
  }
}

// Create and export the route tree

interface BuyerRouteChildren {
  BuyerCartIndexRoute: typeof BuyerCartIndexRoute
  BuyerDiscoverIndexRoute: typeof BuyerDiscoverIndexRoute
  BuyerLikedIndexRoute: typeof BuyerLikedIndexRoute
  BuyerProfileIndexRoute: typeof BuyerProfileIndexRoute
}

const BuyerRouteChildren: BuyerRouteChildren = {
  BuyerCartIndexRoute: BuyerCartIndexRoute,
  BuyerDiscoverIndexRoute: BuyerDiscoverIndexRoute,
  BuyerLikedIndexRoute: BuyerLikedIndexRoute,
  BuyerProfileIndexRoute: BuyerProfileIndexRoute,
}

const BuyerRouteWithChildren = BuyerRoute._addFileChildren(BuyerRouteChildren)

interface SellerRouteChildren {
  SellerAddIndexRoute: typeof SellerAddIndexRoute
  SellerSellerprofileIndexRoute: typeof SellerSellerprofileIndexRoute
  SellerShopIndexRoute: typeof SellerShopIndexRoute
}

const SellerRouteChildren: SellerRouteChildren = {
  SellerAddIndexRoute: SellerAddIndexRoute,
  SellerSellerprofileIndexRoute: SellerSellerprofileIndexRoute,
  SellerShopIndexRoute: SellerShopIndexRoute,
}

const SellerRouteWithChildren =
  SellerRoute._addFileChildren(SellerRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof SellerRouteWithChildren
  '/signup': typeof SignupRoute
  '/cart': typeof BuyerCartIndexRoute
  '/discover': typeof BuyerDiscoverIndexRoute
  '/liked': typeof BuyerLikedIndexRoute
  '/profile': typeof BuyerProfileIndexRoute
  '/add': typeof SellerAddIndexRoute
  '/sellerprofile': typeof SellerSellerprofileIndexRoute
  '/shop': typeof SellerShopIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof SellerRouteWithChildren
  '/signup': typeof SignupRoute
  '/cart': typeof BuyerCartIndexRoute
  '/discover': typeof BuyerDiscoverIndexRoute
  '/liked': typeof BuyerLikedIndexRoute
  '/profile': typeof BuyerProfileIndexRoute
  '/add': typeof SellerAddIndexRoute
  '/sellerprofile': typeof SellerSellerprofileIndexRoute
  '/shop': typeof SellerShopIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_buyer': typeof BuyerRouteWithChildren
  '/_seller': typeof SellerRouteWithChildren
  '/signup': typeof SignupRoute
  '/_buyer/cart/': typeof BuyerCartIndexRoute
  '/_buyer/discover/': typeof BuyerDiscoverIndexRoute
  '/_buyer/liked/': typeof BuyerLikedIndexRoute
  '/_buyer/profile/': typeof BuyerProfileIndexRoute
  '/_seller/add/': typeof SellerAddIndexRoute
  '/_seller/sellerprofile/': typeof SellerSellerprofileIndexRoute
  '/_seller/shop/': typeof SellerShopIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/signup'
    | '/cart'
    | '/discover'
    | '/liked'
    | '/profile'
    | '/add'
    | '/sellerprofile'
    | '/shop'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/signup'
    | '/cart'
    | '/discover'
    | '/liked'
    | '/profile'
    | '/add'
    | '/sellerprofile'
    | '/shop'
  id:
    | '__root__'
    | '/'
    | '/_buyer'
    | '/_seller'
    | '/signup'
    | '/_buyer/cart/'
    | '/_buyer/discover/'
    | '/_buyer/liked/'
    | '/_buyer/profile/'
    | '/_seller/add/'
    | '/_seller/sellerprofile/'
    | '/_seller/shop/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BuyerRoute: typeof BuyerRouteWithChildren
  SellerRoute: typeof SellerRouteWithChildren
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BuyerRoute: BuyerRouteWithChildren,
  SellerRoute: SellerRouteWithChildren,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_buyer",
        "/_seller",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_buyer": {
      "filePath": "_buyer.tsx",
      "children": [
        "/_buyer/cart/",
        "/_buyer/discover/",
        "/_buyer/liked/",
        "/_buyer/profile/"
      ]
    },
    "/_seller": {
      "filePath": "_seller.tsx",
      "children": [
        "/_seller/add/",
        "/_seller/sellerprofile/",
        "/_seller/shop/"
      ]
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_buyer/cart/": {
      "filePath": "_buyer.cart.index.tsx",
      "parent": "/_buyer"
    },
    "/_buyer/discover/": {
      "filePath": "_buyer.discover.index.tsx",
      "parent": "/_buyer"
    },
    "/_buyer/liked/": {
      "filePath": "_buyer.liked.index.tsx",
      "parent": "/_buyer"
    },
    "/_buyer/profile/": {
      "filePath": "_buyer.profile.index.tsx",
      "parent": "/_buyer"
    },
    "/_seller/add/": {
      "filePath": "_seller.add.index.tsx",
      "parent": "/_seller"
    },
    "/_seller/sellerprofile/": {
      "filePath": "_seller.sellerprofile.index.tsx",
      "parent": "/_seller"
    },
    "/_seller/shop/": {
      "filePath": "_seller.shop.index.tsx",
      "parent": "/_seller"
    }
  }
}
ROUTE_MANIFEST_END */
