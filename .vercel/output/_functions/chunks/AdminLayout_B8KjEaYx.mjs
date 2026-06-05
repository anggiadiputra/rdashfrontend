import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { t as renderHead, k as addAttribute, v as renderTemplate, s as renderComponent, d as Fragment, u as renderSlot } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';

const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, activeMenu = "billing" } = Astro2.props;
  const apiUrl = "http://localhost:3000";
  let appName = "Ruangtunggu";
  let appLogo = "";
  try {
    const settingsRes = await fetch(`${apiUrl}/api/settings`);
    const settingsData = await settingsRes.json();
    if (settingsData && settingsData.success && settingsData.data) {
      appName = settingsData.data.app_name || "Ruangtunggu";
      appLogo = settingsData.data.app_logo || "";
    }
  } catch (e) {
    console.warn("Failed to fetch settings from API in AdminLayout.astro, using default branding.");
  }
  const logoUrl = appLogo ? `${apiUrl}${appLogo}` : "";
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} — Admin ${appName}</title>${renderHead()}</head> <body> <!-- Mobile Sidebar Overlay --> <div id="sidebar-overlay" class="sidebar-overlay hidden"></div> <!-- Sidebar --> <aside class="sidebar"> <!-- Logo --> <a href="/admin/billing" class="sidebar-logo"> ${logoUrl ? renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(appName, "alt")} style="max-height: 32px; max-width: 100%; object-fit: contain; display: block;">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <div class="logo-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg> </div> <span class="logo-text"> ${appName.toLowerCase() === "ruangtunggu" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<span style="color:var(--text);font-weight:700">admin</span>tunggu` })}` : `Admin ${appName}`} </span> ` })}`} </a> <nav class="sidebar-nav"> <div class="nav-group"> <div class="nav-group-label">Keuangan & Deposit</div> <a href="/admin/billing"${addAttribute(`nav-item ${activeMenu === "billing" ? "active" : ""}`, "class")}> <svg class="lucide lucide-credit-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="14" x="2" y="5" rx="2"></rect> <line x1="2" x2="22" y1="10" y2="10"></line> </svg>
Billing & Finance
</a> <a href="/admin/pricing"${addAttribute(`nav-item ${activeMenu === "pricing" ? "active" : ""}`, "class")}> <svg class="lucide lucide-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path> <line x1="7" y1="7" x2="7.01" y2="7"></line> </svg>
Domain Markup
</a> <a href="/admin/transactions"${addAttribute(`nav-item ${activeMenu === "transactions" ? "active" : ""}`, "class")}> <svg class="lucide lucide-history" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path> <path d="M3 3v5h5"></path> <path d="M12 7v5l4 2"></path> </svg>
Transaksi Customer
</a> </div> <div class="nav-group"> <div class="nav-group-label">Manajemen Pelanggan</div> <a href="/admin/domains"${addAttribute(`nav-item ${activeMenu === "domains" ? "active" : ""}`, "class")}> <svg class="lucide lucide-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> </svg>
Semua Domain
</a> <a href="/admin/customers"${addAttribute(`nav-item ${activeMenu === "customers" ? "active" : ""}`, "class")}> <svg class="lucide lucide-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg>
Daftar Customer
</a> </div> <div class="nav-group"> <div class="nav-group-label">Akses User</div> <a href="/dashboard" class="nav-item"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path> <polyline points="16 17 21 12 16 7"></polyline> <line x1="21" y1="12" x2="9" y2="12"></line> </svg>
Dashboard User
</a> </div> <div class="nav-group"> <div class="nav-group-label">Konfigurasi</div> <a href="/admin/settings"${addAttribute(`nav-item ${activeMenu === "settings" ? "active" : ""}`, "class")}> <svg class="lucide lucide-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 8px;"> <circle cx="12" cy="12" r="3"></circle> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path> </svg>
Pengaturan Sistem
</a> </div> </nav> </aside> <!-- Main Area --> <div class="main-area"> <!-- Header --> <header class="top-header"> <div class="header-left"> <button id="sidebar-toggle-btn" class="header-mobile-toggle"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> <div class="header-right"> <span class="admin-badge">Super Admin</span> <div class="user-profile-menu"> <button id="profile-dropdown-trigger" class="user-profile-trigger"> <img id="top-avatar" src="https://ui-avatars.com/api/?name=Admin&size=24" class="avatar-img" alt="Avatar"> <span id="top-user-name">Admin</span> </button> <div id="profile-dropdown-menu" class="dropdown-menu hidden"> <div class="dropdown-header"> <div id="dropdown-user-name" class="dropdown-user-name">Loading...</div> <div id="dropdown-user-email" class="dropdown-user-email">...</div> </div> <a href="/profile" class="dropdown-item">Profil Saya</a> <button id="dropdown-logout-btn" class="dropdown-item" style="color:#ef4444">Keluar</button> </div> </div> </div> </header> <!-- Page Content --> <main class="page-content"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderScript($$result, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
