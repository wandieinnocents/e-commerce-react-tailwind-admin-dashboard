/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes
      .filter(
        (route) =>
          (route.layout === "/admin" || route.layout === "/auth") &&
          !route.hidden // Filter out hidden routes
      )
      .map((route, index) => (
        <Link key={index} to={route.layout + "/" + route.path}>
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li className="my-[3px] flex cursor-pointer items-center px-8">
              <span
                className={`${activeRoute(route.path)
                    ? "font-bold text-yellow-500 dark:text-white"
                    : "font-medium text-gray-500"
                  }`}
              >
                {route.icon ? route.icon : <DashIcon />}{" "}
              </span>
              <p
                className={`leading-1 ml-4 flex ${activeRoute(route.path)
                    ? "font-bold text-yellow-500 dark:text-white"
                    : "font-medium text-gray-500"
                  }`}
              >
                {route.name}
              </p>
            </li>
            {activeRoute(route.path) ? (
              <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-yellow-500 dark:bg-brand-400" />
            ) : null}
          </div>
        </Link>
      ));
  };

  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
