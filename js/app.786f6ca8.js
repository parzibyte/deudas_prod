(function(e){function t(t){for(var a,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("d3b7");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{type:"is-warning"},scopedSlots:e._u([{key:"brand",fn:function(){return[r("b-navbar-item",[e._v("Deudas")])]},proxy:!0},{key:"start",fn:function(){return[r("b-navbar-item",{directives:[{name:"show",rawName:"v-show",value:e.usuarioAutenticado.nombre,expression:"usuarioAutenticado.nombre"}],attrs:{tag:"router-link",to:{name:"Usuarios"}}},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"account-supervisor"}}),e._v("Usuarios ")],1),r("b-navbar-item",{directives:[{name:"show",rawName:"v-show",value:e.usuarioAutenticado.nombre,expression:"usuarioAutenticado.nombre"}],attrs:{tag:"router-link",to:{name:"ListaDeDeudas"}}},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"currency-usd"}}),e._v("Deudas ")],1),r("b-navbar-item",{directives:[{name:"show",rawName:"v-show",value:e.usuarioAutenticado.nombre,expression:"usuarioAutenticado.nombre"}],attrs:{tag:"router-link",to:{name:"AcercaDe"}}},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"information"}}),e._v("Acerca de ")],1)]},proxy:!0},{key:"end",fn:function(){return[r("a",{directives:[{name:"show",rawName:"v-show",value:e.usuarioAutenticado.nombre,expression:"usuarioAutenticado.nombre"}],staticClass:"navbar-item",on:{click:function(t){return e.cerrarSesion()}}},[e._v(" Hola  "),r("strong",[e._v(e._s(e.usuarioAutenticado.nombre))]),e._v(". ¿Cerrar sesión? ")])]},proxy:!0}])}),r("section",{staticClass:"section"},[r("router-view")],1),r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("strong",[e._v("Control de deudas ")]),r("b-icon",{attrs:{icon:"code-tags"}}),e._v(" con "),r("b-icon",{attrs:{icon:"heart",type:"is-danger"}}),e._v(" por "),r("a",{attrs:{href:"https://parzibyte.me/blog"}},[e._v("Parzibyte")])],1)])])],1)},o=[],i=r("1da1"),s=(r("96cf"),r("e9c4"),r("25f0"),r("260b")),u=r("66ce"),c=r("e71f"),d=r("aced"),l=!1,f="usuario_autenticado",b={guardarUsuarioAutenticado:function(e){localStorage.setItem(f,JSON.stringify(e))},obtenerUsuarioAutenticado:function(){return JSON.parse(localStorage.getItem(f))},obtener:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t={apiKey:"AIzaSyB5BU8Hg-pQnLrz1sp5M-NH6s8k-dVBCYY",authDomain:"deudas-8d629.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyB5BU8Hg-pQnLrz1sp5M-NH6s8k-dVBCYY",VUE_APP_FIREBASE_APP_ID:"1:969590407940:web:ce8291cad999008905c651",VUE_APP_FIREBASE_AUTH_DOMAIN:"deudas-8d629.firebaseapp.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"969590407940",VUE_APP_FIREBASE_PROJECT_ID:"deudas-8d629",VUE_APP_FIREBASE_STORAGE_BUCKET:"deudas-8d629.appspot.com",BASE_URL:"./"}).VUE_APP_FIREBASE_DATABASE_URL,projectId:"deudas-8d629",storageBucket:"deudas-8d629.appspot.com",messagingSenderId:"969590407940",appId:"1:969590407940:web:ce8291cad999008905c651"},r=Object(s["a"])(t),a=Object(c["h"])(r),!l){e.next=5;break}return e.abrupt("return",a);case 5:return e.prev=5,e.next=8,Object(c["e"])(a);case 8:d["a"].open({message:"Modo fuera de línea habilitado correctamente",type:"is-success"}),l=!0,e.next=19;break;case 12:e.prev=12,e.t0=e["catch"](5),console.log({err:e.t0}),n="","failed-precondition"==e.t0.code?n="Error: recuerda no tener varias pestañas abiertas con la app":"unimplemented"==e.t0.code&&(n="Error: el navegador que usas no soporta el modo fuera de línea. Cambia de navegador"),n+=" "+e.t0.toString(),d["a"].open({message:n,type:"is-danger"});case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[5,12]])})));function t(){return e.apply(this,arguments)}return t}(),obtenerColeccionUsuarios:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=c["b"],e.next=3,b.obtener();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"usuarios"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),obtenerUsuarios:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=c["g"],e.next=3,b.obtenerColeccionUsuarios();case 3:return e.t1=e.sent,e.next=6,(0,e.t0)(e.t1);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()},obtenerColeccionDeudas:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=c["b"],e.next=3,b.obtener();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"deudas"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),obtenerReferenciaListaUsuarios:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=u["a"],e.next=3,b.obtener();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"usuarios"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),obtenerReferenciaListaDeudas:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=u["a"],e.next=3,b.obtener();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"deudas"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},p=b,m=new a["a"]({}),v={data:function(){return{usuarioAutenticado:{}}},methods:{cerrarSesion:function(){p.guardarUsuarioAutenticado(null),this.usuarioAutenticado={},this.$router.push({name:"Login"})}},beforeMount:function(){var e=this;m.$on("usuarioAutenticado",(function(t){e.usuarioAutenticado=t}));var t=p.obtenerUsuarioAutenticado();t&&(this.usuarioAutenticado=t)}},h=v,g=r("2877"),_=Object(g["a"])(h,n,o,!1,null,null,null),w=_.exports,y=r("289d"),x=(r("5abe"),r("5363"),r("b0c0"),r("8c4f")),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-button",{staticClass:"is-success mb-5",attrs:{loading:e.cargando,"icon-right":"plus"},on:{click:function(t){return e.agregarUsuario()}}},[e._v("Nuevo")]),r("b-table",{attrs:{data:e.usuarios,loading:e.cargando,"mobile-cards":!0,hoverable:""},scopedSlots:e._u([{key:"empty",fn:function(){return[r("div",{staticClass:"has-text-centered"},[e._v("No hay registros")])]},proxy:!0}])},[r("b-table-column",{attrs:{searchable:"",field:"nombre",label:"Nombre",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.nombre)+" ")]}}])}),r("b-table-column",{attrs:{field:"id",label:"Opciones"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-button",{staticClass:"mb-1",attrs:{type:"is-warning"},on:{click:function(r){return e.editar(t.row)}}},[r("b-icon",{attrs:{icon:"pencil"}})],1),e._v("   "),r("b-button",{staticClass:"mb-1",attrs:{type:"is-danger"},on:{click:function(r){return e.eliminar(t.row,t.index)}}},[r("b-icon",{attrs:{icon:"delete"}})],1)]}}])})],1)],1)])},S=[],O=(r("159b"),r("a434"),{data:function(){return{cargando:!1,usuarios:[],coleccionUsuarios:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.obtenerColeccionUsuarios();case 2:return e.coleccionUsuarios=t.sent,e.cargando=!0,t.next=6,p.obtenerUsuarios();case 6:r=t.sent,e.usuarios=[],r.forEach((function(t){e.usuarios.push({id:t.id,nombre:t.data().nombre})})),e.cargando=!1;case 10:case"end":return t.stop()}}),t)})))()},methods:{agregarUsuario:function(){this.$router.push({name:"AgregarUsuario"})},editar:function(e){this.$router.push({name:"EditarUsuario",params:{id:e.id}})},eliminar:function(e,t){var r=this;this.$buefy.dialog.confirm({message:"¿Eliminar usuario <strong>".concat(e.nombre,"</strong>?"),cancelText:"Cancelar",confirmText:"Sí, eliminar",onConfirm:function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.cargando=!0,a.t0=c["c"],a.t1=c["d"],a.next=5,p.obtener();case 5:return a.t2=a.sent,a.t3=e.id,a.t4=(0,a.t1)(a.t2,"usuarios",a.t3),a.next=10,(0,a.t0)(a.t4);case 10:r.cargando=!1,r.usuarios.splice(t,1);case 12:case"end":return a.stop()}}),a)})));function n(){return a.apply(this,arguments)}return n}()})}}}),U=O,k=Object(g["a"])(U,D,S,!1,null,null,null),A=k.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("h3",{staticClass:"is-size-3"},[e._v("Agregar usuario")]),r("b-field",{attrs:{label:"Nombre"}},[r("b-input",{attrs:{placeholder:"Escribe el nombre",type:"text"},model:{value:e.nombreUsuario,callback:function(t){e.nombreUsuario=t},expression:"nombreUsuario"}})],1),r("b-field",{attrs:{label:"Contraseña"}},[r("b-input",{attrs:{placeholder:"Escribe tu contraseña",type:"password"},model:{value:e.palabraSecreta,callback:function(t){e.palabraSecreta=t},expression:"palabraSecreta"}})],1),r("b-field",{attrs:{label:"Vuelve a escribir tu contraseña"}},[r("b-input",{attrs:{placeholder:"Confirma tu contraseña",type:"password"},model:{value:e.confirmacionPalabraSecreta,callback:function(t){e.confirmacionPalabraSecreta=t},expression:"confirmacionPalabraSecreta"}})],1),r("b-button",{staticClass:"is-info",attrs:{loading:e.cargando,"icon-left":"arrow-left"},on:{click:function(t){return e.volver()}}},[e._v("Volver")]),e._v("   "),r("b-button",{attrs:{loading:e.cargando,type:"is-success"},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)])},E=[],j=r("279c"),R={data:function(){return{referenciaColeccionUsuarios:null,nombreUsuario:"",palabraSecreta:"",confirmacionPalabraSecreta:"",cargando:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.obtenerColeccionUsuarios();case 2:e.referenciaColeccionUsuarios=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{volver:function(){this.$router.push({name:"Usuarios"})},guardar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.nombreUsuario&&e.palabraSecreta&&e.confirmacionPalabraSecreta){t.next=2;break}return t.abrupt("return");case 2:if(e.palabraSecreta===e.confirmacionPalabraSecreta){t.next=5;break}return e.$buefy.toast.open("Las contraseñas no coinciden"),t.abrupt("return");case 5:return e.cargando=!0,t.next=8,j.hash(e.palabraSecreta,10);case 8:r=t.sent,Object(c["a"])(e.referenciaColeccionUsuarios,{nombre:e.nombreUsuario,palabraSecreta:r}),e.cargando=!1,e.nombreUsuario="",e.palabraSecreta="",e.confirmacionPalabraSecreta="",e.$buefy.toast.open("Guardado");case 15:case"end":return t.stop()}}),t)})))()}}},P=R,I=Object(g["a"])(P,C,E,!1,null,null,null),$=I.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("h3",{staticClass:"is-size-3"},[e._v("Editar usuario")]),r("b-field",{attrs:{label:"Nombre"}},[r("b-input",{attrs:{loading:e.cargando,type:"text"},model:{value:e.nombreUsuario,callback:function(t){e.nombreUsuario=t},expression:"nombreUsuario"}})],1),r("b-button",{staticClass:"is-info",attrs:{loading:e.cargando,"icon-left":"arrow-left"},on:{click:function(t){return e.volver()}}},[e._v("Volver")]),e._v("   "),r("b-button",{attrs:{loading:e.cargando,type:"is-success"},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)])},T=[],N={data:function(){return{cargando:!1,nombreUsuario:"",id:null,bd:null}},methods:{volver:function(){this.$router.push({name:"Usuarios"})},guardar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["m"])(Object(c["d"])(e.bd,"usuarios",e.id),{nombre:e.nombreUsuario}),e.volver();case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,r=e.$route.params.id,e.id=r,t.next=5,p.obtener();case 5:return e.bd=t.sent,t.next=8,Object(c["f"])(Object(c["d"])(e.bd,"usuarios",r));case 8:a=t.sent,a.exists()?e.nombreUsuario=a.data().nombre:e.$buefy.toast.open("Error recuperando valor. Tal vez no se ha sincronizado la base de datos"),e.cargando=!1;case 11:case"end":return t.stop()}}),t)})))()}},B=N,z=Object(g["a"])(B,L,T,!1,null,null,null),F=z.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("h3",{staticClass:"is-size-3"},[e._v("Agregar deuda")]),r("b-field",{attrs:{message:"La persona que hizo la compra, a la que le van a pagar",label:"Acreedor"}},[r("b-select",{attrs:{loading:e.cargando,placeholder:"Seleccione un usuario"},model:{value:e.acreedor,callback:function(t){e.acreedor=t},expression:"acreedor"}},e._l(e.usuarios,(function(t){return r("option",{key:t.id,attrs:{disabled:e.usuarioAutenticado.id!==t.id},domProps:{value:t}},[e._v(" "+e._s(t.nombre)+" ")])})),0)],1),r("b-field",{attrs:{label:"Descripción"}},[r("b-input",{attrs:{loading:e.cargando,placeholder:"Escribe la descripción"},model:{value:e.descripcion,callback:function(t){e.descripcion=t},expression:"descripcion"}})],1),r("b-field",{attrs:{label:"Monto"}},[r("b-input",{attrs:{loading:e.cargando,type:"number",step:"0.1",placeholder:"Escribe el monto"},model:{value:e.monto,callback:function(t){e.monto=e._n(t)},expression:"monto"}})],1),r("b-field",{attrs:{label:"Deudores (los que pagarán la deuda)"}},e._l(e.deudores,(function(t){return r("b-checkbox",{key:t.id,attrs:{loading:e.cargando,disabled:e.deberiaDeshabilitarUsuario()},model:{value:t.seleccionado,callback:function(r){e.$set(t,"seleccionado",r)},expression:"deudor.seleccionado"}},[e._v(" "+e._s(t.nombre)+" ")])})),1),r("b-button",{staticClass:"is-info",attrs:{loading:e.cargando,"icon-left":"arrow-left"},on:{click:function(t){return e.volver()}}},[e._v("Volver")]),e._v("   "),r("b-button",{attrs:{disabled:e.deberiaDeshabilitarBotonGuardar(),loading:e.cargando,type:"is-success"},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)])},V=[],q=r("b85c"),G=(r("d81d"),{data:function(){return{acreedor:null,descripcion:"",monto:null,usuarios:[],deudores:[],cargando:!1,referenciaListaDeudas:null,coleccionDeudas:null,usuarioAutenticado:{}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.usuarioAutenticado=p.obtenerUsuarioAutenticado(),t.next=3,p.obtenerColeccionDeudas();case 3:e.coleccionDeudas=t.sent,e.obtenerUsuarios();case 5:case"end":return t.stop()}}),t)})))()},methods:{volver:function(){this.$router.push({name:"ListaDeDeudas"})},guardar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.acreedor){t.next=2;break}return t.abrupt("return");case 2:r={eliminada:!1,acreedor:e.acreedor.id,idDeudores:e.deudores.filter((function(e){return e.seleccionado})).map((function(e){return e.id})),deudores:e.deudores.filter((function(e){return e.seleccionado})).map((function(e){return{id:e.id,pagado:!1}})),monto:e.monto,descripcion:e.descripcion,fecha:(new Date).getTime()},e.cargando=!0,Object(c["a"])(e.coleccionDeudas,r),e.$buefy.toast.open("Guardada"),e.cargando=!1,e.descripcion="",e.monto=null,e.acreedor=null,a=Object(q["a"])(e.deudores);try{for(a.s();!(n=a.n()).done;)o=n.value,o.seleccionado=!1}catch(i){a.e(i)}finally{a.f()}case 12:case"end":return t.stop()}}),t)})))()},deberiaDeshabilitarBotonGuardar:function(){return!(this.acreedor&&this.monto&&this.descripcion)||!!this.deudores.every((function(e){return!e.seleccionado}))},deberiaDeshabilitarUsuario:function(){return!this.acreedor},obtenerUsuarios:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,t.next=3,p.obtenerUsuarios();case 3:r=t.sent,e.usuarios=[],e.deudores=[],r.forEach((function(t){var r={id:t.id,nombre:t.data().nombre};e.usuarios.push(r),e.deudores.push(r)})),e.cargando=!1;case 8:case"end":return t.stop()}}),t)})))()}}}),H=G,J=Object(g["a"])(H,M,V,!1,null,null,null),Y=J.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-button",{staticClass:"is-success mb-5",attrs:{loading:e.cargando,"icon-right":"plus"},on:{click:function(t){return e.agregarDeuda()}}},[e._v("Nueva")]),r("b-field",{attrs:{label:"Mostrar deudas donde el acreedor sea"}},[r("b-select",{attrs:{placeholder:"Selecciona un usuario"},nativeOn:{change:function(t){return e.obtenerDeudasSegunFiltros()}},model:{value:e.filtroDeudasAcreedor,callback:function(t){e.filtroDeudasAcreedor=t},expression:"filtroDeudasAcreedor"}},e._l(e.usuarios,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.nombre)+" ")])})),0)],1),r("b-field",{attrs:{label:"Mostrar deudas donde el deudor sea"}},[r("b-select",{attrs:{placeholder:"Selecciona un usuario"},nativeOn:{change:function(t){return e.obtenerDeudasSegunFiltros()}},model:{value:e.filtroDeudasDeudor,callback:function(t){e.filtroDeudasDeudor=t},expression:"filtroDeudasDeudor"}},e._l(e.usuarios,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.nombre)+" ")])})),0)],1),r("b-field",{attrs:{label:"Estado de liquidación"}},[r("b-select",{attrs:{placeholder:"Selecciona una opción"},nativeOn:{change:function(t){return e.obtenerDeudasSegunFiltros()}},model:{value:e.filtroEliminadas,callback:function(t){e.filtroEliminadas=t},expression:"filtroEliminadas"}},e._l(e.filtrosEliminadas,(function(t){return r("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1),r("hr"),r("table",{staticClass:"table is-bordered"},[e._m(0),r("tbody",e._l(e.desglose(),(function(t){return r("tr",{key:t.deudor.id},[r("td",[r("strong",[e._v(" "+e._s(e.detallesDeUsuario(t.deudor.id).nombre))])]),r("td",{staticClass:"has-text-right"},[e._v(e._s(e._f("dinero")(t.monto)))])])})),0),r("tfoot",[r("tr",[e._m(1),r("td",{staticClass:"has-text-right"},[e._v(e._s(e._f("dinero")(e.totalDeuda())))])])])]),r("b-table",{attrs:{data:e.deudas,loading:e.cargando,"mobile-cards":!0,hoverable:""},scopedSlots:e._u([{key:"empty",fn:function(){return[r("div",{staticClass:"has-text-centered"},[e._v("No hay registros")])]},proxy:!0}])},[r("b-table-column",{attrs:{field:"acreedor",label:"Acreedor"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.detallesDeUsuario(t.row.acreedor).nombre)+" ")]}}])}),r("b-table-column",{attrs:{field:"fecha",label:"Fecha"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("fecha")(t.row.fecha))+" ")]}}])}),r("b-table-column",{attrs:{field:"descripcion",label:"Descripción"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.descripcion)+" ")]}}])}),r("b-table-column",{attrs:{field:"monto",label:"Monto"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dinero")(t.row.monto))+" ")]}}])}),r("b-table-column",{attrs:{field:"deudores",label:"Deudores"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("ul",e._l(t.row.deudores,(function(a){return r("li",{key:a.id},[r("b-checkbox",{attrs:{disabled:t.row.eliminada||e.usuarioAutenticado.id!==t.row.acreedor||a.pagado},nativeOn:{change:function(r){return e.actualizarDeuda(t.row)}},model:{value:a.pagado,callback:function(t){e.$set(a,"pagado",t)},expression:"deudor.pagado"}},[e._v(e._s(e.detallesDeUsuario(a.id).nombre)+" "+e._s(e._f("dinero")(e.montoIndividual(t.row))))]),r("b-tag",{directives:[{name:"show",rawName:"v-show",value:a.pagado,expression:"deudor.pagado"}],attrs:{type:"is-success"}},[e._v("Pagado")])],1)})),0)]}}])}),r("b-table-column",{attrs:{field:"restante",label:"Restante"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dinero")(e.restante(t.row)))+" ")]}}])}),r("b-table-column",{attrs:{field:"id",label:"Liquidar"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.eliminada,expression:"!props.row.eliminada"}],attrs:{disabled:e.usuarioAutenticado.id!==t.row.acreedor,type:"is-info"},on:{click:function(r){return e.eliminar(t.row)}}},[r("b-icon",{attrs:{icon:"check"}})],1),r("b-tag",{directives:[{name:"show",rawName:"v-show",value:t.row.eliminada,expression:"props.row.eliminada"}],attrs:{type:"is-success"}},[e._v("Liquidada")])]}}])})],1)],1)])},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",{staticClass:"has-text-centered",attrs:{colspan:"2"}},[e._v("Totales")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Total")])])}],X=(r("99af"),r("c740"),"Liquidadas y pendientes"),W="Solo liquidadas",Z="Solo pendientes",ee={data:function(){return{usuarioAutenticado:{},filtrosEliminadas:[X,W,Z],filtroEliminadas:null,funcionParaDesuscribir:null,coleccionDeudas:null,bd:null,cargando:!1,deudas:[],deudasFiltradas:[],diccionarioUsuarios:{},usuarios:[],referenciaListaDeudas:null,ID_TODOS_LOS_USUARIOS:"ID_TODOS_LOS_USUARIOS",filtroDeudasAcreedor:{},filtroDeudasDeudor:{}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.usuarioAutenticado=p.obtenerUsuarioAutenticado(),e.filtroEliminadas=Z,t.next=4,e.obtenerUsuarios();case 4:return t.next=6,p.obtenerColeccionDeudas();case 6:return e.coleccionDeudas=t.sent,t.next=9,p.obtener();case 9:e.bd=t.sent,e.obtenerDeudasSegunFiltros();case 11:case"end":return t.stop()}}),t)})))()},methods:{obtenerDeudasSegunFiltros:function(){this.deudas=[],"function"===typeof this.funcionParaDesuscribir&&this.funcionParaDesuscribir();var e=[Object(c["k"])("fecha","desc")];this.filtroEliminadas===W?e.push(Object(c["n"])("eliminada","==",!0)):this.filtroEliminadas===Z&&e.push(Object(c["n"])("eliminada","==",!1)),this.filtroDeudasAcreedor.id!==this.ID_TODOS_LOS_USUARIOS&&e.push(Object(c["n"])("acreedor","==",this.filtroDeudasAcreedor.id)),this.filtroDeudasDeudor.id!==this.ID_TODOS_LOS_USUARIOS&&e.push(Object(c["n"])("idDeudores","array-contains",this.filtroDeudasDeudor.id));var t=c["l"].apply(void 0,[this.coleccionDeudas].concat(e));this.funcionParaDesuscribir=Object(c["j"])(t,this.manejarEventoSnapshot)},manejarEventoSnapshot:function(e){var t=this;this.cargando=!0,e.docChanges().forEach((function(e){var r=e.doc.data(),a=e.doc.id;if("added"===e.type&&(r.id=a,t.deudas.push(r)),"modified"===e.type){var n=t.indiceDeDeuda(a);-1!==n&&t.$set(t.deudas,n,r)}if("removed"===e.type){var o=t.indiceDeDeuda(a);-1!==o&&t.deudas.splice(o,1)}})),this.cargando=!1},eliminar:function(e){var t=this;this.$buefy.dialog.confirm({message:"¿Liquidar deuda? Esto no se puede deshacer",cancelText:"Cancelar",confirmText:"Sí, liquidar",onConfirm:function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.cargando=!0,e.eliminada=!0,Object(c["m"])(Object(c["d"])(t.bd,"deudas",e.id),e),t.$buefy.toast.open("Liquidada"),t.cargando=!1;case 5:case"end":return r.stop()}}),r)})));function a(){return r.apply(this,arguments)}return a}()})},indiceDeDeuda:function(e){return this.deudas.findIndex((function(t){return t.id===e}))},actualizarDeuda:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:Object(c["m"])(Object(c["d"])(t.bd,"deudas",e.id),e);case 1:case"end":return r.stop()}}),r)})))()},desglose:function(){var e,t={},r=Object(q["a"])(this.deudas);try{for(r.s();!(e=r.n()).done;){var a,n=e.value,o=Object(q["a"])(n.deudores);try{for(o.s();!(a=o.n()).done;){var i=a.value;t[i.id]||(t[i.id]={deudor:i,monto:0}),i.pagado||n.eliminada||(t[i.id].monto+=this.montoIndividual(n))}}catch(s){o.e(s)}finally{o.f()}}}catch(s){r.e(s)}finally{r.f()}return t},totalDeuda:function(){var e,t=0,r=Object(q["a"])(this.deudas);try{for(r.s();!(e=r.n()).done;){var a=e.value;a.eliminada||(t+=this.restante(a))}}catch(n){r.e(n)}finally{r.f()}return t},montoIndividual:function(e){return e.eliminada||e.deudores.length<=0?0:e.monto/e.deudores.length},restante:function(e){if(e.eliminada)return 0;var t,r=0,a=Object(q["a"])(e.deudores);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.pagado||r++}}catch(o){a.e(o)}finally{a.f()}return this.montoIndividual(e)*r},detallesDeUsuario:function(e){return this.diccionarioUsuarios[e]||{}},agregarDeuda:function(){this.$router.push({name:"AgregarDeuda"})},obtenerUsuarios:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,t.next=3,p.obtenerUsuarios();case 3:r=t.sent,e.diccionarioUsuarios={},e.usuarios=[{id:e.ID_TODOS_LOS_USUARIOS,nombre:"-- Todos --"}],e.filtroDeudasDeudor=e.usuarios[0],e.filtroDeudasAcreedor=e.usuarios[0],r.forEach((function(t){e.diccionarioUsuarios[t.id]=t.data();var r={id:t.id,nombre:t.data().nombre};e.usuarios.push(r)})),e.cargando=!1;case 10:case"end":return t.stop()}}),t)})))()}}},te=ee,re=Object(g["a"])(te,K,Q,!1,null,null,null),ae=re.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("section",{staticClass:"hero is-link"},[r("div",{staticClass:"hero-body"},[r("p",{staticClass:"title"},[e._v(" Creado por "),r("a",{staticClass:"has-text-warning",attrs:{href:"https://parzibyte.me/blog"}},[e._v("Parzibyte")])]),r("br"),r("div",{staticClass:"title"},[e._v("Más software gratuito")]),r("p",[e._v(" Puede visitar "),r("a",{staticClass:"has-text-warning",attrs:{href:"https://parzibyte.me/blog"}},[e._v("mi blog")]),e._v(" para ver más software. También le invito a "),r("a",{staticClass:"has-text-warning",attrs:{href:"https://parzibyte.me/blog/sigueme"}},[e._v("seguirme")]),e._v(" para mantenerse al tanto ")])])]),r("h2",{staticClass:"is-size-2"},[e._v("Créditos de los iconos")]),r("div",[e._v(" Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[e._v("Smashicons")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])])])])}],ie={},se=Object(g["a"])(ie,ne,oe,!1,null,null,null),ue=se.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{label:"Usuario"}},[r("b-input",{attrs:{type:"text",placeholder:"Tu usuario",loading:e.cargando},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}})],1),r("b-field",{attrs:{label:"Contraseña"}},[r("b-input",{attrs:{type:"password",placeholder:"Tu contraseña",loading:e.cargando},model:{value:e.palabraSecreta,callback:function(t){e.palabraSecreta=t},expression:"palabraSecreta"}})],1),r("b-button",{staticClass:"is-success",attrs:{loading:e.cargando},on:{click:function(t){return e.iniciarSesion()}}},[e._v("Iniciar sesión")])],1)])},de=[],le=r("279c"),fe={data:function(){return{usuario:"",palabraSecreta:"",cargando:!1,coleccionUsuarios:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=p.obtenerUsuarioAutenticado(),!r){t.next=4;break}return e.$router.push({name:"ListaDeDeudas"}),t.abrupt("return");case 4:return t.next=6,p.obtenerColeccionUsuarios();case 6:e.coleccionUsuarios=t.sent;case 7:case"end":return t.stop()}}),t)})))()},methods:{iniciarSesion:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.usuario&&e.palabraSecreta){t.next=2;break}return t.abrupt("return");case 2:return e.cargando=!0,r=Object(c["l"])(e.coleccionUsuarios,Object(c["n"])("nombre","==",e.usuario),Object(c["i"])(1)),t.next=6,Object(c["g"])(r);case 6:if(a=t.sent,!a.empty){t.next=11;break}return e.$buefy.toast.open("Usuario o contraseña incorrectos"),e.cargando=!1,t.abrupt("return");case 11:return n=a.docs[0].data(),n.id=a.docs[0].id,o=n.palabraSecreta,t.next=16,le.compare(e.palabraSecreta,o);case 16:i=t.sent,i?(p.guardarUsuarioAutenticado(n),m.$emit("usuarioAutenticado",n),e.$buefy.toast.open("Bienvenido"),e.$router.push({name:"ListaDeDeudas"})):e.$buefy.toast.open("Usuario o contraseña incorrectos"),e.cargando=!1;case 19:case"end":return t.stop()}}),t)})))()}}},be=fe,pe=Object(g["a"])(be,ce,de,!1,null,null,null),me=pe.exports;a["a"].use(x["a"]);var ve=new x["a"]({routes:[{path:"/",redirect:"/deudas"},{path:"/usuarios",name:"Usuarios",component:A},{path:"/agregar-usuario",name:"AgregarUsuario",component:$},{path:"/editar-usuario/:id",name:"EditarUsuario",component:F},{path:"/agregar-deuda",name:"AgregarDeuda",component:Y},{path:"/deudas",name:"ListaDeDeudas",component:ae},{path:"/acerca-de",name:"AcercaDe",component:ue},{path:"/login",name:"Login",component:me}]});ve.beforeEach((function(e,t,r){p.obtenerUsuarioAutenticado()||"Login"===e.name?r():r({name:"Login"})}));var he=ve;a["a"].use(y["a"]),a["a"].config.productionTip=!1;var ge=new Intl.NumberFormat("en",{style:"currency",currency:"MXN"}),_e=new Intl.DateTimeFormat("es-MX",{dateStyle:"medium",timeStyle:"medium"});a["a"].filter("dinero",(function(e){return ge.format(e)})),a["a"].filter("fecha",(function(e){return _e.format(new Date(e))})),new a["a"]({render:function(e){return e(w)},router:he}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});