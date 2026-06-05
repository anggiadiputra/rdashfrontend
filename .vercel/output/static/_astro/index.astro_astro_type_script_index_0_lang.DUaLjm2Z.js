import{a as C}from"./api.BC8_tjCW.js";import{b as j}from"./auth.CMd_5598.js";j();const _=document.getElementById("private-area"),v=document.getElementById("domains-loading"),r=document.getElementById("domains-empty"),I=document.getElementById("domains-table-wrapper"),D=document.getElementById("domains-list-body"),R=document.getElementById("refresh-btn"),s=document.getElementById("search-input"),l=document.getElementById("status-filter"),U=document.getElementById("filter-btn"),M=document.getElementById("pagination-container"),F=document.getElementById("pagination-info"),$=document.getElementById("prev-page-btn"),z=document.getElementById("next-page-btn");let e=1;const A=10;let x=1,t="",n="",P=0;const c=new URLSearchParams(window.location.search);c.has("page")&&(e=parseInt(c.get("page")||"1",10));c.has("name")&&(t=c.get("name")||"");c.has("status")&&(n=c.get("status")||"");s&&(s.value=t);l&&(l.value=n);_.classList.remove("hidden");w();R?.addEventListener("click",()=>w());U?.addEventListener("click",()=>{t=s.value.trim(),n=l.value,e=1,p()});let S;s?.addEventListener("input",()=>{clearTimeout(S),S=setTimeout(()=>{t=s.value.trim(),e=1,p()},300)});s?.addEventListener("keypress",a=>{a.key==="Enter"&&(t=s.value.trim(),n=l.value,e=1,p())});l?.addEventListener("change",()=>{t=s.value.trim(),n=l.value,e=1,p()});$?.addEventListener("click",()=>{e>1&&(e--,p())});z?.addEventListener("click",()=>{e<x&&(e++,p())});function p(){const a=new URL(window.location.href);e>1?a.searchParams.set("page",String(e)):a.searchParams.delete("page"),t?a.searchParams.set("name",t):a.searchParams.delete("name"),n?a.searchParams.set("status",n):a.searchParams.delete("status"),window.history.pushState({},"",a.toString()),w()}async function w(){const a=++P;v.classList.remove("hidden"),I.classList.add("hidden"),r.classList.add("hidden"),M.classList.add("hidden");try{const d=new URLSearchParams;d.append("page",String(e)),d.append("limit",String(A)),t&&d.append("name",t),n&&d.append("status",n);const o=await C(`/api/domains?${d.toString()}`);if(a!==P)return;if(v.classList.add("hidden"),o.success&&o.data&&o.data.length>0){D.innerHTML="",I.classList.remove("hidden"),o.data.forEach(i=>{const H=i.name||i.domain_name||i.domain||"-",h=i.status;let g="badge-active",m="active";h===0?(g="badge-pending",m="pending"):h===2?(g="badge-expired",m="expired"):h===3?(g="badge-expired",m="pend. delete"):h===7&&(g="badge-suspended",m="suspended");let L="-",f="";if(i.expired_at){const y=new Date(i.expired_at);L=y.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"});const u=Math.ceil((y.getTime()-Date.now())/864e5);u>0?f=`<div class="expiry-remaining ${u<=14?"danger":u<=30?"warn":""}">${u} hari tersisa</div>`:f='<div class="expiry-remaining danger">Expired</div>'}let B="-";const E=i.created_at||i.registered_at||i.created;E&&(B=new Date(E).toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}));const T=document.createElement("tr");T.innerHTML=`
              <td><span class="domain-name">${H}</span></td>
              <td><span class="badge ${g}">${m}</span></td>
              <td>
                <div class="plan-period">1 Tahun</div>
                <div class="plan-price">Rp 120.000</div>
              </td>
              <td>
                <div class="expiry-date">${B}</div>
              </td>
              <td>
                <div class="expiry-date">${L}</div>
                ${f}
              </td>
              <td>
                <div style="display:flex;gap:12px;">
                  <a href="/domains/${i.id}" class="btn btn-outline btn-sm-custom" style="height: 32px; padding: 0 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
                    <svg class="lucide lucide-edit-3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    Kelola
                  </a>
                </div>
              </td>
            `,D.appendChild(T)});const b=o.meta||{},k=b.total||o.data.length;x=b.last_page||Math.ceil(k/A)||1,F.innerText=`Halaman ${e} dari ${x} (Total: ${k})`,$.disabled=e<=1,z.disabled=e>=x,M.classList.remove("hidden")}else!t&&!n?r.innerHTML=`
              <div style="padding: 48px 24px; text-align: center;">
                <div style="font-size: 56px; margin-bottom: 20px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.08));">👋</div>
                <h3 style="font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 10px;">Belum Ada Domain Terdaftar</h3>
                <p style="font-size: 13.5px; color: var(--text-secondary); max-width: 480px; margin: 0 auto 28px; line-height: 1.6;">
                  Anda belum memiliki domain terdaftar di akun Anda. Mulai kelola bisnis Anda dengan mendaftarkan domain pertama Anda hari ini!
                </p>
                <div style="display: flex; gap: 14px; justify-content: center; align-items: center; flex-wrap: wrap;">
                  <a href="/" class="btn btn-primary" style="height: 42px; font-size: 13.5px; font-weight: 700; border-radius: 8px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:14px;height:14px;margin-right:4px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Daftar Domain Baru
                  </a>
                  <a href="/domains/transfer" class="btn btn-outline" style="height: 42px; font-size: 13.5px; font-weight: 600; border-radius: 8px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;margin-right:4px;"><path d="m16 3 4 4-4 4"/><path d="M20 7H9a4 4 0 0 0-4 4v9"/><path d="m8 21-4-4 4-4"/><path d="M4 17h11a4 4 0 0 0 4-4V4"/></svg>
                    Transfer Domain
                  </a>
                </div>
              </div>
            `:r.innerHTML=`
              <svg class="lucide lucide-globe" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 8px">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <p>Tidak ada domain yang cocok dengan pencarian Anda.</p>
            `,r.classList.remove("hidden")}catch(d){console.error("Failed to load domains:",d),v.classList.add("hidden"),!t&&!n?r.innerHTML=`
            <div style="padding: 48px 24px; text-align: center;">
              <div style="font-size: 56px; margin-bottom: 20px;">👋</div>
              <h3 style="font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 10px;">Belum Ada Domain Terdaftar</h3>
              <p style="font-size: 13.5px; color: var(--text-secondary); max-width: 480px; margin: 0 auto 28px; line-height: 1.6;">
                Anda belum memiliki domain terdaftar di akun Anda. Mulai kelola bisnis Anda dengan mendaftarkan domain pertama Anda hari ini!
              </p>
              <div style="display: flex; gap: 14px; justify-content: center; align-items: center; flex-wrap: wrap;">
                <a href="/" class="btn btn-primary" style="height: 42px; font-size: 13.5px; font-weight: 700; border-radius: 8px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:14px;height:14px;margin-right:4px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Daftar Domain Baru
                </a>
                <a href="/domains/transfer" class="btn btn-outline" style="height: 42px; font-size: 13.5px; font-weight: 600; border-radius: 8px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;margin-right:4px;"><path d="m16 3 4 4-4 4"/><path d="M20 7H9a4 4 0 0 0-4 4v9"/><path d="m8 21-4-4 4-4"/><path d="M4 17h11a4 4 0 0 0 4-4V4"/></svg>
                  Transfer Domain
                </a>
              </div>
            </div>
          `:r.innerHTML=`
            <svg class="lucide lucide-globe" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 8px">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <p>Tidak ada domain yang cocok dengan pencarian Anda.</p>
          `,r.classList.remove("hidden")}}
