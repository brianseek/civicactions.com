(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"communitiesQuery",function(){return m});var s=a(0),i=a.n(s),n=a(206),r=a.n(n),l=a(184),o=a.n(l),d=a(189),c=a(182),u=a(185),p=a(233);t.default=function(e){var t=e.data,a=t.markdownRemark,s=t.allMediumPost,n=a.frontmatter,l=n.agl_button_text,m=n.agl_button_link,f=n.title,h=n.subtitle,g=n.agile_intro_text,y=n.dkan_title,v=n.dkan_button_text,b=n.dkan_button_link,_=n.dkan_intro_text,k=n.agl_logo,w=n.dkan_logo,E=s.group,S=r.a.first(E,function(e){return e}),N=r.a.map(S,function(e,t){return i.a.createElement(p.a,{posts:{post:e}})}),j=k?k.childImageSharp.resolutions:"",x=r.a.last(E,function(e){return e}),I=r.a.map(x,function(e,t){return i.a.createElement(p.a,{posts:{post:e}})}),L=w?w.childImageSharp.resolutions:"";return i.a.createElement(u.a,{heroTitle:f,heroSubtitle:h},i.a.createElement("section",{className:"section section__recent-posts"},i.a.createElement("div",{className:"usa-grid community__wrapper"},i.a.createElement("span",{className:"community__logo"},i.a.createElement(o.a,{resolutions:j})),i.a.createElement(d.a,{title:"Agile Government Leadership",subtitle:g},i.a.createElement(c.a,{to:m,children:l,className:"link-button external-link"})),N)),i.a.createElement("section",{className:"section section__recent-posts right-flipped"},i.a.createElement("div",{className:"usa-grid community__wrapper"},i.a.createElement("span",{className:"community__logo dkan"},i.a.createElement(o.a,{resolutions:L})),i.a.createElement(d.a,{title:y,subtitle:_},i.a.createElement(c.a,{to:b,children:v,className:"link-button external-link"})),I)))};var m="2311686936"},182:function(e,t,a){"use strict";a(25),a(20),a(9),a(41),a(19);var s=a(0),i=a.n(s),n=a(49),r=a.n(n);t.a=function(e){var t=e.children,a=e.to,s=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","to"]);return/^\/(?!\/)/.test(a)?i.a.createElement(r.a,Object.assign({to:a},s),t):i.a.createElement("a",Object.assign({href:a},s),t)}},183:function(e,t,a){"use strict";a(188)("fixed",function(e){return function(){return e(this,"tt","","")}})},184:function(e,t,a){"use strict";a(183);var s=a(43);t.__esModule=!0,t.default=void 0;var i,n=s(a(50)),r=s(a(51)),l=s(a(110)),o=s(a(111)),d=s(a(0)),c=s(a(191)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!p[a]||(p[a]=!0,!1)},f=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),f.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+s+i+"<img "+l+o+t+r+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,s=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:s,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var s=!0,i=!0,n=!1,l=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,i=!1,n=!0),"undefined"==typeof window&&(s=!1,i=!1),t.critical&&(s=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:s,imgLoaded:i,IOSupported:n,fadeIn:l,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,s=e.className,i=e.style,n=void 0===i?{}:i,r=e.imgStyle,l=void 0===r?{}:r,c=e.placeholderStyle,p=void 0===c?{}:c,m=e.fluid,f=e.fixed,h=e.backgroundColor,v=e.Tag,b="boolean"==typeof h?"lightgray":h,_=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,p),k=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l);if(m){var w=m;return d.default.createElement(v,{className:(s||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(w.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:w.base64,style:_}),w.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:w.tracedSVG,style:_}),b&&d.default.createElement(v,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,w.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:w.srcSetWebp,sizes:w.sizes}),d.default.createElement("source",{srcSet:w.srcSet,sizes:w.sizes}),d.default.createElement(y,{alt:a,title:t,src:w.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},w))}}))}if(f){var E=f,S=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},n);return"inherit"===n.display&&delete S.display,d.default.createElement(v,{className:(s||"")+" gatsby-image-wrapper",style:S,ref:this.handleRef,key:"fixed-"+JSON.stringify(E.srcSet)},E.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.base64,style:_}),E.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.tracedSVG,style:_}),b&&d.default.createElement(v,{title:t,style:{backgroundColor:b,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&d.default.createElement("picture",null,E.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),d.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),d.default.createElement(y,{alt:a,title:t,width:E.width,height:E.height,src:E.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:E.width,height:E.height},E))}}))}return null},t}(d.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),_=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:b,sizes:_,fixed:b,fluid:_,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var k=v;t.default=k},185:function(e,t,a){"use strict";var s=a(186),i=a(0),n=a.n(i),r=a(200),l=a.n(r),o=a(190),d=a(195),c=(a(30),a(8)),u=a.n(c),p=a(184),m=a.n(p),f=a(187),h=a.n(f),g=a(182),y=function(e){var t=e.client_name,a=e.title,s=e.subtitle,i=e.cta_text,r=e.cta_link,l=(e.cta_is_external,e.hero_class),o=e.image,d=e.location,c=e.personal_pronouns,u=e.social,p=o?n.a.createElement("div",{className:"hero__image"},n.a.createElement(m.a,{fluid:o.childImageSharp.fluid,alt:"Image of "+a})):"";var f,y,v,b=r?n.a.createElement(g.a,{to:(f=r,"INTERNAL_DITAP_FILE"===f?h.a:f),children:i,className:"link-button usa-button-navy"}):null,_=d?n.a.createElement("div",{className:"hero__location"},d," "):"",k=c?n.a.createElement("div",{className:"hero__personal_pronouns"},c," "):null;return u&&(y=u.map(function(e,t){return n.a.createElement("a",{className:"hero__social--link",key:t,href:e.url}," ",e.name," ")}),v=n.a.createElement("div",{className:"hero__social"},y," ")),n.a.createElement("section",{className:"hero usa-grid "+l},p,n.a.createElement("div",{className:"hero__text"},n.a.createElement("div",{className:"hero__client-name"},t),n.a.createElement("h1",{className:"hero__title"+(k?" no-space-underneath":"")},a),k,n.a.createElement("div",{className:"hero__intro-text"},s),_,v,b))},v=y;y.propTypes={title:u.a.string,subtitle:u.a.string,cta_text:u.a.string,cta_link:u.a.string};var b=a(199),_=a(198),k=a(194),w=a.n(k),E=a(196),S=a(197),N=a.n(S);t.a=function(e){e.siteData;var t=e.children,a=e.pageTitle,i=e.clientName,r=e.heroTitle,c=e.heroSubtitle,u=e.heroCTAText,p=e.heroCTALink,m=e.heroClass,f=e.heroIsExternal,h=e.hideSubFooter,g=e.teamImage,y=e.ogImage,k=e.location,S=e.personal_pronouns,j=e.social;return n.a.createElement(o.b,{query:"1879170749",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"og:site_name",content:e.site.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:url",content:k},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:image",content:y},{name:"twitter:card",content:w.a.seo.twitterCard},{name:"twitter:site",content:w.a.seo.twitterSite},{property:"fb:app_id",content:w.a.seo.fbAppId},{property:"og:email",content:e.site.siteMetadata.email},{property:"og:phone_number",content:e.site.siteMetadata.phone}]}),n.a.createElement("header",{className:"section header__main",style:{backgroundImage:"url("+N.a+")"}},n.a.createElement("section",{className:"usa-nav-container"},n.a.createElement("div",{className:"usa-navbar"},n.a.createElement(d.a,{siteTitle:"CivicActions"}),n.a.createElement("button",{className:"usa-menu-btn"},"Menu")),n.a.createElement(E.a,{pages:e.allSitePage})),n.a.createElement(v,{client_name:i,title:r,subtitle:c,cta_text:u,cta_link:p,cta_is_external:f,hero_class:m,image:g,location:k,personal_pronouns:S,social:j})),n.a.createElement("main",null,n.a.createElement("div",null,t)),n.a.createElement(b.a,{hide:h}),n.a.createElement(_.a,{email:e.site.siteMetadata.email,phone:e.site.siteMetadata.phone,address:e.site.siteMetadata.address,address_line_2:e.site.siteMetadata.address_line_2,city:e.site.siteMetadata.city}))},data:s})}},186:function(e){e.exports={data:{site:{siteMetadata:{title:"CivicActions | Open and Agile Digital Government Services",email:"contact@civicactions.com",phone:"(510) 408-7510",address:"3527 Mt Diablo Blvd,",address_line_2:"Unit 269,",city:"Lafayette, CA 94549"}},allSitePage:{edges:[{node:{path:"/dev-404-page/",fields:{slug:"/dev-404-page/"}}},{node:{path:"/press",fields:{slug:"/press"}}},{node:{path:"/press/2",fields:{slug:"/press/2"}}},{node:{path:"/press/3",fields:{slug:"/press/3"}}},{node:{path:"/press/4",fields:{slug:"/press/4"}}},{node:{path:"/press/5",fields:{slug:"/press/5"}}},{node:{path:"/capabilities",fields:{slug:"/capabilities"}}},{node:{path:"/",fields:{slug:"/"}}},{node:{path:"/education-services",fields:{slug:"/education-services"}}},{node:{path:"/feedback",fields:{slug:"/feedback"}}},{node:{path:"/case-study/eatfresh",fields:{slug:"/case-study/eatfresh"}}},{node:{path:"/case-study/digital-democracy",fields:{slug:"/case-study/digital-democracy"}}},{node:{path:"/case-study/fcc",fields:{slug:"/case-study/fcc"}}},{node:{path:"/case-study/globalnet",fields:{slug:"/case-study/globalnet"}}},{node:{path:"/case-study/hhs",fields:{slug:"/case-study/hhs"}}},{node:{path:"/case-study/msf",fields:{slug:"/case-study/msf"}}},{node:{path:"/case-study/smithsonian",fields:{slug:"/case-study/smithsonian"}}},{node:{path:"/case-study/usva",fields:{slug:"/case-study/usva"}}},{node:{path:"/case-study/cdt-foss",fields:{slug:"/case-study/cdt-foss"}}},{node:{path:"/case-study/lincs",fields:{slug:"/case-study/lincs"}}},{node:{path:"/case-study/mta",fields:{slug:"/case-study/mta"}}},{node:{path:"/team/aaron-burt",fields:{slug:"/team/aaron-burt"}}},{node:{path:"/team/aaron-couch",fields:{slug:"/team/aaron-couch"}}},{node:{path:"/team/aaron-pava",fields:{slug:"/team/aaron-pava"}}},{node:{path:"/team/adrienne-cabouet",fields:{slug:"/team/adrienne-cabouet"}}},{node:{path:"/team/alaine-karoleff",fields:{slug:"/team/alaine-karoleff"}}},{node:{path:"/team-alex-scott",fields:{slug:"/team-alex-scott"}}},{node:{path:"/team/amanda-miklik",fields:{slug:"/team/amanda-miklik"}}},{node:{path:"/team/andrew-bond",fields:{slug:"/team/andrew-bond"}}},{node:{path:"/team/andrew-hoppin",fields:{slug:"/team/andrew-hoppin"}}},{node:{path:"/team/andy-hawks",fields:{slug:"/team/andy-hawks"}}},{node:{path:"/team/arpit-patil",fields:{slug:"/team/arpit-patil"}}},{node:{path:"/team/ashish-kumar",fields:{slug:"/team/ashish-kumar"}}},{node:{path:"/team/ben-hafer",fields:{slug:"/team/ben-hafer"}}},{node:{path:"/team/beth-jacobsen",fields:{slug:"/team/beth-jacobsen"}}},{node:{path:"/team/bill-ogilvie",fields:{slug:"/team/bill-ogilvie"}}},{node:{path:"/team/bob-schmitt",fields:{slug:"/team/bob-schmitt"}}},{node:{path:"/team/brian-seek",fields:{slug:"/team/brian-seek"}}},{node:{path:"/team/cameron-prince",fields:{slug:"/team/cameron-prince"}}},{node:{path:"/team/dan-feder",fields:{slug:"/team/dan-feder"}}},{node:{path:"/team/dan-gurin",fields:{slug:"/team/dan-gurin"}}},{node:{path:"/team/daniel-gading",fields:{slug:"/team/daniel-gading"}}},{node:{path:"/team/daniel-schiavone",fields:{slug:"/team/daniel-schiavone"}}},{node:{path:"/team/david-numan",fields:{slug:"/team/david-numan"}}},{node:{path:"/team/di-hussey",fields:{slug:"/team/di-hussey"}}},{node:{path:"/team/dj-green",fields:{slug:"/team/dj-green"}}},{node:{path:"/team/dustin-boeger",fields:{slug:"/team/dustin-boeger"}}},{node:{path:"/team/elizabeth-raley",fields:{slug:"/team/elizabeth-raley"}}},{node:{path:"/team/eric-napier",fields:{slug:"/team/eric-napier"}}},{node:{path:"/team/ero-gray",fields:{slug:"/team/ero-gray"}}},{node:{path:"/team/ethan-teague",fields:{slug:"/team/ethan-teague"}}},{node:{path:"/team/fen-labalme",fields:{slug:"/team/fen-labalme"}}},{node:{path:"/team/gefter-chongong",fields:{slug:"/team/gefter-chongong"}}},{node:{path:"/team/gerardo-gonzalez",fields:{slug:"/team/gerardo-gonzalez"}}},{node:{path:"/team/grace-mckinney",fields:{slug:"/team/grace-mckinney"}}},{node:{path:"/team/greg-elin",fields:{slug:"/team/greg-elin"}}},{node:{path:"/team/henry-poole",fields:{slug:"/team/henry-poole"}}},{node:{path:"/team/holly-french",fields:{slug:"/team/holly-french"}}},{node:{path:"/team/iris-ibekwe",fields:{slug:"/team/iris-ibekwe"}}},{node:{path:"/team/jacqueline-gu",fields:{slug:"/team/jacqueline-gu"}}},{node:{path:"/team/janette-day",fields:{slug:"/team/janette-day"}}},{node:{path:"/team/jason-heaster",fields:{slug:"/team/jason-heaster"}}},{node:{path:"/team/jay-darnell",fields:{slug:"/team/jay-darnell"}}},{node:{path:"/team/jen-harris",fields:{slug:"/team/jen-harris"}}},{node:{path:"/team/jim-bader",fields:{slug:"/team/jim-bader"}}},{node:{path:"/team/john-erhardt",fields:{slug:"/team/john-erhardt"}}},{node:{path:"/team/john-o-duinn",fields:{slug:"/team/john-o-duinn"}}},{node:{path:"/team/josh-rose",fields:{slug:"/team/josh-rose"}}},{node:{path:"/team/ken-renshaw",fields:{slug:"/team/ken-renshaw"}}},{node:{path:"/team/kevin-walsh",fields:{slug:"/team/kevin-walsh"}}},{node:{path:"/team/kim-davidson",fields:{slug:"/team/kim-davidson"}}},{node:{path:"/team/kristian-ducharme",fields:{slug:"/team/kristian-ducharme"}}},{node:{path:"/team/luke-fretwell",fields:{slug:"/team/luke-fretwell"}}},{node:{path:"/team/marc-jones",fields:{slug:"/team/marc-jones"}}},{node:{path:"/team/may-lyn-medina",fields:{slug:"/team/may-lyn-medina"}}},{node:{path:"/team/melinda-burgess",fields:{slug:"/team/melinda-burgess"}}},{node:{path:"/team/owen-barton",fields:{slug:"/team/owen-barton"}}},{node:{path:"/team/rachel-kauff",fields:{slug:"/team/rachel-kauff"}}},{node:{path:"/team/rachel-kroft",fields:{slug:"/team/rachel-kroft"}}},{node:{path:"/team/rob-read",fields:{slug:"/team/rob-read"}}},{node:{path:"/team/sam-lerner",fields:{slug:"/team/sam-lerner"}}},{node:{path:"/team/sreekar-peddi",fields:{slug:"/team/sreekar-peddi"}}},{node:{path:"/team/srikanth-chowdhary",fields:{slug:"/team/srikanth-chowdhary"}}},{node:{path:"/team/stefanie-gray",fields:{slug:"/team/stefanie-gray"}}},{node:{path:"/team/steve-curtis",fields:{slug:"/team/steve-curtis"}}},{node:{path:"/team/steve-wirt",fields:{slug:"/team/steve-wirt"}}},{node:{path:"/team/susie-bird",fields:{slug:"/team/susie-bird"}}},{node:{path:"/team/tom-camp",fields:{slug:"/team/tom-camp"}}},{node:{path:"/team/judy-raiten",fields:{slug:"/team/judy-raiten"}}},{node:{path:"/team/karen-johnson",fields:{slug:"/team/karen-johnson"}}},{node:{path:"/team/tom-wood",fields:{slug:"/team/tom-wood"}}},{node:{path:"/team/kate-garklavs-saul",fields:{slug:"/team/kate-garklavs-saul"}}},{node:{path:"/team/tony-cooper",fields:{slug:"/team/tony-cooper"}}},{node:{path:"/team/tony-fortenberry",fields:{slug:"/team/tony-fortenberry"}}},{node:{path:"/press/civicactions-joins-digital-services-coalition",fields:{slug:"/press/civicactions-joins-digital-services-coalition"}}},{node:{path:"/press/remote-teams-offer-competitive-advantage",fields:{slug:"/press/remote-teams-offer-competitive-advantage"}}},{node:{path:"/press/govtech-2019-top-100-companies",fields:{slug:"/press/govtech-2019-top-100-companies"}}},{node:{path:"/press/civicactions-featured-world-changing-drupal-sites",fields:{slug:"/press/civicactions-featured-world-changing-drupal-sites"}}},{node:{path:"/press/new-york-city-delivers-real-time-data-metro-riders",fields:{slug:"/press/new-york-city-delivers-real-time-data-metro-riders"}}},{node:{path:"/press/aaron-pava-executive-director-agl",fields:{slug:"/press/aaron-pava-executive-director-agl"}}},{node:{path:"/press/people-are-the-real-metrics",fields:{slug:"/press/people-are-the-real-metrics"}}},{node:{path:"/press/happy-productive-remote-teams",fields:{slug:"/press/happy-productive-remote-teams"}}},{node:{path:"/press/govtech-2018-top-100-companies",fields:{slug:"/press/govtech-2018-top-100-companies"}}},{node:{path:"/press/best-50-top-workplaces-2017",fields:{slug:"/press/best-50-top-workplaces-2017"}}},{node:{path:"/press/civicactions-expands-with-dkan",fields:{slug:"/press/civicactions-expands-with-dkan"}}},{node:{path:"/press/california-child-welfare-hires-civicactions",fields:{slug:"/press/california-child-welfare-hires-civicactions"}}},{node:{path:"/press/gcn-interview-smart-open-source",fields:{slug:"/press/gcn-interview-smart-open-source"}}},{node:{path:"/press/online-agile-course-targets-gov-execs",fields:{slug:"/press/online-agile-course-targets-gov-execs"}}},{node:{path:"/press/govtech-2017-top-100-companies",fields:{slug:"/press/govtech-2017-top-100-companies"}}},{node:{path:"/press/2016-fedscoop-it-summit",fields:{slug:"/press/2016-fedscoop-it-summit"}}},{node:{path:"/press/2016-california-technology-forum",fields:{slug:"/press/2016-california-technology-forum"}}},{node:{path:"/press/sharing-openly-with-competitors",fields:{slug:"/press/sharing-openly-with-competitors"}}},{node:{path:"/press/launch-of-agl-academy",fields:{slug:"/press/launch-of-agl-academy"}}},{node:{path:"/press/goodbye-100-page-rfps",fields:{slug:"/press/goodbye-100-page-rfps"}}},{node:{path:"/press/18f-agile-contract",fields:{slug:"/press/18f-agile-contract"}}},{node:{path:"/press/fcw-embracing-agile",fields:{slug:"/press/fcw-embracing-agile"}}},{node:{path:"/press/fcw-is-gov-ready-for-agile",fields:{slug:"/press/fcw-is-gov-ready-for-agile"}}},{node:{path:"/press/what-agile-should-look-like-in-federal-gov",fields:{slug:"/press/what-agile-should-look-like-in-federal-gov"}}},{node:{path:"/press/overcome-roadblocks-to-agile",fields:{slug:"/press/overcome-roadblocks-to-agile"}}},{node:{path:"/404/",fields:{slug:"/404/"}}},{node:{path:"/approach/",fields:{slug:"/approach/"}}},{node:{path:"/careers/",fields:{slug:"/careers/"}}},{node:{path:"/case-study/",fields:{slug:"/case-study/"}}},{node:{path:"/communities/",fields:{slug:"/communities/"}}},{node:{path:"/contact/",fields:{slug:"/contact/"}}},{node:{path:"/dkan/",fields:{slug:"/dkan/"}}},{node:{path:"/licensing-policy/",fields:{slug:"/licensing-policy/"}}},{node:{path:"/privacy-policy/",fields:{slug:"/privacy-policy/"}}},{node:{path:"/team/",fields:{slug:"/team/"}}},{node:{path:"/thank-you/",fields:{slug:"/thank-you/"}}},{node:{path:"/values/",fields:{slug:"/values/"}}},{node:{path:"/404.html",fields:{slug:"/404.html"}}}]}}}},187:function(e,t,a){e.exports=a.p+"static/CivicActions-DITAP-316da5015db82fd1e580b049e02a4c6e.pdf"},188:function(e,t,a){var s=a(6),i=a(10),n=a(32),r=/"/g,l=function(e,t,a,s){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(s).replace(r,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),s(s.P+s.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},189:function(e,t,a){"use strict";var s=a(0),i=a.n(s);t.a=function(e){var t=e.title,a=e.subtitle,s=e.children,n=a?i.a.createElement("p",{className:"section__subtitle"},a):"";return i.a.createElement("div",{className:"section__title--wrapper"},i.a.createElement("h2",{className:"section__title"},t),n,s)}},191:function(e,t,a){a(42),a(31),e.exports=a(192)()},192:function(e,t,a){"use strict";a(30);var s=a(193);function i(){}e.exports=function(){function e(e,t,a,i,n,r){if(r!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=i,a.PropTypes=a,a}},193:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},211:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(182);t.a=function(e){var t,a=e.teaserDate,s=e.teaserImage,r=e.teaserTitle,l=e.teaserText,o=e.teaserLink,d=e.teaserClass,c=(e.teaserType,"teaser"),u="";return d&&(c="teaser "+d),s&&(u=i.a.createElement("div",{className:"teaser__image--wrapper"},i.a.createElement("img",{src:s,alt:r}))),l&&(t=i.a.createElement("p",{className:"teaser__text"}," ",l," ")),i.a.createElement("div",{className:c},u,i.a.createElement("div",{className:"teaser__date"}," ",a," "),i.a.createElement("h3",{className:"teaser__title"}," ",i.a.createElement(n.a,{to:o},r)),t)}},219:function(e,t,a){var s=a(6),i=a(32),n=a(10),r=a(227),l="["+r+"]",o=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),c=function(e,t,a){var i={},l=n(function(){return!!r[e]()||"​"!="​"[e]()}),o=i[e]=l?t(u):r[e];a&&(i[a]=o),s(s.P+s.F*l,"String",i)},u=c.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(d,"")),e};e.exports=c},227:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(206),r=a.n(n),l=a(211);function o(e){var t=e.single,a="https://medium.com/civicactions/"+t.uniqueSlug,s=t.createdAt,n=t.title;return i.a.createElement(l.a,{teaserDate:s,teaserTitle:n,teaserLink:a})}var d=function(e){var t=e.data;return r.a.map(t,function(e){return r.a.map(e,function(e,t){return i.a.createElement("li",{key:t,className:"medium--teaser__item teaser__item"},i.a.createElement(o,{key:t,single:e.node}))})})};t.a=function(e){var t=e.posts;return r.a.map(t,function(e,t){return i.a.createElement("ul",{key:t,className:"medium--teasers teaser--wrapper"},i.a.createElement(d,{data:{article:e}}))})}}}]);
//# sourceMappingURL=component---src-pages-communities-js-b26a4cc353229e27d62c.js.map