const CACHE_NAME = 'cache-v1'
const urlsToCache = [
  './',
  './img.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('opened cache.')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', event => {
  const cacheWhiteList = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          return response
        }

        const fetchRequest = event.request.clone()

        return fetch(fetchRequest)
          .then(response => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
      })
  )
})
