'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "e7063d977934fd22a008e0f2847ba3cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "718c7a0a899c16a247f37e8d6567e358",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df02fa08ddac2690b42286a70354576d",
".git/logs/refs/heads/main": "0c82250cd8b218d95e1cd0a9b4dbc478",
".git/logs/refs/remotes/origin/main": "7ca175eaa1159cb0b5673d40f05cd451",
".git/objects/02/22ed8820cab29ea3e5dc1b862b45f992c354a5": "9cf6cb0b15dd127fd1afb7c9ccb810e9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/7ac2e8e307cc15e69dcf398124f895d2093fd3": "80baac4a1930b143b28f1ca719458ea7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/9d12df72a13d79395507fd7317c360cf12c3a1": "43902c6a3778f8fb55c45393e3343ceb",
".git/objects/12/dfb49fb7fe90914ea9684c50d9cc45e6fc1c89": "76193d0b3bb0c49ef3b65119080bd1f1",
".git/objects/18/d23ae246fdd671baa78a48758dc9b35894b2f4": "02788edfc7ac0c5465583eafe34fa257",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/05de6b915e563da2d928bf4125d4cde5db853d": "ae1aea57ce05e74431f4636f40badabd",
".git/objects/3d/0e1dab5f4db1c5417532be30409ae786af9d09": "b00b4837e976a10a44b7141303f7af0c",
".git/objects/42/6e0acb545259e84cde67d6bf176d19f929aeb2": "60b5584945985a290b1a40f57c9e15e1",
".git/objects/48/e6e859c98e80ecb527f9d7c7dd7db0cb1be95f": "7b0acc5dfe9c857baf3ed5c01ca58ae7",
".git/objects/4a/b4e2812b6d54e27c8d82799c97dcc73de2e1c9": "46a2b157bb30ec9997a61657018c41c1",
".git/objects/4c/87246475ff822bbbf006691212dce46f04cd5d": "0f814a937d49fcc5033655451c78a483",
".git/objects/4d/d035a6ae86a5244efc93c40a8b9748ad437610": "1d2b270a46bf23c10219417329efedf7",
".git/objects/4e/3e708fb79fc0ccdf090e01ed753e29032d767d": "464269c50bc9035a327d02e0d2c6948d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/0433932fa0e5dd4f9dd781df72641c95b83779": "bdace4cabd8a7baa9bfbe21d70fa22d9",
".git/objects/55/cab02640d014447bd0184a2ae73410431256e0": "f018b1984f1d5fad35cea4cd51670d3a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/b87a3c0fd79cc599aef2ed45a5301730991778": "800693bd6b580052dca06facf11a4abe",
".git/objects/5f/c56d4c521abc2951750886fc3e575d9d71b005": "3d1803d10bbf49907b628495ef4bd976",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6c/53dbdae7d25191c5f7688cb67749918b2f1b81": "25e5b7dcb5fafbd1dffe8390d3119526",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/01b1ddd9ab672590bdcc92ff0821297850d656": "2cd78bf281caccc7877a957654d4d7a5",
".git/objects/7a/e75e4a7fcf5888e52c85838984a57ad81b1bf3": "10c36da0d064ea9ef93a3447b066eacd",
".git/objects/7d/122fe983db6a03463989a4814966667497f9d3": "5de2d48ee68811e4e5a8aa3bcdf6c166",
".git/objects/7e/22ba9a844314a3602af410d402c34832bb21f8": "4d310ec01926a8b5ca389c0a51aebf7f",
".git/objects/7f/727cbf30e4fac9494594ebac86cd2cbe164047": "f4dad81eb8984b6531041edaab115007",
".git/objects/81/c8bca6bc47004f6d913c934de49c486223efa3": "93b493c24dc7140ddd3ce2c96a740d99",
".git/objects/86/42c97b69eee828601500819fd699cab5a80c14": "c7806944eb01c09ae5e07c495c223ee8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2d8bddec94fa90ffe62adc848992dbc479545b": "3336d2f919cd31f95f0362199cd6ba07",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7d1d751b1d5cc5fd9db3d8ce8261130b90ae49": "c112528e47fb0e96658000c80b33f165",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/9f2d9ee40b61e569136452eb41814ad398d2c4": "b73feab1e99c0209c6fd76638fe19a7b",
".git/objects/91/aaffdbce55f9dc95f6ab9d170b9a7d5a11af50": "29d262f83c4676b806c8bd585f707235",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/98/d4e9e607020d6966f10d86baba71aa62aa2a19": "ff3b2719e738dc7528b4378ab4cce961",
".git/objects/9b/3252cc368b2c566d6ba78b528290952b8a6f82": "b3bbe6e2686048cad2dc10411b5739a9",
".git/objects/a2/01f1ea23d8e479d2a58b7a82cbce1fd78998b8": "2e8185f541894d18a10b6223112edbce",
".git/objects/a6/cfbc6a7069a948017f81e524c7b7d06556bb48": "0830c40f60c6703ff93ab7931d68edb6",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/0e6e89969a70e2d3fe9d6a5cb52667a1c74f64": "8b865bbffd5a730c2b78004d80ebc04e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/08dadb47b74f0f5965f0f2cb5b61afcbc974e2": "86fa6511a4c8e4e3d03fb2139ca90076",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c5/b3dc5dd4d289bc7dadb840994f5e8caae48052": "936f5c0432093f2bab0602a10a02927f",
".git/objects/cb/37369d4bd7c5c3c3ff73c3fe4d7311c11d7fb6": "aa0aec6a84ca61f53aa0242aa1875253",
".git/objects/d2/377447a75d4ddb4dd04c17b0521c945683fddc": "43c66e13ee58fbf7a00c87e4b420e156",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/17c1a3cb3c603628d28decceb454756dc3cfb2": "3b4331e8086ad76220c67d0584b3acd7",
".git/objects/d6/0bd140fda4ed3c163675320b3f9444b1d4f994": "4dbcc7fafff89a886de5045ce4cee845",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/47195c7600a96700df62b68a5009be200f234d": "fece793b795109889423a21d6c321ed0",
".git/objects/dd/5b9630c0cadce4fb1a994c725d44f0da9eb1e1": "a4881d544e7ca8d83c76fe2420e40d13",
".git/objects/e2/35f5f0e197fd234b3a5da16d6896dd421a338b": "0fcd9c98bf59714d8c46f96ed0aa1dcf",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/2a5504ba01f98e2db69a8dba080f0515012e6a": "1c9c192580cacb0d6a23a40339d2c91a",
".git/objects/f7/ff7a335207f5e9c64dd8c4ba10223aed793cf0": "34a6ef7e58a5933f41b88d5cf71e3043",
".git/objects/fb/a176a47cb9311065cbc1e3f260607fe91cb456": "580526f389e020146e53a4c2bbd11013",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "930e22e94f7a883665d64124cc266fac",
".git/refs/remotes/origin/main": "92f0e94fa83c76c4e987adf3cc565bbb",
".git/refs/remotes/origin/master": "ed5edd46e51b1e271695b13842badad6",
"assets/AssetManifest.bin": "4ca3d5392377a302bf6709573ca4107d",
"assets/AssetManifest.json": "4073de309d837f66cddec5352ca3a7b0",
"assets/assets/audios/keyboard_tap.mp3": "ebe9a33ac2ddc58e0527254e4a40bf4b",
"assets/assets/fonts/google-sans/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/google-sans/product_sans_bold_italic.ttf": "79750b1d82b2558801373d62dd7e5280",
"assets/assets/fonts/google-sans/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/google-sans/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/icons/appstore.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/icons/chplay.png": "22ef5ef3c06f178af3ac3ee42de88125",
"assets/assets/icons/github-sign.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/skills/android.png": "b6ff1cba1afce07b699bdc5c2399ce5d",
"assets/assets/icons/skills/c-sharp.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/icons/skills/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/icons/skills/dotnet.png": "abc4ffcadf717e821eb576284693d79e",
"assets/assets/icons/skills/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/icons/skills/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/icons/skills/kotlin.png": "4b6ff5a0ea51f6c165714fc6a8d9a0b2",
"assets/assets/icons/skills/reactjs.png": "2e1624700708bc39397574ba95bc37ec",
"assets/assets/icons/skills/typescript.png": "83711dc0d2d0b5c1df64bd7b9a069cbe",
"assets/assets/images/about_img.jpg": "d0dbd5efea007f91fa4686d7d6a05125",
"assets/assets/images/me.jpg": "13d623692790e72d218e804d7919a779",
"assets/assets/images/mobile_dev.gif": "11661841d163bcebfdbadb4d7049256a",
"assets/assets/images/projects/tkbot.JPG": "7663922a6e13a75c59fe994ce51413fd",
"assets/assets/images/projects/tkvs.png": "316cc5c8bfe1cc86a4c5f871a5753e46",
"assets/assets/images/projects/vkhealth.JPG": "166f6533bf12c194867454ee6e8a5ece",
"assets/assets/images/tech-bg.jpg": "bcd6cae37733c99229920b0e4932d902",
"assets/FontManifest.json": "000d8773db2e19cbbec40a61bb1e33f3",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "b1348ed9d4ac4f87fa0d981ab1648569",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e5773f853893efbc8d64f91d4ceead14",
"/": "e5773f853893efbc8d64f91d4ceead14",
"main.dart.js": "af6531d0a332ab360e5a5ae3329e5af5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "75cf27b9daed0b5f38ccdf6686d30a0e",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
