import{a as C}from"./api.BC8_tjCW.js";import{b as R}from"./auth.CMd_5598.js";R();const U=document.getElementById("private-area"),u=document.getElementById("domains-loading"),f=document.getElementById("domains-empty"),T=document.getElementById("domains-table-wrapper"),D=document.getElementById("domains-list-body"),j=document.getElementById("refresh-btn"),s=document.getElementById("search-input"),o=document.getElementById("status-filter"),F=document.getElementById("filter-btn"),S=document.getElementById("pagination-container"),q=document.getElementById("pagination-info"),A=document.getElementById("prev-page-btn"),H=document.getElementById("next-page-btn");let e=1;const P=10;let y=1,a="",n="",$=0;const l=new URLSearchParams(window.location.search);l.has("page")&&(e=parseInt(l.get("page")||"1",10));l.has("name")&&(a=l.get("name")||"");l.has("status")&&(n=l.get("status")||"");s&&(s.value=a);o&&(o.value=n);U.classList.remove("hidden");w();j?.addEventListener("click",()=>w());F?.addEventListener("click",()=>{a=s.value.trim(),n=o.value,e=1,c()});let M;s?.addEventListener("input",()=>{clearTimeout(M),M=setTimeout(()=>{a=s.value.trim(),e=1,c()},300)});s?.addEventListener("keypress",t=>{t.key==="Enter"&&(a=s.value.trim(),n=o.value,e=1,c())});o?.addEventListener("change",()=>{a=s.value.trim(),n=o.value,e=1,c()});A?.addEventListener("click",()=>{e>1&&(e--,c())});H?.addEventListener("click",()=>{e<y&&(e++,c())});function c(){const t=new URL(window.location.href);e>1?t.searchParams.set("page",String(e)):t.searchParams.delete("page"),a?t.searchParams.set("name",a):t.searchParams.delete("name"),n?t.searchParams.set("status",n):t.searchParams.delete("status"),window.history.pushState({},"",t.toString()),w()}async function w(){const t=++$;u.classList.remove("hidden"),T.classList.add("hidden"),f.classList.add("hidden"),S.classList.add("hidden");try{const d=new URLSearchParams;d.append("page",String(e)),d.append("limit",String(P)),a&&d.append("name",a),n&&d.append("status",n);const r=await C(`/api/domains?${d.toString()}`);if(t!==$)return;if(u.classList.add("hidden"),r.success&&r.data&&r.data.length>0){D.innerHTML="",T.classList.remove("hidden"),r.data.forEach(i=>{const _=i.name||i.domain_name||i.domain||"-",g=i.status;let p="badge-active",m="active";g===0?(p="badge-pending",m="pending"):g===2?(p="badge-expired",m="expired"):g===3?(p="badge-expired",m="pend. delete"):g===7&&(p="badge-suspended",m="suspended");let E="-",v="";if(i.expired_at){const x=new Date(i.expired_at);E=x.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"});const h=Math.ceil((x.getTime()-Date.now())/864e5);h>0?v=`<div class="expiry-remaining ${h<=14?"danger":h<=30?"warn":""}">${h} hari tersisa</div>`:v='<div class="expiry-remaining danger">Expired</div>'}let k="-";const B=i.created_at||i.registered_at||i.created;B&&(k=new Date(B).toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}));const I=document.createElement("tr");I.innerHTML=`
              <td><span class="domain-name">${_}</span></td>
              <td><span class="badge ${p}">${m}</span></td>
              <td>
                <div class="plan-period">1 Tahun</div>
                <div class="plan-price">Rp 120.000</div>
              </td>
              <td><div class="expiry-date">${k}</div></td>
              <td>
                <div class="expiry-date">${E}</div>
                ${v}
              </td>
              <td>
                <a href="/domains/${i.id}" class="btn btn-outline btn-sm-custom" style="height:32px;padding:0 12px;font-weight:600;display:inline-flex;align-items:center;gap:6px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  Kelola
                </a>
              </td>
            `,D.appendChild(I)});const L=r.meta||{},b=L.total||r.data.length;y=L.last_page||Math.ceil(b/P)||1,q.innerText=`Halaman ${e} dari ${y} (Total: ${b})`,A.disabled=e<=1,H.disabled=e>=y,S.classList.remove("hidden")}else z(!a&&!n)}catch(d){console.error("Failed to load domains:",d),u.classList.add("hidden"),z(!a&&!n)}}function z(t){u.classList.add("hidden"),t?f.innerHTML=`
          <div style="padding: 48px 24px; text-align: center;">
            <div style="font-size: 52px; margin-bottom: 16px;">👋</div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 10px;">Belum Ada Domain Terdaftar</h3>
            <p style="font-size: 13px; color: var(--text-secondary); max-width: 440px; margin: 0 auto 24px; line-height: 1.6;">
              Anda belum memiliki domain di akun ini. Daftarkan domain pertama Anda sekarang!
            </p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <a href="/" class="btn btn-primary" style="height:40px;font-size:13px;font-weight:700;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:13px;height:13px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Daftar Domain Baru
              </a>
              <a href="/domains/transfer" class="btn btn-outline" style="height:40px;font-size:13px;font-weight:600;">
                Transfer Domain
              </a>
            </div>
          </div>
        `:f.innerHTML=`
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 8px">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <p>Tidak ada domain yang cocok dengan pencarian Anda.</p>
        `,f.classList.remove("hidden")}
