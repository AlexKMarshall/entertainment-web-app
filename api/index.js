var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_remix = __toESM(require_remix());
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-V2H736DU.css";

// app/styles/reset.css
var reset_default = "/build/_assets/reset-FCONRJCV.css";

// app/styles/utilities.css
var utilities_default = "/build/_assets/utilities-XSNYHP7N.css";

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/root.tsx
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
  },
  { rel: "stylesheet", href: reset_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: utilities_default }
];
var meta = () => {
  return {
    title: "Entertainment App",
    description: "Browse and watch movies and TV shows in one place"
  };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse.tsx
var browse_exports = {};
__export(browse_exports, {
  default: () => Catalog,
  links: () => links5
});
init_react();

// app/components/avatar/avatar.tsx
init_react();

// app/components/avatar/avatar.css
var avatar_default = "/build/_assets/avatar-IPJDRMRM.css";

// app/components/avatar/avatar.tsx
var links2 = () => [{ rel: "stylesheet", href: avatar_default }];
function Avatar({ src, alt = "" }) {
  return /* @__PURE__ */ React.createElement("img", {
    className: "avatar",
    src,
    alt
  });
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse.tsx
var import_remix5 = __toESM(require_remix());

// app/components/masthead/masthead.tsx
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/icons/home.tsx
init_react();

// app/components/icon/icon.tsx
init_react();
function IconBase({ path, className, viewBox }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox,
    fill: "currentColor",
    width: "1em",
    className
  }, path);
}
var createIcon = (path, displayName, viewBox) => {
  const Icon = ({ className }) => /* @__PURE__ */ React.createElement(IconBase, {
    path,
    className,
    viewBox
  });
  Icon.displayName = displayName;
  return Icon;
};

// app/components/icons/home.tsx
var HomeIcon = createIcon(/* @__PURE__ */ React.createElement("path", {
  d: "M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
}), "HomeIcon", "0 0 20 20");

// app/components/icons/logo.tsx
init_react();
var LogoIcon = createIcon(/* @__PURE__ */ React.createElement("path", {
  d: "m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
}), "LogoIcon", "0 0 33 27");

// app/components/icons/movie.tsx
init_react();
var MovieIcon = createIcon(/* @__PURE__ */ React.createElement("path", {
  d: "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
}), "MovieIcon", "0 0 20 20");

// app/components/icons/tv-series.tsx
init_react();
var TVSeriesIcon = createIcon(/* @__PURE__ */ React.createElement("path", {
  d: "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
}), "TVSeriesIcon", "0 0 20 20");

// app/components/masthead/masthead.css
var masthead_default = "/build/_assets/masthead-OV4IWEBV.css";

// app/components/masthead/masthead.tsx
var links3 = () => [{ rel: "stylesheet", href: masthead_default }];
function Masthead({ navigation, avatar }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "masthead"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(LogoIcon, {
    className: "logo color-red-300"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "visually-hidden"
  }, "Entertainment Company")), navigation, avatar);
}

// app/components/primary-navigation/primary-navigation.tsx
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/primary-navigation/primary-navigation.css
var primary_navigation_default = "/build/_assets/primary-navigation-EFZRMNCV.css";

