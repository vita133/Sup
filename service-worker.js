/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "126c2de737ac70ffb1d4fee4e2826913"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ed1dc12d.css",
    "revision": "f24301594261e79d133f430d4a1d3226"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4e594716.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.29817cf0.js",
    "revision": "17b4b1432ea3f61de7240ff26aeb21de"
  },
  {
    "url": "assets/js/12.0859346e.js",
    "revision": "b744f4c47626030a58910a49dc9c9dbb"
  },
  {
    "url": "assets/js/13.adf7e169.js",
    "revision": "1de78032411a0c136c0db0969c0962b4"
  },
  {
    "url": "assets/js/14.ea66c930.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.cb12b92c.js",
    "revision": "9a54d91e51084f77f1034582097cdb91"
  },
  {
    "url": "assets/js/16.d668dfd5.js",
    "revision": "adbb881824f877ad78dc4b3e0a0678c7"
  },
  {
    "url": "assets/js/17.75d5d2c5.js",
    "revision": "06e3ed0224b60a56db2fc3c5ed8ad8c9"
  },
  {
    "url": "assets/js/18.ca6b2cb7.js",
    "revision": "90b7233c42dc2abacfcfec4c4e854af7"
  },
  {
    "url": "assets/js/19.ea611138.js",
    "revision": "8bb64abe9f57eeeb2244a2db0cfe6a6a"
  },
  {
    "url": "assets/js/2.79ba8db6.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.957cdb4e.js",
    "revision": "5ec644bb0e5aa3c3b4f1ae6a1c09959d"
  },
  {
    "url": "assets/js/21.b8664c76.js",
    "revision": "f0b72f1693a45236c1bbd8dff231ccff"
  },
  {
    "url": "assets/js/22.444381bf.js",
    "revision": "25cdb8c1557c2c94044626e5fbbfc5ab"
  },
  {
    "url": "assets/js/23.9f994e12.js",
    "revision": "a7d682d6d70bdffe66259414e62ddfd1"
  },
  {
    "url": "assets/js/24.f5df952a.js",
    "revision": "fb902d5a200066788ef29d75c4f6dd03"
  },
  {
    "url": "assets/js/26.893f331d.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.c602ffff.js",
    "revision": "37dec099bab9ada1b8febfa3329d4abc"
  },
  {
    "url": "assets/js/4.0d03404d.js",
    "revision": "e58446b7af7d83dc6567f2a061ccbbef"
  },
  {
    "url": "assets/js/5.695a9286.js",
    "revision": "a83c521aed90313eec9d564dd1a80b8e"
  },
  {
    "url": "assets/js/6.8bb22c5a.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.4194353b.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.e170a150.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.80f0c940.js",
    "revision": "255f60e84533194dda0653b6ccba0ddb"
  },
  {
    "url": "assets/js/app.5fef305a.js",
    "revision": "a2524231d88c36c0aa247ee3c456e032"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e927b47b883c7e7ab96d9fb654af2d5c"
  },
  {
    "url": "design/index.html",
    "revision": "dadf9bf27bd7ad7476af9ca4b4438799"
  },
  {
    "url": "index.html",
    "revision": "112138d219f2c6c97cf66c35ecca800d"
  },
  {
    "url": "intro/index.html",
    "revision": "46e530a03c909ed554252aa3441ebe3d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "53f081d84c75786da0ef80035bdb9d6b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4a70b42c84eb9958dc74014b63a0abe5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9aac93daebf650acfc356e3f45bf4225"
  },
  {
    "url": "software/index.html",
    "revision": "d321c0853630d262a63e477b887eec83"
  },
  {
    "url": "test/index.html",
    "revision": "c753bb4985c8efcbe2030d6cd973488a"
  },
  {
    "url": "use cases/index.html",
    "revision": "929be9a70fb74de078a4274819ccf128"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
