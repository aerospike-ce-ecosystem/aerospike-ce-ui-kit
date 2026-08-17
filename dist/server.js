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

// src/components/StatusDot.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function StatusDot({ status, className, ...rest }) {
  return /* @__PURE__ */ jsx3(
    "span",
    {
      className: cn("status-dot", `is-${status}`, className),
      "aria-label": rest["aria-label"] ?? status
    }
  );
}
function StatusLabel({ status, children, muted, className }) {
  return /* @__PURE__ */ jsxs2("span", { className: cn("status-label", muted && "is-muted", className), children: [
    /* @__PURE__ */ jsx3(StatusDot, { status }),
    children ?? status
  ] });
}

// src/components/StatusBar.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3("div", { className: cn("statusbar", className), children: [
    /* @__PURE__ */ jsxs3("span", { className: "seg", children: [
      /* @__PURE__ */ jsx4(StatusDot, { status: connected ? "succeeded" : "failed" }),
      /* @__PURE__ */ jsx4("span", { children: connected ? connectedLabel : disconnectedLabel })
    ] }),
    queueDepth != null && /* @__PURE__ */ jsxs3("span", { className: "seg", children: [
      "queue ",
      /* @__PURE__ */ jsx4("b", { children: queueDepth })
    ] }),
    services && /* @__PURE__ */ jsx4(HealthDots, { services }),
    children,
    /* @__PURE__ */ jsx4("span", { style: { flex: 1 } }),
    version && /* @__PURE__ */ jsx4("span", { className: "seg", children: version }),
    docsHref && /* @__PURE__ */ jsx4("a", { className: "seg", href: docsHref, children: "\u2197 docs" })
  ] });
}
function HealthDots({ services, className }) {
  return /* @__PURE__ */ jsx4("span", { className: cn("seg", className), children: services.map((s) => /* @__PURE__ */ jsxs3(
    "span",
    {
      className: "tooltip-wrap",
      style: { display: "inline-flex", alignItems: "center", gap: 4 },
      children: [
        /* @__PURE__ */ jsx4(StatusDot, { status: s.status }),
        /* @__PURE__ */ jsx4(
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

// src/components/PageHead.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function PageHead({ title, sub, className, children }) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("ace-page-head", className), children: [
    /* @__PURE__ */ jsx5("div", { className: "lead", children: /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx5("h1", { children: title }),
      sub && /* @__PURE__ */ jsx5("div", { className: "sub", children: sub })
    ] }) }),
    /* @__PURE__ */ jsx5("div", { className: "flex items-center gap-2", children })
  ] });
}

// src/components/Card.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Card({ title, meta, action, flush, className, children }) {
  const hasHead = Boolean(title || meta || action);
  return /* @__PURE__ */ jsxs5("div", { className: cn("ace-card", className), children: [
    hasHead && /* @__PURE__ */ jsxs5("div", { className: "ace-card-head", children: [
      /* @__PURE__ */ jsx6("div", { children: title && /* @__PURE__ */ jsx6("div", { className: "title", children: title }) }),
      /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2", children: [
        meta && /* @__PURE__ */ jsx6("span", { className: "meta", children: meta }),
        action
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: cn("ace-card-body", flush && "flush"), children })
  ] });
}

// src/components/Empty.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function Empty({ icon = "folder", title, sub, action, className }) {
  return /* @__PURE__ */ jsxs6("div", { className: cn("empty", className), children: [
    /* @__PURE__ */ jsx7("span", { className: "ico", children: /* @__PURE__ */ jsx7(Icon, { name: icon, size: 24 }) }),
    /* @__PURE__ */ jsx7("div", { className: "ttl", children: title }),
    sub && /* @__PURE__ */ jsx7("div", { className: "sub", children: sub }),
    action && /* @__PURE__ */ jsx7("div", { style: { marginTop: 8 }, children: action })
  ] });
}

// src/components/Table.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function Table({
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx8("div", { className: "table-wrap", children: /* @__PURE__ */ jsx8("table", { className: cn("table", className), ...rest, children }) });
}
function CellStack({ className, children }) {
  return /* @__PURE__ */ jsx8("div", { className: cn("cell-stack", className), children });
}
function CellMeta({ name, sub, className }) {
  return /* @__PURE__ */ jsxs7("div", { className: cn("cell-meta", className), children: [
    /* @__PURE__ */ jsx8("span", { className: "name", children: name }),
    sub && /* @__PURE__ */ jsx8("span", { className: "sub", children: sub })
  ] });
}

// src/components/Badge.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Badge({ tone = "default", dot, className, children }) {
  return /* @__PURE__ */ jsx9("span", { className: cn("badge", `badge-${tone}`, dot && "badge-dot", className), children });
}

