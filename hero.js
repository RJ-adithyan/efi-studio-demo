(() => {
  const root = document.querySelector('.efi-hero[data-dk-motion]');
  if (!root || !window.DemoKitMotion) return;
  const rails = root.querySelectorAll('.screen-rails i');
  window.DemoKitMotion.mount(root, {
    durationMs: 18000,
    draw(elapsed) {
      rails.forEach((rail, i) => {
        const wave = Math.sin(elapsed / 18000 * Math.PI * 2 + i * .65);
        rail.style.transform = 'rotateY(' + (-35 + wave * 40) + 'deg) translateX(' + (wave * 13) + 'px)';
        rail.style.boxShadow = (12 + wave * 12) + 'px 0 25px #17171425';
      });
    },
    staticFrame() {
      rails.forEach(rail => { rail.style.transform = 'rotateY(-35deg)'; rail.style.boxShadow = '12px 0 25px #17171415'; });
    }
  });
})();
