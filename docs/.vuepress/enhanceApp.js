export default ({ router }) => {
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    router.onReady(() => {
      const { app } = router;
      app.$once('hook:mounted', () => {
        // Fix bullshit Chrome anchor scroll issue on page load
        setTimeout(() => {
          const { hash } = document.location;
          if (hash.length > 1) {
            const id = hash.substring(1);
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
          }
        }, 500);
      });
    });
  }
};
