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
