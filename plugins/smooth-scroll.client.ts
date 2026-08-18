export default defineNuxtPlugin(() => {
  let animationFrame = 0;

  function scrollToSection(section: HTMLElement) {
    cancelAnimationFrame(animationFrame);

    const header = document.querySelector('header')?.firstElementChild;
    const headerHeight = header?.getBoundingClientRect().height ?? 64;
    const startTop = window.scrollY;
    const targetTop = Math.max(0, startTop + section.getBoundingClientRect().top - headerHeight);

    const distance = targetTop - startTop;
    const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.45));
    const startedAt = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      window.scrollTo(0, startTop + distance * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
  }

  function scrollToTop() {
    cancelAnimationFrame(animationFrame);

    const startTop = window.scrollY;
    const distance = -startTop;
    const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.45));
    const startedAt = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      window.scrollTo(0, startTop + distance * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
  }

  function handleAnchorClick(event: MouseEvent) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target instanceof Element ? event.target.closest('a') : null;
    const href = target?.getAttribute('href');

    if (!href) {
      return;
    }

    const url = new URL(href, window.location.href);

    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
      return;
    }

    const isHomeLink = !url.hash && href === '/';
    const section = url.hash ? document.getElementById(url.hash.slice(1)) : null;

    if (!section && !isHomeLink) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);

    if (section) {
      scrollToSection(section);
    } else {
      scrollToTop();
    }
  }

  document.addEventListener('click', handleAnchorClick, true);
});
