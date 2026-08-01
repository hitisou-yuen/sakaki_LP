document.documentElement.classList.add('js');

/* =========================================================
   【最重要：リンク編集箇所】
   下記2つのURLだけを差し替えると、ページ内の全ボタンへ反映されます。
   purchase35：35cm定期便のStripe等の購入URL
   product25 ：25cm家庭向けLPまたは購入ページURL
   ========================================================= */
const LINKS = {
  purchase35: 'https://example.com/replace-with-35cm-purchase-link',
  product25: 'https://example.com/replace-with-25cm-product-link'
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
