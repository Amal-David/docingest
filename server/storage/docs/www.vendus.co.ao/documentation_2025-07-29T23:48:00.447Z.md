# Table of Contents

- [API](#api)
- [Cegid Vendus API - Overview](#cegid-vendus-api-overview)
- [Cegid Vendus API - Requests](#cegid-vendus-api-requests)
- [Cegid Vendus API - Authentication](#cegid-vendus-api-authentication)
- [Cegid Vendus API - Versions](#cegid-vendus-api-versions)
- [Resume - Cegid Vendus API](#resume-cegid-vendus-api)
- [Cegid Vendus API - Responses](#cegid-vendus-api-responses)
- [PaymentMethods - Cegid Vendus API](#paymentmethods-cegid-vendus-api)
- [Clients - Cegid Vendus API](#clients-cegid-vendus-api)
- [Covenants - Cegid Vendus API](#covenants-cegid-vendus-api)
- [Delivery - Cegid Vendus API](#delivery-cegid-vendus-api)
- [Account - Cegid Vendus API](#account-cegid-vendus-api)
- [Users - Cegid Vendus API](#users-cegid-vendus-api)
- [Balance - Cegid Vendus API](#balance-cegid-vendus-api)
- [Types - Cegid Vendus API](#types-cegid-vendus-api)
- [Discountcards - Cegid Vendus API](#discountcards-cegid-vendus-api)
- [Categories - Cegid Vendus API](#categories-cegid-vendus-api)
- [Integrations - Cegid Vendus API](#integrations-cegid-vendus-api)
- [Helpdesk - Cegid Vendus API](#helpdesk-cegid-vendus-api)
- [Kitchens - Cegid Vendus API](#kitchens-cegid-vendus-api)
- [Printer - Cegid Vendus API](#printer-cegid-vendus-api)
- [Brands - Cegid Vendus API](#brands-cegid-vendus-api)
- [Lots - Cegid Vendus API](#lots-cegid-vendus-api)
- [Categories - Cegid Vendus API](#categories-cegid-vendus-api)
- [Pricegroups - Cegid Vendus API](#pricegroups-cegid-vendus-api)
- [Variants - Cegid Vendus API](#variants-cegid-vendus-api)
- [Stocks - Cegid Vendus API](#stocks-cegid-vendus-api)
- [Units - Cegid Vendus API](#units-cegid-vendus-api)
- [Documents - Cegid Vendus API](#documents-cegid-vendus-api)
- [Registers - Cegid Vendus API](#registers-cegid-vendus-api)
- [Movements - Cegid Vendus API](#movements-cegid-vendus-api)
- [Rooms - Cegid Vendus API](#rooms-cegid-vendus-api)
- [Products - Cegid Vendus API](#products-cegid-vendus-api)
- [Receipts - Cegid Vendus API](#receipts-cegid-vendus-api)
- [Taxauthority - Cegid Vendus API](#taxauthority-cegid-vendus-api)
- [Taxes - Cegid Vendus API](#taxes-cegid-vendus-api)
- [Stores - Cegid Vendus API](#stores-cegid-vendus-api)
- [Selfconsumption - Cegid Vendus API](#selfconsumption-cegid-vendus-api)
- [Tables - Cegid Vendus API](#tables-cegid-vendus-api)
- [Suppliers - Cegid Vendus API](#suppliers-cegid-vendus-api)
- [Exemptions - Cegid Vendus API](#exemptions-cegid-vendus-api)
- [Saft - Cegid Vendus API](#saft-cegid-vendus-api)
- [Balance - Cegid Vendus API](#balance-cegid-vendus-api)

---

# API

![Logo](https://www.vendus.pt//m-img/logo_cegid_vendus_pad.svg)

*   Overview
*   Authentication
*   Requests
*   Responses
*   Reference
    *   Account
        *   get/account/
        *   get/account/{id}
        *   patch/account/{id}
        *   get/account/users/
        *   get/account/users/{id}
        *   patch/account/users/{id}
    *   Clients
        *   get/clients/
        *   post/clients/
        *   get/clients/{id}
        *   patch/clients/{id}
        *   del/clients/{id}
        *   get/clients/balance/
        *   post/clients/balance/
        *   get/clients/resume/
    *   Covenants
        *   get/covenants/
        *   post/covenants/
        *   del/covenants/{id}
    *   Delivery
        *   get/delivery/
        *   post/delivery/
        *   get/delivery/{id}
        *   patch/delivery/{id}
    *   Discountcards
        *   get/discountcards/
        *   post/discountcards/
        *   get/discountcards/{id}
    *   Documents
        *   get/documents/
        *   post/documents/
        *   get/documents/{id}
        *   patch/documents/{id}
        *   get/documents/paymentmethods/
        *   post/documents/paymentmethods/
        *   get/documents/paymentmethods/{id}
        *   get/documents/types/
    *   Helpdesk
        *   get/helpdesk/
        *   post/helpdesk/
        *   get/helpdesk/{id}
        *   patch/helpdesk/{id}
        *   del/helpdesk/{id}
        *   get/helpdesk/categories/
        *   post/helpdesk/categories/
        *   get/helpdesk/categories/{id}
        *   patch/helpdesk/categories/{id}
        *   del/helpdesk/categories/{id}
    *   Integrations
        *   get/integrations/
        *   post/integrations/
        *   get/integrations/{id}
    *   Kitchens
        *   get/kitchens/
        *   get/kitchens/{id}
        *   get/kitchens/printer/
        *   post/kitchens/printer/
    *   Products
        *   get/products/
        *   post/products/
        *   get/products/{id}
        *   patch/products/{id}
        *   del/products/{id}
        *   get/products/brands/
        *   post/products/brands/
        *   get/products/brands/{id}
        *   get/products/categories/
        *   post/products/categories/
        *   get/products/categories/{id}
        *   get/products/lots/
        *   post/products/lots/
        *   get/products/pricegroups/
        *   post/products/pricegroups/
        *   get/products/pricegroups/{id}
        *   get/products/stocks/{id}
        *   post/products/stocks/
        *   get/products/units/
        *   get/products/units/{id}
        *   get/products/variants/
    *   Receipts
        *   get/receipts/
        *   post/receipts/
        *   get/receipts/{id}
        *   patch/receipts/{id}
    *   Registers
        *   get/registers/
        *   get/registers/{id}
        *   get/registers/balance/
        *   get/registers/movements/
        *   post/registers/movements/
    *   Rooms
        *   get/rooms/
        *   get/rooms/{id}
    *   Selfconsumption
        *   get/selfconsumption/
        *   post/selfconsumption/
        *   get/selfconsumption/{id}
        *   patch/selfconsumption/{id}
        *   del/selfconsumption/{id}
    *   Stores
        *   get/stores/
        *   get/stores/{id}
    *   Suppliers
        *   get/suppliers/
        *   post/suppliers/
        *   get/suppliers/{id}
        *   patch/suppliers/{id}
    *   Tables
        *   get/tables/
        *   get/tables/{id}
    *   Taxauthority
        *   get/taxauthority/saft/
    *   Taxes
        *   get/taxes/
        *   get/taxes/exemptions/

[![redocly logo](https://cdn.redoc.ly/redoc/logo-mini.svg)API docs by Redocly](https://redocly.com/redoc/)

Cegid Vendus (1.1)
==================

This is the new API documentation. If you need to access the old one, click [here](https://www.vendus.co.ao/ws/v1.1/overview.doc)
.

We also have an [SDK](https://github.com/vendus/vendus-sdk-php)
 available. Take a look at our [documentation](https://github.com/vendus/vendus-sdk-php/tree/master/docs)
 and [examples](https://github.com/vendus/vendus-sdk-php/tree/master/docs/examples)
.

Like any other software, this API is always being updated and improved. Minor changes are implemented without impact your use of it. But, there are times when we need to push forward new features or protocols. When this happens, we use versioning to basically launch a new API, while supporting an old one.

### Default Version

Current default version is: `1.1`

There will always be a default version, which is assumed whenever you don't specify one. The default version maybe the latest or not - it all depends on our roadmap implementation. Nevertheless, we will notify you before changing the default version and we'll give enough time to migrate your code, if needed.

### Specifying a version

You may specify which version you intend to use by including it on the enpoint url like so:

    $ curl ... https://www.vendus.co.ao/ws/v1.1/account

### API Versions

1.2

1.1

1.0

[](https://www.vendus.co.ao/ws/v1.1/#section/Overview)
Overview
---------------------------------------------------------------

Our API uses resource-oriented URLs that leverage built in features of HTTP, like authentication, verbs and response codes. So, any HTTP client should be able to communicate with this API without issues.

Before starting to use our API, you first need to get an API key. Please refer to our application or customer support on how to obtain it.

### Documentation

All information about this API is available here: `https://www.vendus.co.ao/ws/v1.1/`  

### Rate Limiting

Your API use may have limits in place. If so, all responses will include headers describing the current rate limit status:

    Rate-Limit-Limit: 100
    Rate-Limit-Remaining: 99
    Rate-Limit-Used: 1
    Rate-Limit-Reset: 20

Headers meaning:

*   `Rate-Limit-Limit` - Total credit for current period
*   `Rate-Limit-Remaining` - Remaining credit for current period
*   `Rate-Limit-Used` - Number of credits used for this request
*   `Rate-Limit-Reset` - Number of seconds until the the credit count resets

[](https://www.vendus.co.ao/ws/v1.1/#section/Authentication)
Authentication
---------------------------------------------------------------------------

Before starting to use our api, you first need to get an API key. Please refer to our application or customer support on how to obtain it. Then, you must supply that API key on **every** request you make to the API. All requests are associated with a specific user and permissions are limited to that user's capabilities.

You may authenticate yourself using two methods, either using HTTP Basic Auth or by sending a specific Request Param.

### HTTP Basic Auth

For using this method, you just send the API key as the user for HTTP Basic Auth:

    $ curl -u api_key:https://www.vendus.co.ao/ws/v1.1/account

### Request Param

You may send API key as a request parameter, like so:

    $ curl https://www.vendus.co.ao/ws/v1.1/account?api_key=api_key

[](https://www.vendus.co.ao/ws/v1.1/#section/Requests)
Requests
---------------------------------------------------------------

The base URL of this api is `https://www.vendus.co.ao/ws/v1.1/`

### Endpoints

You can see a list of available endpoints on the left side of this page, under "Reference".

To target Account endpoint you use:

    https://www.vendus.co.ao/ws/v1.1/account

To target one item of Account endpoint that has id 123 you use:

    https://www.vendus.co.ao/ws/v1.1/account/123

### HTTP Methods/Actions

We use standard HTTP methods to indicate intent of a request:

Each endpoint has a list of allowed methods, than can be one or more of the following:

*   `GET` - To retrieve a resource or a collection of resources
*   `POST` - To create a resource
*   `PATCH` - To modify a resource
*   `PUT` - To set a resource
*   `DELETE` - To delete a resource

### Params

Preferably, all `POST`, `PUT`, `PATCH` requests should be [JSON](http://en.wikipedia.org/wiki/JSON)
 encoded and with content type of `application/json`, or the API may return a `415 Unsupported Media Type` status code.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345 \
        -X PATCH \
        -H Content-Type: application/json \
        -d {"status":"A"}

### Pagination

Requests for collections can return between 0 and 1000 results, controlled using the `per_page` and `page` query parameters. All endpoints are limited to 20 results by default.

    GET https://www.vendus.co.ao/ws/v1.1/account?per_page=15&page=2

Whenever a collection is paged, there will be additional headers sent, `X-Paginator-Items` and `X-Paginator-Pages`, containing the count for items and pages respectively.

### Sorting

Some endpoints offer result sorting, triggered using the `sort` query parameter. The value of sort is a comma separated list of fields to sort by. You can specify descending sort by prepending `-` to a field. Not all fields can be sorted on. The endpoint documentation will list supported sort options.

### Limited HTTP Clients

If you have issues on your HTTP client to comply with the above specs, you may overcome them by following these alternatives. This should be a last resource - use it with care.

#### HTTP Methods/Actions

You may send an `action` to specify a request method.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345?action=PATCH

#### Params

You may send your params embed in the request.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345?status=A

[](https://www.vendus.co.ao/ws/v1.1/#section/Responses)
Responses
-----------------------------------------------------------------

By default, all responses are JSON encoded. However, depending on the endpoint your are using, other output formats might be available, like XML, CSV, PDF or even others.

### Specifying an output format

To specify an output format, when available, you just need to append it to the endpoint name, like so:

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account.xml
    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/23423.xml
    

### JSON Responses

As stated above, the default for responses is JSON.  
A single resource is represented as a JSON object:

    {
        "id"    => 123,
        "title" => My Title,
        "price"  => 243.56
    }
    

A collection of resources is represented as a JSON array of objects:

    [ \
                {\
                    "id"    => 123,\
                    "title" => "My Title",\
                    "price"  => 243.56\
                },\
                {\
                    "id"    => 124,\
                    "title" => "My New Title",\
                    "price"  => 271.12\
                }\
    ]
    

### HTTP Status Codes

We use HTTP status codes to indicate success or failure of a request.

Success Codes

*   `200 OK` - Request succeeded. Response included
*   `201 Created` - Resource created. URL to new resource in Location header
*   `204 No Content` - Request succeeded, but no response body

Error Codes

*   `400 Bad Request` - Could not parse request
*   `401 Unauthorized` - No authentication credentials provided or authentication failed
*   `403 Forbidden` - Authenticated user does not have access
*   `404 Not Found` - Resource not found
*   `415 Unsupported Media Type` - POST/PUT/PATCH request occurred without a valid content-type header
*   `422 Unprocessable Entry` - A request to modify or create a resource failed due to a validation error
*   `429 Too Many Requests` - Request rejected due to [rate limiting](https://www.vendus.co.ao/ws/v1.1/#section/Overview)
    
*   `500, 501, 502, 503, etc` - An internal server error occured

### Enveloping

If your HTTP client makes it difficult to read status codes or headers, we can package everything neatly into the response body. Just include `envelope=true` as a request parameter and the API will always return a 200 HTTP status code. The real status, headers and response will be within the body.

    GET /api/v1/users/does-not-exist?envelope=true

    200 OK

    
    {
        "status": 404,
        "headers": {
            "Rate-Limit-Limit": 100,
            "Rate-Limit-Remaining": 50,
            "Rate-Limit-Used": 0,
            "Rate-Limit-Reset": 25
        },
        "response": {
            "message": "Not Found"
        }
    }
    

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account)
Account
---------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account/get)
/account/
-------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Account ID |
| company | string<br><br>Company name |
| address | string<br><br>Address |
| postal\_code | string<br><br>Postal code |
| city | string<br><br>City |
| email | string<br><br>Email |
| tax\_id | string<br><br>Default tax rate |
| tax\_exemption | string<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| url | string<br><br>Cegid Vendus domain |
| fiscal\_id | string<br><br>Fiscal ID |
| phone | string<br><br>Phone number |
| conservatory | string<br><br>Conservatory |
| socialcapital | string<br><br>Company Social Capital |
| country | string<br><br>Country |
| show\_selfconsumption\_prices | string<br><br>Show selfconsumption prices |
| locale | object<br><br>Locale |
| irs | object |

**404**

No data

get/account

server

https://www.vendus.co.ao/ws/v1.1/account

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/account/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "company": "My Company Ltd",      *   "address": "Rua Amadeu Sousa cardoso, 123",      *   "postal_code": "4100-057",      *   "city": "Lisbon",      *   "email": "email@domain.pt",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "url": "mycompany.vendus.co.ao",      *   "fiscal_id": "fiscal_id",      *   "phone": "phone",      *   "conservatory": "conservatory",      *   "socialcapital": "socialcapital",      *   "country": "Portugal, Madeira, Açores",      *   "show_selfconsumption_prices": "1",      *   "locale": {          *   "currency": {                  *   "symbol": "&euro;",                      *   "text": "Euro",                      *   "abbr": "Eur",                      *   "position": "-1"                               }                   },      *   "irs": {          *   "incidence_rate": "25",              *   "retention_rate": "11.5"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account~1{id}/get)
/account/{id}
-----------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Account ID |
| company | string<br><br>Company name |
| address | string<br><br>Address |
| postal\_code | string<br><br>Postal code |
| city | string<br><br>City |
| email | string<br><br>Email |
| tax\_id | string<br><br>Default tax rate |
| tax\_exemption | string<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| url | string<br><br>Cegid Vendus domain |
| fiscal\_id | string<br><br>Fiscal ID |
| phone | string<br><br>Phone number |
| conservatory | string<br><br>Conservatory |
| socialcapital | string<br><br>Company Social Capital |
| country | string<br><br>Country |
| show\_selfconsumption\_prices | string<br><br>Show selfconsumption prices |
| locale | object<br><br>Locale |
| irs | object |

**404**

No data

get/account/{id}

server

https://www.vendus.co.ao/ws/v1.1/account/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/account/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "company": "My Company Ltd",      *   "address": "Rua Amadeu Sousa cardoso, 123",      *   "postal_code": "4100-057",      *   "city": "Lisbon",      *   "email": "email@domain.pt",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "url": "mycompany.vendus.co.ao",      *   "fiscal_id": "fiscal_id",      *   "phone": "phone",      *   "conservatory": "conservatory",      *   "socialcapital": "socialcapital",      *   "country": "Portugal, Madeira, Açores",      *   "show_selfconsumption_prices": "1",      *   "locale": {          *   "currency": {                  *   "symbol": "&euro;",                      *   "text": "Euro",                      *   "abbr": "Eur",                      *   "position": "-1"                               }                   },      *   "irs": {          *   "incidence_rate": "25",              *   "retention_rate": "11.5"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account~1{id}/patch)
/account/{id}
-------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| company | string<br><br>Company name |
| address | string<br><br>Address |
| postal\_code | string<br><br>Postal code |
| city | string<br><br>City |
| tax\_id | string<br><br>Enum: "NOR - Taxa Normal" "INT - Taxa Intermédia" "RED - Taxa Reduzida" "ISE - Isento" "OUT - Outros"<br><br>Default tax rate |
| tax\_exemption | string<br><br>Enum: "M01 - M01 - Artigo 16.º, n.º 6 do CIVA ou similar" "M02 - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho" "M03 - M03 - Exigibilidade de caixa (revogado)" "M04 - M04 - Artigo 13.º do CIVA ou similar" "M05 - M05 - Artigo 14.º do CIVA ou similar" "M06 - M06 - Artigo 15.º do CIVA ou similar" "M07 - M07 - Artigo 9.º do CIVA ou similar" "M08 - M08 - IVA - autoliquidação (revogado)" "M09 - M09 - IVA - não confere direito a dedução" "M10 - M10 - IVA - Regime de isenção" "M11 - M11 - Regime particular do tabaco" "M12 - M12 - Regime da margem de lucro - Agências de viagens" "M13 - M13 - Regime da margem de lucro - Bens em segunda mão" "M14 - M14 - Regime da margem de lucro - Objetos de arte" "M15 - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades" "M16 - M16 - Artigo 14.º do RITI ou similar" "M19 - M19 - Outras isenções" "M20 - M20 - IVA - regime forfetário" "M21 - M21 - IVA – não confere direito à dedução" "M25 - M25 - Mercadorias à consignação" "M26 - M26 - Cabaz alimentar (expirado)" "M30 - M30 - IVA - autoliquidação (2.1.i)" "M31 - M31 - IVA - autoliquidação (2.1.j)" "M32 - M32 - IVA - autoliquidação (2.1.l)" "M33 - M33 - IVA - autoliquidação (2.1.m)" "M34 - M34 - IVA - autoliquidação (2.1.n)" "M40 - M40 - IVA - autoliquidação (6.6.a)" "M41 - M41 - IVA - autoliquidação (8.3.R)" "M42 - M42 - IVA - autoliquidação (21.2007)" "M43 - M43 - IVA - autoliquidação (362.99)" "M99 - M99 - Não sujeito; não tributado ou similar"<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| fiscal\_id | string<br><br>Fiscal ID |
| phone | string<br><br>Phone number |
| conservatory | string<br><br>Conservatory |
| socialcapital | string<br><br>Company Social Capital |
| country | string<br><br>Enum: "AO - AO" "PT - PT" "PT-AC - PT-AC" "PT-MA - PT-MA"<br><br>Country |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Account ID |
| company | string<br><br>Company name |
| address | string<br><br>Address |
| postal\_code | string<br><br>Postal code |
| city | string<br><br>City |
| email | string<br><br>Email |
| tax\_id | string<br><br>Default tax rate |
| tax\_exemption | string<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| url | string<br><br>Cegid Vendus domain |
| fiscal\_id | string<br><br>Fiscal ID |
| phone | string<br><br>Phone number |
| conservatory | string<br><br>Conservatory |
| socialcapital | string<br><br>Company Social Capital |
| country | string<br><br>Country |
| show\_selfconsumption\_prices | string<br><br>Show selfconsumption prices |
| locale | object<br><br>Locale |
| irs | object |

**403**

Poorly filled parameters

patch/account/{id}

server

https://www.vendus.co.ao/ws/v1.1/account/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "company": "My Company Ltd",      *   "address": "Rua Amadeu Sousa cardoso, 123",      *   "postal_code": "4100-057",      *   "city": "Lisbon",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "fiscal_id": "fiscal_id",      *   "phone": "phone",      *   "conservatory": "conservatory",      *   "socialcapital": "socialcapital",      *   "country": "Portugal, Madeira, Açores"       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "company": "My Company Ltd",      *   "address": "Rua Amadeu Sousa cardoso, 123",      *   "postal_code": "4100-057",      *   "city": "Lisbon",      *   "email": "email@domain.pt",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "url": "mycompany.vendus.co.ao",      *   "fiscal_id": "fiscal_id",      *   "phone": "phone",      *   "conservatory": "conservatory",      *   "socialcapital": "socialcapital",      *   "country": "Portugal, Madeira, Açores",      *   "show_selfconsumption_prices": "1",      *   "locale": {          *   "currency": {                  *   "symbol": "&euro;",                      *   "text": "Euro",                      *   "abbr": "Eur",                      *   "position": "-1"                               }                   },      *   "irs": {          *   "incidence_rate": "25",              *   "retention_rate": "11.5"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account~1users/get)
/account/users/
--------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| store | integer<br><br>ID |
| exclude\_accountants | string<br><br>Exclude accountants |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| email | string<br><br>Email |
| name | string<br><br>Name |
| timeout | integer<br><br>Time to request password (minutes) |

**404**

No data

get/account/users

server

https://www.vendus.co.ao/ws/v1.1/account/users

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/account/users/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'store' \=> 12345, 
    'exclude\_accountants' \=> 'true', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "email": "email@domain.com",      *   "name": "Fábio Teixeira",      *   "timeout": "5"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account~1users~1{id}/get)
/account/users/{id}
------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| email | string<br><br>Email |
| name | string<br><br>Name |
| timeout | integer<br><br>Time to request password (minutes) |

**404**

No data

get/account/users/{id}

server

https://www.vendus.co.ao/ws/v1.1/account/users/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/account/users/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "email": "email@domain.com",      *   "name": "Fábio Teixeira",      *   "timeout": "5"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Account/paths/~1account~1users~1{id}/patch)
/account/users/{id}
--------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| email | string<br><br>Email |
| name | string<br><br>Name |
| password | string<br><br>Password |
| pin | integer<br><br>Pin to unlock pos (4 characters) |
| timeout | integer<br><br>Time to request password (minutes) |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| email | string<br><br>Email |
| name | string<br><br>Name |
| timeout | integer<br><br>Time to request password (minutes) |

**403**

Poorly filled parameters

patch/account/users/{id}

server

https://www.vendus.co.ao/ws/v1.1/account/users/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "email": "email@domain.com",      *   "name": "Fábio Teixeira",      *   "password": "56!paSsWoRd17",      *   "pin": "1234",      *   "timeout": "5"       }`

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "email": "email@domain.com",      *   "name": "Fábio Teixeira",      *   "timeout": "5"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients)
Clients
---------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients/get)
/clients/
-------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| q   | string<br><br>Search string |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| email | string<br><br>Email |
| external\_reference | string<br><br>External Reference |
| status | string<br><br>Enum: "active - Ativo" "inactive - Inativo"<br><br>Status |
| date | string<br><br>Creation date |
| id  | string<br><br>ID range to search |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| external\_reference | string<br><br>External Reference |
| default\_pay\_due | string<br><br>Default Pay Due |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group | object<br><br>Price Group |
| send\_email | string<br><br>Send Invoice |
| irs\_retention | string<br><br>Whether client does IRS retention |
| status | string<br><br>Status |
| notes | string<br><br>Notes |
| date | string<br><br>Creation date |

**404**

No data

get/clients

server

https://www.vendus.co.ao/ws/v1.1/clients

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/clients/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'q' \=> 'Alberto', 
    'fiscal\_id' \=> '123456789', 
    'name' \=> 'Alberto Caeiro', 
    'email' \=> 'alberto.caeiro@portugal.pt', 
    'external\_reference' \=> 'AB892798/19', 
    'status' \=> 'active', 
    'date' \=> '2025, 2025-07, 2025-07-29', 
    'id' \=> \[\
        'min' \=> 100, \
        'max' \=> 500, \
    \], 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "external_reference": "AB892798/19",      *   "default_pay_due": "15",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group": {          *   "id": "1234",              *   "title": "VIP",              *   "is_default": "yes"                   },      *   "send_email": "yes",      *   "irs_retention": "no",      *   "status": "active",      *   "notes": "notes",      *   "date": "date"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients/post)
/clients/
--------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| fiscal\_id | string<br><br>Fiscal ID of client |
| name | string<br><br>Client Name |
| address | string<br><br>Postal Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City |
| phone | string<br><br>Phone |
| mobile | string<br><br>Mobile |
| external\_reference | string<br><br>External Reference |
| notes | string<br><br>Notes |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group\_id | integer<br><br>Price Group ID |
| send\_email | string<br><br>Enum: "yes - Sim" "no - Não"<br><br>Send Invoice |
| default\_pay\_due | string<br><br>Enum: "now" 1 7 15 30 45 60 90<br><br>Default Pay Due |
| irs\_retention | string<br><br>Enum: "yes - Sim" "no - Não"<br><br>Whether client does IRS retention |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| external\_reference | string<br><br>External Reference |
| default\_pay\_due | string<br><br>Default Pay Due |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group | object<br><br>Price Group |
| send\_email | string<br><br>Send Invoice |
| irs\_retention | string<br><br>Whether client does IRS retention |
| status | string<br><br>Status |
| notes | string<br><br>Notes |
| date | string<br><br>Creation date |
| balance | object<br><br>Balance |

**403**

Poorly filled parameters

post/clients

server

https://www.vendus.co.ao/ws/v1.1/clients

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "fiscal_id": "223098091",      *   "name": "Alberto Lopes",      *   "address": "Av. Sousa Magalhães, 126",      *   "postalcode": "4100-039",      *   "city": "Lisboa",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "external_reference": "AB892798/19",      *   "notes": "notes",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group_id": "123",      *   "send_email": "yes",      *   "default_pay_due": "15",      *   "irs_retention": "no"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "external_reference": "AB892798/19",      *   "default_pay_due": "15",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group": {          *   "id": "1234",              *   "title": "VIP",              *   "is_default": "yes"                   },      *   "send_email": "yes",      *   "irs_retention": "no",      *   "status": "active",      *   "notes": "notes",      *   "date": "date",      *   "balance": {          *   "total": "35.55",              *   "on_time": "20.00",              *   "overdue": "15.55"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}/get)
/clients/{id}
-----------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| external\_reference | string<br><br>External Reference |
| default\_pay\_due | string<br><br>Default Pay Due |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group | object<br><br>Price Group |
| send\_email | string<br><br>Send Invoice |
| irs\_retention | string<br><br>Whether client does IRS retention |
| status | string<br><br>Status |
| notes | string<br><br>Notes |
| date | string<br><br>Creation date |
| balance | object<br><br>Balance |

**404**

No data

get/clients/{id}

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/clients/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'getItem';
$params  \= array(
    'include\_balance' \=> 'no', 

);
$content \= json\_encode($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_POSTFIELDS, $content);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
curl\_setopt($curl, CURLOPT\_HTTPHEADER,
    array(
        "Content-type: application/json",
        "Content-Length: " . strlen($content),
    )
);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "external_reference": "AB892798/19",      *   "default_pay_due": "15",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group": {          *   "id": "1234",              *   "title": "VIP",              *   "is_default": "yes"                   },      *   "send_email": "yes",      *   "irs_retention": "no",      *   "status": "active",      *   "notes": "notes",      *   "date": "date",      *   "balance": {          *   "total": "35.55",              *   "on_time": "20.00",              *   "overdue": "15.55"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}/patch)
/clients/{id}
-------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| fiscal\_id | string<br><br>Fiscal ID of client |
| name | string<br><br>Client Name |
| address | string<br><br>Postal Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City |
| phone | string<br><br>Phone |
| mobile | string<br><br>Mobile |
| external\_reference | string<br><br>External Reference |
| notes | string<br><br>Notes |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group\_id | integer<br><br>Price Group ID |
| send\_email | string<br><br>Enum: "yes - Sim" "no - Não"<br><br>Send Invoice |
| default\_pay\_due | string<br><br>Enum: "now" 1 7 15 30 45 60 90<br><br>Default Pay Due |
| status | string<br><br>Enum: "active - Ativo" "inactive - Inativo"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| external\_reference | string<br><br>External Reference |
| default\_pay\_due | string<br><br>Default Pay Due |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |
| price\_group | object<br><br>Price Group |
| send\_email | string<br><br>Send Invoice |
| irs\_retention | string<br><br>Whether client does IRS retention |
| status | string<br><br>Status |
| notes | string<br><br>Notes |
| date | string<br><br>Creation date |
| balance | object<br><br>Balance |

**403**

Poorly filled parameters

patch/clients/{id}

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "fiscal_id": "223098091",      *   "name": "Alberto Lopes",      *   "address": "Av. Sousa Magalhães, 126",      *   "postalcode": "4100-039",      *   "city": "Lisboa",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "external_reference": "AB892798/19",      *   "notes": "notes",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group_id": "123",      *   "send_email": "yes",      *   "default_pay_due": "15",      *   "status": "active"       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "external_reference": "AB892798/19",      *   "default_pay_due": "15",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT",      *   "price_group": {          *   "id": "1234",              *   "title": "VIP",              *   "is_default": "yes"                   },      *   "send_email": "yes",      *   "irs_retention": "no",      *   "status": "active",      *   "notes": "notes",      *   "date": "date",      *   "balance": {          *   "total": "35.55",              *   "on_time": "20.00",              *   "overdue": "15.55"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}/delete)
/clients/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/clients/{id}

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/clients/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}~1balance/get)
/clients/balance/
------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| since | string<br><br>Min date |
| until | string<br><br>Max date |
| status | string<br><br>Enum: "all" "paid" "unpaid"<br><br>Status |
| aggregate | string<br><br>Enum: "yes" "no"<br><br>Aggregate accounts with same fiscal id |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| number | string<br><br>Document number |
| date | string<br><br>Date |
| store\_id | integer<br><br>Store ID |
| register\_id | integer<br><br>Register ID |
| date\_due | string<br><br>Payment date |
| date\_supply | string<br><br>Delivery Date |
| system\_time | string<br><br>System date and time |
| local\_time | string<br><br>Local date and time |
| amount\_gross | string<br><br>Total amount |
| amount\_net | string<br><br>Total amount before taxes |
| type | string<br><br>Document Type |
| subtype | string<br><br>Document Subtype |
| status | string<br><br>Status |
| qty\_left\_to\_invoice | integer<br><br>Quantity left to invoice |
| total\_unpaid | integer |
| payment\_status | string |
| external\_reference | string<br><br>External reference |
| operation\_type | string<br><br>Operation Type |

**404**

No data

get/clients/{id}/balance

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}/balance

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/clients/balance/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'since' \=> '2025-01-01', 
    'until' \=> '2025-12-31', 
    'status' \=> 'all', 
    'aggregate' \=> 'no', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "number": "FT 01P2016/220",      *   "date": "2016-01-02",      *   "store_id": "12345",      *   "register_id": "12345",      *   "date_due": "2016-01-15",      *   "date_supply": "2016-01-15",      *   "system_time": "2016-01-02 10:01:20",      *   "local_time": "2016-01-02 10:01:20",      *   "amount_gross": "123.00",      *   "amount_net": "100.00",      *   "type": "FT",      *   "subtype": "G",      *   "status": "N",      *   "qty_left_to_invoice": "1",      *   "total_unpaid": "total_unpaid",      *   "payment_status": "payment_status",      *   "external_reference": "PT00192-25-21302",      *   "operation_type": "operation_type"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}~1balance/post)
/clients/balance/
-------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| amount<br><br>required | string<br><br>Amount |
| operation\_type<br><br>required | string<br><br>Enum: "in" "out"<br><br>Operation Type |
| notes<br><br>required | string<br><br>Notes |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| amount | string<br><br>Amount |
| operation\_type | string<br><br>Operation Type |

**403**

Poorly filled parameters

post/clients/{id}/balance

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}/balance

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "id": "12345",      *   "amount": "100",      *   "operation_type": "operation_type",      *   "notes": "notes"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "amount": "100",      *   "operation_type": "operation_type"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Clients/paths/~1clients~1{id}~1resume/get)
/clients/resume/
----------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| aggregate | string<br><br>Enum: "yes" "no"<br><br>Aggregate accounts with same fiscal id |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| balance | string<br><br>Amount |
| balanceWithin | string<br><br>Amount |
| balanceExpired | string<br><br>Amount |

**404**

No data

get/clients/{id}/resume

server

https://www.vendus.co.ao/ws/v1.1/clients/{id}/resume

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/clients/resume/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'aggregate' \=> 'no', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "balance": "23.15",      *   "balanceWithin": "23.15",      *   "balanceExpired": "23.15"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Covenants)
Covenants
-------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Covenants/paths/~1covenants/get)
/covenants/
-------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| search | string<br><br>Search |
| status | string<br><br>Enum: "all" "active" "expired" "disabled"<br><br>Search |
| end\_from | string<br><br>End Date From |
| end\_to | string<br><br>End Date To |
| type | string<br><br>Enum: "monday" "tuesday" "wednesday" "thursday" "friday" "saturday" "sunday" "every\_fifteen\_days" "every\_month" "every\_two\_months" "every\_three\_months" "every\_four\_months" "every\_six\_months" "every\_year"<br><br>Recurrency |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| records | object |
| pages | object |

**404**

No data

get/covenants

server

https://www.vendus.co.ao/ws/v1.1/covenants

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/covenants/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'search' \=> 'VAT, Client id', 
    'status' \=> 'VAT, Client id', 
    'end\_from' \=> '2025-07-29', 
    'end\_to' \=> '2025-07-29', 
    'type' \=> 'Monday, Tuesday, etc...', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "records": { },      *   "pages": { }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Covenants/paths/~1covenants/post)
/covenants/
--------------------------------------------------------------------------------------

Creates a covenant that is scheduled to generate a document on specific days for a client.  

##### Request Body schema: application/json

|     |     |
| --- | --- |
| recurrency\_type | string<br><br>Enum: "monday" "tuesday" "wednesday" "thursday" "friday" "saturday" "sunday" "every\_fifteen\_days" "every\_month" "every\_two\_months" "every\_three\_months" "every\_four\_months" "every\_six\_months" "every\_year"<br><br>Recurrency |
| recurrency\_start\_date | string<br><br>Start date |
| register\_id | integer<br><br>POS ID |
| date\_execution\_end | string<br><br>Start date |
| draft\_data<br><br>required | string<br><br>String |
| type | string<br><br>Enum: "FT - Factura" "FS - Factura Simplificada" "FR - Factura Recibo" "NC - Nota de Crédito" "DC - Consulta de Mesa" "PF - Factura Pró-Forma" "OT - Orçamento" "EC - Encomenda" "GA - Guia de Ativos Próprios" "GT - Guia de Transporte" "GR - Guia de Remessa" "GD - Guia de Devolução" "RG - Recibo"<br><br>Type of document |
| covenant\_id | integer<br><br>Covenant ID |
| status<br><br>required | integer<br><br>Status |
| execute\_times | integer<br><br>Execute times |
| discount\_code | string<br><br>Discount code |
| discount\_amount | string<br><br>Discount in euros |
| discount\_percentage | string<br><br>Discount in percentage |
| date\_due | string<br><br>Due date |
| payments | Array of objects<br><br>Payment Methods |
| mode | string<br><br>Enum: "normal" "tests"<br><br>Working mode |
| date | string<br><br>If not set, defaults to current date. |
| date\_supply | string<br><br>If not set, defaults to current date. |
| notes | string<br><br>Notes |
| ncr\_id | string<br><br>NC reason ID |
| external\_reference | string<br><br>External reference |
| stock\_operation | string<br><br>Enum: "in - Increment stock" "none - Don't change stock" "out - Decrement stock"<br><br>Operation on items with stock\_control. |
| ifthenpay | string<br><br>Enum: "no" "yes"<br><br>Generate ifthenpay reference. |
| eupago | string<br><br>Enum: "no" "yes"<br><br>Generate euPago reference. |
| multibanco | object<br><br>Your own multibanco data. |
| client<br><br>required | object<br><br>Client |
| supplier | object<br><br>Supplier |
| items | Array of objects |
| movement\_of\_goods | object<br><br>Transportation info |
| invoices | Array of objects<br><br>When creating a RG |
| print\_discount | string<br><br>Enum: "yes" "no"<br><br>Print Discount Coupons |
| output | string<br><br>Enum: "pdf" "html" "escpos" "tpasibs"<br><br>Printable Output |
| output\_template\_id | integer<br><br>Template ID |
| tx\_id | string<br><br>Transaction unique identifier. |
| errors\_full | string<br><br>Enum: "no" "yes"<br><br>Whether to return full error info or just error string |
| rest\_room | integer<br><br>ID Room |
| rest\_table | integer<br><br>ID Table |
| occupation | integer<br><br>Occupation |
| stamp\_retention\_amount | string<br><br>Amount in euros |
| irc\_retention\_id | string<br><br>IRC ID |
| related\_document\_id | integer<br><br>ID of a document that relates to this one |
| return\_qrcode | integer<br><br>Return SVG Qrcode |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| is\_update | string |

**403**

Poorly filled parameters

post/covenants

server

https://www.vendus.co.ao/ws/v1.1/covenants

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "recurrency_type": "Monday, Tuesday, etc...",      *   "recurrency_start_date": "2025-07-29",      *   "register_id": "12345",      *   "date_execution_end": "2025-07-29",      *   "draft_data": "...",      *   "type": "type",      *   "covenant_id": "12345",      *   "status": "1 or 0",      *   "execute_times": "1",      *   "discount_code": "23-180523-7",      *   "discount_amount": "10.00",      *   "discount_percentage": "2.50",      *   "date_due": "2025-12-31",      *   "payments": [          *   {                  *   "id": "1234",                      *   "amount": "100.00",                      *   "date_due": "2025-12-31"                               }                   ],      *   "mode": "normal",      *   "date": "2025-07-29",      *   "date_supply": "2025-07-29",      *   "notes": "New season",      *   "ncr_id": "Specific to CV",      *   "external_reference": "PT00192-2025-21302",      *   "stock_operation": "out",      *   "ifthenpay": "no",      *   "eupago": "no",      *   "multibanco": {          *   "entity": "10022",              *   "reference": "222333444",              *   "amount": "22.53"                   },      *   "client": {          *   "id": "12345",              *   "fiscal_id": "223098091",              *   "name": "Alberto Lopes",              *   "address": "Av. Sousa Magalhães, 126",              *   "postalcode": "4100-039",              *   "city": "Lisboa",              *   "phone": "210 192 930",              *   "mobile": "918 876 546",              *   "email": "alberto.lopes@dominio.pt",              *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)         ",              *   "notes": "VIP client",              *   "country": "PT",              *   "external_reference": "AB892798/19",              *   "send_email": "yes",              *   "billing_email": "alberto.lopes.contabilista@dominio.pt",              *   "irs_retention": "no"                   },      *   "supplier": {          *   "id": "12345",              *   "fiscal_id": "223098091",              *   "name": "Alberto Lopes",              *   "address": "Av. Sousa Magalhães, 126",              *   "postalcode": "4100-039",              *   "city": "Lisboa",              *   "phone": "210 192 930",              *   "mobile": "918 876 546",              *   "email": "alberto.lopes@dominio.pt",              *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)         ",              *   "country": "PT",              *   "obs": "Some info about supplier"                   },      *   "items": [          *   {                  *   "id": "12345",                      *   "reference": "CAFK001",                      *   "gross_price": "12345",                      *   "supply_price": "12345",                      *   "qty": "3.530",                      *   "type_id": "P",                      *   "variant_id": "12345",                      *   "title": "Café ao Kg",                      *   "unit_id": "1872",                      *   "category_id": "123",                      *   "brand_id": "124",                      *   "discount_amount": "124",                      *   "discount_percentage": "5",                      *   "stock_control": "1",                      *   "stock_type": "M",                      *   "tax_id": "tax_id",                      *   "tax_exemption": "M40",                      *   "tax_exemption_law": "Artigo 13.º do CIVA",                      *   "tax_custom": {                          *   "country": "PT, ES, FR, PT-AC",                              *   "rate": "23",                              *   "code": "NOR, INT, RED, NS, ...",                              *   "type": "type"                                           },                      *   "reference_document": {                          *   "document_number": "FT 01P2016/220",                              *   "document_row": "3",                              *   "reference_id": "1234",                              *   "reference_relation": "GG"                                           },                      *   "text": "New Edition",                      *   "serial": "87393872983792"                               }                   ],      *   "movement_of_goods": {          *   "vehicle_id": "00-AB-00",              *   "show_prices": "yes",              *   "loadpoint": {                  *   "date": "2016-10-01",                      *   "time": "10:05",                      *   "address": "Rua Amadeu Sousa Cardoso, 13",                      *   "postalcode": "4100-423",                      *   "city": "Porto",                      *   "country": "PT",                      *   "store_id": "1234",                      *   "changestock": "out"                               },              *   "landpoint": {                  *   "is_global": "no",                      *   "date": "2016-10-02",                      *   "time": "09:15",                      *   "address": "Rua Almada Negreiros, 98",                      *   "postalcode": "1100-123",                      *   "city": "Lisboa",                      *   "country": "PT",                      *   "store_id": "1234",                      *   "receivestock": "yes"                               }                   },      *   "invoices": [          *   {                  *   "document_number": "FT 01P2016/28"                               }                   ],      *   "print_discount": "no",      *   "output": "html",      *   "output_template_id": "123",      *   "tx_id": "123",      *   "errors_full": "no",      *   "rest_room": "12345",      *   "rest_table": "12345",      *   "occupation": "2",      *   "stamp_retention_amount": "100.00",      *   "irc_retention_id": "a",      *   "related_document_id": "12345",      *   "return_qrcode": "1 or 0"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "is_update": "is_update"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Covenants/paths/~1covenants~1{id}/delete)
/covenants/{id}
--------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/covenants/{id}

server

https://www.vendus.co.ao/ws/v1.1/covenants/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/covenants/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Delivery)
Delivery
-----------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Delivery/paths/~1delivery/get)
/delivery/
----------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| type | string<br><br>Enum: "table" "delivery" "takeaway" "pickup"<br><br>Type |
| status | string<br><br>Status - You may send a comma separated string with multiple status. received, pending, cooking, waiting\_to\_delivery, delivered, canceled |
| kitchen\_id | integer<br><br>Kitchen ID |
| order\_id | string<br><br>Order ID |
| reference | string<br><br>Reference |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Delivery ID |
| saas\_id | integer<br><br>Saas ID |
| user\_id | integer<br><br>User ID |
| order\_id | string<br><br>Order ID |
| reference | integer<br><br>Reference |
| store\_id | integer<br><br>Store ID |
| table\_id | integer<br><br>Table ID |
| table | object<br><br>Table Data |
| kitchen\_id | integer<br><br>Kitchen ID |
| type | string<br><br>Type |
| source | string<br><br>Source |
| status | string<br><br>Status |
| items | Array of objects<br><br>Items Data |
| extra\_info | string<br><br>Extra Info |
| date\_create | string<br><br>Date Create |
| date\_update | string<br><br>Date Last Update |
| date\_schedule | string<br><br>Date Schedule |

**404**

No data

get/delivery

server

https://www.vendus.co.ao/ws/v1.1/delivery

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/delivery/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'type' \=> 'takeaway', 
    'status' \=> 'cooking', 
    'kitchen\_id' \=> 1234, 
    'order\_id' \=> '1234', 
    'reference' \=> '1234', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "saas_id": "saas_id",      *   "user_id": "user_id",      *   "order_id": "order_id",      *   "reference": "reference",      *   "store_id": "1234",      *   "table_id": "1234",      *   "table": {          *   "id": "1234",              *   "title": "Mesa 1234"                   },      *   "kitchen_id": "1234",      *   "type": "table",      *   "source": "api",      *   "status": "cooking",      *   "items": [          *   { }                   ],      *   "extra_info": "extra_info",      *   "date_create": "date_create",      *   "date_update": "date_update",      *   "date_schedule": "date_schedule"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Delivery/paths/~1delivery/post)
/delivery/
-----------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| table\_id | integer<br><br>Table ID |
| type | string<br><br>Enum: "table" "delivery" "takeaway" "pickup"<br><br>Type |
| status | string<br><br>Enum: "received" "pending" "cooking" "waiting\_to\_delivery" "delivered" "canceled"<br><br>Status |
| source | string<br><br>Enum: "office" "pos" "vendusgo" "api" "deliverect" "flipdish"<br><br>Source |
| order\_id | string<br><br>Order id |
| reference | string<br><br>Reference |
| items<br><br>required | Array of objects |
| date\_schedule | string<br><br>Date Schedule |
| extra\_info | string |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Delivery ID |
| saas\_id | integer<br><br>Saas ID |
| user\_id | integer<br><br>User ID |
| order\_id | string<br><br>Order ID |
| reference | integer<br><br>Reference |
| store\_id | integer<br><br>Store ID |
| table\_id | integer<br><br>Table ID |
| table | object<br><br>Table Data |
| kitchen\_id | integer<br><br>Kitchen ID |
| type | string<br><br>Type |
| source | string<br><br>Source |
| status | string<br><br>Status |
| items | Array of objects<br><br>Items Data |
| extra\_info | string<br><br>Extra Info |
| date\_create | string<br><br>Date Create |
| date\_update | string<br><br>Date Last Update |
| date\_schedule | string<br><br>Date Schedule |

**403**

Poorly filled parameters

post/delivery

server

https://www.vendus.co.ao/ws/v1.1/delivery

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "table_id": "table_id",      *   "type": "type",      *   "status": "status",      *   "source": "source",      *   "order_id": "order_id",      *   "reference": "reference",      *   "items": [          *   {                  *   "id": "12345",                      *   "reference": "CAFK001",                      *   "qty": "3.530",                      *   "price": "5",                      *   "text": "Bife mal passado",                      *   "notes": "notes",                      *   "modifiers": "modifiers"                               }                   ],      *   "date_schedule": "date_schedule",      *   "extra_info": "extra_info"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "saas_id": "saas_id",      *   "user_id": "user_id",      *   "order_id": "order_id",      *   "reference": "reference",      *   "store_id": "1234",      *   "table_id": "1234",      *   "table": {          *   "id": "1234",              *   "title": "Mesa 1234"                   },      *   "kitchen_id": "1234",      *   "type": "table",      *   "source": "api",      *   "status": "cooking",      *   "items": [          *   { }                   ],      *   "extra_info": "extra_info",      *   "date_create": "date_create",      *   "date_update": "date_update",      *   "date_schedule": "date_schedule"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Delivery/paths/~1delivery~1{id}/get)
/delivery/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Delivery ID |
| saas\_id | integer<br><br>Saas ID |
| user\_id | integer<br><br>User ID |
| order\_id | string<br><br>Order ID |
| reference | integer<br><br>Reference |
| store\_id | integer<br><br>Store ID |
| table\_id | integer<br><br>Table ID |
| table | object<br><br>Table Data |
| kitchen\_id | integer<br><br>Kitchen ID |
| type | string<br><br>Type |
| source | string<br><br>Source |
| status | string<br><br>Status |
| items | Array of objects<br><br>Items Data |
| extra\_info | string<br><br>Extra Info |
| date\_create | string<br><br>Date Create |
| date\_update | string<br><br>Date Last Update |
| date\_schedule | string<br><br>Date Schedule |

**404**

No data

get/delivery/{id}

server

https://www.vendus.co.ao/ws/v1.1/delivery/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/delivery/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "saas_id": "saas_id",      *   "user_id": "user_id",      *   "order_id": "order_id",      *   "reference": "reference",      *   "store_id": "1234",      *   "table_id": "1234",      *   "table": {          *   "id": "1234",              *   "title": "Mesa 1234"                   },      *   "kitchen_id": "1234",      *   "type": "table",      *   "source": "api",      *   "status": "cooking",      *   "items": [          *   { }                   ],      *   "extra_info": "extra_info",      *   "date_create": "date_create",      *   "date_update": "date_update",      *   "date_schedule": "date_schedule"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Delivery/paths/~1delivery~1{id}/patch)
/delivery/{id}
----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| status | string<br><br>Enum: "received" "pending" "cooking" "waiting\_to\_delivery" "delivered" "canceled"<br><br>Status |
| update\_hook | integer<br><br>Enum: "0 - 0" 1<br><br>Emit event to update source |
| extra\_info | string<br><br>Extra Info |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Delivery ID |
| saas\_id | integer<br><br>Saas ID |
| user\_id | integer<br><br>User ID |
| order\_id | string<br><br>Order ID |
| reference | integer<br><br>Reference |
| store\_id | integer<br><br>Store ID |
| table\_id | integer<br><br>Table ID |
| table | object<br><br>Table Data |
| kitchen\_id | integer<br><br>Kitchen ID |
| type | string<br><br>Type |
| source | string<br><br>Source |
| status | string<br><br>Status |
| items | Array of objects<br><br>Items Data |
| extra\_info | string<br><br>Extra Info |
| date\_create | string<br><br>Date Create |
| date\_update | string<br><br>Date Last Update |
| date\_schedule | string<br><br>Date Schedule |

**403**

Poorly filled parameters

patch/delivery/{id}

server

https://www.vendus.co.ao/ws/v1.1/delivery/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "status": "status",      *   "update_hook": "update_hook",      *   "extra_info": "extra_info"       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "saas_id": "saas_id",      *   "user_id": "user_id",      *   "order_id": "order_id",      *   "reference": "reference",      *   "store_id": "1234",      *   "table_id": "1234",      *   "table": {          *   "id": "1234",              *   "title": "Mesa 1234"                   },      *   "kitchen_id": "1234",      *   "type": "table",      *   "source": "api",      *   "status": "cooking",      *   "items": [          *   { }                   ],      *   "extra_info": "extra_info",      *   "date_create": "date_create",      *   "date_update": "date_update",      *   "date_schedule": "date_schedule"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Discountcards)
Discountcards
---------------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Discountcards/paths/~1discountcards/get)
/discountcards/
-------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| code | string<br><br>Code |
| status | string<br><br>Enum: "pending" "done"<br><br>Status |
| category | integer<br><br>Category ID |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Register ID |
| code | string<br><br>Code |
| amount | integer<br><br>Title |
| type | string<br><br>Type |
| status | string<br><br>Status |
| category | object<br><br>Category |
| date | string<br><br>Data Create |
| date\_expire | string<br><br>Expiration Date |
| obs | string<br><br>Observations |
| date\_used | string<br><br>Date Used |

**404**

No data

get/discountcards

server

https://www.vendus.co.ao/ws/v1.1/discountcards

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/discountcards/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'code' \=> '1-123456/AB', 
    'status' \=> 'done', 
    'category' \=> 1234, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "code": "1-123456/AB",      *   "amount": "10",      *   "type": "money",      *   "status": "pending",      *   "category": {          *   "id": "id",              *   "title": "Café"                   },      *   "date": "date",      *   "date_expire": "date_expire",      *   "obs": "obs",      *   "date_used": "date_used"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Discountcards/paths/~1discountcards/post)
/discountcards/
--------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| code | string<br><br>Status |
| category | integer<br><br>Category ID |
| type | string<br><br>Enum: "money" "percent"<br><br>Type |
| amount | integer<br><br>Amount |
| date\_expire | string<br><br>Date Expire |
| obs | string<br><br>Observations |
| output | string<br><br>Enum: "html" "pdf" "escpos"<br><br>Output |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Register ID |
| code | string<br><br>Code |
| amount | integer<br><br>Title |
| type | string<br><br>Type |
| status | string<br><br>Status |
| category | object<br><br>Category |
| date | string<br><br>Data Create |
| date\_expire | string<br><br>Expiration Date |
| obs | string<br><br>Observations |
| date\_used | string<br><br>Date Used |
| output | string<br><br>Base64 Encoded |

**403**

Poorly filled parameters

post/discountcards

server

https://www.vendus.co.ao/ws/v1.1/discountcards

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "code": "1-123456/AB",      *   "category": "1234",      *   "type": "money",      *   "amount": "10",      *   "date_expire": "date_expire",      *   "obs": "obs",      *   "output": "output"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "code": "1-123456/AB",      *   "amount": "10",      *   "type": "money",      *   "status": "pending",      *   "category": {          *   "id": "id",              *   "title": "Café"                   },      *   "date": "date",      *   "date_expire": "date_expire",      *   "obs": "obs",      *   "date_used": "date_used",      *   "output": "Printable output"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Discountcards/paths/~1discountcards~1{id}/get)
/discountcards/{id}
-----------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Register ID |
| code | string<br><br>Code |
| amount | integer<br><br>Title |
| type | string<br><br>Type |
| status | string<br><br>Status |
| category | object<br><br>Category |
| date | string<br><br>Data Create |
| date\_expire | string<br><br>Expiration Date |
| obs | string<br><br>Observations |
| date\_used | string<br><br>Date Used |

**404**

No data

get/discountcards/{id}

server

https://www.vendus.co.ao/ws/v1.1/discountcards/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/discountcards/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "code": "1-123456/AB",      *   "amount": "10",      *   "type": "money",      *   "status": "pending",      *   "category": {          *   "id": "id",              *   "title": "Café"                   },      *   "date": "date",      *   "date_expire": "date_expire",      *   "obs": "obs",      *   "date_used": "date_used"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents)
Documents
-------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents/get)
/documents/
-------------------------------------------------------------------------------------

Returns a list of existing documents that may be filtered using `store_id`, `register_id`, `type` and date (using `since` and `until`). Please take a look at the [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 page of this documentation to learn how to use pagination parameters.

##### query Parameters

|     |     |
| --- | --- |
| store\_id | integer<br><br>Store ID |
| register\_id | integer<br><br>Register ID |
| client\_id | integer<br><br>Client ID |
| client\_fiscal\_id | string<br><br>Client Fiscal ID |
| client\_country | string<br><br>Client Country |
| type | string<br><br>Valid Document Type |
| subtype | string<br><br>Document Sub Type |
| since | string<br><br>Min date |
| until | string<br><br>Max date |
| q   | string<br><br>Search string |
| external\_reference | string<br><br>Search string |
| status | string<br><br>Enum: "N - Normal" "A - Canceled" "F - Invoiced"<br><br>Status |
| view | string<br><br>Enum: "normal" "detailed"<br><br>More details of the documents |
| mode | string<br><br>Enum: "normal" "tests"<br><br>Working mode |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| number | string<br><br>Document number |
| date | string<br><br>Date |
| store\_id | integer<br><br>Store ID |
| register\_id | integer<br><br>Register ID |
| date\_due | string<br><br>Payment date |
| date\_supply | string<br><br>Delivery Date |
| system\_time | string<br><br>System date and time |
| local\_time | string<br><br>Local date and time |
| amount\_gross | string<br><br>Total amount |
| amount\_net | string<br><br>Total amount before taxes |
| type | string<br><br>Document Type |
| subtype | string<br><br>Document Subtype |
| tax\_authority\_id | string<br><br>Tax Authority ID |
| status | string<br><br>Status |
| qty\_left\_to\_invoice | integer<br><br>Quantity left to invoice |
| total\_unpaid | integer |
| payment\_status | string<br><br>Payment Status |
| external\_reference | string<br><br>External reference |

**404**

No data

get/documents

server

https://www.vendus.co.ao/ws/v1.1/documents

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/documents/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'store\_id' \=> 123456, 
    'register\_id' \=> 1234567, 
    'client\_id' \=> 1234567, 
    'client\_fiscal\_id' \=> '123456789', 
    'client\_country' \=> 'PT', 
    'type' \=> 'FT', 
    'subtype' \=> 'G', 
    'since' \=> '2025-01-01', 
    'until' \=> '2025-12-31', 
    'q' \=> '01P2025/133', 
    'external\_reference' \=> 'SSO00092/133', 
    'status' \=> 'N', 
    'view' \=> 'normal', 
    'mode' \=> 'normal', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "number": "FT 01P2016/220",      *   "date": "2016-01-02",      *   "store_id": "12345",      *   "register_id": "12345",      *   "date_due": "2016-01-15",      *   "date_supply": "2016-01-15",      *   "system_time": "2016-01-02 10:01:20",      *   "local_time": "2016-01-02 10:01:20",      *   "amount_gross": "123.00",      *   "amount_net": "100.00",      *   "type": "FT",      *   "subtype": "G",      *   "tax_authority_id": "10000708560",      *   "status": "N",      *   "qty_left_to_invoice": "1",      *   "total_unpaid": "total_unpaid",      *   "payment_status": "pending",      *   "external_reference": "PT00192-25-21302"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents/post)
/documents/
--------------------------------------------------------------------------------------

Creates a new document like an invoice, a credit note, a receipt for a payment, a transportation document, and all others.  
  
**Invoices**  
The only mandatory parameter when creating an invoice is `items`. For each item, you must send at least its `qty`, along with `id` (or `reference`). If it is a new product, it will be created. Regarding `client`, you don't have to send this parameter if you don't have his `fiscal_id`, and you should NEVER send `fiscal_id` as 999999990. And if `client` does not exist, it will be added.  
  
**Credit Notes**  
When creating a NC, you must specify `reference_document` for each item, passing `document_number` and `document_row` which unequivocally identifies an existing line on the original invoice, along with `id` and `qty`. You also have to specify notes stating the reason for issuing the credit note.  
  
**Payments and Receipts**  
To register a customer's payment, you create a receipt, that is, a document of type `RG`. Relevant parameters are `payments` and `invoices`, which should contain a list of all invoices being paid, each identified by its `document_number`. You should NOT send `items`.

##### Request Body schema: application/json

|     |     |
| --- | --- |
| register\_id | integer<br><br>POS ID |
| type | string<br><br>Enum: "FT - Factura" "FS - Factura Simplificada" "FR - Factura Recibo" "NC - Nota de Crédito" "DC - Consulta de Mesa" "PF - Factura Pró-Forma" "OT - Orçamento" "EC - Encomenda" "GA - Guia de Ativos Próprios" "GT - Guia de Transporte" "GR - Guia de Remessa" "GD - Guia de Devolução" "RG - Recibo"<br><br>Type of document |
| discount\_code | string<br><br>Discount code |
| discount\_amount | string<br><br>Discount in euros |
| discount\_percentage | string<br><br>Discount in percentage |
| date\_due | string<br><br>Due date |
| payments | Array of objects<br><br>Payment Methods |
| mode | string<br><br>Enum: "normal" "tests"<br><br>Working mode |
| date | string<br><br>If not set, defaults to current date. |
| date\_supply | string<br><br>If not set, defaults to current date. |
| notes | string<br><br>Notes |
| ncr\_id | string<br><br>NC reason ID |
| external\_reference | string<br><br>External reference |
| stock\_operation | string<br><br>Enum: "in - Increment stock" "none - Don't change stock" "out - Decrement stock"<br><br>Operation on items with stock\_control. |
| ifthenpay | string<br><br>Enum: "no" "yes"<br><br>Generate ifthenpay reference. |
| eupago | string<br><br>Enum: "no" "yes"<br><br>Generate euPago reference. |
| multibanco | object<br><br>Your own multibanco data. |
| client | object<br><br>Client |
| supplier | object<br><br>Supplier |
| items | Array of objects |
| movement\_of\_goods | object<br><br>Transportation info |
| invoices | Array of objects<br><br>When creating a RG |
| print\_discount | string<br><br>Enum: "yes" "no"<br><br>Print Discount Coupons |
| output | string<br><br>Enum: "auto" "pdf\_url" "pdf" "html" "escpos" "tpasibs"<br><br>Printable Output |
| output\_template\_id | integer<br><br>Template ID |
| tx\_id | string<br><br>Transaction unique identifier. |
| errors\_full | string<br><br>Enum: "no" "yes"<br><br>Whether to return full error info or just error string |
| rest\_room | integer<br><br>ID Room |
| rest\_table | integer<br><br>ID Table |
| occupation | integer<br><br>Occupation |
| stamp\_retention\_amount | string<br><br>Amount in euros |
| irc\_retention\_id | string<br><br>IRC ID |
| mgmAmount | string<br><br>MGM Club ID |
| related\_document\_id | integer<br><br>ID of a document that relates to this one |
| return\_qrcode | integer<br><br>Return SVG Qrcode |
| doc\_to\_generate | string<br><br>Enum: "FT" "FR"<br><br>Type of document to generate when RG or OT is paid |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| type | string<br><br>Official type |
| subtype | string<br><br>Document Subtype |
| tax\_authority\_id | string<br><br>Tax Authority ID |
| number | string<br><br>Document Number |
| date | string<br><br>Date |
| date\_supply | string<br><br>Date |
| system\_time | string<br><br>System date and time |
| local\_time | string<br><br>Local date and time |
| amount\_gross | string<br><br>Total amount after taxes |
| amount\_net | string<br><br>Total amount before taxes |
| hash | string<br><br>Validation hash |
| atcud | string<br><br>ATCUD |
| output | string<br><br>Printable output |
| output\_data | string<br><br>Printable output data |
| qrcode | string<br><br>Qrcode SVG |
| qrcode\_data | string<br><br>Qrcode Data |

**403**

Poorly filled parameters

post/documents

server

https://www.vendus.co.ao/ws/v1.1/documents

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "register_id": "12345",      *   "type": "type",      *   "discount_code": "23-180523-7",      *   "discount_amount": "10.00",      *   "discount_percentage": "2.50",      *   "date_due": "2025-12-31",      *   "payments": [          *   {                  *   "id": "1234",                      *   "amount": "100.00",                      *   "date_due": "2025-12-31"                               }                   ],      *   "mode": "normal",      *   "date": "2025-07-29",      *   "date_supply": "2025-07-29",      *   "notes": "New season",      *   "ncr_id": "Specific to CV",      *   "external_reference": "PT00192-2025-21302",      *   "stock_operation": "out",      *   "ifthenpay": "no",      *   "eupago": "no",      *   "multibanco": {          *   "entity": "10022",              *   "reference": "222333444",              *   "amount": "22.53"                   },      *   "client": {          *   "id": "12345",              *   "fiscal_id": "223098091",              *   "name": "Alberto Lopes",              *   "address": "Av. Sousa Magalhães, 126",              *   "postalcode": "4100-039",              *   "city": "Lisboa",              *   "phone": "210 192 930",              *   "mobile": "918 876 546",              *   "email": "alberto.lopes@dominio.pt",              *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)         ",              *   "notes": "VIP client",              *   "country": "PT",              *   "external_reference": "AB892798/19",              *   "send_email": "yes",              *   "billing_email": "alberto.lopes.contabilista@dominio.pt",              *   "irs_retention": "no"                   },      *   "supplier": {          *   "id": "12345",              *   "fiscal_id": "223098091",              *   "name": "Alberto Lopes",              *   "address": "Av. Sousa Magalhães, 126",              *   "postalcode": "4100-039",              *   "city": "Lisboa",              *   "phone": "210 192 930",              *   "mobile": "918 876 546",              *   "email": "alberto.lopes@dominio.pt",              *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)         ",              *   "country": "PT",              *   "obs": "Some info about supplier"                   },      *   "items": [          *   {                  *   "id": "12345",                      *   "reference": "CAFK001",                      *   "gross_price": "12345",                      *   "supply_price": "12345",                      *   "qty": "3.530",                      *   "type_id": "P",                      *   "variant_id": "12345",                      *   "lot_id": "12345",                      *   "title": "Café ao Kg",                      *   "unit_id": "1872",                      *   "category_id": "123",                      *   "brand_id": "124",                      *   "discount_amount": "124",                      *   "discount_percentage": "5",                      *   "stock_control": "1",                      *   "stock_type": "M",                      *   "tax_id": "tax_id",                      *   "tax_exemption": "M40",                      *   "tax_exemption_law": "Artigo 13.º do CIVA",                      *   "tax_custom": {                          *   "country": "PT, ES, FR, PT-AC",                              *   "rate": "23",                              *   "code": "NOR, INT, RED, NS, ...",                              *   "type": "type"                                           },                      *   "reference_document": {                          *   "document_number": "FT 01P2016/220",                              *   "document_row": "3",                              *   "reference_id": "1234",                              *   "reference_relation": "GG"                                           },                      *   "text": "New Edition",                      *   "serial": "87393872983792"                               }                   ],      *   "movement_of_goods": {          *   "vehicle_id": "00-AB-00",              *   "show_prices": "yes",              *   "loadpoint": {                  *   "date": "2016-10-01",                      *   "time": "10:05",                      *   "address": "Rua Amadeu Sousa Cardoso, 13",                      *   "postalcode": "4100-423",                      *   "city": "Porto",                      *   "country": "PT",                      *   "store_id": "1234",                      *   "changestock": "out"                               },              *   "landpoint": {                  *   "is_global": "no",                      *   "date": "2016-10-02",                      *   "time": "09:15",                      *   "address": "Rua Almada Negreiros, 98",                      *   "postalcode": "1100-123",                      *   "city": "Lisboa",                      *   "country": "PT",                      *   "store_id": "1234",                      *   "receivestock": "yes"                               }                   },      *   "invoices": [          *   {                  *   "document_number": "FT 01P2016/28"                               }                   ],      *   "print_discount": "no",      *   "output": "html",      *   "output_template_id": "123",      *   "tx_id": "123",      *   "errors_full": "no",      *   "rest_room": "12345",      *   "rest_table": "12345",      *   "occupation": "2",      *   "stamp_retention_amount": "100.00",      *   "irc_retention_id": "a",      *   "mgmAmount": "12345",      *   "related_document_id": "12345",      *   "return_qrcode": "1 or 0",      *   "doc_to_generate": "doc_to_generate"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "type": "FT",      *   "subtype": "G",      *   "tax_authority_id": "10000708560",      *   "number": "FT 01P2016/220",      *   "date": "2016-01-02",      *   "date_supply": "2016-01-02",      *   "system_time": "2016-01-02 10:01:20",      *   "local_time": "2016-01-02 10:01:20",      *   "amount_gross": "123",      *   "amount_net": "100.00",      *   "hash": "Bgah",      *   "atcud": "JFAAAAAA-123",      *   "output": "output",      *   "output_data": "output_data",      *   "qrcode": "qrcode",      *   "qrcode_data": "qrcode_data"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1{id}/get)
/documents/{id}
-----------------------------------------------------------------------------------------------

Returns all information about a specific document. To obtain a pdf version, just add `.pdf` extension to the document's id.

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| type | string<br><br>Official type |
| subtype | string<br><br>Document Subtype |
| tax\_authority\_id | string<br><br>Tax Authority ID |
| number | string<br><br>Document Number |
| date | string<br><br>Date |
| date\_supply | string<br><br>Date |
| system\_time | string<br><br>System date and time |
| local\_time | string<br><br>Local date and time |
| amount\_gross | string<br><br>Total amount after taxes |
| amount\_net | string<br><br>Total amount before taxes |
| date\_due | string<br><br>Due date |
| observations | string<br><br>Notes |
| external\_reference | string<br><br>External reference |
| has\_travel\_tax\_free | string<br><br>Has travel tax free |
| store\_id | integer<br><br>Store ID |
| register\_id | integer<br><br>Register ID |
| user\_id | integer<br><br>User ID |
| taxes | Array of objects<br><br>Taxes list |
| discounts | object |
| payments | Array of objects<br><br>Payment methods |
| client | object |
| items | Array of objects<br><br>Products |
| qty\_left\_to\_invoice | integer<br><br>Quantity left to invoice |
| status | object<br><br>Status |
| debt | object<br><br>Debt amount |
| irs | object<br><br>IRS data |
| movement\_of\_goods | object<br><br>Transportation info |
| related\_docs | Array of objects<br><br>Related documents |
| hash | string<br><br>Validation hash |
| atcud | string<br><br>ATCUD |
| output | string<br><br>Printable output |
| output\_data | string<br><br>Printable output data |
| qrcode | string<br><br>Qrcode SVG |
| qrcode\_data | string<br><br>Qrcode Data |
| multibanco | object<br><br>Your own multibanco data. |
| venduspay | object<br><br>Vendus Pay Smart Checkout Page |

**404**

No data

get/documents/{id}

server

https://www.vendus.co.ao/ws/v1.1/documents/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/documents/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'getItem';
$params  \= array(
    'mode' \=> 'normal', 
    'copies' \=> 1, 
    'output' \=> 'html', 
    'output\_template\_id' \=> 123, 
    'output\_version' \=> 'ORIGINAL', 
    'return\_qrcode' \=> 1 or 0, 
    'download' \=> 1 or 0, 
    'force\_template' \=> 'true or false', 
    'register\_id' \=> 12345, 

);
$content \= json\_encode($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_POSTFIELDS, $content);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
curl\_setopt($curl, CURLOPT\_HTTPHEADER,
    array(
        "Content-type: application/json",
        "Content-Length: " . strlen($content),
    )
);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "type": "FT",      *   "subtype": "G",      *   "tax_authority_id": "10000708560",      *   "number": "FT 01P2016/220",      *   "date": "2016-01-02",      *   "date_supply": "2016-01-02",      *   "system_time": "2016-01-02 10:01:20",      *   "local_time": "2016-01-02 10:01:20",      *   "amount_gross": "123",      *   "amount_net": "100.00",      *   "date_due": "2016-01-15",      *   "observations": "Versão vermelha",      *   "external_reference": "PT00192-2025-21302",      *   "has_travel_tax_free": "true",      *   "store_id": "12345",      *   "register_id": "12345",      *   "user_id": "12345",      *   "taxes": [          *   {                  *   "total": "123.00",                      *   "base": "100.00",                      *   "amount": "23.00",                      *   "rate": 23                               }                   ],      *   "discounts": {          *   "amount": "45",              *   "percentage": "5",              *   "total": "13.23"                   },      *   "payments": [          *   {                  *   "id": "100",                      *   "title": "Dinheiro",                      *   "amount": "100",                      *   "change": "37.00"                               }                   ],      *   "client": {          *   "id": "12345",              *   "name": "Alberto Lopes",              *   "fiscal_id": "123456789",              *   "address": "Rua Amadeu Sousa Cardoso, 120, 3E",              *   "postalcode": "4100-251",              *   "city": "Porto",              *   "country": "PT",              *   "country_name": "Portugal",              *   "email": "alberto.lopes@dominio.pt",              *   "external_reference": "AB892798/19",              *   "is_tax_free_valid": true                   },      *   "items": [          *   {                  *   "id": "12345",                      *   "qty": "3.530",                      *   "type_id": "P",                      *   "title": "Café ao Kg",                      *   "reference": "CAFK001",                      *   "text": "New Edition",                      *   "serial": "907298237982393",                      *   "reference_document": "GT 12P2017/22",                      *   "stock_control": "1 or 0",                      *   "amounts": [                          *   {                                  *   "net_unit": "100",                                      *   "net_total": "300",                                      *   "gross_unit": "123",                                      *   "gross_total": "100"                                                       }                                           ],                      *   "discounts": [                          *   {                                  *   "amount": "20",                                      *   "percentage": "5",                                      *   "calculated_percentage": "25"                                                       }                                           ],                      *   "tax": {                          *   "id": "NOR",                              *   "country": "PT",                              *   "rate": "23",                              *   "exemption": "M40",                              *   "exemption_law": "Artigo 13.º do CIVA"                                           },                      *   "category_id": "12345",                      *   "brand_id": "12345",                      *   "qty_left_to_invoice": "1",                      *   "qty_nc": "1"                               }                   ],      *   "qty_left_to_invoice": "1",      *   "status": {          *   "id": "N",              *   "date": "2016-10-10",              *   "user_id": "12345"                   },      *   "debt": {          *   "total": "10.28",              *   "paid": "3.10",              *   "unpaid": "7.18"                   },      *   "irs": {          *   "amount": "10.28",              *   "rate": "0.115",              *   "description": "Art. 101.º, n.ºs 1 e 9, do CIRS. Art. 101.º, n.º1, do CIRS"                   },      *   "movement_of_goods": {          *   "licence_plate": "00-AB-00",              *   "at_code": "1223234",              *   "show_prices": "yes",              *   "loadpoint": [                  *   {                          *   "date": "2016-10-01",                              *   "time": "10:05",                              *   "address": "Rua Amadeu Sousa Cardoso, 13",                              *   "postalcode": "4100-423",                              *   "city": "Porto",                              *   "changestock": "Yes"                                           }                               ],              *   "landpoint": [                  *   {                          *   "date": "2016-10-02",                              *   "time": "09:15",                              *   "address": "Rua Almada Negreiros, 98",                              *   "postalcode": "1100-123",                              *   "city": "Lisboa",                              *   "disclaimer": "disclaimer"                                           }                               ],              *   "at_id": "12345"                   },      *   "related_docs": [          *   {                  *   "id": "12345",                      *   "type": "FT",                      *   "number": "FT 01P2016/220",                      *   "amount": "123.00",                      *   "status": "N"                               }                   ],      *   "hash": "Bgah",      *   "atcud": "JFAAAAAA-123",      *   "output": "output",      *   "output_data": "output_data",      *   "qrcode": "qrcode",      *   "qrcode_data": "qrcode_data",      *   "multibanco": {          *   "entity": "10022",              *   "reference": "222333444",              *   "amount": "22.53"                   },      *   "venduspay": {          *   "payment_url": "[https://pay.vendus.pt/](https://pay.vendus.pt/)         ",              *   "payment_qrcode": "payment_qrcode"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1{id}/patch)
/documents/{id}
-------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| stock | string<br><br>stock |
| status<br><br>required | string<br><br>Enum: "N - Normal" "A - Canceled" "F - Invoiced"<br><br>Estado |
| mode | string<br><br>Enum: "normal" "tests"<br><br>Working mode |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| status | string<br><br>Estado |

**403**

Poorly filled parameters

patch/documents/{id}

server

https://www.vendus.co.ao/ws/v1.1/documents/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "id": "1234",      *   "stock": "true",      *   "status": "status",      *   "mode": "normal"       }`

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "1234",      *   "status": "status"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1paymentmethods/get)
/documents/paymentmethods/
--------------------------------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Description |
| change | integer<br><br>Whether it allows change |
| type | string<br><br>Official type |
| status | string<br><br>Whether is usable |
| order | integer<br><br>Display order in a list |
| stores | Array of objects<br><br>Store IDs where it is available. If empty, it will be available in all stores |

**404**

No data

get/documents/paymentmethods

server

https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "title": "Em Dinheiro",      *   "change": "1",      *   "type": "NU",      *   "status": "on",      *   "order": "1",      *   "stores": [          *   { }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1paymentmethods/post)
/documents/paymentmethods/
---------------------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Description |
| change | integer<br><br>Enum: "1 - Yes" "0 - No"<br><br>Whether it allows change |
| type<br><br>required | string<br><br>Enum: "NU - Numerário" "CC - Cartão de Crédito" "CD - Cartão de Débito" "CO - Cartão Oferta" "CS - Compensação de Saldos C/C" "DE - Cartão de Pontos" "TR - Ticket Restaurante" "MB - Referência MB" "OU - Outro" "CH - Cheque Bancário" "LC - Letra Comercial" "TB - Transferência Bancária" "PR - Permuta de Bens" "DNP - Pagamento em conta corrente - entre 15 e 90 dias ou numa data específica" "MBWAY - MB WAY" "ZARPH - Zarph" "ALICE - Alice" "CASHMATIC - Cashmatic" "CASHLOGY - Cashlogy" "ITHINKIOT - iThink IoT" "MYPOS - MyPOS" "TPASIBS - TPA SIBS" "VENDUSPAY - Vendus Pay"<br><br>Official type |
| status | string<br><br>Enum: "on - Active" "off - Inactive"<br><br>Whether is usable |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Description |
| change | integer<br><br>Whether it allows change |
| type | string<br><br>Official type |
| status | string<br><br>Whether is usable |
| order | integer<br><br>Display order in a list |
| stores | Array of objects<br><br>Store IDs where it is available. If empty, it will be available in all stores |

**403**

Poorly filled parameters

post/documents/paymentmethods

server

https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Em Dinheiro",      *   "change": "1",      *   "type": "NU",      *   "status": "on"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "title": "Em Dinheiro",      *   "change": "1",      *   "type": "NU",      *   "status": "on",      *   "order": "1",      *   "stores": [          *   { }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1paymentmethods~1{id}/get)
/documents/paymentmethods/{id}
------------------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Description |
| change | integer<br><br>Whether it allows change |
| type | string<br><br>Official type |
| status | string<br><br>Whether is usable |
| order | integer<br><br>Display order in a list |
| stores | Array of objects<br><br>Store IDs where it is available. If empty, it will be available in all stores |

**404**

No data

get/documents/paymentmethods/{id}

server

https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "title": "Em Dinheiro",      *   "change": "1",      *   "type": "NU",      *   "status": "on",      *   "order": "1",      *   "stores": [          *   { }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Documents/paths/~1documents~1types/get)
/documents/types/
--------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| visible\_filter | string<br><br>Enum: "yes" "no"<br><br>Filter by types which should be visible on a filter |
| visible\_finalize | string<br><br>Enum: "yes" "no"<br><br>Filter by types which should be visible when creating a document |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| title | string<br><br>Title |
| id  | string<br><br>Two letter id |
| visible\_filter | string<br><br>If should be visible on a filter |
| visible\_finalize | string<br><br>If should be visible when creating a document |

**404**

No data

get/documents/types

server

https://www.vendus.co.ao/ws/v1.1/documents/types

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/documents/types/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'visible\_filter' \=> 'visible\_filter', 
    'visible\_finalize' \=> 'visible\_finalize', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "title": "Fatura",      *   "id": "FT",      *   "visible_filter": "visible_filter",      *   "visible_finalize": "visible_finalize"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk)
Helpdesk
-----------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk/get)
/helpdesk/
----------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| search | string<br><br>Search article |
| popular | string<br><br>Value: "yes"<br><br>Get popular articles |
| category | integer<br><br>Enum: "Impressão" "Equipamento" "Produtos" "Introdução e Configuração" "Configurações Iniciais" "Autoridade Tributária" "Documentos" "Clientes" "Relatórios" "Contabilidade" "Compras" "Lojas e Caixas" "Conta" "Subscrição" "Funcionalidades e Backoffice" "Configuração" "SAF-T" "Migração de Dados" "Sobre o Vendus" "Outros" "Vendus Go!" "Configuração" "Introdução" "Encomendas" "Integrações" "Vendus Pedidos" "Configuração de Equipamento" "Configurações de Conta" "POS" "APP Android/iOS" "Funcionalidades" "Impressão de Pedidos" "Funcionalidades" "Impressão de Pedidos" "Reports" "Configurações" "Configurações" "Novo POS"<br><br>Search article by category id |
| available | string<br><br>Enum: "helpdesk" "inline\_assistant" "all"<br><br>Search article by available |
| seo\_url | string<br><br>Search article by seo url |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Article ID |
| title | string<br><br>Article title |
| seo\_url | string<br><br>Article seo url |
| description | string<br><br>Article description |
| categories | Array of objects |
| status | string<br><br>Article status |
| available | string<br><br>Article available |
| url | string<br><br>Article seo url |
| date creation | string<br><br>Article date creation |
| order | integer<br><br>Article order |
| order spot | integer<br><br>Article order spot |
| p   | object |
| lastPage | integer |
| cms\_type | string |

**404**

No data

get/helpdesk

server

https://www.vendus.co.ao/ws/v1.1/helpdesk

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'search' \=> 'Title', 
    'popular' \=> 'popular', 
    'category' \=> 123, 
    'available' \=> 'helpdesk', 
    'seo\_url' \=> 'aaa-bb', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "title": "Title",      *   "seo_url": "aaa-bb",      *   "description": "description",      *   "categories": [          *   {                  *   "id": "12345",                      *   "name": "name"                               }                   ],      *   "status": "online/offline",      *   "available": "helpdesk",      *   "url": "aaaa-ss",      *   "date creation": "2021-11-26 00:00:00",      *   "order": "1",      *   "order spot": "1",      *   "p": { },      *   "lastPage": "lastPage",      *   "cms_type": "cms_type"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk/post)
/helpdesk/
-----------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Article Title |
| title\_page | string<br><br>Article Title Page |
| seo\_description | string<br><br>Article Description |
| seo\_keywords | string<br><br>Article Keywords |
| summary | string<br><br>Article Tags to search |
| tags | string<br><br>Article tags |
| status | string<br><br>Enum: "offline" "online" "draft"<br><br>Article Status |
| categories | Array of objects<br><br>Article categories |
| order | integer<br><br>Article Order |
| order\_spot | integer<br><br>Article Order Spot |
| available | string<br><br>Enum: "helpdesk" "inline\_assistant" "all"<br><br>Article available |
| date\_publish | string<br><br>Article Date Publish |
| related | Array of objects<br><br>Related Articles |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Article ID |
| title | string<br><br>Article title |
| seo\_url | string<br><br>Article seo url |
| description | string<br><br>Article description |
| categories | Array of objects |
| status | string<br><br>Article status |
| available | string<br><br>Article available |
| url | string<br><br>Article seo url |
| date creation | string<br><br>Article date creation |
| order | integer<br><br>Article order |
| order spot | integer<br><br>Article order spot |
| p   | object |
| lastPage | integer |
| cms\_type | string |
| content | string<br><br>Article content |
| date publish | string<br><br>Article date publish |
| related | Array of objects |
| images | Array of objects |

**403**

Poorly filled parameters

post/helpdesk

server

https://www.vendus.co.ao/ws/v1.1/helpdesk

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "title": "title",      *   "title_page": "title page",      *   "seo_description": "description",      *   "seo_keywords": "keywords",      *   "summary": "saft",      *   "tags": "tags",      *   "status": "description",      *   "categories": [          *   { }                   ],      *   "order": "1",      *   "order_spot": "1",      *   "available": "helpdesk",      *   "date_publish": "2021-11-26 00:00:00",      *   "related": [          *   { }                   ]       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "title": "Title",      *   "seo_url": "aaa-bb",      *   "description": "description",      *   "categories": [          *   {                  *   "id": "12345",                      *   "name": "name"                               }                   ],      *   "status": "online/offline",      *   "available": "helpdesk",      *   "url": "aaaa-ss",      *   "date creation": "2021-11-26 00:00:00",      *   "order": "1",      *   "order spot": "1",      *   "p": { },      *   "lastPage": "lastPage",      *   "cms_type": "cms_type",      *   "content": "Lorem Ipsum",      *   "date publish": "2021-11-26 00:00:00",      *   "related": [          *   {                  *   "id": "12345",                      *   "title": "title",                      *   "seo_url": "aaa-bb",                      *   "seo_description": "Lorem Ipsum"                               }                   ],      *   "images": [          *   {                  *   "id": "12345",                      *   "type": "original",                      *   "file": "file.jpg"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1{id}/get)
/helpdesk/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Article ID |
| title | string<br><br>Article title |
| seo\_url | string<br><br>Article seo url |
| description | string<br><br>Article description |
| categories | Array of objects |
| status | string<br><br>Article status |
| available | string<br><br>Article available |
| url | string<br><br>Article seo url |
| date creation | string<br><br>Article date creation |
| order | integer<br><br>Article order |
| order spot | integer<br><br>Article order spot |
| p   | object |
| lastPage | integer |
| cms\_type | string |
| content | string<br><br>Article content |
| date publish | string<br><br>Article date publish |
| related | Array of objects |
| images | Array of objects |

**404**

No data

get/helpdesk/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "title": "Title",      *   "seo_url": "aaa-bb",      *   "description": "description",      *   "categories": [          *   {                  *   "id": "12345",                      *   "name": "name"                               }                   ],      *   "status": "online/offline",      *   "available": "helpdesk",      *   "url": "aaaa-ss",      *   "date creation": "2021-11-26 00:00:00",      *   "order": "1",      *   "order spot": "1",      *   "p": { },      *   "lastPage": "lastPage",      *   "cms_type": "cms_type",      *   "content": "Lorem Ipsum",      *   "date publish": "2021-11-26 00:00:00",      *   "related": [          *   {                  *   "id": "12345",                      *   "title": "title",                      *   "seo_url": "aaa-bb",                      *   "seo_description": "Lorem Ipsum"                               }                   ],      *   "images": [          *   {                  *   "id": "12345",                      *   "type": "original",                      *   "file": "file.jpg"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1{id}/patch)
/helpdesk/{id}
----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title | string<br><br>Article Title |
| title\_page | string<br><br>Article Title Page |
| seo\_description | string<br><br>Article Description |
| seo\_keywords | string<br><br>Article Keywords |
| summary | string<br><br>Article Tags to search |
| tags | string<br><br>Article tags |
| status | string<br><br>Enum: "offline" "online" "draft"<br><br>Article Status |
| categories | Array of objects<br><br>Article categories |
| order | integer<br><br>Article Order |
| order\_spot | integer<br><br>Article Order Spot |
| available | string<br><br>Enum: "helpdesk" "inline\_assistant" "all"<br><br>Article available |
| date\_publish | string<br><br>Article Date Publish |
| related | Array of objects<br><br>Related Articles |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Article ID |
| title | string<br><br>Article title |
| seo\_url | string<br><br>Article seo url |
| description | string<br><br>Article description |
| categories | Array of objects |
| status | string<br><br>Article status |
| available | string<br><br>Article available |
| url | string<br><br>Article seo url |
| date creation | string<br><br>Article date creation |
| order | integer<br><br>Article order |
| order spot | integer<br><br>Article order spot |
| p   | object |
| lastPage | integer |
| cms\_type | string |
| content | string<br><br>Article content |
| date publish | string<br><br>Article date publish |
| related | Array of objects |
| images | Array of objects |

**403**

Poorly filled parameters

patch/helpdesk/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "title": "title",      *   "title_page": "title page",      *   "seo_description": "description",      *   "seo_keywords": "keywords",      *   "summary": "saft",      *   "tags": "tags",      *   "status": "description",      *   "categories": [          *   { }                   ],      *   "order": "1",      *   "order_spot": "1",      *   "available": "helpdesk",      *   "date_publish": "2021-11-26 00:00:00",      *   "related": [          *   { }                   ]       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "title": "Title",      *   "seo_url": "aaa-bb",      *   "description": "description",      *   "categories": [          *   {                  *   "id": "12345",                      *   "name": "name"                               }                   ],      *   "status": "online/offline",      *   "available": "helpdesk",      *   "url": "aaaa-ss",      *   "date creation": "2021-11-26 00:00:00",      *   "order": "1",      *   "order spot": "1",      *   "p": { },      *   "lastPage": "lastPage",      *   "cms_type": "cms_type",      *   "content": "Lorem Ipsum",      *   "date publish": "2021-11-26 00:00:00",      *   "related": [          *   {                  *   "id": "12345",                      *   "title": "title",                      *   "seo_url": "aaa-bb",                      *   "seo_description": "Lorem Ipsum"                               }                   ],      *   "images": [          *   {                  *   "id": "12345",                      *   "type": "original",                      *   "file": "file.jpg"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1{id}/delete)
/helpdesk/{id}
-----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/helpdesk/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1categories/get)
/helpdesk/categories/
---------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| seo\_url | string<br><br>Search category by url |
| search | string<br><br>Search category by title |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Category ID |
| parent\_id | integer<br><br>Category Parent id |
| parent | Array of objects<br><br>Parent Category |
| seo\_url | string<br><br>Category seo url |
| name | string<br><br>Category name |
| description | string<br><br>Category ID |
| order | integer<br><br>Category order |
| icon | string<br><br>Category icon |
| sub-categories | Array of objects |

**404**

No data

get/helpdesk/categories

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/categories

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'seo\_url' \=> 'asd', 
    'search' \=> 'asd', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "parent_id": "123",      *   "parent": [          *   { }                   ],      *   "seo_url": "aaa-bb",      *   "name": "name",      *   "description": "123",      *   "order": "1",      *   "icon": "icon.svg",      *   "sub-categories": [          *   {                  *   "id": "12345",                      *   "parent_id": "123",                      *   "seo_url": "aaa-bb",                      *   "name": "name",                      *   "description": "description"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1categories/post)
/helpdesk/categories/
----------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| name<br><br>required | string<br><br>Category Name |
| description | string<br><br>Category Description |
| order | integer<br><br>Order |
| parent\_id | integer<br><br>Parent Id |
| icon | string<br><br>Category icon |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Category ID |
| parent\_id | integer<br><br>Category Parent id |
| parent | Array of objects<br><br>Parent Category |
| seo\_url | string<br><br>Category seo url |
| name | string<br><br>Category name |
| description | string<br><br>Category ID |
| order | integer<br><br>Category order |
| icon | string<br><br>Category icon |
| sub-categories | Array of objects |

**403**

Poorly filled parameters

post/helpdesk/categories

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/categories

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "name": "123",      *   "description": "description",      *   "order": "1",      *   "parent_id": "123",      *   "icon": "icon.svg"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "parent_id": "123",      *   "parent": [          *   { }                   ],      *   "seo_url": "aaa-bb",      *   "name": "name",      *   "description": "123",      *   "order": "1",      *   "icon": "icon.svg",      *   "sub-categories": [          *   {                  *   "id": "12345",                      *   "parent_id": "123",                      *   "seo_url": "aaa-bb",                      *   "name": "name",                      *   "description": "description"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1categories~1{id}/get)
/helpdesk/categories/{id}
-------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Category ID |
| parent\_id | integer<br><br>Category Parent id |
| parent | Array of objects<br><br>Parent Category |
| seo\_url | string<br><br>Category seo url |
| name | string<br><br>Category name |
| description | string<br><br>Category ID |
| order | integer<br><br>Category order |
| icon | string<br><br>Category icon |
| sub-categories | Array of objects |

**404**

No data

get/helpdesk/categories/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "parent_id": "123",      *   "parent": [          *   { }                   ],      *   "seo_url": "aaa-bb",      *   "name": "name",      *   "description": "123",      *   "order": "1",      *   "icon": "icon.svg",      *   "sub-categories": [          *   {                  *   "id": "12345",                      *   "parent_id": "123",                      *   "seo_url": "aaa-bb",                      *   "name": "name",                      *   "description": "description"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1categories~1{id}/patch)
/helpdesk/categories/{id}
---------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| name<br><br>required | string<br><br>Category Name |
| description | string<br><br>Category Description |
| order | integer<br><br>Order |
| icon | string<br><br>Category icon |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Category ID |
| parent\_id | integer<br><br>Category Parent id |
| parent | Array of objects<br><br>Parent Category |
| seo\_url | string<br><br>Category seo url |
| name | string<br><br>Category name |
| description | string<br><br>Category ID |
| order | integer<br><br>Category order |
| icon | string<br><br>Category icon |
| sub-categories | Array of objects |

**403**

Poorly filled parameters

patch/helpdesk/categories/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "name": "123",      *   "description": "description",      *   "order": "1",      *   "icon": "icon.svg"       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "123",      *   "parent_id": "123",      *   "parent": [          *   { }                   ],      *   "seo_url": "aaa-bb",      *   "name": "name",      *   "description": "123",      *   "order": "1",      *   "icon": "icon.svg",      *   "sub-categories": [          *   {                  *   "id": "12345",                      *   "parent_id": "123",                      *   "seo_url": "aaa-bb",                      *   "name": "name",                      *   "description": "description"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Helpdesk/paths/~1helpdesk~1categories~1{id}/delete)
/helpdesk/categories/{id}
----------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/helpdesk/categories/{id}

server

https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Integrations)
Integrations
-------------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Integrations/paths/~1integrations/get)
/integrations/
----------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| type | string<br><br>Type |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| type | string<br><br>Integration Type |
| config | string<br><br>Data Config |

**404**

No data

get/integrations

server

https://www.vendus.co.ao/ws/v1.1/integrations

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/integrations/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'type' \=> 'type', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "type": "type",      *   "config": "config"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Integrations/paths/~1integrations/post)
/integrations/
-----------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| type<br><br>required | string<br><br>Value: "kds"<br><br>Config Data |
| config<br><br>required | string<br><br>Config Data |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| type | string<br><br>Integration Type |
| config | string<br><br>Data Config |

**403**

Poorly filled parameters

post/integrations

server

https://www.vendus.co.ao/ws/v1.1/integrations

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "type": "type",      *   "config": "config"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "type": "type",      *   "config": "config"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Integrations/paths/~1integrations~1{id}/get)
/integrations/{id}
--------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| type | string<br><br>Integration Type |
| config | string<br><br>Data Config |

**404**

No data

get/integrations/{id}

server

https://www.vendus.co.ao/ws/v1.1/integrations/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/integrations/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "type": "type",      *   "config": "config"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Kitchens)
Kitchens
-----------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Kitchens/paths/~1kitchens/get)
/kitchens/
----------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| store\_id | integer<br><br>Store ID |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Kitchen ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| store\_id | integer<br><br>Store ID |

**404**

No data

get/kitchens

server

https://www.vendus.co.ao/ws/v1.1/kitchens

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/kitchens/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'store\_id' \=> 1234, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Cozinha AB",      *   "description": "Cozinha do Piso 2",      *   "store_id": "123"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Kitchens/paths/~1kitchens~1{id}/get)
/kitchens/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Kitchen ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| store\_id | integer<br><br>Store ID |

**404**

No data

get/kitchens/{id}

server

https://www.vendus.co.ao/ws/v1.1/kitchens/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/kitchens/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Cozinha AB",      *   "description": "Cozinha do Piso 2",      *   "store_id": "123"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Kitchens/paths/~1kitchens~1{id}~1printer/get)
/kitchens/printer/
---------------------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| kitchen\_id | integer<br><br>Kitchen ID |
| status | integer<br><br>Status |
| printer | string<br><br>ID |
| ip  | string<br><br>ID |
| port | string<br><br>Port |
| data | string<br><br>ID |

**404**

No data

get/kitchens/{id}/printer

server

https://www.vendus.co.ao/ws/v1.1/kitchens/{id}/printer

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/kitchens/printer/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "kitchen_id": "12345",      *   "status": "1",      *   "printer": "EPSON L3160",      *   "ip": "192.168.0.1",      *   "port": "90000",      *   "data": "{}"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Kitchens/paths/~1kitchens~1{id}~1printer/post)
/kitchens/printer/
----------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| status | integer<br><br>Status |
| printer | string<br><br>Printer |
| ip  | string<br><br>IP |
| port | string<br><br>Port |
| data | string<br><br>Printer Data |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| kitchen\_id | integer<br><br>Kitchen ID |
| status | integer<br><br>Status |
| printer | string<br><br>ID |
| ip  | string<br><br>ID |
| port | string<br><br>Port |
| data | string<br><br>ID |

**403**

Poorly filled parameters

post/kitchens/{id}/printer

server

https://www.vendus.co.ao/ws/v1.1/kitchens/{id}/printer

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "status": "1",      *   "printer": "EPSON L3160",      *   "ip": "192.168.0.1",      *   "port": "90000",      *   "data": "{}"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "kitchen_id": "12345",      *   "status": "1",      *   "printer": "EPSON L3160",      *   "ip": "192.168.0.1",      *   "port": "90000",      *   "data": "{}"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products)
Products
-----------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products/get)
/products/
----------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| q   | string<br><br>String to be searched on title, reference and barcode |
| ids | string<br><br>String to be searched on ids |
| title | string<br><br>String to be searched on title |
| store\_id | integer<br><br>Store ID |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| status | string<br><br>Enum: "on - Ativo" "off - Inativo" "all - All products"<br><br>Status |
| type | string<br><br>Enum: "all - All products" "normal - All except compound and those with variants" "compound - Only compound" "has\_variants - Only those with variants"<br><br>Type |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| order | integer<br><br>Display order in a list |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| price\_without\_tax | string<br><br>Price Without Tax |
| prices | Array of objects<br><br>Price per Price Group |
| unit\_id | integer<br><br>Unit ID |
| class\_name | string<br><br>Class name |
| type\_id | string<br><br>Type ID |
| compound | Array of objects<br><br>Information for compound products |
| lot\_control | integer<br><br>Lot Control |
| stock\_control | integer<br><br>Stock Control |
| stock\_type | string<br><br>Stock Type |
| tax\_id | string<br><br>Tax ID |
| tax\_exemption | string<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| status | string<br><br>Status |
| stock | integer<br><br>Stock |
| stock\_store | Array of objects |
| stock\_alert | integer<br><br>Stock Alert |
| variant\_id | integer<br><br>Variant ID |
| variants | Array of objects<br><br>Product Variants |
| images | object<br><br>Images List |
| stores | Array of objects<br><br>Stores where the product is available |
| modifiers | Array of objects<br><br>Information for modifiers |
| lots | Array of objects<br><br>Information for Lots |

**404**

No data

get/products

server

https://www.vendus.co.ao/ws/v1.1/products

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'q' \=> 'book', 
    'ids' \=> '1234', 
    'title' \=> 'book', 
    'store\_id' \=> 123, 
    'reference' \=> 'XBD001', 
    'barcode' \=> '6920702798897', 
    'category\_id' \=> 123, 
    'brand\_id' \=> 123, 
    'status' \=> 'XBD001', 
    'type' \=> 'all', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "order": "1",      *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "123.00",      *   "price_without_tax": "100.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "price": "123.00",                      *   "price_without_tax": "100.00"                               }                   ],      *   "unit_id": "123",      *   "class_name": "Alimentar",      *   "type_id": "N",      *   "compound": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "gross_price": "gross_price",                      *   "type": "type",                      *   "stock": [                          *   {                                  *   "stock": "stock",                                      *   "store_id": "store_id",                                      *   "stock_alert": "stock_alert"                                                       }                                           ]                               }                   ],      *   "lot_control": "1",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "status": "on",      *   "stock": "on",      *   "stock_store": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234",                      *   "qty": 22,                      *   "alert": 3                               }                   ],      *   "stock_alert": "on",      *   "variant_id": "1234",      *   "variants": [          *   {                  *   "variant": {                          *   "id": "1234",                              *   "title": "title",                              *   "code": "code"                                           },                      *   "product_variants": [                          *   {                                  *   "id": "1234",                                      *   "text": "Black / XS",                                      *   "barcode": "barcode",                                      *   "code": "code",                                      *   "price": "price",                                      *   "composite_ids": [                                          *   { }                                                                   ],                                      *   "stock": [                                          *   {                                                  *   "store_id": 123,                                                      *   "qty": "qty"                                                                               }                                                                   ]                                                       }                                           ]                               }                   ],      *   "images": {          *   "xs": "/foto/b906f77_xs.png",              *   "m": "/foto/b906f77_m.png"                   },      *   "stores": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234"                               }                   ],      *   "modifiers": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "min": "min",                      *   "max": "max",                      *   "options": [                          *   { }                                           ]                               }                   ],      *   "lots": [          *   {                  *   "id": "1234",                      *   "title": "012-10002",                      *   "status": "active",                      *   "expiration_date": "2023-01-01",                      *   "barcode": "1234567890"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products/post)
/products/
-----------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title<br><br>required | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Enum: "yes" "no"<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| prices | Array of objects<br><br>Price groups |
| unit\_id<br><br>required | integer<br><br>Unit ID |
| type\_id | string<br><br>Enum: "P - Produto" "S - Serviço" "O - Outro (portes, adiantamentos, etc.)" "I - Imposto (excepto IVA e IS) ou Encargo Parafiscal" "E - Imposto Especial de Consumo (IABA, ISP e IT)"<br><br>Type ID |
| class\_id | string<br><br>Enum: "ALI - Alimentar" "ALT - Álcool e tabaco" "CUL - Produtos culturais" "DEP - Desporto e lazer" "EDM - Eletrodomésticos" "CAS - Produtos para casa" "PCS - Computador e eletrónica" "MOD - Moda e acessórios" "PER - Perfumaria, cosméticos e produtos farmacêuticos" "JOI - Joias e Relógios"<br><br>Class id |
| lot\_control | string<br><br>Lot Control |
| stock\_control | integer<br><br>Enum: "0 - 0" 1<br><br>Stock Control |
| stock\_type | string<br><br>Enum: "M - M - Mercadorias" "P - P - Matérias primas, subsidiárias ou de consumo" "A - A - Produtos acabados ou intermédios" "S - S - Subprodutos, deperdícios ou refugos" "T - T - Produtos e trabalhos em curso"<br><br>Stock Type |
| tax\_id | string<br><br>Enum: "NOR - Taxa Normal" "INT - Taxa Intermédia" "RED - Taxa Reduzida" "ISE - Isento" "OUT - Outros"<br><br>Tax ID |
| tax\_exemption | string<br><br>Enum: "M01 - M01 - Artigo 16.º, n.º 6 do CIVA ou similar" "M02 - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho" "M03 - M03 - Exigibilidade de caixa (revogado)" "M04 - M04 - Artigo 13.º do CIVA ou similar" "M05 - M05 - Artigo 14.º do CIVA ou similar" "M06 - M06 - Artigo 15.º do CIVA ou similar" "M07 - M07 - Artigo 9.º do CIVA ou similar" "M08 - M08 - IVA - autoliquidação (revogado)" "M09 - M09 - IVA - não confere direito a dedução" "M10 - M10 - IVA - Regime de isenção" "M11 - M11 - Regime particular do tabaco" "M12 - M12 - Regime da margem de lucro - Agências de viagens" "M13 - M13 - Regime da margem de lucro - Bens em segunda mão" "M14 - M14 - Regime da margem de lucro - Objetos de arte" "M15 - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades" "M16 - M16 - Artigo 14.º do RITI ou similar" "M19 - M19 - Outras isenções" "M20 - M20 - IVA - regime forfetário" "M21 - M21 - IVA – não confere direito à dedução" "M25 - M25 - Mercadorias à consignação" "M26 - M26 - Cabaz alimentar (expirado)" "M30 - M30 - IVA - autoliquidação (2.1.i)" "M31 - M31 - IVA - autoliquidação (2.1.j)" "M32 - M32 - IVA - autoliquidação (2.1.l)" "M33 - M33 - IVA - autoliquidação (2.1.m)" "M34 - M34 - IVA - autoliquidação (2.1.n)" "M40 - M40 - IVA - autoliquidação (6.6.a)" "M41 - M41 - IVA - autoliquidação (8.3.R)" "M42 - M42 - IVA - autoliquidação (21.2007)" "M43 - M43 - IVA - autoliquidação (362.99)" "M99 - M99 - Não sujeito; não tributado ou similar"<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| image | string<br><br>Image |
| status | string<br><br>Enum: "on - Ativo" "off - Inativo"<br><br>Status |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| order | integer<br><br>Display order in a list |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| price\_without\_tax | string<br><br>Price Without Tax |
| prices | Array of objects<br><br>Price per Price Group |
| unit\_id | integer<br><br>Unit ID |
| class\_name | string<br><br>Class name |
| type\_id | string<br><br>Type ID |
| compound | Array of objects<br><br>Information for compound products |
| lot\_control | integer<br><br>Lot Control |
| stock\_control | integer<br><br>Stock Control |
| stock\_type | string<br><br>Stock Type |
| tax\_id | string<br><br>Tax ID |
| tax\_exemption | string<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| status | string<br><br>Status |
| stock | integer<br><br>Stock |
| stock\_store | Array of objects |
| stock\_alert | integer<br><br>Stock Alert |
| variant\_id | integer<br><br>Variant ID |
| variants | Array of objects<br><br>Product Variants |
| images | object<br><br>Images List |
| stores | Array of objects<br><br>Stores where the product is available |
| modifiers | Array of objects<br><br>Information for modifiers |
| lots | Array of objects<br><br>Information for Lots |

**403**

Poorly filled parameters

post/products

server

https://www.vendus.co.ao/ws/v1.1/products

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "20.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "gross_price": "20.00"                               }                   ],      *   "unit_id": "123",      *   "type_id": "P",      *   "class_id": "AL",      *   "lot_control": "true",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "image": "[https://www.site.com/img/1.png](https://www.site.com/img/1.png)     ",      *   "status": "on"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "order": "1",      *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "123.00",      *   "price_without_tax": "100.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "price": "123.00",                      *   "price_without_tax": "100.00"                               }                   ],      *   "unit_id": "123",      *   "class_name": "Alimentar",      *   "type_id": "N",      *   "compound": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "gross_price": "gross_price",                      *   "type": "type",                      *   "stock": [                          *   {                                  *   "stock": "stock",                                      *   "store_id": "store_id",                                      *   "stock_alert": "stock_alert"                                                       }                                           ]                               }                   ],      *   "lot_control": "1",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "status": "on",      *   "stock": "on",      *   "stock_store": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234",                      *   "qty": 22,                      *   "alert": 3                               }                   ],      *   "stock_alert": "on",      *   "variant_id": "1234",      *   "variants": [          *   {                  *   "variant": {                          *   "id": "1234",                              *   "title": "title",                              *   "code": "code"                                           },                      *   "product_variants": [                          *   {                                  *   "id": "1234",                                      *   "text": "Black / XS",                                      *   "barcode": "barcode",                                      *   "code": "code",                                      *   "price": "price",                                      *   "composite_ids": [                                          *   { }                                                                   ],                                      *   "stock": [                                          *   {                                                  *   "store_id": 123,                                                      *   "qty": "qty"                                                                               }                                                                   ]                                                       }                                           ]                               }                   ],      *   "images": {          *   "xs": "/foto/b906f77_xs.png",              *   "m": "/foto/b906f77_m.png"                   },      *   "stores": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234"                               }                   ],      *   "modifiers": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "min": "min",                      *   "max": "max",                      *   "options": [                          *   { }                                           ]                               }                   ],      *   "lots": [          *   {                  *   "id": "1234",                      *   "title": "012-10002",                      *   "status": "active",                      *   "expiration_date": "2023-01-01",                      *   "barcode": "1234567890"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1{id}/get)
/products/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| order | integer<br><br>Display order in a list |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| price\_without\_tax | string<br><br>Price Without Tax |
| prices | Array of objects<br><br>Price per Price Group |
| unit\_id | integer<br><br>Unit ID |
| class\_name | string<br><br>Class name |
| type\_id | string<br><br>Type ID |
| compound | Array of objects<br><br>Information for compound products |
| lot\_control | integer<br><br>Lot Control |
| stock\_control | integer<br><br>Stock Control |
| stock\_type | string<br><br>Stock Type |
| tax\_id | string<br><br>Tax ID |
| tax\_exemption | string<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| status | string<br><br>Status |
| stock | integer<br><br>Stock |
| stock\_store | Array of objects |
| stock\_alert | integer<br><br>Stock Alert |
| variant\_id | integer<br><br>Variant ID |
| variants | Array of objects<br><br>Product Variants |
| images | object<br><br>Images List |
| stores | Array of objects<br><br>Stores where the product is available |
| modifiers | Array of objects<br><br>Information for modifiers |
| lots | Array of objects<br><br>Information for Lots |

**404**

No data

get/products/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "order": "1",      *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "123.00",      *   "price_without_tax": "100.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "price": "123.00",                      *   "price_without_tax": "100.00"                               }                   ],      *   "unit_id": "123",      *   "class_name": "Alimentar",      *   "type_id": "N",      *   "compound": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "gross_price": "gross_price",                      *   "type": "type",                      *   "stock": [                          *   {                                  *   "stock": "stock",                                      *   "store_id": "store_id",                                      *   "stock_alert": "stock_alert"                                                       }                                           ]                               }                   ],      *   "lot_control": "1",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "status": "on",      *   "stock": "on",      *   "stock_store": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234",                      *   "qty": 22,                      *   "alert": 3                               }                   ],      *   "stock_alert": "on",      *   "variant_id": "1234",      *   "variants": [          *   {                  *   "variant": {                          *   "id": "1234",                              *   "title": "title",                              *   "code": "code"                                           },                      *   "product_variants": [                          *   {                                  *   "id": "1234",                                      *   "text": "Black / XS",                                      *   "barcode": "barcode",                                      *   "code": "code",                                      *   "price": "price",                                      *   "composite_ids": [                                          *   { }                                                                   ],                                      *   "stock": [                                          *   {                                                  *   "store_id": 123,                                                      *   "qty": "qty"                                                                               }                                                                   ]                                                       }                                           ]                               }                   ],      *   "images": {          *   "xs": "/foto/b906f77_xs.png",              *   "m": "/foto/b906f77_m.png"                   },      *   "stores": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234"                               }                   ],      *   "modifiers": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "min": "min",                      *   "max": "max",                      *   "options": [                          *   { }                                           ]                               }                   ],      *   "lots": [          *   {                  *   "id": "1234",                      *   "title": "012-10002",                      *   "status": "active",                      *   "expiration_date": "2023-01-01",                      *   "barcode": "1234567890"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1{id}/patch)
/products/{id}
----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Enum: "yes" "no"<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| prices | Array of objects<br><br>Price groups |
| unit\_id | integer<br><br>Unit ID |
| type\_id | string<br><br>Enum: "P - Produto" "S - Serviço" "O - Outro (portes, adiantamentos, etc.)" "I - Imposto (excepto IVA e IS) ou Encargo Parafiscal" "E - Imposto Especial de Consumo (IABA, ISP e IT)"<br><br>Type ID |
| class\_id | string<br><br>Enum: "ALI - Alimentar" "ALT - Álcool e tabaco" "CUL - Produtos culturais" "DEP - Desporto e lazer" "EDM - Eletrodomésticos" "CAS - Produtos para casa" "PCS - Computador e eletrónica" "MOD - Moda e acessórios" "PER - Perfumaria, cosméticos e produtos farmacêuticos" "JOI - Joias e Relógios"<br><br>Class id |
| lot\_control | string<br><br>Lot Control |
| stock\_control | integer<br><br>Enum: "0 - 0" 1<br><br>Stock Control |
| stock\_type | string<br><br>Enum: "M - M - Mercadorias" "P - P - Matérias primas, subsidiárias ou de consumo" "A - A - Produtos acabados ou intermédios" "S - S - Subprodutos, deperdícios ou refugos" "T - T - Produtos e trabalhos em curso"<br><br>Stock Type |
| tax\_id | string<br><br>Enum: "NOR - Taxa Normal" "INT - Taxa Intermédia" "RED - Taxa Reduzida" "ISE - Isento" "OUT - Outros"<br><br>Tax ID |
| tax\_exemption | string<br><br>Enum: "M01 - M01 - Artigo 16.º, n.º 6 do CIVA ou similar" "M02 - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho" "M03 - M03 - Exigibilidade de caixa (revogado)" "M04 - M04 - Artigo 13.º do CIVA ou similar" "M05 - M05 - Artigo 14.º do CIVA ou similar" "M06 - M06 - Artigo 15.º do CIVA ou similar" "M07 - M07 - Artigo 9.º do CIVA ou similar" "M08 - M08 - IVA - autoliquidação (revogado)" "M09 - M09 - IVA - não confere direito a dedução" "M10 - M10 - IVA - Regime de isenção" "M11 - M11 - Regime particular do tabaco" "M12 - M12 - Regime da margem de lucro - Agências de viagens" "M13 - M13 - Regime da margem de lucro - Bens em segunda mão" "M14 - M14 - Regime da margem de lucro - Objetos de arte" "M15 - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades" "M16 - M16 - Artigo 14.º do RITI ou similar" "M19 - M19 - Outras isenções" "M20 - M20 - IVA - regime forfetário" "M21 - M21 - IVA – não confere direito à dedução" "M25 - M25 - Mercadorias à consignação" "M26 - M26 - Cabaz alimentar (expirado)" "M30 - M30 - IVA - autoliquidação (2.1.i)" "M31 - M31 - IVA - autoliquidação (2.1.j)" "M32 - M32 - IVA - autoliquidação (2.1.l)" "M33 - M33 - IVA - autoliquidação (2.1.m)" "M34 - M34 - IVA - autoliquidação (2.1.n)" "M40 - M40 - IVA - autoliquidação (6.6.a)" "M41 - M41 - IVA - autoliquidação (8.3.R)" "M42 - M42 - IVA - autoliquidação (21.2007)" "M43 - M43 - IVA - autoliquidação (362.99)" "M99 - M99 - Não sujeito; não tributado ou similar"<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| image | string<br><br>Image |
| status | string<br><br>Enum: "on - Ativo" "off - Inativo"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| order | integer<br><br>Display order in a list |
| reference | string<br><br>Reference code |
| barcode | string<br><br>Barcode |
| supplier\_code | string<br><br>Supplier Code |
| title | string<br><br>Name |
| description | string<br><br>Description |
| include\_description | string<br><br>Include description on invoice |
| supply\_price | string<br><br>Supplier price |
| gross\_price | string<br><br>Gross price |
| price\_without\_tax | string<br><br>Price Without Tax |
| prices | Array of objects<br><br>Price per Price Group |
| unit\_id | integer<br><br>Unit ID |
| class\_name | string<br><br>Class name |
| type\_id | string<br><br>Type ID |
| compound | Array of objects<br><br>Information for compound products |
| lot\_control | integer<br><br>Lot Control |
| stock\_control | integer<br><br>Stock Control |
| stock\_type | string<br><br>Stock Type |
| tax\_id | string<br><br>Tax ID |
| tax\_exemption | string<br><br>Tax Exemption Code |
| tax\_exemption\_law | string<br><br>Tax Exemption Law |
| category\_id | integer<br><br>Category ID |
| brand\_id | integer<br><br>Brand ID |
| status | string<br><br>Status |
| stock | integer<br><br>Stock |
| stock\_store | Array of objects |
| stock\_alert | integer<br><br>Stock Alert |
| variant\_id | integer<br><br>Variant ID |
| variants | Array of objects<br><br>Product Variants |
| images | object<br><br>Images List |
| stores | Array of objects<br><br>Stores where the product is available |
| modifiers | Array of objects<br><br>Information for modifiers |
| lots | Array of objects<br><br>Information for Lots |

**403**

Poorly filled parameters

patch/products/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "20.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "gross_price": "20.00"                               }                   ],      *   "unit_id": "123",      *   "type_id": "P",      *   "class_id": "AL",      *   "lot_control": "true",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "image": "[https://www.site.com/img/1.png](https://www.site.com/img/1.png)     ",      *   "status": "on"       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "order": "1",      *   "reference": "XBD001",      *   "barcode": "P000000XBD001",      *   "supplier_code": "AHSG102X",      *   "title": "Book XPTO",      *   "description": "Book XPTO 2006 Edition",      *   "include_description": "no",      *   "supply_price": "10.12",      *   "gross_price": "123.00",      *   "price_without_tax": "100.00",      *   "prices": [          *   {                  *   "id": "1234",                      *   "price": "123.00",                      *   "price_without_tax": "100.00"                               }                   ],      *   "unit_id": "123",      *   "class_name": "Alimentar",      *   "type_id": "N",      *   "compound": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "gross_price": "gross_price",                      *   "type": "type",                      *   "stock": [                          *   {                                  *   "stock": "stock",                                      *   "store_id": "store_id",                                      *   "stock_alert": "stock_alert"                                                       }                                           ]                               }                   ],      *   "lot_control": "1",      *   "stock_control": "1",      *   "stock_type": "M",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Artigo 13.º do CIVA",      *   "category_id": "123",      *   "brand_id": "123",      *   "status": "on",      *   "stock": "on",      *   "stock_store": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234",                      *   "qty": 22,                      *   "alert": 3                               }                   ],      *   "stock_alert": "on",      *   "variant_id": "1234",      *   "variants": [          *   {                  *   "variant": {                          *   "id": "1234",                              *   "title": "title",                              *   "code": "code"                                           },                      *   "product_variants": [                          *   {                                  *   "id": "1234",                                      *   "text": "Black / XS",                                      *   "barcode": "barcode",                                      *   "code": "code",                                      *   "price": "price",                                      *   "composite_ids": [                                          *   { }                                                                   ],                                      *   "stock": [                                          *   {                                                  *   "store_id": 123,                                                      *   "qty": "qty"                                                                               }                                                                   ]                                                       }                                           ]                               }                   ],      *   "images": {          *   "xs": "/foto/b906f77_xs.png",              *   "m": "/foto/b906f77_m.png"                   },      *   "stores": [          *   {                  *   "store": "Loja Principal",                      *   "store_id": "1234"                               }                   ],      *   "modifiers": [          *   {                  *   "id": "id",                      *   "title": "title",                      *   "min": "min",                      *   "max": "max",                      *   "options": [                          *   { }                                           ]                               }                   ],      *   "lots": [          *   {                  *   "id": "1234",                      *   "title": "012-10002",                      *   "status": "active",                      *   "expiration_date": "2023-01-01",                      *   "barcode": "1234567890"                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1{id}/delete)
/products/{id}
-----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/products/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1brands/get)
/products/brands/
-------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| title | string<br><br>String to be searched on title |
| status | string<br><br>Enum: "on" "off" "delete"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |

**404**

No data

get/products/brands

server

https://www.vendus.co.ao/ws/v1.1/products/brands

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/brands/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'title' \=> 'book', 
    'status' \=> 'on', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Apple",      *   "status": "on"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1brands/post)
/products/brands/
--------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Title |
| status | string<br><br>Enum: "on" "off" "delete"<br><br>Status |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |

**403**

Poorly filled parameters

post/products/brands

server

https://www.vendus.co.ao/ws/v1.1/products/brands

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Apple",      *   "status": "on"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Apple",      *   "status": "on"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1brands~1{id}/get)
/products/brands/{id}
-----------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |

**404**

No data

get/products/brands/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/brands/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/brands/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Apple",      *   "status": "on"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1categories/get)
/products/categories/
---------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| title | string<br><br>String to be searched on title |
| store\_id | integer<br><br>Store ID |
| status | string<br><br>Enum: "on" "off" "delete"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |
| order | integer<br><br>Order |
| all\_stores | string<br><br>Description |
| products\_order | string<br><br>Order Type |
| kitchen\_request | string<br><br>Description |

**404**

No data

get/products/categories

server

https://www.vendus.co.ao/ws/v1.1/products/categories

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/categories/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'title' \=> 'book', 
    'store\_id' \=> 123, 
    'status' \=> 'XBD001', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Books",      *   "status": "on",      *   "order": "1",      *   "all_stores": "yes",      *   "products_order": "order",      *   "kitchen_request": "yes"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1categories/post)
/products/categories/
----------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Title |
| status | string<br><br>Enum: "on" "off" "delete"<br><br>Status |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |

**403**

Poorly filled parameters

post/products/categories

server

https://www.vendus.co.ao/ws/v1.1/products/categories

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Fruits and Vegetables",      *   "status": "on"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Books",      *   "status": "on"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1categories~1{id}/get)
/products/categories/{id}
-------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| status | string<br><br>Status |

**404**

No data

get/products/categories/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/categories/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/categories/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Books",      *   "status": "on"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1{id}~1lots/get)
/products/lots/
---------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| status | string<br><br>Enum: "active" "expired"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Title of the lot |
| status | string<br><br>Status of the lot |
| expiration\_date | string<br><br>Expiration date of the lot |
| barcode | integer<br><br>Barcode of the lot |
| stock | integer<br><br>Stock of the lot |

**404**

No data

get/products/{id}/lots

server

https://www.vendus.co.ao/ws/v1.1/products/{id}/lots

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/lots/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'status' \=> 'active', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "1234",      *   "title": "012-10002",      *   "status": "active",      *   "expiration_date": "29-07-2025",      *   "barcode": "1234567890",      *   "stock": "100.00"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1{id}~1lots/post)
/products/lots/
----------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Title |
| expiration\_date | string<br><br>Expiration date |
| barcode | integer<br><br>Barcode |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Title of the lot |
| status | string<br><br>Status of the lot |
| expiration\_date | string<br><br>Expiration date of the lot |
| barcode | integer<br><br>Barcode of the lot |
| stock | integer<br><br>Stock of the lot |

**403**

Poorly filled parameters

post/products/{id}/lots

server

https://www.vendus.co.ao/ws/v1.1/products/{id}/lots

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "012-10002",      *   "expiration_date": "29-07-2025",      *   "barcode": "1234567890"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "1234",      *   "title": "012-10002",      *   "status": "active",      *   "expiration_date": "29-07-2025",      *   "barcode": "1234567890",      *   "stock": "100.00"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1pricegroups/get)
/products/pricegroups/
-----------------------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| is\_default | string<br><br>Is default price |

**404**

No data

get/products/pricegroups

server

https://www.vendus.co.ao/ws/v1.1/products/pricegroups

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Vip",      *   "is_default": "no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1pricegroups/post)
/products/pricegroups/
------------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Name |
| is\_default | string<br><br>Enum: "no" "yes"<br><br>Is default price |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| is\_default | string<br><br>Is default price |

**403**

Poorly filled parameters

post/products/pricegroups

server

https://www.vendus.co.ao/ws/v1.1/products/pricegroups

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Vip",      *   "is_default": "no"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Vip",      *   "is_default": "no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1pricegroups~1{id}/get)
/products/pricegroups/{id}
---------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| is\_default | string<br><br>Is default price |

**404**

No data

get/products/pricegroups/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/pricegroups/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Vip",      *   "is_default": "no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1stocks~1{id}/get)
/products/stocks/{id}
-----------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| total | integer<br><br>Stock Total |
| stores | Array of objects |

**404**

No data

get/products/stocks/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/stocks/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/stocks/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "total": "155",      *   "stores": [          *   {                  *   "store_id": "12345",                      *   "stock": "55",                      *   "stock_alert": 20                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1stocks/post)
/products/stocks/
--------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| product\_id<br><br>required | integer<br><br>Product ID |
| lot\_id | integer<br><br>Lot ID |
| amount | integer<br><br>Stock |
| type | string<br><br>Enum: "reset" "add" "remove" "transfer"<br><br>Operation Type |
| store\_id | integer<br><br>Stock |
| store\_id\_target | integer<br><br>To be used only when type = transfer |
| stockAlert | integer<br><br>Minimum Stock Alert |
| obs | string<br><br>Observation |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| total | integer<br><br>Stock Total |
| stores | Array of objects |

**403**

Poorly filled parameters

post/products/stocks

server

https://www.vendus.co.ao/ws/v1.1/products/stocks

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "product_id": 12345,      *   "lot_id": 12345,      *   "amount": "21",      *   "type": "transfer",      *   "store_id": "21",      *   "store_id_target": "12345",      *   "stockAlert": "5",      *   "obs": "Supplier delivery"       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "total": "155",      *   "stores": [          *   {                  *   "store_id": "12345",                      *   "stock": "55",                      *   "stock_alert": 20                               }                   ]       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1units/get)
/products/units/
-----------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Title |
| default | integer<br><br>Status |
| decimal | integer<br><br>Decimal precision, useful for weight units |

**404**

No data

get/products/units

server

https://www.vendus.co.ao/ws/v1.1/products/units

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/units/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Kg",      *   "default": "on",      *   "decimal": "3"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1units~1{id}/get)
/products/units/{id}
---------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Title |
| default | integer<br><br>Status |
| decimal | integer<br><br>Decimal precision, useful for weight units |

**404**

No data

get/products/units/{id}

server

https://www.vendus.co.ao/ws/v1.1/products/units/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/units/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Kg",      *   "default": "on",      *   "decimal": "3"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Products/paths/~1products~1variants/get)
/products/variants/
-----------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| parent\_id | integer<br><br>Parent ID |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| title | string<br><br>Name |
| code | string<br><br>Code |

**404**

No data

get/products/variants

server

https://www.vendus.co.ao/ws/v1.1/products/variants

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/products/variants/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'parent\_id' \=> 123, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "title": "Color",      *   "code": "blue"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Receipts)
Receipts
-----------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Receipts/paths/~1receipts/get)
/receipts/
----------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| status | string<br><br>Enum: "active" "inactive"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Receipt ID |
| title | string<br><br>Title |
| type | string<br><br>Type |

**404**

No data

get/receipts

server

https://www.vendus.co.ao/ws/v1.1/receipts

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/receipts/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'status' \=> 'active', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Documento A4",      *   "type": "layouta4"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Receipts/paths/~1receipts/post)
/receipts/
-----------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Title |
| comercial\_name | string<br><br>Comercial Name |
| type | string<br><br>Enum: "receipt" "layouta4"<br><br>Type |
| phone | string<br><br>Phone |
| phone\_cost | string<br><br>Enum: "none" "phone" "mobile" "other"<br><br>Phone Cost |
| phone\_cost\_other | string<br><br>Custom Phone Cost |
| mobile | string<br><br>Cellphone |
| mobile\_cost | string<br><br>Enum: "none" "phone" "mobile" "other"<br><br>Mobile Cost |
| mobile\_cost\_other | string<br><br>Custom Mobile Cost |
| fax | string<br><br>Fax |
| email | string<br><br>Email |
| site | string<br><br>Site url |
| nib | string<br><br>Email |
| iban | string<br><br>Email |
| swift | string<br><br>Swift |
| header | string<br><br>Header Text |
| footer | string<br><br>Footer Text |
| served | string<br><br>Served |
| show\_references | string<br><br>Enum: "yes" "no"<br><br>Show References |
| show\_tax | string<br><br>Enum: "yes" "no"<br><br>Show Tax |
| show\_operator | string<br><br>Enum: "yes" "no"<br><br>Show Operator |
| bilingual | string<br><br>Enum: "yes" "no"<br><br>Bilingual |
| show\_address | string<br><br>Enum: "yes" "no"<br><br>Show Address |
| nc\_signature | string<br><br>Enum: "yes" "no"<br><br>NC - Signature |
| qrcode | string<br><br>Enum: "no" "native" "image" "image\_hd"<br><br>Qrcode Type |
| layout\_id | string<br><br>Layout ID |
| colors | string<br><br>Layout Colors |
| image | string<br><br>Image |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Receipt ID |
| type | string<br><br>Type |
| title | string<br><br>Title |
| comercial\_name | string<br><br>Comercial Name |
| phone | string<br><br>Phone |
| phone\_cost | string<br><br>Phone Cost |
| phone\_cost\_other | string<br><br>Custom Phone Cost |
| mobile | string<br><br>Cellphone |
| mobile\_cost | string<br><br>Mobile Cost |
| mobile\_cost\_other | string<br><br>Custom Mobile Cost |
| fax | string<br><br>Fax |
| email | string<br><br>Email |
| site | string<br><br>Site url |
| nib | string<br><br>Email |
| iban | string<br><br>Email |
| swift | string<br><br>Swift |
| header | string<br><br>Header Text |
| footer | string<br><br>Footer Text |
| served | string<br><br>Served |
| show\_references | string<br><br>Show References |
| show\_tax | string<br><br>Show Tax |
| show\_operator | string<br><br>Show Operator Name |
| bilingual | string<br><br>Show Bilingual |
| show\_address | string<br><br>Show Address |
| nc\_signature | string<br><br>NC - Signature |
| qrcode | string<br><br>Qrcode Type |
| layout\_id | string<br><br>Layout ID |
| colors | string<br><br>Layout Colors |
| images | object<br><br>Images List |

**403**

Poorly filled parameters

post/receipts

server

https://www.vendus.co.ao/ws/v1.1/receipts

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Documento A4",      *   "comercial_name": "comercial_name",      *   "type": "layouta4",      *   "phone": "210192930",      *   "phone_cost": "phone_cost",      *   "phone_cost_other": "phone_cost_other",      *   "mobile": "918 876 546",      *   "mobile_cost": "mobile_cost",      *   "mobile_cost_other": "mobile_cost_other",      *   "fax": "210 192 930",      *   "email": "alberto.lopes@dominio.pt",      *   "site": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "nib": "1234 4321 12345678901 72",      *   "iban": "PT50 1234 4321 12345678901 72",      *   "swift": "CGDIPTPL",      *   "header": "header",      *   "footer": "footer",      *   "served": "served",      *   "show_references": "show_references",      *   "show_tax": "show_tax",      *   "show_operator": "show_operator",      *   "bilingual": "bilingual",      *   "show_address": "show_address",      *   "nc_signature": "nc_signature",      *   "qrcode": "qrcode",      *   "layout_id": "layout_id",      *   "colors": "colors",      *   "image": "[https://www.site.com/img/1.png](https://www.site.com/img/1.png)     "       }`

### Response samples

*   201

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "type": "layouta4",      *   "title": "Documento A4",      *   "comercial_name": "comercial_name",      *   "phone": "210192930",      *   "phone_cost": "phone",      *   "phone_cost_other": "phone_cost_other",      *   "mobile": "918 876 546",      *   "mobile_cost": "mobile",      *   "mobile_cost_other": "mobile_cost_other",      *   "fax": "210 192 930",      *   "email": "alberto.lopes@dominio.pt",      *   "site": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "nib": "1234 4321 12345678901 72",      *   "iban": "PT50 1234 4321 12345678901 72",      *   "swift": "CGDIPTPL",      *   "header": "header",      *   "footer": "footer",      *   "served": "served",      *   "show_references": "show_references",      *   "show_tax": "show_tax",      *   "show_operator": "show_operator",      *   "bilingual": "bilingual",      *   "show_address": "show_address",      *   "nc_signature": "nc_signature",      *   "qrcode": "qrcode",      *   "layout_id": "layout_id",      *   "colors": "colors",      *   "images": {          *   "58": "/foto/b906f77_58.png",              *   "m": "/foto/b906f77_m.png",              *   "xs": "/foto/b906f77_xs.png",              *   "72b": "/foto/b906f77_72b.png",              *   "receipt": "/foto/b906f77_receipt.png"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Receipts/paths/~1receipts~1{id}/get)
/receipts/{id}
--------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Receipt ID |
| type | string<br><br>Type |
| title | string<br><br>Title |
| comercial\_name | string<br><br>Comercial Name |
| phone | string<br><br>Phone |
| phone\_cost | string<br><br>Phone Cost |
| phone\_cost\_other | string<br><br>Custom Phone Cost |
| mobile | string<br><br>Cellphone |
| mobile\_cost | string<br><br>Mobile Cost |
| mobile\_cost\_other | string<br><br>Custom Mobile Cost |
| fax | string<br><br>Fax |
| email | string<br><br>Email |
| site | string<br><br>Site url |
| nib | string<br><br>Email |
| iban | string<br><br>Email |
| swift | string<br><br>Swift |
| header | string<br><br>Header Text |
| footer | string<br><br>Footer Text |
| served | string<br><br>Served |
| show\_references | string<br><br>Show References |
| show\_tax | string<br><br>Show Tax |
| show\_operator | string<br><br>Show Operator Name |
| bilingual | string<br><br>Show Bilingual |
| show\_address | string<br><br>Show Address |
| nc\_signature | string<br><br>NC - Signature |
| qrcode | string<br><br>Qrcode Type |
| layout\_id | string<br><br>Layout ID |
| colors | string<br><br>Layout Colors |
| images | object<br><br>Images List |

**404**

No data

get/receipts/{id}

server

https://www.vendus.co.ao/ws/v1.1/receipts/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/receipts/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "type": "layouta4",      *   "title": "Documento A4",      *   "comercial_name": "comercial_name",      *   "phone": "210192930",      *   "phone_cost": "phone",      *   "phone_cost_other": "phone_cost_other",      *   "mobile": "918 876 546",      *   "mobile_cost": "mobile",      *   "mobile_cost_other": "mobile_cost_other",      *   "fax": "210 192 930",      *   "email": "alberto.lopes@dominio.pt",      *   "site": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "nib": "1234 4321 12345678901 72",      *   "iban": "PT50 1234 4321 12345678901 72",      *   "swift": "CGDIPTPL",      *   "header": "header",      *   "footer": "footer",      *   "served": "served",      *   "show_references": "show_references",      *   "show_tax": "show_tax",      *   "show_operator": "show_operator",      *   "bilingual": "bilingual",      *   "show_address": "show_address",      *   "nc_signature": "nc_signature",      *   "qrcode": "qrcode",      *   "layout_id": "layout_id",      *   "colors": "colors",      *   "images": {          *   "58": "/foto/b906f77_58.png",              *   "m": "/foto/b906f77_m.png",              *   "xs": "/foto/b906f77_xs.png",              *   "72b": "/foto/b906f77_72b.png",              *   "receipt": "/foto/b906f77_receipt.png"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Receipts/paths/~1receipts~1{id}/patch)
/receipts/{id}
----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br><br>required | string<br><br>Title |
| comercial\_name | string<br><br>Comercial Name |
| type | string<br><br>Enum: "receipt" "layouta4"<br><br>Type |
| phone | string<br><br>Phone |
| phone\_cost | string<br><br>Enum: "none" "phone" "mobile" "other"<br><br>Phone Cost |
| phone\_cost\_other | string<br><br>Custom Phone Cost |
| mobile | string<br><br>Cellphone |
| mobile\_cost | string<br><br>Enum: "none" "phone" "mobile" "other"<br><br>Mobile Cost |
| mobile\_cost\_other | string<br><br>Custom Mobile Cost |
| fax | string<br><br>Fax |
| email | string<br><br>Email |
| site | string<br><br>Site url |
| nib | string<br><br>Email |
| iban | string<br><br>Email |
| swift | string<br><br>Swift |
| header | string<br><br>Header Text |
| footer | string<br><br>Footer Text |
| served | string<br><br>Served |
| show\_references | string<br><br>Enum: "yes" "no"<br><br>Show References |
| show\_tax | string<br><br>Enum: "yes" "no"<br><br>Show Tax |
| show\_operator | string<br><br>Enum: "yes" "no"<br><br>Show Operator |
| bilingual | string<br><br>Enum: "yes" "no"<br><br>Bilingual |
| show\_address | string<br><br>Enum: "yes" "no"<br><br>Show Address |
| nc\_signature | string<br><br>Enum: "yes" "no"<br><br>NC - Signature |
| qrcode | string<br><br>Enum: "no" "native" "image" "image\_hd"<br><br>Qrcode Type |
| layout\_id | string<br><br>Layout ID |
| colors | string<br><br>Layout Colors |
| image | string<br><br>Image |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Receipt ID |
| type | string<br><br>Type |
| title | string<br><br>Title |
| comercial\_name | string<br><br>Comercial Name |
| phone | string<br><br>Phone |
| phone\_cost | string<br><br>Phone Cost |
| phone\_cost\_other | string<br><br>Custom Phone Cost |
| mobile | string<br><br>Cellphone |
| mobile\_cost | string<br><br>Mobile Cost |
| mobile\_cost\_other | string<br><br>Custom Mobile Cost |
| fax | string<br><br>Fax |
| email | string<br><br>Email |
| site | string<br><br>Site url |
| nib | string<br><br>Email |
| iban | string<br><br>Email |
| swift | string<br><br>Swift |
| header | string<br><br>Header Text |
| footer | string<br><br>Footer Text |
| served | string<br><br>Served |
| show\_references | string<br><br>Show References |
| show\_tax | string<br><br>Show Tax |
| show\_operator | string<br><br>Show Operator Name |
| bilingual | string<br><br>Show Bilingual |
| show\_address | string<br><br>Show Address |
| nc\_signature | string<br><br>NC - Signature |
| qrcode | string<br><br>Qrcode Type |
| layout\_id | string<br><br>Layout ID |
| colors | string<br><br>Layout Colors |
| images | object<br><br>Images List |

**403**

Poorly filled parameters

patch/receipts/{id}

server

https://www.vendus.co.ao/ws/v1.1/receipts/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "title": "Documento A4",      *   "comercial_name": "comercial_name",      *   "type": "layouta4",      *   "phone": "210192930",      *   "phone_cost": "phone_cost",      *   "phone_cost_other": "phone_cost_other",      *   "mobile": "918 876 546",      *   "mobile_cost": "mobile_cost",      *   "mobile_cost_other": "mobile_cost_other",      *   "fax": "210 192 930",      *   "email": "alberto.lopes@dominio.pt",      *   "site": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "nib": "1234 4321 12345678901 72",      *   "iban": "PT50 1234 4321 12345678901 72",      *   "swift": "CGDIPTPL",      *   "header": "header",      *   "footer": "footer",      *   "served": "served",      *   "show_references": "show_references",      *   "show_tax": "show_tax",      *   "show_operator": "show_operator",      *   "bilingual": "bilingual",      *   "show_address": "show_address",      *   "nc_signature": "nc_signature",      *   "qrcode": "qrcode",      *   "layout_id": "layout_id",      *   "colors": "colors",      *   "image": "[https://www.site.com/img/1.png](https://www.site.com/img/1.png)     "       }`

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "type": "layouta4",      *   "title": "Documento A4",      *   "comercial_name": "comercial_name",      *   "phone": "210192930",      *   "phone_cost": "phone",      *   "phone_cost_other": "phone_cost_other",      *   "mobile": "918 876 546",      *   "mobile_cost": "mobile",      *   "mobile_cost_other": "mobile_cost_other",      *   "fax": "210 192 930",      *   "email": "alberto.lopes@dominio.pt",      *   "site": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "nib": "1234 4321 12345678901 72",      *   "iban": "PT50 1234 4321 12345678901 72",      *   "swift": "CGDIPTPL",      *   "header": "header",      *   "footer": "footer",      *   "served": "served",      *   "show_references": "show_references",      *   "show_tax": "show_tax",      *   "show_operator": "show_operator",      *   "bilingual": "bilingual",      *   "show_address": "show_address",      *   "nc_signature": "nc_signature",      *   "qrcode": "qrcode",      *   "layout_id": "layout_id",      *   "colors": "colors",      *   "images": {          *   "58": "/foto/b906f77_58.png",              *   "m": "/foto/b906f77_m.png",              *   "xs": "/foto/b906f77_xs.png",              *   "72b": "/foto/b906f77_72b.png",              *   "receipt": "/foto/b906f77_receipt.png"                   }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers)
Registers
-------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers/paths/~1registers/get)
/registers/
-------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| store\_id | integer<br><br>Store ID |
| type | string<br><br>Register Type |
| isActive | string<br><br>Value: "yes"<br><br>Active Registers |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Register ID |
| store\_id | integer<br><br>Store ID |
| title | string<br><br>Title |
| products\_show\_reference | string<br><br>Show Reference |
| products\_show\_tax | string<br><br>Show Tax |
| document\_type\_id | string<br><br>Document Type ID |
| expires | string<br><br>Expiration date |
| status | string<br><br>Status |
| situation | string<br><br>Status |
| mode | string<br><br>Register Mode |
| type | string<br><br>Register Type |
| show\_products | string<br><br>Show Products |
| default\_pay\_due | string<br><br>Default Pay Due |

**404**

No data

get/registers

server

https://www.vendus.co.ao/ws/v1.1/registers

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/registers/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'store\_id' \=> 1234, 
    'type' \=> '<code>auto</code> - Automático<br /><code>pos</code> - Normal (Venda Produtos/Serviços)<br /><code>rest</code> - Restaurante (Gestão de Salas/Mesas)<br /><code>api</code> - API (Integração Programática)<br /><code>office</code> - Office<br /><code>rest\_terminal</code> - Terminal de Pedidos (Pedidos à Mesa/Cozinha)<br /> Multiple: pos,rest\_terminal', 
    'isActive' \=> 'isActive', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "store_id": "123",      *   "title": "POS 1",      *   "products_show_reference": "yes",      *   "products_show_tax": "yes",      *   "document_type_id": "FT",      *   "expires": "2025-07-20",      *   "status": "on",      *   "situation": "on",      *   "mode": "mode",      *   "type": "pos",      *   "show_products": "show_products",      *   "default_pay_due": "default_pay_due"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers/paths/~1registers~1{id}/get)
/registers/{id}
-----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Register ID |
| store\_id | integer<br><br>Store ID |
| title | string<br><br>Title |
| expires | string<br><br>Expiration date |
| subscription\_active | string<br><br>Register subscription status |
| type | string<br><br>Register Type |
| finalize\_advanced | string<br><br>Whether to use advanced finalize |
| status | string<br><br>Status |
| situation | string<br><br>Status |
| mode | string<br><br>Register Mode |
| document\_type\_id | string<br><br>Default Document Type |
| prices\_group | integer<br><br>Register Price Group |
| products | object<br><br>Products options |
| show\_tax | string<br><br>Whether visible prices should include tax |
| default\_tax\_value | string<br><br>Default Tax Value |
| print | object<br><br>Printing options |
| print\_popup | string<br><br>Whether to print document or send it by email |
| show\_products | string<br><br>Show Products |
| default\_pay\_due | string<br><br>Registers default due date |

**404**

No data

get/registers/{id}

server

https://www.vendus.co.ao/ws/v1.1/registers/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/registers/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "id",      *   "store_id": "123",      *   "title": "POS 1",      *   "expires": "2025-07-20",      *   "subscription_active": "yes",      *   "type": "pos",      *   "finalize_advanced": "yes",      *   "status": "on",      *   "situation": "on",      *   "mode": "mode",      *   "document_type_id": "document_type_id",      *   "prices_group": "prices_group",      *   "products": {          *   "show_reference": "yes",              *   "show_tax": "yes"                   },      *   "show_tax": "yes",      *   "default_tax_value": "INT",      *   "print": {          *   "duplicate": {                  *   "active": "yes",                      *   "copies": "2"                               },              *   "method": "browser",              *   "use_default_printer": 1,              *   "printer_name": "Epson TM-T20II",              *   "paper_size": "Epson TM-T20II",              *   "escpos_type": "v1"                   },      *   "print_popup": "print_popup",      *   "show_products": "show_products",      *   "default_pay_due": "15,30,60,90"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers/paths/~1registers~1balance/get)
/registers/balance/
------------------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| amount | string<br><br>Amount |

**404**

No data

get/registers/balance

server

https://www.vendus.co.ao/ws/v1.1/registers/balance

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/registers/balance/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "amount": "Current balance on register"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers/paths/~1registers~1{id}~1movements/get)
/registers/movements/
----------------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| since | string<br><br>Since this date |
| until | string<br><br>Until this date |
| return | string<br><br>return |
| operation | string<br><br>operation |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| operation | string<br><br>Operation |
| type | string<br><br>Official type |
| amount | string<br><br>Amount |
| obs | string<br><br>Observations |
| document\_id | integer<br><br>Document ID |
| user\_id | integer<br><br>User ID |
| date | string<br><br>Date |
| time | string<br><br>Time |

**404**

No data

get/registers/{id}/movements

server

https://www.vendus.co.ao/ws/v1.1/registers/{id}/movements

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/registers/movements/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'since' \=> '2025-07-29', 
    'until' \=> '2025-07-29', 
    'return' \=> 'summary/list', 
    'operation' \=> 'point', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "operation": "open",      *   "type": "NU",      *   "amount": "23.15",      *   "obs": "Took out money to pay our supplier",      *   "document_id": 43334,      *   "user_id": 982,      *   "date": "2025-07-29",      *   "time": "12:00:00"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Registers/paths/~1registers~1{id}~1movements/post)
/registers/movements/
-----------------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| operation<br><br>required | string<br><br>Enum: "in - Entrada" "out - Saída" "open - Abertura" "close - Fecho" "point - Ponto de Caixa"<br><br>Operation |
| type<br><br>required | string<br><br>Enum: "NU - Numerário" "CC - Cartão de Crédito" "CD - Cartão de Débito" "CO - Cartão Oferta" "CS - Compensação de Saldos C/C" "DE - Cartão de Pontos" "TR - Ticket Restaurante" "MB - Referência MB" "OU - Outro" "CH - Cheque Bancário" "LC - Letra Comercial" "TB - Transferência Bancária" "PR - Permuta de Bens" "MBWAY - MB WAY" "ZARPH - Zarph" "ALICE - Alice" "CASHMATIC - Cashmatic" "CASHLOGY - Cashlogy" "ITHINKIOT - iThink IoT" "MYPOS - MyPOS" "TPASIBS - TPA SIBS" "VENDUSPAY - Vendus Pay"<br><br>Official type |
| amount<br><br>required | string<br><br>Amount |
| obs | string<br><br>Some text explaining the movement |
| email | string<br><br>email |
| return | string<br><br>Enum: "summary" "list"<br><br>What to return |
| output | string<br><br>Enum: "pdf" "escpos" "html" "email"<br><br>Printable Output |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| operation | string<br><br>Operation |
| type | string<br><br>Official type |
| amount | string<br><br>Amount |
| obs | string<br><br>Observations |
| output | string<br><br>Printable output |

**403**

Poorly filled parameters

post/registers/{id}/movements

server

https://www.vendus.co.ao/ws/v1.1/registers/{id}/movements

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "operation": "open",      *   "type": "NU",      *   "amount": "23.15",      *   "obs": "Took out money to pay our supplier",      *   "email": "1234@gmail.com",      *   "return": "summary",      *   "output": "html"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "operation": "open",      *   "type": "NU",      *   "amount": "23.15",      *   "obs": "Took out money to pay our supplier",      *   "output": "Base64 Encoded"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Rooms)
Rooms
-----------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Rooms/paths/~1rooms/get)
/rooms/
-------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| store\_id | integer<br><br>Store ID |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Room ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| store\_id | integer<br><br>Store ID |
| order | integer<br><br>Display order in a list |
| people\_request | string<br><br>If table should request the number of people for open it |

**404**

No data

get/rooms

server

https://www.vendus.co.ao/ws/v1.1/rooms

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/rooms/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'store\_id' \=> 1234, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Sala AB",      *   "description": "Sala do Piso 2",      *   "store_id": "123",      *   "order": "1",      *   "people_request": "yes|no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Rooms/paths/~1rooms~1{id}/get)
/rooms/{id}
-----------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Room ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| store\_id | integer<br><br>Store ID |
| order | integer<br><br>Display order in a list |
| people\_request | string<br><br>If table should request the number of people for open it |

**404**

No data

get/rooms/{id}

server

https://www.vendus.co.ao/ws/v1.1/rooms/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/rooms/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Sala AB",      *   "description": "Sala do Piso 2",      *   "store_id": "123",      *   "order": "1",      *   "people_request": "yes|no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption)
Selfconsumption
-------------------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption/paths/~1selfconsumption/get)
/selfconsumption/
-------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| search\_employee | integer<br><br>Employee ID |
| refresh | integer<br><br>Refresh |
| date\_start | string<br><br>Date start |
| date\_end | string<br><br>Date end |
| store\_id | integer<br><br>Id |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| records | object |
| totalSpending | integer |
| pagesCount | integer |

**404**

No data

get/selfconsumption

server

https://www.vendus.co.ao/ws/v1.1/selfconsumption

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'search\_employee' \=> 12345, 
    'refresh' \=> 1, 
    'date\_start' \=> '12345', 
    'date\_end' \=> '12345', 
    'store\_id' \=> 12345, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "records": { },      *   "totalSpending": "totalSpending",      *   "pagesCount": "pagesCount"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption/paths/~1selfconsumption/post)
/selfconsumption/
--------------------------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| employee | integer<br><br>Employee ID |
| date | string<br><br>Date |
| hour | string<br><br>Hour |
| store\_id | integer<br><br>Register ID |
| register\_id | integer<br><br>Store ID |
| products<br><br>required | object<br><br>Products |
| observations | string<br><br>Observations |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| result | string |

**403**

Poorly filled parameters

post/selfconsumption

server

https://www.vendus.co.ao/ws/v1.1/selfconsumption

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "employee": "12345",      *   "date": "2019-01-01",      *   "hour": "12:00:00",      *   "store_id": "12345",      *   "register_id": "12345",      *   "products": { },      *   "observations": "Lorem ipsum"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "result": "result"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption/paths/~1selfconsumption~1{id}/get)
/selfconsumption/{id}
-----------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| selfconsumption | object |
| products | object |

**404**

No data

get/selfconsumption/{id}

server

https://www.vendus.co.ao/ws/v1.1/selfconsumption/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'getItem';
$params  \= array(
    'id' \=> 12345, 

);
$content \= json\_encode($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_POSTFIELDS, $content);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
curl\_setopt($curl, CURLOPT\_HTTPHEADER,
    array(
        "Content-type: application/json",
        "Content-Length: " . strlen($content),
    )
);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "selfconsumption": { },      *   "products": { }       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption/paths/~1selfconsumption~1{id}/patch)
/selfconsumption/{id}
-------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| employee | integer<br><br>Employee ID |
| date | string<br><br>Date |
| hour | string<br><br>Hour |
| store\_id | integer<br><br>Register ID |
| register\_id | integer<br><br>Store ID |
| products<br><br>required | object<br><br>Products |
| observations | string<br><br>Observations |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| result | string |
| id  | integer |