// app/components/primary-navigation/primary-navigation.tsx
var links4 = () => [{ rel: "stylesheet", href: primary_navigation_default }];
function PrimaryNavigation(props) {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "primary-navigation"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "recommended"
  }, /* @__PURE__ */ React.createElement(HomeIcon, {
    className: "nav-icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Home"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "movie"
  }, /* @__PURE__ */ React.createElement(MovieIcon, {
    className: "nav-icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Movies"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "tv-series"
  }, /* @__PURE__ */ React.createElement(TVSeriesIcon, {
    className: "nav-icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "TV Series")))));
}

// app/styles/routes/browse.css
var browse_default = "/build/_assets/browse-MJWQDPWX.css";

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse.tsx
var links5 = () => [
  { rel: "stylesheet", href: browse_default },
  ...links3(),
  ...links4(),
  ...links2()
];
function Catalog() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "browse"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement(Masthead, {
    navigation: /* @__PURE__ */ React.createElement(PrimaryNavigation, null),
    avatar: /* @__PURE__ */ React.createElement(Avatar, {
      src: "/assets/image-avatar.png"
    })
  })), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse/recommended.tsx
var recommended_exports = {};
__export(recommended_exports, {
  default: () => Recommended,
  links: () => links9,
  loader: () => loader
});
init_react();

// app/components/heading/heading.tsx
init_react();
var import_clsx = __toESM(require("clsx"));
var links6 = () => [];
var componentMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
};
var sizeClassesMap = {
  l: ["font-size-500", "font-weight-light"],
  m: ["font-size-400", "font-weight-medium"],
  s: ["font-size-300", "font-weight-medium"]
};
function Heading({ level, size, children }) {
  const Component = componentMap[level];
  const sizeClasses = sizeClassesMap[size];
  const classNames = (0, import_clsx.default)(sizeClasses);
  return /* @__PURE__ */ React.createElement(Component, {
    className: classNames
  }, children);
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse/recommended.tsx
var import_remix6 = __toESM(require_remix());

// app/components/media-card/media-card.tsx
init_react();

// app/components/body-text/body-text.tsx
init_react();
var import_clsx2 = __toESM(require("clsx"));
var sizeClassMap = {
  m: "font-size-200",
  s: ["font-size-100", "color-gray-400-75pc"]
};
function BodyText({
  size,
  component: Component = "p",
  children
}) {
  const sizeClasses = sizeClassMap[size];
  const classNames = (0, import_clsx2.default)(sizeClasses);
  return /* @__PURE__ */ React.createElement(Component, {
    className: classNames
  }, children);
}

// app/components/media-card/media-card.css
var media_card_default = "/build/_assets/media-card-TSRMQRVT.css";

// app/components/media-card/media-card.tsx
var links7 = () => [
  {
    rel: "stylesheet",
    href: media_card_default
  }
];
function MediaCard({
  title,
  year,
  category,
  rating,
  imageSlug,
  isTrending = false
}) {
  return /* @__PURE__ */ React.createElement("article", __spreadValues({
    className: "media-card"
  }, isTrending ? { "data-trending": true } : {}), /* @__PURE__ */ React.createElement(MediaImage, {
    imageSlug,
    isTrending
  }), /* @__PURE__ */ React.createElement(MediaMeta, {
    year,
    category,
    rating,
    size: isTrending ? "m" : "s"
  }), /* @__PURE__ */ React.createElement(Heading, {
    level: 3,
    size: isTrending ? "m" : "s"
  }, title));
}
function MediaMeta({
  year,
  category,
  rating,
  size
}) {
  return /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", {
    className: "visually-hidden"
  }, "Year released"), /* @__PURE__ */ React.createElement(BodyText, {
    component: "dd",
    size
  }, year), /* @__PURE__ */ React.createElement("dt", {
    className: "visually-hidden"
  }, "Category"), /* @__PURE__ */ React.createElement(BodyText, {
    component: "dd",
    size
  }, category), /* @__PURE__ */ React.createElement("dt", {
    className: "visually-hidden"
  }, "Age rating"), /* @__PURE__ */ React.createElement(BodyText, {
    component: "dd",
    size
  }, rating));
}
function MediaImage({ imageSlug, isTrending }) {
  const imageRoot = "/assets/thumbnails";
  const imageBasePath = `${imageRoot}/${imageSlug}/${isTrending ? "trending" : "regular"}`;
  const trendingSrcSet = `
    ${imageBasePath}/small.jpg 480w,
    ${imageBasePath}/large.jpg 940w
  `;
  const regularSrcSet = `
    ${imageBasePath}/small.jpg 328w,
    ${imageBasePath}/medium.jpg 440w,
    ${imageBasePath}/large.jpg 560w,
  `;
  const srcSet = isTrending ? trendingSrcSet : regularSrcSet;
  const trendingSizes = `
    (max-width: 375px) 240px,
    470px
  `;
  const regularSizes = `
    (max-width: 375px) 164px,
    (max-width: 768px) 220px,
    280px
  `;
  const sizes = isTrending ? trendingSizes : regularSizes;
  const width = isTrending ? 240 : 164;
  const height = isTrending ? 140 : 110;
  return /* @__PURE__ */ React.createElement("img", {
    srcSet,
    sizes,
    src: `${imageBasePath}/small.jpg`,
    alt: "",
    width,
    height
  });
}

// app/components/media-grid/media-grid.tsx
init_react();

// app/components/media-grid/media-grid.css
var media_grid_default = "/build/_assets/media-grid-V2NNIWM4.css";

// app/components/media-grid/media-grid.tsx
var links8 = () => [{ rel: "stylesheet", href: media_grid_default }];
function MediaGrid({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "media-grid"
  }, children);
}

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse/recommended.tsx
var links9 = () => [
  ...links6(),
  ...links7(),
  ...links8()
];
var loader = async () => {
  const selectMedia = {
    id: true,
    title: true,
    year: true,
    rating: true,
    category: {
      select: { display: true }
    },
    image: true
  };
  const recommendedQuery = db.media.findMany({
    take: 20,
    select: selectMedia
  });
  const trendingQuery = db.media.findMany({
    take: 20,
    where: { isTrending: true },
    select: selectMedia
  });
  const [recommended, trending] = await Promise.all([
    recommendedQuery,
    trendingQuery
  ]);
  const data = {
    trending: trending.map((item) => __spreadProps(__spreadValues({}, item), {
      category: item.category.display,
      imageSlug: item.image
    })),
    recommended: recommended.map((item) => __spreadProps(__spreadValues({}, item), {
      category: item.category.display,
      imageSlug: item.image
    }))
  };
  return (0, import_remix6.json)(data);
};
function Recommended() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "stack"
  }, /* @__PURE__ */ React.createElement(Heading, {
    level: 2,
    size: "l"
  }, "Trending"), /* @__PURE__ */ React.createElement(MediaGrid, null, data.trending.map((mediaItem) => /* @__PURE__ */ React.createElement(MediaCard, {
    key: mediaItem.id,
    title: mediaItem.title,
    year: mediaItem.year,
    category: mediaItem.category,
    rating: mediaItem.rating,
    imageSlug: mediaItem.imageSlug,
    isTrending: true
  }))), /* @__PURE__ */ React.createElement(Heading, {
    level: 2,
    size: "l"
  }, "Recommended for you"), /* @__PURE__ */ React.createElement(MediaGrid, null, data.recommended.map((mediaItem) => /* @__PURE__ */ React.createElement(MediaCard, {
    key: mediaItem.id,
    title: mediaItem.title,
    year: mediaItem.year,
    category: mediaItem.category,
    rating: mediaItem.rating,
    imageSlug: mediaItem.imageSlug
  }))));
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/browse/$category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => CatalogType,
  links: () => links10,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());
