import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_Bl4dlxCb.mjs';

const $$Domains = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Domains", "activeMenu": "domains", "data-astro-cid-ygkbpe36": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="private-area" class="hidden" data-astro-cid-ygkbpe36> <!-- Page Header --> <div class="page-header" data-astro-cid-ygkbpe36> <div data-astro-cid-ygkbpe36> <h1 class="page-title" data-astro-cid-ygkbpe36>Domains</h1> <p class="page-subtitle" data-astro-cid-ygkbpe36>Kelola nama domain Anda dengan mudah</p> </div> <div class="page-actions" data-astro-cid-ygkbpe36> <a href="/domains/transfer" class="btn btn-outline" data-astro-cid-ygkbpe36> <svg class="lucide lucide-repeat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;" data-astro-cid-ygkbpe36><path d="m16 3 4 4-4 4" data-astro-cid-ygkbpe36></path><path d="M20 7H9a4 4 0 0 0-4 4v9" data-astro-cid-ygkbpe36></path><path d="m8 21-4-4 4-4" data-astro-cid-ygkbpe36></path><path d="M4 17h11a4 4 0 0 0 4-4V4" data-astro-cid-ygkbpe36></path></svg>
Transfer Domain
</a> <a href="/" class="btn btn-primary" data-astro-cid-ygkbpe36> <svg class="lucide lucide-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:14px;height:14px;" data-astro-cid-ygkbpe36><line x1="12" y1="5" x2="12" y2="19" data-astro-cid-ygkbpe36></line><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-ygkbpe36></line></svg>
Daftar Domain
</a> </div> </div> <!-- Search & Filters --> <div class="filters-bar" data-astro-cid-ygkbpe36> <input type="text" id="search-input" class="form-control-compact" placeholder="Cari nama domain..." style="max-width: 250px;" data-astro-cid-ygkbpe36> <select id="status-filter" class="form-control-compact" style="max-width: 150px;" data-astro-cid-ygkbpe36> <option value="" data-astro-cid-ygkbpe36>Semua Status</option> <option value="1" data-astro-cid-ygkbpe36>Aktif</option> <option value="2" data-astro-cid-ygkbpe36>Expired</option> <option value="0" data-astro-cid-ygkbpe36>Pending</option> <option value="7" data-astro-cid-ygkbpe36>Suspended</option> </select> <button class="btn btn-outline btn-sm-custom" id="filter-btn" data-astro-cid-ygkbpe36>Filter</button> <button class="btn btn-outline btn-sm-custom" id="refresh-btn" style="margin-left: auto;" data-astro-cid-ygkbpe36> <svg class="lucide lucide-refresh-cw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;" data-astro-cid-ygkbpe36><polyline points="23 4 23 10 17 10" data-astro-cid-ygkbpe36></polyline><polyline points="1 20 1 14 7 14" data-astro-cid-ygkbpe36></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" data-astro-cid-ygkbpe36></path></svg>
Refresh
</button> </div> <!-- Table --> <div class="table-card" data-astro-cid-ygkbpe36> <!-- Loading --> <div id="domains-loading" class="state-center" data-astro-cid-ygkbpe36> <div class="spinner" data-astro-cid-ygkbpe36></div> <p data-astro-cid-ygkbpe36>Memuat daftar domain...</p> </div> <!-- Empty --> <div id="domains-empty" class="state-center hidden" data-astro-cid-ygkbpe36></div> <!-- Table --> <div id="domains-table-wrapper" class="table-scroll hidden" data-astro-cid-ygkbpe36> <table data-astro-cid-ygkbpe36> <thead data-astro-cid-ygkbpe36> <tr data-astro-cid-ygkbpe36> <th data-astro-cid-ygkbpe36>Nama Domain</th> <th data-astro-cid-ygkbpe36>Status</th> <th data-astro-cid-ygkbpe36>Durasi</th> <th data-astro-cid-ygkbpe36>Tanggal Registrasi</th> <th data-astro-cid-ygkbpe36>Tanggal Kadaluarsa</th> <th data-astro-cid-ygkbpe36>Aksi</th> </tr> </thead> <tbody id="domains-list-body" data-astro-cid-ygkbpe36></tbody> </table> </div> <!-- Pagination Footer --> <div id="pagination-container" class="pagination-bar hidden" data-astro-cid-ygkbpe36> <span class="text-secondary" id="pagination-info" style="font-size:12px;" data-astro-cid-ygkbpe36>Halaman 1 dari 1 (Total: 0)</span> <div style="display:flex;gap:8px;" data-astro-cid-ygkbpe36> <button id="prev-page-btn" class="btn btn-outline btn-sm-custom" disabled data-astro-cid-ygkbpe36>Sebelumnya</button> <button id="next-page-btn" class="btn btn-outline btn-sm-custom" disabled data-astro-cid-ygkbpe36>Berikutnya</button> </div> </div> </div> </div> ${renderScript($$result2, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/dashboard/domains.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/dashboard/domains.astro", void 0);

const $$file = "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/pages/dashboard/domains.astro";
const $$url = "/dashboard/domains";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Domains,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
