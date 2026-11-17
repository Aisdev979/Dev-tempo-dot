const userAgent = document.querySelector("#user-agent-value");
const userPlatform = document.querySelector("#platform-value");
const userLanguage = document.querySelector("#language-value");
const userCookies = document.querySelector("#cookies-status-label");
const userOnline = document.querySelector("#connection-status-label");

const currentPage = navigator;
userAgent.textContent = currentPage.userAgent;
userPlatform.textContent = currentPage.platform;
userLanguage.textContent = currentPage.language;
userCookies.textContent = currentPage.cookieEnabled;
userOnline.textContent = currentPage.onLine;