var links10 = () => [
  ...links7(),
  ...links6(),
  ...links8()
];
var loader2 = async ({ params }) => {
  const { category } = params;
  const dbCategory = await db.category.findUnique({
    where: { name: category },
    select: {
      display: true,
      media: {
        take: 20,
        select: {
          id: true,
          title: true,
          year: true,
          rating: true,
          category: {
            select: { display: true }
          },
          image: true
        }
      }
    }
  });
  if (!dbCategory) {
    throw new Response(`Cannot find category with name ${category}`, {
      status: 404
    });
  }
  const data = {
    categoryDisplay: dbCategory.display,
    media: dbCategory.media.map((item) => __spreadProps(__spreadValues({}, item), {
      category: item.category.display,
      imageSlug: item.image
    }))
  };
  return (0, import_remix7.json)(data);
};
function CatalogType() {
  const data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "stack"
  }, /* @__PURE__ */ React.createElement(Heading, {
    level: 2,
    size: "m"
  }, data.categoryDisplay), /* @__PURE__ */ React.createElement(MediaGrid, null, data.media.map((mediaItem) => /* @__PURE__ */ React.createElement(MediaCard, {
    key: mediaItem.id,
    title: mediaItem.title,
    year: mediaItem.year,
    category: mediaItem.category,
    rating: mediaItem.rating,
    imageSlug: mediaItem.imageSlug
  }))));
}

