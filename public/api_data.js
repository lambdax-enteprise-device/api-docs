define({ "api": [
  {
    "type": "get",
    "url": "/api/companies",
    "title": "Get a list of all companies",
    "name": "Companies",
    "group": "Admin",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Company_List",
            "description": "<p>an array of companies</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/companies/company-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/companies/:id",
    "title": "Get a compnay by Id",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "name": "Companies",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Company",
            "description": "<p>Returns the company matching the id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/companies/company-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/companies/:id",
    "title": "Update a company by id",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "name": "Companies",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Updates",
            "description": "<p>The infomation you want changed. Entered in the body</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Updated_Company",
            "description": "<p>Returns the company updated id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/companies/company-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/devices",
    "title": "Get all devices",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of all devices for a company</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/devices/company/:id",
    "title": "Get Devices by company id",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>company id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>the devices matching the id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/devices/company",
    "title": "Post Devices",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>The company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_type_id",
            "description": "<p>The device type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location_id",
            "description": "<p>the location id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "manufacturer_id",
            "description": "<p>then manufacturer id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Return a device id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/devices/:id",
    "title": "Get Device By id",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>device_id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>the devices matching the id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/devices/:id",
    "title": "Update Device",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updates",
            "description": "<p>updates for the device</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>the updated id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/api/devices/:id",
    "title": "Delete Device",
    "name": "Devices",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>device id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer_Token",
            "description": "<p>auth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>a success message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/device-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Admin login",
    "name": "login",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "welcome_message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>json web token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/auth-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "New admin signup",
    "name": "signup",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "welcome_message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>json web token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/auth-router.js",
    "groupTitle": "Admin"
  }
] });
