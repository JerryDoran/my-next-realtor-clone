"use strict";
(() => {
var exports = {};
exports.id = 997;
exports.ids = [997];
exports.modules = {

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

/***/ 9383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditListing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_global_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9893);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_7__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase_config_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function EditListing() {
  const {
    0: geolocationEnabled,
    1: setGeoLocationEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: dataLoading,
    1: setDataLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: listing,
    1: setListing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: true,
    regularPrice: 0,
    salePrice: 0,
    images: {},
    latitude: 0,
    longitude: 0
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    salePrice,
    images,
    latitude,
    longitude
  } = formData;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (listing && listing.userRef !== _firebase_config_js__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I8.currentUser?.uid) {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("You can't edit this listing!");
      router.push('/');
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_firebase_config_js__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I8.currentUser) {
      router.push('/account/login');
    }

    setDataLoading(true);

    async function fetchListing() {
      const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_7__.db, 'listings', router.query.listingId);
      const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setFormData(docSnap.data());
        setDataLoading(false);
      } else {
        router.push('/');
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('That listing does not exist!');
      }
    }

    fetchListing();
  }, []);

  if (dataLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_global_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
  }

  const handleChange = e => {
    let boolean = null;
    if (e.target.value === 'true') boolean = true;
    if (e.target.value === 'false') boolean = false; // Checks for inputs with files

    if (e.target.files) {
      setFormData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        images: e.target.files
      }));
    } // Checks for inputs of type 'Text/Boolean/Number


    if (!e.target.files) {
      setFormData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [e.target.name]: boolean ?? e.target.value
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setDataLoading(true);

    if (+salePrice >= +regularPrice) {
      setDataLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Sale price needs to be less than regular price!');
      return;
    }

    if (images.length > 6) {
      setDataLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Maximum 6 images are allowed!');
      return;
    }

    let geolocation = {};
    let location;

    if (geolocationEnabled) {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`);
      const data = await response.json();
      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;
      location = data.status === 'ZERO_RESULTS' && undefined;

      if (location === undefined) {
        setDataLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Please enter a correct address!');
        return;
      }
    } else {
      // get info from form data if geolocation is disabled
      geolocation.lat = latitude;
      geolocation.lng = longitude;
    } // upload images to firebase


    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
        const filename = `${_firebase_config_js__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser.uid */ .I8.currentUser.uid}-${image.name}-${(0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()}`;
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, filename);
        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(storageRef, image);
        uploadTask.on('state_changed', snapshot => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;

            case 'running':
              console.log('Upload is running');
              break;
          }
        }, error => {
          // Handle unsuccessful uploads
          reject(error);
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(uploadTask.snapshot.ref).then(downloadURL => {
            resolve(downloadURL);
          });
        });
      });
    }

    const imgUrls = await Promise.all([...images].map(image => storeImage(image))).catch(error => {
      setDataLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Images not uploaded!');
      return;
    });

    const updatedFormData = _objectSpread(_objectSpread({}, formData), {}, {
      imgUrls,
      geolocation,
      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)(),
      userRef: _firebase_config_js__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser.uid */ .I8.currentUser.uid
    });

    delete updatedFormData.images;
    !updatedFormData.offer && delete updatedFormData.salePrice;
    delete updatedFormData.latitude;
    delete updatedFormData.longitude;
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase_config_js__WEBPACK_IMPORTED_MODULE_7__.db, 'listings', router.query.listingId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(docRef, updatedFormData);
    setDataLoading(false);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Listing edited!');
    router.push(`/category/${updatedFormData.type}/${docRef.id}`);
  };

  if (dataLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_global_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main", {
    className: "max-w-[500px] px-2 mx-auto",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
      className: "text-2xl text-center m-6 font-medium",
      children: "Edit Listing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      className: "border border-gray-300 py-2 px-8 rounded-md bg-white shadow-lg",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "mt-2 font-medium",
        children: "Sell / Rent"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex gap-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "type",
          value: "sell",
          onClick: handleChange,
          className: `rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "sell"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "type",
          value: "rent",
          onClick: handleChange,
          className: `rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'sell' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "rent"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "mt-4 font-medium",
        children: "Property"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
        type: "text",
        name: "name",
        value: name,
        onChange: handleChange,
        placeholder: "Name",
        maxLength: "32",
        minLength: "10",
        required: true,
        className: "w-full px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-4 focus:ring-0 focus:border-slate-800"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-medium",
            children: "Bed"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "number",
            name: "bedrooms",
            value: bedrooms,
            onChange: handleChange,
            min: "1",
            max: "50",
            required: true,
            className: "w-full px-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-1 focus:ring-0 focus:border-slate-800 text-center"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-medium",
            children: "Bath"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "number",
            name: "bathrooms",
            value: bathrooms,
            onChange: handleChange,
            min: "1",
            max: "50",
            required: true,
            className: " w-full px-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-4 focus:ring-0 focus:border-slate-800 text-center"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "font-medium",
        children: "Parking"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex gap-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "parking",
          value: true,
          onClick: handleChange,
          className: `rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "parking",
          value: false,
          onClick: handleChange,
          className: `rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "no"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "mt-4 font-medium",
        children: "Furnished"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex gap-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "furnished",
          value: true,
          onClick: handleChange,
          className: `rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "furnished",
          value: false,
          onClick: handleChange,
          className: `rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "no"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "mt-4 font-medium",
        children: "Address"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("textarea", {
        type: "text",
        name: "address",
        value: address,
        onChange: handleChange,
        placeholder: "Address",
        required: true,
        className: "w-full px-4 py-2 mb-2 text-gray-700 border border-gray-300 bg-white rounded transition focus:ring-0 focus:border-slate-800"
      }), !geolocationEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex space-x-6 justify-start mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-medium",
            children: "Latitude"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "number",
            name: "latitude",
            value: latitude,
            onChange: handleChange,
            required: true,
            min: "-90",
            max: "90",
            className: "w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-medium",
            children: "Longitude"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "number",
            name: "longitude",
            value: longitude,
            onChange: handleChange,
            required: true,
            min: "-180",
            max: "180",
            className: "w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "mt-2 font-medium",
        children: "Description"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("textarea", {
        type: "text",
        name: "description",
        value: description,
        onChange: handleChange,
        placeholder: "Description",
        required: true,
        className: "w-full px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-2 focus:ring-0 focus:border-slate-800"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "font-medium",
        children: "Offer"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex gap-3 mb-6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "offer",
          value: true,
          onClick: handleChange,
          className: `rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          type: "button",
          name: "offer",
          value: false,
          onClick: handleChange,
          className: `rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`,
          children: "no"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "flex items-center mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-medium",
            children: "Regular Price"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex w-full justify-center items-center space-x-6",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
              type: "number",
              name: "regularPrice",
              value: regularPrice,
              onChange: handleChange,
              min: "50",
              max: "400000000",
              required: true,
              className: "w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
            }), type === 'rent' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                className: "text-md w-full whitespace-nowrap",
                children: "$ / Month"
              })
            })]
          })]
        })
      }), offer && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "flex items-center mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            className: "font-semibold",
            children: "Sale price"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex w-full justify-center items-center space-x-6",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
              type: "number",
              name: "salePrice",
              value: salePrice,
              onChange: handleChange,
              min: "50",
              max: "400000000",
              required: offer,
              className: "w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
            }), type === 'rent' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                className: "text-md w-full whitespace-nowrap",
                children: "$ / Month"
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mb-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          className: "font-semibold",
          children: "Images"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          className: "text-gray-600",
          children: "The first image will be the cover (max 6)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
          type: "file",
          name: "images",
          onChange: handleChange,
          accept: ".jpg,.png,.jpeg",
          multiple: true,
          required: true,
          className: "w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
        type: "submit",
        className: "mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
        children: "Edit Listing"
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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(9383)));
module.exports = __webpack_exports__;

})();