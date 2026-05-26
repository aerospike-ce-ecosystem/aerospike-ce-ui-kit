// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/icons/Icon.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var ICON_PATHS = {
  home: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
    /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
  ] }),
  search: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ jsx("path", { d: "m21 21-4.3-4.3" })
  ] }),
  settings: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
  ] }),
  menu: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
  ] }),
  bell: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
    /* @__PURE__ */ jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
  ] }),
  user: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  chevronRight: /* @__PURE__ */ jsx("polyline", { points: "9 18 15 12 9 6" }),
  chevronLeft: /* @__PURE__ */ jsx("polyline", { points: "15 18 9 12 15 6" }),
  chevronDown: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" }),
  chevronUp: /* @__PURE__ */ jsx("polyline", { points: "18 15 12 9 6 15" }),
  chevronsUpDown: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "7 15 12 20 17 15" }),
    /* @__PURE__ */ jsx("polyline", { points: "7 9 12 4 17 9" })
  ] }),
  plus: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }),
  close: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] }),
  check: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }),
  more: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "12", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "19", cy: "12", r: "1.5" })
  ] }),
  moreV: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "19", r: "1.5" })
  ] }),
  filter: /* @__PURE__ */ jsx("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }),
  download: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }),
  upload: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ jsx("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] }),
  edit: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
    /* @__PURE__ */ jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  trash: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "3 6 5 6 21 6" }),
    /* @__PURE__ */ jsx("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    /* @__PURE__ */ jsx("path", { d: "M10 11v6" }),
    /* @__PURE__ */ jsx("path", { d: "M14 11v6" })
  ] }),
  copy: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
  ] }),
  external: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  calendar: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  clock: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("polyline", { points: "12 7 12 12 15 14" })
  ] }),
  mail: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
    /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
  ] }),
  alert: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] }),
  info: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] }),
  checkCircle: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M21 11.08V12a9 9 0 1 1-5.34-8.23" }),
    /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
  ] }),
  xCircle: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
    /* @__PURE__ */ jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
  ] }),
  arrowUp: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "19", x2: "12", y2: "5" }),
    /* @__PURE__ */ jsx("polyline", { points: "5 12 12 5 19 12" })
  ] }),
  arrowDown: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ jsx("polyline", { points: "19 12 12 19 5 12" })
  ] }),
  trendUp: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
    /* @__PURE__ */ jsx("polyline", { points: "17 6 23 6 23 12" })
  ] }),
  trendDown: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "23 18 13.5 8.5 8.5 13.5 1 6" }),
    /* @__PURE__ */ jsx("polyline", { points: "17 18 23 18 23 12" })
  ] }),
  dashboard: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "7", height: "9", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "3", width: "7", height: "5", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "12", width: "7", height: "9", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "16", width: "7", height: "5", rx: "1.5" })
  ] }),
  chart: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "20", x2: "6", y2: "14" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "20", x2: "21", y2: "20" })
  ] }),
  pie: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
    /* @__PURE__ */ jsx("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
  ] }),
  folder: /* @__PURE__ */ jsx("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }),
  package: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }),
    /* @__PURE__ */ jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
    /* @__PURE__ */ jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
  ] }),
  shield: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  globe: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ jsx("path", { d: "M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" })
  ] }),
  star: /* @__PURE__ */ jsx("polygon", { points: "12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" }),
  heart: /* @__PURE__ */ jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }),
  zap: /* @__PURE__ */ jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }),
  refresh: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "23 4 23 10 17 10" }),
    /* @__PURE__ */ jsx("polyline", { points: "1 20 1 14 7 14" }),
    /* @__PURE__ */ jsx("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
  ] }),
  link: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
  ] }),
  paperclip: /* @__PURE__ */ jsx("path", { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }),
  send: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
    /* @__PURE__ */ jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
  ] }),
  eye: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  eyeOff: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
    /* @__PURE__ */ jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
  ] }),
  sparkle: /* @__PURE__ */ jsx("path", { d: "M12 2 L13.5 9 L20.5 10.5 L13.5 12 L12 19 L10.5 12 L3.5 10.5 L10.5 9 Z" }),
  sun: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" })
  ] }),
  moon: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }),
  fileText: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
  ] }),
  uploadCloud: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 16 12 12 8 16" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
    /* @__PURE__ */ jsx("path", { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }),
    /* @__PURE__ */ jsx("polyline", { points: "16 16 12 12 8 16" })
  ] }),
  layers: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
    /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
  ] }),
  database: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    /* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ] }),
  command: /* @__PURE__ */ jsx("path", { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }),
  helpCircle: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }),
  logOut: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ jsx("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] }),
  building: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M9 22v-4h6v4" }),
    /* @__PURE__ */ jsx("path", { d: "M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" })
  ] }),
  creditCard: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "2", y1: "10", x2: "22", y2: "10" })
  ] }),
  shoppingCart: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "21", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "20", cy: "21", r: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
  ] }),
  activity: /* @__PURE__ */ jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }),
  hash: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "3", x2: "14", y2: "21" })
  ] }),
  code: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
  ] }),
  gitBranch: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "3", x2: "6", y2: "15" }),
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
  ] })
};
function Icon({ name, size = 20, fill = false, style, className }) {
  const path = ICON_PATHS[name];
  if (!path) {
    return /* @__PURE__ */ jsx("span", { style: { width: size, height: size, display: "inline-block", ...style } });
  }
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: fill ? "currentColor" : "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0, ...style },
      className,
      children: path
    }
  );
}

// src/components/AppShell.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function AppShell({
  theme = "light",
  density = "comfortable",
  sidebar = "expanded",
  primaryColor,
  className,
  children
}) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn("app", className),
      "data-app": "ace",
      "data-theme": theme,
      "data-density": density,
      "data-sidebar": sidebar,
      style: primaryColor ? { ["--primary-50"]: primaryColor } : void 0,
      children
    }
  );
}

