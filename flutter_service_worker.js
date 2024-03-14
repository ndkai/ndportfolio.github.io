'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1d0924e0ded76db98794bb97294e0aa7",
".git/config": "a7cc3570b613b2ac4ccf1de244e2af7f",
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
".git/index": "a680d784e9e3446130377c3dfc62e8ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d369f8d50b1ca9af59fa2ac66f92fcda",
".git/logs/refs/heads/main": "aa764802cef9f5724742fb41c3b2c2cc",
".git/logs/refs/remotes/origin/main": "de1eb6ea1f3634dd16fd26e322ae7ff5",
".git/objects/00/8d4bc594f0560454fb169b9b6b8dca6f9c4684": "ca361e2cb48d601ad5164de76658ee45",
".git/objects/02/22ed8820cab29ea3e5dc1b862b45f992c354a5": "9cf6cb0b15dd127fd1afb7c9ccb810e9",
".git/objects/03/2b4addfc2cc91a58ce327d4b6a1a592a44b581": "cf2f63ab5f77c7dca313eb6d571ce6dc",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/64afdb220cfa02b663253e5c6d771caf67ff32": "4d53bce6c29b9800110ce24772ba3bb6",
".git/objects/09/c71c9c8b76fdc6cead1cb590bc7dbd3acc2ea9": "9499b69fe2a009c76613ca6f7e021227",
".git/objects/0b/35dfab39e5e19739d57107629b732a6361c534": "8a4c4c4468f6639c6adeccca8c04779e",
".git/objects/0b/7ac2e8e307cc15e69dcf398124f895d2093fd3": "80baac4a1930b143b28f1ca719458ea7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/c8dc32d072ed3369320fbd583962f61996438f": "3c30449e07a52d79e3166d6d2d31362c",
".git/objects/12/9d12df72a13d79395507fd7317c360cf12c3a1": "43902c6a3778f8fb55c45393e3343ceb",
".git/objects/12/dfb49fb7fe90914ea9684c50d9cc45e6fc1c89": "76193d0b3bb0c49ef3b65119080bd1f1",
".git/objects/18/d23ae246fdd671baa78a48758dc9b35894b2f4": "02788edfc7ac0c5465583eafe34fa257",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/34/30fda88e82fbd874df6513add517f907b31e48": "50abf99ddcee74324b3e6c5c500b720b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/05de6b915e563da2d928bf4125d4cde5db853d": "ae1aea57ce05e74431f4636f40badabd",
".git/objects/3d/0e1dab5f4db1c5417532be30409ae786af9d09": "b00b4837e976a10a44b7141303f7af0c",
".git/objects/3e/14e547b71d440f4493f882da6f50edef465fae": "225a0fb2747ef5c5768d1dd06a6b1c55",
".git/objects/42/6e0acb545259e84cde67d6bf176d19f929aeb2": "60b5584945985a290b1a40f57c9e15e1",
".git/objects/48/8c28eb85538f0febec3a12aafa50173064f476": "2fb177c3ea0ee64d4f62bd803abf2bb4",
".git/objects/48/e6e859c98e80ecb527f9d7c7dd7db0cb1be95f": "7b0acc5dfe9c857baf3ed5c01ca58ae7",
".git/objects/4c/1b3da3ccd98a4cdfbb4cdff6ed484a43bbb2cf": "2ba273cae7119ed9dd5dc8b0d60503ac",
".git/objects/4d/d035a6ae86a5244efc93c40a8b9748ad437610": "1d2b270a46bf23c10219417329efedf7",
".git/objects/4e/3e708fb79fc0ccdf090e01ed753e29032d767d": "464269c50bc9035a327d02e0d2c6948d",
".git/objects/50/fb963f47e3cd5c97de08ef7c5dac0c94e6c200": "a766208770f784e58d71efa5e56da5f3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/90b484ecf19915d9ad70d20720e6b6e28cd28c": "15f8be58da72a9fd0ef63b805a2fa816",
".git/objects/52/cefa3c9d741b539354b96f0819e9bfaa7a8e53": "6b0a13cb9e5d1512ca471b4e26def2b2",
".git/objects/55/0433932fa0e5dd4f9dd781df72641c95b83779": "bdace4cabd8a7baa9bfbe21d70fa22d9",
".git/objects/55/4451cd22c5860874aae42dd32a9969a5528ed9": "4246a08e635f6ad672718eed36995c0c",
".git/objects/55/cab02640d014447bd0184a2ae73410431256e0": "f018b1984f1d5fad35cea4cd51670d3a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/b87a3c0fd79cc599aef2ed45a5301730991778": "800693bd6b580052dca06facf11a4abe",
".git/objects/5f/c56d4c521abc2951750886fc3e575d9d71b005": "3d1803d10bbf49907b628495ef4bd976",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/66/ad9e0ed55d3efd47f8cdf0aac882ee60709244": "af181960bc98f15d7c742b7253df71f0",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/01b1ddd9ab672590bdcc92ff0821297850d656": "2cd78bf281caccc7877a957654d4d7a5",
".git/objects/74/f5bdf0edd6eaa908d09cb1a7d1f057467980a4": "c0e1c256a44c5fa45cb68c02c91f1d80",
".git/objects/76/200d01e26d4a1931b41817af6a894ad5300f94": "cf96555f42fa7ed3507111257fa8e03a",
".git/objects/78/1481b85aaacde2ce0fc6edb52badd7cf343048": "26851edfa88c3693788c7c5817d835b5",
".git/objects/78/b15393ef451afc2c11642a2855a8e2688fa1c9": "2d19ee06879035342a1feb717081b09a",
".git/objects/7a/e75e4a7fcf5888e52c85838984a57ad81b1bf3": "10c36da0d064ea9ef93a3447b066eacd",
".git/objects/7c/33c508f45738eefc1dfcdfc677a3e7d87814f9": "6bd31d01c48344a893b7642e407819fb",
".git/objects/7d/122fe983db6a03463989a4814966667497f9d3": "5de2d48ee68811e4e5a8aa3bcdf6c166",
".git/objects/7e/22ba9a844314a3602af410d402c34832bb21f8": "4d310ec01926a8b5ca389c0a51aebf7f",
".git/objects/86/42c97b69eee828601500819fd699cab5a80c14": "c7806944eb01c09ae5e07c495c223ee8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2d8bddec94fa90ffe62adc848992dbc479545b": "3336d2f919cd31f95f0362199cd6ba07",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c4051a7b68081dff44685a92f4cdb04b624be5": "db1dd42ef29420271849323c6f1e56a7",
".git/objects/8d/7d1d751b1d5cc5fd9db3d8ce8261130b90ae49": "c112528e47fb0e96658000c80b33f165",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/9f2d9ee40b61e569136452eb41814ad398d2c4": "b73feab1e99c0209c6fd76638fe19a7b",
".git/objects/91/aaffdbce55f9dc95f6ab9d170b9a7d5a11af50": "29d262f83c4676b806c8bd585f707235",
".git/objects/93/078564f0976511149271062a720a96c9b86b4b": "ce9604ebb4f6b5bf9588d3f83282792a",
".git/objects/93/c6f671821832c631a73632857f60c8387f7ee1": "5a03ace593c77bcc09b1be5876555630",
".git/objects/96/515b268b5bf52f766a3f44659cb4cf8c6517bb": "8186bcf30cf5ae4879bb6b100a0e514f",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/9b/622572d26c70df56cd92677edf353a7b42cd59": "b67b364cd2dc76d48b82fe86f0990b04",
".git/objects/9e/2823f8ecd076c257052e39c0faadb5a9fba82e": "4e0ff8cbdf7438cc52513172ab0e3250",
".git/objects/a2/01f1ea23d8e479d2a58b7a82cbce1fd78998b8": "2e8185f541894d18a10b6223112edbce",
".git/objects/a6/cfbc6a7069a948017f81e524c7b7d06556bb48": "0830c40f60c6703ff93ab7931d68edb6",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/2754b71b2d586d010a02ffc707da0e4b80c693": "7a96d97b3049348733633c97be2b6285",
".git/objects/be/f5f70ebd50af9a2e4b4324a2f36656536ab4b6": "a4f846fcb92d915f30ec7b1fff58afc7",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c5/b3dc5dd4d289bc7dadb840994f5e8caae48052": "936f5c0432093f2bab0602a10a02927f",
".git/objects/cd/79a3a6f75ee534f284c615a41f410557f6439b": "bed42d6d95abc547beba9a995658200d",
".git/objects/d1/8fb72db00cfef95b91808232f08d76da32a3ef": "b3cd3f1345960070ff8c42e7f32b0142",
".git/objects/d2/377447a75d4ddb4dd04c17b0521c945683fddc": "43c66e13ee58fbf7a00c87e4b420e156",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/17c1a3cb3c603628d28decceb454756dc3cfb2": "3b4331e8086ad76220c67d0584b3acd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/34a5e763612dccf18d84e9e555e254e3901560": "fdc41afab46fbd22c8f3e72273273c13",
".git/objects/d8/47195c7600a96700df62b68a5009be200f234d": "fece793b795109889423a21d6c321ed0",
".git/objects/dd/5b9630c0cadce4fb1a994c725d44f0da9eb1e1": "a4881d544e7ca8d83c76fe2420e40d13",
".git/objects/e0/a52aadda2ba70c616fbac2a55615b072201c80": "25c342b1469daa944f44183db2f399fd",
".git/objects/e2/35f5f0e197fd234b3a5da16d6896dd421a338b": "0fcd9c98bf59714d8c46f96ed0aa1dcf",
".git/objects/e2/ce301625518f25a658e8b6c793d10f5c13a82f": "ebac7acc1695f61169197ee2a1f5a520",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/657db64b87f6b5496af7be284aca61cb3d5dc1": "3bd12f20367d94e76cc895cfabd46a37",
".git/objects/f1/2a5504ba01f98e2db69a8dba080f0515012e6a": "1c9c192580cacb0d6a23a40339d2c91a",
".git/objects/f7/ff7a335207f5e9c64dd8c4ba10223aed793cf0": "34a6ef7e58a5933f41b88d5cf71e3043",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "b1115d674b8e4af47831953d35d242d8",
".git/refs/remotes/origin/main": "b1115d674b8e4af47831953d35d242d8",
"assets/AssetManifest.bin": "8f2d4c5f8c62a19f7eb7e5bedf9013cf",
"assets/AssetManifest.json": "6ff25fbf1079e636f8362e3d23b5b85a",
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
"assets/assets/icons/skills/docker.png": "e39e3661d1b4710424ae660bec3a0654",
"assets/assets/icons/skills/dotnet.png": "abc4ffcadf717e821eb576284693d79e",
"assets/assets/icons/skills/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/icons/skills/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/icons/skills/kotlin.png": "4b6ff5a0ea51f6c165714fc6a8d9a0b2",
"assets/assets/icons/skills/reactjs.png": "2e1624700708bc39397574ba95bc37ec",
"assets/assets/icons/skills/typescript.png": "83711dc0d2d0b5c1df64bd7b9a069cbe",
"assets/assets/images/about_img.jpg": "d0dbd5efea007f91fa4686d7d6a05125",
"assets/assets/images/about_me/bakco.jpg": "362dff285651bfa05102d80150b27541",
"assets/assets/images/about_me/graduated.png": "84b322a682e76c9bce4388808b08c404",
"assets/assets/images/about_me/logistic.jpg": "4ed45af8eb214e83bf9114c95f4ce686",
"assets/assets/images/about_me/olp.jpg": "fbb4d4606535a4ac1a2d3cc2f262271c",
"assets/assets/images/about_me/robocode.jpg": "dbbc6bd337501d3314b942874fd4498d",
"assets/assets/images/about_me/titkul.png": "4188b31028e4915d661941ea81174296",
"assets/assets/images/about_me/toiec.JPG": "ce12ee799b45fe26e94e2719c8155879",
"assets/assets/images/me.jpg": "13d623692790e72d218e804d7919a779",
"assets/assets/images/mobile_dev.gif": "11661841d163bcebfdbadb4d7049256a",
"assets/assets/images/projects/chis.png": "485f783a9f4dbf417439a687b6d72b10",
"assets/assets/images/projects/hatien.png": "61c248d2d132f8bb8c3d07799f12389a",
"assets/assets/images/projects/tikul/1.jpg": "a7ad80b2f0d8e2cf5d6491d2edeb3a3e",
"assets/assets/images/projects/tikul/2.jpg": "4d2837356b0c67182329ef31a42ae45c",
"assets/assets/images/projects/tikul/3.jpg": "45e2c9569ea9d1075767de3dffc636d7",
"assets/assets/images/projects/tikul/4.jpg": "593c0a0f017dcc43176a4ac07f6dafc9",
"assets/assets/images/projects/tikul/5.jpg": "8c6c3d18681e6e83d28003b57fefcc9c",
"assets/assets/images/projects/tkbot/1.jpg": "c538e03d5014f4db5a1997681e11dd56",
"assets/assets/images/projects/tkbot/2.jpg": "402a4dc6bcddfd956258c500c2249ed4",
"assets/assets/images/projects/tkbot/3.jpg": "95be30020b84752bfdc942c4642d1ec9",
"assets/assets/images/projects/tkbot.JPG": "7663922a6e13a75c59fe994ce51413fd",
"assets/assets/images/projects/tkvs.png": "316cc5c8bfe1cc86a4c5f871a5753e46",
"assets/assets/images/projects/vkhealth.JPG": "166f6533bf12c194867454ee6e8a5ece",
"assets/assets/images/tech-bg.jpg": "bcd6cae37733c99229920b0e4932d902",
"assets/FontManifest.json": "000d8773db2e19cbbec40a61bb1e33f3",
"assets/fonts/MaterialIcons-Regular.otf": "b1111ca5c7373b13a97f9fbe5931a63c",
"assets/NOTICES": "94342f3336a7dc63bd0a3a4bc7c791e2",
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
"index.html": "b2d59ecee922bcfed4403f62c3ecdc84",
"/": "b2d59ecee922bcfed4403f62c3ecdc84",
"main.dart.js": "a01ef4585118a73d11f1a19e90faf46b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "c6f7297936810aa14ce786c60ef48006",
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
