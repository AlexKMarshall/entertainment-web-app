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
var utilities_default = "/build/_assets/utilities-DVRXDF3P.css";

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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, {
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
var assets_manifest_default = { "version": "35218ce8", "entry": { "module": "/build/entry.client-VXAS6HCE.js", "imports": ["/build/_shared/chunk-BXUODXJR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HTVRNN45.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse": { "id": "routes/browse", "parentId": "root", "path": "browse", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse-S7FXLCSW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse/$category": { "id": "routes/browse/$category", "parentId": "routes/browse", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse/$category-Y5OEILDD.js", "imports": ["/build/_shared/chunk-XT2TC2GT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/browse/recommended": { "id": "routes/browse/recommended", "parentId": "routes/browse", "path": "recommended", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/browse/recommended-ZVVHSWO6.js", "imports": ["/build/_shared/chunk-XT2TC2GT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-G5ORP2WZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-35218CE8.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm9vdC50c3giLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYXN0aGVhZC9tYXN0aGVhZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvaG9tZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9sb2dvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9pY29ucy9tb3ZpZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvdHYtc2VyaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wcmltYXJ5LW5hdmlnYXRpb24vcHJpbWFyeS1uYXZpZ2F0aW9uLnRzeCIsICJyb3V0ZTovaG9tZS9hbGV4L2RldmVsb3BtZW50L3Byb2plY3RzL2Zyb250ZW5kLW1lbnRvci9lbnRlcnRhaW5tZW50LXdlYi1hcHAvYXBwL3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hlYWRpbmcvaGVhZGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbWVkaWEtY2FyZC9tZWRpYS1jYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ib2R5LXRleHQvYm9keS10ZXh0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tZWRpYS1ncmlkL21lZGlhLWdyaWQudHN4IiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeS50c3giLCAicm91dGU6L2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvYWxleC9kZXZlbG9wbWVudC9wcm9qZWN0cy9mcm9udGVuZC1tZW50b3IvZW50ZXJ0YWlubWVudC13ZWItYXBwL2FwcC9yb3V0ZXMvYnJvd3NlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9hbGV4L2RldmVsb3BtZW50L3Byb2plY3RzL2Zyb250ZW5kLW1lbnRvci9lbnRlcnRhaW5tZW50LXdlYi1hcHAvYXBwL3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm91dGVzL2Jyb3dzZS8kY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL2FsZXgvZGV2ZWxvcG1lbnQvcHJvamVjdHMvZnJvbnRlbmQtbWVudG9yL2VudGVydGFpbm1lbnQtd2ViLWFwcC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYnJvd3NlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9icm93c2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYnJvd3NlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9icm93c2UvcmVjb21tZW5kZWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jyb3dzZS9yZWNvbW1lbmRlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jyb3dzZVwiLFxuICAgICAgcGF0aDogXCJyZWNvbW1lbmRlZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYnJvd3NlLyRjYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jyb3dzZVwiLFxuICAgICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKVxuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tICd+L3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHJlc2V0U3R5bGVzIGZyb20gJ34vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCB1dGlsaXR5U3R5bGVzIGZyb20gJ34vc3R5bGVzL3V0aWxpdGllcy5jc3MnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH0sXG4gIHtcbiAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsXG4gICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICB9LFxuICB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICB9LFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiByZXNldFN0eWxlcyB9LFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXMgfSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdXRpbGl0eVN0eWxlcyB9LFxuXVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnRW50ZXJ0YWlubWVudCBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJvd3NlIGFuZCB3YXRjaCBtb3ZpZXMgYW5kIFRWIHNob3dzIGluIG9uZSBwbGFjZScsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBBdmF0YXIsIGxpbmtzIGFzIGF2YXRhckxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTWFzdGhlYWQsIGxpbmtzIGFzIG1hc3RoZWFkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFzdGhlYWQnXG5pbXBvcnQge1xuICBQcmltYXJ5TmF2aWdhdGlvbixcbiAgbGlua3MgYXMgcHJpbWFyeU5hdmlnYXRpb25MaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL3ByaW1hcnktbmF2aWdhdGlvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9yb3V0ZXMvYnJvd3NlLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgLi4ubWFzdGhlYWRMaW5rcygpLFxuICAuLi5wcmltYXJ5TmF2aWdhdGlvbkxpbmtzKCksXG4gIC4uLmF2YXRhckxpbmtzKCksXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxNYXN0aGVhZFxuICAgICAgICAgIG5hdmlnYXRpb249ezxQcmltYXJ5TmF2aWdhdGlvbiAvPn1cbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiL2Fzc2V0cy9pbWFnZS1hdmF0YXIucG5nXCIgLz59XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXZhdGFyLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG50eXBlIFByb3BzID0geyBzcmM6IHN0cmluZzsgYWx0Pzogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIEF2YXRhcih7IHNyYywgYWx0ID0gJycgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17c3JjfSBhbHQ9e2FsdH0+PC9pbWc+XG59XG4iLCAiaW1wb3J0IHsgTGluaywgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBMb2dvSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hc3RoZWFkLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG50eXBlIFByb3BzID0ge1xuICBuYXZpZ2F0aW9uOiBSZWFjdE5vZGVcbiAgYXZhdGFyOiBSZWFjdE5vZGVcbn1cbmV4cG9ydCBmdW5jdGlvbiBNYXN0aGVhZCh7IG5hdmlnYXRpb24sIGF2YXRhciB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XG4gICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgPExvZ29JY29uIGNsYXNzTmFtZT1cImxvZ28gY29sb3ItcmVkLTMwMFwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5FbnRlcnRhaW5tZW50IENvbXBhbnk8L2gxPlxuICAgICAgPC9MaW5rPlxuICAgICAge25hdmlnYXRpb259XG4gICAgICB7YXZhdGFyfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29uJ1xuXG5leHBvcnQgY29uc3QgSG9tZUljb24gPSBjcmVhdGVJY29uKFxuICA8cGF0aCBkPVwiTTggMEgxQy40IDAgMCAuNCAwIDF2N2MwIC42LjQgMSAxIDFoN2MuNiAwIDEtLjQgMS0xVjFjMC0uNi0uNC0xLTEtMVptMCAxMUgxYy0uNiAwLTEgLjQtMSAxdjdjMCAuNi40IDEgMSAxaDdjLjYgMCAxLS40IDEtMXYtN2MwLS42LS40LTEtMS0xWk0xOSAwaC03Yy0uNiAwLTEgLjQtMSAxdjdjMCAuNi40IDEgMSAxaDdjLjYgMCAxLS40IDEtMVYxYzAtLjYtLjQtMS0xLTFabTAgMTFoLTdjLS42IDAtMSAuNC0xIDF2N2MwIC42LjQgMSAxIDFoN2MuNiAwIDEtLjQgMS0xdi03YzAtLjYtLjQtMS0xLTFaXCIgLz4sXG4gICdIb21lSWNvbicsXG4gICcwIDAgMjAgMjAnXG4pXG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgSWNvbkJhc2VQcm9wcyA9IHsgcGF0aDogUmVhY3ROb2RlOyBjbGFzc05hbWU/OiBzdHJpbmc7IHZpZXdCb3g6IHN0cmluZyB9XG5mdW5jdGlvbiBJY29uQmFzZSh7IHBhdGgsIGNsYXNzTmFtZSwgdmlld0JveCB9OiBJY29uQmFzZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgPlxuICAgICAge3BhdGh9XG4gICAgPC9zdmc+XG4gIClcbn1cblxudHlwZSBJY29uUHJvcHMgPSBQaWNrPEljb25CYXNlUHJvcHMsICdjbGFzc05hbWUnPlxuXG5leHBvcnQgY29uc3QgY3JlYXRlSWNvbiA9IChcbiAgcGF0aDogUmVhY3ROb2RlLFxuICBkaXNwbGF5TmFtZTogc3RyaW5nLFxuICB2aWV3Qm94OiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBJY29uID0gKHsgY2xhc3NOYW1lIH06IEljb25Qcm9wcykgPT4gKFxuICAgIDxJY29uQmFzZSBwYXRoPXtwYXRofSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD17dmlld0JveH0gLz5cbiAgKVxuICBJY29uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcbiAgcmV0dXJuIEljb25cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVJY29uIH0gZnJvbSAnfi9jb21wb25lbnRzL2ljb24nXG5cbmV4cG9ydCBjb25zdCBMb2dvSWNvbiA9IGNyZWF0ZUljb24oXG4gIDxwYXRoIGQ9XCJtMjYuNDYzLjQwOCAzLjIgNi40aC00LjhsLTMuMi02LjRoLTMuMmwzLjIgNi40aC00LjhsLTMuMi02LjRoLTMuMmwzLjIgNi40aC00LjhsLTMuMi02LjRoLTEuNmEzLjE4NiAzLjE4NiAwIDAgMC0zLjE4NCAzLjJsLS4wMTYgMTkuMmEzLjIgMy4yIDAgMCAwIDMuMiAzLjJoMjUuNmEzLjIgMy4yIDAgMCAwIDMuMi0zLjJWLjQwOGgtNi40WlwiIC8+LFxuICAnTG9nb0ljb24nLFxuICAnMCAwIDMzIDI3J1xuKVxuIiwgImltcG9ydCB7IGNyZWF0ZUljb24gfSBmcm9tICd+L2NvbXBvbmVudHMvaWNvbidcblxuZXhwb3J0IGNvbnN0IE1vdmllSWNvbiA9IGNyZWF0ZUljb24oXG4gIDxwYXRoIGQ9XCJNMTYuOTU2IDBIMy4wNDRBMy4wNDQgMy4wNDQgMCAwIDAgMCAzLjA0NHYxMy45MTJBMy4wNDQgMy4wNDQgMCAwIDAgMy4wNDQgMjBoMTMuOTEyQTMuMDQ0IDMuMDQ0IDAgMCAwIDIwIDE2Ljk1NlYzLjA0NEEzLjA0NCAzLjA0NCAwIDAgMCAxNi45NTYgMFpNNCA5SDJWN2gydjJabS0yIDJoMnYySDJ2LTJabTE2LTJoLTJWN2gydjJabS0yIDJoMnYyaC0ydi0yWm0yLTguMjZWNGgtMlYyaDEuMjZhLjc0Ljc0IDAgMCAxIC43NC43NFpNMi43NCAySDR2MkgyVjIuNzRBLjc0Ljc0IDAgMCAxIDIuNzQgMlpNMiAxNy4yNlYxNmgydjJIMi43NGEuNzQuNzQgMCAwIDEtLjc0LS43NFptMTYgMGEuNzQuNzQgMCAwIDEtLjc0Ljc0SDE2di0yaDJ2MS4yNlpcIiAvPixcbiAgJ01vdmllSWNvbicsXG4gICcwIDAgMjAgMjAnXG4pXG4iLCAiaW1wb3J0IHsgY3JlYXRlSWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9pY29uJ1xuXG5leHBvcnQgY29uc3QgVFZTZXJpZXNJY29uID0gY3JlYXRlSWNvbihcbiAgPHBhdGggZD1cIk0yMCA0LjQ4MUg5LjA4bDIuNy0zLjI3OEwxMC4yMiAwIDcgMy45MDkgMy43OC4wMjkgMi4yMiAxLjIwM2wyLjcgMy4yNzhIMFYyMGgyMFY0LjQ4MVptLTggMTMuNThIMlY2LjQyaDEwdjExLjY0Wm01LTMuODhoLTJ2LTEuOTRoMnYxLjk0Wm0wLTMuODhoLTJWOC4zNmgydjEuOTRaXCIgLz4sXG4gICdUVlNlcmllc0ljb24nLFxuICAnMCAwIDIwIDIwJ1xuKVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXJlZHVuZGFudC1yb2xlcyAqL1xuaW1wb3J0IHsgSG9tZUljb24sIE1vdmllSWNvbiwgVFZTZXJpZXNJY29uIH0gZnJvbSAnLi4vaWNvbnMnXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBOYXZMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmltYXJ5LW5hdmlnYXRpb24uY3NzJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG5cbnR5cGUgUHJvcHMgPSB7fVxuZXhwb3J0IGZ1bmN0aW9uIFByaW1hcnlOYXZpZ2F0aW9uKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInByaW1hcnktbmF2aWdhdGlvblwiPlxuICAgICAgPHVsIHJvbGU9XCJsaXN0XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cInJlY29tbWVuZGVkXCI+XG4gICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwibmF2LWljb25cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIm1vdmllXCI+XG4gICAgICAgICAgICA8TW92aWVJY29uIGNsYXNzTmFtZT1cIm5hdi1pY29uXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPk1vdmllczwvc3Bhbj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cInR2LXNlcmllc1wiPlxuICAgICAgICAgICAgPFRWU2VyaWVzSWNvbiBjbGFzc05hbWU9XCJuYXYtaWNvblwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5UViBTZXJpZXM8L3NwYW4+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IEhlYWRpbmcsIGxpbmtzIGFzIGhlYWRpbmdMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9oZWFkaW5nJ1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIGpzb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1lZGlhQ2FyZCwgbGlua3MgYXMgbWVkaWFDYXJkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWVkaWEtY2FyZCdcbmltcG9ydCB7IE1lZGlhR3JpZCwgbGlua3MgYXMgbWVkaWFHcmlkTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWVkaWEtZ3JpZCdcblxuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICd+L21lZGlhJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB0cmVuZGluZzogTWVkaWFbXVxuICByZWNvbW1lbmRlZDogTWVkaWFbXVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIC4uLmhlYWRpbmdMaW5rcygpLFxuICAuLi5tZWRpYUNhcmRMaW5rcygpLFxuICAuLi5tZWRpYUdyaWRMaW5rcygpLFxuXVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0TWVkaWEgPSB7XG4gICAgaWQ6IHRydWUsXG4gICAgdGl0bGU6IHRydWUsXG4gICAgeWVhcjogdHJ1ZSxcbiAgICByYXRpbmc6IHRydWUsXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHNlbGVjdDogeyBkaXNwbGF5OiB0cnVlIH0sXG4gICAgfSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0IHJlY29tbWVuZGVkUXVlcnkgPSBkYi5tZWRpYS5maW5kTWFueSh7XG4gICAgdGFrZTogMjAsXG4gICAgc2VsZWN0OiBzZWxlY3RNZWRpYSxcbiAgfSlcbiAgY29uc3QgdHJlbmRpbmdRdWVyeSA9IGRiLm1lZGlhLmZpbmRNYW55KHtcbiAgICB0YWtlOiAyMCxcbiAgICB3aGVyZTogeyBpc1RyZW5kaW5nOiB0cnVlIH0sXG4gICAgc2VsZWN0OiBzZWxlY3RNZWRpYSxcbiAgfSlcblxuICBjb25zdCBbcmVjb21tZW5kZWQsIHRyZW5kaW5nXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICByZWNvbW1lbmRlZFF1ZXJ5LFxuICAgIHRyZW5kaW5nUXVlcnksXG4gIF0pXG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICB0cmVuZGluZzogdHJlbmRpbmcubWFwKChpdGVtKSA9PiAoe1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LmRpc3BsYXksXG4gICAgICBpbWFnZVNsdWc6IGl0ZW0uaW1hZ2UsXG4gICAgfSkpLFxuICAgIHJlY29tbWVuZGVkOiByZWNvbW1lbmRlZC5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkuZGlzcGxheSxcbiAgICAgIGltYWdlU2x1ZzogaXRlbS5pbWFnZSxcbiAgICB9KSksXG4gIH1cbiAgcmV0dXJuIGpzb24oZGF0YSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb21tZW5kZWQoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkaW5nIGxldmVsPXsyfSBzaXplPVwibFwiPlxuICAgICAgICBUcmVuZGluZ1xuICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICA8TWVkaWFHcmlkPlxuICAgICAgICB7ZGF0YS50cmVuZGluZy5tYXAoKG1lZGlhSXRlbSkgPT4gKFxuICAgICAgICAgIDxNZWRpYUNhcmRcbiAgICAgICAgICAgIGtleT17bWVkaWFJdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e21lZGlhSXRlbS50aXRsZX1cbiAgICAgICAgICAgIHllYXI9e21lZGlhSXRlbS55ZWFyfVxuICAgICAgICAgICAgY2F0ZWdvcnk9e21lZGlhSXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgIHJhdGluZz17bWVkaWFJdGVtLnJhdGluZ31cbiAgICAgICAgICAgIGltYWdlU2x1Zz17bWVkaWFJdGVtLmltYWdlU2x1Z31cbiAgICAgICAgICAgIGlzVHJlbmRpbmc9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01lZGlhR3JpZD5cblxuICAgICAgPEhlYWRpbmcgbGV2ZWw9ezJ9IHNpemU9XCJsXCI+XG4gICAgICAgIFJlY29tbWVuZGVkIGZvciB5b3VcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxNZWRpYUdyaWQ+XG4gICAgICAgIHtkYXRhLnJlY29tbWVuZGVkLm1hcCgobWVkaWFJdGVtKSA9PiAoXG4gICAgICAgICAgPE1lZGlhQ2FyZFxuICAgICAgICAgICAga2V5PXttZWRpYUl0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17bWVkaWFJdGVtLnRpdGxlfVxuICAgICAgICAgICAgeWVhcj17bWVkaWFJdGVtLnllYXJ9XG4gICAgICAgICAgICBjYXRlZ29yeT17bWVkaWFJdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgcmF0aW5nPXttZWRpYUl0ZW0ucmF0aW5nfVxuICAgICAgICAgICAgaW1hZ2VTbHVnPXttZWRpYUl0ZW0uaW1hZ2VTbHVnfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9NZWRpYUdyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBFbGVtZW50VHlwZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCwgeyBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXVxuXG50eXBlIFByb3BzID0ge1xuICBsZXZlbDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2XG4gIHNpemU6ICdsJyB8ICdtJyB8ICdzJ1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IGNvbXBvbmVudE1hcDogUmVjb3JkPFByb3BzWydsZXZlbCddLCBFbGVtZW50VHlwZT4gPSB7XG4gIDE6ICdoMScsXG4gIDI6ICdoMicsXG4gIDM6ICdoMycsXG4gIDQ6ICdoNCcsXG4gIDU6ICdoNScsXG4gIDY6ICdoNicsXG59XG5cbmNvbnN0IHNpemVDbGFzc2VzTWFwOiBSZWNvcmQ8UHJvcHNbJ3NpemUnXSwgQ2xhc3NWYWx1ZT4gPSB7XG4gIGw6IFsnZm9udC1zaXplLTUwMCcsICdmb250LXdlaWdodC1saWdodCddLFxuICBtOiBbJ2ZvbnQtc2l6ZS00MDAnLCAnZm9udC13ZWlnaHQtbWVkaXVtJ10sXG4gIHM6IFsnZm9udC1zaXplLTMwMCcsICdmb250LXdlaWdodC1tZWRpdW0nXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRpbmcoeyBsZXZlbCwgc2l6ZSwgY2hpbGRyZW4gfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudE1hcFtsZXZlbF1cbiAgY29uc3Qgc2l6ZUNsYXNzZXMgPSBzaXplQ2xhc3Nlc01hcFtzaXplXVxuICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChzaXplQ2xhc3NlcylcblxuICByZXR1cm4gPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntjaGlsZHJlbn08L0NvbXBvbmVudD5cbn1cbiIsICJpbXBvcnQgeyBCb2R5VGV4dCB9IGZyb20gJ34vY29tcG9uZW50cy9ib2R5LXRleHQnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnfi9jb21wb25lbnRzL2hlYWRpbmcnXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZWRpYS1jYXJkLmNzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICB5ZWFyOiBudW1iZXJcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICByYXRpbmc6IHN0cmluZ1xuICBpc1RyZW5kaW5nPzogYm9vbGVhblxuICBpbWFnZVNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIHtcbiAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICBocmVmOiBzdHlsZXMsXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBNZWRpYUNhcmQoe1xuICB0aXRsZSxcbiAgeWVhcixcbiAgY2F0ZWdvcnksXG4gIHJhdGluZyxcbiAgaW1hZ2VTbHVnLFxuICBpc1RyZW5kaW5nID0gZmFsc2UsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZVxuICAgICAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZFwiXG4gICAgICB7Li4uKGlzVHJlbmRpbmcgPyB7ICdkYXRhLXRyZW5kaW5nJzogdHJ1ZSB9IDoge30pfVxuICAgID5cbiAgICAgIDxNZWRpYUltYWdlIGltYWdlU2x1Zz17aW1hZ2VTbHVnfSBpc1RyZW5kaW5nPXtpc1RyZW5kaW5nfSAvPlxuICAgICAgPE1lZGlhTWV0YVxuICAgICAgICB5ZWFyPXt5ZWFyfVxuICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgIHJhdGluZz17cmF0aW5nfVxuICAgICAgICBzaXplPXtpc1RyZW5kaW5nID8gJ20nIDogJ3MnfVxuICAgICAgLz5cbiAgICAgIDxIZWFkaW5nIGxldmVsPXszfSBzaXplPXtpc1RyZW5kaW5nID8gJ20nIDogJ3MnfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9IZWFkaW5nPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG50eXBlIE1lZGlhTWV0YVByb3BzID0ge1xuICB5ZWFyOiBudW1iZXJcbiAgY2F0ZWdvcnk6IHN0cmluZyB8IFJlYWN0Tm9kZVxuICByYXRpbmc6IHN0cmluZ1xuICBzaXplOiAnbScgfCAncydcbn1cbmZ1bmN0aW9uIE1lZGlhTWV0YSh7XG4gIHllYXIsXG4gIGNhdGVnb3J5LFxuICByYXRpbmcsXG4gIHNpemUsXG59OiBNZWRpYU1ldGFQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8ZGw+XG4gICAgICA8ZHQgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+WWVhciByZWxlYXNlZDwvZHQ+XG4gICAgICA8Qm9keVRleHQgY29tcG9uZW50PVwiZGRcIiBzaXplPXtzaXplfT5cbiAgICAgICAge3llYXJ9XG4gICAgICA8L0JvZHlUZXh0PlxuICAgICAgPGR0IGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkNhdGVnb3J5PC9kdD5cbiAgICAgIDxCb2R5VGV4dCBjb21wb25lbnQ9XCJkZFwiIHNpemU9e3NpemV9PlxuICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICA8L0JvZHlUZXh0PlxuICAgICAgPGR0IGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkFnZSByYXRpbmc8L2R0PlxuICAgICAgPEJvZHlUZXh0IGNvbXBvbmVudD1cImRkXCIgc2l6ZT17c2l6ZX0+XG4gICAgICAgIHtyYXRpbmd9XG4gICAgICA8L0JvZHlUZXh0PlxuICAgIDwvZGw+XG4gIClcbn1cblxudHlwZSBNZWRpYUltYWdlUHJvcHMgPSB7XG4gIGltYWdlU2x1Zzogc3RyaW5nXG4gIGlzVHJlbmRpbmc6IGJvb2xlYW5cbn1cbmZ1bmN0aW9uIE1lZGlhSW1hZ2UoeyBpbWFnZVNsdWcsIGlzVHJlbmRpbmcgfTogTWVkaWFJbWFnZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBpbWFnZVJvb3QgPSAnL2Fzc2V0cy90aHVtYm5haWxzJ1xuICBjb25zdCBpbWFnZUJhc2VQYXRoID0gYCR7aW1hZ2VSb290fS8ke2ltYWdlU2x1Z30vJHtcbiAgICBpc1RyZW5kaW5nID8gJ3RyZW5kaW5nJyA6ICdyZWd1bGFyJ1xuICB9YFxuXG4gIGNvbnN0IHRyZW5kaW5nU3JjU2V0ID0gYFxuICAgICR7aW1hZ2VCYXNlUGF0aH0vc21hbGwuanBnIDQ4MHcsXG4gICAgJHtpbWFnZUJhc2VQYXRofS9sYXJnZS5qcGcgOTQwd1xuICBgXG4gIGNvbnN0IHJlZ3VsYXJTcmNTZXQgPSBgXG4gICAgJHtpbWFnZUJhc2VQYXRofS9zbWFsbC5qcGcgMzI4dyxcbiAgICAke2ltYWdlQmFzZVBhdGh9L21lZGl1bS5qcGcgNDQwdyxcbiAgICAke2ltYWdlQmFzZVBhdGh9L2xhcmdlLmpwZyA1NjB3LFxuICBgXG4gIGNvbnN0IHNyY1NldCA9IGlzVHJlbmRpbmcgPyB0cmVuZGluZ1NyY1NldCA6IHJlZ3VsYXJTcmNTZXRcblxuICBjb25zdCB0cmVuZGluZ1NpemVzID0gYFxuICAgIChtYXgtd2lkdGg6IDM3NXB4KSAyNDBweCxcbiAgICA0NzBweFxuICBgXG4gIGNvbnN0IHJlZ3VsYXJTaXplcyA9IGBcbiAgICAobWF4LXdpZHRoOiAzNzVweCkgMTY0cHgsXG4gICAgKG1heC13aWR0aDogNzY4cHgpIDIyMHB4LFxuICAgIDI4MHB4XG4gIGBcbiAgY29uc3Qgc2l6ZXMgPSBpc1RyZW5kaW5nID8gdHJlbmRpbmdTaXplcyA6IHJlZ3VsYXJTaXplc1xuICBjb25zdCB3aWR0aCA9IGlzVHJlbmRpbmcgPyAyNDAgOiAxNjRcbiAgY29uc3QgaGVpZ2h0ID0gaXNUcmVuZGluZyA/IDE0MCA6IDExMFxuXG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjU2V0PXtzcmNTZXR9XG4gICAgICBzaXplcz17c2l6ZXN9XG4gICAgICBzcmM9e2Ake2ltYWdlQmFzZVBhdGh9L3NtYWxsLmpwZ2B9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgLz5cbiAgKVxufVxuIiwgImltcG9ydCB7IEVsZW1lbnRUeXBlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4LCB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4J1xuXG50eXBlIFByb3BzID0geyBjaGlsZHJlbjogUmVhY3ROb2RlOyBzaXplOiAnbScgfCAncyc7IGNvbXBvbmVudD86IEVsZW1lbnRUeXBlIH1cblxuY29uc3Qgc2l6ZUNsYXNzTWFwOiBSZWNvcmQ8UHJvcHNbJ3NpemUnXSwgQ2xhc3NWYWx1ZT4gPSB7XG4gIG06ICdmb250LXNpemUtMjAwJyxcbiAgczogWydmb250LXNpemUtMTAwJywgJ2NvbG9yLWdyYXktNDAwLTc1cGMnXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvZHlUZXh0KHtcbiAgc2l6ZSxcbiAgY29tcG9uZW50OiBDb21wb25lbnQgPSAncCcsXG4gIGNoaWxkcmVuLFxufTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHNpemVDbGFzc2VzID0gc2l6ZUNsYXNzTWFwW3NpemVdXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KHNpemVDbGFzc2VzKVxuICByZXR1cm4gPENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntjaGlsZHJlbn08L0NvbXBvbmVudD5cbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZWRpYS1ncmlkLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG50eXBlIFByb3BzID0geyBjaGlsZHJlbjogUmVhY3ROb2RlIH1cbmV4cG9ydCBmdW5jdGlvbiBNZWRpYUdyaWQoeyBjaGlsZHJlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtZ3JpZFwiPntjaGlsZHJlbn08L2Rpdj5cbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxubGV0IGRiOiBQcmlzbWFDbGllbnRcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBkYi4kY29ubmVjdCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpXG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYlxufVxuXG5leHBvcnQgeyBkYiB9XG4iLCAiaW1wb3J0IHsgSGVhZGluZywgbGlua3MgYXMgaGVhZGluZ0xpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL2hlYWRpbmcnXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTWVkaWFDYXJkLCBsaW5rcyBhcyBtZWRpYUNhcmRMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9tZWRpYS1jYXJkJ1xuaW1wb3J0IHsgTWVkaWFHcmlkLCBsaW5rcyBhcyBtZWRpYUdyaWRMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9tZWRpYS1ncmlkJ1xuXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJ34vbWVkaWEnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIGNhdGVnb3J5RGlzcGxheTogc3RyaW5nXG4gIG1lZGlhOiBNZWRpYVtdXG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgLi4ubWVkaWFDYXJkTGlua3MoKSxcbiAgLi4uaGVhZGluZ0xpbmtzKCksXG4gIC4uLm1lZGlhR3JpZExpbmtzKCksXG5dXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcGFyYW1zXG5cbiAgY29uc3QgZGJDYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IG5hbWU6IGNhdGVnb3J5IH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgbWVkaWE6IHtcbiAgICAgICAgdGFrZTogMjAsXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIHllYXI6IHRydWUsXG4gICAgICAgICAgcmF0aW5nOiB0cnVlLFxuICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHsgZGlzcGxheTogdHJ1ZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2U6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCFkYkNhdGVnb3J5KSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBDYW5ub3QgZmluZCBjYXRlZ29yeSB3aXRoIG5hbWUgJHtjYXRlZ29yeX1gLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBjYXRlZ29yeURpc3BsYXk6IGRiQ2F0ZWdvcnkuZGlzcGxheSxcbiAgICBtZWRpYTogZGJDYXRlZ29yeS5tZWRpYS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkuZGlzcGxheSxcbiAgICAgIGltYWdlU2x1ZzogaXRlbS5pbWFnZSxcbiAgICB9KSksXG4gIH1cbiAgcmV0dXJuIGpzb24oZGF0YSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0YWxvZ1R5cGUoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkaW5nIGxldmVsPXsyfSBzaXplPVwibVwiPlxuICAgICAgICB7ZGF0YS5jYXRlZ29yeURpc3BsYXl9XG4gICAgICA8L0hlYWRpbmc+XG5cbiAgICAgIDxNZWRpYUdyaWQ+XG4gICAgICAgIHtkYXRhLm1lZGlhLm1hcCgobWVkaWFJdGVtKSA9PiAoXG4gICAgICAgICAgPE1lZGlhQ2FyZFxuICAgICAgICAgICAga2V5PXttZWRpYUl0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17bWVkaWFJdGVtLnRpdGxlfVxuICAgICAgICAgICAgeWVhcj17bWVkaWFJdGVtLnllYXJ9XG4gICAgICAgICAgICBjYXRlZ29yeT17bWVkaWFJdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgcmF0aW5nPXttZWRpYUl0ZW0ucmF0aW5nfVxuICAgICAgICAgICAgaW1hZ2VTbHVnPXttZWRpYUl0ZW0uaW1hZ2VTbHVnfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9NZWRpYUdyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdCgnL2Jyb3dzZS9yZWNvbW1lbmRlZCcpXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMzUyMThjZTgnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVZYQVM2SENFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CWFVPRFhKUi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSFRWUk5ONDUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9icm93c2UnOnsnaWQnOidyb3V0ZXMvYnJvd3NlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jyb3dzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9icm93c2UtUzdGWExDU1cuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9icm93c2UvJGNhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2Jyb3dzZS8kY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3JvdXRlcy9icm93c2UnLCdwYXRoJzonOmNhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jyb3dzZS8kY2F0ZWdvcnktWTVPRUlMREQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhUMlRDMkdULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jyb3dzZS9yZWNvbW1lbmRlZCc6eydpZCc6J3JvdXRlcy9icm93c2UvcmVjb21tZW5kZWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9icm93c2UnLCdwYXRoJzoncmVjb21tZW5kZWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYnJvd3NlL3JlY29tbWVuZGVkLVpWVkhTV082LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YVDJUQzJHVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1HNU9SUDJXWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTM1MjE4Q0U4LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtB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
