import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$AdminLayout } from './AdminLayout_B8KjEaYx.mjs';

const $$Customers = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Manajemen Customer", "activeMenu": "customers" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="admin-customers-container"> <!-- Page Header Actions --> <div class="page-header"> <div> <h1 class="page-title">Daftar Customer</h1> <p class="page-subtitle">Sinkronisasi, detail profil, dan status verifikasi akun seluruh customer Anda.</p> </div> </div> <!-- Sync Toast Alert --> <div id="sync-alert" class="alert-banner hidden"> <div class="alert-content"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"> <circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path> </svg> <span id="sync-alert-text">Customer synced successfully.</span> </div> </div> <!-- Filter Bar --> <div class="filters-bar"> <input type="text" id="search-input" class="form-control-compact" placeholder="Cari nama, email, organisasi..." style="max-width: 300px;"> <button id="sync-customers-btn" class="btn btn-primary btn-sm-custom" style="margin-left: auto;"> <svg id="sync-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"> <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path> </svg> <span>Sinkronisasi dari RDASH</span> </button> </div> <!-- Customer Table Card --> <div class="table-card"> <!-- Loading --> <div id="customers-loading" class="state-center"> <div class="spinner"></div> <p>Memuat daftar customer...</p> </div> <!-- Empty --> <div id="customers-empty" class="state-center hidden"> <p>Belum ada customer terdaftar. Silakan lakukan sinkronisasi.</p> </div> <!-- Table Wrapper --> <div id="customers-table-wrapper" class="table-scroll hidden"> <table> <thead> <tr> <th>Nama & Email</th> <th>Status</th> <th>Organisasi</th> <th>Lokasi</th> <th>Tanggal Daftar</th> <th style="text-align: right;">Aksi</th> </tr> </thead> <tbody id="customers-tbody"></tbody> </table> </div> <!-- Pagination Footer --> <div id="pagination-container" class="pagination-bar hidden"> <span class="text-secondary" id="pagination-info" style="font-size:12px;">Halaman 1 dari 1 (Total: 0)</span> <div style="display:flex;gap:8px;"> <button id="prev-page" class="btn btn-outline btn-sm-custom" disabled>Sebelumnya</button> <button id="next-page" class="btn btn-outline btn-sm-custom" disabled>Berikutnya</button> </div> </div> </div> <!-- Profile Detail Modal --> <div id="profile-modal" class="modal hidden"> <div class="modal-overlay"></div> <div class="modal-container"> <div class="modal-header"> <h3 class="modal-title">Detail Profil Customer</h3> <button id="close-modal-btn" class="modal-close"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"> <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> </div> <div class="modal-body" id="modal-profile-content"> <!-- Populated dynamically --> </div> <div class="modal-footer"> <button type="button" id="close-modal-btn2" class="btn btn-outline btn-sm-custom">Tutup</button> </div> </div> </div> </div> ` })}  ${renderScript($$result, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/customers.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/customers.astro", void 0);

const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/customers.astro";
const $$url = "/admin/customers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Customers,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