// src/components/Sidebar.tsx
import React from "react";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Sidebar({ brand, workspaceSwitcher, groups, foot, className }) {
  return /* @__PURE__ */ jsxs2("aside", { className: cn("sidebar", className), children: [
    brand && /* @__PURE__ */ jsx3("div", { className: "sidebar-brand", children: brand }),
    workspaceSwitcher,
    /* @__PURE__ */ jsx3("nav", { className: "sidebar-nav", children: groups.map((g, gi) => /* @__PURE__ */ jsxs2(React.Fragment, { children: [
      g.title && /* @__PURE__ */ jsxs2("div", { className: "nav-section", children: [
        g.title,
        g.rightAdornment
      ] }),
      g.items.map((it) => /* @__PURE__ */ jsxs2(
        "a",
        {
          href: it.href ?? "#",
          className: cn("nav-item", it.active && "is-active"),
          onClick: (e) => {
            if (it.onClick) {
              e.preventDefault();
              it.onClick();
            }
          },
          children: [
            it.icon && /* @__PURE__ */ jsx3(Icon, { name: it.icon, size: 16 }),
            /* @__PURE__ */ jsx3("span", { className: "lbl", children: it.label }),
            it.badge != null && /* @__PURE__ */ jsx3("span", { className: cn("count", it.badgeWarn && "is-warn"), children: it.badge })
          ]
        },
        it.id
      ))
    ] }, gi)) }),
    foot && /* @__PURE__ */ jsx3("div", { className: "sidebar-foot", children: foot })
  ] });
}
function SidebarBrand({ mark, title, subtitle }) {
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    mark && /* @__PURE__ */ jsx3("span", { className: "mark", children: mark }),
    /* @__PURE__ */ jsxs2("div", { className: "wm", children: [
      title,
      subtitle && /* @__PURE__ */ jsx3("small", { children: subtitle })
    ] })
  ] });
}

// src/components/TopBar.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function TopBar({
  searchPlaceholder = "\uAC80\uC0C9\uD558\uAC70\uB098 \uBA85\uB839 \uC2E4\uD589",
  onSearchClick,
  searchKbd = "\u2318K",
  showSearch = true,
  className,
  children
}) {
  return /* @__PURE__ */ jsxs3("header", { className: cn("topbar", className), children: [
    showSearch && /* @__PURE__ */ jsxs3("div", { className: "topbar-search", children: [
      /* @__PURE__ */ jsx4(Icon, { name: "search", size: 15 }),
      /* @__PURE__ */ jsx4("input", { placeholder: searchPlaceholder, onClick: onSearchClick, readOnly: true }),
      searchKbd && /* @__PURE__ */ jsx4("kbd", { children: searchKbd })
    ] }),
    /* @__PURE__ */ jsx4("span", { style: { flex: 1 } }),
    children
  ] });
}
function CostPill({ label = "\uC624\uB298 \uBE44\uC6A9", value, className }) {
  return /* @__PURE__ */ jsxs3("span", { className: cn("cost-pill", className), children: [
    /* @__PURE__ */ jsx4("span", { className: "lbl", children: label }),
    /* @__PURE__ */ jsx4("span", { className: "val", children: value })
  ] });
}

// src/components/StatusDot.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function StatusDot({ status, className, ...rest }) {
  return /* @__PURE__ */ jsx5(
    "span",
    {
      className: cn("status-dot", `is-${status}`, className),
      "aria-label": rest["aria-label"] ?? status
    }
  );
}
function StatusLabel({ status, children, muted, className }) {
  return /* @__PURE__ */ jsxs4("span", { className: cn("status-label", muted && "is-muted", className), children: [
    /* @__PURE__ */ jsx5(StatusDot, { status }),
    children ?? status
  ] });
}

// src/components/StatusBar.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function StatusBar({
  connected = true,
  connectedLabel = "connected",
  disconnectedLabel = "disconnected",
  queueDepth,
  services,
  version,
  docsHref,
  className,
  children
}) {
  return /* @__PURE__ */ jsxs5("div", { className: cn("statusbar", className), children: [
    /* @__PURE__ */ jsxs5("span", { className: "seg", children: [
      /* @__PURE__ */ jsx6(StatusDot, { status: connected ? "succeeded" : "failed" }),
      /* @__PURE__ */ jsx6("span", { children: connected ? connectedLabel : disconnectedLabel })
    ] }),
    queueDepth != null && /* @__PURE__ */ jsxs5("span", { className: "seg", children: [
      "queue ",
      /* @__PURE__ */ jsx6("b", { children: queueDepth })
    ] }),
    services && /* @__PURE__ */ jsx6(HealthDots, { services }),
    children,
    /* @__PURE__ */ jsx6("span", { style: { flex: 1 } }),
    version && /* @__PURE__ */ jsx6("span", { className: "seg", children: version }),
    docsHref && /* @__PURE__ */ jsx6("a", { className: "seg", href: docsHref, children: "\u2197 docs" })
  ] });
}
function HealthDots({ services, className }) {
  return /* @__PURE__ */ jsx6("span", { className: cn("seg", className), children: services.map((s) => /* @__PURE__ */ jsxs5(
    "span",
    {
      className: "tooltip-wrap",
      style: { display: "inline-flex", alignItems: "center", gap: 4 },
      children: [
        /* @__PURE__ */ jsx6(StatusDot, { status: s.status }),
        /* @__PURE__ */ jsx6(
          "span",
          {
            style: {
              fontSize: 10,
              color: s.status === "healthy" ? "var(--on-surface-variant)" : "var(--error-55)"
            },
            children: s.name
          }
        )
      ]
    },
    s.name
  )) });
}

