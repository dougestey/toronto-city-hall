// Generated from command:
// TODO: Parse directly from JSON spec
// node_modules/.bin/fetch-swagger-schema https://tocityhall-api.herokuapp.com/v0/swagger www/js/tocityhall.json
window.toCityHallSchema = {
    "apiVersion": "v0",
    "apis": [
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-legislative_sessions---format-",
                                "notes": "",
                                "parameters": [],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/legislative_sessions"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-legislative_sessions--id---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/legislative_sessions/{id}"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-legislative_sessions--id-bills---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/legislative_sessions/{id}/bills"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-legislative_sessions--id-people---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/legislative_sessions/{id}/people"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/legislative_sessions",
                "swaggerVersion": "1.2"
            },
            "description": "Four-Year legislative terms of governance",
            "path": "/legislative_sessions"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllOrganizations",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all organizations",
                                "type": "App::Organizations"
                            }
                        ],
                        "path": "/organizations"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getOrganizationById",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "45abd75a-640b-4069-9eb7-c322a845f2f7",
                                        "description": "Organization UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single organization",
                                "type": "App::Organizations"
                            }
                        ],
                        "path": "/organizations/{id}"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-organizations--id-people---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "45abd75a-640b-4069-9eb7-c322a845f2f7",
                                        "description": "Organization UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single organization's people",
                                "type": "App::People"
                            }
                        ],
                        "path": "/organizations/{id}/people"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-organizations--id-events---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "45abd75a-640b-4069-9eb7-c322a845f2f7",
                                        "description": "Organization UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single organization's events",
                                "type": "App::Events"
                            }
                        ],
                        "path": "/organizations/{id}/events"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::Events": {
                        "id": "App::Events",
                        "properties": {}
                    },
                    "App::Organizations": {
                        "id": "App::Organizations",
                        "properties": {
                            "children": {
                                "description": "Organizations",
                                "items": {
                                    "$ref": ""
                                },
                                "param_type": "body",
                                "type": "array"
                            },
                            "classification": {
                                "description": "An organization category, e.g. committee",
                                "type": "string"
                            },
                            "jurisdiction_id": {
                                "type": "string"
                            },
                            "name": {
                                "description": "A primary name, e.g. a legally recognized name",
                                "type": "string"
                            },
                            "parent": {
                                "$ref": "",
                                "description": "Organizations",
                                "param_type": "body"
                            }
                        }
                    },
                    "App::People": {
                        "id": "App::People",
                        "properties": {
                            "image": {
                                "description": "A URL of a head shot",
                                "type": "string"
                            },
                            "name": {
                                "description": "A person\u2019s preferred full name",
                                "type": "string"
                            },
                            "organizations": {
                                "description": "Organizations",
                                "items": {
                                    "$ref": ""
                                },
                                "param_type": "body",
                                "type": "array"
                            }
                        }
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/organizations",
                "swaggerVersion": "1.2"
            },
            "description": "Committees, boards, agencies, and corporations",
            "path": "/organizations"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllPosts",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all posts",
                                "type": "App::Posts"
                            }
                        ],
                        "path": "/posts"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getPostById",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single post",
                                "type": "App::Posts"
                            }
                        ],
                        "path": "/posts/{id}"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::Posts": {
                        "id": "App::Posts",
                        "properties": {}
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/posts",
                "swaggerVersion": "1.2"
            },
            "description": "Positions within organizations",
            "path": "/posts"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllEvents",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all events",
                                "type": "App::Events"
                            }
                        ],
                        "path": "/events"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getEventById",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "e8d65949-e336-40c1-a0d0-a53320bf53be",
                                        "description": "Event UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single event",
                                "type": "App::Events"
                            }
                        ],
                        "path": "/events/{id}"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::Events": {
                        "id": "App::Events",
                        "properties": {}
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/events",
                "swaggerVersion": "1.2"
            },
            "description": "Meetings of organizations or persons",
            "path": "/events"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllAgendaItems",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all agenda items",
                                "type": "App::AgendaItems"
                            }
                        ],
                        "path": "/agenda_items"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllUpcomingAgendaItems",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all upcoming agenda items",
                                "type": "App::AgendaItems"
                            }
                        ],
                        "path": "/agenda_items/upcoming"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllLatestAgendaItems",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all latest agenda items",
                                "type": "App::AgendaItems"
                            }
                        ],
                        "path": "/agenda_items/latest"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::AgendaItems": {
                        "id": "App::AgendaItems",
                        "properties": {}
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/agenda_items",
                "swaggerVersion": "1.2"
            },
            "description": "Items on meeting agendas",
            "path": "/agenda_items"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-memberships---format-",
                                "notes": "",
                                "parameters": [],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/memberships"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-memberships--id---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/memberships/{id}"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/memberships",
                "swaggerVersion": "1.2"
            },
            "description": "Elected or appointed terms at organizations",
            "path": "/memberships"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllPeople",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all people",
                                "type": "App::People"
                            }
                        ],
                        "path": "/people"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getPersonById",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "635cfa4f-7c1c-4fa7-86a0-ac53368e7942",
                                        "description": "Person UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single person",
                                "type": "App::People"
                            }
                        ],
                        "path": "/people/{id}"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-people--id-votes---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "635cfa4f-7c1c-4fa7-86a0-ac53368e7942",
                                        "description": "Person UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single person's votes",
                                "type": "void"
                            }
                        ],
                        "path": "/people/{id}/votes"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-people--id-organizations---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "635cfa4f-7c1c-4fa7-86a0-ac53368e7942",
                                        "description": "Person UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single person's organizations",
                                "type": "App::Organizations"
                            }
                        ],
                        "path": "/people/{id}/organizations"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-people--id-memberships---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "defaultValue": "635cfa4f-7c1c-4fa7-86a0-ac53368e7942",
                                        "description": "Person UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single person's memberships",
                                "type": "App::Memberships"
                            }
                        ],
                        "path": "/people/{id}/memberships"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::Memberships": {
                        "id": "App::Memberships",
                        "properties": {}
                    },
                    "App::Organizations": {
                        "id": "App::Organizations",
                        "properties": {
                            "children": {
                                "description": "Organizations",
                                "items": {
                                    "$ref": ""
                                },
                                "param_type": "body",
                                "type": "array"
                            },
                            "classification": {
                                "description": "An organization category, e.g. committee",
                                "type": "string"
                            },
                            "jurisdiction_id": {
                                "type": "string"
                            },
                            "name": {
                                "description": "A primary name, e.g. a legally recognized name",
                                "type": "string"
                            },
                            "parent": {
                                "$ref": "",
                                "description": "Organizations",
                                "param_type": "body"
                            }
                        }
                    },
                    "App::People": {
                        "id": "App::People",
                        "properties": {
                            "image": {
                                "description": "A URL of a head shot",
                                "type": "string"
                            },
                            "name": {
                                "description": "A person\u2019s preferred full name",
                                "type": "string"
                            },
                            "organizations": {
                                "description": "Organizations",
                                "items": {
                                    "$ref": ""
                                },
                                "param_type": "body",
                                "type": "array"
                            }
                        }
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/people",
                "swaggerVersion": "1.2"
            },
            "description": "Mayors, councillors and public/private appointees",
            "path": "/people"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getAllBills",
                                "notes": "",
                                "parameters": [],
                                "summary": "Get all bills",
                                "type": "App::Bills"
                            }
                        ],
                        "path": "/bills"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "getBillById",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "Bill UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "Get a single bill",
                                "type": "App::Bills"
                            }
                        ],
                        "path": "/bills/{id}"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-bills--id-vote_events---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "Bill UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/bills/{id}/vote_events"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-bills--id-councillors---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "Bill UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/bills/{id}/councillors"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-bills--id-votes---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "Bill UUID",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": true,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/bills/{id}/votes"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "models": {
                    "App::Bills": {
                        "id": "App::Bills",
                        "properties": {}
                    }
                },
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/bills",
                "swaggerVersion": "1.2"
            },
            "description": "Bylaws voted into law by organizations",
            "path": "/bills"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-votes---format-",
                                "notes": "",
                                "parameters": [],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/votes"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-votes--id---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/votes/{id}"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-votes--id-votes---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/votes/{id}/votes"
                    },
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-votes--id-councillors---format-",
                                "notes": "",
                                "parameters": [
                                    {
                                        "allowMultiple": false,
                                        "description": "",
                                        "name": "id",
                                        "paramType": "path",
                                        "required": false,
                                        "type": "string"
                                    }
                                ],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/votes/{id}/councillors"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/votes",
                "swaggerVersion": "1.2"
            },
            "description": "Vote event on which a individual vote was held",
            "path": "/votes"
        },
        {
            "apiDeclaration": {
                "apiVersion": "v0",
                "apis": [
                    {
                        "operations": [
                            {
                                "method": "GET",
                                "nickname": "GET-locations---format-",
                                "notes": "",
                                "parameters": [],
                                "summary": "",
                                "type": "void"
                            }
                        ],
                        "path": "/locations"
                    }
                ],
                "basePath": "https://tocityhall-api.herokuapp.com/v0",
                "produces": [
                    "application/json"
                ],
                "resourcePath": "/locations",
                "swaggerVersion": "1.2"
            },
            "description": "Locations of meetings",
            "path": "/locations"
        }
    ],
    "info": {},
    "produces": [
        "application/json"
    ],
    "swaggerVersion": "1.2"
}
