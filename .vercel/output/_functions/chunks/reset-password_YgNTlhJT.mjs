import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$Layout } from './Layout_BhFehEZV.mjs';

const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atur Ulang Kata Sandi", "data-astro-cid-oiuorpsm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="auth-section section" data-astro-cid-oiuorpsm> <div class="container auth-container" data-astro-cid-oiuorpsm> <div class="card auth-card" data-astro-cid-oiuorpsm> <!-- Header --> <div class="auth-header text-center mb-4" data-astro-cid-oiuorpsm> <h2 data-astro-cid-oiuorpsm>Atur Ulang Kata Sandi</h2> <p class="text-secondary mt-1" data-astro-cid-oiuorpsm>Masukkan kata sandi baru Anda di bawah ini.</p> </div> <!-- Alert Box --> <div id="alert-box" class="alert hidden" data-astro-cid-oiuorpsm></div> <!-- Reset Password Form --> <form id="reset-form" class="auth-form" data-astro-cid-oiuorpsm> <div class="form-group" data-astro-cid-oiuorpsm> <label class="form-label" for="password" data-astro-cid-oiuorpsm>Kata Sandi Baru</label> <input type="password" id="password" class="form-control" placeholder="••••••••" required minlength="6" data-astro-cid-oiuorpsm> </div> <div class="form-group" data-astro-cid-oiuorpsm> <label class="form-label" for="confirm-password" data-astro-cid-oiuorpsm>Konfirmasi Kata Sandi Baru</label> <input type="password" id="confirm-password" class="form-control" placeholder="••••••••" required minlength="6" data-astro-cid-oiuorpsm> </div> <button type="submit" id="submit-btn" class="btn btn-primary btn-block mt-4" data-astro-cid-oiuorpsm>
Simpan Kata Sandi
</button> ${undefined} </form> <!-- Footer Link --> <div class="auth-footer text-center mt-4" data-astro-cid-oiuorpsm> <p class="text-secondary" data-astro-cid-oiuorpsm><a href="/login" data-astro-cid-oiuorpsm>Kembali ke Halaman Login</a></p> </div> </div> </div> </section> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/reset-password.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/reset-password.astro", void 0);
const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