// src/components/WorkspaceSwitcher.tsx
import { useState, useRef, useEffect } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function WorkspaceSwitcher({
  current,
  options,
  onSelect,
  onManage,
  onCreate,
  menuLabel = "\uC804\uD658\uD560 Workspace",
  className
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return /* @__PURE__ */ jsxs6("div", { ref, className: cn("ace-ws", className), children: [
    /* @__PURE__ */ jsxs6(
      "button",
      {
        type: "button",
        className: "ace-ws-trigger",
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx7("span", { className: "ace-ws-badge", style: { background: current.badgeColor }, children: current.badgeChar ?? current.name[0] }),
          /* @__PURE__ */ jsxs6("span", { className: "ace-ws-meta", children: [
            /* @__PURE__ */ jsx7("span", { className: "ace-ws-name", children: current.name }),
            current.subtitle && /* @__PURE__ */ jsx7("span", { className: "ace-ws-sub", children: current.subtitle })
          ] }),
          /* @__PURE__ */ jsx7(
            Icon,
            {
              name: "chevronsUpDown",
              size: 14,
              style: { color: "var(--on-surface-muted)", marginLeft: "auto" }
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs6("div", { className: "ace-ws-menu", children: [
      /* @__PURE__ */ jsx7("div", { className: "ace-ws-menu-label", children: menuLabel }),
      options.map((w) => /* @__PURE__ */ jsxs6(
        "button",
        {
          type: "button",
          className: cn("ace-ws-item", w.id === current.id && "is-current"),
          onClick: () => {
            onSelect?.(w.id);
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsx7("span", { className: "ace-ws-badge", style: { background: w.badgeColor }, children: w.badgeChar ?? w.name[0] }),
            /* @__PURE__ */ jsxs6(
              "span",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minWidth: 0,
                  gap: 1
                },
                children: [
                  /* @__PURE__ */ jsx7("span", { style: { fontWeight: 600, fontSize: 13, color: "var(--on-surface)" }, children: w.name }),
                  w.subtitle && /* @__PURE__ */ jsx7("span", { style: { fontSize: 11.5, color: "var(--on-surface-muted)" }, children: w.subtitle })
                ]
              }
            ),
            w.id === current.id && /* @__PURE__ */ jsx7(Icon, { name: "check", size: 14, style: { color: "var(--primary-50)" } })
          ]
        },
        w.id
      )),
      (onManage || onCreate) && /* @__PURE__ */ jsx7("div", { className: "ace-ws-menu-divider" }),
      onManage && /* @__PURE__ */ jsxs6(
        "button",
        {
          type: "button",
          className: "ace-ws-item",
          onClick: () => {
            onManage();
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsx7(
              "span",
              {
                className: "ace-ws-badge",
                style: {
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface-variant)"
                },
                children: /* @__PURE__ */ jsx7(Icon, { name: "settings", size: 13 })
              }
            ),
            /* @__PURE__ */ jsx7(
              "span",
              {
                style: {
                  flex: 1,
                  fontSize: 13,
                  color: "var(--on-surface-variant)",
                  fontWeight: 500
                },
                children: "Workspace \uAD00\uB9AC"
              }
            )
          ]
        }
      ),
      onCreate && /* @__PURE__ */ jsxs6(
        "button",
        {
          type: "button",
          className: "ace-ws-item",
          onClick: () => {
            onCreate();
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsx7(
              "span",
              {
                className: "ace-ws-badge",
                style: {
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface-variant)"
                },
                children: /* @__PURE__ */ jsx7(Icon, { name: "plus", size: 13 })
              }
            ),
            /* @__PURE__ */ jsx7(
              "span",
              {
                style: {
                  flex: 1,
                  fontSize: 13,
                  color: "var(--on-surface-variant)",
                  fontWeight: 500
                },
                children: "\uC0C8 Workspace \uB9CC\uB4E4\uAE30"
              }
            )
          ]
        }
      )
    ] })
  ] });
}

// src/components/PageHead.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function PageHead({ title, sub, className, children }) {
  return /* @__PURE__ */ jsxs7("div", { className: cn("ace-page-head", className), children: [
    /* @__PURE__ */ jsx8("div", { className: "lead", children: /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsx8("h1", { children: title }),
      sub && /* @__PURE__ */ jsx8("div", { className: "sub", children: sub })
    ] }) }),
    /* @__PURE__ */ jsx8("div", { className: "flex items-center gap-2", children })
  ] });
}

// src/components/Card.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function Card({ title, meta, action, flush, className, children }) {
  const hasHead = Boolean(title || meta || action);
  return /* @__PURE__ */ jsxs8("div", { className: cn("ace-card", className), children: [
    hasHead && /* @__PURE__ */ jsxs8("div", { className: "ace-card-head", children: [
      /* @__PURE__ */ jsx9("div", { children: title && /* @__PURE__ */ jsx9("div", { className: "title", children: title }) }),
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
        meta && /* @__PURE__ */ jsx9("span", { className: "meta", children: meta }),
        action
      ] })
    ] }),
    /* @__PURE__ */ jsx9("div", { className: cn("ace-card-body", flush && "flush"), children })
  ] });
}

// src/components/Banner.tsx
import { useState as useState2 } from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var DEFAULT_ICON = {
  info: "sparkle",
  warning: "alert",
  success: "checkCircle"
};
function Banner({
  tone = "info",
  icon,
  title,
  desc,
  actionLabel,
  onAction,
  onDismiss,
  dismissable = true,
  className
}) {
  const [open, setOpen] = useState2(true);
  if (!open) return null;
  return /* @__PURE__ */ jsxs9("div", { className: cn("ace-announce", `tone-${tone}`, className), role: "status", children: [
    /* @__PURE__ */ jsx10("span", { className: "ico", children: /* @__PURE__ */ jsx10(Icon, { name: icon ?? DEFAULT_ICON[tone], size: 16 }) }),
    /* @__PURE__ */ jsxs9("div", { className: "body", children: [
      title && /* @__PURE__ */ jsx10("div", { className: "title", children: title }),
      desc && /* @__PURE__ */ jsx10("div", { className: "desc", children: desc })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "actions", children: [
      actionLabel && /* @__PURE__ */ jsx10(
        "a",
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            onAction?.();
          },
          children: actionLabel
        }
      ),
      dismissable && /* @__PURE__ */ jsx10(
        "button",
        {
          type: "button",
          className: "btn btn-icon btn-sm",
          onClick: () => {
            setOpen(false);
            onDismiss?.();
          },
          "aria-label": "dismiss",
          children: /* @__PURE__ */ jsx10(Icon, { name: "close", size: 14 })
        }
      )
    ] })
  ] });
}

