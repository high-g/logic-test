importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')
if(workbox) {
  console.log('Yeah! workbox did load')
} else {
  console.log('Oh, workbox did not load')
}