**403**

Poorly filled parameters

patch/selfconsumption/{id}

server

https://www.vendus.co.ao/ws/v1.1/selfconsumption/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "12345",      *   "employee": "12345",      *   "date": "2019-01-01",      *   "hour": "12:00:00",      *   "store_id": "12345",      *   "register_id": "12345",      *   "products": { },      *   "observations": "Lorem ipsum"       }`

### Response samples

*   200

Content type

application/json

Copy

`{  *   "result": "result",      *   "id": "id"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Selfconsumption/paths/~1selfconsumption~1{id}/delete)
/selfconsumption/{id}
--------------------------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

Successfully deleted

**400**

Due to an error it was not possible to delete

delete/selfconsumption/{id}

server

https://www.vendus.co.ao/ws/v1.1/selfconsumption/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

[](https://www.vendus.co.ao/ws/v1.1/#tag/Stores)
Stores
-------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Stores/paths/~1stores/get)
/stores/
----------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| type | string<br><br>Enum: "all" "store" "warehouse"<br><br>Type |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Store ID |
| type | string<br><br>Type |
| title | string<br><br>Title |
| tax\_id | string<br><br>Default tax rate |
| tax\_exemption | string<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| address | string<br><br>Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City/Locality |
| country | string<br><br>Country |
| email | string<br><br>Email |
| phone | string<br><br>Phone |
| status | string<br><br>Status |
| cae | string<br><br>CAE |
| share\_stock\_store\_id | integer<br><br>Stock Configuration |
| sync\_pos | string<br><br>POS Sincronization |
| sync\_pos\_ping | string<br><br>POS Sincronization behavior |

**404**

No data

get/stores

server

https://www.vendus.co.ao/ws/v1.1/stores

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/stores/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'type' \=> 'store', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

``{  *   "id": "id",      *   "type": "store",      *   "title": "Loja da Baixa",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "address": "Rua Nova de Mil Fontes, 35",      *   "postalcode": "1100-234",      *   "city": "Setúbal",      *   "country": "PT",      *   "email": "loja.baixa@empresa.pt",      *   "phone": "210192029",      *   "status": "on",      *   "cae": "76290",      *   "share_stock_store_id": "Uses Own Stock (0) or Other Store Stock (Store ID)",      *   "sync_pos": "YES|NO - if Store`s POS are linked",      *   "sync_pos_ping": "YES|NO - if Store`s POS are linked with ping socket method"       }``

[](https://www.vendus.co.ao/ws/v1.1/#tag/Stores/paths/~1stores~1{id}/get)
/stores/{id}
--------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Store ID |
| type | string<br><br>Type |
| title | string<br><br>Title |
| tax\_id | string<br><br>Default tax rate |
| tax\_exemption | string<br><br>Tax exemption reason |
| tax\_exemption\_law | string<br><br>Tax exemption applicable law |
| address | string<br><br>Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City/Locality |
| country | string<br><br>Country |
| email | string<br><br>Email |
| phone | string<br><br>Phone |
| status | string<br><br>Status |
| cae | string<br><br>CAE |
| share\_stock\_store\_id | integer<br><br>Stock Configuration |
| sync\_pos | string<br><br>POS Sincronization |
| sync\_pos\_ping | string<br><br>POS Sincronization behavior |

**404**

No data

get/stores/{id}

server

https://www.vendus.co.ao/ws/v1.1/stores/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/stores/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

``{  *   "id": "id",      *   "type": "store",      *   "title": "Loja da Baixa",      *   "tax_id": "NOR",      *   "tax_exemption": "M40",      *   "tax_exemption_law": "Some law",      *   "address": "Rua Nova de Mil Fontes, 35",      *   "postalcode": "1100-234",      *   "city": "Setúbal",      *   "country": "PT",      *   "email": "loja.baixa@empresa.pt",      *   "phone": "210192029",      *   "status": "on",      *   "cae": "76290",      *   "share_stock_store_id": "Uses Own Stock (0) or Other Store Stock (Store ID)",      *   "sync_pos": "YES|NO - if Store`s POS are linked",      *   "sync_pos_ping": "YES|NO - if Store`s POS are linked with ping socket method"       }``

[](https://www.vendus.co.ao/ws/v1.1/#tag/Suppliers)
Suppliers
-------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Suppliers/paths/~1suppliers/get)
/suppliers/
-------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| q   | string<br><br>Search string |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| email | string<br><br>Email |
| status | string<br><br>Enum: "active - Ativo" "inactive - Inativo"<br><br>Status |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

**404**

No data

get/suppliers

server

https://www.vendus.co.ao/ws/v1.1/suppliers

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/suppliers/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'q' \=> 'Alberto', 
    'fiscal\_id' \=> '123456789', 
    'name' \=> 'Alberto Caeiro', 
    'email' \=> 'alberto.caeiro@portugal.pt', 
    'status' \=> 'active', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Suppliers/paths/~1suppliers/post)
/suppliers/
--------------------------------------------------------------------------------------

##### Request Body schema: application/json

|     |     |
| --- | --- |
| fiscal\_id | string<br><br>Fiscal ID of supplier |
| name | string<br><br>Supplier Name |
| address | string<br><br>Postal Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City |
| phone | string<br><br>Phone |
| mobile | string<br><br>Mobile |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

### Responses

**201**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

**403**

Poorly filled parameters

post/suppliers

server

https://www.vendus.co.ao/ws/v1.1/suppliers

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "fiscal_id": "223098091",      *   "name": "Alberto Lopes",      *   "address": "Av. Sousa Magalhães, 126",      *   "postalcode": "4100-039",      *   "city": "Lisboa",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

### Response samples

*   201

Content type

application/json

Copy

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Suppliers/paths/~1suppliers~1{id}/get)
/suppliers/{id}
-----------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

**404**

No data

get/suppliers/{id}

server

https://www.vendus.co.ao/ws/v1.1/suppliers/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/suppliers/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Suppliers/paths/~1suppliers~1{id}/patch)
/suppliers/{id}
-------------------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| fiscal\_id | string<br><br>Fiscal ID of supplier |
| name | string<br><br>Supplier Name |
| address | string<br><br>Postal Address |
| postalcode | string<br><br>Postal Code |
| city | string<br><br>City |
| phone | string<br><br>Phone |
| mobile | string<br><br>Mobile |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>ID |
| fiscal\_id | string<br><br>Fiscal ID |
| name | string<br><br>Name |
| address | string<br><br>Address |
| city | string<br><br>City |
| postalcode | string<br><br>Postal code |
| phone | string<br><br>Phone |
| mobile | string<br><br>Cellphone |
| email | string<br><br>Email |
| website | string<br><br>Site url |
| country | string<br><br>Country code using ISO 3166-1 alpha-2 |

**403**

Poorly filled parameters

patch/suppliers/{id}

server

https://www.vendus.co.ao/ws/v1.1/suppliers/{id}

### Request samples

*   Payload
*   PHP

Content type

application/json

Copy

`{  *   "fiscal_id": "223098091",      *   "name": "Alberto Lopes",      *   "address": "Av. Sousa Magalhães, 126",      *   "postalcode": "4100-039",      *   "city": "Lisboa",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "12345",      *   "fiscal_id": "123456789",      *   "name": "Alberto Caeiro",      *   "address": "Av. Sousa Magalhães, 126",      *   "city": "Lisboa",      *   "postalcode": "4100-039",      *   "phone": "210 192 930",      *   "mobile": "918 876 546",      *   "email": "alberto.lopes@dominio.pt",      *   "website": "[https://www.dominio.pt](https://www.dominio.pt/)     ",      *   "country": "PT"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Tables)
Tables
-------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Tables/paths/~1tables/get)
/tables/
----------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| parent | integer<br><br>Parent |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Room ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| occupation | integer<br><br>Occupation |
| parent | integer<br><br>Parent |
| order | integer<br><br>Display order in a list |
| people\_request | string<br><br>If table should request the number of people for open it |