// src/components/KPI.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function KPI({ label, value, unit, delta, dir, hint, accent, onClick, className }) {
  const isLink = typeof onClick === "function";
  const Wrap = isLink ? "a" : "div";
  const linkProps = isLink ? {
    href: "#",
    onClick: (e) => {
      e.preventDefault();
      onClick?.();
    },
    style: { cursor: "pointer", textDecoration: "none" }
  } : {};
  return /* @__PURE__ */ jsxs10(Wrap, { className: cn("ace-kpi", accent && `is-${accent}`, className), ...linkProps, children: [
    /* @__PURE__ */ jsxs10("div", { className: "label", children: [
      label,
      accent === "amber" && /* @__PURE__ */ jsx11("span", { style: { color: "var(--accent-amber-500, #C99A3F)" }, children: /* @__PURE__ */ jsx11(Icon, { name: "alert", size: 12 }) })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "value", children: [
      value,
      unit && /* @__PURE__ */ jsx11("span", { className: "u", children: unit })
    ] }),
    delta != null && /* @__PURE__ */ jsxs10("div", { className: cn("delta", dir === "up" ? "up" : "down"), children: [
      /* @__PURE__ */ jsx11(Icon, { name: dir === "up" ? "arrowUp" : "arrowDown", size: 10 }),
      Math.abs(delta),
      Number.isInteger(delta) ? "%" : "pp",
      /* @__PURE__ */ jsx11("span", { className: "vs", children: "vs yesterday" })
    ] }),
    hint && /* @__PURE__ */ jsx11("div", { className: "hint", children: hint })
  ] });
}

// src/components/Empty.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function Empty({ icon = "folder", title, sub, action, className }) {
  return /* @__PURE__ */ jsxs11("div", { className: cn("empty", className), children: [
    /* @__PURE__ */ jsx12("span", { className: "ico", children: /* @__PURE__ */ jsx12(Icon, { name: icon, size: 24 }) }),
    /* @__PURE__ */ jsx12("div", { className: "ttl", children: title }),
    sub && /* @__PURE__ */ jsx12("div", { className: "sub", children: sub }),
    action && /* @__PURE__ */ jsx12("div", { style: { marginTop: 8 }, children: action })
  ] });
}

// src/components/Tabs.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function Tabs({ tabs, value, onChange, pill, className }) {
  return /* @__PURE__ */ jsx13("div", { className: cn(pill ? "tabs-pill" : "tabs", className), children: tabs.map((t) => /* @__PURE__ */ jsxs12(
    "button",
    {
      type: "button",
      className: cn("tab", value === t.value && "is-active"),
      onClick: () => onChange?.(t.value),
      children: [
        t.label,
        t.count != null && /* @__PURE__ */ jsx13("span", { style: { marginLeft: 6, fontSize: 11, opacity: 0.7 }, children: t.count })
      ]
    },
    t.value
  )) });
}

// src/components/Breadcrumb.tsx
import { Fragment as Fragment3 } from "react";
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function Breadcrumb({ items, className }) {
  return /* @__PURE__ */ jsx14("nav", { className: cn("breadcrumb", className), "aria-label": "breadcrumb", children: items.map((it, i) => {
    const isLast = i === items.length - 1;
    const current = it.current ?? isLast;
    const content = current ? /* @__PURE__ */ jsx14("span", { className: cn("current", it.mono && "mono"), children: it.label }) : it.href || it.onClick ? /* @__PURE__ */ jsx14(
      "a",
      {
        href: it.href ?? "#",
        onClick: (e) => {
          if (it.onClick) {
            e.preventDefault();
            it.onClick();
          }
        },
        className: cn(it.mono && "mono"),
        children: it.label
      }
    ) : /* @__PURE__ */ jsx14("span", { className: cn(it.mono && "mono"), children: it.label });
    return /* @__PURE__ */ jsxs13(Fragment3, { children: [
      content,
      !isLast && /* @__PURE__ */ jsx14("span", { className: "sep", children: "/" })
    ] }, i);
  }) });
}

// src/components/Table.tsx
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function Table({
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx15("div", { className: "table-wrap", children: /* @__PURE__ */ jsx15("table", { className: cn("table", className), ...rest, children }) });
}
function CellStack({ className, children }) {
  return /* @__PURE__ */ jsx15("div", { className: cn("cell-stack", className), children });
}
function CellMeta({ name, sub, className }) {
  return /* @__PURE__ */ jsxs14("div", { className: cn("cell-meta", className), children: [
    /* @__PURE__ */ jsx15("span", { className: "name", children: name }),
    sub && /* @__PURE__ */ jsx15("span", { className: "sub", children: sub })
  ] });
}

// src/components/Button.tsx
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function Button({
  variant = "primary",
  size,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}) {
  const iconSize = size === "sm" ? 14 : 16;
  return /* @__PURE__ */ jsxs15(
    "button",
    {
      className: cn("btn", `btn-${variant}`, size && size !== "md" && `btn-${size}`, className),
      ...rest,
      children: [
        leftIcon && /* @__PURE__ */ jsx16(Icon, { name: leftIcon, size: iconSize }),
        children,
        rightIcon && /* @__PURE__ */ jsx16(Icon, { name: rightIcon, size: iconSize })
      ]
    }
  );
}
function IconButton({ icon, size = "md", tooltip, className, ...rest }) {
  const iconSize = size === "sm" ? 16 : size === "lg" ? 20 : 18;
  const btn = /* @__PURE__ */ jsx16(
    "button",
    {
      className: cn("btn", "btn-icon", size !== "md" && `btn-${size}`, className),
      ...rest,
      children: /* @__PURE__ */ jsx16(Icon, { name: icon, size: iconSize })
    }
  );
  if (!tooltip) return btn;
  return /* @__PURE__ */ jsxs15("span", { className: "tooltip-wrap", children: [
    btn,
    /* @__PURE__ */ jsx16("span", { className: "tooltip", children: tooltip })
  ] });
}

// src/components/Badge.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function Badge({ tone = "default", dot, className, children }) {
  return /* @__PURE__ */ jsx17("span", { className: cn("badge", `badge-${tone}`, dot && "badge-dot", className), children });
}

