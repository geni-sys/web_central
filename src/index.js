const $ = document.querySelector.bind(document)

function TabNavigation() {

  const html = {
    links: [...$(".tab-links").children],
    contents: [...$(".tab-content").children],
    openTab: $('[data-open]')
  };

  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = "none"
    })
  }

  function removeAllActiveClasses() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(" active", "")
    })
  }

  function showCurrentTab(id) {
    const tabcontent = $('#' + id)
    tabcontent.style.display = "block"
  }

  function selectTab(event) {
    hideAllTabContent()
    removeAllActiveClasses()

    const target = event.currentTarget
    showCurrentTab(target.dataset.id)

    target.className += " active"
  }

  function ListenForChanges() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
    })
  }

  function init() {
    hideAllTabContent()
    ListenForChanges()

    html.openTab.click()
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation()
  tabNavigation.init()
})
