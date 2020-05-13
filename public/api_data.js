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
    "parameter": {
      "examples": [
        {
          "title": "Example Return:",
          "content": "[\n  {\n    \"id\": 1,\n    \"company_name\": \"Enterprise Devices\",\n    \"active\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\"\n  },\n  {\n    \"id\": 2,\n    \"company_name\": \"Test Company 2\",\n    \"active\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\"\n  },\n  {\n    \"id\": 3,\n    \"company_name\": \"Test Company 3\",\n    \"active\": true,\n    \"created_at\": \"2020-04-22T17:41:27.808Z\",\n    \"updated_at\": \"2020-04-22T17:41:27.808Z\"\n  },\n  {\n    \"id\": 4,\n    \"company_name\": \"Micah Test Inc.\",\n    \"active\": true,\n    \"created_at\": \"2020-05-06T21:28:23.846Z\",\n    \"updated_at\": \"2020-05-06T21:28:23.846Z\"\n  },\n  {\n    \"id\": 5,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T19:43:30.446Z\",\n    \"updated_at\": \"2020-05-08T19:43:30.446Z\"\n  },\n  {\n    \"id\": 6,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:32:07.265Z\",\n    \"updated_at\": \"2020-05-08T20:32:07.265Z\"\n  },\n  {\n    \"id\": 7,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:39:05.282Z\",\n    \"updated_at\": \"2020-05-08T20:39:05.282Z\"\n  },\n  {\n    \"id\": 8,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:41:08.273Z\",\n    \"updated_at\": \"2020-05-08T20:41:08.273Z\"\n  },\n  {\n    \"id\": 9,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:41:25.542Z\",\n    \"updated_at\": \"2020-05-08T20:41:25.542Z\"\n  },\n  {\n    \"id\": 10,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:43:08.360Z\",\n    \"updated_at\": \"2020-05-08T20:43:08.360Z\"\n  },\n  {\n    \"id\": 11,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:44:57.003Z\",\n    \"updated_at\": \"2020-05-08T20:44:57.003Z\"\n  },\n  {\n    \"id\": 12,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:45:31.285Z\",\n    \"updated_at\": \"2020-05-08T20:45:31.285Z\"\n  },\n  {\n    \"id\": 13,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T20:46:57.046Z\",\n    \"updated_at\": \"2020-05-08T20:46:57.046Z\"\n  },\n  {\n    \"id\": 14,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T21:46:10.179Z\",\n    \"updated_at\": \"2020-05-08T21:46:10.179Z\"\n  },\n  {\n    \"id\": 15,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T21:46:59.955Z\",\n    \"updated_at\": \"2020-05-08T21:46:59.955Z\"\n  },\n  {\n    \"id\": 16,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T21:48:08.365Z\",\n    \"updated_at\": \"2020-05-08T21:48:08.365Z\"\n  },\n  {\n    \"id\": 17,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T21:49:11.338Z\",\n    \"updated_at\": \"2020-05-08T21:49:11.338Z\"\n  },\n  {\n    \"id\": 18,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T21:50:49.067Z\",\n    \"updated_at\": \"2020-05-08T21:50:49.067Z\"\n  },\n  {\n    \"id\": 19,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-08T22:01:13.180Z\",\n    \"updated_at\": \"2020-05-08T22:01:13.180Z\"\n  },\n  {\n    \"id\": 20,\n    \"company_name\": \"Test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-10T19:05:16.162Z\",\n    \"updated_at\": \"2020-05-10T19:05:16.162Z\"\n  },\n  {\n    \"id\": 21,\n    \"company_name\": \"Test \",\n    \"active\": true,\n    \"created_at\": \"2020-05-11T16:54:06.555Z\",\n    \"updated_at\": \"2020-05-11T16:54:06.555Z\"\n  },\n  {\n    \"id\": 22,\n    \"company_name\": \"Test \",\n    \"active\": true,\n    \"created_at\": \"2020-05-11T16:54:15.375Z\",\n    \"updated_at\": \"2020-05-11T16:54:15.375Z\"\n  },\n  {\n    \"id\": 23,\n    \"company_name\": \"Test \",\n    \"active\": true,\n    \"created_at\": \"2020-05-11T16:55:47.158Z\",\n    \"updated_at\": \"2020-05-11T16:55:47.158Z\"\n  },\n  {\n    \"id\": 24,\n    \"company_name\": \"cam\",\n    \"active\": true,\n    \"created_at\": \"2020-05-11T21:14:26.178Z\",\n    \"updated_at\": \"2020-05-11T21:14:26.178Z\"\n  },\n  {\n    \"id\": 25,\n    \"company_name\": \"Test Company\",\n    \"active\": true,\n    \"created_at\": \"2020-05-13T09:47:53.380Z\",\n    \"updated_at\": \"2020-05-13T09:47:53.380Z\"\n  },\n  {\n    \"id\": 26,\n    \"company_name\": \"Test Company\",\n    \"active\": true,\n    \"created_at\": \"2020-05-13T09:50:17.944Z\",\n    \"updated_at\": \"2020-05-13T09:50:17.944Z\"\n  },\n  {\n    \"id\": 27,\n    \"company_name\": \"Test Company\",\n    \"active\": true,\n    \"created_at\": \"2020-05-13T09:51:04.846Z\",\n    \"updated_at\": \"2020-05-13T09:51:04.846Z\"\n  },\n  {\n    \"id\": 28,\n    \"company_name\": \"test\",\n    \"active\": true,\n    \"created_at\": \"2020-05-13T11:15:31.512Z\",\n    \"updated_at\": \"2020-05-13T11:15:31.512Z\"\n  }\n]",
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
      },
      "examples": [
        {
          "title": "Example Return: ",
          "content": "{\n  \"message\": \"Company test and User info@mike-harley.tech created successfully\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJ1c2VybmFtZSI6ImluZm9AbWlrZS1oYXJsZXkudGVjaCIsImlhdCI6MTU4OTM2ODUzMiwiZXhwIjoxNTg5OTczMzMyfQ.jPWuzSMUw65IfPg-cvmypJJF-mGBtSQ7k4h-c7B8UJw\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Body:",
        "content": "{\n  \"email\":\"info@mike-harley.tech\",\n\t\"password\":\"test123\",\n\t\"first_name\":\"Mike\",\n\t\"last_name\":\"Harley\",\n\t\"title\":\"Tester\",\n  \"company_name\":\"test\"\n}",
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