// src/components/Chip.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
function Chip({ active, leftIcon, onClick, className, children }) {
  return /* @__PURE__ */ jsxs16(
    "button",
    {
      type: "button",
      className: cn("chip", active && "is-active", className),
      onClick,
      children: [
        leftIcon && /* @__PURE__ */ jsx18(Icon, { name: leftIcon, size: 14 }),
        children
      ]
    }
  );
}
function Tag({ removable, onRemove, className, children }) {
  return /* @__PURE__ */ jsxs16("span", { className: cn("tag", removable && "tag-removable", className), children: [
    children,
    removable && /* @__PURE__ */ jsx18("span", { className: "x", onClick: onRemove, children: /* @__PURE__ */ jsx18(Icon, { name: "close", size: 12 }) })
  ] });
}

// src/components/Avatar.tsx
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
function initialsFor(name) {
  if (!name) return "?";
  return name.split(/\s+/).map((s) => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function Avatar({ name, src, size = "md", color, className }) {
  const cls = cn("avatar", size !== "md" && `avatar-${size}`, className);
  if (src) {
    return /* @__PURE__ */ jsx19("span", { className: cls, children: /* @__PURE__ */ jsx19(
      "img",
      {
        src,
        alt: name ?? "",
        style: { width: "100%", height: "100%", objectFit: "cover" }
      }
    ) });
  }
  return /* @__PURE__ */ jsx19("span", { className: cls, style: color ? { background: color, color: "#fff" } : void 0, children: initialsFor(name) });
}
function AvatarStack({ users, max = 4, className }) {
  const shown = users.slice(0, max);
  const rest = users.length - shown.length;
  return /* @__PURE__ */ jsxs17("span", { className: cn("avatar-stack", className), children: [
    shown.map((u, i) => /* @__PURE__ */ jsx19(Avatar, { name: u.name, size: "sm", color: u.color }, i)),
    rest > 0 && /* @__PURE__ */ jsxs17(
      "span",
      {
        className: "avatar avatar-sm",
        style: { background: "var(--surface-container)", color: "var(--on-surface-variant)" },
        children: [
          "+",
          rest
        ]
      }
    )
  ] });
}

// src/components/TextInput.tsx
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
function TextInput({ label, hint, error, leftIcon, className, ...rest }) {
  const input = leftIcon ? /* @__PURE__ */ jsxs18("span", { className: "input-with-icon", children: [
    /* @__PURE__ */ jsx20(Icon, { name: leftIcon, size: 16 }),
    /* @__PURE__ */ jsx20("input", { className: cn("input", error && "is-error", className), ...rest })
  ] }) : /* @__PURE__ */ jsx20("input", { className: cn("input", error && "is-error", className), ...rest });
  return /* @__PURE__ */ jsxs18("div", { className: "input-group", children: [
    label && /* @__PURE__ */ jsx20("label", { className: "label", children: label }),
    input,
    (hint || error) && /* @__PURE__ */ jsx20("span", { className: cn("helper", error && "is-error"), children: error || hint })
  ] });
}
function Textarea({ label, hint, error, className, ...rest }) {
  return /* @__PURE__ */ jsxs18("div", { className: "input-group", children: [
    label && /* @__PURE__ */ jsx20("label", { className: "label", children: label }),
    /* @__PURE__ */ jsx20("textarea", { className: cn("textarea", error && "is-error", className), ...rest }),
    (hint || error) && /* @__PURE__ */ jsx20("span", { className: cn("helper", error && "is-error"), children: error || hint })
  ] });
}
function Select({ label, hint, error, options, className, ...rest }) {
  return /* @__PURE__ */ jsxs18("div", { className: "input-group", children: [
    label && /* @__PURE__ */ jsx20("label", { className: "label", children: label }),
    /* @__PURE__ */ jsx20("select", { className: cn("select", className), ...rest, children: options.map(
      (o) => typeof o === "string" ? /* @__PURE__ */ jsx20("option", { value: o, children: o }, o) : /* @__PURE__ */ jsx20("option", { value: o.value, children: o.label }, o.value)
    ) }),
    (hint || error) && /* @__PURE__ */ jsx20("span", { className: cn("helper", error && "is-error"), children: error || hint })
  ] });
}

// src/components/Toggle.tsx
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
function Toggle({ checked, onChange, ...rest }) {
  return /* @__PURE__ */ jsxs19("label", { className: "toggle", children: [
    /* @__PURE__ */ jsx21(
      "input",
      {
        type: "checkbox",
        checked,
        onChange: (e) => onChange?.(e.target.checked),
        ...rest
      }
    ),
    /* @__PURE__ */ jsx21("span", { className: "slider" })
  ] });
}
function Checkbox({ checked, onChange, label, ...rest }) {
  return /* @__PURE__ */ jsxs19("label", { className: "checkbox", children: [
    /* @__PURE__ */ jsx21(
      "input",
      {
        type: "checkbox",
        checked,
        onChange: (e) => onChange?.(e.target.checked),
        ...rest
      }
    ),
    /* @__PURE__ */ jsx21("span", { className: "box" }),
    label && /* @__PURE__ */ jsx21("span", { children: label })
  ] });
}
function Radio({ checked, onChange, name, value, label }) {
  return /* @__PURE__ */ jsxs19("label", { className: "radio", children: [
    /* @__PURE__ */ jsx21(
      "input",
      {
        type: "radio",
        checked,
        onChange: () => onChange?.(value),
        name,
        value
      }
    ),
    /* @__PURE__ */ jsx21("span", { className: "box" }),
    label && /* @__PURE__ */ jsx21("span", { children: label })
  ] });
}

// src/components/Sparkline.tsx
import { useId } from "react";
import { Fragment as Fragment4, jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
function Sparkline({
  data,
  color = "var(--primary-50)",
  w = 96,
  h = 28,
  fill = true
}) {
  const reactId = useId().replace(/:/g, "");
  if (!data.length) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => [
    i / Math.max(data.length - 1, 1) * w,
    h - (v - min) / range * (h - 4) - 2
  ]);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const fillD = fill ? `${d} L${w},${h} L0,${h} Z` : null;
  const gradId = `sg-${reactId}`;
  return /* @__PURE__ */ jsxs20("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, children: [
    fill && /* @__PURE__ */ jsxs20(Fragment4, { children: [
      /* @__PURE__ */ jsx22("defs", { children: /* @__PURE__ */ jsxs20("linearGradient", { id: gradId, x1: "0", x2: "0", y1: "0", y2: "1", children: [
        /* @__PURE__ */ jsx22("stop", { offset: "0%", stopColor: color, stopOpacity: "0.22" }),
        /* @__PURE__ */ jsx22("stop", { offset: "100%", stopColor: color, stopOpacity: "0" })
      ] }) }),
      /* @__PURE__ */ jsx22("path", { d: fillD, fill: `url(#${gradId})` })
    ] }),
    /* @__PURE__ */ jsx22(
      "path",
      {
        d,
        fill: "none",
        stroke: color,
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}

// src/components/Meter.tsx
import { jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
function Meter({
  label,
  current,
  cap,
  format = (v) => String(v),
  tone,
  unit,
  className
}) {
  const pct = Math.min(100, Math.round(current / cap * 100));
  const t = tone ?? (pct > 90 ? "is-danger" : pct > 70 ? "is-warn" : "");
  return /* @__PURE__ */ jsxs21("div", { className: cn("ace-meter", t, className), children: [
    /* @__PURE__ */ jsxs21("div", { className: "row", children: [
      /* @__PURE__ */ jsx23("span", { className: "lbl", children: label }),
      /* @__PURE__ */ jsxs21("span", { className: "val", children: [
        format(current),
        unit && /* @__PURE__ */ jsx23("span", { style: { color: "var(--on-surface-muted)" }, children: unit }),
        " ",
        /* @__PURE__ */ jsxs21("span", { style: { color: "var(--on-surface-muted)" }, children: [
          "/ ",
          format(cap),
          unit ?? ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx23("div", { className: "bar", children: /* @__PURE__ */ jsx23("span", { style: { width: `${pct}%` } }) })
  ] });
}

// src/components/Charts.tsx
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
function LineChart({ series, w = 720, h = 240, labels, yTicks = 4 }) {
  const padL = 36;
  const padB = 28;
  const padT = 12;
  const padR = 12;
  const cw = w - padL - padR;
  const ch = h - padT - padB;
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all, 0);
  const niceMax = Math.ceil(max / 100) * 100 || 10;
  const min = 0;
  const xs = (i, n) => padL + i / Math.max(n - 1, 1) * cw;
  const ys = (v) => padT + ch - (v - min) / (niceMax - min) * ch;
  const colors = ["var(--primary-50)", "var(--accent-emerald-50, #00A392)", "var(--bookmark-50, #FFAE17)"];
  return /* @__PURE__ */ jsxs22("svg", { width: "100%", viewBox: `0 0 ${w} ${h}`, style: { display: "block" }, children: [
    Array.from({ length: yTicks + 1 }).map((_, i) => {
      const v = niceMax / yTicks * (yTicks - i);
      const y = padT + ch / yTicks * i;
      return /* @__PURE__ */ jsxs22("g", { children: [
        /* @__PURE__ */ jsx24(
          "line",
          {
            x1: padL,
            x2: w - padR,
            y1: y,
            y2: y,
            stroke: "var(--border-subtle)",
            strokeDasharray: i === yTicks ? "" : "3 3"
          }
        ),
        /* @__PURE__ */ jsx24(
          "text",
          {
            x: padL - 6,
            y: y + 3,
            fontSize: "10",
            fill: "var(--on-surface-muted)",
            textAnchor: "end",
            fontFamily: "var(--font-mono)",
            children: Math.round(v).toLocaleString()
          }
        )
      ] }, i);
    }),
    labels?.map((l, i) => /* @__PURE__ */ jsx24(
      "text",
      {
        x: xs(i, labels.length),
        y: h - 8,
        fontSize: "10",
        fill: "var(--on-surface-muted)",
        textAnchor: "middle",
        children: l
      },
      i
    )),
    series.map((s, si) => {
      const c = s.color || colors[si % colors.length];
      const id = `lc-${si}`;
      const d = s.data.map(
        (v, i) => `${i === 0 ? "M" : "L"}${xs(i, s.data.length).toFixed(1)},${ys(v).toFixed(1)}`
      ).join(" ");
      const fillD = s.data.length > 0 ? `${d} L${xs(s.data.length - 1, s.data.length).toFixed(1)},${padT + ch} L${padL},${padT + ch} Z` : "";
      return /* @__PURE__ */ jsxs22("g", { children: [
        /* @__PURE__ */ jsx24("defs", { children: /* @__PURE__ */ jsxs22("linearGradient", { id, x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsx24("stop", { offset: "0%", stopColor: c, stopOpacity: si === 0 ? "0.18" : "0.0" }),
          /* @__PURE__ */ jsx24("stop", { offset: "100%", stopColor: c, stopOpacity: "0" })
        ] }) }),
        si === 0 && fillD && /* @__PURE__ */ jsx24("path", { d: fillD, fill: `url(#${id})` }),
        /* @__PURE__ */ jsx24(
          "path",
          {
            d,
            fill: "none",
            stroke: c,
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        s.data.map((v, i) => /* @__PURE__ */ jsx24(
          "circle",
          {
            cx: xs(i, s.data.length),
            cy: ys(v),
            r: "2.5",
            fill: "var(--surface)",
            stroke: c,
            strokeWidth: "1.6"
          },
          i
        ))
      ] }, si);
    })
  ] });
}
function BarChart({
  data,
  labels,
  w = 720,
  h = 220,
  color = "var(--primary-50)"
}) {
  const padL = 36;
  const padB = 28;
  const padT = 12;
  const padR = 12;
  const cw = w - padL - padR;
  const ch = h - padT - padB;
  const max = Math.max(...data, 0);
  const niceMax = Math.ceil(max / 100) * 100 || 10;
  const bw = cw / Math.max(data.length, 1) * 0.6;
  const gap = cw / Math.max(data.length, 1) * 0.4;
  return /* @__PURE__ */ jsxs22("svg", { width: "100%", viewBox: `0 0 ${w} ${h}`, style: { display: "block" }, children: [
    Array.from({ length: 5 }).map((_, i) => {
      const y = padT + ch / 4 * i;
      const v = niceMax / 4 * (4 - i);
      return /* @__PURE__ */ jsxs22("g", { children: [
        /* @__PURE__ */ jsx24(
          "line",
          {
            x1: padL,
            x2: w - padR,
            y1: y,
            y2: y,
            stroke: "var(--border-subtle)",
            strokeDasharray: i === 4 ? "" : "3 3"
          }
        ),
        /* @__PURE__ */ jsx24(
          "text",
          {
            x: padL - 6,
            y: y + 3,
            fontSize: "10",
            fill: "var(--on-surface-muted)",
            textAnchor: "end",
            fontFamily: "var(--font-mono)",
            children: Math.round(v).toLocaleString()
          }
        )
      ] }, i);
    }),
    data.map((v, i) => {
      const x = padL + i * (cw / data.length) + gap / 2;
      const bh = v / niceMax * ch;
      const y = padT + ch - bh;
      return /* @__PURE__ */ jsxs22("g", { children: [
        /* @__PURE__ */ jsx24("rect", { x, y, width: bw, height: bh, fill: color, rx: "4" }),
        labels && /* @__PURE__ */ jsx24(
          "text",
          {
            x: x + bw / 2,
            y: h - 8,
            fontSize: "10",
            fill: "var(--on-surface-muted)",
            textAnchor: "middle",
            children: labels[i]
          }
        )
      ] }, i);
    })
  ] });
}
function Donut({ segments, size = 160, thickness = 22 }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  let acc = 0;
  const arcs = segments.map((s, i) => {
    const start = acc / total * Math.PI * 2 - Math.PI / 2;
    acc += s.value;
    const end = acc / total * Math.PI * 2 - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    return /* @__PURE__ */ jsx24(
      "path",
      {
        d: `M${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)}`,
        fill: "none",
        stroke: s.color,
        strokeWidth: thickness,
        strokeLinecap: "butt"
      },
      i
    );
  });
  return /* @__PURE__ */ jsxs22("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, children: [
    /* @__PURE__ */ jsx24(
      "circle",
      {
        cx,
        cy,
        r,
        fill: "none",
        stroke: "var(--surface-container)",
        strokeWidth: thickness
      }
    ),
    arcs
  ] });
}

// src/components/Dialog.tsx
import * as RadixDialog from "@radix-ui/react-dialog";
import { jsx as jsx25, jsxs as jsxs23 } from "react/jsx-runtime";
function Dialog({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx25(RadixDialog.Root, { open, onOpenChange, children });
}
var DialogTrigger = RadixDialog.Trigger;
function DialogContent({
  title,
  description,
  width = 480,
  showClose = true,
  className,
  children,
  onPointerDownOutside,
  onInteractOutside
}) {
  return /* @__PURE__ */ jsxs23(RadixDialog.Portal, { children: [
    /* @__PURE__ */ jsx25(RadixDialog.Overlay, { className: "modal-backdrop" }),
    /* @__PURE__ */ jsxs23(
      RadixDialog.Content,
      {
        className: cn("modal", className),
        style: { width: typeof width === "number" ? `${width}px` : width },
        onPointerDownOutside,
        onInteractOutside,
        children: [
          (title || description || showClose) && /* @__PURE__ */ jsxs23("div", { className: "modal-header", style: { position: "relative" }, children: [
            title && /* @__PURE__ */ jsx25(RadixDialog.Title, { className: "modal-title", children: title }),
            description && /* @__PURE__ */ jsx25(
              RadixDialog.Description,
              {
                style: { marginTop: 6, fontSize: 13, color: "var(--on-surface-muted)" },
                children: description
              }
            ),
            showClose && /* @__PURE__ */ jsx25(
              RadixDialog.Close,
              {
                className: "btn btn-icon btn-sm",
                style: { position: "absolute", top: 12, right: 12 },
                "aria-label": "close",
                children: /* @__PURE__ */ jsx25(Icon, { name: "close", size: 16 })
              }
            )
          ] }),
          children
        ]
      }
    )
  ] });
}
function DialogBody({
  className,
  children
}) {
  return /* @__PURE__ */ jsx25("div", { className: cn("modal-body", className), children });
}
function DialogFooter({
  className,
  children
}) {
  return /* @__PURE__ */ jsx25("div", { className: cn("modal-footer", className), children });
}
var DialogClose = RadixDialog.Close;

// src/components/Drawer.tsx
import * as RadixDialog2 from "@radix-ui/react-dialog";
import { jsx as jsx26, jsxs as jsxs24 } from "react/jsx-runtime";
function Drawer({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx26(RadixDialog2.Root, { open, onOpenChange, children });
}
var DrawerTrigger = RadixDialog2.Trigger;
function DrawerContent({
  side = "right",
  width = 420,
  title,
  showClose = true,
  className,
  children
}) {
  const w = typeof width === "number" ? `${width}px` : width;
  return /* @__PURE__ */ jsxs24(RadixDialog2.Portal, { children: [
    /* @__PURE__ */ jsx26(RadixDialog2.Overlay, { className: "modal-backdrop" }),
    /* @__PURE__ */ jsxs24(
      RadixDialog2.Content,
      {
        className: cn(className),
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [side]: 0,
          width: w,
          maxWidth: "100vw",
          background: "var(--surface)",
          borderLeft: side === "right" ? "1px solid var(--border-subtle)" : void 0,
          borderRight: side === "left" ? "1px solid var(--border-subtle)" : void 0,
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          flexDirection: "column",
          animation: `drawerSlide${side === "right" ? "Right" : "Left"} 200ms var(--easing-enter)`,
          zIndex: 201
        },
        children: [
          (title || showClose) && /* @__PURE__ */ jsxs24(
            "div",
            {
              style: {
                padding: "16px 20px",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                flexShrink: 0
              },
              children: [
                title && /* @__PURE__ */ jsx26(
                  RadixDialog2.Title,
                  {
                    style: {
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--on-surface)",
                      margin: 0
                    },
                    children: title
                  }
                ),
                showClose && /* @__PURE__ */ jsx26(RadixDialog2.Close, { className: "btn btn-icon btn-sm", "aria-label": "close", children: /* @__PURE__ */ jsx26(Icon, { name: "close", size: 16 }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx26("div", { style: { flex: 1, overflow: "auto", padding: 20 }, children })
        ]
      }
    )
  ] });
}
var DrawerClose = RadixDialog2.Close;

// src/components/Tooltip.tsx
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { jsx as jsx27, jsxs as jsxs25 } from "react/jsx-runtime";
function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 200,
  className,
  triggerAsChild = true
}) {
  return /* @__PURE__ */ jsx27(RadixTooltip.Provider, { delayDuration, children: /* @__PURE__ */ jsxs25(RadixTooltip.Root, { children: [
    /* @__PURE__ */ jsx27(RadixTooltip.Trigger, { asChild: triggerAsChild, children }),
    /* @__PURE__ */ jsx27(RadixTooltip.Portal, { children: /* @__PURE__ */ jsxs25(
      RadixTooltip.Content,
      {
        side,
        sideOffset: 6,
        className: cn(className),
        style: {
          background: "var(--neutral-12)",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 500,
          maxWidth: 260,
          zIndex: 100,
          animation: "var(--duration-fast, 100ms) var(--easing-enter, ease) tooltipShow"
        },
        children: [
          content,
          /* @__PURE__ */ jsx27(RadixTooltip.Arrow, { style: { fill: "var(--neutral-12)" } })
        ]
      }
    ) })
  ] }) });
}

// src/components/Popover.tsx
import * as RadixPopover from "@radix-ui/react-popover";
import { jsx as jsx28 } from "react/jsx-runtime";
function Popover({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx28(RadixPopover.Root, { open, onOpenChange, children });
}
var PopoverTrigger = RadixPopover.Trigger;
function PopoverContent({
  side = "bottom",
  align = "start",
  className,
  children
}) {
  return /* @__PURE__ */ jsx28(RadixPopover.Portal, { children: /* @__PURE__ */ jsx28(
    RadixPopover.Content,
    {
      side,
      align,
      sideOffset: 6,
      className: cn("menu", className),
      children
    }
  ) });
}

// src/components/Dropdown.tsx
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { jsx as jsx29 } from "react/jsx-runtime";
function Dropdown({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx29(RadixDropdown.Root, { open, onOpenChange, children });
}
var DropdownTrigger = RadixDropdown.Trigger;
function DropdownContent({
  side = "bottom",
  align = "start",
  className,
  children
}) {
  return /* @__PURE__ */ jsx29(RadixDropdown.Portal, { children: /* @__PURE__ */ jsx29(
    RadixDropdown.Content,
    {
      side,
      align,
      sideOffset: 6,
      className: cn("menu", className),
      children
    }
  ) });
}
function DropdownItem({
  onSelect,
  danger,
  disabled,
  className,
  children
}) {
  return /* @__PURE__ */ jsx29(
    RadixDropdown.Item,
    {
      onSelect,
      disabled,
      className: cn("menu-item", danger && "is-danger", className),
      children
    }
  );
}
function DropdownLabel({ children }) {
  return /* @__PURE__ */ jsx29(RadixDropdown.Label, { className: "menu-label", children });
}
function DropdownSeparator() {
  return /* @__PURE__ */ jsx29(RadixDropdown.Separator, { className: "menu-divider" });
}

// src/components/Accordion.tsx
import * as RadixAccordion from "@radix-ui/react-accordion";
import { jsx as jsx30, jsxs as jsxs26 } from "react/jsx-runtime";
function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
  children
}) {
  if (type === "multiple") {
    return /* @__PURE__ */ jsx30(
      RadixAccordion.Root,
      {
        type: "multiple",
        defaultValue,
        value,
        onValueChange,
        className: cn(className),
        children
      }
    );
  }
  return /* @__PURE__ */ jsx30(
    RadixAccordion.Root,
    {
      type: "single",
      defaultValue,
      value,
      onValueChange,
      collapsible,
      className: cn(className),
      children
    }
  );
}
function AccordionItem({ value, className, children }) {
  return /* @__PURE__ */ jsx30(RadixAccordion.Item, { value, className: cn(className), children });
}
function AccordionTrigger({ className, children }) {
  return /* @__PURE__ */ jsx30(RadixAccordion.Header, { style: { all: "unset", display: "block" }, children: /* @__PURE__ */ jsxs26(
    RadixAccordion.Trigger,
    {
      className: cn("group", className),
      style: {
        all: "unset",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer"
      },
      children: [
        children,
        /* @__PURE__ */ jsx30(
          Icon,
          {
            name: "chevronDown",
            size: 16,
            className: "transition-transform duration-fast group-data-[state=open]:rotate-180"
          }
        )
      ]
    }
  ) });
}
function AccordionContent({ className, children }) {
  return /* @__PURE__ */ jsx30(RadixAccordion.Content, { className: cn(className), children });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AppShell,
  Avatar,
  AvatarStack,
  Badge,
  Banner,
  BarChart,
  Breadcrumb,
  Button,
  Card,
  CellMeta,
  CellStack,
  Checkbox,
  Chip,
  CostPill,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  Donut,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
  Empty,
  HealthDots,
  Icon,
  IconButton,
  KPI,
  LineChart,
  Meter,
  PageHead,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Select,
  Sidebar,
  SidebarBrand,
  Sparkline,
  StatusBar,
  StatusDot,
  StatusLabel,
  Table,
  Tabs,
  Tag,
  TextInput,
  Textarea,
  Toggle,
  Tooltip,
  TopBar,
  WorkspaceSwitcher,
  cn
};
//# sourceMappingURL=index.js.map