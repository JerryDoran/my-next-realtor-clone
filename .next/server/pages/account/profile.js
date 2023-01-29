"use strict";
(() => {
var exports = {};
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 5801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var _components_global_Spinner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5384);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ListingItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4636);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function Profile() {
  const {
    0: changeDetails,
    1: setChangeDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: listings,
    1: setListings
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8?.currentUser?.displayName,
    email: _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8?.currentUser?.email
  });
  const {
    name,
    email
  } = formData;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser) {
      router.push('/account/login');
    }

    async function fetchUserListings() {
      const listingRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__.db, 'listings');
      const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(listingRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('userRef', '==', _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser?.uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('timestamp', 'desc'));
      const querySnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
      let listings = [];
      querySnap.forEach(doc => {
        return listings.push({
          id: doc.id,
          data: doc.data()
        });
      });
      setListings(listings);
      setLoading(false);
    }

    fetchUserListings();
  }, []);

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_global_Spinner_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
  }

  const handleChange = e => {
    setFormData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      if (_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser.displayName */ .I8.currentUser.displayName !== name) {
        // update display name in firebase auth
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser */ .I8.currentUser, {
          displayName: name
        }); // update name in firestore

        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__.db, 'users', _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.currentUser.uid */ .I8.currentUser.uid);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(docRef, {
          name
        });
      }

      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Profile successfully updated!');
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Could not update your profile details!');
      console.log(error);
    }
  };

  const handleDeleteListing = async listingId => {
    if (window.confirm('Are you sure you want to delete listing?')) {
      const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__.db, 'listings', listingId);
      await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(docRef);
      const updatedListings = listings.filter(listing => listing.id !== listingId);
      setListings(updatedListings);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Successfully deleted listing!');
    }
  };

  const handleEditListing = listingId => {
    router.push(`/edit-listing/${listingId}`);
  };

  const handleEdit = () => {
    changeDetails && handleSubmit();
    setChangeDetails(prevState => !prevState);
  };

  const handleLogout = () => {
    _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__/* .auth.signOut */ .I8.signOut();
    router.push('/');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("section", {
      className: "profileContainer",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h1", {
        className: "text-3xl text-center pt-8 font-semi-bold",
        children: "My Profile"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full mt-6 px-3 flex flex-col items-center justify-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
          className: "bg-white py-10 px-5 rounded-lg w-[350px] sm:w-[400px] md:w-[600px] flex flex-col relative",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
            type: "text",
            name: "name",
            className: `input transition ease-in-out w-full ${changeDetails && 'bg-red-200 focus:bg-red-200'}`,
            placeholder: "Username",
            value: name,
            onChange: handleChange,
            disabled: !changeDetails
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
            type: "email",
            name: "email",
            className: "input transition ease-in-out w-full",
            placeholder: "Email",
            value: email,
            onChange: handleChange,
            disabled: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "w-full flex justify-between mt-4 text-sm sm:text-lg mb-6",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
              className: " flex justify-between text-sm text-gray-500",
              children: "Do you want to change your name?"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
              className: "ml-2 text-sm text-red-400 cursor-pointer transition font-semibold hover:text-red-600",
              onClick: handleEdit,
              children: changeDetails ? 'Apply change' : 'Edit'
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "absolute -top-1 right-6 text-sm cursor-pointer mt-4 text-blue-500 duration hover:text-blue-700",
            onClick: handleLogout,
            children: "Sign Out"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_link_js__WEBPACK_IMPORTED_MODULE_8___default()), {
          href: "/create-listing",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
            className: "text-sm w-[350px] sm:w-[400px] md:w-[600px] mt-6 mb-8 bg-black text-white py-4 font-medium shadow-md rounded-md transition hover:bg-gray-800 hover:shadow-lg flex items-center justify-center gap-2",
            type: "submit",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcHome, {
              className: "text-3xl bg-red-200 rounded-full p-1 border-2"
            }), "SELL OR RENT YOUR HOME"]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "mt-8 max-w-6xl px-3 mx-auto",
        children: !loading && listings.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h2", {
            className: "text-2xl text-center font-semibold mb-6",
            children: "My Listings"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            className: "sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
            children: listings.map(listing => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ListingItem_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              id: listing.id,
              listing: listing.data,
              onDelete: () => handleDeleteListing(listing.id),
              onEdit: () => handleEditListing(listing.id)
            }, listing.id))
          })]
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5384:
/***/ ((module) => {

module.exports = require("next/link.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 178:
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,893,738], () => (__webpack_exec__(5801)));
module.exports = __webpack_exports__;

})();