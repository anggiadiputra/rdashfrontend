import { c as createComponent } from './astro-component_hGugj5uq.mjs';
import 'piccolore';
import { t as renderHead, k as addAttribute, v as renderTemplate, s as renderComponent, d as Fragment, u as renderSlot } from './entrypoint_D-SQgKuM.mjs';
import { r as renderScript } from './global_DLbMSgJ1.mjs';

const $$DashboardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, activeMenu = "dashboard" } = Astro2.props;
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
    console.warn("Failed to fetch settings from API in DashboardLayout.astro, using default branding.");
  }
  const logoUrl = appLogo ? `${apiUrl}${appLogo}` : "";
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} — ${appName}</title>${renderHead()}</head> <body> <!-- ── SIDEBAR OVERLAY ── --> <div id="sidebar-overlay" class="sidebar-overlay hidden"></div> <!-- ── SIDEBAR ── --> <aside class="sidebar"> <!-- Logo --> <a href="/dashboard" class="sidebar-logo"> ${logoUrl ? renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(appName, "alt")} style="max-height: 32px; max-width: 100%; object-fit: contain; display: block;">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <div class="logo-icon"> <svg class="lucide lucide-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> </svg> </div> <span class="logo-text"> ${appName.toLowerCase() === "ruangtunggu" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<span style="color:var(--text);font-weight:700">ruang</span>tunggu` })}` : appName} </span> ` })}`} </a> <nav class="sidebar-nav"> <!-- INFRASTRUCTURE --> <div class="nav-group"> <div class="nav-group-label">Menu</div> <a href="/dashboard"${addAttribute(`nav-item ${activeMenu === "dashboard" ? "active" : ""}`, "class")}> <svg class="lucide lucide-layout-dashboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="7" height="9" x="3" y="3" rx="1"></rect> <rect width="7" height="5" x="14" y="3" rx="1"></rect> <rect width="7" height="9" x="14" y="12" rx="1"></rect> <rect width="7" height="5" x="3" y="16" rx="1"></rect> </svg>
Dashboard
</a> <a href="/dashboard/domains"${addAttribute(`nav-item ${activeMenu === "domains" ? "active" : ""}`, "class")}> <svg class="lucide lucide-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> </svg>
Domains
</a> <a href="/dashboard/whois"${addAttribute(`nav-item ${activeMenu === "whois" ? "active" : ""}`, "class")}> <svg class="lucide lucide-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line> </svg>
Cek WHOIS
</a> <a href="/dashboard/prices"${addAttribute(`nav-item ${activeMenu === "prices" ? "active" : ""}`, "class")}> <svg class="lucide lucide-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path> <line x1="7" y1="7" x2="7.01" y2="7"></line> </svg>
Daftar Harga
</a> </div> <!-- ACCOUNT --> <div class="nav-group"> <div class="nav-group-label">Account</div> <button type="button" class="nav-item"> <svg class="lucide lucide-credit-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="14" x="2" y="5" rx="2"></rect> <line x1="2" x2="22" y1="10" y2="10"></line> </svg>
Billing
</button> <a href="/profile"${addAttribute(`nav-item ${activeMenu === "profile" ? "active" : ""}`, "class")}> <svg class="lucide lucide-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> </svg>
Profil
</a> <button class="nav-item" id="logout-btn"> <svg class="lucide lucide-log-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path> <polyline points="16 17 21 12 16 7"></polyline> <line x1="21" y1="12" x2="9" y2="12"></line> </svg>
Keluar
</button> </div> <!-- ADMIN LINK (Visible only if user.is_admin is true) --> <div class="nav-group hidden" id="admin-menu-group"> <div class="nav-group-label" style="color:#e11d48">Administrator</div> <a href="/admin/billing" class="nav-item" style="color:#e11d48;font-weight:600;"> <svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:#e11d48"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg>
Panel Admin
</a> </div> </nav> <div class="sidebar-scroll-hint"> <svg class="lucide lucide-chevron-down" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
Scroll for More
</div> </aside> <!-- ── MAIN ── --> <div class="main-wrap"> <!-- Topbar --> <div class="topbar"> <!-- Toggle button for mobile sidebar --> <button id="sidebar-toggle-btn" class="sidebar-toggle-btn" aria-label="Toggle sidebar"> <svg class="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> </button> <div class="topbar-user" id="profile-dropdown-trigger" style="position: relative; cursor: pointer;"> <div class="topbar-info"> <div class="topbar-name" id="top-user-name">—</div> <div class="topbar-email" id="top-user-email">—</div> </div> <img id="top-avatar" class="topbar-avatar" src="https://ui-avatars.com/api/?name=U&size=32" alt="avatar"> <!-- Profile Dropdown Menu --> <div id="profile-dropdown-menu" class="profile-dropdown hidden"> <div class="dropdown-header"> <div class="dropdown-name" id="dropdown-user-name">—</div> <div class="dropdown-email" id="dropdown-user-email">—</div> </div> <hr class="dropdown-divider"> <a href="/profile" class="dropdown-item"> <svg class="dropdown-icon lucide lucide-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
Profil Saya
</a> <button type="button" class="dropdown-item"> <svg class="dropdown-icon lucide lucide-credit-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
Riwayat Penagihan
</button> <a href="/dashboard/domains" class="dropdown-item"> <svg class="dropdown-icon lucide lucide-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
Domains Saya
</a> <a href="/dashboard/prices" class="dropdown-item"> <svg class="dropdown-icon lucide lucide-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
Daftar Harga
</a> <hr class="dropdown-divider"> <button id="dropdown-logout-btn" class="dropdown-item"> <svg class="dropdown-icon lucide lucide-log-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
Keluar
</button> </div> </div> </div> <!-- Page Content --> <div class="page-content"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${renderScript($$result, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/zuraidasafitri/Downloads/ruangtunggu/ruangtunggu-web/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
