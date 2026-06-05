import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { v as renderTemplate } from './entrypoint_D-SQgKuM.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n  const params = new URLSearchParams(window.location.search);\n  const domain = params.get('domain');\n  const target = domain ? `/checkout?domain=${encodeURIComponent(domain)}` : '/';\n  window.location.replace(target);\n<\/script>"], ["<script>\n  const params = new URLSearchParams(window.location.search);\n  const domain = params.get('domain');\n  const target = domain ? \\`/checkout?domain=\\${encodeURIComponent(domain)}\\` : '/';\n  window.location.replace(target);\n<\/script>"])));
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/domains/register.astro", void 0);

const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/domains/register.astro";
const $$url = "/domains/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
