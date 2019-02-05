import{h}from"../wv-pb-manager.core.js";import{d as _,D as setActiveNode,C as hoverNode}from"./chunk-3437f53a.js";function GetRootNodes(e){var t=new Array;return _.forEach(e,function(e){e.parent_id||t.push(e)}),_.sortBy(t,["weight"])}var WvPbNodeContainer=function(){function e(){this.pageNodeChangeIndex=1}return e.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,function(e){return{pageNodeChangeIndex:e.pageNodeChangeIndex}})},e.prototype.render=function(){var e=GetRootNodes(this.store.getState().pageNodes);return[h("div",{class:"header"},h("div",{class:"title"},"Page Body")),h("div",{class:"body"},e.map(function(e){return h("wv-pb-tree-node",{key:e.id,level:0,node:e})}))]},Object.defineProperty(e,"is",{get:function(){return"wv-pb-tree"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{pageNodeChangeIndex:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),e}();function GetChildNodes(e){var t=new Array,o=e.store.getState().pageNodes,n=e.node.id;return _.forEach(o,function(e){n&&e.parent_id&&n.toLowerCase()===e.parent_id.toLowerCase()&&n.toLowerCase()!==e.id.toLowerCase()&&t.push(e)}),_.sortBy(t,["weight"])}function GetMeta(e){var t=e.store.getState().library,o=_.findIndex(t,function(t){return t.name===e.node.component_name});return o>-1?t[o]:null}var WvPbTreeNode=function(){function e(){this.level=0,this.activeNodeId=null,this.hoveredNodeId=null,this.pageNodeChangeIndex=1}return e.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,function(e){return{activeNodeId:e.activeNodeId,hoveredNodeId:e.hoveredNodeId,pageNodeChangeIndex:e.pageNodeChangeIndex}}),this.store.mapDispatchToProps(this,{setActiveNode:setActiveNode,hoverNode:hoverNode})},e.prototype.nodeClickHandler=function(e){e.preventDefault(),e.stopPropagation(),this.setActiveNode(this.node.id)},e.prototype.hoverNodeHandler=function(e){e.preventDefault(),e.stopPropagation(),this.hoverNode(this.node.id)},e.prototype.unhoverNodeHandler=function(e){e.preventDefault(),e.stopPropagation(),this.hoverNode(null)},e.prototype.render=function(){var e=this,t=GetMeta(e),o=GetChildNodes(e),n="ti-file";t.icon_class&&(n=t.icon_class);var r="";e.activeNodeId&&e.activeNodeId===e.node.id&&(r=" selected");var d="";e.hoveredNodeId&&e.hoveredNodeId===e.node.id&&(d=" hovered");var a="15px";0===e.level&&(a="0px");var i=new Array;return _.forEach(o,function(e){var t=e.container_id;-1===_.findIndex(i,function(e){return e===t})&&i.push(t)}),i=_.sortBy(i),h("div",{class:"tree-node level-"+e.level+r+d,style:{paddingLeft:a},onClick:function(t){return e.nodeClickHandler(t)}},h("div",{class:"header",onMouseEnter:function(t){return e.hoverNodeHandler(t)},onMouseLeave:function(t){return e.unhoverNodeHandler(t)}},h("span",{class:"icon "+n}),h("span",{class:"name"},t.label)),i.length<2?h("div",null,o.map(function(t){return h("wv-pb-tree-node",{key:t.id,node:t,level:e.level+1})})):i.map(function(t){return h("div",{key:t.id},h("div",{style:{paddingLeft:"15px"},class:"go-teal"},t),o.map(function(o){return o.container_id===t?h("wv-pb-tree-node",{key:o.id,node:o,level:e.level+1}):null}))}))},Object.defineProperty(e,"is",{get:function(){return"wv-pb-tree-node"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeNodeId:{state:!0},hoveredNodeId:{state:!0},level:{type:Number,attr:"level"},node:{type:"Any",attr:"node"},pageNodeChangeIndex:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),e}();export{WvPbNodeContainer as WvPbTree,WvPbTreeNode};