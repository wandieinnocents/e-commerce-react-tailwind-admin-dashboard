import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

//branches
import AllBranches from "views/admin/Branches/AllBranches";
import AddBranch from "views/admin/Branches/AddBranch";
import ActiveBranches from "views/admin/Branches/ActiveBranches";
import InActiveBranches from "views/admin/Branches/InActiveBranches";


//brands
import AllBrands from "views/admin/Brands/AllBrands";

//parent product categories
import AllParentProductCategories from "views/admin/ParentProductCategories/AllParentProductCategories";

//product categories
import AllProductCategories from "views/admin/ProductCategories/AllProductCategories";

//units
import AllUnits from "views/admin/Units/AllUnits";

//suppliers
import AllSuppliers from "views/admin/Suppliers/AllSuppliers";

//clients
import AllClients from "views/admin/Clients/AllClients";

// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/Signup";

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

  //branches

  {
    name: "Branches",
    layout: "/admin",
    path: "branches",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllBranches />,
    secondary: true,
  },

  {
    name: "Add Branch",
    layout: "/admin",
    path: "branches/add",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AddBranch />,
    secondary: true,
    hidden: true
  },

  {
    name: "Active Branch",
    layout: "/admin",
    path: "branches/active",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <ActiveBranches />,
    secondary: true,
    hidden: true
  },

  {
    name: "In Active Branch",
    layout: "/admin",
    path: "branches/in-active",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <InActiveBranches />,
    secondary: true,
    hidden: true
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
    name: "Units",
    layout: "/admin",
    path: "units",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllUnits />,
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
    name: "Suppliers",
    layout: "/admin",
    path: "suppliers",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllSuppliers />,
    secondary: true,
  },
  {
    name: "Clients",
    layout: "/admin",
    path: "clients",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllClients />,
    secondary: true,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  }
  ,
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
    hidden: true
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
    hidden: true
  }
];
export default routes;
