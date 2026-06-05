import{a as F}from"./api.BC8_tjCW.js";const h=document.getElementById("domains-loading"),v=document.getElementById("domains-empty"),$=document.getElementById("domains-table-wrapper"),D=document.getElementById("domains-list-body"),R=document.getElementById("refresh-btn"),i=document.getElementById("search-input"),o=document.getElementById("status-filter"),q=document.getElementById("filter-btn"),P=document.getElementById("pagination-container"),K=document.getElementById("pagination-info"),H=document.getElementById("prev-page-btn"),A=document.getElementById("next-page-btn");let t=1;const S=20;let f=1,n="",s="",M=0;const l=new URLSearchParams(window.location.search);l.has("page")&&(t=parseInt(l.get("page")||"1",10));l.has("name")&&(n=l.get("name")||"");l.has("status")&&(s=l.get("status")||"");i&&(i.value=n);o&&(o.value=s);L();R?.addEventListener("click",()=>L());q?.addEventListener("click",()=>{n=i.value.trim(),s=o.value,t=1,c()});let _;i?.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(()=>{n=i.value.trim(),t=1,c()},300)});i?.addEventListener("keypress",a=>{a.key==="Enter"&&(n=i.value.trim(),s=o.value,t=1,c())});o?.addEventListener("change",()=>{n=i.value.trim(),s=o.value,t=1,c()});H?.addEventListener("click",()=>{t>1&&(t--,c())});A?.addEventListener("click",()=>{t<f&&(t++,c())});function c(){const a=new URL(window.location.href);t>1?a.searchParams.set("page",String(t)):a.searchParams.delete("page"),n?a.searchParams.set("name",n):a.searchParams.delete("name"),s?a.searchParams.set("status",s):a.searchParams.delete("status"),window.history.pushState({},"",a.toString()),L()}async function L(){const a=++M;h.classList.remove("hidden"),$.classList.add("hidden"),v.classList.add("hidden"),P.classList.add("hidden");try{const d=new URLSearchParams;d.append("page",String(t)),d.append("limit",String(S)),n&&d.append("search",n),s&&d.append("status",s);const r=await F(`/api/admin/domains?${d.toString()}`);if(a!==M)return;if(h.classList.add("hidden"),r.success&&r.data&&r.data.length>0){D.innerHTML="",$.classList.remove("hidden"),r.data.forEach(e=>{const U=e.name||e.domain_name||e.domain||"-",g=e.status;let m="badge-active",p="active";g===0?(m="badge-pending",p="pending"):g===2?(m="badge-expired",p="expired"):g===3?(m="badge-expired",p="pend. delete"):g===7&&(m="badge-suspended",p="suspended");let b="-",y="";if(e.expired_at){const x=new Date(e.expired_at);b=x.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"});const u=Math.ceil((x.getTime()-Date.now())/864e5);u>0?y=`<div class="expiry-remaining ${u<=14?"danger":u<=30?"warn":""}">${u} hari tersisa</div>`:y='<div class="expiry-remaining danger">Expired</div>'}let I="-";const B=e.created_at||e.registered_at||e.created;B&&(I=new Date(B).toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}));const k=e.customer&&typeof e.customer=="object"?e.customer.id:typeof e.customer=="number"?e.customer:e.customer_id,j=e.customer?.name||(k?`Customer ID #${k}`:"Tidak Ada Data"),z=e.customer?.email||"",T=document.createElement("tr");T.innerHTML=`
              <td><span class="domain-name">${U}</span></td>
              <td><span class="badge ${m}">${p}</span></td>
              <td>
                <div class="plan-period">${j}</div>
                <div class="plan-price">${z}</div>
              </td>
              <td><div class="expiry-date">${I}</div></td>
              <td>
                <div class="expiry-date">${b}</div>
                ${y}
              </td>
              <td>
                <a href="/domains/${e.id}/overview" class="btn btn-outline btn-sm-custom" style="height:32px;padding:0 12px;font-weight:600;display:inline-flex;align-items:center;gap:6px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  Kelola
                </a>
              </td>
            `,D.appendChild(T)});const w=r.meta||{},E=w.total||r.data.length;f=w.last_page||Math.ceil(E/S)||1,K.innerText=`Halaman ${t} dari ${f} (Total: ${E})`,H.disabled=t<=1,A.disabled=t>=f,P.classList.remove("hidden")}else C(!n&&!s)}catch(d){console.error("Failed to load domains:",d),h.classList.add("hidden"),C(!n&&!s)}}function C(a){h.classList.add("hidden"),a?v.innerHTML=`
          <div style="padding: 48px 24px; text-align: center;">
            <h3 style="font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 10px;">Belum Ada Domain Pelanggan</h3>
            <p style="font-size: 13px; color: var(--text-secondary); max-width: 440px; margin: 0 auto 24px; line-height: 1.6;">
              Tidak ada data domain pelanggan di sistem reseller saat ini.
            </p>
          </div>
        `:v.innerHTML=`
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 8px">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <p>Tidak ada domain yang cocok dengan pencarian Anda.</p>
        `,v.classList.remove("hidden")}
