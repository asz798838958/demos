(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,e,i){"use strict";i.r(e);var a=i(21),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(37),s=i(3);var d=function(t){i(101)},h=Object(s.a)(o.a,n.a,n.b,!1,d,"data-v-817274cc",null);e.default=h.exports},101:function(t,e,i){var a=i(102);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(17).default)("c75e7e76",a,!0,{})},102:function(t,e,i){(t.exports=i(11)(!1)).push([t.i,".chart-item-drag-area[data-v-817274cc]{position:relative;top:1px;height:calc(100% - 2px);margin:0 2px;outline:1px dashed #c2ced6;text-align:center;line-height:80px;font-size:13px;color:#c2ced6}.chart-item-drag-area.drag-over[data-v-817274cc]{background:#f7fafc}",""])},103:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WidgetData=e.Widget=void 0;var a=r(i(104)),o=r(i(105));function r(t){return t&&t.__esModule?t:{default:t}}var n=0,s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.position,o=void 0===i?{}:i,r=e.layout,s=void 0===r?{}:r,d=e.data,h=void 0===d?{}:d;(0,a.default)(this,t);var c=o.width,l=void 0===c?0:c,u=o.height,f=void 0===u?0:u,g=o.top,p=void 0===g?0:g,v=o.left,w=void 0===v?0:v;this.id=++n,this.position={width:l,height:f,top:p,left:w,previewOffset:0},this.data=h,this.refresh(s)}return(0,o.default)(t,[{key:"refresh",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.gridSize,i=void 0===e?0:e,a=t.gutter,o=void 0===a?0:a,r=this.position,n=r.width,s=r.height,d=r.top,h=r.left,c=r.previewOffset;this.screenPosition={width:n*i-o+"px",height:s*i-o+"px",top:(d+c)*i+"px",left:h*i+"px"}}},{key:"setPosition",value:function(t,e){var i=this;"width,height,top,left".split(",").forEach(function(e){"number"==typeof t[e]&&(i.position[e]=t[e])}),this.refresh(e)}},{key:"applyOffset",value:function(){this.position.top+=this.position.previewOffset,this.setOffset(0)}},{key:"setOffset",value:function(t){this.position.previewOffset=t||0}},{key:"getOffset",value:function(){return this.position.previewOffset}},{key:"parse",value:function(){var t=this.position;return{position:{width:t.width,height:t.height,top:t.top,left:t.left},data:this.data}}}]),t}(),d=["图表一","图表二","图表三","图表四","图表五","图表六"],h=function(){function t(){(0,a.default)(this,t),this.widgetType="none",this.title="未命名",this.chartList=[],this.chartTitleList=[],this.activeTabIndex=0,this.description=""}return(0,o.default)(t,[{key:"init",value:function(t){var e=t.widgetType,i=t.widgetLength,a=void 0===i?0:i;a=Math.min(a,6),this.chartList="pure-chart"===e?[""]:new Array(a).fill(""),"tab-charts"===e&&(this.chartTitleList=d.slice(0,a)),this.widgetType=e}},{key:"setData",value:function(t){var e=t.widgetType,i=void 0===e?"none":e,a=t.title,o=t.chartList,r=void 0===o?[]:o,n=t.chartTitleList,s=void 0===n?[]:n,d=t.description,h=void 0===d?"":d;this.widgetType=i,this.title=a||"未命名",this.chartList=r,this.chartTitleList=s,this.description=h||""}}]),t}();e.Widget=s,e.WidgetData=h},109:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){var i=e.move,a=e.end,o=t.clientX,r=t.clientY;function n(t){var e=t.clientX,a=t.clientY,n=e-o,s=a-r;t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),i&&i({clientX:e,clientY:a,xOffset:n,yOffset:s})}t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),document.addEventListener("mousemove",n,!1),document.addEventListener("mouseup",function t(e){document.removeEventListener("mousemove",n,!1),document.removeEventListener("mouseup",t,!1);var i=e.clientX,s=e.clientY,d=i-o,h=s-r;a&&a({clientX:i,clientY:s,xOffset:d,yOffset:h})},!1)}},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(58));e.default={components:{dashLayoutEditor:a.default},name:"BChartWrapper",data:function(){return{layout:{widgets:[{position:{width:12,height:3,top:0,left:0},data:{widgetType:"pure-chart",title:"销售部2018年总业绩",chartList:[""],chartTitleList:[],activeTabIndex:0,description:""}},{position:{width:4,height:8,top:3,left:0},data:{widgetType:"column-charts",title:"市场部营销总额",chartList:["","",""],chartTitleList:[],activeTabIndex:0,description:""}},{position:{width:8,height:4,top:3,left:4},data:{widgetType:"tab-charts",title:"APP市场占有率",chartList:["","",""],chartTitleList:["蜀山区","政务区","滨湖新区"],activeTabIndex:2,description:""}},{position:{width:8,height:4,top:7,left:4},data:{widgetType:"pure-chart",title:"教育业务接入比例",chartList:[""],chartTitleList:[],activeTabIndex:0,description:"2018年计划接入应用与实际接入情况对比，数据每周更新一次，数据来自多个部门，请注意处理好数据筛选与整理。"}},{position:{width:12,height:4,top:11,left:0},data:{widgetType:"row-charts",title:"预算池",chartList:["","",""],chartTitleList:[],activeTabIndex:0,description:""}}],charts:[]}}},mounted:function(){},beforeDestroy:function(){},methods:{save:function(){var t=this.$refs.editor.parse();console.log("当前 dashboard 数据为："),console.log("_____________________"),console.log(t),alert("请打开控制台查看数据")}}}},19:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=c(i(61)),o=c(i(81)),r=c(i(95)),n=c(i(97)),s=c(i(100)),d=i(103),h=c(i(109));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(){var t=(new Date).getTime().toString(36);function e(){return function(t,e){if(t.length<e){var i=e-t.length;return new Array(i+1).join("x")+t}return t}(Math.floor(6e7*Math.random()).toString(36),5)}return[t=t.split("").reverse().join(""),e(),e(),e()].join("-")},u=function(t){return JSON.parse((0,r.default)(t))},f=function(t){t.sort(function(t,e){var i=t.position.top-e.position.top;return 0!==i?i:t.position.left-e.position.left})},g=function(t,e,i,a){return!(t>=i+a||t+e<=i)};e.default={name:"dashBoardLayoutEditor",props:{showFilter:{},widgets:{},charts:{},filters:{}},components:{widgetChartForDrag:s.default,widgetTypeSelector:n.default},data:function(){return{count:0,globalStyleSheet:{},layout:{width:200,height:800,horizontalGridCount:12,gridSize:0,gutter:10},widgetList:[],shadowWidget:new d.Widget,activeWidget:null,timeInterval:null,_triggerChartChangedTimer:null}},mounted:function(){this.refresh(),window.addEventListener("resize",this.refresh)},beforeDestroy:function(){this.timeInterval&&clearInterval(this.timeInterval),window.removeEventListener("resize",this.refresh)},methods:{getChartByID:function(t){for(var e=0,i=this.charts.length;e<i;e++)if(this.charts[e].id===t)return this.charts[e];return null},getWidgetByID:function(t){for(var e=0,i=this.widgetList.length;e<i;e++)if(this.widgetList[e].id===t)return this.widgetList[e];return null},markIsChartUsed:function(){var t=this.widgetList.map(function(t){return t.data.chartList||[]});t=[].concat.apply([],t),this.charts.forEach(function(e){var i=e.id;e.beUsed=t.indexOf(i)>-1})},chartInsertToWidget:function(t){var e=t.widgetID,i=t.chartIndex,a=t.chartUUID,o=this.getWidgetByID(e);o&&this.$set(o.data.chartList,i,a),this._triggerChartChanged()},removeChartFromWidget:function(t){var e=t.widgetID,i=t.chartUUID,a=t.chartId,o=this.getWidgetByID(e);if(o){var r=o.data.chartList,n=r.indexOf(i);n>=0&&this.$set(r,n,"")}this._triggerChartChanged(null,a)},removeChart:function(t){var e=this;this.widgetList.forEach(function(i){var a=i.data.chartList,o=a.indexOf(t);o>=0&&e.$set(a,o,"")});for(var i=0,a=this.charts.length;i<a;i++)if(this.charts[i].id===t){this.charts.splice(i,1);break}this._triggerChartChanged()},_triggerChartChanged:function(t,e){var i=this;clearTimeout(this._triggerChartChangedTimer),this._triggerChartChangedTimer=setTimeout(function(){if(i.charts&&i.charts.length&&i.markIsChartUsed(),t||-1===t)if(-1===t){var a=e.data.chartList.filter(function(t){return""!==t});i.$emit("chartChangedWidthDeleteGlobal",a)}else e&&"object"===(void 0===t?"undefined":(0,o.default)(t))&&i.$emit("chartChangedWidthDeleteGlobal",e);else i.$emit("chartChanged",e)},50)},addEmptyWidget:function(){var t=this.getEndGrid();this._addWidget({position:{width:12,height:6,top:t,left:0},data:{widgetType:"none"}})},onTypeSelected:function(t){var e=t.widgetID,i=t.type,a=this.getWidgetByID(e);if(a){var o=new d.WidgetData;o.init({widgetType:i,widgetLength:3}),this.$set(a,"data",o)}},setWatermark:function(){},refresh:function(){var t=this,e=void 0;0!==(e=this.$refs.widthOuter?this.$refs.widthOuter.clientWidth:0)&&(this.layout.width=e-this.layout.gutter,this.layout.gridSize=this.layout.width/this.layout.horizontalGridCount,this.widgetList.forEach(function(e){return e.refresh(t.layout)}),this._resetHeight())},handleWidgetMove:function(t,e){var i=this;this.activeWidget=e,this.shadowWidget.setPosition({width:e.position.width,height:e.position.height,top:e.position.top,left:e.position.left},this.layout),(0,h.default)(t,{move:function(t){var a=t.xOffset,o=t.yOffset,r=e.position,n=e.screenPosition,s=(i.layout.horizontalGridCount-r.width)*i.layout.gridSize,d=r.top*i.layout.gridSize+o,h=r.left*i.layout.gridSize+a;d=Math.max(0,d),h=Math.max(0,h),h=Math.min(s,h),i.shadowWidget.setPosition({top:Math.floor(d/i.layout.gridSize),left:Math.floor(h/i.layout.gridSize)},i.layout),n.top=d+"px",n.left=h+"px",i._previewWidgets()},end:function(){i._dragEnd()}})},handleWidgetResize:function(t,e){var i=this;this.activeWidget=e,this.shadowWidget.setPosition({width:e.position.width,height:e.position.height,top:e.position.top,left:e.position.left},this.layout),(0,h.default)(t,{move:function(t){var a=t.xOffset,o=t.yOffset,r=e.position,n=e.screenPosition,s=(i.layout.horizontalGridCount-r.left)*i.layout.gridSize-i.layout.gutter,d=r.width*i.layout.gridSize-i.layout.gutter+a,h=r.height*i.layout.gridSize-i.layout.gutter+o;d=Math.max(2*i.layout.gridSize-i.layout.gutter,d),d=Math.min(s,d),h=Math.max(2*i.layout.gridSize-i.layout.gutter,h),i.shadowWidget.setPosition({width:Math.ceil(d/i.layout.gridSize),height:Math.ceil(h/i.layout.gridSize)},i.layout),n.width=d+"px",n.height=h+"px",i._previewWidgets()},end:function(){i._dragEnd()}})},_dragEnd:function(t){var e=this;this.shadowWidget.applyOffset(),this.activeWidget.setPosition({width:this.shadowWidget.position.width,height:this.shadowWidget.position.height,top:this.shadowWidget.position.top,left:this.shadowWidget.position.left},this.layout),this.touchCeiling(this.widgetList),this.widgetList.forEach(function(t){return t.refresh(e.layout)}),this.widgetList.forEach(function(t){return t.applyOffset()}),this._resetHeight(),this.activeWidget=null},_previewWidgets:function(){var t=this;if(!(this.widgetList.length<2)){this.shadowWidget.setOffset(0);var e=this.widgetList.filter(function(e){return e.setOffset(0),e!==t.activeWidget}),i=e.concat(this.shadowWidget);this.touchCeiling(e);var a=e.filter(function(e){var i=t.shadowWidget.position,a=i.width,o=i.height,r=i.top,n=i.left,s=e.position;return function(t,e,i,a,o,r,n,s){return!(t>=o&&t>=o+n||t<=o&&t+i<=o||e>=r&&e>=r+s||e<=r&&e+a<=r)}(n,r,a,o,s.left,s.top+s.previewOffset,s.width,s.height)}),o=this.getDeepFollowing(a);(o=o.filter(function(e){return e!==t.activeWidget&&e!==t.shadowWidget})).forEach(function(t){return t.setOffset(100)}),this.touchCeiling(i),e.forEach(function(e){e.refresh(t.layout)})}},touchCeiling:function(t){var e=this;f(t),t.forEach(function(i){var a=e.findFollowedWidget(i,t),o=0;a&&(o=a.position.top+a.getOffset()+a.position.height),i.setOffset(o-i.position.top)})},findFollowedWidget:function(t,e){var i=t.position,a=i.width,o=i.top,r=i.left,n=i.previewOffset,s=e.filter(function(t){var e=t.position;return e.top+e.previewOffset<o+n&&g(r,a,e.left,e.width)});return s.length<=1?s[0]||null:(s.sort(function(t,e){return e.position.top+e.getOffset()+e.position.height-(t.position.top+t.getOffset()+t.position.height)}),s[0]||null)},findFollowingWidgets:function(t,e){var i=t.position,a=i.width,o=i.height,r=i.top,n=i.left,s=i.previewOffset,d=(e=void 0===e?this.widgetList:e).filter(function(t){var e=t.position;return!(e.top+e.previewOffset<r+s+o)&&g(n,a,e.left,e.width)});if(d.length<=1)return d;d.sort(function(t,e){return t.position.top+t.getOffset()-(e.position.top+e.getOffset())});for(var h=function(t){var e=d[t].position;d.slice(0,t).some(function(t){var i=t.position;return g(e.left,e.width,i.left,i.width)})&&d.splice(t,1)},c=d.length-1;0!==c;c--)h(c);return d},getDeepFollowing:function(t){var e=this,i=[].concat(t);return function t(a){a.forEach(function(a){var o=e.findFollowingWidgets(a);i=i.concat(o),t(o)})}(t),function(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}(i)},getEndGrid:function(){if(0===this.widgetList.length)return 0;var t=this.widgetList.map(function(t){return t.position.top+t.position.height});return Math.max.apply(Math,t)||0},_resetHeight:function(){this.layout.height=this.getEndGrid()*this.layout.gridSize+50},_addWidget:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.position,i=void 0===e?{}:e,a=t.data,o=void 0===a?{}:a,r=new d.WidgetData;r.setData(o);var n=new d.Widget({position:i,layout:this.layout,data:r});this.widgetList.push(n),this._resetHeight()},deleteWidget:function(t,e){confirm("确定删除此卡片？")&&this._deleteWidget(t,e)},_deleteWidget:function(t,e){for(var i=this,a=-1,o=0,r=this.widgetList.length;o<r;o++)if(this.widgetList[o].id===t){a=o;break}a>-1&&(this.widgetList.splice(a,1),this.touchCeiling(this.widgetList),f(this.widgetList),this.widgetList.forEach(function(t){t.applyOffset(),t.refresh(i.layout)}),this._resetHeight()),this._triggerChartChanged(-1,e)},mockNewWidget:function(){var t=this.getEndGrid();this.excelStore.setValue("layoutTemporary",[{position:{width:12,height:6,top:t,left:0},data:{id:l().replace(/-/gi,"_")}}])},_mockNewWidget:function(){this.excelStore.setValue("layoutTemporary",{chartId:"",modelId:"",title:"",chartType:""})},parse:function(){var t=this.widgetList.map(function(t){return u(t.parse())}),e=u(this.charts||[]);if(t&&t.length>0){var i=!0,o=!1,r=void 0;try{for(var n,s=(0,a.default)(t);!(i=(n=s.next()).done);i=!0){delete n.value.data.model}}catch(t){o=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}}if(e&&e.length>0){var d=!0,h=!1,c=void 0;try{for(var l,f=(0,a.default)(e);!(d=(l=f.next()).done);d=!0){delete l.value.model}}catch(t){h=!0,c=t}finally{try{!d&&f.return&&f.return()}finally{if(h)throw c}}}return{widgets:t,charts:e,version:"1.0"}},refreshFilter:function(){this.$parent&&this.$parent.$refs.globalFilterForm&&(this.globalStyleSheet={top:this.$parent.$refs.globalFilterForm.clientHeight+"px",height:"calc(100% - "+this.$parent.$refs.globalFilterForm.clientHeight+"px)"})}},watch:{widgets:{handler:function(t){var e=this,i=JSON.parse(t);this.widgetList=[],i.forEach(function(t){e._addWidget(t)}),this._triggerChartChanged(!0)},immediate:!0},filters:{handler:function(t){var e=this;this.$nextTick(function(){t&&t.length&&e.showFilter?(e.globalStyleSheet={top:e.$parent.$refs.globalFilterForm.clientHeight+"px",height:"calc(100% - "+e.$parent.$refs.globalFilterForm.clientHeight+"px)"},e.timeInterval=setInterval(function(){e.count>5&&clearInterval(e.timeInterval),e.count++,t&&t.length&&e.showFilter?e.$parent&&e.$parent.$refs.globalFilterForm&&(e.globalStyleSheet={top:e.$parent.$refs.globalFilterForm.clientHeight+"px",height:"calc(100% - "+e.$parent.$refs.globalFilterForm.clientHeight+"px)"}):e.globalStyleSheet={}},500)):e.globalStyleSheet={}})},deep:!0,immediate:!0}}}},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"widgetTypeSelector",props:{widgetID:{}},data:function(){return{typeList:[{name:"pure-chart",title:"单图表"},{name:"row-charts",title:"横排图表"},{name:"column-charts",title:"竖排图表"},{name:"tab-charts",title:"tab图表"}],selectedtype:""}},mounted:function(){this.selectedtype=this.typeList[0].name},beforeDestroy:function(){},methods:{selectWidgetType:function(){this.$emit("typeSelected",{widgetID:this.widgetID,type:this.selectedtype})}}}},21:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"widget-chart-for-drag",props:{widgetID:{},chartIndex:{}},data:function(){return{isDragEnter:!1}},methods:{handleChartEnter:function(t){this.isDragEnter=!0},handleChartLeave:function(t){this.isDragEnter=!1},handleChartDragover:function(t){this.isDragEnter=!1;var e=t.dataTransfer.getData("chart"),i=JSON.parse(e).id;this.$emit("chartInsert",{widgetID:this.widgetID,chartIndex:this.chartIndex,chartUUID:i})}}}},36:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"widget-type-select-area"},[i("div",{staticClass:"list"},t._l(t.typeList,function(e){return i("div",{key:e.name,class:["item",e.name===t.selectedtype?"active":""],on:{click:function(i){t.selectedtype=e.name}}},[i("div",{staticClass:"cover"},[t._v("示例图")]),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),t._v(" "),i("div",{staticClass:"button-area"},[i("a",{staticClass:"button",attrs:{href:"javascript:void(0)"},on:{click:t.selectWidgetType}},[t._v("选择布局")])])])},o=[]},37:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["chart-item-drag-area",this.isDragEnter?"drag-over":""],on:{drop:this.handleChartDragover,dragenter:this.handleChartEnter,dragleave:this.handleChartLeave,dragover:function(t){t.stopPropagation(),t.preventDefault()}}},[this._v("\n  拖拽图表到此处\n")])},o=[]},38:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dash-wrapper"},[i("div",{ref:"scrollOuter",staticClass:"report-page-outer"},[i("div",{ref:"widthOuter",staticClass:"report-container"},[i("div",{staticClass:"report-page",style:{height:t.layout.height+"px","margin-left":t.layout.gutter+"px"}},[t.activeWidget?i("div",{staticClass:"widget-drag-preview",style:t.shadowWidget.screenPosition}):t._e(),t._v(" "),t._l(t.widgetList,function(e){return t.widgetList.length?i("div",{key:e.id,staticClass:"widget",class:[e===t.activeWidget?"active":""],style:e.screenPosition},["none"!==e.data.widgetType?i("div",{staticClass:"widget-title"},[t._v(t._s(e.data.title))]):t._e(),t._v(" "),i("div",{staticClass:"widget-move",attrs:{draggable:""},on:{mousedown:function(i){t.handleWidgetMove(i,e)}}}),t._v(" "),i("div",{staticClass:"widget-inner"},["none"===e.data.widgetType?i("widgetTypeSelector",{attrs:{widgetID:e.id},on:{typeSelected:t.onTypeSelected}}):i("div",{class:["chart-group","chart-group-"+e.data.widgetType,e.data.description?"chart-group-with-desc":""]},["tab-charts"===e.data.widgetType?i("div",{staticClass:"chart-tab"},t._l(e.data.chartTitleList,function(a,o){return i("div",{key:o,class:["chart-tab-item",e.data.activeTabIndex===o?"active":""],on:{click:function(t){e.data.activeTabIndex=o}}},[t._v("\n                "+t._s(a)+"\n                ")])})):t._e(),t._v(" "),t._l(e.data.chartList,function(a,o){return e.data.chartList.length?i("div",{key:o,class:["chart-group-item",e.data.activeTabIndex===o?"active":""]},[a&&a.length?i("div",{staticClass:"chart-item"},[t._t("widget",null,{widgetID:e.id,chart:t.getChartByID(e.data.chartList[o]),position:e.position,screenPosition:e.screenPosition}),t._v(" "),i("div",{staticClass:"chart-tools"},[t._t("tools-bar",null,{widgetID:e.id,chart:t.getChartByID(e.data.chartList[o])})],2)],2):i("widgetChartForDrag",{attrs:{widgetID:e.id,chartIndex:o},on:{chartInsert:t.chartInsertToWidget}})],1):t._e()})],2),t._v(" "),e.data.description?i("div",{staticClass:"widget-desc"},[t._v("\n              "+t._s(e.data.description)+"\n            ")]):t._e()],1),t._v(" "),i("div",{staticClass:"widget-resize",attrs:{draggable:""},on:{mousedown:function(i){t.handleWidgetResize(i,e)}}}),t._v(" "),"none"!==e.data.widgetType?i("div",{staticClass:"widget-tools"},[i("a",{staticClass:"delete",attrs:{title:"删除",href:"javascript:void(0)"},on:{click:function(i){t.deleteWidget(e.id,e)}}},[t._v("\n              删除\n            ")])]):t._e()]):t._e()})],2)]),t._v(" "),i("div",{staticClass:"report-add-widget"},[i("a",{staticClass:"button",attrs:{type:"primary"},on:{click:t.addEmptyWidget}},[t._v("增加卡片")])])])])},o=[]},39:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer"},[i("div",{staticClass:"toolBar"},[i("div",{staticClass:"container"},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:t.save}},[t._v("保存")])])]),t._v(" "),i("div",{staticClass:"pager"},[i("dashLayoutEditor",{ref:"editor",attrs:{widgets:JSON.stringify(t.layout.widgets),charts:t.layout.charts},on:{"update:charts":function(e){t.$set(t.layout,"charts",e)}},scopedSlots:t._u([{key:"widget",fn:function(t){}}])})],1)])},o=[]},50:function(t,e,i){"use strict";var a=r(i(51)),o=r(i(55));function r(t){return t&&t.__esModule?t:{default:t}}new a.default({el:"#app",render:function(t){return t(o.default)}});var n=document.querySelector(".loading-layer");n.classList.add("hidden"),setTimeout(function(){n.parentNode.removeChild(n)},600)},55:function(t,e,i){"use strict";i.r(e);var a=i(18),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(39),s=i(3);var d=function(t){i(56)},h=Object(s.a)(o.a,n.a,n.b,!1,d,null,null);e.default=h.exports},56:function(t,e,i){var a=i(57);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(17).default)("443d4e0d",a,!0,{})},57:function(t,e,i){(t.exports=i(11)(!1)).push([t.i,"body,html{position:relative;background:#eee;overflow:hidden}*{margin:0;padding:0}.outer{height:100vh;top:0;left:0}.outer,.toolBar{position:relative}.toolBar{height:40px;background:#fff}.toolBar a{line-height:40px;text-decoration:none;font-size:14px;color:#aaa}.toolBar a:hover{text-decoration:underline}.pager{position:relative;width:960px;height:calc(100% - 40px);margin:0 auto}a.button{display:inline-block;width:100px;height:40px;background:#fafaff;border:1px solid #ccc;border-radius:4px;line-height:40px;font-size:14px;text-align:center;text-decoration:none;color:#333}a.button:hover{background:#ccc}.container{width:940px;margin:0 auto}",""])},58:function(t,e,i){"use strict";i.r(e);var a=i(19),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(38),s=i(3);var d=function(t){i(59)},h=Object(s.a)(o.a,n.a,n.b,!1,d,"data-v-550aa83e",null);e.default=h.exports},59:function(t,e,i){var a=i(60);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(17).default)("743aec48",a,!0,{})},60:function(t,e,i){(t.exports=i(11)(!1)).push([t.i,'[data-v-550aa83e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dash-wrapper[data-v-550aa83e]{position:absolute;top:0;right:0;bottom:0;left:0}.report-container[data-v-550aa83e]{margin:0 5px 10px}.report-page-outer[data-v-550aa83e]{position:absolute;width:100%;height:100%;top:10px;left:0;overflow:auto}.report-page-outer[data-v-550aa83e]::-webkit-scrollbar{display:none}.report-page[data-v-550aa83e]{position:relative;padding:10px 0}.widget-drag-preview[data-v-550aa83e]{position:absolute;background:#d5dadd;transition:.3s}.widget[data-v-550aa83e]{position:absolute;background:#fff;transition:box-shadow .3s ease-in-out;color:#888}.widget .widget-move[data-v-550aa83e]{position:relative;height:100%;cursor:move}.widget .widget-resize[data-v-550aa83e]{position:absolute;right:0;bottom:0;width:30px;height:30px;line-height:30px;text-align:center;cursor:se-resize}.widget .widget-resize[data-v-550aa83e]:before{content:"";display:inline-block;width:0;height:0;border-width:0 0 10px 10px;border-style:solid;border-color:transparent transparent #c2ced6}.widget .widget-inner[data-v-550aa83e]{position:absolute;top:35px;left:20px;width:calc(100% - 50px);height:calc(100% - 50px)}.widget .widget-title[data-v-550aa83e]{position:absolute;top:10px;left:15px;line-height:20px;font-size:15px;font-weight:700;color:#33424d}.widget .widget-desc[data-v-550aa83e]{padding-left:5px;padding-right:5px;margin-top:10px;overflow:auto;line-height:1.5;font-size:13px;color:#40535f}.widget .widget-tools[data-v-550aa83e]{position:absolute;top:0;right:10px}.widget .widget-tools a[data-v-550aa83e]{display:inline-block;width:30px;height:40px;text-align:center;line-height:40px;color:#7e8c8d;font-size:12px}.widget .widget-tools a[data-v-550aa83e]:hover{color:#1994e6}.widget .widget-resize[data-v-550aa83e],.widget .widget-tools[data-v-550aa83e]{opacity:0;transition:.3s ease-in-out}.widget.active[data-v-550aa83e],.widget[data-v-550aa83e]:hover{z-index:1;box-shadow:0 2px 4px 0 rgba(0,0,0,.1),0 16px 24px 0 rgba(170,182,206,.36)}.widget.active .widget-resize[data-v-550aa83e],.widget.active .widget-tools[data-v-550aa83e],.widget:hover .widget-resize[data-v-550aa83e],.widget:hover .widget-tools[data-v-550aa83e]{opacity:1}.widget.active[data-v-550aa83e]{transition:none}.chart-group[data-v-550aa83e]{position:relative;height:100%}.chart-group.chart-group-with-desc[data-v-550aa83e]{height:calc(100% - 50px)}.chart-group-pure-chart .chart-group-item[data-v-550aa83e]{position:relative;height:100%}.chart-group-row-charts[data-v-550aa83e]{display:-ms-flexbox;display:flex}.chart-group-row-charts .chart-group-item[data-v-550aa83e]{position:relative;height:100%;-ms-flex:1 1 0px;flex:1 1 0}.chart-group-column-charts[data-v-550aa83e]{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.chart-group-column-charts .chart-group-item[data-v-550aa83e]{position:relative;-ms-flex:1 1 0px;flex:1 1 0}.chart-group-tab-charts[data-v-550aa83e]{overflow:hidden}.chart-group-tab-charts .chart-tab[data-v-550aa83e]{height:30px;border-bottom:1px solid #e2edf8}.chart-group-tab-charts .chart-tab .chart-tab-item[data-v-550aa83e]{float:left;height:28px;padding:0 10px;line-height:28px;font-size:14px;cursor:pointer}.chart-group-tab-charts .chart-tab .chart-tab-item.active[data-v-550aa83e]{border-bottom:2px solid #1fa1e5;color:#336f99}.chart-group-tab-charts .chart-group-item[data-v-550aa83e]{position:absolute;width:100%;height:calc(100% - 30px);top:30px;left:100%;transition:.2s}.chart-group-tab-charts .chart-group-item.active[data-v-550aa83e]{left:0}.chart-item[data-v-550aa83e]{position:relative;top:40px;height:calc(100% - 45px);margin:0}.chart-item .chart-tools[data-v-550aa83e]{position:absolute;top:-40px;right:0;z-index:2;background:#fafafa;opacity:0}.chart-item:hover .chart-tools[data-v-550aa83e]{opacity:1}.report-add-widget[data-v-550aa83e]{padding-bottom:160px;text-align:center}',""])},97:function(t,e,i){"use strict";i.r(e);var a=i(20),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(36),s=i(3);var d=function(t){i(98)},h=Object(s.a)(o.a,n.a,n.b,!1,d,"data-v-4546216c",null);e.default=h.exports},98:function(t,e,i){var a=i(99);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(17).default)("559ce6f2",a,!0,{})},99:function(t,e,i){(t.exports=i(11)(!1)).push([t.i,".widget-type-select-area[data-v-4546216c]{position:relative;height:100%;text-align:center;overflow:auto}.list[data-v-4546216c]{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-flow:wrap;flex-flow:wrap;width:80%;max-width:500px;margin:40px auto}.item[data-v-4546216c]{position:relative;width:80px;height:100px;border:1px solid #ccc;border-radius:4px;overflow:hidden;text-align:center;background:#fff;transition:.2s;transform-origin:50% 80%;cursor:pointer}.item .cover[data-v-4546216c]{height:60px;line-height:60px;background:#f6f6f6;font-size:12px;color:#ccc}.item .title[data-v-4546216c]{line-height:40px;font-size:12px;color:#333}.item.active[data-v-4546216c]{border-color:#46a0df;transform:scale(1.2);z-index:2}.button-area[data-v-4546216c]{margin:0 0 20px}",""])}},[[50,2,0]]]);
//# sourceMappingURL=1.js.map?7902a7c619d8b395cd33