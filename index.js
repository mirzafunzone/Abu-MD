function Jsl_0x15ae(_0x235e21,_0x3b5a26){const _0x1a24e1=Jsl_0x1a24();return Jsl_0x15ae=function(_0x15aec8,_0x2f20ab){_0x15aec8=_0x15aec8-0x191;let _0x195702=_0x1a24e1[_0x15aec8];return _0x195702;},Jsl_0x15ae(_0x235e21,_0x3b5a26);}const Jsl_0x2930d7=Jsl_0x15ae;function Jsl_0x1a24(){const _0x585f87=['subject','from','map','@adiwajshing/baileys','@g.us','\x0a𝙼𝙾𝙳𝙴:\x20','creds.update','endsWith','extname','./plugins/','./lib/Base','dataValues','close','bind','3257860qamOfu','length','message','version','pattern','EventEmitter','messages.upsert','body','replace','text','./lib/auth_info_baileys/','group-participants.update','express','commands','./lib/Greetings','Plugins\x20Installed!✅','isSelf','.js','get','fromMe','```\u00a0𝙰𝙱𝚄\x20𝙼𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙽𝙶\x0a𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20:\x20','./config','527972kJoIIR','k!t','sender','silent','result','sendMessage','messages','connecting','macOS','defaultMaxListeners','WORK_TYPE','./lib/serialize','findAll','./lib/auth_info_baileys/creds.json','At\x20:\x20','\x0a\x0a\x0a\x0a\x0a','20dvdiwR','Desktop','sticker','SESSION_ID','error','send','\x0aFrom\x20:\x20','shift','image','89010kqPQRA','PORT','Abu-MD\x202.0.1','readdirSync','HANDLERS','845694tmtXkf','includes','store','path','output','pino','LOGS','https://api-jsl.herokuapp.com/api/session?id=','./package.json','1384MkWGvG','url','./lib/events','```','603222YFoxkl','installing\x20plugins\x20✅','parse','918943027806@s.whatsapp','type','./temp/store.json','stringify','connection.update','\x0a𝙿𝙻𝚄𝙶𝙸𝙽𝚂\x20:\x20','name','writeToFile','split','got','uncaughtException','Session\x20restore\x20✅','forEach','log','function','trim','Hello\x20World!','toLowerCase','test','photo','1556632EJPPDP','sync','decrypt','payload','child','2174977UYVgVT','writeFileSync','listen'];Jsl_0x1a24=function(){return _0x585f87;};return Jsl_0x1a24();}(function(_0x116a52,_0x5870ec){const _0x53de53=Jsl_0x15ae,_0x1f8646=_0x116a52();while(!![]){try{const _0x2bf019=-parseInt(_0x53de53(0x1aa))/0x1+-parseInt(_0x53de53(0x1ec))/0x2+parseInt(_0x53de53(0x1d5))/0x3+-parseInt(_0x53de53(0x194))/0x4+parseInt(_0x53de53(0x1ba))/0x5*(parseInt(_0x53de53(0x1c8))/0x6)+parseInt(_0x53de53(0x1f1))/0x7+-parseInt(_0x53de53(0x1d1))/0x8*(-parseInt(_0x53de53(0x1c3))/0x9);if(_0x2bf019===_0x5870ec)break;else _0x1f8646['push'](_0x1f8646['shift']());}catch(_0x330caf){_0x1f8646['push'](_0x1f8646['shift']());}}}(Jsl_0x1a24,0xa28c6));const {default:makeWASocket,Browsers,makeInMemoryStore,useMultiFileAuthState}=require(Jsl_0x2930d7(0x1f7)),fs=require('fs'),{serialize}=require(Jsl_0x2930d7(0x1b5)),{Message,Image,Sticker}=require(Jsl_0x2930d7(0x1fe)),pino=require(Jsl_0x2930d7(0x1cd)),express=require(Jsl_0x2930d7(0x1a0)),app=express(),port=process['env'][Jsl_0x2930d7(0x1c4)]||0x1f40,path=require(Jsl_0x2930d7(0x1cb)),Config=require(Jsl_0x2930d7(0x1a9)),events=require(Jsl_0x2930d7(0x1d3)),got=require(Jsl_0x2930d7(0x1e1)),config=require(Jsl_0x2930d7(0x1a9)),{PluginDB}=require('./lib/db/plugins'),Greetings=require(Jsl_0x2930d7(0x1a2)),store=makeInMemoryStore({'logger':pino()[Jsl_0x2930d7(0x1f0)]({'level':Jsl_0x2930d7(0x1ad),'stream':Jsl_0x2930d7(0x1ca)})});require('events')[Jsl_0x2930d7(0x199)][Jsl_0x2930d7(0x1b3)]=0x1f4;const aes256=require('aes256');let plaintext=Config[Jsl_0x2930d7(0x1bd)]['replaceAll']('Jsl~',''),key=Jsl_0x2930d7(0x1ab),decryptedPlainText=aes256[Jsl_0x2930d7(0x1ee)](key,plaintext);async function md(){const _0x553661=Jsl_0x2930d7;let {body:_0x54170d}=await got(_0x553661(0x1cf)+decryptedPlainText),_0xcd9c93=JSON[_0x553661(0x1d7)](_0x54170d)[_0x553661(0x1ae)][0x0]['data'];fs[_0x553661(0x1f2)](_0x553661(0x1b7),_0xcd9c93);}md();async function Jsl(){const _0x116b17=Jsl_0x2930d7;await config['DATABASE'][_0x116b17(0x1ed)]();const {state:_0xa91b4,saveCreds:_0x496c1a}=await useMultiFileAuthState(_0x116b17(0x19e),pino({'level':_0x116b17(0x1ad)}));let _0x53bd1b=makeWASocket({'logger':pino({'level':_0x116b17(0x1ad)}),'auth':_0xa91b4,'printQRInTerminal':!![],'generateHighQualityLinkPreview':!![],'browser':Browsers[_0x116b17(0x1b2)](_0x116b17(0x1bb)),'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![]});store[_0x116b17(0x193)](_0x53bd1b['ev']),setInterval(()=>{const _0x5c6960=_0x116b17;store[_0x5c6960(0x1df)](_0x5c6960(0x1da));},0x1e*0x3c*0x3e8),_0x53bd1b['ev']['on'](_0x116b17(0x1fa),_0x496c1a),_0x53bd1b['ev']['on'](_0x116b17(0x1dc),async _0x554e64=>{const _0x4d2c23=_0x116b17,{connection:_0x50236c,lastDisconnect:_0x23a248}=_0x554e64;_0x50236c===_0x4d2c23(0x1b1)&&console['log'](_0x4d2c23(0x1c5));_0x50236c===_0x4d2c23(0x192)&&_0x23a248&&_0x23a248[_0x4d2c23(0x1be)]&&_0x23a248[_0x4d2c23(0x1be)][_0x4d2c23(0x1cc)]['statusCode']!=0x191&&(console[_0x4d2c23(0x1e5)](_0x23a248[_0x4d2c23(0x1be)][_0x4d2c23(0x1cc)][_0x4d2c23(0x1ef)]),Jsl());if(_0x50236c==='open'){console[_0x4d2c23(0x1e5)](_0x4d2c23(0x1e3)),console[_0x4d2c23(0x1e5)](_0x4d2c23(0x1d6));let _0x3a6c53=await PluginDB[_0x4d2c23(0x1b6)]();_0x3a6c53[_0x4d2c23(0x1f6)](async _0x4bf3bc=>{const _0x43a937=_0x4d2c23;if(!fs['existsSync'](_0x43a937(0x1fd)+_0x4bf3bc[_0x43a937(0x191)][_0x43a937(0x1de)]+_0x43a937(0x1a5))){console[_0x43a937(0x1e5)](_0x4bf3bc[_0x43a937(0x191)][_0x43a937(0x1de)]);var _0x9a6e01=await got(_0x4bf3bc[_0x43a937(0x191)][_0x43a937(0x1d2)]);_0x9a6e01['statusCode']==0xc8&&(fs[_0x43a937(0x1f2)](_0x43a937(0x1fd)+_0x4bf3bc[_0x43a937(0x191)][_0x43a937(0x1de)]+_0x43a937(0x1a5),_0x9a6e01[_0x43a937(0x19b)]),require(_0x43a937(0x1fd)+_0x4bf3bc[_0x43a937(0x191)][_0x43a937(0x1de)]+'.js'));}}),fs[_0x4d2c23(0x1c6)]('./plugins')[_0x4d2c23(0x1e4)](_0x5f006b=>{const _0x5a1b35=_0x4d2c23;path[_0x5a1b35(0x1fc)](_0x5f006b)[_0x5a1b35(0x1e9)]()==_0x5a1b35(0x1a5)&&require(_0x5a1b35(0x1fd)+_0x5f006b);}),console[_0x4d2c23(0x1e5)](_0x4d2c23(0x1a3));let _0x3740ff=_0x4d2c23(0x1a8)+require(_0x4d2c23(0x1d0))[_0x4d2c23(0x197)]+_0x4d2c23(0x1dd)+events[_0x4d2c23(0x1a1)][_0x4d2c23(0x195)]+_0x4d2c23(0x1f9)+config[_0x4d2c23(0x1b4)]+_0x4d2c23(0x1d4);_0x53bd1b['sendMessage'](_0x53bd1b['user']['id'],{'text':_0x3740ff});try{_0x53bd1b['ev']['on'](_0x4d2c23(0x19f),async _0x20d49e=>{Greetings(_0x20d49e,_0x53bd1b);}),_0x53bd1b['ev']['on'](_0x4d2c23(0x19a),async _0x18ece5=>{const _0x465697=_0x4d2c23;if(_0x18ece5[_0x465697(0x1d9)]!=='notify')return;let _0x453529=_0x18ece5[_0x465697(0x1b0)][0x0],_0xddc059=await serialize(JSON[_0x465697(0x1d7)](JSON[_0x465697(0x1db)](_0x453529)),_0x53bd1b);if(!_0xddc059[_0x465697(0x196)])return;let _0x16ab4b=_0xddc059[_0x465697(0x19b)];if(_0x16ab4b&&config[_0x465697(0x1ce)])console[_0x465697(0x1e5)](_0x465697(0x1b8)+(_0xddc059[_0x465697(0x1f5)][_0x465697(0x1fb)](_0x465697(0x1f8))?(await _0x53bd1b['groupMetadata'](_0xddc059[_0x465697(0x1f5)]))[_0x465697(0x1f4)]:_0xddc059['from'])+_0x465697(0x1c0)+_0xddc059[_0x465697(0x1ac)]+'\x0aMessage:'+_0x16ab4b);events[_0x465697(0x1a1)][_0x465697(0x1f6)](async _0x450c19=>{const _0x4a39f4=_0x465697;if(_0x450c19[_0x4a39f4(0x1a7)]&&!config['SUDO'][_0x4a39f4(0x1e0)](',')[_0x4a39f4(0x1c9)](_0xddc059[_0x4a39f4(0x1ac)]['split']('@')[0x0]||!_0xddc059[_0x4a39f4(0x1a4)]))return;let _0x5ebab5;_0x16ab4b&&(_0x5ebab5=_0x16ab4b[_0x4a39f4(0x1e7)]()[_0x4a39f4(0x1e0)](/ +/)[0x0],_0xddc059['prefix']=new RegExp(config[_0x4a39f4(0x1c7)])[_0x4a39f4(0x1ea)](_0x16ab4b)?_0x16ab4b[_0x4a39f4(0x1e0)]('')[_0x4a39f4(0x1c1)]():',');if(_0x450c19[_0x4a39f4(0x198)]&&_0x450c19[_0x4a39f4(0x198)][_0x4a39f4(0x1ea)](_0x5ebab5)){var _0x42c90b;try{_0x42c90b=_0x16ab4b[_0x4a39f4(0x19c)](new RegExp(_0x5ebab5,'i'),'')[_0x4a39f4(0x1e7)]();}catch{_0x42c90b=![];}whats=new Message(_0x53bd1b,_0xddc059,_0x453529),_0x450c19['function'](whats,_0x42c90b,_0xddc059,_0x53bd1b);}else{if(_0x16ab4b&&_0x450c19['on']===_0x4a39f4(0x19d))whats=new Message(_0x53bd1b,_0xddc059,_0x453529),_0x450c19[_0x4a39f4(0x1e6)](whats,_0x16ab4b,_0xddc059,_0x53bd1b,_0x18ece5);else{if((_0x450c19['on']===_0x4a39f4(0x1c2)||_0x450c19['on']===_0x4a39f4(0x1eb))&&_0xddc059[_0x4a39f4(0x1d9)]==='imageMessage')whats=new Image(_0x53bd1b,_0xddc059,_0x453529),_0x450c19['function'](whats,_0x16ab4b,_0xddc059,_0x53bd1b,_0x18ece5,_0x453529);else _0x450c19['on']===_0x4a39f4(0x1bc)&&_0xddc059[_0x4a39f4(0x1d9)]==='stickerMessage'&&(whats=new Sticker(_0x53bd1b,_0xddc059,_0x453529),_0x450c19[_0x4a39f4(0x1e6)](whats,_0xddc059,_0x53bd1b,_0x18ece5,_0x453529));}}});});}catch(_0x6dde40){console[_0x4d2c23(0x1e5)](_0x6dde40+_0x4d2c23(0x1b9)+JSON['stringify'](msg));}}}),process['on'](_0x116b17(0x1e2),_0x37e8a9=>{const _0x25a9a2=_0x116b17;let _0x1a6739=_0x25a9a2(0x1d8),_0x3fd498=_0x37e8a9[_0x25a9a2(0x196)];_0x53bd1b[_0x25a9a2(0x1af)](_0x1a6739,{'text':_0x3fd498});});}app[Jsl_0x2930d7(0x1a6)]('/',(_0x53d029,_0xe50a76)=>{const _0x39a4e7=Jsl_0x2930d7;_0xe50a76[_0x39a4e7(0x1bf)](_0x39a4e7(0x1e8));}),app[Jsl_0x2930d7(0x1f3)](port,()=>console[Jsl_0x2930d7(0x1e5)](':'+port)),setTimeout(()=>{Jsl();},0x1b58);
