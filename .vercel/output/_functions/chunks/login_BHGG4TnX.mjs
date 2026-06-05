import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$Layout } from './Layout_BhFehEZV.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Masuk ke Portal", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="auth-section section" data-astro-cid-sgpqyurt> <div class="container auth-container" data-astro-cid-sgpqyurt> <div class="card auth-card" data-astro-cid-sgpqyurt> <!-- Header --> <div class="auth-header text-center mb-4" data-astro-cid-sgpqyurt> <h2 data-astro-cid-sgpqyurt>Masuk ke Ruangtunggu</h2> <p class="text-secondary mt-1" data-astro-cid-sgpqyurt>Gunakan kredensial akun Anda untuk mengakses dashboard.</p> </div> <!-- Alert Notification Box --> <div id="alert-box" class="alert hidden" data-astro-cid-sgpqyurt></div> <!-- ==================== STEP 1: PASSWORD LOGIN ==================== --> <form id="login-step1-form" class="auth-form" data-astro-cid-sgpqyurt> <div class="form-group" data-astro-cid-sgpqyurt> <label class="form-label" for="email" data-astro-cid-sgpqyurt>Alamat Email</label> <input type="email" id="email" class="form-control" placeholder="nama@email.com" required autocomplete="email" data-astro-cid-sgpqyurt> </div> <div class="form-group" data-astro-cid-sgpqyurt> <label class="form-label" for="password" data-astro-cid-sgpqyurt>Kata Sandi</label> <input type="password" id="password" class="form-control" placeholder="••••••••" required autocomplete="current-password" data-astro-cid-sgpqyurt> <div style="text-align: right; margin-top: 0.5rem;" data-astro-cid-sgpqyurt> <a href="/forgot-password" style="font-size: 0.85rem; color: var(--text-secondary); text-decoration: none;" data-astro-cid-sgpqyurt>Lupa Password?</a> </div> </div> <button type="submit" id="step1-submit-btn" class="btn btn-primary btn-block mt-4" data-astro-cid-sgpqyurt>
Lanjutkan ke Verifikasi
</button> ${undefined} </form> <!-- ==================== STEP 2: OTP VERIFICATION ==================== --> <form id="login-step2-form" class="auth-form hidden" data-astro-cid-sgpqyurt> <div class="otp-instruction text-center mb-4" data-astro-cid-sgpqyurt> <div class="otp-icon" data-astro-cid-sgpqyurt> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-accent-primary" data-astro-cid-sgpqyurt><rect width="20" height="16" x="2" y="4" rx="2" data-astro-cid-sgpqyurt></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-astro-cid-sgpqyurt></path></svg> </div> <h3 class="mt-2" data-astro-cid-sgpqyurt>Masukkan Kode OTP</h3> <p class="text-secondary mt-1" data-astro-cid-sgpqyurt>Kami baru saja mengirimkan 6 digit kode keamanan OTP ke email Anda <strong id="target-email" class="text-highlight" data-astro-cid-sgpqyurt></strong>. Kode ini berlaku selama 5 menit.</p> </div> <div class="form-group" data-astro-cid-sgpqyurt> <label class="form-label text-center" for="otp-code" data-astro-cid-sgpqyurt>Kode OTP (6 Digit)</label> <input type="text" id="otp-code" class="form-control otp-input" placeholder="0 0 0 0 0 0" required pattern="[0-9]{6}" title="Masukkan 6 digit angka tanpa spasi" inputmode="numeric" autocomplete="one-time-code" data-astro-cid-sgpqyurt> </div> <button type="submit" id="step2-submit-btn" class="btn btn-primary btn-block mt-4" data-astro-cid-sgpqyurt>
Verifikasi & Masuk
</button> <div class="text-center mt-4" data-astro-cid-sgpqyurt> <button type="button" id="back-to-step1" class="btn btn-outline btn-sm" data-astro-cid-sgpqyurt>Ganti Akun</button> </div> </form> <!-- Footer Link --> <div id="auth-footer-link" class="auth-footer text-center mt-4" data-astro-cid-sgpqyurt> <p class="text-secondary" data-astro-cid-sgpqyurt>Belum memiliki akun? <a href="/register" data-astro-cid-sgpqyurt>Daftar secara gratis</a></p> </div> </div> </div> </section> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/login.astro", void 0);
const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
