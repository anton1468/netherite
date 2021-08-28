const tab = function () {
  let tabNav = document.querySelectorAll('.tab_txt'),
    tabCont = document.querySelectorAll('.tab'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)

  })
  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('tab_active');
    });
    this.classList.add('tab_active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);

  }
  function selectTabContent(tabName) {
    tabCont.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is_active') : item.classList.remove('is_active');
    });

  }
};
tab();
