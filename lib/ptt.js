function _0x2520(_0x427c4c,_0x43cdd3){const _0x31ddc2=_0x31dd();return _0x2520=function(_0x2520ec,_0x5c08c3){_0x2520ec=_0x2520ec-0x1ad;let _0x495154=_0x31ddc2[_0x2520ec];return _0x495154;},_0x2520(_0x427c4c,_0x43cdd3);}const _0x1e24d8=_0x2520;(function(_0x22659d,_0x56f8f7){const _0x85081a=_0x2520,_0x328516=_0x22659d();while(!![]){try{const _0x57b4b8=parseInt(_0x85081a(0x1c0))/0x1*(-parseInt(_0x85081a(0x1cd))/0x2)+parseInt(_0x85081a(0x1b6))/0x3+parseInt(_0x85081a(0x1d1))/0x4*(parseInt(_0x85081a(0x1bb))/0x5)+parseInt(_0x85081a(0x1bc))/0x6*(-parseInt(_0x85081a(0x1b5))/0x7)+-parseInt(_0x85081a(0x1b4))/0x8+-parseInt(_0x85081a(0x1b1))/0x9*(-parseInt(_0x85081a(0x1c7))/0xa)+parseInt(_0x85081a(0x1c8))/0xb;if(_0x57b4b8===_0x56f8f7)break;else _0x328516['push'](_0x328516['shift']());}catch(_0x55194c){_0x328516['push'](_0x328516['shift']());}}}(_0x31dd,0xb85e3));function _0x31dd(){const _0x1fb60e=['128k','aac','51361mhNwsm','-b:a','exports','file-type','-c:a','-compression_level','child_process','60nBdFmK','25568499YrbLwP','cheerio','path','mp4','44100','58AlTjFg','node-fetch','slow','form-data','4luGFki','-vn','-ab','-crf','libopus','101565PYLskC','mp3','-c:v','2860552HAoKmS','21VEpKhW','4455642AcgoDD','-ac','libx264','-ar','-vbr','77035hrsSvO','2581062CGIzsB','fs-extra'];_0x31dd=function(){return _0x1fb60e;};return _0x31dd();}const axios=require('axios'),fs=require(_0x1e24d8(0x1bd)),path=require(_0x1e24d8(0x1ca)),cheerio=require(_0x1e24d8(0x1c9)),{spawn}=require(_0x1e24d8(0x1c6));let BodyForm=require(_0x1e24d8(0x1d0)),{fromBuffer}=require(_0x1e24d8(0x1c3)),fetch=require(_0x1e24d8(0x1ce));function toAudio(_0x35aa06,_0x2043d5){const _0x46721f=_0x1e24d8;return ffmpeg(_0x35aa06,[_0x46721f(0x1ad),_0x46721f(0x1b7),'2',_0x46721f(0x1c1),'128k',_0x46721f(0x1b9),'44100','-f','mp3'],_0x2043d5,_0x46721f(0x1b2));}function toPTT(_0x23ee40,_0x891e93){const _0x11f817=_0x1e24d8;return ffmpeg(_0x23ee40,[_0x11f817(0x1ad),_0x11f817(0x1c4),_0x11f817(0x1b0),_0x11f817(0x1c1),_0x11f817(0x1be),_0x11f817(0x1ba),'on',_0x11f817(0x1c5),'10'],_0x891e93,'opus');}function toVideo(_0x4a6610,_0x8cd51){const _0x96e7e=_0x1e24d8;return ffmpeg(_0x4a6610,[_0x96e7e(0x1b3),_0x96e7e(0x1b8),_0x96e7e(0x1c4),_0x96e7e(0x1bf),_0x96e7e(0x1ae),_0x96e7e(0x1be),_0x96e7e(0x1b9),_0x96e7e(0x1cc),_0x96e7e(0x1af),'32','-preset',_0x96e7e(0x1cf)],_0x8cd51,_0x96e7e(0x1cb));}module[_0x1e24d8(0x1c2)]={'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo};