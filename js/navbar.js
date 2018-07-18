var navbar = new Vue({
  el: '.navbar',
  data: {
    isShowNav: false
  },
  methods: {
    showMobileNav () {
      this.isShowNav = !this.isShowNav;
    }
  }
});