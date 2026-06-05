import{a as B}from"./api.BC8_tjCW.js";let a=1;const h=10;let u="",y="all",g=0,v=1;const i=document.getElementById("pagination-container"),w=document.getElementById("pagination-info"),f=document.getElementById("prev-page"),x=document.getElementById("next-page"),o=t=>{const e=typeof t=="string"?parseFloat(t):t;return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)},L=t=>t==="register"?"Registrasi":t==="renew"?"Perpanjangan":t==="transfer"?"Transfer":t,T=()=>{const t=document.getElementById("transactions-tbody");t&&(t.innerHTML=`
        <tr>
          <td colspan="9" style="text-align: center; padding: 60px 20px; vertical-align: middle;">
            <div class="spinner"></div>
            <p style="margin-top: 12px; font-weight: 500; font-size: 13px; color: var(--text-secondary);">Memuat riwayat transaksi...</p>
          </td>
        </tr>
      `),i&&i.classList.add("hidden")},m=(t=!1)=>{const e=document.getElementById("transactions-tbody");e&&(i&&i.classList.add("hidden"),t?e.innerHTML=`
        <tr>
          <td colspan="9" style="text-align: center; padding: 60px 20px; vertical-align: middle; color: #ef4444;">
            <svg class="lucide lucide-alert-circle" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display: block; margin: 0 auto 12px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p style="font-size: 13px; font-weight: 500; color: #ef4444;">Gagal memuat data transaksi. Silakan coba lagi.</p>
          </td>
        </tr>
      `:e.innerHTML=`
        <tr>
          <td colspan="9" style="text-align: center; padding: 60px 20px; vertical-align: middle; color: var(--text-secondary);">
            <svg class="lucide lucide-minus-circle" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); display: block; margin: 0 auto 12px;"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            <p style="font-size: 13px; color: var(--text-secondary);">Tidak ada transaksi lokal yang tercatat.</p>
          </td>
        </tr>
      `)},_=(t,e)=>{const r=document.getElementById("transactions-tbody");if(!r)return;r.innerHTML=t.map(n=>{const d=n.customer?.name??"Customer",p=n.customer?.email??"-",E=parseFloat(n.cost_price??0),$=parseFloat(n.markup_price??0),b=parseFloat(n.margin??0),I=n.reference?`<code style="background:var(--bg);padding:2px 6px;border-radius:4px;font-size:11px;color: var(--text-secondary); font-family: monospace;">${n.reference}</code>`:'<span style="color: var(--text-muted); font-size: 12px;">-</span>';return`
        <tr>
          <td style="color: var(--text-primary); font-weight: 600;">#${n.id}</td>
          <td>
            <div style="font-weight: 600; color: var(--text);">${d}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${p}</div>
          </td>
          <td>
            <div style="font-weight: 600; color: var(--text);">${n.domain_name}</div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 4px;">
              <span style="font-size: 10px; color: var(--text-muted);">Ref:</span>
              ${I}
            </div>
          </td>
          <td>
            <span class="badge-transaction ${n.action}">${L(n.action)}</span>
          </td>
          <td style="text-align: center; font-weight: 500;">${n.period} th</td>
          <td style="text-align: right; color: var(--text-secondary); font-weight: 600;">${o(E)}</td>
          <td style="text-align: right; color: var(--text); font-weight: 700;">${o($)}</td>
          <td style="text-align: right; color: #16a34a; font-weight: 700;">+${o(b)}</td>
          <td>${new Date(n.created_at).toLocaleString("id-ID")}</td>
        </tr>
      `}).join(""),f&&(f.disabled=a===1),x&&(x.disabled=a>=v);const l=e+1,c=Math.min(e+t.length,g);w&&(w.textContent=`Halaman ${a} (Menampilkan ${l}-${c} dari ${g} transaksi)`),i.classList.remove("hidden")},s=async()=>{T();try{const t=new URLSearchParams;t.append("page",String(a)),t.append("limit",String(h)),y!=="all"&&t.append("action",y),u&&t.append("search",u);const e=await B(`/api/admin/transactions?${t.toString()}`);if(e&&e.success&&e.data){const r=e.meta||{};g=r.total||0,v=r.last_page||1;const l=r.stats||{total_cost:0,total_revenue:0,total_profit:0},c=document.getElementById("stats-total-count"),n=document.getElementById("stats-total-revenue"),d=document.getElementById("stats-total-profit");if(c&&(c.textContent=String(g)),n&&(n.textContent=o(l.total_revenue)),d&&(d.textContent=o(l.total_profit)),e.data.length>0){const p=(a-1)*h;_(e.data,p)}else m(!1)}else m(!0)}catch(t){console.error("Error loading local transactions:",t),m(!0)}};s();document.getElementById("filter-action")?.addEventListener("change",t=>{y=t.target.value,a=1,s()});let k;document.getElementById("transactions-search-input")?.addEventListener("input",t=>{clearTimeout(k),k=setTimeout(()=>{u=t.target.value.trim(),a=1,s()},350)});f?.addEventListener("click",()=>{a>1&&(a--,s())});x?.addEventListener("click",()=>{a<v&&(a++,s())});
