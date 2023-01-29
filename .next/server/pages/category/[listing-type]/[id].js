"use strict";
(() => {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 4483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9893);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Contact({
  userRef,
  listing
}) {
  const {
    0: landlord,
    1: setLandlord
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function getLandlord() {
      const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.db, 'users', userRef);
      const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);

      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Could not get landlord info!');
      }
    }

    getLandlord();
  }, [userRef]);

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: landlord?.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-col w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Contact ", landlord.name, " for the ", listing.name.toLowerCase()]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "mt-3 mb-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("textarea", {
          name: "message",
          id: "message",
          rows: "2",
          value: message,
          onChange: handleChange,
          className: "w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        href: `mailto:${landlord.email}?Subject=${listing.name}&body=${message}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          className: "px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6",
          type: "button",
          children: "Send Message"
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Spinner() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "https://raw.githubusercontent.com/sahandghavidel/realtor-clone-react/b50f6a27f7608cd9a245725e86a48067a0f2368a/src/assets/svg/spinner.svg",
        alt: "loading",
        className: "w-24 h-24"
      })
    })
  });
}

/***/ }),

/***/ 8053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListingDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9893);
/* harmony import */ var _components_global_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4483);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4045);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__, _components_Contact__WEBPACK_IMPORTED_MODULE_8__, react_leaflet__WEBPACK_IMPORTED_MODULE_9__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__, _components_Contact__WEBPACK_IMPORTED_MODULE_8__, react_leaflet__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function ListingDetails() {
  const {
    0: listing,
    1: setListing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: shareLinkCopied,
    1: setShareLinkCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: contactLandlord,
    1: setContactLandlord
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    id
  } = router.query;
  swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchListing() {
      const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_3__.db, 'listings', id);
      const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }

    fetchListing();
  }, []);

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_global_Spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("main", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
      slidesPerView: 1,
      navigation: true,
      pagination: {
        type: 'progressbar'
      },
      effect: "fade",
      modules: [swiper__WEBPACK_IMPORTED_MODULE_6__.EffectFade],
      autoplay: {
        delay: 3000
      },
      children: listing.imgUrls.map((url, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "relative w-full overflow-hidden h-[300px]",
          style: {
            background: `url(${listing.imgUrls[index]}) center no-repeat`,
            backgroundSize: 'cover'
          }
        })
      }, index))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center",
      onClick: () => {
        navigator.clipboard.writeText(window.location.href);
        setShareLinkCopied(true);
        setTimeout(() => {
          setShareLinkCopied(false);
        }, 2000);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaShare, {
        className: "text-lg text-slate-500"
      })
    }), shareLinkCopied && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
      className: "fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2",
      children: "Link Copied"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "m-4 p-4 rounded-lg shadow-lg bg-white flex flex-col max-w-7xl lg:mx-auto lg:space-x-8 md:flex-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "text-xl font-bold mb-3 text-blue-900",
          children: [listing.name, " - $", listing.offer ? listing.salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','), listing.type === 'rent' ? ' / month' : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "flex items-center mt-6 mb-5 font-semibold",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaMapMarkerAlt, {
            className: "h-5 w-5 text-green-600 mr-1"
          }), listing.address]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex justify-start items-center space-x-4 w-[90%] mb-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "bg-red-800 w-full max-w-[200px] rounded-2xl p-1 text-white text-sm text-center font-semibold shadow-md",
            children: listing.type === 'rent' ? 'Rent' : 'Sale'
          }), listing.offer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            className: "w-full max-w-[200px] bg-green-800 rounded-2xl p-1 text-white text-sm text-center font-semibold shadow-md",
            children: ["$", (listing.regularPrice - listing.salePrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','), ' ', "discount"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "mt-3 mb-3 text-sm md:max-w-[80%]",
          children: ["Description -", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "font-semibold",
            children: listing.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ul", {
          className: "flex items-center space-x-4 sm:space-x-5 text-sm font-semibold mb-6 w-[90%]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
            className: "flex items-center whitespace-nowrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaBed, {
              className: "text-lg mr-1"
            }), +listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : '1 Bed']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
            className: "flex items-center whitespace-nowrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaBath, {
              className: "text-lg mr-1"
            }), +listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : '1 Bath']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
            className: "flex items-center whitespace-nowrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaParking, {
              className: "text-lg mr-1"
            }), listing.parking ? 'Parking spot' : 'No Parking']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
            className: "flex items-center whitespace-nowrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaChair, {
              className: "text-lg mr-1"
            }), listing.furnished ? 'Furnished' : 'Not furnished']
          })]
        }), listing.userRef === _firebase_config_js__WEBPACK_IMPORTED_MODULE_3__/* .auth.currentUser */ .I8.currentUser?.uid && !contactLandlord && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "mt-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
            className: "px-7 py-3 bg-black text-white font-medium text-sm uppercase rounded shadow-md transition hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg w-full",
            onClick: () => setContactLandlord(true),
            children: "Contact Landlord"
          })
        }), contactLandlord && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          userRef: listing.userRef,
          listing: listing
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "w-full h-[200px] md:h-[400px] md:mt-0 z-10 overflow-x-hidden mt-6 md:ml-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.MapContainer, {
          center: [listing.geolocation.lat, listing.geolocation.lng],
          zoom: 13,
          scrollWheelZoom: false,
          style: {
            height: '100%',
            width: '100%'
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.TileLayer, {
            attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.Marker, {
            position: [listing.geolocation?.lat, listing.geolocation?.lng],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.Popup, {
              children: listing.address
            })
          })]
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 4045:
/***/ ((module) => {

module.exports = import("react-leaflet");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8053)));
module.exports = __webpack_exports__;

})();