import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$Layout } from './Layout_BhFehEZV.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lupa Kata Sandi", "data-astro-cid-sjxci7tl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="auth-section section" data-astro-cid-sjxci7tl> <div class="container auth-container" data-astro-cid-sjxci7tl> <div class="card auth-card" data-astro-cid-sjxci7tl> <!-- Header --> <div class="auth-header text-center mb-4" data-astro-cid-sjxci7tl> <h2 data-astro-cid-sjxci7tl>Lupa Kata Sandi</h2> <p class="text-secondary mt-1" data-astro-cid-sjxci7tl>Masukkan alamat email Anda untuk menerima tautan atur ulang kata sandi.</p> </div> <!-- Alert Notification Box --> <div id="alert-box" class="alert hidden" data-astro-cid-sjxci7tl></div> <!-- Forgot Password Form --> <form id="forgot-form" class="auth-form" data-astro-cid-sjxci7tl> <div class="form-group" data-astro-cid-sjxci7tl> <label class="form-label" for="email" data-astro-cid-sjxci7tl>Alamat Email</label> <input type="email" id="email" class="form-control" placeholder="nama@email.com" required autocomplete="email" data-astro-cid-sjxci7tl> </div> <button type="submit" id="submit-btn" class="btn btn-primary btn-block mt-4" data-astro-cid-sjxci7tl>
Kirim Tautan Atur Ulang
</button> ${undefined} </form> <!-- Footer Link --> <div class="auth-footer text-center mt-4" data-astro-cid-sjxci7tl> <p class="text-secondary" data-astro-cid-sjxci7tl><a href="/login" data-astro-cid-sjxci7tl>Kembali ke Halaman Login</a></p> </div> </div> </div> </section> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/forgot-password.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/forgot-password.astro", void 0);
const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