// src/components/Avatar.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function initialsFor(name) {
  if (!name) return "?";
  return name.split(/\s+/).map((s) => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function Avatar({ name, src, size = "md", color, className }) {
  const cls = cn("avatar", size !== "md" && `avatar-${size}`, className);
  if (src) {
    return /* @__PURE__ */ jsx10("span", { className: cls, children: /* @__PURE__ */ jsx10(
      "img",
      {
        src,
        alt: name ?? "",
        style: { width: "100%", height: "100%", objectFit: "cover" }
      }
    ) });
  }
  return /* @__PURE__ */ jsx10("span", { className: cls, style: color ? { background: color, color: "#fff" } : void 0, children: initialsFor(name) });
}
function AvatarStack({ users, max = 4, className }) {
  const shown = users.slice(0, max);
  const rest = users.length - shown.length;
  return /* @__PURE__ */ jsxs8("span", { className: cn("avatar-stack", className), children: [
    shown.map((u, i) => /* @__PURE__ */ jsx10(Avatar, { name: u.name, size: "sm", color: u.color }, i)),
    rest > 0 && /* @__PURE__ */ jsxs8(
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

// src/components/Meter.tsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs9("div", { className: cn("ace-meter", t, className), children: [
    /* @__PURE__ */ jsxs9("div", { className: "row", children: [
      /* @__PURE__ */ jsx11("span", { className: "lbl", children: label }),
      /* @__PURE__ */ jsxs9("span", { className: "val", children: [
        format(current),
        unit && /* @__PURE__ */ jsx11("span", { style: { color: "var(--on-surface-muted)" }, children: unit }),
        " ",
        /* @__PURE__ */ jsxs9("span", { style: { color: "var(--on-surface-muted)" }, children: [
          "/ ",
          format(cap),
          unit ?? ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx11("div", { className: "bar", children: /* @__PURE__ */ jsx11("span", { style: { width: `${pct}%` } }) })
  ] });
}

// src/components/Charts.tsx
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
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
  const colors = ["var(--primary-50)", "var(--accent-emerald-500)", "var(--accent-amber-400)"];
  return /* @__PURE__ */ jsxs10("svg", { width: "100%", viewBox: `0 0 ${w} ${h}`, style: { display: "block" }, children: [
    Array.from({ length: yTicks + 1 }).map((_, i) => {
      const v = niceMax / yTicks * (yTicks - i);
      const y = padT + ch / yTicks * i;
      return /* @__PURE__ */ jsxs10("g", { children: [
        /* @__PURE__ */ jsx12(
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
        /* @__PURE__ */ jsx12(
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
    labels?.map((l, i) => /* @__PURE__ */ jsx12(
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
      return /* @__PURE__ */ jsxs10("g", { children: [
        /* @__PURE__ */ jsx12("defs", { children: /* @__PURE__ */ jsxs10("linearGradient", { id, x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsx12("stop", { offset: "0%", stopColor: c, stopOpacity: si === 0 ? "0.18" : "0.0" }),
          /* @__PURE__ */ jsx12("stop", { offset: "100%", stopColor: c, stopOpacity: "0" })
        ] }) }),
        si === 0 && fillD && /* @__PURE__ */ jsx12("path", { d: fillD, fill: `url(#${id})` }),
        /* @__PURE__ */ jsx12(
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
        s.data.map((v, i) => /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsxs10("svg", { width: "100%", viewBox: `0 0 ${w} ${h}`, style: { display: "block" }, children: [
    Array.from({ length: 5 }).map((_, i) => {
      const y = padT + ch / 4 * i;
      const v = niceMax / 4 * (4 - i);
      return /* @__PURE__ */ jsxs10("g", { children: [
        /* @__PURE__ */ jsx12(
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
        /* @__PURE__ */ jsx12(
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
      return /* @__PURE__ */ jsxs10("g", { children: [
        /* @__PURE__ */ jsx12("rect", { x, y, width: bw, height: bh, fill: color, rx: "4" }),
        labels && /* @__PURE__ */ jsx12(
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
    return /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsxs10("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, children: [
    /* @__PURE__ */ jsx12(
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
export {
  AppShell,
  Avatar,
  AvatarStack,
  Badge,
  BarChart,
  Card,
  CellMeta,
  CellStack,
  Donut,
  Empty,
  HealthDots,
  Icon,
  LineChart,
  Meter,
  PageHead,
  StatusBar,
  StatusDot,
  StatusLabel,
  Table,
  cn
};
//# sourceMappingURL=server.js.map