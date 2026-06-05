import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$AdminLayout } from './AdminLayout_B8KjEaYx.mjs';

const $$Domains = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Semua Domain Pelanggan", "activeMenu": "domains" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="admin-domains-container"> <!-- Page Header --> <div class="page-header"> <div> <h1 class="page-title">Semua Domain Pelanggan</h1> <p class="page-subtitle">Daftar lengkap seluruh domain milik pelanggan yang terdaftar di sistem reseller.</p> </div> </div> <!-- Search & Filters --> <div class="filters-bar"> <input type="text" id="search-input" class="form-control-compact" placeholder="Cari nama domain..." style="max-width: 250px;"> <select id="status-filter" class="form-control-compact" style="max-width: 150px;"> <option value="">Semua Status</option> <option value="1">Aktif</option> <option value="2">Expired</option> <option value="0">Pending</option> <option value="7">Suspended</option> </select> <button class="btn btn-outline btn-sm-custom" id="filter-btn">Filter</button> <button class="btn btn-outline btn-sm-custom" id="refresh-btn" style="margin-left: auto;"> <svg class="lucide lucide-refresh-cw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
Refresh
</button> </div> <!-- Table --> <div class="table-card"> <!-- Loading --> <div id="domains-loading" class="state-center"> <div class="spinner"></div> <p>Memuat daftar domain...</p> </div> <!-- Empty --> <div id="domains-empty" class="state-center hidden"></div> <!-- Table --> <div id="domains-table-wrapper" class="table-scroll hidden"> <table> <thead> <tr> <th>Nama Domain</th> <th>Status</th> <th>Pemilik / Customer</th> <th>Tanggal Registrasi</th> <th>Tanggal Kadaluarsa</th> <th>Aksi</th> </tr> </thead> <tbody id="domains-list-body"></tbody> </table> </div> <!-- Pagination Footer --> <div id="pagination-container" class="pagination-bar hidden"> <span class="text-secondary" id="pagination-info" style="font-size:12px;">Halaman 1 dari 1 (Total: 0)</span> <div style="display:flex;gap:8px;"> <button id="prev-page-btn" class="btn btn-outline btn-sm-custom" disabled>Sebelumnya</button> <button id="next-page-btn" class="btn btn-outline btn-sm-custom" disabled>Berikutnya</button> </div> </div> </div> </div> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/domains.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/domains.astro", void 0);

const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/admin/domains.astro";
const $$url = "/admin/domains";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Domains,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