**404**

No data

get/tables

server

https://www.vendus.co.ao/ws/v1.1/tables

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/tables/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'parent' \=> 1234, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Mesa C",      *   "description": "Mesa Central",      *   "occupation": "5",      *   "parent": "1234",      *   "order": "1",      *   "people_request": "auto|yes|no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Tables/paths/~1tables~1{id}/get)
/tables/{id}
--------------------------------------------------------------------------------------

##### path Parameters

|     |     |
| --- | --- |
| id<br><br>required | integer <int64> |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | integer<br><br>Room ID |
| title | string<br><br>Title |
| description | string<br><br>Description |
| occupation | integer<br><br>Occupation |
| parent | integer<br><br>Parent |
| order | integer<br><br>Display order in a list |
| people\_request | string<br><br>If table should request the number of people for open it |

**404**

No data

get/tables/{id}

server

https://www.vendus.co.ao/ws/v1.1/tables/{id}

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/tables/{id}';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "title": "Mesa C",      *   "description": "Mesa Central",      *   "occupation": "5",      *   "parent": "1234",      *   "order": "1",      *   "people_request": "auto|yes|no"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Taxauthority)
Taxauthority
-------------------------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Taxauthority/paths/~1taxauthority~1saft/get)
/taxauthority/saft/
---------------------------------------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| year | integer<br><br>Year |
| month | integer<br><br>Month |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| year | integer<br><br>Year |
| month | integer<br><br>Month |
| xml | string<br><br>Base64 encoded xml |

