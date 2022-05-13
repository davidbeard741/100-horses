/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/galangua_wasm_bg.wasm": function() {
/******/ 			return {
/******/ 				"./galangua_wasm_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_playse_88ad62e8ba2af1a5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_playse_88ad62e8ba2af1a5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_1d391c4891a6ec4d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_setfillStyle_1d391c4891a6ec4d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawImage_eebd1f77308d9c80": function(p0i32,p1i32,p2f64,p3f64,p4f64,p5f64,p6f64,p7f64,p8f64,p9f64) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_drawImage_eebd1f77308d9c80"](p0i32,p1i32,p2f64,p3f64,p4f64,p5f64,p6f64,p7f64,p8f64,p9f64);
/******/ 					},
/******/ 					"__wbg_fillRect_59b38b7e6f8d0717": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_fillRect_59b38b7e6f8d0717"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_restore_56c80343ddc70aeb": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_restore_56c80343ddc70aeb"](p0i32);
/******/ 					},
/******/ 					"__wbg_save_faa4566184f134f6": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_save_faa4566184f134f6"](p0i32);
/******/ 					},
/******/ 					"__wbg_rotate_fadc4607e79d2c11": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_rotate_fadc4607e79d2c11"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_translate_9ddcf1e1c78a2fc1": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_translate_9ddcf1e1c78a2fc1"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_getElementById_f83c5de20dc455d6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_getElementById_f83c5de20dc455d6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_6884dcc6cdd65022": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_set_6884dcc6cdd65022"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_20b7a9ebdd5f4232": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_width_20b7a9ebdd5f4232"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_57f43816c2227a89": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_height_57f43816c2227a89"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_0c19ba5c037e057f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_getContext_0c19ba5c037e057f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setonload_09beea2b050a3778": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_setonload_09beea2b050a3778"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonerror_77c380124a350386": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_setonerror_77c380124a350386"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setsrc_6567add4fbef51e3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_setsrc_6567add4fbef51e3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_944851407ca613d7": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_new_944851407ca613d7"]();
/******/ 					},
/******/ 					"__wbg_headers_0a71906114661592": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_headers_0a71906114661592"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_fd99688f189f053e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_newwithstrandinit_fd99688f189f053e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_ccfeb62399355bcd": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_instanceof_Response_ccfeb62399355bcd"](p0i32);
/******/ 					},
/******/ 					"__wbg_text_2612fbe0b9d32220": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_text_2612fbe0b9d32220"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_0e6c0f1096d66c3c": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_instanceof_Window_0e6c0f1096d66c3c"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_99eddbbc11ec831e": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_document_99eddbbc11ec831e"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_ef7a6623d1fcd3b8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_fetch_ef7a6623d1fcd3b8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_8ff19d586a987aef": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_error_8ff19d586a987aef"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_654a7797990fb8db": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_randomFillSync_654a7797990fb8db"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_fb6b088efb6bead2": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_getRandomValues_fb6b088efb6bead2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_NODE_MODULE_33b45247c55045b0": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_static_accessor_NODE_MODULE_33b45247c55045b0"]();
/******/ 					},
/******/ 					"__wbg_process_70251ed1291754d5": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_process_70251ed1291754d5"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_b23f2588cdb2ddbb": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_versions_b23f2588cdb2ddbb"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_61b8c9a82499895d": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_node_61b8c9a82499895d"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_2a93bc09fee45aca": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_require_2a93bc09fee45aca"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_crypto_2f56257a38275dbd": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_crypto_2f56257a38275dbd"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_d07655bf62361f21": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_msCrypto_d07655bf62361f21"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e23b458e372830de": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_newnoargs_e23b458e372830de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_36359baae5a47e27": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_new_36359baae5a47e27"]();
/******/ 					},
/******/ 					"__wbg_call_ae78342adc33730a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_call_ae78342adc33730a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_3ed288a247f13ea5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_call_3ed288a247f13ea5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_a19d3173f3e1d3c5": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_call_a19d3173f3e1d3c5"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_93b1c87ee2af852e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_set_93b1c87ee2af852e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_7af23f65f6c64548": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_buffer_7af23f65f6c64548"](p0i32);
/******/ 					},
/******/ 					"__wbg_resolve_a9a87bdd64e9e62c": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_resolve_a9a87bdd64e9e62c"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_ce526c837d07b68f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_then_ce526c837d07b68f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_842e65b843962f56": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_then_842e65b843962f56"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_99737b4dcdf6f0d8": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_self_99737b4dcdf6f0d8"]();
/******/ 					},
/******/ 					"__wbg_window_9b61fbbf3564c4fb": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_window_9b61fbbf3564c4fb"]();
/******/ 					},
/******/ 					"__wbg_globalThis_8e275ef40caea3a3": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_globalThis_8e275ef40caea3a3"]();
/******/ 					},
/******/ 					"__wbg_global_5de1e0f82bddcd27": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_global_5de1e0f82bddcd27"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_cc9018bd6f283b6f": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_new_cc9018bd6f283b6f"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_8f0657faca9f1422": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_newwithlength_8f0657faca9f1422"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_da527dbd24eafb6b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_subarray_da527dbd24eafb6b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_0acb1cf9bbaf8519": function(p0i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_length_0acb1cf9bbaf8519"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_f25e869e4565d2a2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbg_set_f25e869e4565d2a2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper301": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/galangua_wasm_bg.js"].exports["__wbindgen_closure_wrapper301"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/galangua_wasm_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/galangua_wasm_bg.wasm":"588021585f801f0f900e"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });