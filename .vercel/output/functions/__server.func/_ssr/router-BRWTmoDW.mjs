import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-CJtzaUN_.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong max-w-md rounded-2xl p-10 text-center shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-gradient text-7xl font-bold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow",
        children: "Go home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong max-w-md rounded-2xl p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-glass-border px-4 py-2 text-sm", children: "Home" })
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HostelX AI — Smart Hostel Management" },
      { name: "description", content: "AI-powered hostel management system for colleges and universities." },
      { property: "og:title", content: "HostelX AI — Smart Hostel Management" },
      { property: "og:description", content: "AI-powered hostel management system for colleges and universities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./app-Dr3A3z3P.mjs");
const Route$b = createFileRoute("/app")({
  beforeLoad: ({
    location
  }) => {
    if (location.pathname === "/app") throw redirect({
      to: "/app/student"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./index-BRDz9uhC.mjs");
const Route$a = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HostelX AI — Smart Hostel Management for Universities"
    }, {
      name: "description",
      content: "AI-powered hostel management: QR gate passes, complaint routing, predictive analytics, and face verification — built for modern universities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./app.warden-CDe8E5u3.mjs");
const Route$9 = createFileRoute("/app/warden")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./app.visitors-tJ-74se0.mjs");
const Route$8 = createFileRoute("/app/visitors")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./app.student-D5DmfaNF.mjs");
const Route$7 = createFileRoute("/app/student")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./app.settings-CxVHLECb.mjs");
const Route$6 = createFileRoute("/app/settings")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./app.security-DnKlgiQl.mjs");
const Route$5 = createFileRoute("/app/security")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./app.profile-C-FXwouM.mjs");
const Route$4 = createFileRoute("/app/profile")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./app.complaints-CsyT1Ogx.mjs");
const Route$3 = createFileRoute("/app/complaints")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./app.assistant-BqUMHmWQ.mjs");
const Route$2 = createFileRoute("/app/assistant")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./app.analytics-CnwKr1Wm.mjs");
const Route$1 = createFileRoute("/app/analytics")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./app.admin-CCh6OzdG.mjs");
const Route = createFileRoute("/app/admin")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const AppRoute = Route$b.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const AppWardenRoute = Route$9.update({
  id: "/warden",
  path: "/warden",
  getParentRoute: () => AppRoute
});
const AppVisitorsRoute = Route$8.update({
  id: "/visitors",
  path: "/visitors",
  getParentRoute: () => AppRoute
});
const AppStudentRoute = Route$7.update({
  id: "/student",
  path: "/student",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$6.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppSecurityRoute = Route$5.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => AppRoute
});
const AppProfileRoute = Route$4.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => AppRoute
});
const AppComplaintsRoute = Route$3.update({
  id: "/complaints",
  path: "/complaints",
  getParentRoute: () => AppRoute
});
const AppAssistantRoute = Route$2.update({
  id: "/assistant",
  path: "/assistant",
  getParentRoute: () => AppRoute
});
const AppAnalyticsRoute = Route$1.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppRoute
});
const AppAdminRoute = Route.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppAdminRoute,
  AppAnalyticsRoute,
  AppAssistantRoute,
  AppComplaintsRoute,
  AppProfileRoute,
  AppSecurityRoute,
  AppSettingsRoute,
  AppStudentRoute,
  AppVisitorsRoute,
  AppWardenRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