**404**

No data

get/taxauthority/saft

server

https://www.vendus.co.ao/ws/v1.1/taxauthority/saft

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/taxauthority/saft/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'year' \=> 2025, 
    'month' \=> 3, 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "year": "2025",      *   "month": 3,      *   "xml": "xml"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Taxes)
Taxes
-----------------------------------------------------

[](https://www.vendus.co.ao/ws/v1.1/#tag/Taxes/paths/~1taxes/get)
/taxes/
-------------------------------------------------------------------------

##### query Parameters

|     |     |
| --- | --- |
| all | string<br><br>Value: "yes"<br><br>Return all taxes |

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | string |
| rate | integer |
| country | string |
| title | string |

**404**

No data

get/taxes

server

https://www.vendus.co.ao/ws/v1.1/taxes

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/taxes/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$method  \= 'GET';
$params  \= array(
    'all' \=> 'all', 

);
$url .= '?' . http\_build\_query($params);
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($curl, CURLOPT\_CUSTOMREQUEST, $method);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

`{  *   "id": "id",      *   "rate": "rate",      *   "country": "country",      *   "title": "title"       }`

[](https://www.vendus.co.ao/ws/v1.1/#tag/Taxes/paths/~1taxes~1exemptions/get)
/taxes/exemptions/
------------------------------------------------------------------------------------------------

### Responses

**200**

##### Response Schema: application/json

|     |     |
| --- | --- |
| id  | string<br><br>ID |
| text | string<br><br>Description |
| law | object<br><br>Applicable law |

**404**

No data

get/taxes/exemptions

server

https://www.vendus.co.ao/ws/v1.1/taxes/exemptions

### Request samples

*   PHP

Copy

$url     \= 'https://www.vendus.co.ao/ws/v1.1/taxes/exemptions/';
$apiKey  \= 'c433ff57a5ba6cdf301a48c97d943259';
$curl \= curl\_init($url);
curl\_setopt($curl, CURLOPT\_HTTPAUTH, CURLAUTH\_BASIC);
curl\_setopt($curl, CURLOPT\_USERPWD, $apiKey);
curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);
$result \= curl\_exec($curl);

### Response samples

*   200

Content type

application/json

Copy

Expand all Collapse all

`{  *   "id": "M40",      *   "text": "IVA - autoliquidação",      *   "law": { }       }`

---

# Cegid Vendus API - Overview

API (v1.1)
==========

Overview
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

Our API uses resource-oriented URLs that leverage built in features of HTTP, like authentication, verbs and response codes. So, any HTTP client should be able to communicate with this API without issues.

Before starting to use our API, you first need to get an API key. Please refer to our application or customer support on how to obtain it.

### Documentation

All information about this API is available here: `https://www.vendus.co.ao/ws/v1.1/`  
Also, to access an endpoint documentation, you just have to append `.doc` to its name.

    https://www.vendus.co.ao/ws/v1.1/account.doc

### Rate Limiting

Your API use may have limits in place. If so, all responses will include headers describing the current rate limit status:

    Rate-Limit-Limit: 100
    Rate-Limit-Remaining: 99
    Rate-Limit-Used: 1
    Rate-Limit-Reset: 20

Headers meaning:

*   `Rate-Limit-Limit` - Total credit for current period
*   `Rate-Limit-Remaining` - Remaining credit for current period
*   `Rate-Limit-Used` - Number of credits used for this request
*   `Rate-Limit-Reset` - Number of seconds until the the credit count resets

---

# Cegid Vendus API - Requests

API (v1.1)
==========

Requests
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

The base URL of this api is `https://www.vendus.co.ao/ws/v1.1/`

### Endpoints

You can see a list of available endpoints on the left side of this page, under "Reference".

To target Account endpoint you use:

    https://www.vendus.co.ao/ws/v1.1/account

To target one item of Account endpoint that has id 123 you use:

    https://www.vendus.co.ao/ws/v1.1/account/123

### HTTP Methods/Actions

We use standard HTTP methods to indicate intent of a request:

Each endpoint has a list of allowed methods, than can be one or more of the following:

*   `GET` - To retrieve a resource or a collection of resources
*   `POST` - To create a resource
*   `PATCH` - To modify a resource
*   `PUT` - To set a resource
*   `DELETE` - To delete a resource

### Params

Preferably, all `POST`, `PUT`, `PATCH` requests should be [JSON](http://en.wikipedia.org/wiki/JSON)
 encoded and with content type of `application/json`, or the API may return a `415 Unsupported Media Type` status code.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345 \
        -X PATCH \
        -H 'Content-Type: application/json' \
        -d '{"status":"A"}'

### Pagination

Requests for collections can return between 0 and 1000 results, controlled using the `per_page` and `page` query parameters. All endpoints are limited to 20 results by default.

    GET https://www.vendus.co.ao/ws/v1.1/account?per_page=15&page=2

Whenever a collection is paged, there will be additional headers sent, `X-Paginator-Items` and `X-Paginator-Pages`, containing the count for items and pages respectively.

### Sorting

Some endpoints offer result sorting, triggered using the `sort` query parameter. The value of sort is a comma separated list of fields to sort by. You can specify descending sort by prepending `-` to a field. Not all fields can be sorted on. The endpoint documentation will list supported sort options.

### Limited HTTP Clients

If you have issues on your HTTP client to comply with the above specs, you may overcome them by following these alternatives. This should be a last resource - use it with care.

#### HTTP Methods/Actions

You may send an `action` to specify a request method.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345?action=PATCH

#### Params

You may send your params embed in the request.

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/12345?status=A

---

# Cegid Vendus API - Authentication

API (v1.1)
==========

Authentication
--------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

Before starting to use our api, you first need to get an API key. Please refer to our application or customer support on how to obtain it. Then, you must supply that API key on **every** request you make to the API. All requests are associated with a specific user and permissions are limited to that user's capabilities.

You may authenticate yourself using two methods, either using HTTP Basic Auth or by sending a specific Request Param.

### HTTP Basic Auth

For using this method, you just send the API key as the user for HTTP Basic Auth:

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account

### Request Param

You may send API key as a request parameter, like so:

    $ curl https://www.vendus.co.ao/ws/v1.1/account?api_key=api_key

---

# Cegid Vendus API - Versions

API (v1.1)
==========

Versions
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

Like any other software, this API is always being updated and improved. Minor changes are implemented without impact your use of it. But, there are times when we need to push forward new features or protocols. When this happens, we use versioning to basically launch a new API, while supporting an old one.

### Default Version

Current default version is: `1.1`

There will always be a default version, which is assumed whenever you don't specify one. The default version maybe the latest or not - it all depends on our roadmap implementation. Nevertheless, we will notify you before changing the default version and we'll give enough time to migrate your code, if needed.

### Specifying a version

You may specify which version you intend to use by including it on the enpoint url like so:

    $ curl ... https://www.vendus.co.ao/ws/v1.3/account

### API Versions

#### `1.2` - 2018-07-31

#### `1.1` - 2017-03-16

#### `1.0` - 2016-07-01

#### ~`0.9` - 2016-01-01~

### Deprecated Versions

While we try to maintain active all versions of our API, sometimes it is necessary to discontinue a version. When and if we feel that need, we will notify you in advance and with time.

---

# Resume - Cegid Vendus API

API (v1.1)
==========

Resume
------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/resume/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/resume/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'aggregate' => 'no', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| aggregate | string<br><br>* * *<br><br>yes, no |     | Aggregate accounts with same fiscal id |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| balance | currency | 23.15 | Amount |
| balanceWithin | currency | 23.15 | Amount |
| balanceExpired | currency | 23.15 | Amount |

---

# Cegid Vendus API - Responses

API (v1.1)
==========

Responses
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

By default, all responses are JSON encoded. However, depending on the endpoint your are using, other output formats might be available, like XML, CSV, PDF or even others.

### Specifying an output format

To specify an output format, when available, you just need to append it to the endpoint name, like so:

    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account.xml
    $ curl -u api_key: https://www.vendus.co.ao/ws/v1.1/account/23423.xml
    

### JSON Responses

As stated above, the default for responses is JSON.  
A single resource is represented as a JSON object:

    {
        "id": 123,
        "title": "My Title",
        "price": 243.56
    }

A collection of resources is represented as a JSON array of objects:

    [\
        {\
            "id": 123,\
            "title": "My Title",\
            "price": 243.56\
        },\
        {\
            "id": 124,\
            "title": "My New Title",\
            "price": 271.12\
        }\
    ]

### HTTP Status Codes

We use HTTP status codes to indicate success or failure of a request.

Success Codes

*   `200 OK` - Request succeeded. Response included
*   `201 Created` - Resource created. URL to new resource in Location header
*   `204 No Content` - Request succeeded, but no response body

Error Codes

*   `400 Bad Request` - Could not parse request
*   `401 Unauthorized` - No authentication credentials provided or authentication failed
*   `403 Forbidden` - Authenticated user does not have access
*   `404 Not Found` - Resource not found
*   `415 Unsupported Media Type` - POST/PUT/PATCH request occurred without a valid content-type header
*   `422 Unprocessable Entry` - A request to modify or create a resource failed due to a [validation error](https://www.vendus.co.ao/ws/v1.1/responses.doc#validation)
    
*   `429 Too Many Requests` - Request rejected due to [rate limiting](https://www.vendus.co.ao/ws/v1.1/responses.doc#ratelimit)
    
*   `500, 501, 502, 503, etc` - An internal server error occured

### Enveloping

If your HTTP client makes it difficult to read status codes or headers, we can package everything neatly into the response body. Just include `envelope=true` as a request parameter and the API will always return a 200 HTTP status code. The real status, headers and response will be within the body.

    GET /api/v1/users/does-not-exist?envelope=true

    200 OK

    {
      "status": 404,
      "headers": {
        "Rate-Limit-Limit": 100,
        "Rate-Limit-Remaining": 50,
        "Rate-Limit-Used": 0,
        "Rate-Limit-Reset": 25
      },
      "response": {
        "message": "Not Found"
      }
    }

---

# PaymentMethods - Cegid Vendus API

API (v1.1)
==========

PaymentMethods
--------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Em Dinheiro | Description |
| change | int<br><br>* * *<br><br>`1` \- Yes  <br>`0` \- No |     | Whether it allows change |
| type | string<br><br>* * *<br><br>`NU` - Numerário  <br>`CC` - Cartão de Crédito  <br>`CD` - Cartão de Débito  <br>`CO` - Cartão Oferta  <br>`CS` - Compensação de Saldos C/C  <br>`DE` - Cartão de Pontos  <br>`TR` - Ticket Restaurante  <br>`MB` - Referência MB  <br>`OU` - Outro  <br>`CH` - Cheque Bancário  <br>`LC` - Letra Comercial  <br>`TB` - Transferência Bancária  <br>`PR` - Permuta de Bens  <br>`DNP` - Pagamento em conta corrente - entre 15 e 90 dias ou numa data específica  <br>`MBWAY` - MB WAY  <br>`ZARPH` - Zarph  <br>`ALICE` - Alice  <br>`CASHMATIC` - Cashmatic  <br>`CASHLOGY` - Cashlogy  <br>`ITHINKIOT` - iThink IoT  <br>`MYPOS` - MyPOS  <br>`TPASIBS` - TPA SIBS  <br>`VENDUSPAY` - Vendus Pay |     | Official type |
| status | string<br><br>* * *<br><br>`on` - Active (default)  <br>`off` - Inactive |     | Whether is usable |
| order | int | 1   | Display order in a list |
| stores | collection |     | Store IDs where it is available. If empty, it will be available in all stores |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Em Dinheiro | Description |
| change | int<br><br>* * *<br><br>`1` \- Yes  <br>`0` \- No |     | Whether it allows change |
| type | string<br><br>* * *<br><br>`NU` - Numerário  <br>`CC` - Cartão de Crédito  <br>`CD` - Cartão de Débito  <br>`CO` - Cartão Oferta  <br>`CS` - Compensação de Saldos C/C  <br>`DE` - Cartão de Pontos  <br>`TR` - Ticket Restaurante  <br>`MB` - Referência MB  <br>`OU` - Outro  <br>`CH` - Cheque Bancário  <br>`LC` - Letra Comercial  <br>`TB` - Transferência Bancária  <br>`PR` - Permuta de Bens  <br>`DNP` - Pagamento em conta corrente - entre 15 e 90 dias ou numa data específica  <br>`MBWAY` - MB WAY  <br>`ZARPH` - Zarph  <br>`ALICE` - Alice  <br>`CASHMATIC` - Cashmatic  <br>`CASHLOGY` - Cashlogy  <br>`ITHINKIOT` - iThink IoT  <br>`MYPOS` - MyPOS  <br>`TPASIBS` - TPA SIBS  <br>`VENDUSPAY` - Vendus Pay |     | Official type |
| status | string<br><br>* * *<br><br>`on` - Active (default)  <br>`off` - Inactive |     | Whether is usable |
| order | int | 1   | Display order in a list |
| stores | collection |     | Store IDs where it is available. If empty, it will be available in all stores |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'  => 'Em Dinheiro', 
        'change' => 1, 
        'type'   => 'NU', 
        'status' => 'on', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Em Dinheiro | Description |
| change | int<br><br>* * *<br><br>`1` \- Yes (default)  <br>`0` \- No |     | Whether it allows change |
| **type** | string<br><br>* * *<br><br>`NU` - Numerário  <br>`CC` - Cartão de Crédito  <br>`CD` - Cartão de Débito  <br>`CO` - Cartão Oferta  <br>`CS` - Compensação de Saldos C/C  <br>`DE` - Cartão de Pontos  <br>`TR` - Ticket Restaurante  <br>`MB` - Referência MB  <br>`OU` - Outro  <br>`CH` - Cheque Bancário  <br>`LC` - Letra Comercial  <br>`TB` - Transferência Bancária  <br>`PR` - Permuta de Bens  <br>`DNP` - Pagamento em conta corrente - entre 15 e 90 dias ou numa data específica  <br>`MBWAY` - MB WAY  <br>`ZARPH` - Zarph  <br>`ALICE` - Alice  <br>`CASHMATIC` - Cashmatic  <br>`CASHLOGY` - Cashlogy  <br>`ITHINKIOT` - iThink IoT  <br>`MYPOS` - MyPOS  <br>`TPASIBS` - TPA SIBS  <br>`VENDUSPAY` - Vendus Pay |     | Official type |
| status | string<br><br>* * *<br><br>`on` - Active (default)  <br>`off` - Inactive |     | Whether is usable |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| order | int | 1   | Display order in a list |
| id  | int | 12345 | ID  |
| title | string | Em Dinheiro | Description |
| change | int<br><br>* * *<br><br>`1` \- Yes  <br>`0` \- No |     | Whether it allows change |
| type | string<br><br>* * *<br><br>`NU` - Numerário  <br>`CC` - Cartão de Crédito  <br>`CD` - Cartão de Débito  <br>`CO` - Cartão Oferta  <br>`CS` - Compensação de Saldos C/C  <br>`DE` - Cartão de Pontos  <br>`TR` - Ticket Restaurante  <br>`MB` - Referência MB  <br>`OU` - Outro  <br>`CH` - Cheque Bancário  <br>`LC` - Letra Comercial  <br>`TB` - Transferência Bancária  <br>`PR` - Permuta de Bens  <br>`DNP` - Pagamento em conta corrente - entre 15 e 90 dias ou numa data específica  <br>`MBWAY` - MB WAY  <br>`ZARPH` - Zarph  <br>`ALICE` - Alice  <br>`CASHMATIC` - Cashmatic  <br>`CASHLOGY` - Cashlogy  <br>`ITHINKIOT` - iThink IoT  <br>`MYPOS` - MyPOS  <br>`TPASIBS` - TPA SIBS  <br>`VENDUSPAY` - Vendus Pay |     | Official type |
| status | string<br><br>* * *<br><br>`on` - Active (default)  <br>`off` - Inactive |     | Whether is usable |
| stores | collection |     | Store IDs where it is available. If empty, it will be available in all stores |

---

# Clients - Cegid Vendus API

API (v1.1)
==========

Clients
-------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'q'                  => 'Alberto', 
        'fiscal_id'          => '123456789', 
        'name'               => 'Alberto Caeiro', 
        'email'              => 'alberto.caeiro@portugal.pt', 
        'external_reference' => 'AB892798/19', 
        'status'             => 'active', 
        'date'               => '2025, 2025-07, 2025-07-29', 
        'id'                 => array(
            'min' => 100, 
            'max' => 500, 
        ), 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptionqstringAlbertoSearch stringfiscal\_idfiscal\_id123456789Fiscal IDnamestringAlberto CaeiroNameemailemailalberto.caeiro@portugal.ptEmailexternal\_referencestringAB892798/19External Referencestatusstring

* * *

`active` - Ativo  
`inactive` - Inativo  
Statusdatestring2025, 2025-07, 2025-07-29Creation dateidarrayID range to search

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| min | int | 100 | Min |
| max | int | 500 | Max |

### Response

NameTypeExampleDescriptionidint12345IDfiscal\_idstring123456789Fiscal IDexternal\_referencestringAB892798/19External Referencedefault\_pay\_duestring15Default Pay DuenamestringAlberto CaeiroNameaddressstringAv. Sousa Magalhães, 126AddresscitystringLisboaCitypostalcodestring4100-039Postal codephonestring210 192 930Phonemobilestring918 876 546Cellphoneemailemailalberto.lopes@dominio.ptEmailwebsiteurlhttps://www.dominio.ptSite urlcountrycountryPTCountry code using ISO 3166-1 alpha-2price\_grouparrayPrice Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | VIP | Title |
| is\_default | string<br><br>* * *<br><br>yes, no |     | Is default |

send\_emailstring

* * *

`yes` - Sim  
`no` - Não  
Send Invoiceirs\_retentionstring

* * *

`yes` - Sim  
`no` - Não  
Whether client does IRS retentionstatusstring

* * *

`active` - Ativo  
`inactive` - Inativo  
StatusnotesstringNotesdatestringCreation date

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'include_balance' => 'no', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| include\_balance | string<br><br>* * *<br><br>yes, no |     | Whether to include balance |

### Response

NameTypeExampleDescriptionidint12345IDfiscal\_idstring123456789Fiscal IDexternal\_referencestringAB892798/19External Referencedefault\_pay\_duestring15Default Pay DuenamestringAlberto CaeiroNameaddressstringAv. Sousa Magalhães, 126AddresscitystringLisboaCitypostalcodestring4100-039Postal codephonestring210 192 930Phonemobilestring918 876 546Cellphoneemailemailalberto.lopes@dominio.ptEmailwebsiteurlhttps://www.dominio.ptSite urlcountrycountryPTCountry code using ISO 3166-1 alpha-2price\_grouparrayPrice Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | VIP | Title |
| is\_default | string<br><br>* * *<br><br>yes, no |     | Is default |

send\_emailstring

* * *

`yes` - Sim  
`no` - Não  
Send Invoiceirs\_retentionstring

* * *

`yes` - Sim  
`no` - Não  
Whether client does IRS retentionstatusstring

* * *

`active` - Ativo  
`inactive` - Inativo  
StatusnotesstringNotesdatestringCreation datebalancearrayBalance

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| total | currency | 35.55 | Total balance |
| on\_time | currency | 20.00 | On time balance |
| overdue | currency | 15.55 | Overdue balance |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'fiscal_id'          => '223098091', 
        'name'               => 'Alberto Lopes', 
        'address'            => 'Av. Sousa Magalhães, 126', 
        'postalcode'         => '4100-039', 
        'city'               => 'Lisboa', 
        'phone'              => '210 192 930', 
        'mobile'             => '918 876 546', 
        'external_reference' => 'AB892798/19', 
        'notes'              => '', 
        'email'              => 'alberto.lopes@dominio.pt', 
        'website'            => 'https://www.dominio.pt', 
        'country'            => 'PT', 
        'price_group_id'     => 123, 
        'send_email'         => 'yes', 
        'default_pay_due'    => '15', 
        'irs_retention'      => 'no', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of client  <br>If client is portuguese, it must be a valid fiscal id. If foreigner, first two characters must be country initials |
| name | string | Alberto Lopes | Client Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| external\_reference | string | AB892798/19 | External Reference |
| notes | string |     | Notes |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| price\_group\_id | int | 123 | Price Group ID |
| send\_email | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Send Invoice |
| default\_pay\_due | string<br><br>* * *<br><br>now, 1, 7, 15, 30, 45, 60, 90 |     | Default Pay Due |
| irs\_retention | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Whether client does IRS retention |

### Response

NameTypeExampleDescriptionidint12345IDfiscal\_idstring123456789Fiscal IDexternal\_referencestringAB892798/19External Referencedefault\_pay\_duestring15Default Pay DuenamestringAlberto CaeiroNameaddressstringAv. Sousa Magalhães, 126AddresscitystringLisboaCitypostalcodestring4100-039Postal codephonestring210 192 930Phonemobilestring918 876 546Cellphoneemailemailalberto.lopes@dominio.ptEmailwebsiteurlhttps://www.dominio.ptSite urlcountrycountryPTCountry code using ISO 3166-1 alpha-2price\_grouparrayPrice Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | VIP | Title |
| is\_default | string<br><br>* * *<br><br>yes, no |     | Is default |

send\_emailstring

* * *

`yes` - Sim  
`no` - Não  
Send Invoiceirs\_retentionstring

* * *

`yes` - Sim  
`no` - Não  
Whether client does IRS retentionstatusstring

* * *

`active` - Ativo  
`inactive` - Inativo  
StatusnotesstringNotesdatestringCreation datebalancearrayBalance

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| total | currency | 35.55 | Total balance |
| on\_time | currency | 20.00 | On time balance |
| overdue | currency | 15.55 | Overdue balance |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'fiscal_id'          => '223098091', 
        'name'               => 'Alberto Lopes', 
        'address'            => 'Av. Sousa Magalhães, 126', 
        'postalcode'         => '4100-039', 
        'city'               => 'Lisboa', 
        'phone'              => '210 192 930', 
        'mobile'             => '918 876 546', 
        'external_reference' => 'AB892798/19', 
        'notes'              => '', 
        'email'              => 'alberto.lopes@dominio.pt', 
        'website'            => 'https://www.dominio.pt', 
        'country'            => 'PT', 
        'price_group_id'     => 123, 
        'send_email'         => 'yes', 
        'default_pay_due'    => '15', 
        'status'             => 'active', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of client  <br>If client is portuguese, it must be a valid fiscal id. If foreigner, first two characters must be country initials |
| name | string | Alberto Lopes | Client Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| external\_reference | string | AB892798/19 | External Reference |
| notes | string |     | Notes |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| price\_group\_id | int | 123 | Price Group ID |
| send\_email | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Send Invoice |
| default\_pay\_due | string<br><br>* * *<br><br>now, 1, 7, 15, 30, 45, 60, 90 |     | Default Pay Due |
| status | string<br><br>* * *<br><br>`active` - Ativo  <br>`inactive` - Inativo |     | Status |

### Response

NameTypeExampleDescriptionidint12345IDfiscal\_idstring123456789Fiscal IDexternal\_referencestringAB892798/19External Referencedefault\_pay\_duestring15Default Pay DuenamestringAlberto CaeiroNameaddressstringAv. Sousa Magalhães, 126AddresscitystringLisboaCitypostalcodestring4100-039Postal codephonestring210 192 930Phonemobilestring918 876 546Cellphoneemailemailalberto.lopes@dominio.ptEmailwebsiteurlhttps://www.dominio.ptSite urlcountrycountryPTCountry code using ISO 3166-1 alpha-2price\_grouparrayPrice Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | VIP | Title |
| is\_default | string<br><br>* * *<br><br>yes, no |     | Is default |

send\_emailstring

* * *

`yes` - Sim  
`no` - Não  
Send Invoiceirs\_retentionstring

* * *

`yes` - Sim  
`no` - Não  
Whether client does IRS retentionstatusstring

* * *

`active` - Ativo  
`inactive` - Inativo  
StatusnotesstringNotesdatestringCreation datebalancearrayBalance

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| total | currency | 35.55 | Total balance |
| on\_time | currency | 20.00 | On time balance |
| overdue | currency | 15.55 | Overdue balance |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | string |     |     |

---

# Covenants - Cegid Vendus API

API (v1.1)
==========

Covenants
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/covenants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/covenants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'search'   => 'VAT, Client id', 
        'status'   => 'VAT, Client id', 
        'end_from' => '2025-07-29', 
        'end_to'   => '2025-07-29', 
        'type'     => 'Monday, Tuesday, etc...', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| search | string | VAT, Client id | Search |
| status | string<br><br>* * *<br><br>all, active, expired, disabled |     | Search |
| end\_from | date | 2025-07-29 | End Date From |
| end\_to | date | 2025-07-29 | End Date To |
| type | string<br><br>* * *<br><br>monday, tuesday, wednesday, thursday, friday, saturday, sunday, every\_fifteen\_days, every\_month, every\_two\_months, every\_three\_months, every\_four\_months, every\_six\_months, every\_year |     | Recurrency |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| records | array |     |     |
| pages | array |     |     |

Create POST
-----------

Creates a covenant that is scheduled to generate a document on specific days for a client.  

* * *

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/covenants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'recurrency_type'        => 'Monday, Tuesday, etc...', 
        'recurrency_start_date'  => '2025-07-29', 
        'register_id'            => 12345, 
        'date_execution_end'     => '2025-07-29', 
        'draft_data'             => '...', 
        'type'                   => 'FT', 
        'covenant_id'            => 12345, 
        'status'                 => 1 or 0, 
        'execute_times'          => 1, 
        'discount_code'          => '23-180523-7', 
        'discount_amount'        => 10.00, 
        'discount_percentage'    => '2.50', 
        'date_due'               => '2025-12-31', 
        'mode'                   => 'normal', 
        'date'                   => '2025-07-29', 
        'date_supply'            => '2025-07-29', 
        'notes'                  => 'New season', 
        'ncr_id'                 => 'Specific to CV', 
        'external_reference'     => 'PT00192-2025-21302', 
        'stock_operation'        => 'out', 
        'ifthenpay'              => 'no', 
        'eupago'                 => 'no', 
        'print_discount'         => 'no', 
        'output'                 => 'html', 
        'output_template_id'     => 123, 
        'tx_id'                  => '123', 
        'errors_full'            => 'no', 
        'rest_room'              => 12345, 
        'rest_table'             => 12345, 
        'occupation'             => 2, 
        'stamp_retention_amount' => 100.00, 
        'irc_retention_id'       => 'a', 
        'related_document_id'    => 12345, 
        'return_qrcode'          => 1 or 0, 
        'multibanco'             => array(
            'entity'    => '10022', 
            'reference' => '222333444', 
            'amount'    => 22.53, 
        ), 
        'client'                 => array(
            'id'                 => 12345, 
            'fiscal_id'          => '223098091', 
            'name'               => 'Alberto Lopes', 
            'address'            => 'Av. Sousa Magalhães, 126', 
            'postalcode'         => '4100-039', 
            'city'               => 'Lisboa', 
            'phone'              => '210 192 930', 
            'mobile'             => '918 876 546', 
            'email'              => 'alberto.lopes@dominio.pt', 
            'website'            => 'https://www.dominio.pt', 
            'notes'              => 'VIP client', 
            'country'            => 'PT', 
            'external_reference' => 'AB892798/19', 
            'send_email'         => 'yes', 
            'billing_email'      => 'alberto.lopes.contabilista@dominio.pt', 
            'irs_retention'      => 'no', 
        ), 
        'supplier'               => array(
            'id'         => 12345, 
            'fiscal_id'  => '223098091', 
            'name'       => 'Alberto Lopes', 
            'address'    => 'Av. Sousa Magalhães, 126', 
            'postalcode' => '4100-039', 
            'city'       => 'Lisboa', 
            'phone'      => '210 192 930', 
            'mobile'     => '918 876 546', 
            'email'      => 'alberto.lopes@dominio.pt', 
            'website'    => 'https://www.dominio.pt', 
            'country'    => 'PT', 
            'obs'        => 'Some info about supplier', 
        ), 
        'movement_of_goods'      => array(
            'vehicle_id'  => '00-AB-00', 
            'show_prices' => 'yes', 
            'loadpoint'   => array(
                'date'        => '2016-10-01', 
                'time'        => '10:05', 
                'address'     => 'Rua Amadeu Sousa Cardoso, 13', 
                'postalcode'  => '4100-423', 
                'city'        => 'Porto', 
                'country'     => 'PT', 
                'store_id'    => 1234, 
                'changestock' => 'out', 
            ), 
            'landpoint'   => array(
                'is_global'    => 'no', 
                'date'         => '2016-10-02', 
                'time'         => '09:15', 
                'address'      => 'Rua Almada Negreiros, 98', 
                'postalcode'   => '1100-123', 
                'city'         => 'Lisboa', 
                'country'      => 'PT', 
                'store_id'     => 1234, 
                'receivestock' => 'yes', 
            ), 
        ), 
        'payments'               => array(
            array(
                'id'       => 1234, 
                'amount'   => 100.00, 
                'date_due' => '2025-12-31', 
            ),
        ), 
        'items'                  => array(
            array(
                'id'                  => 12345, 
                'reference'           => 'CAFK001', 
                'gross_price'         => 12345, 
                'supply_price'        => 12345, 
                'qty'                 => 3.530, 
                'type_id'             => 'P', 
                'variant_id'          => 12345, 
                'title'               => 'Café ao Kg', 
                'unit_id'             => 1872, 
                'category_id'         => 123, 
                'brand_id'            => 124, 
                'discount_amount'     => 124, 
                'discount_percentage' => '5', 
                'stock_control'       => 1, 
                'stock_type'          => 'M', 
                'tax_id'              => 'NOR', 
                'tax_exemption'       => 'M40', 
                'tax_exemption_law'   => 'Artigo 13.º do CIVA', 
                'text'                => 'New Edition', 
                'serial'              => '87393872983792', 
                'tax_custom'          => array(
                    'country' => 'PT, ES, FR, PT-AC', 
                    'rate'    => 23, 
                    'code'    => 'NOR, INT, RED, NS, ...', 
                    'type'    => 'IVA', 
                ), 
                'reference_document'  => array(
                    'document_number'    => 'FT 01P2016/220', 
                    'document_row'       => 3, 
                    'reference_id'       => 1234, 
                    'reference_relation' => 'GG', 
                ), 
            ),
        ), 
        'invoices'               => array(
            array(
                'document_number' => 'FT 01P2016/28', 
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptionrecurrency\_typestring

* * *

monday, tuesday, wednesday, thursday, friday, saturday, sunday, every\_fifteen\_days, every\_month, every\_two\_months, every\_three\_months, every\_four\_months, every\_six\_months, every\_yearRecurrencyrecurrency\_start\_datestring2025-07-29Start dateregister\_idint12345POS IDdate\_execution\_endstring2025-07-29Start date**draft\_data**string...Stringtypestring

* * *

`FT` - Factura  
`FS` - Factura Simplificada  
`FR` - Factura Recibo  
`NC` - Nota de Crédito  
`DC` - Consulta de Mesa  
`PF` - Factura Pró-Forma  
`OT` - Orçamento  
`EC` - Encomenda  
`GA` - Guia de Ativos Próprios  
`GT` - Guia de Transporte  
`GR` - Guia de Remessa  
`GD` - Guia de Devolução  
`RG` - Recibo  
Type of documentcovenant\_idint12345Covenant ID**status**int1 or 0Statusexecute\_timesint1Execute timesdiscount\_codestring23-180523-7Discount codediscount\_amountcurrency10.00Discount in eurosdiscount\_percentagestring2.50Discount in percentagedate\_duedate2025-12-31Due datepaymentscollectionPayment Methods

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **id** | int | 1234 | Payment Method ID |
| amount | currency | 100.00 | Amount in euros  <br>If not set the computed total is used. |
| date\_due | date | 2025-12-31 | For `DNP` payments |

modestring

* * *

normal, testsWorking mode  
If not provided, it will be assumed register's mode definitiondatedate2025-07-29If not set, defaults to current date.  
Can not be ealier than the one from latest document, nor later than the current date.date\_supplydate2025-07-29If not set, defaults to current date.  
Date when goods/services are made available to customernotesstringNew seasonNotesncr\_idstringSpecific to CVNC reason IDexternal\_referencestringPT00192-2025-21302External reference  
For example, to reference a tracking codestock\_operationstring

* * *

`in` - Increment stock  
`none` - Don't change stock  
`out` - Decrement stock  
Operation on items with stock\_control.  
If not sent, system will use the default for the type of document being createdifthenpaystring

* * *

no, yesGenerate ifthenpay reference.  
If not set, default is no.eupagostring

* * *

no, yesGenerate euPago reference.  
If not set, default is no.multibancoarrayYour own multibanco data.

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| entity | string | 10022 | Multibanco Entity |
| reference | string | 222333444 | Multibanco Reference |
| amount | currency | 22.53 | Multibanco Amount |

**client**arrayClient

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Client ID  <br>If client already exists, it is only needed to send this param |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of client  <br>If client is portuguese, it must be a valid fiscal id |
| name | string | Alberto Lopes | Client Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| notes | string | VIP client | Notes |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| external\_reference | string | AB892798/19 | External Reference |
| send\_email | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Send Invoice |
| billing\_email | email | alberto.lopes.contabilista@dominio.pt | Email to send the invoice. If empty, the email field is used |
| irs\_retention | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Whether client does IRS retention |

supplierarraySupplier

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Supplier ID  <br>If supplier already exists, it is only needed to send this param |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of supplier  <br>If supplier is portuguese, it must be a valid fiscal id |
| name | string | Alberto Lopes | Supplier Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| obs | string | Some info about supplier | Observations |

itemscollectionNameTypeExampleDescriptionidint12345ID  
Mandatory if reference is nullreferencestringCAFK001Reference  
Mandatory if ID is nullgross\_pricecurrency12345Unit pricesupply\_pricecurrency12345Supply price**qty**float3.530Quantitytype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDvariant\_idint12345Variant IDtitlestringCafé ao KgNameunit\_idint1872Unit IDcategory\_idint123Category IDbrand\_idint124Brand IDdiscount\_amountcurrency124Discount in eurosdiscount\_percentagestring5Discount in percentagestock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias (default)  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEtax\_customarrayTo be used only when taxation is for another region/country

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| country | string | PT, ES, FR, PT-AC | Region/Country in ISO 3166-1 alpha-2 format and also PT-AC and PT-MA |
| rate | float | 23  | Tax Percentage |
| code | string | NOR, INT, RED, NS, ... | Tax Code matching \[a-zA-Z0-9.\] |
| type | string<br><br>* * *<br><br>IVA |     | Tax Type - currently, only IVA |

reference\_documentarrayA document that is related, like when creating a NC

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| document\_number | string | FT 01P2016/220 | Document number |
| document\_row | int | 3   | A row number of the document where the product is |
| reference\_id | int | 1234 | Reference Document ID |
| reference\_relation | string | GG  | Valid Document Type |

textstringNew EditionSome text about this itemserialstring87393872983792Serial number(s) if applicablemovement\_of\_goodsarrayTransportation infoNameTypeExampleDescriptionvehicle\_idstring00-AB-00Vehicle licence plateshow\_pricesstring

* * *

no, yesIf prices should be printedloadpointarrayLoadpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| date | date | 2016-10-01 | Date |
| time | time | 10:05 | Hour |
| address | string | Rua Amadeu Sousa Cardoso, 13 | Address |
| postalcode | string | 4100-423 | Postal code |
| city | string | Porto | City/locality |
| country | country | PT  | País |
| store\_id | int | 1234 | Store ID  <br>Used to set store from where stock is going to be removed |
| changestock | string | out | Stock |

landpointarrayLandpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| is\_global | string<br><br>* * *<br><br>no, yes |     | Whether it is a global movement |
| date | date | 2016-10-02 | Date |
| time | time | 09:15 | Hour |
| address | string | Rua Almada Negreiros, 98 | Address |
| postalcode | string | 1100-123 | Postal code |
| city | string | Lisboa | City/locality |
| country | country | PT  | País |
| store\_id | int | 1234 | Store ID  <br>Used to set store to where stock is going to be moved |
| receivestock | string | yes | Stock |

invoicescollectionWhen creating a RG

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| document\_number | string | FT 01P2016/28 | Document Number |

print\_discountstring

* * *

yes, noPrint Discount Couponsoutputstring

* * *

pdf, html, escpos, tpasibsPrintable Outputoutput\_template\_idint123Template IDtx\_idstring123Transaction unique identifier.  
If set, this will ensure that only a document may be created using the same tx\_id, even if multiple requests are made by mistake.errors\_fullstring

* * *

no, yesWhether to return full error info or just error stringrest\_roomint12345ID Roomrest\_tableint12345ID Tableoccupationint2Occupationstamp\_retention\_amountcurrency100.00Amount in eurosirc\_retention\_idtextaIRC IDrelated\_document\_idint12345ID of a document that relates to this onereturn\_qrcodeint1 or 0Return SVG Qrcode

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| is\_update | boolean |     |     |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/covenants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| done | boolean |     |     |

---

# Delivery - Cegid Vendus API

API (v1.1)
==========

Delivery
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'type'       => 'takeaway', 
        'status'     => 'cooking', 
        'kitchen_id' => 1234, 
        'order_id'   => '1234', 
        'reference'  => '1234', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string<br><br>* * *<br><br>table, delivery, takeaway, pickup |     | Type |
| status | string | cooking | Status - You may send a comma separated string with multiple status. received, pending, cooking, waiting\_to\_delivery, delivered, canceled |
| kitchen\_id | int | 1234 | Kitchen ID |
| order\_id | string | 1234 | Order ID |
| reference | string | 1234 | Reference |

### Response

NameTypeExampleDescriptionidintDelivery IDsaas\_idintSaas IDuser\_idintUser IDorder\_idstringOrder IDreferenceintReferencestore\_idint1234Store IDtable\_idint1234Table IDtablearray1234Table Data

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | Mesa 1234 | Title |

kitchen\_idint1234Kitchen IDtypestring

* * *

table, delivery, takeaway, pickupTypesourcestring

* * *

office, pos, vendusgo, api, deliverect, flipdishSourcestatusstring

* * *

received, pending, cooking, waiting\_to\_delivery, delivered, canceledStatusitemscollectionItems Dataextra\_infostringExtra Infodate\_createdateDate Createdate\_updatedateDate Last Updatedate\_scheduledateDate Schedule

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidintDelivery IDsaas\_idintSaas IDuser\_idintUser IDorder\_idstringOrder IDreferenceintReferencestore\_idint1234Store IDtable\_idint1234Table IDtablearray1234Table Data

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | Mesa 1234 | Title |

kitchen\_idint1234Kitchen IDtypestring

* * *

table, delivery, takeaway, pickupTypesourcestring

* * *

office, pos, vendusgo, api, deliverect, flipdishSourcestatusstring

* * *

received, pending, cooking, waiting\_to\_delivery, delivered, canceledStatusitemscollectionItems Dataextra\_infostringExtra Infodate\_createdateDate Createdate\_updatedateDate Last Updatedate\_scheduledateDate Schedule

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'table_id'      => , 
        'type'          => 'table', 
        'status'        => 'received', 
        'source'        => 'office', 
        'order_id'      => '', 
        'reference'     => '', 
        'date_schedule' => '', 
        'extra_info'    => '', 
        'items'         => array(
            array(
                'id'        => 12345, 
                'reference' => 'CAFK001', 
                'qty'       => 3.530, 
                'price'     => 5, 
                'text'      => 'Bife mal passado', 
                'notes'     => '', 
                'modifiers' => '', 
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptiontable\_idintTable IDtypestring

* * *

table, delivery, takeaway, pickupTypestatusstring

* * *

received, pending, cooking, waiting\_to\_delivery, delivered, canceledStatussourcestring

* * *

office, pos, vendusgo, api, deliverect, flipdishSourceorder\_idstringOrder idreferencestringReference**items**collection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  <br>Mandatory if reference is null |
| reference | string | CAFK001 | Reference  <br>Mandatory if ID is null |
| qty | float | 3.530 | Quantity |
| price | float | 5   | Price |
| text | string | Bife mal passado | Text |
| notes | string |     | Notes |
| modifiers | immutable |     |     |

date\_scheduledatetimeDate Scheduleextra\_infojson

### Response

NameTypeExampleDescriptionidintDelivery IDsaas\_idintSaas IDuser\_idintUser IDorder\_idstringOrder IDreferenceintReferencestore\_idint1234Store IDtable\_idint1234Table IDtablearray1234Table Data

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | Mesa 1234 | Title |

kitchen\_idint1234Kitchen IDtypestring

* * *

table, delivery, takeaway, pickupTypesourcestring

* * *

office, pos, vendusgo, api, deliverect, flipdishSourcestatusstring

* * *

received, pending, cooking, waiting\_to\_delivery, delivered, canceledStatusitemscollectionItems Dataextra\_infostringExtra Infodate\_createdateDate Createdate\_updatedateDate Last Updatedate\_scheduledateDate Schedule

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/delivery/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'status'      => 'received', 
        'update_hook' => 0, 
        'extra_info'  => '', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | string<br><br>* * *<br><br>received, pending, cooking, waiting\_to\_delivery, delivered, canceled |     | Status |
| update\_hook | int<br><br>* * *<br><br>0, 1 |     | Emit event to update source |
| extra\_info | immutable |     | Extra Info |

### Response

NameTypeExampleDescriptionidintDelivery IDsaas\_idintSaas IDuser\_idintUser IDorder\_idstringOrder IDreferenceintReferencestore\_idint1234Store IDtable\_idint1234Table IDtablearray1234Table Data

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | Mesa 1234 | Title |

kitchen\_idint1234Kitchen IDtypestring

* * *

table, delivery, takeaway, pickupTypesourcestring

* * *

office, pos, vendusgo, api, deliverect, flipdishSourcestatusstring

* * *

received, pending, cooking, waiting\_to\_delivery, delivered, canceledStatusitemscollectionItems Dataextra\_infostringExtra Infodate\_createdateDate Createdate\_updatedateDate Last Updatedate\_scheduledateDate Schedule

---

# Account - Cegid Vendus API

API (v1.1)
==========

Account
-------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidint123Account IDcompanystringMy Company LtdCompany nameaddressstringRua Amadeu Sousa cardoso, 123Addresspostal\_codestring4100-057Postal codecitystringLisbonCityemailstringemail@domain.ptEmailtax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Default tax ratetax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax exemption reasontax\_exemption\_lawstringSome lawTax exemption applicable lawurlstringmycompany.vendus.co.aoCegid Vendus domainfiscal\_idstringFiscal IDphonestringPhone numberconservatorystringConservatorysocialcapitalstringCompany Social Capitalcountrystring

* * *

`AO` - AO  
`PT` - PT  
`PT-AC` - PT-AC  
`PT-MA` - PT-MA  
Countryshow\_selfconsumption\_pricesboolean1Show selfconsumption priceslocalearrayLocaleNameTypeExampleDescriptioncurrencyarrayCurrency

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| symbol | string | €   | Currency Symbol |
| text | string | Euro | Currency Text |
| abbr | string | Eur | Currency Abbr |
| position | string | \-1 | Currency Position |

irsarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| incidence\_rate | float | 25  | IRS incidence rate |
| retention\_rate | float | 11.5 | IRS retention rate |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidint123Account IDcompanystringMy Company LtdCompany nameaddressstringRua Amadeu Sousa cardoso, 123Addresspostal\_codestring4100-057Postal codecitystringLisbonCityemailstringemail@domain.ptEmailtax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Default tax ratetax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax exemption reasontax\_exemption\_lawstringSome lawTax exemption applicable lawurlstringmycompany.vendus.co.aoCegid Vendus domainfiscal\_idstringFiscal IDphonestringPhone numberconservatorystringConservatorysocialcapitalstringCompany Social Capitalcountrystring

* * *

`AO` - AO  
`PT` - PT  
`PT-AC` - PT-AC  
`PT-MA` - PT-MA  
Countryshow\_selfconsumption\_pricesboolean1Show selfconsumption priceslocalearrayLocaleNameTypeExampleDescriptioncurrencyarrayCurrency

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| symbol | string | €   | Currency Symbol |
| text | string | Euro | Currency Text |
| abbr | string | Eur | Currency Abbr |
| position | string | \-1 | Currency Position |

irsarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| incidence\_rate | float | 25  | IRS incidence rate |
| retention\_rate | float | 11.5 | IRS retention rate |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'company'           => 'My Company Ltd', 
        'address'           => 'Rua Amadeu Sousa cardoso, 123', 
        'postal_code'       => '4100-057', 
        'city'              => 'Lisbon', 
        'tax_id'            => 'NOR', 
        'tax_exemption'     => 'M40', 
        'tax_exemption_law' => 'Some law', 
        'fiscal_id'         => '', 
        'phone'             => '', 
        'conservatory'      => '', 
        'socialcapital'     => '', 
        'country'           => 'Portugal, Madeira, Açores', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| company | string | My Company Ltd | Company name |
| address | string | Rua Amadeu Sousa cardoso, 123 | Address |
| postal\_code | string | 4100-057 | Postal code |
| city | string | Lisbon | City |
| tax\_id | string<br><br>* * *<br><br>`NOR` - Taxa Normal  <br>`INT` - Taxa Intermédia  <br>`RED` - Taxa Reduzida  <br>`ISE` - Isento  <br>`OUT` - Outros |     | Default tax rate |
| tax\_exemption | string<br><br>* * *<br><br>`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  <br>`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  <br>`M03` - M03 - Exigibilidade de caixa (revogado)  <br>`M04` - M04 - Artigo 13.º do CIVA ou similar  <br>`M05` - M05 - Artigo 14.º do CIVA ou similar  <br>`M06` - M06 - Artigo 15.º do CIVA ou similar  <br>`M07` - M07 - Artigo 9.º do CIVA ou similar  <br>`M08` - M08 - IVA - autoliquidação (revogado)  <br>`M09` - M09 - IVA - não confere direito a dedução  <br>`M10` - M10 - IVA - Regime de isenção  <br>`M11` - M11 - Regime particular do tabaco  <br>`M12` - M12 - Regime da margem de lucro - Agências de viagens  <br>`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  <br>`M14` - M14 - Regime da margem de lucro - Objetos de arte  <br>`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  <br>`M16` - M16 - Artigo 14.º do RITI ou similar  <br>`M19` - M19 - Outras isenções  <br>`M20` - M20 - IVA - regime forfetário  <br>`M21` - M21 - IVA – não confere direito à dedução  <br>`M25` - M25 - Mercadorias à consignação  <br>`M26` - M26 - Cabaz alimentar (expirado)  <br>`M30` - M30 - IVA - autoliquidação (2.1.i)  <br>`M31` - M31 - IVA - autoliquidação (2.1.j)  <br>`M32` - M32 - IVA - autoliquidação (2.1.l)  <br>`M33` - M33 - IVA - autoliquidação (2.1.m)  <br>`M34` - M34 - IVA - autoliquidação (2.1.n)  <br>`M40` - M40 - IVA - autoliquidação (6.6.a)  <br>`M41` - M41 - IVA - autoliquidação (8.3.R)  <br>`M42` - M42 - IVA - autoliquidação (21.2007)  <br>`M43` - M43 - IVA - autoliquidação (362.99)  <br>`M99` - M99 - Não sujeito; não tributado ou similar |     | Tax exemption reason |
| tax\_exemption\_law | string | Some law | Tax exemption applicable law |
| fiscal\_id | string |     | Fiscal ID |
| phone | string |     | Phone number |
| conservatory | string |     | Conservatory |
| socialcapital | string |     | Company Social Capital |
| country | string<br><br>* * *<br><br>`AO` - AO  <br>`PT` - PT  <br>`PT-AC` - PT-AC  <br>`PT-MA` - PT-MA |     | Country |

### Response

NameTypeExampleDescriptionidint123Account IDcompanystringMy Company LtdCompany nameaddressstringRua Amadeu Sousa cardoso, 123Addresspostal\_codestring4100-057Postal codecitystringLisbonCityemailstringemail@domain.ptEmailtax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Default tax ratetax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax exemption reasontax\_exemption\_lawstringSome lawTax exemption applicable lawurlstringmycompany.vendus.co.aoCegid Vendus domainfiscal\_idstringFiscal IDphonestringPhone numberconservatorystringConservatorysocialcapitalstringCompany Social Capitalcountrystring

* * *

`AO` - AO  
`PT` - PT  
`PT-AC` - PT-AC  
`PT-MA` - PT-MA  
Countryshow\_selfconsumption\_pricesboolean1Show selfconsumption priceslocalearrayLocaleNameTypeExampleDescriptioncurrencyarrayCurrency

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| symbol | string | €   | Currency Symbol |
| text | string | Euro | Currency Text |
| abbr | string | Eur | Currency Abbr |
| position | string | \-1 | Currency Position |

irsarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| incidence\_rate | float | 25  | IRS incidence rate |
| retention\_rate | float | 11.5 | IRS retention rate |

---

# Users - Cegid Vendus API

API (v1.1)
==========

Users
-----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/users/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/users/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'store'               => 12345, 
        'exclude_accountants' => 'true', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | int | 12345 | ID  |
| exclude\_accountants | boolean | true | Exclude accountants |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| email | email | email@domain.com | Email |
| name | string | Fábio Teixeira | Name |
| timeout | int | 5   | Time to request password (minutes) |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/users/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/users/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| email | email | email@domain.com | Email |
| name | string | Fábio Teixeira | Name |
| timeout | int | 5   | Time to request password (minutes) |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/account/users/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'email'    => 'email@domain.com', 
        'name'     => 'Fábio Teixeira', 
        'password' => '56!paSsWoRd17', 
        'pin'      => 1234, 
        'timeout'  => 5, 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| email | string | email@domain.com | Email |
| name | string | Fábio Teixeira | Name |
| password | string | 56!paSsWoRd17 | Password |
| pin | int | 1234 | Pin to unlock pos (4 characters) |
| timeout | int | 5   | Time to request password (minutes) |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| email | email | email@domain.com | Email |
| name | string | Fábio Teixeira | Name |
| timeout | int | 5   | Time to request password (minutes) |

---

# Balance - Cegid Vendus API

API (v1.1)
==========

Balance
-------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/balance/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/balance/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'since'     => '2025-01-01', 
        'until'     => '2025-12-31', 
        'status'    => 'all', 
        'aggregate' => 'no', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| since | date | 2025-01-01 | Min date |
| until | date | 2025-12-31 | Max date |
| status | string<br><br>* * *<br><br>all, paid, unpaid |     | Status |
| aggregate | string<br><br>* * *<br><br>yes, no |     | Aggregate accounts with same fiscal id |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| number | string | FT 01P2016/220 | Document number |
| date | date | 2016-01-02 | Date |
| store\_id | int | 12345 | Store ID |
| register\_id | int | 12345 | Register ID |
| date\_due | date | 2016-01-15 | Payment date  <br>When payment is due |
| date\_supply | date | 2016-01-15 | Delivery Date |
| system\_time | datetime | 2016-01-02 10:01:20 | System date and time  <br>System time is always defined using UTC timezone |
| local\_time | datetime | 2016-01-02 10:01:20 | Local date and time  <br>Local time according to your timezone |
| amount\_gross | currency | 123.00 | Total amount |
| amount\_net | currency | 100.00 | Total amount before taxes |
| type | string | FT  | Document Type |
| subtype | string | G   | Document Subtype |
| status | string | N   | Status |
| qty\_left\_to\_invoice | float | 1   | Quantity left to invoice  <br>Returned only when document is a "Guia Global" |
| total\_unpaid | float |     | Unpaid amount |
| payment\_status | string<br><br>* * *<br><br>paid, pending, expired |     | Payment status |
| external\_reference | string | PT00192-25-21302 | External reference |
| operation\_type | string<br><br>* * *<br><br>in, out, info |     | Operation Type |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/clients/12345/balance/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'amount'         => 100, 
        'operation_type' => 'in', 
        'notes'          => '', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| **amount** | currency | 100 | Amount |
| **operation\_type** | string<br><br>* * *<br><br>in, out |     | Operation Type |
| **notes** | string |     | Notes |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| amount | currency | 100 | Amount |
| operation\_type | string<br><br>* * *<br><br>in, out |     | Operation Type |

---

# Types - Cegid Vendus API

API (v1.1)
==========

Types
-----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/types/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/types/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'visible_filter'   => 'yes', 
        'visible_finalize' => 'yes', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| visible\_filter | string<br><br>* * *<br><br>yes, no |     | Filter by types which should be visible on a filter |
| visible\_finalize | string<br><br>* * *<br><br>yes, no |     | Filter by types which should be visible when creating a document |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| title | string | Fatura | Title |
| id  | string<br><br>* * *<br><br>`FT` - Factura  <br>`FS` - Fatura Simplificada  <br>`NC` - Nota de Crédito  <br>`FR` - Factura Recibo  <br>`FG` - Factura Global  <br>`ND` - Nota de Débito  <br>`GA` - Guia de Ativos Próprios  <br>`GD` - Guia de Devolução  <br>`GR` - Guia de Remessa  <br>`GT` - Guia de Transporte  <br>`DC` - Consulta de Mesa  <br>`PF` - Factura Pró-Forma  <br>`OT` - Orçamento  <br>`EC` - Encomenda |     | Two letter id |
| visible\_filter | string<br><br>* * *<br><br>yes, no |     | If should be visible on a filter |
| visible\_finalize | string<br><br>* * *<br><br>yes, no |     | If should be visible when creating a document |

---

# Discountcards - Cegid Vendus API

API (v1.1)
==========

Discountcards
-------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/discountcards/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/discountcards/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'code'     => '1-123456/AB', 
        'status'   => 'done', 
        'category' => 1234, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| code | string | 1-123456/AB | Code |
| status | string<br><br>* * *<br><br>pending, done |     | Status |
| category | int | 1234 | Category ID |

### Response

NameTypeExampleDescriptionidintRegister IDcodestring1-123456/ABCodeamountfloat10Titletypestring

* * *

money, percentTypestatusstring

* * *

pending, doneStatuscategoryarrayCategory

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | ID  |
| title | string | Café | Title |

datedateData Createdate\_expiredateExpiration DateobsstringObservationsdate\_useddateDate Used

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/discountcards/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/discountcards/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidintRegister IDcodestring1-123456/ABCodeamountfloat10Titletypestring

* * *

money, percentTypestatusstring

* * *

pending, doneStatuscategoryarrayCategory

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | ID  |
| title | string | Café | Title |

datedateData Createdate\_expiredateExpiration DateobsstringObservationsdate\_useddateDate Used

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/discountcards/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'code'        => '1-123456/AB', 
        'category'    => 1234, 
        'type'        => 'money', 
        'amount'      => 10, 
        'date_expire' => '', 
        'obs'         => '', 
        'output'      => 'html', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| code | string | 1-123456/AB | Status |
| category | int | 1234 | Category ID |
| type | string<br><br>* * *<br><br>money, percent |     | Type |
| amount | float | 10  | Amount |
| date\_expire | date |     | Date Expire |
| obs | string |     | Observations |
| output | string<br><br>* * *<br><br>html, pdf, escpos |     | Output |

### Response

NameTypeExampleDescriptionidintRegister IDcodestring1-123456/ABCodeamountfloat10Titletypestring

* * *

money, percentTypestatusstring

* * *

pending, doneStatuscategoryarrayCategory

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | ID  |
| title | string | Café | Title |

datedateData Createdate\_expiredateExpiration DateobsstringObservationsdate\_useddateDate UsedoutputtextPrintable outputBase64 Encoded

---

# Categories - Cegid Vendus API

API (v1.1)
==========

Categories
----------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'seo_url' => 'asd', 
        'search'  => 'asd', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| seo\_url | string | asd | Search category by url |
| search | string | asd | Search category by title |

### Response

NameTypeExampleDescriptionidint123Category IDparent\_idint123Category Parent idparentcollection123Parent Categoryseo\_urlstringaaa-bbCategory seo urlnamestringnameCategory namedescriptionstring123Category IDorderint1Category ordericonstringicon.svgCategory iconsub-categoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | sub category ID |
| parent\_id | int | 123 | Category Parent id |
| seo\_url | string | aaa-bb | Category seo url |
| name | string | name | Sub category name |
| description | string | description | Sub category description |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidint123Category IDparent\_idint123Category Parent idparentcollection123Parent Categoryseo\_urlstringaaa-bbCategory seo urlnamestringnameCategory namedescriptionstring123Category IDorderint1Category ordericonstringicon.svgCategory iconsub-categoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | sub category ID |
| parent\_id | int | 123 | Category Parent id |
| seo\_url | string | aaa-bb | Category seo url |
| name | string | name | Sub category name |
| description | string | description | Sub category description |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'name'        => '123', 
        'description' => 'description', 
        'order'       => 1, 
        'parent_id'   => 123, 
        'icon'        => 'icon.svg', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **name** | string | 123 | Category Name |
| description | string | description | Category Description |
| order | int | 1   | Order |
| parent\_id | int | 123 | Parent Id |
| icon | string | icon.svg | Category icon |

### Response

NameTypeExampleDescriptionidint123Category IDparent\_idint123Category Parent idparentcollection123Parent Categoryseo\_urlstringaaa-bbCategory seo urlnamestringnameCategory namedescriptionstring123Category IDorderint1Category ordericonstringicon.svgCategory iconsub-categoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | sub category ID |
| parent\_id | int | 123 | Category Parent id |
| seo\_url | string | aaa-bb | Category seo url |
| name | string | name | Sub category name |
| description | string | description | Sub category description |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'name'        => '123', 
        'description' => 'description', 
        'order'       => 1, 
        'icon'        => 'icon.svg', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **name** | string | 123 | Category Name |
| description | string | description | Category Description |
| order | int | 1   | Order |
| icon | string | icon.svg | Category icon |

### Response

NameTypeExampleDescriptionidint123Category IDparent\_idint123Category Parent idparentcollection123Parent Categoryseo\_urlstringaaa-bbCategory seo urlnamestringnameCategory namedescriptionstring123Category IDorderint1Category ordericonstringicon.svgCategory iconsub-categoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | sub category ID |
| parent\_id | int | 123 | Category Parent id |
| seo\_url | string | aaa-bb | Category seo url |
| name | string | name | Sub category name |
| description | string | description | Sub category description |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| response | string |     |     |

---

# Integrations - Cegid Vendus API

API (v1.1)
==========

Integrations
------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/integrations/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/integrations/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'type' => '', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string |     | Type |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string |     | Integration Type |
| config | immutable |     | Data Config |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/integrations/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/integrations/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string |     | Integration Type |
| config | immutable |     | Data Config |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/integrations/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'type'   => 'kds', 
        'config' => '', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **type** | string<br><br>* * *<br><br>kds |     | Config Data |
| **config** | immutable |     | Config Data |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string |     | Integration Type |
| config | immutable |     | Data Config |

---

# Helpdesk - Cegid Vendus API

API (v1.1)
==========

Helpdesk
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'search'    => 'Title', 
        'popular'   => 'popular', 
        'category'  => 123, 
        'available' => 'helpdesk', 
        'seo_url'   => 'aaa-bb', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| search | string | Title | Search article |
| popular | string<br><br>* * *<br><br>yes |     | Get popular articles |
| category | int<br><br>* * *<br><br>Impressão, Equipamento, Produtos, Introdução e Configuração, Configurações Iniciais, Autoridade Tributária, Documentos, Clientes, Relatórios, Contabilidade, Compras, Lojas e Caixas, Conta, Subscrição, Funcionalidades e Backoffice, Configuração, SAF-T, Migração de Dados, Sobre o Vendus, Outros, Vendus Go!, Configuração, Introdução, Encomendas, Integrações, Vendus Pedidos, Configuração de Equipamento, Configurações de Conta, POS, APP Android/iOS, Funcionalidades, Impressão de Pedidos, Funcionalidades, Impressão de Pedidos, Reports, Configurações, Configurações, Novo POS, |     | Search article by category id |
| available | string<br><br>* * *<br><br>helpdesk, inline\_assistant, all |     | Search article by available |
| seo\_url | string | aaa-bb | Search article by seo url |

### Response

NameTypeExampleDescriptionidint123Article IDtitlestringTitleArticle titleseo\_urlstringaaa-bbArticle seo urldescriptionstringdescriptionArticle descriptioncategoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Category ID |
| name | string | name | Category name |

statusstringonline/offlineArticle statusavailablestringhelpdeskArticle availableurlstringaaaa-ssArticle seo urldate creationdatetime2021-11-26 00:00:00Article date creationorderint1Article orderorder spotint1Article order spotparraylastPageintcms\_typestring

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidint123Article IDtitlestringTitleArticle titleseo\_urlstringaaa-bbArticle seo urldescriptionstringdescriptionArticle descriptioncategoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Category ID |
| name | string | name | Category name |

statusstringonline/offlineArticle statusavailablestringhelpdeskArticle availableurlstringaaaa-ssArticle seo urldate creationdatetime2021-11-26 00:00:00Article date creationorderint1Article orderorder spotint1Article order spotparraylastPageintcms\_typestringcontenttextLorem IpsumArticle contentdate publishdatetime2021-11-26 00:00:00Article date publishrelatedcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Article ID |
| title | string | title | Article title |
| seo\_url | string | aaa-bb | Article seo url |
| seo\_description | string | Lorem Ipsum | Article description |

imagescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Image ID |
| type | string | original | Image type |
| file | string | file.jpg | Image file |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'           => 'title', 
        'title_page'      => 'title page', 
        'seo_description' => 'description', 
        'seo_keywords'    => 'keywords', 
        'summary'         => 'saft', 
        'tags'            => 'tags', 
        'status'          => 'description', 
        'order'           => 1, 
        'order_spot'      => 1, 
        'available'       => 'helpdesk', 
        'date_publish'    => '2021-11-26 00:00:00', 
        'categories'      => array(
            array(
            ),
        ), 
        'related'         => array(
            array(
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | title | Article Title |
| title\_page | text | title page | Article Title Page |
| seo\_description | text | description | Article Description |
| seo\_keywords | string | keywords | Article Keywords |
| summary | string | saft | Article Tags to search |
| tags | text | tags | Article tags |
| status | string<br><br>* * *<br><br>offline, online, draft |     | Article Status |
| categories | collection | Array | Article categories |
| order | int | 1   | Article Order |
| order\_spot | int | 1   | Article Order Spot |
| available | string<br><br>* * *<br><br>helpdesk, inline\_assistant, all |     | Article available |
| date\_publish | datetime | 2021-11-26 00:00:00 | Article Date Publish |
| related | collection | Array | Related Articles |

### Response

NameTypeExampleDescriptionidint123Article IDtitlestringTitleArticle titleseo\_urlstringaaa-bbArticle seo urldescriptionstringdescriptionArticle descriptioncategoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Category ID |
| name | string | name | Category name |

statusstringonline/offlineArticle statusavailablestringhelpdeskArticle availableurlstringaaaa-ssArticle seo urldate creationdatetime2021-11-26 00:00:00Article date creationorderint1Article orderorder spotint1Article order spotparraylastPageintcms\_typestringcontenttextLorem IpsumArticle contentdate publishdatetime2021-11-26 00:00:00Article date publishrelatedcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Article ID |
| title | string | title | Article title |
| seo\_url | string | aaa-bb | Article seo url |
| seo\_description | string | Lorem Ipsum | Article description |

imagescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Image ID |
| type | string | original | Image type |
| file | string | file.jpg | Image file |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'title'           => 'title', 
        'title_page'      => 'title page', 
        'seo_description' => 'description', 
        'seo_keywords'    => 'keywords', 
        'summary'         => 'saft', 
        'tags'            => 'tags', 
        'status'          => 'description', 
        'order'           => 1, 
        'order_spot'      => 1, 
        'available'       => 'helpdesk', 
        'date_publish'    => '2021-11-26 00:00:00', 
        'categories'      => array(
            array(
            ),
        ), 
        'related'         => array(
            array(
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| title | string | title | Article Title |
| title\_page | text | title page | Article Title Page |
| seo\_description | text | description | Article Description |
| seo\_keywords | string | keywords | Article Keywords |
| summary | string | saft | Article Tags to search |
| tags | text | tags | Article tags |
| status | string<br><br>* * *<br><br>offline, online, draft |     | Article Status |
| categories | collection | Array | Article categories |
| order | int | 1   | Article Order |
| order\_spot | int | 1   | Article Order Spot |
| available | string<br><br>* * *<br><br>helpdesk, inline\_assistant, all |     | Article available |
| date\_publish | datetime | 2021-11-26 00:00:00 | Article Date Publish |
| related | collection | Array | Related Articles |

### Response

NameTypeExampleDescriptionidint123Article IDtitlestringTitleArticle titleseo\_urlstringaaa-bbArticle seo urldescriptionstringdescriptionArticle descriptioncategoriescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Category ID |
| name | string | name | Category name |

statusstringonline/offlineArticle statusavailablestringhelpdeskArticle availableurlstringaaaa-ssArticle seo urldate creationdatetime2021-11-26 00:00:00Article date creationorderint1Article orderorder spotint1Article order spotparraylastPageintcms\_typestringcontenttextLorem IpsumArticle contentdate publishdatetime2021-11-26 00:00:00Article date publishrelatedcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Article ID |
| title | string | title | Article title |
| seo\_url | string | aaa-bb | Article seo url |
| seo\_description | string | Lorem Ipsum | Article description |

imagescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Image ID |
| type | string | original | Image type |
| file | string | file.jpg | Image file |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/helpdesk/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| response | string |     |     |

---

# Kitchens - Cegid Vendus API

API (v1.1)
==========

Kitchens
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'store_id' => 1234, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 1234 | Store ID |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Kitchen ID |
| title | string | Cozinha AB | Title |
| description | string | Cozinha do Piso 2 | Description |
| store\_id | int | 123 | Store ID |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Kitchen ID |
| title | string | Cozinha AB | Title |
| description | string | Cozinha do Piso 2 | Description |
| store\_id | int | 123 | Store ID |

---

# Printer - Cegid Vendus API

API (v1.1)
==========

Printer
-------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/12345/printer/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/12345/printer/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| kitchen\_id | int | 12345 | Kitchen ID |
| status | int | 1   | Status |
| printer | string | EPSON L3160 | ID  |
| ip  | string | 192.168.0.1 | ID  |
| port | string | 90000 | Port |
| data | string | {}  | ID  |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/kitchens/12345/printer/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'status'  => 1, 
        'printer' => 'EPSON L3160', 
        'ip'      => '192.168.0.1', 
        'port'    => '90000', 
        'data'    => '{}', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | int | 1   | Status |
| printer | string | EPSON L3160 | Printer |
| ip  | string | 192.168.0.1 | IP  |
| port | string | 90000 | Port |
| data | immutable | {}  | Printer Data |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| kitchen\_id | int | 12345 | Kitchen ID |
| status | int | 1   | Status |
| printer | string | EPSON L3160 | ID  |
| ip  | string | 192.168.0.1 | ID  |
| port | string | 90000 | Port |
| data | string | {}  | ID  |

---

# Brands - Cegid Vendus API

API (v1.1)
==========

Brands
------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/brands/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/brands/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'title'  => 'book', 
        'status' => 'on', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| title | string | book | String to be searched on title |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Apple | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/brands/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/brands/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Apple | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/brands/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'  => 'Apple', 
        'status' => 'on', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Apple | Title |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Apple | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

---

# Lots - Cegid Vendus API

API (v1.1)
==========

Lots
----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/lots/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/lots/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'status' => 'active', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | string<br><br>* * *<br><br>active, expired |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, expired |     | Status of the lot |
| expiration\_date | date | 29-07-2025 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |
| stock | float | 100.00 | Stock of the lot |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/lots/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'           => '012-10002', 
        'expiration_date' => '29-07-2025', 
        'barcode'         => 1234567890, 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | 012-10002 | Title |
| expiration\_date | date | 29-07-2025 | Expiration date |
| barcode | int | 1234567890 | Barcode |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, expired |     | Status of the lot |
| expiration\_date | date | 29-07-2025 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |
| stock | float | 100.00 | Stock of the lot |

---

# Categories - Cegid Vendus API

API (v1.1)
==========

Categories
----------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'title'    => 'book', 
        'store_id' => 123, 
        'status'   => 'XBD001', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| title | string | book | String to be searched on title |
| store\_id | int | 123 | Store ID |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Books | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |
| order | int | 1   | Order |
| all\_stores | string<br><br>* * *<br><br>no, yes |     | Description |
| products\_order | string<br><br>* * *<br><br>order, title, ukey\_id |     | Order Type  <br>Order by the POS |
| kitchen\_request | string<br><br>* * *<br><br>yes, no |     | Description |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/categories/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/categories/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Books | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/categories/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'  => 'Fruits and Vegetables', 
        'status' => 'on', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Fruits and Vegetables | Title |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Books | Name |
| status | string<br><br>* * *<br><br>on, off, delete |     | Status |

---

# Pricegroups - Cegid Vendus API

API (v1.1)
==========

Pricegroups
-----------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Vip | Name |
| is\_default | string<br><br>* * *<br><br>no, yes |     | Is default price |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Vip | Name |
| is\_default | string<br><br>* * *<br><br>no, yes |     | Is default price |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/pricegroups/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'      => 'Vip', 
        'is_default' => 'no', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Vip | Name |
| is\_default | string<br><br>* * *<br><br>no, yes |     | Is default price |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Vip | Name |
| is\_default | string<br><br>* * *<br><br>no, yes |     | Is default price |

---

# Variants - Cegid Vendus API

API (v1.1)
==========

Variants
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/variants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/variants/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'parent_id' => 123, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| parent\_id | int | 123 | Parent ID |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Color | Name |
| code | string | blue | Code |

---

# Stocks - Cegid Vendus API

API (v1.1)
==========

Stocks
------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/stocks/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/stocks/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptiontotalint155Stock Totalstorescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 12345 | Store ID |
| stock | int | 55  | Stock |
| stock\_alert | int | 20  | Minimum Stock Alert |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/stocks/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'product_id'      => 12345, 
        'lot_id'          => 12345, 
        'amount'          => 21, 
        'type'            => 'transfer', 
        'store_id'        => 21, 
        'store_id_target' => 12345, 
        'stockAlert'      => 5, 
        'obs'             => 'Supplier delivery', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **product\_id** | int | 12345 | Product ID |
| lot\_id | int | 12345 | Lot ID |
| amount | float | 21  | Stock |
| type | string<br><br>* * *<br><br>reset, add, remove, transfer |     | Operation Type |
| store\_id | int | 21  | Stock |
| store\_id\_target | int | 12345 | To be used only when type = transfer |
| stockAlert | int | 5   | Minimum Stock Alert |
| obs | text | Supplier delivery | Observation |

### Response

NameTypeExampleDescriptiontotalint155Stock Totalstorescollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 12345 | Store ID |
| stock | int | 55  | Stock |
| stock\_alert | int | 20  | Minimum Stock Alert |

---

# Units - Cegid Vendus API

API (v1.1)
==========

Units
-----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/units/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/units/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Kg  | Title |
| default | int<br><br>* * *<br><br>on, off |     | Status |
| decimal | int | 3   | Decimal precision, useful for weight units |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/units/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/units/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| title | string | Kg  | Title |
| default | int<br><br>* * *<br><br>on, off |     | Status |
| decimal | int | 3   | Decimal precision, useful for weight units |

---

# Documents - Cegid Vendus API

API (v1.1)
==========

Documents
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

Returns a list of existing documents that may be filtered using `store_id`, `register_id`, `type` and date (using `since` and `until`). Please take a look at the [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 page of this documentation to learn how to use pagination parameters.

* * *

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'store_id'           => 123456, 
        'register_id'        => 1234567, 
        'client_id'          => 1234567, 
        'client_fiscal_id'   => '123456789', 
        'client_country'     => 'PT', 
        'type'               => 'FT', 
        'subtype'            => 'G', 
        'since'              => '2025-01-01', 
        'until'              => '2025-12-31', 
        'q'                  => '01P2025/133', 
        'external_reference' => 'SSO00092/133', 
        'status'             => 'N', 
        'view'               => 'normal', 
        'mode'               => 'normal', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 123456 | Store ID |
| register\_id | int | 1234567 | Register ID |
| client\_id | int | 1234567 | Client ID |
| client\_fiscal\_id | string | 123456789 | Client Fiscal ID |
| client\_country | string | PT  | Client Country |
| type | string | FT  | Valid Document Type  <br>You may send a comma separated string with multiple document types |
| subtype | string | G   | Document Sub Type  <br>You may send a comma separated string with multiple document sub types |
| since | date | 2025-01-01 | Min date |
| until | date | 2025-12-31 | Max date |
| q   | string | 01P2025/133 | Search string |
| external\_reference | string | SSO00092/133 | Search string |
| status | string<br><br>* * *<br><br>`N` - Normal  <br>`A` - Canceled  <br>`F` - Invoiced |     | Status |
| view | string<br><br>* * *<br><br>normal, detailed |     | More details of the documents |
| mode | string<br><br>* * *<br><br>normal, tests |     | Working mode |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| number | string | FT 01P2016/220 | Document number |
| date | date | 2016-01-02 | Date |
| store\_id | int | 12345 | Store ID |
| register\_id | int | 12345 | Register ID |
| date\_due | date | 2016-01-15 | Payment date  <br>When payment is due |
| date\_supply | date | 2016-01-15 | Delivery Date |
| system\_time | datetime | 2016-01-02 10:01:20 | System date and time  <br>System time is always defined using UTC timezone |
| local\_time | datetime | 2016-01-02 10:01:20 | Local date and time  <br>Local time according to your timezone |
| amount\_gross | currency | 123.00 | Total amount |
| amount\_net | currency | 100.00 | Total amount before taxes |
| type | string | FT  | Document Type |
| subtype | string | G   | Document Subtype |
| tax\_authority\_id | string | 10000708560 | Tax Authority ID  <br>Only for movement of goods |
| status | string | N   | Status |
| qty\_left\_to\_invoice | float | 1   | Quantity left to invoice  <br>Returned only when document is a "Guia Global" |
| total\_unpaid | float |     | Unpaid amount |
| payment\_status | string<br><br>* * *<br><br>pending, expired, paid |     | Payment Status |
| external\_reference | string | PT00192-25-21302 | External reference |

Detail GET
----------

Returns all information about a specific document. To obtain a pdf version, just add `.pdf` extension to the document's id.

* * *

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/12345/';
    // $url  = 'https://www.vendus.co.ao/ws/v1.1/documents/12345.pdf';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/12345/';
    // $url  = 'https://www.vendus.co.ao/ws/v1.1/documents/12345.pdf';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'mode'               => 'normal', 
        'copies'             => 1, 
        'output'             => 'html', 
        'output_template_id' => 123, 
        'output_version'     => 'ORIGINAL', 
        'return_qrcode'      => 1 or 0, 
        'download'           => 1 or 0, 
        'force_template'     => 'true or false', 
        'register_id'        => 12345, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| mode | string<br><br>* * *<br><br>normal, tests |     | Working mode |
| copies | int<br><br>* * *<br><br>1, 2, 3 |     | Number of copies |
| output | string<br><br>* * *<br><br>auto, pdf\_url, pdf, html, escpos, tpasibs, json |     | Printable Output |
| output\_template\_id | int | 123 | Template ID |
| output\_version | string<br><br>* * *<br><br>ORIGINAL, SECOND |     | Version |
| return\_qrcode | int | 1 or 0 | Return SVG Qrcode |
| download | int | 1 or 0 | Download PDF. Only .pdf extension |
| force\_template | boolean | true or false | Force template custom |
| register\_id | int | 12345 | Register ID. Only used if the output is auto |

### Response

NameTypeExampleDescriptionidint12345IDtypestringFTOfficial typesubtypestringGDocument Subtypetax\_authority\_idstring10000708560Tax Authority ID  
Only for movement of goodsnumberstringFT 01P2016/220Document Numberdatedate2016-01-02Datedate\_supplydate2016-01-02Datesystem\_timedatetime2016-01-02 10:01:20System date and time  
Always using UTC timezone and in sync with the Portuguese Astronomical Observatorylocal\_timedatetime2016-01-02 10:01:20Local date and time  
Local time according to your timezoneamount\_grosscurrency123Total amount after taxesamount\_netcurrency100.00Total amount before taxesdate\_duedate2016-01-15Due date  
When payment is dueobservationsstringVersão vermelhaNotesexternal\_referencestringPT00192-2025-21302External referencehas\_travel\_tax\_freebooleantrueHas travel tax freestore\_idint12345Store IDregister\_idint12345Register IDuser\_idint12345User IDtaxescollectionTaxes list

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| total | currency | 123.00 | Amount after taxes |
| base | currency | 100.00 | Amount before taxes |
| amount | currency | 23.00 | Tax amount |
| rate | float | 23  | Tax rate |

discountsarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| amount | currency | 45  | Discount amount |
| percentage | float | 5   | Discount percentage |
| total | currency | 13.23 | Total amount of discounts |

paymentscollectionPayment methods

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 100 | Payment method ID |
| title | string | Dinheiro | Payment title |
| amount | currency | 100 | Amount |
| change | currency | 37.00 | Change |

clientarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID do cliente |
| name | string | Alberto Lopes | Name |
| fiscal\_id | fiscal\_id | 123456789 | Fiscal ID |
| address | string | Rua Amadeu Sousa Cardoso, 120, 3E | Address |
| postalcode | string | 4100-251 | Postal code |
| city | string | Porto | City/Locality |
| country | string | PT  | Country Code |
| country\_name | string | Portugal | Country Name |
| email | email | alberto.lopes@dominio.pt | Email |
| external\_reference | string | AB892798/19 | External Reference |
| is\_tax\_free\_valid | boolean | 1   | Is a client valid for tax free? |

itemscollectionProductsNameTypeExampleDescriptionidint12345IDqtyfloat3.530Quantitytype\_idstringPProduct typetitlestringCafé ao KgNamereferencestringCAFK001ReferencetextstringNew EditionSome text about this itemserialstring907298237982393Serial Number(s)reference\_documentstringGT 12P2017/22Reference Documentstock\_controlint1 or 0Control Stockamountscollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| net\_unit | currency | 100 | Unit net amount |
| net\_total | currency | 300 | Total net amount |
| gross\_unit | currency | 123 | Unit gross amount |
| gross\_total | currency | 100 | Total gross amount |

discountscollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| amount | currency | 20  | Discount amount |
| percentage | float | 5   | Discount percentage |
| calculated\_percentage | float | 25  | Calculated percentage |

taxarray

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | string<br><br>* * *<br><br>`NOR` - Taxa Normal  <br>`INT` - Taxa Intermédia  <br>`RED` - Taxa Reduzida  <br>`ISE` - Isento  <br>`OUT` - Outros |     | Tax ID |
| country | string | PT  | Country code |
| rate | float | 23  | Tax rate |
| exemption | string<br><br>* * *<br><br>`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  <br>`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  <br>`M03` - M03 - Exigibilidade de caixa (revogado)  <br>`M04` - M04 - Artigo 13.º do CIVA ou similar  <br>`M05` - M05 - Artigo 14.º do CIVA ou similar  <br>`M06` - M06 - Artigo 15.º do CIVA ou similar  <br>`M07` - M07 - Artigo 9.º do CIVA ou similar  <br>`M08` - M08 - IVA - autoliquidação (revogado)  <br>`M09` - M09 - IVA - não confere direito a dedução  <br>`M10` - M10 - IVA - Regime de isenção  <br>`M11` - M11 - Regime particular do tabaco  <br>`M12` - M12 - Regime da margem de lucro - Agências de viagens  <br>`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  <br>`M14` - M14 - Regime da margem de lucro - Objetos de arte  <br>`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  <br>`M16` - M16 - Artigo 14.º do RITI ou similar  <br>`M19` - M19 - Outras isenções  <br>`M20` - M20 - IVA - regime forfetário  <br>`M21` - M21 - IVA – não confere direito à dedução  <br>`M25` - M25 - Mercadorias à consignação  <br>`M26` - M26 - Cabaz alimentar (expirado)  <br>`M30` - M30 - IVA - autoliquidação (2.1.i)  <br>`M31` - M31 - IVA - autoliquidação (2.1.j)  <br>`M32` - M32 - IVA - autoliquidação (2.1.l)  <br>`M33` - M33 - IVA - autoliquidação (2.1.m)  <br>`M34` - M34 - IVA - autoliquidação (2.1.n)  <br>`M40` - M40 - IVA - autoliquidação (6.6.a)  <br>`M41` - M41 - IVA - autoliquidação (8.3.R)  <br>`M42` - M42 - IVA - autoliquidação (21.2007)  <br>`M43` - M43 - IVA - autoliquidação (362.99)  <br>`M99` - M99 - Não sujeito; não tributado ou similar |     | Exemption Code  <br>To be used only when tax\_id = ISE |
| exemption\_law | string | Artigo 13.º do CIVA | Exemption Law  <br>To be used only when tax\_id = ISE |

category\_idint12345Category IDbrand\_idint12345Brand IDqty\_left\_to\_invoicefloat1Quantity left to invoice  
Returned only when document is a "Guia Global"qty\_ncfloat1Quantity of items left to return  
Quantity of items left to make a return with a credit noteqty\_left\_to\_invoicefloat1Quantity left to invoice  
Returned only when document is a "Guia Global"statusarrayStatus

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | string<br><br>* * *<br><br>`N` - Normal  <br>`A` - Anulado |     | Status ID |
| date | date | 2016-10-10 | Last changed date |
| user\_id | int | 12345 | User ID |

debtarrayDebt amount

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| total | currency | 10.28 | Amount to be paid |
| paid | currency | 3.10 | Amount already paid |
| unpaid | currency | 7.18 | Amount unpaid |

irsarrayIRS data

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| amount | currency | 10.28 | Amount |
| rate | float | 0.115 | Rate |
| description | string | Art. 101.º, n.ºs 1 e 9, do CIRS. Art. 101.º, n.º1, do CIRS | Description |

movement\_of\_goodsarrayTransportation infoNameTypeExampleDescriptionlicence\_platestring00-AB-00Vehicle licence plateat\_codestring1223234AT Codeshow\_pricesstringyesIf prices should be printedloadpointcollectionLoadpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| date | date | 2016-10-01 | Date |
| time | time | 10:05 | Hour |
| address | string | Rua Amadeu Sousa Cardoso, 13 | Address |
| postalcode | string | 4100-423 | Postal code |
| city | string | Porto | City/locality |
| changestock | string | Yes | Stock Out |

landpointcollectionLandpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| date | date | 2016-10-02 | Date |
| time | time | 09:15 | Hour |
| address | string | Rua Almada Negreiros, 98 | Address |
| postalcode | string | 1100-123 | Postal code |
| city | string | Lisboa | City/locality |
| disclaimer | string |     | Global disclaimer |

at\_idint12345ID generated by AT  
Only set on documents that have been automatically communicated to AT.related\_docscollectionRelated documents

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Document ID |
| type | string | FT  | Type |
| number | string | FT 01P2016/220 | Document number |
| amount | currency | 123.00 | Total amount |
| status | string<br><br>* * *<br><br>`N` - Normal  <br>`A` - Anulado |     | Document status |

hashstringBgahValidation hashatcudstringJFAAAAAA-123ATCUDoutputtextPrintable outputoutput\_dataimmutablePrintable output dataqrcodetextQrcode SVGqrcode\_datatextQrcode DatamultibancoarrayYour own multibanco data.

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| entity | string | 10022 | Multibanco Entity |
| reference | string | 222333444 | Multibanco Reference |
| amount | currency | 22.53 | Multibanco Amount |

venduspayarrayVendus Pay Smart Checkout Page

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| payment\_url | string | https://pay.vendus.pt/ | Smart checkout URL |
| payment\_qrcode | text |     | QR CODE |

Create POST
-----------

Creates a new document like an invoice, a credit note, a receipt for a payment, a transportation document, and all others.  
  
**Invoices**  
The only mandatory parameter when creating an invoice is `items`. For each item, you must send at least its `qty`, along with `id` (or `reference`). If it is a new product, it will be created. Regarding `client`, you don't have to send this parameter if you don't have his `fiscal_id`, and you should NEVER send `fiscal_id` as 999999990. And if `client` does not exist, it will be added.  
  
**Credit Notes**  
When creating a NC, you must specify `reference_document` for each item, passing `document_number` and `document_row` which unequivocally identifies an existing line on the original invoice, along with `id` and `qty`. You also have to specify notes stating the reason for issuing the credit note.  
  
**Payments and Receipts**  
To register a customer's payment, you create a receipt, that is, a document of type `RG`. Relevant parameters are `payments` and `invoices`, which should contain a list of all invoices being paid, each identified by its `document_number`. You should NOT send `items`.

* * *

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'register_id'            => 12345, 
        'type'                   => 'FT', 
        'discount_code'          => '23-180523-7', 
        'discount_amount'        => 10.00, 
        'discount_percentage'    => '2.50', 
        'date_due'               => '2025-12-31', 
        'mode'                   => 'normal', 
        'date'                   => '2025-07-29', 
        'date_supply'            => '2025-07-29', 
        'notes'                  => 'New season', 
        'ncr_id'                 => 'Specific to CV', 
        'external_reference'     => 'PT00192-2025-21302', 
        'stock_operation'        => 'out', 
        'ifthenpay'              => 'no', 
        'eupago'                 => 'no', 
        'print_discount'         => 'no', 
        'output'                 => 'html', 
        'output_template_id'     => 123, 
        'tx_id'                  => '123', 
        'errors_full'            => 'no', 
        'rest_room'              => 12345, 
        'rest_table'             => 12345, 
        'occupation'             => 2, 
        'stamp_retention_amount' => 100.00, 
        'irc_retention_id'       => 'a', 
        'mgmAmount'              => 12345, 
        'related_document_id'    => 12345, 
        'return_qrcode'          => 1 or 0, 
        'doc_to_generate'        => 'FT', 
        'multibanco'             => array(
            'entity'    => '10022', 
            'reference' => '222333444', 
            'amount'    => 22.53, 
        ), 
        'client'                 => array(
            'id'                 => 12345, 
            'fiscal_id'          => '223098091', 
            'name'               => 'Alberto Lopes', 
            'address'            => 'Av. Sousa Magalhães, 126', 
            'postalcode'         => '4100-039', 
            'city'               => 'Lisboa', 
            'phone'              => '210 192 930', 
            'mobile'             => '918 876 546', 
            'email'              => 'alberto.lopes@dominio.pt', 
            'website'            => 'https://www.dominio.pt', 
            'notes'              => 'VIP client', 
            'country'            => 'PT', 
            'external_reference' => 'AB892798/19', 
            'send_email'         => 'yes', 
            'billing_email'      => 'alberto.lopes.contabilista@dominio.pt', 
            'irs_retention'      => 'no', 
        ), 
        'supplier'               => array(
            'id'         => 12345, 
            'fiscal_id'  => '223098091', 
            'name'       => 'Alberto Lopes', 
            'address'    => 'Av. Sousa Magalhães, 126', 
            'postalcode' => '4100-039', 
            'city'       => 'Lisboa', 
            'phone'      => '210 192 930', 
            'mobile'     => '918 876 546', 
            'email'      => 'alberto.lopes@dominio.pt', 
            'website'    => 'https://www.dominio.pt', 
            'country'    => 'PT', 
            'obs'        => 'Some info about supplier', 
        ), 
        'movement_of_goods'      => array(
            'vehicle_id'  => '00-AB-00', 
            'show_prices' => 'yes', 
            'loadpoint'   => array(
                'date'        => '2016-10-01', 
                'time'        => '10:05', 
                'address'     => 'Rua Amadeu Sousa Cardoso, 13', 
                'postalcode'  => '4100-423', 
                'city'        => 'Porto', 
                'country'     => 'PT', 
                'store_id'    => 1234, 
                'changestock' => 'out', 
            ), 
            'landpoint'   => array(
                'is_global'    => 'no', 
                'date'         => '2016-10-02', 
                'time'         => '09:15', 
                'address'      => 'Rua Almada Negreiros, 98', 
                'postalcode'   => '1100-123', 
                'city'         => 'Lisboa', 
                'country'      => 'PT', 
                'store_id'     => 1234, 
                'receivestock' => 'yes', 
            ), 
        ), 
        'payments'               => array(
            array(
                'id'           => '1234', 
                'amount'       => 100.00, 
                'date_due'     => '2025-12-31', 
                'venduspay_id' => 'xxxxxxxxxx', 
            ),
        ), 
        'items'                  => array(
            array(
                'id'                  => 12345, 
                'reference'           => 'CAFK001', 
                'gross_price'         => 12345, 
                'supply_price'        => 12345, 
                'qty'                 => 3.530, 
                'type_id'             => 'P', 
                'variant_id'          => 12345, 
                'lot_id'              => 12345, 
                'title'               => 'Café ao Kg', 
                'unit_id'             => 1872, 
                'category_id'         => 123, 
                'brand_id'            => 124, 
                'discount_amount'     => 124, 
                'discount_percentage' => '5', 
                'stock_control'       => 1, 
                'stock_type'          => 'M', 
                'tax_id'              => 'NOR', 
                'tax_exemption'       => 'M40', 
                'tax_exemption_law'   => 'Artigo 13.º do CIVA', 
                'text'                => 'New Edition', 
                'serial'              => '87393872983792', 
                'tax_custom'          => array(
                    'country' => 'PT, ES, FR, PT-AC', 
                    'rate'    => 23, 
                    'code'    => 'NOR, INT, RED, NS, ...', 
                    'type'    => 'IVA', 
                ), 
                'reference_document'  => array(
                    'document_number'    => 'FT 01P2016/220', 
                    'document_row'       => 3, 
                    'reference_id'       => 1234, 
                    'reference_relation' => 'GG', 
                ), 
            ),
        ), 
        'invoices'               => array(
            array(
                'document_number' => 'FT 01P2016/28', 
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptionregister\_idint12345POS IDtypestring

* * *

`FT` - Factura  
`FS` - Factura Simplificada  
`FR` - Factura Recibo  
`NC` - Nota de Crédito  
`DC` - Consulta de Mesa  
`PF` - Factura Pró-Forma  
`OT` - Orçamento  
`EC` - Encomenda  
`GA` - Guia de Ativos Próprios  
`GT` - Guia de Transporte  
`GR` - Guia de Remessa  
`GD` - Guia de Devolução  
`RG` - Recibo  
Type of documentdiscount\_codestring23-180523-7Discount codediscount\_amountcurrency10.00Discount in eurosdiscount\_percentagestring2.50Discount in percentagedate\_duedate2025-12-31Due datepaymentscollectionPayment Methods

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **id** | string | 1234 | Payment Method ID |
| amount | currency | 100.00 | Amount in euros  <br>If not set the computed total is used. |
| date\_due | date | 2025-12-31 | For `DNP` payments |
| venduspay\_id | string | xxxxxxxxxx | Vendus Pay payment ID |

modestring

* * *

normal, testsWorking mode  
If not provided, it will be assumed register's mode definitiondatedate2025-07-29If not set, defaults to current date.  
Can not be ealier than the one from latest document, nor later than the current date.date\_supplydate2025-07-29If not set, defaults to current date.  
Date when goods/services are made available to customernotesstringNew seasonNotesncr\_idstringSpecific to CVNC reason IDexternal\_referencestringPT00192-2025-21302External reference  
For example, to reference a tracking codestock\_operationstring

* * *

`in` - Increment stock  
`none` - Don't change stock  
`out` - Decrement stock  
Operation on items with stock\_control.  
If not sent, system will use the default for the type of document being createdifthenpaystring

* * *

no, yesGenerate ifthenpay reference.  
If not set, default is no.eupagostring

* * *

no, yesGenerate euPago reference.  
If not set, default is no.multibancoarrayYour own multibanco data.

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| entity | string | 10022 | Multibanco Entity |
| reference | string | 222333444 | Multibanco Reference |
| amount | currency | 22.53 | Multibanco Amount |

clientarrayClient

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Client ID  <br>If client already exists, it is only needed to send this param |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of client  <br>If client is portuguese, it must be a valid fiscal id |
| name | string | Alberto Lopes | Client Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| notes | string | VIP client | Notes |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| external\_reference | string | AB892798/19 | External Reference |
| send\_email | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Send Invoice |
| billing\_email | email | alberto.lopes.contabilista@dominio.pt | Email to send the invoice. If empty, the email field is used |
| irs\_retention | string<br><br>* * *<br><br>`yes` - Sim  <br>`no` - Não |     | Whether client does IRS retention |

supplierarraySupplier

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | Supplier ID  <br>If supplier already exists, it is only needed to send this param |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of supplier  <br>If supplier is portuguese, it must be a valid fiscal id |
| name | string | Alberto Lopes | Supplier Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |
| obs | string | Some info about supplier | Observations |

itemscollectionNameTypeExampleDescriptionidint12345ID  
Mandatory if reference is nullreferencestringCAFK001Reference  
Mandatory if ID is nullgross\_pricecurrency12345Unit pricesupply\_pricecurrency12345Supply price**qty**float3.530Quantitytype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDvariant\_idint12345Variant IDlot\_idint12345Lot IDtitlestringCafé ao KgNameunit\_idint1872Unit IDcategory\_idint123Category IDbrand\_idint124Brand IDdiscount\_amountcurrency124Discount in eurosdiscount\_percentagestring5Discount in percentagestock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias (default)  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEtax\_customarrayTo be used only when taxation is for another region/country

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| country | string | PT, ES, FR, PT-AC | Region/Country in ISO 3166-1 alpha-2 format and also PT-AC and PT-MA |
| rate | float | 23  | Tax Percentage |
| code | string | NOR, INT, RED, NS, ... | Tax Code matching \[a-zA-Z0-9.\] |
| type | string<br><br>* * *<br><br>IVA |     | Tax Type - currently, only IVA |

reference\_documentarrayA document that is related, like when creating a NC

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| document\_number | string | FT 01P2016/220 | Document number |
| document\_row | int | 3   | A row number of the document where the product is |
| reference\_id | int | 1234 | Reference Document ID |
| reference\_relation | string | GG  | Valid Document Type |

textstringNew EditionSome text about this itemserialstring87393872983792Serial number(s) if applicablemovement\_of\_goodsarrayTransportation infoNameTypeExampleDescriptionvehicle\_idstring00-AB-00Vehicle licence plateshow\_pricesstring

* * *

no, yesIf prices should be printedloadpointarrayLoadpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| date | date | 2016-10-01 | Date |
| time | time | 10:05 | Hour |
| address | string | Rua Amadeu Sousa Cardoso, 13 | Address |
| postalcode | string | 4100-423 | Postal code |
| city | string | Porto | City/locality |
| country | country | PT  | País |
| store\_id | int | 1234 | Store ID  <br>Used to set store from where stock is going to be removed |
| changestock | string | out | Stock |

landpointarrayLandpoint

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| is\_global | string<br><br>* * *<br><br>no, yes |     | Whether it is a global movement |
| date | date | 2016-10-02 | Date |
| time | time | 09:15 | Hour |
| address | string | Rua Almada Negreiros, 98 | Address |
| postalcode | string | 1100-123 | Postal code |
| city | string | Lisboa | City/locality |
| country | country | PT  | País |
| store\_id | int | 1234 | Store ID  <br>Used to set store to where stock is going to be moved |
| receivestock | string | yes | Stock |

invoicescollectionWhen creating a RG

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| document\_number | string | FT 01P2016/28 | Document Number |

print\_discountstring

* * *

yes, noPrint Discount Couponsoutputstring

* * *

auto, pdf\_url, pdf, html, escpos, tpasibsPrintable Outputoutput\_template\_idint123Template IDtx\_idstring123Transaction unique identifier.  
If set, this will ensure that only a document may be created using the same tx\_id, even if multiple requests are made by mistake.errors\_fullstring

* * *

no, yesWhether to return full error info or just error stringrest\_roomint12345ID Roomrest\_tableint12345ID Tableoccupationint2Occupationstamp\_retention\_amountcurrency100.00Amount in eurosirc\_retention\_idtextaIRC IDmgmAmountcurrency12345MGM Club IDrelated\_document\_idint12345ID of a document that relates to this onereturn\_qrcodeint1 or 0Return SVG Qrcodedoc\_to\_generatestring

* * *

FT, FRType of document to generate when RG or OT is paid

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| type | string | FT  | Official type |
| subtype | string | G   | Document Subtype |
| tax\_authority\_id | string | 10000708560 | Tax Authority ID  <br>Only for movement of goods |
| number | string | FT 01P2016/220 | Document Number |
| date | date | 2016-01-02 | Date |
| date\_supply | date | 2016-01-02 | Date |
| system\_time | datetime | 2016-01-02 10:01:20 | System date and time  <br>Always using UTC timezone and in sync with the Portuguese Astronomical Observatory |
| local\_time | datetime | 2016-01-02 10:01:20 | Local date and time  <br>Local time according to your timezone |
| amount\_gross | currency | 123 | Total amount after taxes |
| amount\_net | currency | 100.00 | Total amount before taxes |
| hash | string | Bgah | Validation hash |
| atcud | string | JFAAAAAA-123 | ATCUD |
| output | text |     | Printable output |
| output\_data | immutable |     | Printable output data |
| qrcode | text |     | Qrcode SVG |
| qrcode\_data | text |     | Qrcode Data |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/documents/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'stock'  => 'true', 
        'status' => 'N', 
        'mode'   => 'normal', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| stock | string | true | stock |
| **status** | string<br><br>* * *<br><br>`N` - Normal  <br>`A` - Canceled  <br>`F` - Invoiced |     | Estado |
| mode | string<br><br>* * *<br><br>normal, tests |     | Working mode |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| status | string<br><br>* * *<br><br>`N` - Normal  <br>`A` - Canceled  <br>`F` - Invoiced |     | Estado |

---

# Registers - Cegid Vendus API

API (v1.1)
==========

Registers
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'store_id' => 1234, 
        'type'     => 'auto - Automáticopos - Normal (Venda Produtos/Serviços)rest - Restaurante (Gestão de Salas/Mesas)api - API (Integração Programática)office - Officerest_terminal - Terminal de Pedidos (Pedidos à Mesa/Cozinha) Multiple: pos,rest_terminal', 
        'isActive' => 'yes', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 1234 | Store ID |
| type | string | `auto` - Automático  <br>`pos` - Normal (Venda Produtos/Serviços)  <br>`rest` - Restaurante (Gestão de Salas/Mesas)  <br>`api` - API (Integração Programática)  <br>`office` - Office  <br>`rest_terminal` - Terminal de Pedidos (Pedidos à Mesa/Cozinha)  <br>Multiple: pos,rest\_terminal | Register Type |
| isActive | string<br><br>* * *<br><br>yes |     | Active Registers |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Register ID |
| store\_id | int | 123 | Store ID |
| title | string | POS 1 | Title |
| products\_show\_reference | string<br><br>* * *<br><br>yes, no |     | Show Reference |
| products\_show\_tax | string<br><br>* * *<br><br>yes, no |     | Show Tax |
| document\_type\_id | string | FT  | Document Type ID |
| expires | date | 2025-07-20 | Expiration date |
| status | string<br><br>* * *<br><br>close, open |     | Status |
| situation | string<br><br>* * *<br><br>on, on |     | Status |
| mode | string<br><br>* * *<br><br>normal, tests |     | Register Mode |
| type | string | pos | Register Type |
| show\_products | string<br><br>* * *<br><br>all, without\_barcode, none |     | Show Products |
| default\_pay\_due | string |     | Default Pay Due |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidintRegister IDstore\_idint123Store IDtitlestringPOS 1Titleexpiresdate2025-07-20Expiration datesubscription\_activestring

* * *

yes, noRegister subscription statustypestring

* * *

auto, pos, rest, api, office, rest\_terminalRegister Typefinalize\_advancedstring

* * *

yes, noWhether to use advanced finalizestatusstring

* * *

close, openStatussituationstring

* * *

on, onStatusmodestring

* * *

normal, testsRegister Modedocument\_type\_idstringDefault Document Typeprices\_groupintRegister Price GroupproductsarrayProducts options

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| show\_reference | string<br><br>* * *<br><br>yes, no |     | Whether reference should be visible |
| show\_tax | string<br><br>* * *<br><br>yes, no |     | Whether visible prices should include tax |

show\_taxstring

* * *

yes, noWhether visible prices should include taxdefault\_tax\_valuestring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Default Tax ValueprintarrayPrinting optionsNameTypeExampleDescriptionduplicatearrayProducts options

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| active | string<br><br>* * *<br><br>yes, no |     | Status |
| copies | int | 2   | Number of copies |

methodstring

* * *

browser, vendusdesktopPrinting methoduse\_default\_printerint

* * *

0, 1Whether to use default printerprinter\_namestringEpson TM-T20IIPrinter namepaper\_sizestring

* * *

58, 72, 72BPaper Sizeescpos\_typestring

* * *

v1, v2, v3ESC/POS Typeprint\_popupstring

* * *

yes, noWhether to print document or send it by emailshow\_productsstring

* * *

all, without\_barcode, noneShow Productsdefault\_pay\_duestring15,30,60,90Registers default due date

---

# Movements - Cegid Vendus API

API (v1.1)
==========

Movements
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/12345/movements/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/12345/movements/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'since'     => '2025-07-29', 
        'until'     => '2025-07-29', 
        'return'    => 'summary/list', 
        'operation' => 'point', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| since | date | 2025-07-29 | Since this date |
| until | date | 2025-07-29 | Until this date |
| return | string | summary/list | return |
| operation | string | point | operation |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| operation | string | open | Operation |
| type | string | NU  | Official type |
| amount | currency | 23.15 | Amount |
| obs | text | Took out money to pay our supplier | Observations |
| document\_id | int | 43334 | Document ID |
| user\_id | int | 982 | User ID |
| date | date | 2025-07-29 | Date |
| time | time | 12:00:00 | Time |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/12345/movements/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'operation' => 'open', 
        'type'      => 'NU', 
        'amount'    => 23.15, 
        'obs'       => 'Took out money to pay our supplier', 
        'email'     => '1234@gmail.com', 
        'return'    => 'summary', 
        'output'    => 'html', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **operation** | string<br><br>* * *<br><br>`in` - Entrada  <br>`out` - Saída  <br>`open` - Abertura  <br>`close` - Fecho  <br>`point` - Ponto de Caixa |     | Operation |
| **type** | string<br><br>* * *<br><br>`NU` - Numerário  <br>`CC` - Cartão de Crédito  <br>`CD` - Cartão de Débito  <br>`CO` - Cartão Oferta  <br>`CS` - Compensação de Saldos C/C  <br>`DE` - Cartão de Pontos  <br>`TR` - Ticket Restaurante  <br>`MB` - Referência MB  <br>`OU` - Outro  <br>`CH` - Cheque Bancário  <br>`LC` - Letra Comercial  <br>`TB` - Transferência Bancária  <br>`PR` - Permuta de Bens  <br>`MBWAY` - MB WAY  <br>`ZARPH` - Zarph  <br>`ALICE` - Alice  <br>`CASHMATIC` - Cashmatic  <br>`CASHLOGY` - Cashlogy  <br>`ITHINKIOT` - iThink IoT  <br>`MYPOS` - MyPOS  <br>`TPASIBS` - TPA SIBS  <br>`VENDUSPAY` - Vendus Pay |     | Official type |
| **amount** | currency | 23.15 | Amount |
| obs | text | Took out money to pay our supplier | Some text explaining the movement |
| email | email | 1234@gmail.com | email |
| return | string<br><br>* * *<br><br>summary, list |     | What to return |
| output | string<br><br>* * *<br><br>pdf, escpos, html, email |     | Printable Output |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| operation | string | open | Operation |
| type | string | NU  | Official type |
| amount | currency | 23.15 | Amount |
| obs | text | Took out money to pay our supplier | Observations |
| output | text | Base64 Encoded | Printable output |

---

# Rooms - Cegid Vendus API

API (v1.1)
==========

Rooms
-----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/rooms/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/rooms/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'store_id' => 1234, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 1234 | Store ID |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Room ID |
| title | string | Sala AB | Title |
| description | string | Sala do Piso 2 | Description |
| store\_id | int | 123 | Store ID |
| order | int | 1   | Display order in a list |
| people\_request | string | yes\|no | If table should request the number of people for open it |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/rooms/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/rooms/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Room ID |
| title | string | Sala AB | Title |
| description | string | Sala do Piso 2 | Description |
| store\_id | int | 123 | Store ID |
| order | int | 1   | Display order in a list |
| people\_request | string | yes\|no | If table should request the number of people for open it |

---

# Products - Cegid Vendus API

API (v1.1)
==========

Products
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'q'           => 'book', 
        'ids'         => '1234', 
        'title'       => 'book', 
        'store_id'    => 123, 
        'reference'   => 'XBD001', 
        'barcode'     => '6920702798897', 
        'category_id' => 123, 
        'brand_id'    => 123, 
        'status'      => 'XBD001', 
        'type'        => 'all', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| q   | string | book | String to be searched on title, reference and barcode |
| ids | string | 1234 | String to be searched on ids  <br>You may send a comma separated string with multiple ids |
| title | string | book | String to be searched on title |
| store\_id | int | 123 | Store ID |
| reference | string | XBD001 | Reference code |
| barcode | string | 6920702798897 | Barcode |
| category\_id | int | 123 | Category ID |
| brand\_id | int | 123 | Brand ID |
| status | string<br><br>* * *<br><br>`on` - Ativo (default)  <br>`off` - Inativo  <br>`all` - All products |     | Status |
| type | string<br><br>* * *<br><br>`all` - All products (default)  <br>`normal` - All except compound and those with variants  <br>`compound` - Only compound  <br>`has_variants` - Only those with variants |     | Type |

### Response

NameTypeExampleDescriptionidint12345IDorderint1Display order in a listreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier CodetitlestringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstringnoInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency123.00Gross priceprice\_without\_taxcurrency100.00Price Without TaxpricescollectionPrice per Price Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| price | currency | 123.00 | Price |
| price\_without\_tax | currency | 100.00 | Price |

unit\_idint123Unit IDclass\_namestring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class nametype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDcompoundcollectionInformation for compound productsNameTypeExampleDescriptionidinttitlestringgross\_pricecurrencytypestringstockcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| stock | int |     |     |
| store\_id | int |     |     |
| stock\_alert | int |     |     |

lot\_controlint

* * *

0, 1Lot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDstatusstring

* * *

`on` - Ativo  
`off` - Inativo  
StatusstockfloatonStockstock\_storecollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |
| qty | float | 22  | Qty in stock |
| alert | float | 3   | Stock Alert |

stock\_alertfloatonStock Alertvariant\_idint1234Variant IDvariantscollectionProduct VariantsNameTypeExampleDescriptionvariantarrayVariant Info

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Variant ID |
| title | string |     | Variant Title |
| code | string |     | Variant Code |

product\_variantscollectionProduct VariantsNameTypeExampleDescriptionidint1234Variant IDtextstringBlack / XSVariant TitlebarcodestringBarcodecodestringCodepricecurrencyVariant Pricecomposite\_idscollectionAll variant IdsstockcollectionVariant stock per store

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 123 | Store Id |
| qty | float |     | Quantity |

imagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| xs  | string | /foto/b906f77\_xs.png | Small Image Url |
| m   | string | /foto/b906f77\_m.png | Medium Image Url |

storescollectionStores where the product is available

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |

modifierscollectionInformation for modifiers

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     |     |
| title | string |     |     |
| min | int |     |     |
| max | int |     |     |
| options | collection |     | Modifiers Options |

lotscollectionInformation for Lots

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, inactive |     | Status of the lot |
| expiration\_date | date | 2023-01-01 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidint12345IDorderint1Display order in a listreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier CodetitlestringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstringnoInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency123.00Gross priceprice\_without\_taxcurrency100.00Price Without TaxpricescollectionPrice per Price Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| price | currency | 123.00 | Price |
| price\_without\_tax | currency | 100.00 | Price |

unit\_idint123Unit IDclass\_namestring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class nametype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDcompoundcollectionInformation for compound productsNameTypeExampleDescriptionidinttitlestringgross\_pricecurrencytypestringstockcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| stock | int |     |     |
| store\_id | int |     |     |
| stock\_alert | int |     |     |

lot\_controlint

* * *

0, 1Lot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDstatusstring

* * *

`on` - Ativo  
`off` - Inativo  
StatusstockfloatonStockstock\_storecollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |
| qty | float | 22  | Qty in stock |
| alert | float | 3   | Stock Alert |

stock\_alertfloatonStock Alertvariant\_idint1234Variant IDvariantscollectionProduct VariantsNameTypeExampleDescriptionvariantarrayVariant Info

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Variant ID |
| title | string |     | Variant Title |
| code | string |     | Variant Code |

product\_variantscollectionProduct VariantsNameTypeExampleDescriptionidint1234Variant IDtextstringBlack / XSVariant TitlebarcodestringBarcodecodestringCodepricecurrencyVariant Pricecomposite\_idscollectionAll variant IdsstockcollectionVariant stock per store

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 123 | Store Id |
| qty | float |     | Quantity |

imagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| xs  | string | /foto/b906f77\_xs.png | Small Image Url |
| m   | string | /foto/b906f77\_m.png | Medium Image Url |

storescollectionStores where the product is available

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |

modifierscollectionInformation for modifiers

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     |     |
| title | string |     |     |
| min | int |     |     |
| max | int |     |     |
| options | collection |     | Modifiers Options |

lotscollectionInformation for Lots

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, inactive |     | Status of the lot |
| expiration\_date | date | 2023-01-01 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'reference'           => 'XBD001', 
        'barcode'             => 'P000000XBD001', 
        'supplier_code'       => 'AHSG102X', 
        'title'               => 'Book XPTO', 
        'description'         => 'Book XPTO 2006 Edition', 
        'include_description' => 'no', 
        'supply_price'        => 10.12, 
        'gross_price'         => 20.00, 
        'unit_id'             => 123, 
        'type_id'             => 'P', 
        'class_id'            => 'AL', 
        'lot_control'         => 'true', 
        'stock_control'       => 1, 
        'stock_type'          => 'M', 
        'tax_id'              => 'NOR', 
        'tax_exemption'       => 'M40', 
        'tax_exemption_law'   => 'Artigo 13.º do CIVA', 
        'category_id'         => 123, 
        'brand_id'            => 123, 
        'image'               => 'https://www.site.com/img/1.png', 
        'status'              => 'on', 
        'prices'              => array(
            array(
                'id'          => 1234, 
                'gross_price' => 20.00, 
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptionreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier Code**title**stringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstring

* * *

yes, noInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency20.00Gross pricepricescollectionPrice groups

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| gross\_price | currency | 20.00 | Gross price |

**unit\_id**int123Unit IDtype\_idstring

* * *

`P` - Produto (default)  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDclass\_idstring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class idlot\_controlbooleantrueLot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias (default)  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal (default)  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDimagestringhttps://www.site.com/img/1.pngImage  
Either an url or a base64 encoded stringstatusstring

* * *

`on` - Ativo (default)  
`off` - Inativo  
Status

### Response

NameTypeExampleDescriptionidint12345IDorderint1Display order in a listreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier CodetitlestringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstringnoInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency123.00Gross priceprice\_without\_taxcurrency100.00Price Without TaxpricescollectionPrice per Price Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| price | currency | 123.00 | Price |
| price\_without\_tax | currency | 100.00 | Price |

unit\_idint123Unit IDclass\_namestring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class nametype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDcompoundcollectionInformation for compound productsNameTypeExampleDescriptionidinttitlestringgross\_pricecurrencytypestringstockcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| stock | int |     |     |
| store\_id | int |     |     |
| stock\_alert | int |     |     |

lot\_controlint

* * *

0, 1Lot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDstatusstring

* * *

`on` - Ativo  
`off` - Inativo  
StatusstockfloatonStockstock\_storecollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |
| qty | float | 22  | Qty in stock |
| alert | float | 3   | Stock Alert |

stock\_alertfloatonStock Alertvariant\_idint1234Variant IDvariantscollectionProduct VariantsNameTypeExampleDescriptionvariantarrayVariant Info

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Variant ID |
| title | string |     | Variant Title |
| code | string |     | Variant Code |

product\_variantscollectionProduct VariantsNameTypeExampleDescriptionidint1234Variant IDtextstringBlack / XSVariant TitlebarcodestringBarcodecodestringCodepricecurrencyVariant Pricecomposite\_idscollectionAll variant IdsstockcollectionVariant stock per store

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 123 | Store Id |
| qty | float |     | Quantity |

imagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| xs  | string | /foto/b906f77\_xs.png | Small Image Url |
| m   | string | /foto/b906f77\_m.png | Medium Image Url |

storescollectionStores where the product is available

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |

modifierscollectionInformation for modifiers

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     |     |
| title | string |     |     |
| min | int |     |     |
| max | int |     |     |
| options | collection |     | Modifiers Options |

lotscollectionInformation for Lots

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, inactive |     | Status of the lot |
| expiration\_date | date | 2023-01-01 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'reference'           => 'XBD001', 
        'barcode'             => 'P000000XBD001', 
        'supplier_code'       => 'AHSG102X', 
        'title'               => 'Book XPTO', 
        'description'         => 'Book XPTO 2006 Edition', 
        'include_description' => 'no', 
        'supply_price'        => 10.12, 
        'gross_price'         => 20.00, 
        'unit_id'             => 123, 
        'type_id'             => 'P', 
        'class_id'            => 'AL', 
        'lot_control'         => 'true', 
        'stock_control'       => 1, 
        'stock_type'          => 'M', 
        'tax_id'              => 'NOR', 
        'tax_exemption'       => 'M40', 
        'tax_exemption_law'   => 'Artigo 13.º do CIVA', 
        'category_id'         => 123, 
        'brand_id'            => 123, 
        'image'               => 'https://www.site.com/img/1.png', 
        'status'              => 'on', 
        'prices'              => array(
            array(
                'id'          => 1234, 
                'gross_price' => 20.00, 
            ),
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

NameTypeExampleDescriptionreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier CodetitlestringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstring

* * *

yes, noInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency20.00Gross pricepricescollectionPrice groups

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| gross\_price | currency | 20.00 | Gross price |

unit\_idint123Unit IDtype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDclass\_idstring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class idlot\_controlbooleantrueLot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDimagestringhttps://www.site.com/img/1.pngImage  
Either an url or a base64 encoded stringstatusstring

* * *

`on` - Ativo  
`off` - Inativo  
Status

### Response

NameTypeExampleDescriptionidint12345IDorderint1Display order in a listreferencestringXBD001Reference codebarcodestringP000000XBD001Barcodesupplier\_codestringAHSG102XSupplier CodetitlestringBook XPTONamedescriptionstringBook XPTO 2006 EditionDescriptioninclude\_descriptionstringnoInclude description on invoicesupply\_pricecurrency10.12Supplier pricegross\_pricecurrency123.00Gross priceprice\_without\_taxcurrency100.00Price Without TaxpricescollectionPrice per Price Group

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Price Group ID |
| price | currency | 123.00 | Price |
| price\_without\_tax | currency | 100.00 | Price |

unit\_idint123Unit IDclass\_namestring

* * *

`ALI` - Alimentar  
`ALT` - Álcool e tabaco  
`CUL` - Produtos culturais  
`DEP` - Desporto e lazer  
`EDM` - Eletrodomésticos  
`CAS` - Produtos para casa  
`PCS` - Computador e eletrónica  
`MOD` - Moda e acessórios  
`PER` - Perfumaria, cosméticos e produtos farmacêuticos  
`JOI` - Joias e Relógios  
Class nametype\_idstring

* * *

`P` - Produto  
`S` - Serviço  
`O` - Outro (portes, adiantamentos, etc.)  
`I` - Imposto (excepto IVA e IS) ou Encargo Parafiscal  
`E` - Imposto Especial de Consumo (IABA, ISP e IT)  
Type IDcompoundcollectionInformation for compound productsNameTypeExampleDescriptionidinttitlestringgross\_pricecurrencytypestringstockcollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| stock | int |     |     |
| store\_id | int |     |     |
| stock\_alert | int |     |     |

lot\_controlint

* * *

0, 1Lot Controlstock\_controlint

* * *

0, 1Stock Controlstock\_typestring

* * *

`M` - M - Mercadorias  
`P` - P - Matérias primas, subsidiárias ou de consumo  
`A` - A - Produtos acabados ou intermédios  
`S` - S - Subprodutos, deperdícios ou refugos  
`T` - T - Produtos e trabalhos em curso  
Stock Typetax\_idstring

* * *

`NOR` - Taxa Normal  
`INT` - Taxa Intermédia  
`RED` - Taxa Reduzida  
`ISE` - Isento  
`OUT` - Outros  
Tax IDtax\_exemptionstring

* * *

`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  
`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  
`M03` - M03 - Exigibilidade de caixa (revogado)  
`M04` - M04 - Artigo 13.º do CIVA ou similar  
`M05` - M05 - Artigo 14.º do CIVA ou similar  
`M06` - M06 - Artigo 15.º do CIVA ou similar  
`M07` - M07 - Artigo 9.º do CIVA ou similar  
`M08` - M08 - IVA - autoliquidação (revogado)  
`M09` - M09 - IVA - não confere direito a dedução  
`M10` - M10 - IVA - Regime de isenção  
`M11` - M11 - Regime particular do tabaco  
`M12` - M12 - Regime da margem de lucro - Agências de viagens  
`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  
`M14` - M14 - Regime da margem de lucro - Objetos de arte  
`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  
`M16` - M16 - Artigo 14.º do RITI ou similar  
`M19` - M19 - Outras isenções  
`M20` - M20 - IVA - regime forfetário  
`M21` - M21 - IVA – não confere direito à dedução  
`M25` - M25 - Mercadorias à consignação  
`M26` - M26 - Cabaz alimentar (expirado)  
`M30` - M30 - IVA - autoliquidação (2.1.i)  
`M31` - M31 - IVA - autoliquidação (2.1.j)  
`M32` - M32 - IVA - autoliquidação (2.1.l)  
`M33` - M33 - IVA - autoliquidação (2.1.m)  
`M34` - M34 - IVA - autoliquidação (2.1.n)  
`M40` - M40 - IVA - autoliquidação (6.6.a)  
`M41` - M41 - IVA - autoliquidação (8.3.R)  
`M42` - M42 - IVA - autoliquidação (21.2007)  
`M43` - M43 - IVA - autoliquidação (362.99)  
`M99` - M99 - Não sujeito; não tributado ou similar  
Tax Exemption Code  
To be used only when tax\_id = ISEtax\_exemption\_lawstringArtigo 13.º do CIVATax Exemption Law  
To be used only when tax\_id = ISEcategory\_idint123Category IDbrand\_idint123Brand IDstatusstring

* * *

`on` - Ativo  
`off` - Inativo  
StatusstockfloatonStockstock\_storecollection

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |
| qty | float | 22  | Qty in stock |
| alert | float | 3   | Stock Alert |

stock\_alertfloatonStock Alertvariant\_idint1234Variant IDvariantscollectionProduct VariantsNameTypeExampleDescriptionvariantarrayVariant Info

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | Variant ID |
| title | string |     | Variant Title |
| code | string |     | Variant Code |

product\_variantscollectionProduct VariantsNameTypeExampleDescriptionidint1234Variant IDtextstringBlack / XSVariant TitlebarcodestringBarcodecodestringCodepricecurrencyVariant Pricecomposite\_idscollectionAll variant IdsstockcollectionVariant stock per store

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store\_id | int | 123 | Store Id |
| qty | float |     | Quantity |

imagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| xs  | string | /foto/b906f77\_xs.png | Small Image Url |
| m   | string | /foto/b906f77\_m.png | Medium Image Url |

storescollectionStores where the product is available

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| store | string | Loja Principal | Store Name |
| store\_id | int | 1234 | Store ID |

modifierscollectionInformation for modifiers

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     |     |
| title | string |     |     |
| min | int |     |     |
| max | int |     |     |
| options | collection |     | Modifiers Options |

lotscollectionInformation for Lots

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 1234 | ID  |
| title | string | 012-10002 | Title of the lot |
| status | string<br><br>* * *<br><br>active, inactive |     | Status of the lot |
| expiration\_date | date | 2023-01-01 | Expiration date of the lot |
| barcode | int | 1234567890 | Barcode of the lot |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/products/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | string |     |     |

---

# Receipts - Cegid Vendus API

API (v1.1)
==========

Receipts
--------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'status' => 'active', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | string<br><br>* * *<br><br>active, inactive |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Receipt ID |
| title | string | Documento A4 | Title |
| type | string<br><br>* * *<br><br>layouta4, receipt |     | Type |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

NameTypeExampleDescriptionidintReceipt IDtypestring

* * *

layouta4, receiptTypetitlestringDocumento A4Titlecomercial\_namestringComercial Namephonestring210192930Phonephone\_coststring

* * *

none, phone, mobile, otherPhone Costphone\_cost\_otherstringCustom Phone Costmobilestring918 876 546Cellphonemobile\_coststring

* * *

none, phone, mobile, otherMobile Costmobile\_cost\_otherstringCustom Mobile Costfaxstring210 192 930Faxemailemailalberto.lopes@dominio.ptEmailsiteurlhttps://www.dominio.ptSite urlnibstring1234 4321 12345678901 72EmailibanstringPT50 1234 4321 12345678901 72EmailswiftstringCGDIPTPLSwiftheaderstringHeader TextfooterstringFooter TextservedstringServedshow\_referencesstring

* * *

yes, noShow Referencesshow\_taxstring

* * *

yes, noShow Taxshow\_operatorstring

* * *

yes, noShow Operator Namebilingualstring

* * *

yes, noShow Bilingualshow\_addressstring

* * *

yes, noShow Addressnc\_signaturestring

* * *

yes, noNC - Signatureqrcodestring

* * *

no, native, image, image\_hdQrcode Typelayout\_idstringLayout IDcolorsimmutableLayout ColorsimagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| m   | string | /foto/b906f77\_m.png | Small Image Url |
| xs  | string | /foto/b906f77\_xs.png | Medium Image Url |
| 72b | string | /foto/b906f77\_72b.png | Medium Image Url |
| receipt | string | /foto/b906f77\_receipt.png | Medium Image Url |
| 58  | string | /foto/b906f77\_58.png | Medium Image Url |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'title'             => 'Documento A4', 
        'comercial_name'    => '', 
        'type'              => 'layouta4', 
        'phone'             => '210192930', 
        'phone_cost'        => 'none', 
        'phone_cost_other'  => '', 
        'mobile'            => '918 876 546', 
        'mobile_cost'       => 'none', 
        'mobile_cost_other' => '', 
        'fax'               => '210 192 930', 
        'email'             => 'alberto.lopes@dominio.pt', 
        'site'              => 'https://www.dominio.pt', 
        'nib'               => '1234 4321 12345678901 72', 
        'iban'              => 'PT50 1234 4321 12345678901 72', 
        'swift'             => 'CGDIPTPL', 
        'header'            => '', 
        'footer'            => '', 
        'served'            => '', 
        'show_references'   => 'yes', 
        'show_tax'          => 'yes', 
        'show_operator'     => 'yes', 
        'bilingual'         => 'yes', 
        'show_address'      => 'yes', 
        'nc_signature'      => 'yes', 
        'qrcode'            => 'no', 
        'layout_id'         => '', 
        'colors'            => '', 
        'image'             => 'https://www.site.com/img/1.png', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Documento A4 | Title |
| comercial\_name | string |     | Comercial Name |
| type | string<br><br>* * *<br><br>receipt, layouta4 |     | Type |
| phone | string | 210192930 | Phone |
| phone\_cost | string<br><br>* * *<br><br>none, phone, mobile, other |     | Phone Cost |
| phone\_cost\_other | string |     | Custom Phone Cost |
| mobile | string | 918 876 546 | Cellphone |
| mobile\_cost | string<br><br>* * *<br><br>none, phone, mobile, other |     | Mobile Cost |
| mobile\_cost\_other | string |     | Custom Mobile Cost |
| fax | string | 210 192 930 | Fax |
| email | email | alberto.lopes@dominio.pt | Email |
| site | url | https://www.dominio.pt | Site url |
| nib | string | 1234 4321 12345678901 72 | Email |
| iban | string | PT50 1234 4321 12345678901 72 | Email |
| swift | string | CGDIPTPL | Swift |
| header | string |     | Header Text |
| footer | string |     | Footer Text |
| served | string |     | Served |
| show\_references | string<br><br>* * *<br><br>yes, no |     | Show References |
| show\_tax | string<br><br>* * *<br><br>yes, no |     | Show Tax |
| show\_operator | string<br><br>* * *<br><br>yes, no |     | Show Operator |
| bilingual | string<br><br>* * *<br><br>yes, no |     | Bilingual |
| show\_address | string<br><br>* * *<br><br>yes, no |     | Show Address |
| nc\_signature | string<br><br>* * *<br><br>yes, no |     | NC - Signature |
| qrcode | string<br><br>* * *<br><br>no, native, image, image\_hd |     | Qrcode Type |
| layout\_id | string |     | Layout ID |
| colors | immutable |     | Layout Colors |
| image | string | https://www.site.com/img/1.png | Image  <br>Either an url or a base64 encoded string |

### Response

NameTypeExampleDescriptionidintReceipt IDtypestring

* * *

layouta4, receiptTypetitlestringDocumento A4Titlecomercial\_namestringComercial Namephonestring210192930Phonephone\_coststring

* * *

none, phone, mobile, otherPhone Costphone\_cost\_otherstringCustom Phone Costmobilestring918 876 546Cellphonemobile\_coststring

* * *

none, phone, mobile, otherMobile Costmobile\_cost\_otherstringCustom Mobile Costfaxstring210 192 930Faxemailemailalberto.lopes@dominio.ptEmailsiteurlhttps://www.dominio.ptSite urlnibstring1234 4321 12345678901 72EmailibanstringPT50 1234 4321 12345678901 72EmailswiftstringCGDIPTPLSwiftheaderstringHeader TextfooterstringFooter TextservedstringServedshow\_referencesstring

* * *

yes, noShow Referencesshow\_taxstring

* * *

yes, noShow Taxshow\_operatorstring

* * *

yes, noShow Operator Namebilingualstring

* * *

yes, noShow Bilingualshow\_addressstring

* * *

yes, noShow Addressnc\_signaturestring

* * *

yes, noNC - Signatureqrcodestring

* * *

no, native, image, image\_hdQrcode Typelayout\_idstringLayout IDcolorsimmutableLayout ColorsimagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| m   | string | /foto/b906f77\_m.png | Small Image Url |
| xs  | string | /foto/b906f77\_xs.png | Medium Image Url |
| 72b | string | /foto/b906f77\_72b.png | Medium Image Url |
| receipt | string | /foto/b906f77\_receipt.png | Medium Image Url |
| 58  | string | /foto/b906f77\_58.png | Medium Image Url |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/receipts/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'title'             => 'Documento A4', 
        'comercial_name'    => '', 
        'type'              => 'layouta4', 
        'phone'             => '210192930', 
        'phone_cost'        => 'none', 
        'phone_cost_other'  => '', 
        'mobile'            => '918 876 546', 
        'mobile_cost'       => 'none', 
        'mobile_cost_other' => '', 
        'fax'               => '210 192 930', 
        'email'             => 'alberto.lopes@dominio.pt', 
        'site'              => 'https://www.dominio.pt', 
        'nib'               => '1234 4321 12345678901 72', 
        'iban'              => 'PT50 1234 4321 12345678901 72', 
        'swift'             => 'CGDIPTPL', 
        'header'            => '', 
        'footer'            => '', 
        'served'            => '', 
        'show_references'   => 'yes', 
        'show_tax'          => 'yes', 
        'show_operator'     => 'yes', 
        'bilingual'         => 'yes', 
        'show_address'      => 'yes', 
        'nc_signature'      => 'yes', 
        'qrcode'            => 'no', 
        'layout_id'         => '', 
        'colors'            => '', 
        'image'             => 'https://www.site.com/img/1.png', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **title** | string | Documento A4 | Title |
| comercial\_name | string |     | Comercial Name |
| type | string<br><br>* * *<br><br>receipt, layouta4 |     | Type |
| phone | string | 210192930 | Phone |
| phone\_cost | string<br><br>* * *<br><br>none, phone, mobile, other |     | Phone Cost |
| phone\_cost\_other | string |     | Custom Phone Cost |
| mobile | string | 918 876 546 | Cellphone |
| mobile\_cost | string<br><br>* * *<br><br>none, phone, mobile, other |     | Mobile Cost |
| mobile\_cost\_other | string |     | Custom Mobile Cost |
| fax | string | 210 192 930 | Fax |
| email | email | alberto.lopes@dominio.pt | Email |
| site | url | https://www.dominio.pt | Site url |
| nib | string | 1234 4321 12345678901 72 | Email |
| iban | string | PT50 1234 4321 12345678901 72 | Email |
| swift | string | CGDIPTPL | Swift |
| header | string |     | Header Text |
| footer | string |     | Footer Text |
| served | string |     | Served |
| show\_references | string<br><br>* * *<br><br>yes, no |     | Show References |
| show\_tax | string<br><br>* * *<br><br>yes, no |     | Show Tax |
| show\_operator | string<br><br>* * *<br><br>yes, no |     | Show Operator |
| bilingual | string<br><br>* * *<br><br>yes, no |     | Bilingual |
| show\_address | string<br><br>* * *<br><br>yes, no |     | Show Address |
| nc\_signature | string<br><br>* * *<br><br>yes, no |     | NC - Signature |
| qrcode | string<br><br>* * *<br><br>no, native, image, image\_hd |     | Qrcode Type |
| layout\_id | string |     | Layout ID |
| colors | immutable |     | Layout Colors |
| image | string | https://www.site.com/img/1.png | Image  <br>Either an url or a base64 encoded string |

### Response

NameTypeExampleDescriptionidintReceipt IDtypestring

* * *

layouta4, receiptTypetitlestringDocumento A4Titlecomercial\_namestringComercial Namephonestring210192930Phonephone\_coststring

* * *

none, phone, mobile, otherPhone Costphone\_cost\_otherstringCustom Phone Costmobilestring918 876 546Cellphonemobile\_coststring

* * *

none, phone, mobile, otherMobile Costmobile\_cost\_otherstringCustom Mobile Costfaxstring210 192 930Faxemailemailalberto.lopes@dominio.ptEmailsiteurlhttps://www.dominio.ptSite urlnibstring1234 4321 12345678901 72EmailibanstringPT50 1234 4321 12345678901 72EmailswiftstringCGDIPTPLSwiftheaderstringHeader TextfooterstringFooter TextservedstringServedshow\_referencesstring

* * *

yes, noShow Referencesshow\_taxstring

* * *

yes, noShow Taxshow\_operatorstring

* * *

yes, noShow Operator Namebilingualstring

* * *

yes, noShow Bilingualshow\_addressstring

* * *

yes, noShow Addressnc\_signaturestring

* * *

yes, noNC - Signatureqrcodestring

* * *

no, native, image, image\_hdQrcode Typelayout\_idstringLayout IDcolorsimmutableLayout ColorsimagesarrayImages List

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| m   | string | /foto/b906f77\_m.png | Small Image Url |
| xs  | string | /foto/b906f77\_xs.png | Medium Image Url |
| 72b | string | /foto/b906f77\_72b.png | Medium Image Url |
| receipt | string | /foto/b906f77\_receipt.png | Medium Image Url |
| 58  | string | /foto/b906f77\_58.png | Medium Image Url |

---

# Taxauthority - Cegid Vendus API

API (v1.1)
==========

Taxauthority
------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

### No Action Available

There are no actions available for this endpoint.  
Please check child endpoints.

---

# Taxes - Cegid Vendus API

API (v1.1)
==========

Taxes
-----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxes/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxes/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'all' => 'yes', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| all | string<br><br>* * *<br><br>yes |     | Return all taxes |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | string |     |     |
| rate | float |     |     |
| country | string |     |     |
| title | string |     |     |

---

# Stores - Cegid Vendus API

API (v1.1)
==========

Stores
------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/stores/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/stores/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'type' => 'store', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| type | string<br><br>* * *<br><br>all, store, warehouse |     | Type |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Store ID |
| type | string<br><br>* * *<br><br>store, warehouse |     | Type |
| title | string | Loja da Baixa | Title |
| tax\_id | string<br><br>* * *<br><br>`NOR` - Taxa Normal  <br>`INT` - Taxa Intermédia  <br>`RED` - Taxa Reduzida  <br>`ISE` - Isento  <br>`OUT` - Outros |     | Default tax rate |
| tax\_exemption | string<br><br>* * *<br><br>`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  <br>`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  <br>`M03` - M03 - Exigibilidade de caixa (revogado)  <br>`M04` - M04 - Artigo 13.º do CIVA ou similar  <br>`M05` - M05 - Artigo 14.º do CIVA ou similar  <br>`M06` - M06 - Artigo 15.º do CIVA ou similar  <br>`M07` - M07 - Artigo 9.º do CIVA ou similar  <br>`M08` - M08 - IVA - autoliquidação (revogado)  <br>`M09` - M09 - IVA - não confere direito a dedução  <br>`M10` - M10 - IVA - Regime de isenção  <br>`M11` - M11 - Regime particular do tabaco  <br>`M12` - M12 - Regime da margem de lucro - Agências de viagens  <br>`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  <br>`M14` - M14 - Regime da margem de lucro - Objetos de arte  <br>`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  <br>`M16` - M16 - Artigo 14.º do RITI ou similar  <br>`M19` - M19 - Outras isenções  <br>`M20` - M20 - IVA - regime forfetário  <br>`M21` - M21 - IVA – não confere direito à dedução  <br>`M25` - M25 - Mercadorias à consignação  <br>`M26` - M26 - Cabaz alimentar (expirado)  <br>`M30` - M30 - IVA - autoliquidação (2.1.i)  <br>`M31` - M31 - IVA - autoliquidação (2.1.j)  <br>`M32` - M32 - IVA - autoliquidação (2.1.l)  <br>`M33` - M33 - IVA - autoliquidação (2.1.m)  <br>`M34` - M34 - IVA - autoliquidação (2.1.n)  <br>`M40` - M40 - IVA - autoliquidação (6.6.a)  <br>`M41` - M41 - IVA - autoliquidação (8.3.R)  <br>`M42` - M42 - IVA - autoliquidação (21.2007)  <br>`M43` - M43 - IVA - autoliquidação (362.99)  <br>`M99` - M99 - Não sujeito; não tributado ou similar |     | Tax exemption reason |
| tax\_exemption\_law | string | Some law | Tax exemption applicable law |
| address | string | Rua Nova de Mil Fontes, 35 | Address |
| postalcode | string | 1100-234 | Postal Code |
| city | string | Setúbal | City/Locality |
| country | string | PT  | Country |
| email | string | loja.baixa@empresa.pt | Email |
| phone | string | 210192029 | Phone |
| status | string<br><br>* * *<br><br>on, off |     | Status |
| cae | string | 76290 | CAE |
| share\_stock\_store\_id | int | Uses Own Stock (0) or Other Store Stock (Store ID) | Stock Configuration |
| sync\_pos | string | YES\|NO - if Store\`s POS are linked | POS Sincronization |
| sync\_pos\_ping | string | YES\|NO - if Store\`s POS are linked with ping socket method | POS Sincronization behavior |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/stores/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/stores/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Store ID |
| type | string<br><br>* * *<br><br>store, warehouse |     | Type |
| title | string | Loja da Baixa | Title |
| tax\_id | string<br><br>* * *<br><br>`NOR` - Taxa Normal  <br>`INT` - Taxa Intermédia  <br>`RED` - Taxa Reduzida  <br>`ISE` - Isento  <br>`OUT` - Outros |     | Default tax rate |
| tax\_exemption | string<br><br>* * *<br><br>`M01` - M01 - Artigo 16.º, n.º 6 do CIVA ou similar  <br>`M02` - M02 - Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de Junho  <br>`M03` - M03 - Exigibilidade de caixa (revogado)  <br>`M04` - M04 - Artigo 13.º do CIVA ou similar  <br>`M05` - M05 - Artigo 14.º do CIVA ou similar  <br>`M06` - M06 - Artigo 15.º do CIVA ou similar  <br>`M07` - M07 - Artigo 9.º do CIVA ou similar  <br>`M08` - M08 - IVA - autoliquidação (revogado)  <br>`M09` - M09 - IVA - não confere direito a dedução  <br>`M10` - M10 - IVA - Regime de isenção  <br>`M11` - M11 - Regime particular do tabaco  <br>`M12` - M12 - Regime da margem de lucro - Agências de viagens  <br>`M13` - M13 - Regime da margem de lucro - Bens em segunda mão  <br>`M14` - M14 - Regime da margem de lucro - Objetos de arte  <br>`M15` - M15 - Regime da margem de lucro - Objetos de coleção e antiguidades  <br>`M16` - M16 - Artigo 14.º do RITI ou similar  <br>`M19` - M19 - Outras isenções  <br>`M20` - M20 - IVA - regime forfetário  <br>`M21` - M21 - IVA – não confere direito à dedução  <br>`M25` - M25 - Mercadorias à consignação  <br>`M26` - M26 - Cabaz alimentar (expirado)  <br>`M30` - M30 - IVA - autoliquidação (2.1.i)  <br>`M31` - M31 - IVA - autoliquidação (2.1.j)  <br>`M32` - M32 - IVA - autoliquidação (2.1.l)  <br>`M33` - M33 - IVA - autoliquidação (2.1.m)  <br>`M34` - M34 - IVA - autoliquidação (2.1.n)  <br>`M40` - M40 - IVA - autoliquidação (6.6.a)  <br>`M41` - M41 - IVA - autoliquidação (8.3.R)  <br>`M42` - M42 - IVA - autoliquidação (21.2007)  <br>`M43` - M43 - IVA - autoliquidação (362.99)  <br>`M99` - M99 - Não sujeito; não tributado ou similar |     | Tax exemption reason |
| tax\_exemption\_law | string | Some law | Tax exemption applicable law |
| address | string | Rua Nova de Mil Fontes, 35 | Address |
| postalcode | string | 1100-234 | Postal Code |
| city | string | Setúbal | City/Locality |
| country | string | PT  | Country |
| email | string | loja.baixa@empresa.pt | Email |
| phone | string | 210192029 | Phone |
| status | string<br><br>* * *<br><br>on, off |     | Status |
| cae | string | 76290 | CAE |
| share\_stock\_store\_id | int | Uses Own Stock (0) or Other Store Stock (Store ID) | Stock Configuration |
| sync\_pos | string | YES\|NO - if Store\`s POS are linked | POS Sincronization |
| sync\_pos\_ping | string | YES\|NO - if Store\`s POS are linked with ping socket method | POS Sincronization behavior |

---

# Selfconsumption - Cegid Vendus API

API (v1.1)
==========

Selfconsumption
---------------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'search_employee' => 12345, 
        'refresh'         => 1, 
        'date_start'      => '12345', 
        'date_end'        => '12345', 
        'store_id'        => 12345, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| search\_employee | int | 12345 | Employee ID |
| refresh | int | 1   | Refresh |
| date\_start | date | 12345 | Date start |
| date\_end | date | 12345 | Date end |
| store\_id | int | 12345 | Id  |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| records | array |     |     |
| totalSpending | float |     |     |
| pagesCount | int |     |     |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| selfconsumption | array |     |     |
| products | array |     |     |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'id'           => 12345, 
        'employee'     => 12345, 
        'date'         => '2019-01-01', 
        'hour'         => '12:00:00', 
        'store_id'     => 12345, 
        'register_id'  => 12345, 
        'observations' => 'Lorem ipsum', 
        'products'     => array(
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| employee | int | 12345 | Employee ID |
| date | date | 2019-01-01 | Date |
| hour | string | 12:00:00 | Hour |
| store\_id | int | 12345 | Register ID |
| register\_id | int | 12345 | Store ID |
| **products** | array | \[\] | Products |
| observations | string | Lorem ipsum | Observations |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| result | string |     |     |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'employee'     => 12345, 
        'date'         => '2019-01-01', 
        'hour'         => '12:00:00', 
        'store_id'     => 12345, 
        'register_id'  => 12345, 
        'observations' => 'Lorem ipsum', 
        'products'     => array(
        ), 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| employee | int | 12345 | Employee ID |
| date | date | 2019-01-01 | Date |
| hour | string | 12:00:00 | Hour |
| store\_id | int | 12345 | Register ID |
| register\_id | int | 12345 | Store ID |
| **products** | array | \[\] | Products |
| observations | string | Lorem ipsum | Observations |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| result | string |     |     |
| id  | int |     |     |

Delete DELETE
-------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/selfconsumption/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'DELETE';
    $params  = array(
        'id' => 12345, 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| status | string |     |     |

---

# Tables - Cegid Vendus API

API (v1.1)
==========

Tables
------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/tables/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/tables/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'parent' => 1234, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| parent | int | 1234 | Parent |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Room ID |
| title | string | Mesa C | Title |
| description | string | Mesa Central | Description |
| occupation | int | 5   | Occupation |
| parent | int | 1234 | Parent |
| order | int | 1   | Display order in a list |
| people\_request | string | auto\|yes\|no | If table should request the number of people for open it |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/tables/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/tables/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int |     | Room ID |
| title | string | Mesa C | Title |
| description | string | Mesa Central | Description |
| occupation | int | 5   | Occupation |
| parent | int | 1234 | Parent |
| order | int | 1   | Display order in a list |
| people\_request | string | auto\|yes\|no | If table should request the number of people for open it |

---

# Suppliers - Cegid Vendus API

API (v1.1)
==========

Suppliers
---------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'q'         => 'Alberto', 
        'fiscal_id' => '123456789', 
        'name'      => 'Alberto Caeiro', 
        'email'     => 'alberto.caeiro@portugal.pt', 
        'status'    => 'active', 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| q   | string | Alberto | Search string |
| fiscal\_id | fiscal\_id | 123456789 | Fiscal ID |
| name | string | Alberto Caeiro | Name |
| email | email | alberto.caeiro@portugal.pt | Email |
| status | string<br><br>* * *<br><br>`active` - Ativo  <br>`inactive` - Inativo |     | Status |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| fiscal\_id | string | 123456789 | Fiscal ID |
| name | string | Alberto Caeiro | Name |
| address | string | Av. Sousa Magalhães, 126 | Address |
| city | string | Lisboa | City |
| postalcode | string | 4100-039 | Postal code |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Cellphone |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

Detail GET
----------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| fiscal\_id | string | 123456789 | Fiscal ID |
| name | string | Alberto Caeiro | Name |
| address | string | Av. Sousa Magalhães, 126 | Address |
| city | string | Lisboa | City |
| postalcode | string | 4100-039 | Postal code |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Cellphone |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

Create POST
-----------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'POST';
    $params  = array(
        'fiscal_id'  => '223098091', 
        'name'       => 'Alberto Lopes', 
        'address'    => 'Av. Sousa Magalhães, 126', 
        'postalcode' => '4100-039', 
        'city'       => 'Lisboa', 
        'phone'      => '210 192 930', 
        'mobile'     => '918 876 546', 
        'email'      => 'alberto.lopes@dominio.pt', 
        'website'    => 'https://www.dominio.pt', 
        'country'    => 'PT', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of supplier  <br>If supplier is portuguese, it must be a valid fiscal id. If foreigner, first two characters must be country initials |
| name | string | Alberto Lopes | Supplier Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| fiscal\_id | string | 123456789 | Fiscal ID |
| name | string | Alberto Caeiro | Name |
| address | string | Av. Sousa Magalhães, 126 | Address |
| city | string | Lisboa | City |
| postalcode | string | 4100-039 | Postal code |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Cellphone |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

Update PATCH
------------

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/suppliers/12345/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'PATCH';
    $params  = array(
        'fiscal_id'  => '223098091', 
        'name'       => 'Alberto Lopes', 
        'address'    => 'Av. Sousa Magalhães, 126', 
        'postalcode' => '4100-039', 
        'city'       => 'Lisboa', 
        'phone'      => '210 192 930', 
        'mobile'     => '918 876 546', 
        'email'      => 'alberto.lopes@dominio.pt', 
        'website'    => 'https://www.dominio.pt', 
        'country'    => 'PT', 
    
    );
    $content = json_encode($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Content-type: application/json",
            "Content-Length: " . strlen($content),
        )
    );
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| fiscal\_id | fiscal\_id | 223098091 | Fiscal ID of supplier  <br>If supplier is portuguese, it must be a valid fiscal id. If foreigner, first two characters must be country initials |
| name | string | Alberto Lopes | Supplier Name |
| address | string | Av. Sousa Magalhães, 126 | Postal Address |
| postalcode | string | 4100-039 | Postal Code |
| city | string | Lisboa | City |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Mobile |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | int | 12345 | ID  |
| fiscal\_id | string | 123456789 | Fiscal ID |
| name | string | Alberto Caeiro | Name |
| address | string | Av. Sousa Magalhães, 126 | Address |
| city | string | Lisboa | City |
| postalcode | string | 4100-039 | Postal code |
| phone | string | 210 192 930 | Phone |
| mobile | string | 918 876 546 | Cellphone |
| email | email | alberto.lopes@dominio.pt | Email |
| website | url | https://www.dominio.pt | Site url |
| country | country | PT  | Country code using ISO 3166-1 alpha-2 |

---

# Exemptions - Cegid Vendus API

API (v1.1)
==========

Exemptions
----------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxes/exemptions/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxes/exemptions/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| id  | string | M40 | ID  |
| text | string | IVA - autoliquidação | Description |
| law | array | Artigo 6.º do CIVA | Applicable law |

---

# Saft - Cegid Vendus API

API (v1.1)
==========

Saft
----

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxauthority/saft/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'year'  => 2025, 
        'month' => 3, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/taxauthority/saft/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $method  = 'GET';
    $params  = array(
        'year'  => 2025, 
        'month' => 3, 
    
    );
    $url .= '?' . http_build_query($params);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    $result = curl_exec($curl);
    ?>

### Request

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| **year** | int | 2025 | Year |
| **month** | int | 3   | Month |

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| year | int | 2025 | Year |
| month | int | 3   | Month |
| xml | string |     | Base64 encoded xml |

---

# Balance - Cegid Vendus API

API (v1.1)
==========

Balance
-------

[Overview](https://www.vendus.co.ao/ws/v1.1/overview.doc)
 [Authentication](https://www.vendus.co.ao/ws/v1.1/authentication.doc)
 [Versions](https://www.vendus.co.ao/ws/v1.1/versions.doc)
 [Requests](https://www.vendus.co.ao/ws/v1.1/requests.doc)
 [Responses](https://www.vendus.co.ao/ws/v1.1/responses.doc)

**Reference**

[Account](https://www.vendus.co.ao/ws/v1.1/account.doc)
      [Users](https://www.vendus.co.ao/ws/v1.1/account/users.doc)
 [Clients](https://www.vendus.co.ao/ws/v1.1/clients.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/clients/balance.doc)
      [Resume](https://www.vendus.co.ao/ws/v1.1/clients/resume.doc)
 [Covenants](https://www.vendus.co.ao/ws/v1.1/covenants.doc)
 [Delivery](https://www.vendus.co.ao/ws/v1.1/delivery.doc)
 [Discountcards](https://www.vendus.co.ao/ws/v1.1/discountcards.doc)
 [Documents](https://www.vendus.co.ao/ws/v1.1/documents.doc)
      [PaymentMethods](https://www.vendus.co.ao/ws/v1.1/documents/paymentmethods.doc)
      [Types](https://www.vendus.co.ao/ws/v1.1/documents/types.doc)
 [Helpdesk](https://www.vendus.co.ao/ws/v1.1/helpdesk.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/helpdesk/categories.doc)
 [Integrations](https://www.vendus.co.ao/ws/v1.1/integrations.doc)
 [Kitchens](https://www.vendus.co.ao/ws/v1.1/kitchens.doc)
      [Printer](https://www.vendus.co.ao/ws/v1.1/kitchens/printer.doc)
 [Products](https://www.vendus.co.ao/ws/v1.1/products.doc)
      [Brands](https://www.vendus.co.ao/ws/v1.1/products/brands.doc)
      [Categories](https://www.vendus.co.ao/ws/v1.1/products/categories.doc)
      [Lots](https://www.vendus.co.ao/ws/v1.1/products/lots.doc)
      [Pricegroups](https://www.vendus.co.ao/ws/v1.1/products/pricegroups.doc)
      [Stocks](https://www.vendus.co.ao/ws/v1.1/products/stocks.doc)
      [Units](https://www.vendus.co.ao/ws/v1.1/products/units.doc)
      [Variants](https://www.vendus.co.ao/ws/v1.1/products/variants.doc)
 [Receipts](https://www.vendus.co.ao/ws/v1.1/receipts.doc)
 [Registers](https://www.vendus.co.ao/ws/v1.1/registers.doc)
      [Balance](https://www.vendus.co.ao/ws/v1.1/registers/balance.doc)
      [Movements](https://www.vendus.co.ao/ws/v1.1/registers/movements.doc)
 [Rooms](https://www.vendus.co.ao/ws/v1.1/rooms.doc)
 [Selfconsumption](https://www.vendus.co.ao/ws/v1.1/selfconsumption.doc)
 [Stores](https://www.vendus.co.ao/ws/v1.1/stores.doc)
 [Suppliers](https://www.vendus.co.ao/ws/v1.1/suppliers.doc)
 [Tables](https://www.vendus.co.ao/ws/v1.1/tables.doc)
 [Taxauthority](https://www.vendus.co.ao/ws/v1.1/taxauthority.doc)
      [Saft](https://www.vendus.co.ao/ws/v1.1/taxauthority/saft.doc)
 [Taxes](https://www.vendus.co.ao/ws/v1.1/taxes.doc)
      [Exemptions](https://www.vendus.co.ao/ws/v1.1/taxes/exemptions.doc)

List GET
--------

### Example with mandatory parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/balance/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Example with all allowed parameters

    <?php
    $url     = 'https://www.vendus.co.ao/ws/v1.1/registers/balance/';
    $apiKey  = 'c433ff57a5ba6cdf301a48c97d9432594e35e73ce545945639bc4fb5798f1e8a';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, $apiKey);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    ?>

### Request

### Response

| Name | Type | Example | Description |
| --- | --- | --- | --- |
| amount | currency | Current balance on register | Amount |

---

