function showWebsieStatus() {
    var url = 'http://npws.cloud/';
    var req = new XMLHttpRequest();
    req.open('HEAD', url, false);
    req.onerror = function () {
        WebsiteOnline = false;
    };
    req.onload = function () {
        WebsiteOnline = true;
    };
    req.send(null);
    console.log('Website online: ' + WebsiteOnline);

    var WebsiteStatus = document.getElementById('WebsiteStatus');
    if (WebsiteOnline) {
        WebsiteStatus.innerHTML = 'Online';
        WebsiteStatus.style.color = 'green';
    } else {
        WebsiteStatus.innerHTML = 'Offline';
        WebsiteStatus.style.color = 'red';
    }
}
