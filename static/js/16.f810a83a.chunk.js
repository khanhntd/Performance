"use strict";(self.webpackChunkperformance=self.webpackChunkperformance||[]).push([[16],{8800:function(e,t,n){n.d(t,{c:function(){return i},d:function(){return o}});var r=n(7890),o=n(1912).Z.create({baseURL:"https://q6swwiuaj9.execute-api.us-west-2.amazonaws.com/default/performance",timeout:3e3,headers:{"x-api-key":"Z8kxH351gZ67NGfw1hBUx38eG8TCvoUR82lZMuH0"},responseType:"json",maxRedirects:21}),i=new r.v({auth:"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"})},1418:function(e,t,n){n.d(t,{DQ:function(){return r},Z8:function(){return a},fr:function(){return i},m_:function(){return l},tF:function(){return o},xm:function(){return s}});var r=["statsd","logs","disk"],o=["procstat_cpu_usage","procstat_memory_rss"],i=[100,1e3,5e3],a="aws",l="AmazonCloudWatchAgent",s={procstat_cpu_usage:"CPU Usage",procstat_memory_rss:"Memory Resource",procstat_memory_swap:"Memory Swap",procstat_memory_vms:"Virtual Memory",procstat_memory_data:"Swap Memory",procstat_num_fds:"File Descriptors",procstat_write_bytes:"Write Disk Bytes",net_bytes_sent:"Net Bytes Sent",net_packets_sent:"Net Packages Sent"}},6016:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(4165),o=n(4942),i=n(1413),a=n(7762),l=n(5861),s=n(9439),d=n(1614),u=n(3239),c=n(890),v=n(9281),m=n(5527),p=n(9836),h=n(3382),x=n(5855),f=n(8745),_=n(533),b=n(8559),Z=n(9891),g=n(2426),w=n.n(g),y=n(2791),j=n(1418),M=n(9690),N=n(6934),S=n(618),A=n(6890),C=n(184),k=(0,N.ZP)(f.Z)((function(e){var t,n=e.theme;return t={},(0,o.Z)(t,"&.".concat(S.Z.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white,border:"1px solid #000",textAlign:"center"}),(0,o.Z)(t,"&.".concat(S.Z.body),{fontSize:14,border:"1px solid #000",textAlign:"center"}),t})),W=(0,N.ZP)(x.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{}}}));function P(e){var t=e.use_cases,n=e.data_rate;return(0,C.jsx)(v.Z,{sx:{mb:4},component:m.Z,children:(0,C.jsxs)(p.Z,{sx:{borderStyle:"solid"},size:"small","aria-label":"a dense table",children:[(0,C.jsx)(A.Z,{children:(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(k,{width:"50vw",align:"center",sx:{fontWeight:"bold",whiteSpace:"nowrap"},children:"Use Case"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Instance Type"}),(0,C.jsx)(k,{width:"50%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg CPU Usage (%)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Usage (%)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Swap (%)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Data (%)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Virtual Memory (%)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Write Disk Bytes (MB)"}),(0,C.jsx)(k,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"File Descriptors"}),(0,C.jsx)(k,{width:"30%",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Net Bytes Sent (MB)"}),(0,C.jsx)(k,{width:"30%",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Net Packages Sent (MB)"})]})}),(0,C.jsx)(h.Z,{children:null===t||void 0===t?void 0:t.map((function(e){var t,r,o,i,a,l,s,d,u,c,v,m,p,h,x,f,_,b,Z,g,w,y,j,M,N,S;return(0,C.jsxs)(W,{children:[(0,C.jsx)(k,{children:e.name}),(0,C.jsx)(k,{children:e.instance_type}),(0,C.jsx)(k,{children:Number(null===(t=e.data)||void 0===t||null===(r=t[n])||void 0===r?void 0:r.procstat_cpu_usage).toFixed(2)}),(0,C.jsx)(k,{children:(Number(null===(o=e.data)||void 0===o||null===(i=o[n])||void 0===i?void 0:i.procstat_memory_rss)/Number(null===(a=e.data)||void 0===a||null===(l=a[n])||void 0===l?void 0:l.mem_total)).toFixed(2)}),(0,C.jsx)(k,{children:(Number(null===(s=e.data)||void 0===s||null===(d=s[n])||void 0===d?void 0:d.procstat_memory_swap)/Number(null===(u=e.data)||void 0===u||null===(c=u[n])||void 0===c?void 0:c.mem_total)).toFixed(2)}),(0,C.jsx)(k,{children:(Number(null===(v=e.data)||void 0===v||null===(m=v[n])||void 0===m?void 0:m.procstat_memory_data)/Number(null===(p=e.data)||void 0===p||null===(h=p[n])||void 0===h?void 0:h.mem_total)).toFixed(2)}),(0,C.jsx)(k,{children:(Number(null===(x=e.data)||void 0===x||null===(f=x[n])||void 0===f?void 0:f.procstat_memory_vms)/Number(null===(_=e.data)||void 0===_||null===(b=_[n])||void 0===b?void 0:b.mem_total)).toFixed(2)}),(0,C.jsx)(k,{children:Number(null===(Z=e.data)||void 0===Z||null===(g=Z[n])||void 0===g?void 0:g.procstat_write_bytes).toFixed(2)}),(0,C.jsx)(k,{children:Number(null===(w=e.data)||void 0===w||null===(y=w[n])||void 0===y?void 0:y.procstat_num_fds).toFixed(2)}),(0,C.jsx)(k,{children:Number(null===(j=e.data)||void 0===j||null===(M=j[n])||void 0===M?void 0:M.net_bytes_sent).toFixed(2)}),(0,C.jsx)(k,{children:Number(null===(N=e.data)||void 0===N||null===(S=N[n])||void 0===S?void 0:S.net_packets_sent).toFixed(2)})]},e.name)}))})]})})}var R=n(8800);function T(){return D.apply(this,arguments)}function D(){return(D=(0,l.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F({TableName:"CWAPerformanceMetrics",Limit:j.DQ.length,IndexName:"ServiceDate",KeyConditions:{Service:{ComparisonOperator:"EQ",AttributeValueList:[{S:j.m_}]},CommitDate:{ComparisonOperator:"LE",AttributeValueList:[{N:w()().unix().toString()}]}},ScanIndexForward:!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return U.apply(this,arguments)}function U(){return(U=(0,l.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.d.post("/",{Action:"Query",Params:t}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Items})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return I.apply(this,arguments)}function I(){return(I=(0,l.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.c.request("GET /repos/{owner}/{repo}/releases/latest",{owner:j.Z8,repo:"amazon-cloudwatch-agent"}).then((function(e){return null===e||void 0===e?void 0:e.data})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return H.apply(this,arguments)}function H(){return(H=(0,l.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.c.request("GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",{owner:j.Z8,repo:"amazon-cloudwatch-agent",commit_sha:t}).then((function(e){return Promise.resolve(e.data.at(0))})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){var e;(0,M.o)({title:"Amazon CloudWatch Agent"});var t=function(){var e=y.useState({version:void 0,commit_url:void 0,commit_date:void 0,commit_title:void 0,use_cases:[],ami_id:void 0,collection_period:void 0,error:void 0}),t=(0,s.Z)(e,2),n=t[0],d=t[1];return y.useEffect((function(){(0,l.Z)((0,r.Z)().mark((function e(){var t,n,l,u,c,v,m,p,h,x,f,_,b,Z,g,y,M;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([z(),T()]);case 2:if(c=e.sent,v=(0,s.Z)(c,2),m=v[0],p=v[1],null!=m&&null!=p&&0!==p.length){e.next=8;break}return e.abrupt("return");case 8:h=[],x=(null===(t=p.at(0))||void 0===t?void 0:t.CommitHash.S)||"",f=null===(n=p.at(0))||void 0===n?void 0:n.CommitDate.N,_=null===(l=p.at(0))||void 0===l?void 0:l.CollectionPeriod.S,b=null===(u=p.at(0))||void 0===u?void 0:u.InstanceAMI.S,Z=(0,a.Z)(p),e.prev=14,y=(0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g.value,h.push({name:null===t||void 0===t?void 0:t.UseCase.S,data_type:null===t||void 0===t?void 0:t.DataType.S,instance_type:null===t||void 0===t?void 0:t.InstanceType.S,data:j.fr.reduce((function(e,n){var r,a,l,s,d,u,c,v,m,p,h,x,f,_,b,Z,g,w,y,j,M,N,S,A,C,k,W,P,R,T,D,F,U,z,I,B,H,L,E,V,G,Q,Y,O,q,K,J,X,$,ee;return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},n,{procstat_cpu_usage:null===t||void 0===t||null===(r=t.Results.M[n])||void 0===r||null===(a=r.M)||void 0===a||null===(l=a.procstat_cpu_usage)||void 0===l||null===(s=l.M)||void 0===s||null===(d=s.Average)||void 0===d?void 0:d.N,procstat_memory_rss:null===t||void 0===t||null===(u=t.Results.M[n])||void 0===u||null===(c=u.M)||void 0===c||null===(v=c.procstat_memory_rss)||void 0===v||null===(m=v.M)||void 0===m||null===(p=m.Average)||void 0===p?void 0:p.N,procstat_memory_swap:null===t||void 0===t||null===(h=t.Results.M[n])||void 0===h||null===(x=h.M)||void 0===x||null===(f=x.procstat_memory_swap)||void 0===f||null===(_=f.M)||void 0===_||null===(b=_.Average)||void 0===b?void 0:b.N,procstat_memory_vms:null===t||void 0===t||null===(Z=t.Results.M[n])||void 0===Z||null===(g=Z.M)||void 0===g||null===(w=g.procstat_memory_vms)||void 0===w||null===(y=w.M)||void 0===y||null===(j=y.Average)||void 0===j?void 0:j.N,procstat_memory_data:null===t||void 0===t||null===(M=t.Results.M[n])||void 0===M||null===(N=M.M)||void 0===N||null===(S=N.procstat_memory_data)||void 0===S||null===(A=S.M)||void 0===A||null===(C=A.Average)||void 0===C?void 0:C.N,procstat_write_bytes:null===t||void 0===t||null===(k=t.Results.M[n])||void 0===k||null===(W=k.M)||void 0===W||null===(P=W.procstat_write_bytes)||void 0===P||null===(R=P.M)||void 0===R||null===(T=R.Average)||void 0===T?void 0:T.N,procstat_num_fds:null===t||void 0===t||null===(D=t.Results.M[n])||void 0===D||null===(F=D.M)||void 0===F||null===(U=F.procstat_num_fds)||void 0===U||null===(z=U.M)||void 0===z||null===(I=z.Average)||void 0===I?void 0:I.N,net_bytes_sent:null===t||void 0===t||null===(B=t.Results.M[n])||void 0===B||null===(H=B.M)||void 0===H||null===(L=H.net_bytes_sent)||void 0===L||null===(E=L.M)||void 0===E||null===(V=E.Average)||void 0===V?void 0:V.N,net_packets_sent:null===t||void 0===t||null===(G=t.Results.M[n])||void 0===G||null===(Q=G.M)||void 0===Q||null===(Y=Q.net_packets_sent)||void 0===Y||null===(O=Y.M)||void 0===O||null===(q=O.Average)||void 0===q?void 0:q.N,mem_total:null===t||void 0===t||null===(K=t.Results.M[n])||void 0===K||null===(J=K.M)||void 0===J||null===(X=J.mem_total)||void 0===X||null===($=X.M)||void 0===$||null===(ee=$.Average)||void 0===ee?void 0:ee.N}))}),{})});case 2:case"end":return e.stop()}}),e)})),Z.s();case 17:if((g=Z.n()).done){e.next=21;break}return e.delegateYield(y(),"t0",19);case 19:e.next=17;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),Z.e(e.t1);case 26:return e.prev=26,Z.f(),e.finish(26);case 29:return e.next=31,B(x);case 31:M=e.sent,d((function(e){return(0,i.Z)((0,i.Z)({},e),{},{version:m.tag_name,ami_id:b,collection_period:_,use_cases:h,commit_title:"".concat(M.title," (#").concat(M.number,")"),commit_url:M.html_url,commit_date:w().unix(Number(f)).format("dddd, MMMM Do, YYYY h:mm:ss A")})}));case 33:case"end":return e.stop()}}),e,null,[[14,23,26,29]])})))()}),[d]),[n,d]}(),n=(0,s.Z)(t,1)[0],g=n.version,N=n.commit_date,S=n.commit_title,A=n.commit_url,k=n.use_cases,W=n.ami_id,R=n.collection_period,D=function(){var e=y.useState({data_type:"Metrics"}),t=(0,s.Z)(e,2),n=t[0],r=t[1];return[n,r]}(),F=(0,s.Z)(D,2),U=F[0].data_type,I=F[1];return g&&S?(0,C.jsxs)(d.Z,{sx:{py:"5vh",border:"1px solid"},maxWidth:"lg",children:[(0,C.jsx)(d.Z,{sx:{mb:4},children:(0,C.jsxs)(c.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h2",children:["Performance Report",(0,C.jsx)("hr",{})]})}),(0,C.jsxs)(d.Z,{sx:{mb:4},children:[(0,C.jsx)(v.Z,{sx:{mb:4,display:"flex",justifyContent:"center",boxShadow:"unset"},component:m.Z,children:(0,C.jsx)(p.Z,{sx:{borderStyle:"solid",width:"fit-content"},size:"small","aria-label":"a dense table",children:(0,C.jsx)(h.Z,{children:null===(e=["Version","Architectural","Collection Period","Testing AMI","Commit Name","Commit Date","Data type"])||void 0===e?void 0:e.map((function(e){return(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(f.Z,{sx:{border:"1px solid #000",fontWeight:"bold"},children:e}),(0,C.jsx)(f.Z,{sx:{border:"1px solid #000",textAlign:"center"},children:"Version"===e?(0,C.jsx)(_.Z,{href:"https://github.com/aws/amazon-cloudwatch-agent/releases/tag/".concat(g),children:g}):"Architectural"===e?(0,C.jsx)(c.Z,{variant:"h4",children:"EC2"}):"Collection Period"===e?(0,C.jsxs)(c.Z,{variant:"h4",children:[R,"s"]}):"Testing AMI"===e?(0,C.jsx)(c.Z,{variant:"h4",children:W}):"Commit Name"===e?(0,C.jsx)(_.Z,{href:A,variant:"h4",children:S}):"Commit Date"===e?(0,C.jsx)(c.Z,{variant:"h4",children:N}):(0,C.jsxs)(b.Z,{sx:{height:"41px"},value:U,onChange:function(e){return I({data_type:e.target.value})},children:[(0,C.jsx)(Z.Z,{value:"Metrics",children:"Metric"}),(0,C.jsx)(Z.Z,{value:"Traces",children:"Trace"}),(0,C.jsx)(Z.Z,{value:"Logs",children:"Logs"})]})})]},e)}))})})}),(0,C.jsx)("hr",{})]}),j.fr.map((function(e){return(0,C.jsxs)(d.Z,{children:[(0,C.jsxs)(c.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h3",children:[U," (TPM: ",e,")"," "]}),(0,C.jsx)(P,{data_rate:String(e),use_cases:k.filter((function(e){return(null===e||void 0===e?void 0:e.data_type)===U.toLowerCase()}))})]},e)}))]}):(0,C.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,C.jsx)(u.Z,{color:"inherit"})})}},9690:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(2791),o=n(7689);function i(e,t){var n=(0,o.TH)();r.useEffect((function(){var t=document.title;return document.title="/"===n.pathname&&null!==e&&void 0!==e&&e.title?"".concat(e.title," "):"AWS",function(){document.title=t}}),null!==t&&void 0!==t?t:[])}},6890:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7462),o=n(3366),i=n(2791),a=n(8182),l=n(4419),s=n(829),d=n(1402),u=n(6934),c=n(5878),v=n(1217);function m(e){return(0,v.Z)("MuiTableHead",e)}(0,c.Z)("MuiTableHead",["root"]);var p=n(184),h=["className","component"],x=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),f={variant:"head"},_="thead",b=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiTableHead"}),i=n.className,u=n.component,c=void 0===u?_:u,v=(0,o.Z)(n,h),b=(0,r.Z)({},n,{component:c}),Z=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},m,t)}(b);return(0,p.jsx)(s.Z.Provider,{value:f,children:(0,p.jsx)(x,(0,r.Z)({as:c,className:(0,a.Z)(Z.root,i),ref:t,role:c===_?null:"rowgroup",ownerState:b},v))})}))}}]);
//# sourceMappingURL=16.f810a83a.chunk.js.map