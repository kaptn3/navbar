var navbar = new Vue({
  el: '.navbar',
  data: {
    isShowNav: false,
    isShowSubMenu: false 
  },
  methods: {
    showMobileNav () {
      this.isShowNav = !this.isShowNav;
    },
    showSubMenu () {
      this.isShowSubMenu = !this.isShowSubMenu;
    }
  }
});