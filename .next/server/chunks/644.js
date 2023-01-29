"use strict";
exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 7644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OAuth)
/* harmony export */ });
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9893);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function OAuth({
  title
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const handleLogInWithGoogle = async () => {
    try {
      const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
      const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, provider);
      const user = result.user;
      console.log(user); // check for user

      const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_3__.db, 'users', user.uid);
      const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(docRef);

      if (!docSnap.exists()) {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)()
        });
      }

      router.push('/');
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Could not aunthenticate with Google');
      console.log(error);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "w-full",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
      className: "w-full flex mt-2 items-center gap-2 justify-center bg-gray-800 text-white p-2 rounded-md transition hover:bg-gray-700",
      type: "button",
      onClick: handleLogInWithGoogle,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_0__.FcGoogle, {
        className: "w-6 h-5"
      }), " ", title, " with Google"]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;