// route:/home/alex/development/projects/frontend-mentor/entertainment-web-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader3
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader3 = () => {
  return (0, import_remix8.redirect)("/browse/recommended");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "efcc8ef1", "entry": { "module": "/build/entry.client-VXAS6HCE.js", "imports": ["/build/_shared/chunk-BXUODXJR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XFRYRDHX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse": { "id": "routes/browse", "parentId": "root", "path": "browse", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse-S7FXLCSW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse/$category": { "id": "routes/browse/$category", "parentId": "routes/browse", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse/$category-552A66VQ.js", "imports": ["/build/_shared/chunk-XT2TC2GT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse/recommended": { "id": "routes/browse/recommended", "parentId": "routes/browse", "path": "recommended", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse/recommended-FPOBZ6DL.js", "imports": ["/build/_shared/chunk-XT2TC2GT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-G5ORP2WZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-EFCC8EF1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/browse": {
    id: "routes/browse",
    parentId: "root",
    path: "browse",
    index: void 0,
    caseSensitive: void 0,
    module: browse_exports
  },
  "routes/browse/recommended": {
    id: "routes/browse/recommended",
    parentId: "routes/browse",
    path: "recommended",
    index: void 0,
    caseSensitive: void 0,
    module: recommended_exports
  },
  "routes/browse/$category": {
    id: "routes/browse/$category",
    parentId: "routes/browse",
    path: ":category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm9vdC50c3giLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYXN0aGVhZC9tYXN0aGVhZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvaG9tZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9sb2dvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9tb3ZpZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvdHYtc2VyaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wcmltYXJ5LW5hdmlnYXRpb24vcHJpbWFyeS1uYXZpZ2F0aW9uLnRzeCIsICJyb3V0ZTovaG9tZS9hbGV4L2RldmVsb3BtZW50L3Byb2plY3RzL2Zyb250ZW5kLW1lbnRvci9lbnRlcnRhaW5tZW50LXdlYi1hcHAvYXBwL3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hlYWRpbmcvaGVhZGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbWVkaWEtY2FyZC9tZWRpYS1jYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ib2R5LXRleHQvYm9keS10ZXh0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tZWRpYS1ncmlkL21lZGlhLWdyaWQudHN4IiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeS50c3giLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9hbGV4L2RldmVsb3BtZW50L3Byb2plY3RzL2Zyb250ZW5kLW1lbnRvci9lbnRlcnRhaW5tZW50LXdlYi1hcHAvYXBwL3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm91dGVzL2Jyb3dzZS8kY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYnJvd3NlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9icm93c2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYnJvd3NlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9icm93c2UvcmVjb21tZW5kZWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jyb3dzZS9yZWNvbW1lbmRlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jyb3dzZVwiLFxuICAgICAgcGF0aDogXCJyZWNvbW1lbmRlZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jyb3dzZVwiLFxuICAgICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKVxuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tICd+L3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHJlc2V0U3R5bGVzIGZyb20gJ34vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCB1dGlsaXR5U3R5bGVzIGZyb20gJ34vc3R5bGVzL3V0aWxpdGllcy5jc3MnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH0sXG4gIHtcbiAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsXG4gICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICB9LFxuICB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICB9LFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiByZXNldFN0eWxlcyB9LFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXMgfSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdXRpbGl0eVN0eWxlcyB9LFxuXVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnRW50ZXJ0YWlubWVudCBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJvd3NlIGFuZCB3YXRjaCBtb3ZpZXMgYW5kIFRWIHNob3dzIGluIG9uZSBwbGFjZScsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBBdmF0YXIsIGxpbmtzIGFzIGF2YXRhckxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTWFzdGhlYWQsIGxpbmtzIGFzIG1hc3RoZWFkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFzdGhlYWQnXG5pbXBvcnQge1xuICBQcmltYXJ5TmF2aWdhdGlvbixcbiAgbGlua3MgYXMgcHJpbWFyeU5hdmlnYXRpb25MaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL3ByaW1hcnktbmF2aWdhdGlvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9yb3V0ZXMvYnJvd3NlLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgLi4ubWFzdGhlYWRMaW5rcygpLFxuICAuLi5wcmltYXJ5TmF2aWdhdGlvbkxpbmtzKCksXG4gIC4uLmF2YXRhckxpbmtzKCksXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxNYXN0aGVhZFxuICAgICAgICAgIG5hdmlnYXRpb249ezxQcmltYXJ5TmF2aWdhdGlvbiAvPn1cbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiL2Fzc2V0cy9pbWFnZS1hdmF0YXIucG5nXCIgLz59XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXZhdGFyLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG50eXBlIFByb3BzID0geyBzcmM6IHN0cmluZzsgYWx0Pzogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIEF2YXRhcih7IHNyYywgYWx0ID0gJycgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17c3JjfSBhbHQ9e2FsdH0+PC9pbWc+XG59XG4iLCAiaW1wb3J0IHsgTGluaywgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBMb2dvSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hc3RoZWFkLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG50eXBlIFByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBSZWFjdE5vZGVcbiAgYXZhdGFyOiBSZWFjdE5vZGVcbn1cbmV4cG9ydCBmdW5jdGlvbiBNYXN0aGVhZCh7IG5hdmlnYXRpb24sIGF2YXRhciB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XG4gICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgPExvZ29JY29uIGNsYXNzTmFtZT1cImxvZ28gY29sb3ItcmVkLTMwMFwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5FbnRlcnRhaW5tZW50IENvbXBhbnk8L2gxPlxuICAgICAgPC9MaW5rPlxuICAgICAge25hdmlnYXRpb259XG4gICAgICB7YXZhdGFyfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29uJ1xuXG5leHBvcnQgY29uc3QgSG9tZUljb24gPSBjcmVhdGVJY29uKFxuICA8cGF0aCBkPVwiTTggMEgxQy40IDAgMCAuNCAwIDF2N2MwIC42LjQgMSAxIDFoN2MuNiAwIDEtLjQgMS0xVjFjMC0uNi0uNC0xLTEtMVptMCAxMUgxYy0uNiAwLTEgLjQtMSAxdjdjMCAuNi40IDEgMSAxaDdjLjYgMCAxLS40IDEtMXYtN2MwLS42LS40LTEtMS0xWk0xOSAwaC03Yy0uNiAwLTEgLjQtMSAxdjdjMCAuNi40IDEgMSAxaDdjLjYgMCAxLS40IDEtMVYxYzAtLjYtLjQtMS0xLTFabTAgMTFoLTdjLS42IDAtMSAuNC0xIDF2N2MwIC42LjQgMSAxIDFoN2MuNiAwIDEtLjQgMS0xdi03YzAtLjYtLjQtMS0xLTFaXCIgLz4sXG4gICdIb21lSWNvbicsXG4gICcwIDAgMjAgMjAnXG4pXG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgSWNvbkJhc2VQcm9wcyA9IHsgcGF0aDogUmVhY3ROb2RlOyBjbGFzc05hbWU/OiBzdHJpbmc7IHZpZXdCb3g6IHN0cmluZyB9XG5mdW5jdGlvbiBJY29uQmFzZSh7IHBhdGgsIGNsYXNzTmFtZSwgdmlld0JveCB9OiBJY29uQmFzZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgPlxuICAgICAge3BhdGh9XG4gICAgPC9zdmc+XG4gIClcbn1cblxudHlwZSBJY29uUHJvcHMgPSBQaWNrPEljb25CYXNlUHJvcHMsICdjbGFzc05hbWUnPlxuXG5leHBvcnQgY29uc3QgY3JlYXRlSWNvbiA9IChcbiAgcGF0aDogUmVhY3ROb2RlLFxuICBkaXNwbGF5TmFtZTogc3RyaW5nLFxuICB2aWV3Qm94OiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBJY29uID0gKHsgY2xhc3NOYW1lIH06IEljb25Qcm9wcykgPT4gKFxuICAgIDxJY29uQmFzZSBwYXRoPXtwYXRofSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD17dmlld0JveH0gLz5cbiAgKVxuICBJY29uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcbiAgcmV0dXJuIEljb25cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVJY29uIH0gZnJvbSAnfi9jb21wb25lbnRzL2ljb24nXG5cbmV4cG9ydCBjb25zdCBMb2dvSWNvbiA9IGNyZWF0ZUljb24oXG4gIDxwYXRoIGQ9XCJtMjYuNDYzLjQwOCAzLjIgNi40aC00LjhsLTMuMi02LjRoLTMuMmwzLjIgNi40aC00LjhsLTMuMi02LjRoLTMuMmwzLjIgNi40aC00LjhsLTMuMi02LjRoLTEuNmEzLjE4NiAzLjE4NiAwIDAgMC0zLjE4NCAzLjJsLS4wMTYgMTkuMmEzLjIgMy4yIDAgMCAwIDMuMiAzLjJoMjUuNmEzLjIgMy4yIDAgMCAwIDMuMi0zLjJWLjQwOGgtNi40WlwiIC8+LFxuICAnTG9nb0ljb24nLFxuICAnMCAwIDMzIDI3J1xuKVxuIiwgImltcG9ydCB7IGNyZWF0ZUljb24gfSBmcm9tICd+L2NvbXBvbmVudHMvaWNvbidcblxuZXhwb3J0IGNvbnN0IE1vdmllSWNvbiA9IGNyZWF0ZUljb24oXG4gIDxwYXRoIGQ9XCJNMTYuOTU2IDBIMy4wNDRBMy4wNDQgMy4wNDQgMCAwIDAgMCAzLjA0NHYxMy45MTJBMy4wNDQgMy4wNDQgMCAwIDAgMy4wNDQgMjBoMTMuOTEyQTMuMDQ0IDMuMDQ0IDAgMCAwIDIwIDE2Ljk1NlYzLjA0NEEzLjA0NCAzLjA0NCAwIDAgMCAxNi45NTYgMFpNNCA5SDJWN2gydjJabS0yIDJoMnYySDJ2LTJabTE2LTJoLTJWN2gydjJabS0yIDJoMnYyaC0ydi0yWm0yLTguMjZWNGgtMlYyaDEuMjZhLjc0Ljc0IDAgMCAxIC43NC43NFpNMi43NCAySDR2MkgyVjIuNzRBLjc0Ljc0IDAgMCAxIDIuNzQgMlpNMiAxNy4yNlYxNmgydjJIMi43NGEuNzQuNzQgMCAwIDEtLjc0LS43NFptMTYgMGEuNzQuNzQgMCAwIDEtLjc0Ljc0SDE2di0yaDJ2MS4yNlpcIiAvPixcbiAgJ01vdmllSWNvbicsXG4gICcwIDAgMjAgMjAnXG4pXG4iLCAiaW1wb3J0IHsgY3JlYXRlSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29uJ1xuXG5leHBvcnQgY29uc3QgVFZTZXJpZXNJY29uID0gY3JlYXRlSWNvbihcbiAgPHBhdGggZD1cIk0yMCA0LjQ4MUg5LjA4bDIuNy0zLjI3OEwxMC4yMiAwIDcgMy45MDkgMy43OC4wMjkgMi4yMiAxLjIwM2wyLjcgMy4yNzhIMFYyMGgyMFY0LjQ4MVptLTggMTMuNThIMlY2LjQyaDEwdjExLjY0Wm01LTMuODhoLTJ2LTEuOTRoMnYxLjk0Wm0wLTMuODhoLTJWOC4zNmgydjEuOTRaXCIgLz4sXG4gICdUVlNlcmllc0ljb24nLFxuICAnMCAwIDIwIDIwJ1xuKVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXJlZHVuZGFudC1yb2xlcyAqL1xuaW1wb3J0IHsgSG9tZUljb24sIE1vdmllSWNvbiwgVFZTZXJpZXNJY29uIH0gZnJvbSAnLi4vaWNvbnMnXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBOYXZMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmltYXJ5LW5hdmlnYXRpb24uY3NzJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG5cbnR5cGUgUHJvcHMgPSB7fVxuZXhwb3J0IGZ1bmN0aW9uIFByaW1hcnlOYXZpZ2F0aW9uKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInByaW1hcnktbmF2aWdhdGlvblwiPlxuICAgICAgPHVsIHJvbGU9XCJsaXN0XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cInJlY29tbWVuZGVkXCI+XG4gICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwibmF2LWljb25cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIm1vdmllXCI+XG4gICAgICAgICAgICA8TW92aWVJY29uIGNsYXNzTmFtZT1cIm5hdi1pY29uXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPk1vdmllczwvc3Bhbj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cInR2LXNlcmllc1wiPlxuICAgICAgICAgICAgPFRWU2VyaWVzSWNvbiBjbGFzc05hbWU9XCJuYXYtaWNvblwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5UViBTZXJpZXM8L3NwYW4+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IEhlYWRpbmcsIGxpbmtzIGFzIGhlYWRpbmdMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9oZWFkaW5nJ1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIGpzb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1lZGlhQ2FyZCwgbGlua3MgYXMgbWVkaWFDYXJkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWVkaWEtY2FyZCdcbmltcG9ydCB7IE1lZGlhR3JpZCwgbGlua3MgYXMgbWVkaWFHcmlkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWVkaWEtZ3JpZCdcblxuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICd+L21lZGlhJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB0cmVuZGluZzogTWVkaWFbXVxuICByZWNvbW1lbmRlZDogTWVkaWFbXVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIC4uLmhlYWRpbmdMaW5rcygpLFxuICAuLi5tZWRpYUNhcmRMaW5rcygpLFxuICAuLi5tZWRpYUdyaWRMaW5rcygpLFxuXVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0TWVkaWEgPSB7XG4gICAgaWQ6IHRydWUsXG4gICAgdGl0bGU6IHRydWUsXG4gICAgeWVhcjogdHJ1ZSxcbiAgICByYXRpbmc6IHRydWUsXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHNlbGVjdDogeyBkaXNwbGF5OiB0cnVlIH0sXG4gICAgfSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0IHJlY29tbWVuZGVkUXVlcnkgPSBkYi5tZWRpYS5maW5kTWFueSh7XG4gICAgdGFrZTogMjAsXG4gICAgc2VsZWN0OiBzZWxlY3RNZWRpYSxcbiAgfSlcbiAgY29uc3QgdHJlbmRpbmdRdWVyeSA9IGRiLm1lZGlhLmZpbmRNYW55KHtcbiAgICB0YWtlOiAyMCxcbiAgICB3aGVyZTogeyBpc1RyZW5kaW5nOiB0cnVlIH0sXG4gICAgc2VsZWN0OiBzZWxlY3RNZWRpYSxcbiAgfSlcblxuICBjb25zdCBbcmVjb21tZW5kZWQsIHRyZW5kaW5nXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICByZWNvbW1lbmRlZFF1ZXJ5LFxuICAgIHRyZW5kaW5nUXVlcnksXG4gIF0pXG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICB0cmVuZGluZzogdHJlbmRpbmcubWFwKChpdGVtKSA9PiAoe1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LmRpc3BsYXksXG4gICAgICBpbWFnZVNsdWc6IGl0ZW0uaW1hZ2UsXG4gICAgfSkpLFxuICAgIHJlY29tbWVuZGVkOiByZWNvbW1lbmRlZC5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkuZGlzcGxheSxcbiAgICAgIGltYWdlU2x1ZzogaXRlbS5pbWFnZSxcbiAgICB9KSksXG4gIH1cbiAgcmV0dXJuIGpzb24oZGF0YSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb21tZW5kZWQoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGFja1wiPlxuICAgICAgPEhlYWRpbmcgbGV2ZWw9ezJ9IHNpemU9XCJsXCI+XG4gICAgICAgIFRyZW5kaW5nXG4gICAgICA8L0hlYWRpbmc+XG5cbiAgICAgIDxNZWRpYUdyaWQ+XG4gICAgICAgIHtkYXRhLnRyZW5kaW5nLm1hcCgobWVkaWFJdGVtKSA9PiAoXG4gICAgICAgICAgPE1lZGlhQ2FyZFxuICAgICAgICAgICAga2V5PXttZWRpYUl0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17bWVkaWFJdGVtLnRpdGxlfVxuICAgICAgICAgICAgeWVhcj17bWVkaWFJdGVtLnllYXJ9XG4gICAgICAgICAgICBjYXRlZ29yeT17bWVkaWFJdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgcmF0aW5nPXttZWRpYUl0ZW0ucmF0aW5nfVxuICAgICAgICAgICAgaW1hZ2VTbHVnPXttZWRpYUl0ZW0uaW1hZ2VTbHVnfVxuICAgICAgICAgICAgaXNUcmVuZGluZz17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTWVkaWFHcmlkPlxuXG4gICAgICA8SGVhZGluZyBsZXZlbD17Mn0gc2l6ZT1cImxcIj5cbiAgICAgICAgUmVjb21tZW5kZWQgZm9yIHlvdVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPE1lZGlhR3JpZD5cbiAgICAgICAge2RhdGEucmVjb21tZW5kZWQubWFwKChtZWRpYUl0ZW0pID0+IChcbiAgICAgICAgICA8TWVkaWFDYXJkXG4gICAgICAgICAgICBrZXk9e21lZGlhSXRlbS5pZH1cbiAgICAgICAgICAgIHRpdGxlPXttZWRpYUl0ZW0udGl0bGV9XG4gICAgICAgICAgICB5ZWFyPXttZWRpYUl0ZW0ueWVhcn1cbiAgICAgICAgICAgIGNhdGVnb3J5PXttZWRpYUl0ZW0uY2F0ZWdvcnl9XG4gICAgICAgICAgICByYXRpbmc9e21lZGlhSXRlbS5yYXRpbmd9XG4gICAgICAgICAgICBpbWFnZVNsdWc9e21lZGlhSXRlbS5pbWFnZVNsdWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01lZGlhR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IEVsZW1lbnRUeXBlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4LCB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtdXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxldmVsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDZcbiAgc2l6ZTogJ2wnIHwgJ20nIHwgJ3MnXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuY29uc3QgY29tcG9uZW50TWFwOiBSZWNvcmQ8UHJvcHNbJ2xldmVsJ10sIEVsZW1lbnRUeXBlPiA9IHtcbiAgMTogJ2gxJyxcbiAgMjogJ2gyJyxcbiAgMzogJ2gzJyxcbiAgNDogJ2g0JyxcbiAgNTogJ2g1JyxcbiAgNjogJ2g2Jyxcbn1cblxuY29uc3Qgc2l6ZUNsYXNzZXNNYXA6IFJlY29yZDxQcm9wc1snc2l6ZSddLCBDbGFzc1ZhbHVlPiA9IHtcbiAgbDogWydmb250LXNpemUtNTAwJywgJ2ZvbnQtd2VpZ2h0LWxpZ2h0J10sXG4gIG06IFsnZm9udC1zaXplLTQwMCcsICdmb250LXdlaWdodC1tZWRpdW0nXSxcbiAgczogWydmb250LXNpemUtMzAwJywgJ2ZvbnQtd2VpZ2h0LW1lZGl1bSddLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGluZyh7IGxldmVsLCBzaXplLCBjaGlsZHJlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gY29tcG9uZW50TWFwW2xldmVsXVxuICBjb25zdCBzaXplQ2xhc3NlcyA9IHNpemVDbGFzc2VzTWFwW3NpemVdXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KHNpemVDbGFzc2VzKVxuXG4gIHJldHVybiA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2NoaWxkcmVufTwvQ29tcG9uZW50PlxufVxuIiwgImltcG9ydCB7IEJvZHlUZXh0IH0gZnJvbSAnfi9jb21wb25lbnRzL2JvZHktdGV4dCdcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICd+L2NvbXBvbmVudHMvaGVhZGluZydcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lZGlhLWNhcmQuY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIHllYXI6IG51bWJlclxuICBjYXRlZ29yeTogc3RyaW5nXG4gIHJhdGluZzogc3RyaW5nXG4gIGlzVHJlbmRpbmc/OiBib29sZWFuXG4gIGltYWdlU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAge1xuICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgIGhyZWY6IHN0eWxlcyxcbiAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhQ2FyZCh7XG4gIHRpdGxlLFxuICB5ZWFyLFxuICBjYXRlZ29yeSxcbiAgcmF0aW5nLFxuICBpbWFnZVNsdWcsXG4gIGlzVHJlbmRpbmcgPSBmYWxzZSxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlXG4gICAgICBjbGFzc05hbWU9XCJtZWRpYS1jYXJkXCJcbiAgICAgIHsuLi4oaXNUcmVuZGluZyA/IHsgJ2RhdGEtdHJlbmRpbmcnOiB0cnVlIH0gOiB7fSl9XG4gICAgPlxuICAgICAgPE1lZGlhSW1hZ2UgaW1hZ2VTbHVnPXtpbWFnZVNsdWd9IGlzVHJlbmRpbmc9e2lzVHJlbmRpbmd9IC8+XG4gICAgICA8TWVkaWFNZXRhXG4gICAgICAgIHllYXI9e3llYXJ9XG4gICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgcmF0aW5nPXtyYXRpbmd9XG4gICAgICAgIHNpemU9e2lzVHJlbmRpbmcgPyAnbScgOiAncyd9XG4gICAgICAvPlxuICAgICAgPEhlYWRpbmcgbGV2ZWw9ezN9IHNpemU9e2lzVHJlbmRpbmcgPyAnbScgOiAncyd9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbnR5cGUgTWVkaWFNZXRhUHJvcHMgPSB7XG4gIHllYXI6IG51bWJlclxuICBjYXRlZ29yeTogc3RyaW5nIHwgUmVhY3ROb2RlXG4gIHJhdGluZzogc3RyaW5nXG4gIHNpemU6ICdtJyB8ICdzJ1xufVxuZnVuY3Rpb24gTWVkaWFNZXRhKHtcbiAgeWVhcixcbiAgY2F0ZWdvcnksXG4gIHJhdGluZyxcbiAgc2l6ZSxcbn06IE1lZGlhTWV0YVByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxkbD5cbiAgICAgIDxkdCBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5ZZWFyIHJlbGVhc2VkPC9kdD5cbiAgICAgIDxCb2R5VGV4dCBjb21wb25lbnQ9XCJkZFwiIHNpemU9e3NpemV9PlxuICAgICAgICB7eWVhcn1cbiAgICAgIDwvQm9keVRleHQ+XG4gICAgICA8ZHQgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+Q2F0ZWdvcnk8L2R0PlxuICAgICAgPEJvZHlUZXh0IGNvbXBvbmVudD1cImRkXCIgc2l6ZT17c2l6ZX0+XG4gICAgICAgIHtjYXRlZ29yeX1cbiAgICAgIDwvQm9keVRleHQ+XG4gICAgICA8ZHQgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+QWdlIHJhdGluZzwvZHQ+XG4gICAgICA8Qm9keVRleHQgY29tcG9uZW50PVwiZGRcIiBzaXplPXtzaXplfT5cbiAgICAgICAge3JhdGluZ31cbiAgICAgIDwvQm9keVRleHQ+XG4gICAgPC9kbD5cbiAgKVxufVxuXG50eXBlIE1lZGlhSW1hZ2VQcm9wcyA9IHtcbiAgaW1hZ2VTbHVnOiBzdHJpbmdcbiAgaXNUcmVuZGluZzogYm9vbGVhblxufVxuZnVuY3Rpb24gTWVkaWFJbWFnZSh7IGltYWdlU2x1ZywgaXNUcmVuZGluZyB9OiBNZWRpYUltYWdlUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IGltYWdlUm9vdCA9ICcvYXNzZXRzL3RodW1ibmFpbHMnXG4gIGNvbnN0IGltYWdlQmFzZVBhdGggPSBgJHtpbWFnZVJvb3R9LyR7aW1hZ2VTbHVnfS8ke1xuICAgIGlzVHJlbmRpbmcgPyAndHJlbmRpbmcnIDogJ3JlZ3VsYXInXG4gIH1gXG5cbiAgY29uc3QgdHJlbmRpbmdTcmNTZXQgPSBgXG4gICAgJHtpbWFnZUJhc2VQYXRofS9zbWFsbC5qcGcgNDgwdyxcbiAgICAke2ltYWdlQmFzZVBhdGh9L2xhcmdlLmpwZyA5NDB3XG4gIGBcbiAgY29uc3QgcmVndWxhclNyY1NldCA9IGBcbiAgICAke2ltYWdlQmFzZVBhdGh9L3NtYWxsLmpwZyAzMjh3LFxuICAgICR7aW1hZ2VCYXNlUGF0aH0vbWVkaXVtLmpwZyA0NDB3LFxuICAgICR7aW1hZ2VCYXNlUGF0aH0vbGFyZ2UuanBnIDU2MHcsXG4gIGBcbiAgY29uc3Qgc3JjU2V0ID0gaXNUcmVuZGluZyA/IHRyZW5kaW5nU3JjU2V0IDogcmVndWxhclNyY1NldFxuXG4gIGNvbnN0IHRyZW5kaW5nU2l6ZXMgPSBgXG4gICAgKG1heC13aWR0aDogMzc1cHgpIDI0MHB4LFxuICAgIDQ3MHB4XG4gIGBcbiAgY29uc3QgcmVndWxhclNpemVzID0gYFxuICAgIChtYXgtd2lkdGg6IDM3NXB4KSAxNjRweCxcbiAgICAobWF4LXdpZHRoOiA3NjhweCkgMjIwcHgsXG4gICAgMjgwcHhcbiAgYFxuICBjb25zdCBzaXplcyA9IGlzVHJlbmRpbmcgPyB0cmVuZGluZ1NpemVzIDogcmVndWxhclNpemVzXG4gIGNvbnN0IHdpZHRoID0gaXNUcmVuZGluZyA/IDI0MCA6IDE2NFxuICBjb25zdCBoZWlnaHQgPSBpc1RyZW5kaW5nID8gMTQwIDogMTEwXG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgIHNpemVzPXtzaXplc31cbiAgICAgIHNyYz17YCR7aW1hZ2VCYXNlUGF0aH0vc21hbGwuanBnYH1cbiAgICAgIGFsdD1cIlwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgRWxlbWVudFR5cGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3gsIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnXG5cbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdE5vZGU7IHNpemU6ICdtJyB8ICdzJzsgY29tcG9uZW50PzogRWxlbWVudFR5cGUgfVxuXG5jb25zdCBzaXplQ2xhc3NNYXA6IFJlY29yZDxQcm9wc1snc2l6ZSddLCBDbGFzc1ZhbHVlPiA9IHtcbiAgbTogJ2ZvbnQtc2l6ZS0yMDAnLFxuICBzOiBbJ2ZvbnQtc2l6ZS0xMDAnLCAnY29sb3ItZ3JheS00MDAtNzVwYyddLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9keVRleHQoe1xuICBzaXplLFxuICBjb21wb25lbnQ6IENvbXBvbmVudCA9ICdwJyxcbiAgY2hpbGRyZW4sXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc2l6ZUNsYXNzZXMgPSBzaXplQ2xhc3NNYXBbc2l6ZV1cbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goc2l6ZUNsYXNzZXMpXG4gIHJldHVybiA8Q29tcG9uZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2NoaWxkcmVufTwvQ29tcG9uZW50PlxufVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lZGlhLWdyaWQuY3NzJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG5cbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfVxuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhR3JpZCh7IGNoaWxkcmVuIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ncmlkXCI+e2NoaWxkcmVufTwvZGl2PlxufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIGRiLiRjb25uZWN0KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KClcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiXG59XG5cbmV4cG9ydCB7IGRiIH1cbiIsICJpbXBvcnQgeyBIZWFkaW5nLCBsaW5rcyBhcyBoZWFkaW5nTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvaGVhZGluZydcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNZWRpYUNhcmQsIGxpbmtzIGFzIG1lZGlhQ2FyZExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL21lZGlhLWNhcmQnXG5pbXBvcnQgeyBNZWRpYUdyaWQsIGxpbmtzIGFzIG1lZGlhR3JpZExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL21lZGlhLWdyaWQnXG5cbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnfi9tZWRpYSdcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInXG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgY2F0ZWdvcnlEaXNwbGF5OiBzdHJpbmdcbiAgbWVkaWE6IE1lZGlhW11cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5tZWRpYUNhcmRMaW5rcygpLFxuICAuLi5oZWFkaW5nTGlua3MoKSxcbiAgLi4ubWVkaWFHcmlkTGlua3MoKSxcbl1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGNhdGVnb3J5IH0gPSBwYXJhbXNcblxuICBjb25zdCBkYkNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgbmFtZTogY2F0ZWdvcnkgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBtZWRpYToge1xuICAgICAgICB0YWtlOiAyMCxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgdGl0bGU6IHRydWUsXG4gICAgICAgICAgeWVhcjogdHJ1ZSxcbiAgICAgICAgICByYXRpbmc6IHRydWUsXG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHNlbGVjdDogeyBkaXNwbGF5OiB0cnVlIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbWFnZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIWRiQ2F0ZWdvcnkpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoYENhbm5vdCBmaW5kIGNhdGVnb3J5IHdpdGggbmFtZSAke2NhdGVnb3J5fWAsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGNhdGVnb3J5RGlzcGxheTogZGJDYXRlZ29yeS5kaXNwbGF5LFxuICAgIG1lZGlhOiBkYkNhdGVnb3J5Lm1lZGlhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIC4uLml0ZW0sXG4gICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeS5kaXNwbGF5LFxuICAgICAgaW1hZ2VTbHVnOiBpdGVtLmltYWdlLFxuICAgIH0pKSxcbiAgfVxuICByZXR1cm4ganNvbihkYXRhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRhbG9nVHlwZSgpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWNrXCI+XG4gICAgICA8SGVhZGluZyBsZXZlbD17Mn0gc2l6ZT1cIm1cIj5cbiAgICAgICAge2RhdGEuY2F0ZWdvcnlEaXNwbGF5fVxuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8TWVkaWFHcmlkPlxuICAgICAgICB7ZGF0YS5tZWRpYS5tYXAoKG1lZGlhSXRlbSkgPT4gKFxuICAgICAgICAgIDxNZWRpYUNhcmRcbiAgICAgICAgICAgIGtleT17bWVkaWFJdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e21lZGlhSXRlbS50aXRsZX1cbiAgICAgICAgICAgIHllYXI9e21lZGlhSXRlbS55ZWFyfVxuICAgICAgICAgICAgY2F0ZWdvcnk9e21lZGlhSXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgIHJhdGluZz17bWVkaWFJdGVtLnJhdGluZ31cbiAgICAgICAgICAgIGltYWdlU2x1Zz17bWVkaWFJdGVtLmltYWdlU2x1Z31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTWVkaWFHcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoJy9icm93c2UvcmVjb21tZW5kZWQnKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2VmY2M4ZWYxJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1WWEFTNkhDRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlhVT0RYSlIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVhGUllSREhYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYnJvd3NlJzp7J2lkJzoncm91dGVzL2Jyb3dzZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidicm93c2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYnJvd3NlLVM3RlhMQ1NXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9icm93c2UvJGNhdGVnb3J5JywncGFyZW50SWQnOidyb3V0ZXMvYnJvd3NlJywncGF0aCc6JzpjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9icm93c2UvJGNhdGVnb3J5LTU1MkE2NlZRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YVDJUQzJHVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQnOnsnaWQnOidyb3V0ZXMvYnJvd3NlL3JlY29tbWVuZGVkJywncGFyZW50SWQnOidyb3V0ZXMvYnJvd3NlJywncGF0aCc6J3JlY29tbWVuZGVkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jyb3dzZS9yZWNvbW1lbmRlZC1GUE9CWjZETC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWFQyVEMyR1QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtRzVPUlAyV1ouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FRkNDOEVGMS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVC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
