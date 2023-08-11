
function hideShorts() {
    if (window.location.pathname == '/feed/subscriptions') {
        var shorts = document.getElementsByTagName("ytd-rich-section-renderer")
        if(shorts.length < 2){
            return
        }
        shorts[1].remove()
        console.log("Shorts removed")
    }
}

function autoRedirect() {
    const url = new URL(window.location.href);
    const path = url.pathname;
    
    if (path.startsWith("/shorts/")) {
      const newPath = path.replace("/shorts/", "/watch/");
      const newUrl = url.origin + newPath + url.search + url.hash;
      window.location.replace(newUrl);
      console.log("redirected to proper page")
      return
    }
    return
}

function postChecker() {
    onmousemove = hideShorts
}

setTimeout(hideShorts, 500)
postChecker()
setInterval(autoRedirect, 1000)


