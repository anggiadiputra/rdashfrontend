import{a as I}from"./api.BC8_tjCW.js";let h=[],n=1;const c=15;let x="",r=[];const m=document.getElementById("customers-loading"),u=document.getElementById("customers-empty"),f=document.getElementById("customers-table-wrapper"),L=document.getElementById("customers-tbody"),g=document.getElementById("pagination-container"),E=document.getElementById("pagination-info"),v=document.getElementById("prev-page"),y=document.getElementById("next-page"),o=()=>{if(!L)return;if(r=h.filter(s=>{const d=x.toLowerCase();return s.name.toLowerCase().includes(d)||s.email.toLowerCase().includes(d)||s.organization&&s.organization.toLowerCase().includes(d)}),r.length===0){f.classList.add("hidden"),u.classList.remove("hidden"),g.classList.add("hidden");return}u.classList.add("hidden"),f.classList.remove("hidden"),g.classList.remove("hidden");const e=r.length,t=Math.ceil(e/c);n>t&&(n=Math.max(1,t));const a=(n-1)*c,i=a+c,l=r.slice(a,i);L.innerHTML=l.map(s=>{const d=new Date(s.created_at).toLocaleDateString("id-ID",{year:"numeric",month:"2-digit",day:"2-digit"}),p=s.city?`${s.city}, ${s.country_code}`:"-",b=s.is_verified||s.rdash_customer_id,T=b?"Verified":"Pending",S=b?"badge-active":"badge-pending";return`
        <tr>
          <td>
            <div class="domain-name">${s.name}</div>
            <div class="expiry-remaining">${s.email}</div>
          </td>
          <td>
            <span class="badge ${S}">${T}</span>
          </td>
          <td>
            <div class="plan-period">${s.organization||"-"}</div>
          </td>
          <td>
            <div class="expiry-date">${p}</div>
          </td>
          <td>
            <div class="expiry-date">${d}</div>
          </td>
          <td style="text-align: right;">
            <button class="btn btn-outline btn-sm-custom detail-btn" data-id="${s.id}" style="height:32px;padding:0 12px;font-weight:600;display:inline-flex;align-items:center;gap:6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Detail
            </button>
          </td>
        </tr>
      `}).join(""),document.querySelectorAll(".detail-btn").forEach(s=>{s.addEventListener("click",d=>{const p=d.target.dataset.id;_(p)})}),v&&(v.disabled=n===1),y&&(y.disabled=n>=t);const k=a+1,C=Math.min(a+l.length,e);E&&(E.textContent=`Halaman ${n} (Menampilkan ${k}-${C} dari ${e} customer)`)},B=async()=>{m.classList.remove("hidden"),f.classList.add("hidden"),u.classList.add("hidden"),g.classList.add("hidden");try{const e=await I("/api/admin/customers");m.classList.add("hidden"),e&&e.data&&(h=e.data),o()}catch(e){console.error("Failed to load customers:",e),m.classList.add("hidden"),o()}},_=e=>{if(!e)return;const t=h.find(l=>String(l.id)===e);if(!t)return;const a=document.getElementById("profile-modal"),i=document.getElementById("modal-profile-content");i&&(i.innerHTML=`
      <div class="profile-grid">
        <div class="profile-field">
          <span class="profile-label">Nama Lengkap</span>
          <span class="profile-value">${t.name}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Alamat Email</span>
          <span class="profile-value">${t.email}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Organisasi</span>
          <span class="profile-value">${t.organization||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">No. Telepon / Voice</span>
          <span class="profile-value">${t.voice||"-"}</span>
        </div>
        <div class="profile-field full-width">
          <span class="profile-label">Alamat Jalan 1</span>
          <span class="profile-value">${t.street_1||"-"}</span>
        </div>
        <div class="profile-field full-width">
          <span class="profile-label">Alamat Jalan 2</span>
          <span class="profile-value">${t.street_2||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Kota</span>
          <span class="profile-value">${t.city||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Provinsi / State</span>
          <span class="profile-value">${t.state||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Kode Pos</span>
          <span class="profile-value">${t.postal_code||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Negara / Country Code</span>
          <span class="profile-value">${t.country_code||"-"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">ID Customer RDASH</span>
          <span class="profile-value">#${t.rdash_customer_id||"Belum Terhubung"}</span>
        </div>
        <div class="profile-field">
          <span class="profile-label">Tanggal Bergabung</span>
          <span class="profile-value">${new Date(t.created_at).toLocaleString("id-ID")}</span>
        </div>
      </div>
    `,a?.classList.remove("hidden"))},w=()=>{document.getElementById("profile-modal")?.classList.add("hidden")},D=async()=>{const e=document.getElementById("sync-customers-btn");if(!e||e.classList.contains("syncing"))return;e.classList.add("syncing"),e.disabled=!0;const t=e.querySelector("span");t&&(t.textContent="Menyinkronkan...");try{const a=await I("/api/admin/sync-customers",{method:"POST"}),i=document.getElementById("sync-alert"),l=document.getElementById("sync-alert-text");i&&l&&(l.textContent=`Sinkronisasi selesai! Berhasil menambahkan ${a.data?.synced||0} customer baru (melewati ${a.data?.skipped||0} data lama).`,i.classList.remove("hidden"),setTimeout(()=>i.classList.add("hidden"),5e3)),await B()}catch(a){alert("Gagal menyinkronkan data customer: "+a.message)}finally{e.classList.remove("syncing"),e.disabled=!1,t&&(t.textContent="Sinkronisasi dari RDASH")}};document.getElementById("sync-customers-btn")?.addEventListener("click",D);document.getElementById("close-modal-btn")?.addEventListener("click",w);document.getElementById("close-modal-btn2")?.addEventListener("click",w);v?.addEventListener("click",()=>{n>1&&(n--,o())});y?.addEventListener("click",()=>{const e=Math.ceil(r.length/c);n<e&&(n++,o())});let $;document.getElementById("search-input")?.addEventListener("input",e=>{clearTimeout($),$=setTimeout(()=>{x=e.target.value.trim(),n=1,o()},300)});B();
