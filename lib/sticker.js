const Jsl_0x5ca861=Jsl_0x4839;(function(_0x147030,_0x45958c){const _0x1f9388=Jsl_0x4839,_0x5edc67=_0x147030();while(!![]){try{const _0x3021df=-parseInt(_0x1f9388(0x1c8))/0x1*(-parseInt(_0x1f9388(0x1d8))/0x2)+parseInt(_0x1f9388(0x1f0))/0x3+-parseInt(_0x1f9388(0x1d0))/0x4*(parseInt(_0x1f9388(0x1c7))/0x5)+parseInt(_0x1f9388(0x1c4))/0x6+-parseInt(_0x1f9388(0x1db))/0x7*(parseInt(_0x1f9388(0x1e3))/0x8)+-parseInt(_0x1f9388(0x1c6))/0x9*(parseInt(_0x1f9388(0x1ca))/0xa)+parseInt(_0x1f9388(0x1dd))/0xb*(parseInt(_0x1f9388(0x1d2))/0xc);if(_0x3021df===_0x45958c)break;else _0x5edc67['push'](_0x5edc67['shift']());}catch(_0x1b221c){_0x5edc67['push'](_0x5edc67['shift']());}}}(Jsl_0x2b61,0xda654));function Jsl_0x2b61(){const _0x8b38d9=['toFormat','.mp4','libwebp','00:00:05','concat','exif','toString','categories','packname','load','3854751JMHOoq','https://github.com/Afx-Abu/ABU-MD','00:00:00','-vf','node-webpmux','stringify','-vcodec','unlinkSync','writeFileSync','readFileSync','-an','1374654pMYMkf','default','9GwkKOC','25HxeAwY','35911MAxWAX','length','16634810IGjjRS','.webp','Image','error','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','.jpg','641908ibaWpp','randomBytes','485388rWXjNJ','crypto','exports','utf-8','-preset','fluent-ffmpeg','74PMHRYc','join','from','791YGYCep','save','187fpekNr','webp','readUIntLE','end','writeUIntLE','author','12032NjeVjQ','-loop','addOutputOptions'];Jsl_0x2b61=function(){return _0x8b38d9;};return Jsl_0x2b61();}function Jsl_0x4839(_0x18aacb,_0x4a8c7e){const _0x2b61eb=Jsl_0x2b61();return Jsl_0x4839=function(_0x483952,_0x33e671){_0x483952=_0x483952-0x1be;let _0x34ec4c=_0x2b61eb[_0x483952];return _0x34ec4c;},Jsl_0x4839(_0x18aacb,_0x4a8c7e);}const fs=require('fs'),{tmpdir}=require('os'),Crypto=require(Jsl_0x5ca861(0x1d3)),ff=require(Jsl_0x5ca861(0x1d7)),webp=require(Jsl_0x5ca861(0x1f4)),path=require('path');async function imageToWebp(_0xe8aabb){const _0x39cc0b=Jsl_0x5ca861,_0x34a757=path[_0x39cc0b(0x1d9)](tmpdir(),Crypto[_0x39cc0b(0x1d1)](0x6)[_0x39cc0b(0x1df)](0x0,0x6)['toString'](0x24)+'.webp'),_0x107b72=path[_0x39cc0b(0x1d9)](tmpdir(),Crypto['randomBytes'](0x6)[_0x39cc0b(0x1df)](0x0,0x6)['toString'](0x24)+_0x39cc0b(0x1cf));fs[_0x39cc0b(0x1c1)](_0x107b72,_0xe8aabb),await new Promise((_0x3f6f7e,_0x41af0a)=>{const _0x129d62=_0x39cc0b;ff(_0x107b72)['on'](_0x129d62(0x1cd),_0x41af0a)['on'](_0x129d62(0x1e0),()=>_0x3f6f7e(!![]))[_0x129d62(0x1e5)](['-vcodec',_0x129d62(0x1e8),_0x129d62(0x1f3),_0x129d62(0x1ce)])[_0x129d62(0x1e6)](_0x129d62(0x1de))[_0x129d62(0x1dc)](_0x34a757);});const _0x520ce1=fs[_0x39cc0b(0x1c2)](_0x34a757);return fs['unlinkSync'](_0x34a757),fs[_0x39cc0b(0x1c0)](_0x107b72),_0x520ce1;}async function videoToWebp(_0x523638){const _0x44211f=Jsl_0x5ca861,_0xa3e41f=path[_0x44211f(0x1d9)](tmpdir(),Crypto['randomBytes'](0x6)[_0x44211f(0x1df)](0x0,0x6)[_0x44211f(0x1ec)](0x24)+_0x44211f(0x1cb)),_0x1410d2=path[_0x44211f(0x1d9)](tmpdir(),Crypto['randomBytes'](0x6)[_0x44211f(0x1df)](0x0,0x6)['toString'](0x24)+_0x44211f(0x1e7));fs[_0x44211f(0x1c1)](_0x1410d2,_0x523638),await new Promise((_0x279f25,_0x4da001)=>{const _0x1b449f=_0x44211f;ff(_0x1410d2)['on']('error',_0x4da001)['on'](_0x1b449f(0x1e0),()=>_0x279f25(!![]))[_0x1b449f(0x1e5)]([_0x1b449f(0x1bf),_0x1b449f(0x1e8),'-vf','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse',_0x1b449f(0x1e4),'0','-ss',_0x1b449f(0x1f2),'-t',_0x1b449f(0x1e9),_0x1b449f(0x1d6),_0x1b449f(0x1c5),_0x1b449f(0x1c3),'-vsync','0'])['toFormat'](_0x1b449f(0x1de))[_0x1b449f(0x1dc)](_0xa3e41f);});const _0x3a9e75=fs[_0x44211f(0x1c2)](_0xa3e41f);return fs[_0x44211f(0x1c0)](_0xa3e41f),fs[_0x44211f(0x1c0)](_0x1410d2),_0x3a9e75;}async function writeExifImg(_0x3d8477,_0x48e0b8){const _0x4cf0df=Jsl_0x5ca861;let _0x445f20=await imageToWebp(_0x3d8477);const _0x2dc95c=path['join'](tmpdir(),Crypto[_0x4cf0df(0x1d1)](0x6)[_0x4cf0df(0x1df)](0x0,0x6)[_0x4cf0df(0x1ec)](0x24)+'.webp'),_0x133c30=path[_0x4cf0df(0x1d9)](tmpdir(),Crypto[_0x4cf0df(0x1d1)](0x6)[_0x4cf0df(0x1df)](0x0,0x6)[_0x4cf0df(0x1ec)](0x24)+'.webp');fs[_0x4cf0df(0x1c1)](_0x2dc95c,_0x445f20);if(_0x48e0b8[_0x4cf0df(0x1ee)]||_0x48e0b8['author']){const _0x4acef9=new webp[(_0x4cf0df(0x1cc))](),_0x154e3e={'sticker-pack-id':_0x4cf0df(0x1f1),'sticker-pack-name':_0x48e0b8[_0x4cf0df(0x1ee)],'sticker-pack-publisher':_0x48e0b8[_0x4cf0df(0x1e2)],'emojis':_0x48e0b8[_0x4cf0df(0x1ed)]?_0x48e0b8[_0x4cf0df(0x1ed)]:['']},_0x1fda7e=Buffer[_0x4cf0df(0x1da)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0xdafe6e=Buffer[_0x4cf0df(0x1da)](JSON[_0x4cf0df(0x1be)](_0x154e3e),'utf-8'),_0x45a356=Buffer[_0x4cf0df(0x1ea)]([_0x1fda7e,_0xdafe6e]);return _0x45a356[_0x4cf0df(0x1e1)](_0xdafe6e[_0x4cf0df(0x1c9)],0xe,0x4),await _0x4acef9[_0x4cf0df(0x1ef)](_0x2dc95c),fs[_0x4cf0df(0x1c0)](_0x2dc95c),_0x4acef9['exif']=_0x45a356,await _0x4acef9[_0x4cf0df(0x1dc)](_0x133c30),_0x133c30;}}async function writeExifVid(_0x50c14a,_0x2de07c){const _0xf989ef=Jsl_0x5ca861;let _0x86ced4=await videoToWebp(_0x50c14a);const _0x54662e=path['join'](tmpdir(),Crypto['randomBytes'](0x6)[_0xf989ef(0x1df)](0x0,0x6)[_0xf989ef(0x1ec)](0x24)+_0xf989ef(0x1cb)),_0x4267db=path[_0xf989ef(0x1d9)](tmpdir(),Crypto['randomBytes'](0x6)[_0xf989ef(0x1df)](0x0,0x6)[_0xf989ef(0x1ec)](0x24)+_0xf989ef(0x1cb));fs[_0xf989ef(0x1c1)](_0x54662e,_0x86ced4);if(_0x2de07c['packname']||_0x2de07c['author']){const _0x58de6c=new webp[(_0xf989ef(0x1cc))](),_0x277afb={'sticker-pack-id':_0xf989ef(0x1f1),'sticker-pack-name':_0x2de07c['packname'],'sticker-pack-publisher':_0x2de07c[_0xf989ef(0x1e2)],'emojis':_0x2de07c[_0xf989ef(0x1ed)]?_0x2de07c[_0xf989ef(0x1ed)]:['']},_0x3749ad=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x26ac73=Buffer[_0xf989ef(0x1da)](JSON['stringify'](_0x277afb),_0xf989ef(0x1d5)),_0x46c1e6=Buffer[_0xf989ef(0x1ea)]([_0x3749ad,_0x26ac73]);return _0x46c1e6['writeUIntLE'](_0x26ac73[_0xf989ef(0x1c9)],0xe,0x4),await _0x58de6c['load'](_0x54662e),fs['unlinkSync'](_0x54662e),_0x58de6c[_0xf989ef(0x1eb)]=_0x46c1e6,await _0x58de6c[_0xf989ef(0x1dc)](_0x4267db),_0x4267db;}}async function writeExifWebp(_0x4ec4ce,_0x12f46c){const _0x1fc95c=Jsl_0x5ca861,_0x345c7c=path[_0x1fc95c(0x1d9)](tmpdir(),Crypto[_0x1fc95c(0x1d1)](0x6)[_0x1fc95c(0x1df)](0x0,0x6)['toString'](0x24)+_0x1fc95c(0x1cb)),_0x1c2076=path[_0x1fc95c(0x1d9)](tmpdir(),Crypto[_0x1fc95c(0x1d1)](0x6)[_0x1fc95c(0x1df)](0x0,0x6)[_0x1fc95c(0x1ec)](0x24)+_0x1fc95c(0x1cb));fs[_0x1fc95c(0x1c1)](_0x345c7c,_0x4ec4ce);if(_0x12f46c[_0x1fc95c(0x1ee)]||_0x12f46c[_0x1fc95c(0x1e2)]){const _0x42973a=new webp[(_0x1fc95c(0x1cc))](),_0x1fb4e4={'sticker-pack-id':'https://github.com/Afx-Abu/ABU-MD','sticker-pack-name':_0x12f46c[_0x1fc95c(0x1ee)],'sticker-pack-publisher':_0x12f46c[_0x1fc95c(0x1e2)],'emojis':_0x12f46c['categories']?_0x12f46c[_0x1fc95c(0x1ed)]:['']},_0x4e1338=await Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x1aa4ba=await Buffer[_0x1fc95c(0x1da)](JSON['stringify'](_0x1fb4e4),_0x1fc95c(0x1d5)),_0x117bda=await Buffer[_0x1fc95c(0x1ea)]([_0x4e1338,_0x1aa4ba]);return await _0x117bda[_0x1fc95c(0x1e1)](_0x1aa4ba[_0x1fc95c(0x1c9)],0xe,0x4),await _0x42973a[_0x1fc95c(0x1ef)](_0x345c7c),fs[_0x1fc95c(0x1c0)](_0x345c7c),_0x42973a[_0x1fc95c(0x1eb)]=_0x117bda,await _0x42973a['save'](_0x1c2076),_0x1c2076;}}module[Jsl_0x5ca861(0x1d4)]={'imageToWebp':imageToWebp,'videoToWebp':videoToWebp,'writeExifImg':writeExifImg,'writeExifVid':writeExifVid,'writeExifWebp':writeExifWebp};