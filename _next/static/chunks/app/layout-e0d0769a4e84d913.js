(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1067:(e,t,r)=>{Promise.resolve().then(r.bind(r,1730)),Promise.resolve().then(r.t.bind(r,3704,23)),Promise.resolve().then(r.t.bind(r,5688,23)),Promise.resolve().then(r.t.bind(r,7051,23)),Promise.resolve().then(r.t.bind(r,9324,23))},1730:(e,t,r)=>{"use strict";r.d(t,{LanguageProvider:()=>p,B:()=>v});var o=r(5155),i=r(2115);let s=()=>{let e=navigator.language.toLowerCase();return["en","zh"].find(t=>e.startsWith(t))||"en"},n={en:{"common.back":"Back","common.settings":"Settings","common.close":"Close","common.home":"Home","navigation.library":"Library","navigation.reader":"Reader","navigation.settings":"Settings","navigation.add":"Add","reader.title":"Reading","library.title":"Novel Reader","library.import":"Import Novel","library.noNovels":"No novels yet","settings.darkMode":"Dark Mode","settings.language":"Language","reader.menu.settings":"Settings","reader.menu.bookmarks":"Bookmarks","reader.menu.chapters":"Chapters","reader.menu.search":"Search","reader.menu.fontSize":"Font Size","reader.menu.pageMode":"Page Mode","reader.menu.scrollMode":"Scroll Mode","reader.menu.title":"Reader Menu","library.search":"Search novels...","library.sort.recentlyRead":"Recently Read","library.sort.title":"Title","library.select":"Select","library.cancel":"Cancel","library.delete":"Delete","add.uploadTitle":"Upload File","add.urlTitle":"Import from URL","add.urlPlaceholder":"Enter URL","add.import":"Import","add.loading":"Opening {filename}...","add.loadingUrl":"Downloading from URL...","add.error.import":"Failed to import file. Please try again.","add.error.url":"Failed to import from URL. Please check the URL and try again.","add.error.cancelled":"Import cancelled.","dialog.loading":"Loading...","dialog.cancel":"Cancel","common.library":"Library","common.discover":"Discover","discover.comingSoon":"Discover feature coming soon!","discover.repositories":"Repositories","discover.addRepo":"Add Repository","discover.addRepoUrl":"Repository URL","discover.addRepoButton":"Add","discover.popular":"Popular","discover.latest":"Latest Updates","discover.categories":"Categories","discover.search":"Search novels...","discover.localImport":"Import Local File","discover.urlImport":"Import from URL","discover.repoStats":"{novels} novels, {updated} updated","discover.lastSync":"Last sync: ","discover.sync":"Sync Now","discover.removeRepo":"Remove","discover.error.invalidRepo":"Invalid repository URL","discover.error.fetchFailed":"Failed to fetch repository data","discover.error.repoExists":"Repository already exists","discover.importComplete":'Successfully imported "{title}"',"discover.searchResults":"Search Results","discover.searchPlaceholder":"Search by title, author...","navigation.discover":"Discover","navigation.search":"Search","common.search":"Search","discover.noResults":"No results found","discover.repoUrl":"Repository URL:","discover.repoCount":"Novels:","discover.novel.author":"Author","discover.novel.categories":"Categories","discover.novel.lastUpdated":"Last Updated","discover.novel.region":"Region","discover.novel.visit":"Visit Page","discover.novel.showMore":"Show more","discover.novel.showLess":"Show less","discover.novel.addToLibrary":"Add to Library","settings.appInfo":"About","settings.appDescription":"A decentralized novel reader that prioritizes privacy by processing all data locally, with no login required. Connect to any compatible repository or import your own content.","settings.privacyTitle":"Privacy First","settings.privacyDescription":"All data is processed locally. No login required, no tracking.","settings.decentralizedTitle":"Decentralized","settings.decentralizedDescription":"Connect to any compatible repository or import your own content","settings.version":"Version","settings.sourceCode":"Source Code","settings.license":"License","settings.themePreference":"Theme Preference","settings.themeAuto":"System","settings.themeLight":"Light","settings.themeDark":"Dark","settings.theme":"Theme","settings.fontSize":"Font Size","settings.readingMode":"Reading Mode","settings.charactersPerPage":"Characters Per Page","settings.pagedMode":"Paged Mode","settings.scrollMode":"Scroll Mode","settings.about":"About","settings.viewSource":"View Source Code","settings.viewSourceDesc":"Check out our GitHub repository","settings.copyright":"\xa9 {year} Web Novel Reader","settings.licenseMIT":"MIT License","add.confirmRedownload":"This novel already exists. Do you want to download it again?","add.confirmImportRepo":"This novel is from a new repository. Would you like to import the repository data as well?","add.repoImported":"Repository successfully imported!","discover.sortBy":"Sort by","discover.sortOptions.relevance":"Relevance","discover.sortOptions.newest":"Newest","discover.sortOptions.popular":"Popular","discover.sortOptions.rating":"Rating","discover.viewAll":"View All","common.previous":"Previous","common.next":"Next","common.pageCount":"Page {current} of {total}","tts.speed":"Reading Speed","tts.language":"Language","tts.voice":"Voice","tts.start":"Start Reading","tts.stop":"Stop Reading","tts.section":"Section {current} of {total}","tts.previous":"Previous Section","tts.next":"Next Section"},zh:{"common.back":"返回","common.settings":"设置","common.close":"关闭","common.home":"主页","navigation.library":"书架","navigation.reader":"阅读器","navigation.settings":"设置","navigation.add":"添加","reader.title":"打开中...","library.title":"小说阅读器","library.import":"导入小说","library.noNovels":"暂无小说","settings.darkMode":"深色模式","settings.language":"语言","reader.menu.settings":"设置","reader.menu.bookmarks":"书签","reader.menu.chapters":"章节","reader.menu.search":"搜索","reader.menu.fontSize":"字体大小","reader.menu.pageMode":"分页模式","reader.menu.scrollMode":"滚动模式","reader.menu.title":"阅读菜单","library.search":"搜索小说...","library.sort.recentlyRead":"最近阅读","library.sort.title":"标题","library.select":"选择","library.cancel":"取消","library.delete":"删除","add.uploadTitle":"上传文件","add.urlTitle":"从网址导入","add.urlPlaceholder":"输入网址","add.import":"导入","add.loading":"正在打开 {filename}...","add.loadingUrl":"正在从网址下载...","add.error.import":"导入文件失败。请重试。","add.error.url":"从网址导入失败。请检查网址后重试。","add.error.cancelled":"导入已取消。","dialog.loading":"加载中...","dialog.cancel":"取消","common.library":"书架","common.discover":"发现","discover.comingSoon":"发现功能即将推出！","discover.repositories":"书源","discover.addRepo":"添加书源","discover.addRepoUrl":"书源地址","discover.addRepoButton":"添加","discover.popular":"热门推荐","discover.latest":"最近更新","discover.categories":"分类","discover.search":"搜索小说...","discover.localImport":"导入本地文件","discover.urlImport":"从网址导入","discover.repoStats":"{novels} 部小说，{updated} 部更新","discover.lastSync":"上次同步：","discover.sync":"立即同步","discover.removeRepo":"移除","discover.error.invalidRepo":"无效的书源地址","discover.error.fetchFailed":"获取书源数据失败","discover.error.repoExists":"书源已存在","discover.importComplete":"成功导入《{title}》","discover.searchResults":"搜索结果","discover.searchPlaceholder":"按标题、作者搜索...","navigation.discover":"发现","navigation.search":"搜索","common.search":"搜索","discover.noResults":"未找到结果","discover.repoUrl":"书源地址：","discover.repoCount":"小说数量：","discover.novel.author":"作者","discover.novel.categories":"分类","discover.novel.lastUpdated":"最后更新","discover.novel.region":"地区","discover.novel.visit":"访问网页","discover.novel.showMore":"显示更多","discover.novel.showLess":"收起","discover.novel.addToLibrary":"添加到书架","settings.appInfo":"关于","settings.appDescription":"去中心化、跨平台的在线阅读器，通过本地处理所有数据来保护隐私。可以通过 PWA 安装到任意平台。连接任何兼容的书源搜索或导入本地内容。","settings.privacyTitle":"隐私优先","settings.privacyDescription":"所有数据本地处理，无需登录，无跟踪","settings.decentralizedTitle":"去中心化","settings.decentralizedDescription":"连接任何兼容的书源或导入自己的内容","settings.version":"版本","settings.sourceCode":"源代码","settings.license":"许可证","settings.themePreference":"主题偏好","settings.themeAuto":"跟随系统","settings.themeLight":"浅色","settings.themeDark":"深色","settings.theme":"主题","settings.fontSize":"字体大小","settings.readingMode":"阅读模式","settings.charactersPerPage":"每页字数","settings.pagedMode":"分页模式","settings.scrollMode":"滚动模式","settings.about":"关于","settings.viewSource":"查看源代码","settings.viewSourceDesc":"访问我们的 GitHub 仓库","settings.copyright":"\xa9 Web Novel Reader","settings.licenseMIT":"MIT 许可证","add.confirmRedownload":"该小说已存在。是否重新下载？","add.confirmImportRepo":"该小说来自新的书源。是否同时导入书源数据？","add.repoImported":"书源导入成功！","discover.sortBy":"排序方式","discover.sortOptions.relevance":"相关度","discover.sortOptions.newest":"最新","discover.sortOptions.popular":"热门","discover.sortOptions.rating":"评分","discover.viewAll":"查看全部","common.previous":"上一页","common.next":"下一页","common.pageCount":"第 {current} 页，共 {total} 页","tts.speed":"朗读速度","tts.language":"语言","tts.voice":"声音","tts.start":"开始朗读","tts.stop":"停止朗读","tts.section":"第 {current} 节，共 {total} 节","tts.previous":"上一节","tts.next":"下一节"}},a=["en","zh"],l=()=>{let e=localStorage.getItem("preferred-language");return e&&a.includes(e)?e:null},d=e=>{localStorage.setItem("preferred-language",e)},c=(e,t)=>r=>{var o;return(null===(o=e[t])||void 0===o?void 0:o[r])||r},u=(0,i.createContext)({language:"en",setLanguage:()=>{},t:e=>e}),p=e=>{let{children:t,initialLang:r}=e,[a,p]=(0,i.useState)(r);(0,i.useEffect)(()=>{let e=l();if(e){p(e);return}let t=s();t!==a&&(p(t),d(t))},[a]);let v=c(n,a);return(0,o.jsx)(u.Provider,{value:{language:a,setLanguage:e=>{p(e),d(e)},t:v},children:t})},v=()=>{let e=(0,i.useContext)(u);if(!e)throw Error("useTranslation must be used within a LanguageProvider");return e}},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return o},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},o="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return f}});let o=r(306),i=r(9955),s=r(5155),n=o._(r(7650)),a=i._(r(2115)),l=r(1147),d=r(2815),c=r(8571),u=new Map,p=new Set,v=e=>{if(n.default.preinit){e.forEach(e=>{n.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},g=e=>{let{src:t,id:r,onLoad:o=()=>{},onReady:i=null,dangerouslySetInnerHTML:s,children:n="",strategy:a="afterInteractive",onError:l,stylesheets:c}=e,g=r||t;if(g&&p.has(g))return;if(u.has(t)){p.add(g),u.get(t).then(o,l);return}let m=()=>{i&&i(),p.add(g)},f=document.createElement("script"),y=new Promise((e,t)=>{f.addEventListener("load",function(t){e(),o&&o.call(this,t),m()}),f.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});s?(f.innerHTML=s.__html||"",m()):n?(f.textContent="string"==typeof n?n:Array.isArray(n)?n.join(""):"",m()):t&&(f.src=t,u.set(t,y)),(0,d.setAttributesFromProps)(f,e),"worker"===a&&f.setAttribute("type","text/partytown"),f.setAttribute("data-nscript",a),c&&v(c),document.body.appendChild(f)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))}):g(e)}function f(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function y(e){let{id:t,src:r="",onLoad:o=()=>{},onReady:i=null,strategy:d="afterInteractive",onError:u,stylesheets:v,...m}=e,{updateScripts:f,scripts:y,getIsSsr:h,appDir:b,nonce:S}=(0,a.useContext)(l.HeadManagerContext),_=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||r;_.current||(i&&e&&p.has(e)&&i(),_.current=!0)},[i,t,r]);let R=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!R.current&&("afterInteractive"===d?g(e):"lazyOnload"===d&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))})),R.current=!0)},[e,d]),("beforeInteractive"===d||"worker"===d)&&(f?(y[d]=(y[d]||[]).concat([{id:t,src:r,onLoad:o,onReady:i,onError:u,...m}]),f(y)):h&&h()?p.add(t||r):h&&!h()&&g(e)),b){if(v&&v.forEach(e=>{n.default.preinit(e,{as:"style"})}),"beforeInteractive"===d)return r?(n.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:S,crossOrigin:m.crossOrigin}:{as:"script",nonce:S,crossOrigin:m.crossOrigin}),(0,s.jsx)("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===d&&r&&n.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:S,crossOrigin:m.crossOrigin}:{as:"script",nonce:S,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let h=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return s}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},o=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function i(e){return["async","defer","noModule"].includes(e)}function s(e,t){for(let[s,n]of Object.entries(t)){if(!t.hasOwnProperty(s)||o.includes(s)||void 0===n)continue;let a=r[s]||s.toLowerCase();"SCRIPT"===e.tagName&&i(a)?e[a]=!!n:e.setAttribute(a,String(n)),(!1===n||"SCRIPT"===e.tagName&&i(a)&&(!n||"false"===n))&&(e.setAttribute(a,""),e.removeAttribute(a))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},5688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7051:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[261,441,517,358],()=>t(1067)),_N_E=e.O()}]);