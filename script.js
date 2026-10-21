'use strict';

const image = document.getElementById('wechat-qr');
const save = document.getElementById('save-qr');
const hint = document.getElementById('save-hint');

// A real same-origin image download; no WeChat scheme or external service.
save.addEventListener('click', (event) => {
  if (save.getAttribute('aria-disabled') === 'true') {
    event.preventDefault();
    return;
  }
  hint.textContent = '如未自动保存，点开二维码，长按图片保存。';
});

function imageFailed() {
  save.setAttribute('aria-disabled', 'true');
  save.removeAttribute('download');
  hint.textContent = '二维码暂时加载失败，请刷新页面后重试。';
}
image.addEventListener('error', imageFailed);
if (image.complete && image.naturalWidth === 0) imageFailed();
