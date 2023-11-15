const butInstall = document.getElementById('buttonInstall');
var savedPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
 //   The event triggers on page load, but we want to hold on to the event for later.
    savedPrompt = event;
 
    // the event only fires if the page recognizes the manifest, so if it does we can show the button
 });
 
 butInstall.addEventListener('click', async () => {
    // Show the install prompt that we saved
    if (savedPrompt) {
      savedPrompt.prompt();
    }
 });
 
 window.addEventListener('appinstalled', (event) => {
    // do an alert saying "App installed"
    window.alert('App installed');
 });