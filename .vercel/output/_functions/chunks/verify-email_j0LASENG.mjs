import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$Layout } from './Layout_BhFehEZV.mjs';

const $$VerifyEmail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Verifikasi Alamat Email", "data-astro-cid-lxcpjv43": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="verify-section section" data-astro-cid-lxcpjv43> <div class="container verify-container text-center" data-astro-cid-lxcpjv43> <div class="card verify-card" data-astro-cid-lxcpjv43> <!-- 1. LOADING STATE (Default Visible) --> <div id="state-loading" class="state-wrapper" data-astro-cid-lxcpjv43> <div class="spinner" data-astro-cid-lxcpjv43></div> <h2 class="mt-4" data-astro-cid-lxcpjv43>Memverifikasi Akun Anda...</h2> <p class="text-secondary mt-2" data-astro-cid-lxcpjv43>Harap tunggu sebentar, kami sedang menyelaraskan akun Anda dengan sistem pencatatan domain.</p> </div> <!-- 2. SUCCESS STATE (Hidden by default) --> <div id="state-success" class="state-wrapper hidden" data-astro-cid-lxcpjv43> <div class="status-icon success-icon" data-astro-cid-lxcpjv43> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" data-astro-cid-lxcpjv43><polyline points="20 6 9 17 4 12" data-astro-cid-lxcpjv43></polyline></svg> </div> <h2 class="mt-4" data-astro-cid-lxcpjv43>Verifikasi Email Berhasil!</h2> <p class="text-secondary mt-2" data-astro-cid-lxcpjv43>Akun Anda telah diaktifkan sepenuhnya dan telah berhasil disinkronisasikan ke sistem registrar domain.</p> <a href="/login" class="btn btn-primary btn-block mt-4" data-astro-cid-lxcpjv43>Masuk ke Portal</a> </div> <!-- 3. ERROR STATE (Hidden by default) --> <div id="state-error" class="state-wrapper hidden" data-astro-cid-lxcpjv43> <div class="status-icon error-icon" data-astro-cid-lxcpjv43> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" data-astro-cid-lxcpjv43><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-lxcpjv43></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-lxcpjv43></line></svg> </div> <h2 class="mt-4" data-astro-cid-lxcpjv43>Verifikasi Email Gagal</h2> <p id="error-message" class="text-secondary mt-2" data-astro-cid-lxcpjv43>Tautan verifikasi salah, kedaluwarsa, atau sudah pernah digunakan.</p> <div class="flex gap-2 justify-center mt-4" data-astro-cid-lxcpjv43> <a href="/register" class="btn btn-primary" data-astro-cid-lxcpjv43>Daftar Kembali</a> <a href="/login" class="btn btn-secondary" data-astro-cid-lxcpjv43>Masuk</a> </div> </div> </div> </div> </section> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/verify-email.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/verify-email.astro", void 0);

const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/verify-email.astro";
const $$url = "/verify-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
