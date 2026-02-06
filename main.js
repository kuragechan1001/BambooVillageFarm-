/**
 * Bamboo Village Farm - 共通のJavaScript
 * 全ページで使う「メニュー開閉」「トップへ戻る」などの動きをまとめています。
 */

/* トップへ戻るボタン */
document.querySelector('.scroll-top-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ハンバーガーメニュー（スマホ用）開閉 */
document.querySelector('.nav-toggle')?.addEventListener('click', function() {
  this.classList.toggle('is-open');
  document.querySelector('.nav-menu')?.classList.toggle('is-open');
  this.setAttribute('aria-expanded', this.classList.contains('is-open'));
});

/* ドロップダウン：一個開いたら他は閉じる（PC・ケータイ共通） */
document.querySelectorAll('.nav-dropdown-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var parent = this.closest('.nav-dropdown');
    var wasOpen = parent.classList.contains('is-open');
    document.querySelectorAll('.nav-dropdown.is-open').forEach(function(el) {
      el.classList.remove('is-open');
      el.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      parent.classList.add('is-open');
      this.setAttribute('aria-expanded', 'true');
    }
  }, true);
});

/* メニュー外をクリックしたらドロップダウンを閉じる */
document.addEventListener('click', function() {
  document.querySelectorAll('.nav-dropdown.is-open').forEach(function(el) {
    el.classList.remove('is-open');
    el.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
  });
});
