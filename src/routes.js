import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

//branches
import AllBranches from "views/admin/Branches/AllBranches";

//brands
import AllBrands from "views/admin/Brands/AllBrands";

//parent product categories
import AllParentProductCategories from "views/admin/ParentProductCategories/AllParentProductCategories";

//product categories
import AllProductCategories from "views/admin/ProductCategories/AllProductCategories";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Branches",
    layout: "/admin",
    path: "branches",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllBranches />,
    secondary: true,
  },
  {
    name: "Brands",
    layout: "/admin",
    path: "brands",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllBrands />,
    secondary: true,
  },
  {
    name: "Parent Categories", //Main Categories
    layout: "/admin",
    path: "parent-product-categories",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllParentProductCategories />,
    secondary: true,
  },

  {
    name: "Categories",
    layout: "/admin",
    path: "product-categories-list",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllProductCategories />,
    secondary: true,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Brands",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
