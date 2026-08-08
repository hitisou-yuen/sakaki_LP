/* =========================================================
   LINEヤフー広告 計測タグ（グローバルスニペット相当）
   タグID: d61a92ed-025a-44c5-b0a2-9af25277044d
   ========================================================= */
   window.lyDataLayer = window.lyDataLayer || [];

   function lytag() {
     window.lyDataLayer.push(Array.from(arguments));
   }
   
   lytag({
     type: 'init',
     tagId: 'd61a92ed-025a-44c5-b0a2-9af25277044d',
     config: {
       useCookie: true,
       useLocalStorage: true
     }
   });
   
   /* LINEヤフー広告の計測ライブラリを読み込み */
   (function () {
     const s = document.createElement('script');
     s.async = true;
     s.src = 'https://tag.flvcdn.net/lytag.js';
     document.head.appendChild(s);
   })();
   
   document.documentElement.classList.add('js');
   
   /* =========================================================
      【購入リンク】
      月額1,480円の35cm定期便 Stripe購入URL
      ========================================================= */
   const LINKS = {
     purchase35: 'https://buy.stripe.com/dRmcN6cnt1X1c8R72018c01'
   };
   
   document.querySelectorAll('[data-link]').forEach(link => {
     const key = link.dataset.link;
     if (LINKS[key]) link.href = LINKS[key];
   });
   
   /* 軽いフェードイン。JavaScript無効時も本文は表示されます。 */
   const revealItems = document.querySelectorAll('.reveal');
   if ('IntersectionObserver' in window) {
     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('is-visible');
           observer.unobserve(entry.target);
         }
       });
     }, {threshold: .08, rootMargin: '0px 0px -40px'});
     revealItems.forEach(item => observer.observe(item));
   } else {
     revealItems.forEach(item => item.classList.add('is-visible'));
   }
   
   /* 画像が存在しない場合はHTML内の差し替え案内を表示 */
   document.querySelectorAll('.media-frame img').forEach(img => {
     const showPlaceholder = () => img.parentElement.classList.add('is-missing');
     img.addEventListener('error', showPlaceholder, {once: true});
     if (img.complete && img.naturalWidth === 0) showPlaceholder();
   });