define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "Signup",
    "name": "Auth",
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
            "type": "boolean",
            "optional": false,
            "field": "isVerified",
            "description": "<p>Defaults to false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Return: ",
          "content": "{\n  \"message\": \"Company test and User info@mike-harley.tech created successfully.Please check your email\",\n \n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Body:",
        "content": "{\n  \"email\":\"info@mike-harley.tech\",\n\t\"password\":\"test123\",\n\t\"first_name\":\"Mike\",\n  \"last_name\":\"Harley\",\n   \"isVerified\":\"false\"\n\t\"title\":\"Tester\",\n  \"company_name\":\"test\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "welcome_message",
            "description": ""
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
    "url": "/api/auth/login",
    "title": "Login",
    "name": "Auth",
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
      },
      "examples": [
        {
          "title": "Example Return:",
          "content": "{\n  \"message\": \"Login Success\",\n  \"user\": {\n    \"companyId\": 28,\n    \"id\": 26,\n    \"email\": \"info@mike-harley.tech\",\n    \"firstName\": \"Mike\",\n    \"lastName\": \"Harley\",\n    \"title\": \"Admins\"\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJ1c2VybmFtZSI6ImluZm9AbWlrZS1oYXJsZXkudGVjaCIsImlhdCI6MTU4OTkyOTcxNywiZXhwIjoxNTkwNTM0NTE3fQ.hdbEfVTLSgJh616OhEs54J7bYaaObhtppQqCdf0Z7MQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Ok",
            "description": "<p>&quot;Login Success&quot;</p>"
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
    "parameter": {
      "examples": [
        {
          "title": "Example Return:",
          "content": "[\n  {\n    \"id\": 1,\n    \"company_name\": \"Enterprise Devices\",\n    \"active\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\"\n  },\n  {\n    \"id\": 2,\n    \"company_name\": \"Test Company 2\",\n    \"active\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\"\n  },\n  {\n\n\n]",
          "type": "json"
        }
      ]
    },
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
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": " [\n  {\n    \"id\": 26,\n    \"company_id\": 28,\n    \"email\": \"info@mike-harley.tech\",\n    \"password\": \"$2b$10$uoNIgzSeTmCRQoQZrpaWi.MdJgx/IvUv4eqT4wblkuwPadX2cZB3S\",\n    \"first_name\": \"Mike\",\n    \"last_name\": \"Harley\",\n    \"title\": \"Admins\",\n    \"created_at\": \"2020-05-13T11:15:31.700Z\",\n    \"updated_at\": \"2020-05-13T11:15:31.700Z\"\n  }\n]",
          "type": "json"
        }
      ]
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
    "examples": [
      {
        "title": "Example Body:",
        "content": "{\n\t\"title\":\"Admins\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/companies/company-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/device_types",
    "title": "Get Device Types",
    "name": "Device_Types",
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
            "description": "<p>A List Of Manufacturers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/deviceTypes-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/device_types",
    "title": "Post A Device Type",
    "name": "Device_Types",
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
            "field": "Device_Type",
            "description": "<p>The type of device</p>"
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
            "description": "<p>A Device_type id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/deviceTypes-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/device_types/:id",
    "title": "Get Device Type By Id",
    "name": "Device_Types",
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
            "field": "ID",
            "description": "<p>Device_type id</p>"
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
            "description": "<p>Device_type that matches id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/deviceTypes-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/api/device_types/:id",
    "title": "Delete A Device Type",
    "name": "Device_Types",
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
            "field": "Id",
            "description": "<p>Device_type Id</p>"
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
            "description": "<p>Success Message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/devices/deviceTypes-router.js",
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
    "url": "/api/devices",
    "title": "",
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
            "description": "<p>jsonwebtoken</p>"
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
    "type": "get",
    "url": "/api/mfgs",
    "title": "Get A List Of All Manufacturers",
    "name": "Manufacturers",
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
            "field": "Berer_Token",
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
            "description": "<p>a list of manufacturers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/manufacturers/mfg-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/mfgs",
    "title": "Add A Manufacturer",
    "name": "Manufacturers",
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
            "field": "Berer_Token",
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
            "field": "Name",
            "description": "<p>of manufacturer</p>"
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
            "description": "<p>Returns the manufacturers id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/manufacturers/mfg-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/mfgs/:id",
    "title": "Find A Manufacturer By Id",
    "name": "Manufacturers",
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
            "field": "Berer_Token",
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
            "type": "Number",
            "optional": false,
            "field": "Manufacturer",
            "description": "<p>Id</p>"
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
            "description": "<p>the manufacturer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/manufacturers/mfg-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/api/mfgs",
    "title": "Delete A Manufacturer",
    "name": "Manufacturers",
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
            "field": "Berer_Token",
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
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>of manufacturer</p>"
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
            "field": "Message",
            "description": "<p>Return a success message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/manufacturers/mfg-router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/requests",
    "title": "Get Requests",
    "name": "Requests",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Example Return: ",
          "content": "{\n \n  {\n    \"id\": 1,\n    \"company_id\": 1,\n    \"location_id\": 1,\n    \"employee_id\": \"1337\",\n    \"employee_name\": \"Joel Perez\",\n    \"employee_email\": \"joel.perez@enterprisedevices.com\",\n    \"approver_name\": \"Jack Sparrow\",\n    \"approver_email\": \"jack.sparrow@enterprisedevices.com\",\n    \"request_justification\": \"I just want new stuff!\",\n    \"approved\": false,\n    \"created_at\": \"2020-04-22T17:41:27.826Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.826Z\"\n  }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/requests/company",
    "title": "Get a request by company name",
    "name": "Requests",
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
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>Company Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Return Example:",
          "content": "[\n  {\n    \"id\": 1,\n    \"company_id\": 1,\n    \"location_id\": 1,\n    \"employee_id\": \"1337\",\n    \"employee_name\": \"Joel Perez\",\n    \"employee_email\": \"joel.perez@enterprisedevices.com\",\n    \"approver_name\": \"Jack Sparrow\",\n    \"approver_email\": \"jack.sparrow@enterprisedevices.com\",\n    \"request_justification\": \"I just want new stuff!\",\n    \"approved\": false,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\",\n    \"company_name\": \"Enterprise Devices\",\n    \"active\": true\n  },\n  {\n    \"id\": 1,\n    \"company_id\": 1,\n    \"location_id\": 1,\n    \"employee_id\": \"1337\",\n    \"employee_name\": \"Mike Harley\",\n    \"employee_email\": \"mike@mike.com\",\n    \"approver_name\": null,\n    \"approver_email\": null,\n    \"request_justification\": \"I just want new stuff!\",\n    \"approved\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\",\n    \"company_name\": \"Enterprise Devices\",\n    \"active\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Body Example:",
        "content": "{\n  \"company\":\"Enterprise Devices\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Requests",
            "description": "<p>returns a list of requests</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/requests",
    "title": "Post a request",
    "name": "Requests",
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
            "type": "number",
            "optional": false,
            "field": "company_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "location_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employee_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employee_name:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employee_email:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "approver_name:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "approver_email:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request_justification:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "approved:",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Return Example:",
          "content": "{\n \"id\": 2,\n \"company_id\": 1,\n \"location_id\": 1,\n \"employee_id\": \"1337\",\n \"employee_name\": \"Mike Harley\",\n \"employee_email\": \"mike@mike.com\",\n \"approver_name\": null,\n \"approver_email\": null,\n \"request_justification\": \"I just want new stuff!\",\n \"approved\": true,\n \"created_at\": \"2020-05-20T00:51:21.949Z\",\n \"updated_at\": \"2020-05-20T00:51:21.949Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Body Example:",
        "content": "\n{\n   \"company_id\":1,\n   \"location_id\":1,\n   \"employee_id\":1337,\n   \"employee_name\": \"Mike Harley\",\n   \"employee_email\": \"mike@mike.com\",\n   \"request_justification\": \"I just want new stuff!\",\n   \"approved\": true\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Request",
            "description": "<p>Returns The Request Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/requests/:id",
    "title": "Get request by id",
    "name": "Requests",
    "permission": [
      {
        "name": "Admin"
      },
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>request id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "company_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "location_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "employee_id:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employee_name:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employee_email:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "approver_name:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "approver_email:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request_justification:",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "approved:",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Return Example:",
          "content": "{\n\"id\": 2,\n\"company_id\": 1,\n\"location_id\": 1,\n\"employee_id\": \"1337\",\n\"employee_name\": \"Mike Harley\",\n\"employee_email\": \"mike@mike.com\",\n\"approver_name\": null,\n\"approver_email\": null,\n\"request_justification\": \"I just want new stuff!\",\n\"approved\": true,\n\"created_at\": \"2020-05-20T00:51:21.949Z\",\n\"updated_at\": \"2020-05-20T00:51:21.949Z\"\n}",
          "type": "json"
        },
        {
          "title": "Return Example:",
          "content": "{\n \"id\": 2,\n \"company_id\": 1,\n \"location_id\": 1,\n \"employee_id\": \"1337\",\n \"employee_name\": \"Mike Harley\",\n \"employee_email\": \"mike@mike.com\",\n \"approver_name\": null,\n \"approver_email\": null,\n \"request_justification\": \"I just want new stuff!\",\n \"approved\": true,\n \"created_at\": \"2020-05-20T00:51:21.949Z\",\n \"updated_at\": \"2020-05-20T00:51:21.949Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Id Example:",
        "content": "{\n  2\n}",
        "type": "json"
      },
      {
        "title": "Body Example:",
        "content": "\n{\n   \"company_id\":1,\n   \"location_id\":1,\n   \"employee_id\":1337,\n   \"employee_name\": \"Mike Harley\",\n   \"employee_email\": \"mike@mike.com\",\n   \"request_justification\": \"I just want new stuff!\",\n   \"approved\": true\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Request",
            "description": "<p>Returns The Request Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/requests/:id",
    "title": "Update request",
    "name": "Requests",
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>request id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Updates",
            "description": "<p>Changes made</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Return Example:",
          "content": " {\n\"id\": 2,\n \"company_id\": 1,\n \"location_id\": 1,\n \"employee_id\": \"1337\",\n \"employee_name\": \"Mike Harley\",\n \"employee_email\": \"mike@mike.com\",\n \"approver_name\": null,\n \"approver_email\": null,\n \"request_justification\": \"I just want new stuff!\",\n \"approved\": false,\n \"created_at\": \"2020-05-20T00:51:21.949Z\",\n \"updated_at\": \"2020-05-20T00:51:21.949Z\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Id Example:",
        "content": "{\n  \"approved\":false\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Request",
            "description": "<p>Returns updated request object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/requests/:id",
    "title": "Delete request",
    "name": "Requests",
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>request id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/requests/requests-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get users",
    "name": "Users",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Users",
            "description": "<p>A list of users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/user-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/users/company",
    "title": "Get user by company name.",
    "name": "Users",
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
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>The name of the company</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "User",
            "description": "<p>Returns a list of users for the company</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/user-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Post Add a new user.",
    "name": "Users",
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
            "type": "string",
            "optional": false,
            "field": "company_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isVerified",
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
            "type": "object",
            "optional": false,
            "field": "Returns",
            "description": "<p>user object upon success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/user-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get user by user id.",
    "name": "Users",
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
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>user_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "User",
            "description": "<p>Returns user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/user-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update user.",
    "name": "Users",
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
            "type": "string",
            "optional": false,
            "field": "updates",
            "description": "<p>In the body in json enter any updates for the user,</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "User",
            "description": "<p>Returns updated user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/user-router.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Bearer",
            "description": "<p>auth token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/signup/:token",
    "title": "Email Verification Endpoint",
    "name": "Auth",
    "group": "Users",
    "description": "<p>Url sent via verification email to new user. Url is only valid 24 hours. It takes the from the url and compares it to the token stored in the DB.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Ok",
            "description": "<p>Returns a success message and deletes the token from the DB</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>&quot;Please Verify Your Email&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/auth/password/forgotpassword",
    "title": "Change User Password",
    "name": "Auth",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "form",
            "optional": false,
            "field": "Password_Reset",
            "description": "<p>form</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/resetPassword/reset-password.router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/auth/password/passwordreset",
    "title": "Request To Reset User Password",
    "name": "Auth",
    "group": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "object",
            "optional": false,
            "field": "Error_Object",
            "description": "<p>If not found an error message is returned .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success_Message",
            "description": "<p>&quot;Email Sent&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/resetPassword/reset-password.router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/auth/password/resetpassword/:id/:token",
    "title": "Reset Password Form",
    "name": "Auth",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "form",
            "optional": false,
            "field": "New_Password_Form",
            "description": "<p>Form for the user to update their password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/resetPassword/reset-password.router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/auth/password/resetpassword",
    "title": "Send New User Password",
    "name": "Auth",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Updated_User_Object",
            "description": "<p>Send the user object back with the updated hashed password/</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/resetPassword/reset-password.router.js",
    "groupTitle": "Users"
  }
] });
