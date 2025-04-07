# Table of Contents

- [WeatherFlow Tempest API & Developer Platform](#weatherflow-tempest-api-developer-platform)
- [WeatherFlow Tempest API & Developer Platform](#weatherflow-tempest-api-developer-platform)
- [Tempest API Remote Data Access Policy](#tempest-api-remote-data-access-policy)
- [WeatherFlow Tempest OAuth 2.0 Support](#weatherflow-tempest-oauth-2-0-support)
- [WeatherFlow Tempest UDP Reference](#weatherflow-tempest-udp-reference)
- [WeatherFlow Tempest API Websocket Reference](#weatherflow-tempest-api-websocket-reference)
- [Derived Metric Formulas](#derived-metric-formulas)
- [Tempest Release Notes](#tempest-release-notes)
- [Code Challenge Tool](#code-challenge-tool)
- [WeatherFlow Tempest UDP Reference - v171](#weatherflow-tempest-udp-reference-v171)
- [Tempest Google Home Action](#tempest-google-home-action)
- [Tempest for Alexa](#tempest-for-alexa)
- [Tempest Website](#tempest-website)
- [WeatherFlow Smart Weather UDP Reference - v119](#weatherflow-smart-weather-udp-reference-v119)
- [Tempest for iOS](#tempest-for-ios)
- [Tempest Station Firmware](#tempest-station-firmware)
- [Tempest for Android](#tempest-for-android)
- [WeatherFlow Smart Weather UDP Reference - v114](#weatherflow-smart-weather-udp-reference-v114)
- [WeatherFlow Smart Weather UDP Reference - v105](#weatherflow-smart-weather-udp-reference-v105)

---

# WeatherFlow Tempest API & Developer Platform

Getting Started
---------------

### Step 1. See what's possible.

Most third-party Tempest apps and integrations are designed for the personal use by a single Tempest System owner. To learn more, please read our [Remote Data Access Policy](remote-developer-policy.html)
. To see what other developers have done, take a look at some of the [third-party applications & integrations](https://community.weatherflow.com/t/tempest-weather-system-third-party-applications/873)
 out there. If you have an idea for an application or integration that goes beyond the personal use case, such as a general purpose app that accesses data from many Tempest locations, [please contact us](https://weatherflow.com/partner-inquiry/)
.

### Step 2. Authenticate (aka "Get an access token")

To start using the REST or WS API, all you need is an access token. Your app or integration must ensure that the user viewing the station data is the owner of that station by authenticating the user’s account. There are two options for authentication: Oauth or the Personal Access Token.

OAuth Access Token. OAuth is an open standard for authentication that provides a seamless integration between your app and the user’s Tempest account. OAuth is the way our official integrations (Amazon Echo, Google Home, IFTTT, etc.) work, and we strongly encourage you to use OAuth in any app with a web-based interface, including mobile apps. For more information on Oauth, please see the [Tempest OAuth 2.0 Support](oauth.html)
 section.

Personal Access Token. If you have a simple app or integration that does not have a web-based interface (e.g., a downloadable script or a smart home configuration that does not have a graphical user interface), you should use the “personal access token” method. Your users will need to sign in to the Tempest Web App at tempestwx.com, then go to Settings -> Data Authorizations -> Create Token, then copy & paste that token into your app.

Note: While OAuth is the preferred authentication method for production applications, the Personal Access Token is the simplest way to get started with the API - just sign in to your own account and generate one. You can add OAuth once your app or integration is ready for external testing.

### Step 3. Dive in!

Once you have an access token (either a personal or Oauth), you’re ready to start playing with the API. See our full [REST](swagger/)
 and [WebSocket](ws.html)
 documentation for complete details, or get started with a few quick examples below.

#### REST Examples ([REST Reference](swagger/)
)

GET Station Meta Data

Retrieve a list of your stations along with all connected devices.

https://swd.weatherflow.com/swd/rest/stations?token=\[your\_access\_token\]

GET Latest Station Observation

Get the latest most recent observation for your station.

https://swd.weatherflow.com/swd/rest/observations/station/\[your\_station\_id\]?token=\[your\_access\_token\]

GET Latest Device Observation

Get the latest observation from one of your devices.

https://swd.weatherflow.com/swd/rest/observations/?device\_id=\[your\_device\_id\]&token=\[your\_access\_token\]

#### WebSocket Examples ([WebSocket Reference](ws.html)
)

Open a websocket connection

wss://ws.weatherflow.com/swd/data?token=\[your\_access\_token\]

Listen for observations

Send a JSON message over the websocket connection to start listening for observations from the device. After sending this message your connected websocket client should receive a new observation JSON message every minute.

{
	"type":"listen\_start",
	"device\_id": \[your\_device\_id\],
	"id":"random-id-12345"
}

### Step 4. Join the Community.

If you haven’t already, head over to the [Developers area of our Community Forum](https://community.weatherflow.com/c/developers/5)
, where friendly users swap ideas, information and help (WeatherFlow staff is known to lurk there regularly)

### Step 5. Share your Creation.

Tell the World how great your awesome new application or integration is! An announcement to [our Community Forum](https://community.weatherflow.com/)
 is a great place to start.

Can I access data from the hardware locally? To ensure access to the best data, all third-party applications and integrations should use the remote interfaces (REST & Websockets) as their primary source for data, even if they are running on the same network as the local Tempest device. There is also a [local UDP interface](udp.html)
 available for those applications that require completely off-grid applications, but this should only be used as a backup to the remote interfaces.

---

# WeatherFlow Tempest API & Developer Platform

Overview
--------

The [Tempest Weather System](http://tempe.st/tempest)
 combines state-of-the-art sensors and a sleek, wireless design with WeatherFlow’s proprietary modeling capabilities to seamlessly present validated weather data and improved forecasts. The Tempest API & Developer Platform empowers a growing community of developers to build useful applications and integrations by providing access to enhanced data and forecasts from the Tempest System.

While Tempest-supported apps and integrations offer ample functionality and a wealth of uses, our robust set of self serve developer tools enable even more complex integrations.

To learn more about how to work with the API, visit our [Getting Started guide](api/)
.

![](images/products-tempest-3-2020-small.png)

For uses that go beyond our self-serve developer tools, or to discuss an app or integration that would require access to data from the broader Tempest network, please [contact us](https://weatherflow.com/partner-inquiry/)
 with a description of your idea - we’d love to hear about it.

---

# Tempest API Remote Data Access Policy

This policy, which is subject to change, applies to remote data access. This policy does not apply to local data access.

Summary:
--------

All Nearcast data (quality-controlled observations, augmentation with additional network data, metadata & proprietary forecasts) is available to station owners from stations that they own (public or private) via any application for personal use only. No Nearcast data (observations, forecast or metadata) is available from private stations via any application. Metadata from public stations is available with a [TempestONE](https://weatherflow.com/professional-services/one/)
 subscription. Observation and forecast data from public stations is available via a [TempestONE](https://weatherflow.com/professional-services/one/)
 subscription.

Definitions:
------------

|     |     |
| --- | --- |
| Device | a physical device (Hub, AIR, SKY, Tempest) |
| Station | a collection of one or more devices |
| Application | software used to access data |
| User | individual requesting data |
| Owner | user who owns a station |
| Public station | owner has chosen to share publicly |
| Private station | owner has chosen to NOT share publicly |
| Observation data | observed weather parameters from a station (e.g. T, RH, UV, etc.) |
| Forecast data | predicted weather parameters from a station (e.g. T, RH, UV, etc.) |
| Metadata | data about a station (e.g. name, location, elevation, etc.) |
| Personal Use | use of Nearcast data & forecasts by individual station owners for non-commercial purposes |
| Commercial Use | use of Nearcast data & forecasts by individuals, groups, organizations, businesses, academics, etc. for any non-personal purposes |

Nearcast Data & Forecast Access
-------------------------------

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| Application Level | Rate/Volume Limits | User Level | Public Station |     | Private Station |     |
| Metadata | Obs/Forecast | Metadata | Obs/Forecast |
| Personal | lower | station owner | all | all | all | all |
| any user | †   | none | none | none |
| Commercial | higher | station owner | ‡   | ‡   | ‡   | ‡   |
| any user | †   | ‡   | none | none |

† public metadata only

‡ access to Nearcast observation and forecast data for commerical use requires a [WeatherFlowONE](https://weatherflow.com/professional-services/one/)
 subscription.

### Personal Use

Use of Nearcast data & forecasts by individual station owners for non-commercial purposes is available without special agreement and includes:

*   access to metadata, observation & forecast data by owner of station
*   access to public metadata from all public stations by any user
*   rate/volume limits (enough for personal use)
*   limited to personal use
*   any rebroadcasting of data must credit "WeatherFlow" or "Tempest"
*   any rebroadcasting must provide a link back to a WeatherFlow-Tempest URL or social media channel (as appropriate and if technically possible)
*   rebroadcast may be limited
*   see full [Terms & Conditions for Personal Use](https://got.wf/terms)
    

### Commercial Use

Use of Nearcast data & forecasts by individuals, groups, organizations, businesses, academics, etc. for any non-personal purposes requires a [WeatherFlowONE](https://weatherflow.com/professional-services/one/)
 subscription or specific commercial agreement and includes:

*   access to metadata, observation & forecast data by owner of station
*   access to public metadata from all public stations by any user
*   may include access to Nearcast data & forecasts with commercial agreement
*   may include higher rate/volume limits, if necessary
*   authorization to use Nearcast data in a commercial manner under terms specified in commercial agreement
*   rebroadcast only according to terms specified in commcercial agreement
*   see full [Terms & Conditions for Commercial Use](https://got.wf/commercialterms)

---

# WeatherFlow Tempest OAuth 2.0 Support

Overview
--------

The Tempest API supports the Authorization Code grant type. For clients that are unable to maintain the confidentiality of the client secret, the API also supports the Authorization Code with PKCE grant type.

Creating a Client Application
-----------------------------

Before you can begin using OAuth with the Tempest API, you must register your application with WeatherFlow. To do so, sign in to your Tempest account on the [Tempest Website](https://tempestwx.com)
, and then go to the [Developers](https://tempestwx.com/developers/)
 page.

The information below is required to register your application.

Application Name

The name of your application. This name will be displayed on the authorization page and should be a name that users will recognize and trust.

Application Description

A brief description of your application.

Authorization Callback URL

The endpoint that will receive authorization codes. Each application may have muiltiple callback URLs. For mobile applications a custom URL scheme can be registered.

To register an appliction, you must have a Tempest account.

Authorization Code Grant Type
-----------------------------

Step 1:

Request authorization from the user using the authorization endpoint below.

https://tempestwx.com/authorize.html

With the request include the following query string parameters:

client\_id

Provided when your application was created.

response\_type

Set this value to code to indicate that you would like an authorization code returned.

redirect\_uri

The url you want the user to be redirected to after the authorization is completed.

The redirect URL provided in the query string must be registered with the Tempest API. If needed, you may register more than one redirect URL.

Step 2:

Once redirected to the authorization page, the user will approve or deny the authorization request. If they approve the request they will be redirected back to the redirect URL you provided along with an authorization code.

Exchange the authorization code for an access token by making a POST request to the API endpoint below.

https://swd.weatherflow.com/id/oauth2/token

In the URL Encoded Form body of the POST request include:

grant\_type

Set this value to authorization\_code

code

The authorization code received in the query string from the authorization server.

client\_id

Provided when your application was created.

client\_secret

Provided when your application was created.

If you are not using a server application and cannot properly secure the client secret use the Authorization Code Grant with PKCE method instead.

Authorization Code with PKCE Grant Type
---------------------------------------

The Authorization Code with PKCE (Proof Key for Code Exchange) grant type is for applications that are not able to protect their client secret.

Step 1:

Generate a code verifier. This is a random string using the characters A-Z, a-z, 0-9 and the characters \-.\_~ that is between 43 to 128 characters long.

Step 2:

Create a code challenge using the code verifier generated in Step 1. The code challenge is a BASE64-URL-encoded string of the SHA256 hash of the code verifier.

Our [Code Challenge Tool](https://weatherflow.github.io/Tempest/api/code-challenge.html)
 allows you to generate a sample code verifier and code challenge. You may also enter your own code verifier and check to make sure you are generating the code challenge correctly.

Step 3:

Request authorization from the user using the authorization endpoint below.

https://smartweather.weatherflow.com/authorize.html

With the request include the following query string parameters:

client\_id

Provided when your application was created.

response\_type

Set this value to code to indicate that you would like an authorization code returned.

redirect\_uri

The url you want the user to be redirected to after the authorization is completed.

code\_challenge

The code challenge that was created in Step 2.

code\_challenge\_method

Use S256 to indicate that the code\_challenge parameter is a SHA256 hash of the code verifier.

The redirect URL provided in the query string must be registered with the Tempest API. If needed, you may register more than one redirect URL.

Step 4:

Once redirected to the authorization page, the user will approve or deny the authorization request. If they approve the request they will be redirected back to the redirect URL you provided along with an authorization code.

Exchange the authorization code for an access token by making a POST request to the API endpoint below.

https://swd.weatherflow.com/id/oauth2/token

In the URL Encoded Form body of the POST request include:

client\_id

Provided when your application was created.

grant\_type

Set this value to authorization\_code

code

The authorization code received in the query string from the authorization server.

code\_verifier

The random string generated in Step 1.

---

# WeatherFlow Tempest UDP Reference

UDP Versions v17 v30 v35 v40 v47 v70 v80 v82 v85 v87 v91 v94 v96 v98 v103 v105 v112 v114 v119 v143 v170 v171

[Release Version - v171](https://weatherflow.github.io/Tempest/api/udp/v171)

---

# WeatherFlow Tempest API Websocket Reference

Endpoints
---------

wss://ws.weatherflow.com/swd/data?token=\[your\_access\_token\]

  
For more information about how to obtain an access token, see our [getting started guide](../)
.

Request Messages
----------------

| Request Message | Response Message Types | Description |
| --- | --- | --- |
| {<br>      "type":"listen_start",<br>      "device_id":1110,<br>      "id":"2098388936"<br>    } | ack  <br>obs\_air  <br>obs\_sky  <br>obs\_st  <br>evt\_strike  <br>evt\_precip | Start listening for all new observations and events for a device\_id. Each new observation sent by the Device will be pushed to the client as soon as possible. All Device events will be immediatly pushed. |
| {<br>      "type":"listen_stop",<br>      "device_id":1110,<br>      "id":"2098388936"<br>    } | ack | Stop listening for all messages for a Device. |
| {<br>      "type":"listen_rapid_start",<br>      "device_id":1110,<br>      "id":"2098388542"<br>    } | ack  <br>rapid\_wind | Start listening for rapid 3 second wind data for a Sky Device. |
| {<br>      "type":"listen_rapid_stop",<br>      "device_id":1110,<br>      "id":"2098388587"<br>    } | ack | Stop listening for rapid data messages for a Device. |

Response Messages
-----------------

### Acknowledgement \[type = ack\]

    {
      "type":"ack",
      "id":"2098388936"
    }

  
  

### Rain Start Event \[type = evt\_precip\]

    {
      "type":"evt_precip",
      "device_id":1110
    }

  
  

### Lightning Strike Event \[type = evt\_strike\]

    {
      "type":"evt_strike",
      "device_id":1110,
      "evt":[1493322445,27,3848]
    }

Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Distance | km  |
| 2   | Energy |     |

  
  

### Rapid Wind \[type = rapid\_wind\] (3 second interval)

    {
      "type":"rapid_wind",
      "device_id":1110,
      "ob":[1493322445,2.3,128]
    }

Ob Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Speed | m/s |
| 2   | Wind Direction | Degrees |

  
  

### Observation (Air) \[type = obs\_air\]

    {
      "type":"obs_air",
      "device_id":1110,
      "obs":[[1493164835,835.0,10.0,45,0,0,3.46,1]]
    }

Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Station Pressure | MB  |
| 2   | Air Temperature | C   |
| 3   | Relative Humidity | %   |
| 4   | Lightning Strike Count |     |
| 5   | Lightning Strike Avg Distance | km  |
| 6   | Battery | Volts |
| 7   | Report Interval | Minutes |

  
  

### Observation (Sky) \[type = obs\_sky\]

    {
      "type":"obs_sky",
      "device_id":1110,
      "obs":[[1493321340,9000,10,0.0,2.6,4.6,7.4,187,3.12,1,130,1.034,0,3,0.0,1.011,1]]
    }

Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Illuminance | Lux |
| 2   | UV  | Index |
| 3   | Rain Accumulated | mm  |
| 4   | Wind Lull (minimum 3 second sample) | m/s |
| 5   | Wind Avg (average over report interval) | m/s |
| 6   | Wind Gust (maximum 3 second sample) | m/s |
| 7   | Wind Direction | Degrees |
| 8   | Battery | Volts |
| 9   | Report Interval | Minutes |
| 10  | Solar Radiation | W/m^2 |
| 11  | Local Daily Rain Accumulation | mm  |
| 12  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 13  | Wind Sample Interval | seconds |
| 14  | Rain Accumulated Final (Rain Check) | mm  |
| 15  | Local Daily Rain Accumulation Final (Rain Check) | mm  |
| 16  | Precipitation Analysis Type | 0 = none  <br>1 = Rain Check with user display on  <br>2 = Rain Check with user display off |

  
  

### Observation (Tempest) \[type = obs\_st\]

    {
      "type":"obs_st",
      "device_id":62009,
      "obs": [[1603481377,0,0.09,0.54,33,6,1014.8,28.8,71,16639,1.83,139,0,0,0,0,2.42,1,0.07615,null,null,0]]
    }

Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Lull (minimum 3 second sample) | m/s |
| 2   | Wind Avg (average over report interval) | m/s |
| 3   | Wind Gust (maximum 3 second sample) | m/s |
| 4   | Wind Direction | Degrees |
| 5   | Wind Sample Interval | seconds |
| 6   | Station Pressure | MB  |
| 7   | Air Temperature | C   |
| 8   | Relative Humidity | %   |
| 9   | Illuminance | Lux |
| 10  | UV  | Index |
| 11  | Solar Radiation | W/m^2 |
| 12  | Rain Accumulated | mm  |
| 13  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 14  | Lightning Strike Avg Distance | km  |
| 15  | Lightning Strike Count |     |
| 16  | Battery | Volts |
| 17  | Report Interval | Minutes |
| 18  | Local Daily Rain Accumulation | mm  |
| 19  | Rain Accumulated Final (Rain Check) | mm  |
| 20  | Local Daily Rain Accumulation Final (Rain Check) | mm  |
| 21  | Precipitation Analysis Type | 0 = none  <br>1 = Rain Check with user display on  <br>2 = Rain Check with user display off |

Other Useful Information
------------------------

*   A client should only open one websocket connection.
*   A client will be disconnected after 10 minutes of idle time.
*   All messages are JSON strings.

---

# Derived Metric Formulas

Air Density
===========

$$\\frac{P\_{stn}\\times{}100}{R\_{specific}T}$$

\\(P\_{stn}\\) = station pressure in millibars (mb)

\\(T\\) = temperature in Kelvin

\\(R\_{specific}\\) = specific gas constant for dry air (287.058 J/(kg·K))

Delta T
=======

Delta T, \\(\\Delta T\\), is used in agriculture to indicate acceptable conditions for spraying pesticides and fertilizers. It is simply the difference between the air temperature (aka "dry bulb temperature") and the wet bulb temperature:

$$\\Delta T = T - T\_{wb}$$

Dew Point Temperature
=====================

Source: [RSMAS](http://andrew.rsmas.miami.edu/bmcnoldy/Humidity.html)

$$T\_{d} = \\frac{243.04 \\bigg\[\\ln\\big(\\frac{RH}{100}\\big) + \\frac{17.625 \\times{} T}{243.04 + T}\\bigg\]}{17.625 - \\ln\\big(\\frac{RH}{100}\\big) - \\frac{17.625 \\times{} T}{243.04 + T}}$$

\\(T\_{d}\\) = dew point in degrees Celsius (°C)

\\(T\\) = temperature in degrees Celsius (°C)

\\(RH\\) = relative humidity (%)

Feels Like Temperature
======================

The Feels Like temperature is equal to the [Heat Index](#heat-index)
 if the temperature is at or above 80°F and the relative humidity is at or above 40%. Alternatively, the Feels Like temperature is equal to [Wind Chill](#wind-chill)
 if the temperature is at or below 50°F and wind speeds are above 3mph. If neither condition applies, the Feels Like temperature is equal to the air temperature.

Heat Index Temperature
======================

Source: [Weather.gov](https://www.weather.gov/media/epz/wxcalc/heatIndex.pdf)

Heat Index is calculated for temperatures at or above 80°F and a relative humidity at or above 40%.

$$T\_{hi} = -42.379 + (2.04901523\\times{}T) \\\\+ (10.1433127\\times{}RH) - (0.22475541\\times{}T\\times{}RH) \\\\-(6.83783\\times{}10^{-3}\\times{}T^2) -(5.481717\\times{}10^{-2}\\times{}RH^2) \\\\+(1.22874\\times{}10^{-3}\\times{}T^2\\times{}RH)+(8.5282\\times{}10^{-4}\\times{}T\\times{}RH^2) \\\\-(1.99\\times{}10^{-6}\\times{}T^2\\times{}RH^2)$$

\\(T\\) = temperature in degrees Fahrenheit (°F)

\\(RH\\) = relative humidity (%)

Pressure Trend
==============

The Pressure Trend description is determined by the rate of change over the past 3 hours.

$$\\Delta P = P\_{0h} - P\_{3h}$$

\\(P\_{0h}\\) = the latest pressure reading in millibars (mb)

\\(P\_{3h}\\) = pressure reading 3 hours ago in millibars (mb)

| Description | Rate |
| --- | --- |
| Steady | \\(-1 mb < \\Delta P < 1 mb \\) |
| Falling | \\(\\Delta P \\le -1 mb\\) |
| Rising | \\(\\Delta P \\ge 1 mb \\) |

Rain Rate
=========

The Rain Rate description is set according to the latest one minute accumulation, extrapolated to an hourly rate.

$$\\Delta R = \\frac{V\_{r} \\times{} 60min}{1h}$$

\\(V\_{r}\\) = rain accumulation in millimeters over one minute (mm/min)

| Description | Rate |
| --- | --- |
| None | \\(\\Delta R = 0 mm/h\\) |
| Very Light | \\(0 mm/h < \\Delta R < 0.25 mm/h\\) |
| Light | \\(0.25 mm/h \\le \\Delta R < 1.0 mm/h\\) |
| Moderate | \\(1.0 mm/h \\le \\Delta R < 4.0 mm/h\\) |
| Heavy | \\(4.0mm/h \\le \\Delta R < 16.0 mm/h\\) |
| Very Heavy | \\(16.0 mm/h \\le \\Delta R < 50.0 mm/h\\) |
| Extreme | \\(\\Delta R \\ge 50.0 mm/h\\) |

Sea Level Pressure
==================

Source: [AMS](http://journals.ametsoc.org/doi/full/10.1175/1520-0434%281998%29013%3C0833%3AAEOUIS%3E2.0.CO%3B2)

$$P\_{sl} = P\_{sta}\\Big\[1 + \\frac{P\_{0}}{P\_{sta}}^{\\frac{R\_{d}\\gamma\_{s}}{g}}\\frac{\\gamma\_{s}(h\_{el} + h\_{ag})}{T\_{0}}\\Big\]^{\\frac{g}{R\_{d}\\gamma\_{s}}}$$

\\(P\_{sta}\\) = station pressure in millibars (mb)

\\(P\_{0}\\) = standard sea level pressure (1013.25mb)

\\(R\_{d}\\) = gas constant for dry air (\\(287.05 \\frac{J}{kg \\cdot K}\\))

\\(\\gamma\_{s}\\) = standard atmosphere lapse rate (\\(0.0065 \\frac{K}{m}\\))

\\(g\\) = gravity (\\(9.80665 \\frac{m}{s^{2}}\\))

\\(h\_{el}\\) = ground elevation in meters (m)

\\(h\_{ag}\\) = station height above ground in meters (m)

\\(T\_{0}\\) = standard sea level temperature (\\(288.15 K\\))

Vapor Pressure
==============

Source: [Weather.gov](https://www.weather.gov/media/epz/wxcalc/vaporPressure.pdf)

Vapor pressure, \\(P\_{v}\\) can be estimated in units of millibar (mb) as follows:

$$P\_{v} = \\frac{RH}{100} \\times{} 6.112 \\times{} e^{\\Big(\\frac{17.67 \\times{} T}{T + 243.5}\\Big)}$$

\\(T\\) = temperature in degrees Celsius (°C)

\\(RH\\) = relative humidity (%)

Wet Bulb Temperature
====================

Source: [Weather.gov](https://www.weather.gov/media/epz/wxcalc/rhTdFromWetBulb.pdf)

Wet Bulb Temperature (\\(T\_{wb}\\)), is determined using the following formulas for actual vapor pressure (\\(P\_{v}\\)) and the vapor pressure related to wet bulb temperature (\\(P\_{v,wb}\\)) in millibar (mb):

$$P\_{v} = P\_{v,wb} - P\_{stn} \\times (T - T\_{wb}) \\times 0.00066 \\times (1 + (0.00115 \\times T\_{wb}))$$

$$P\_{v,wb} = 6.112\\times{}e^{\\Big(\\frac{17.67\\times{}T\_{wb}}{T\_{wb}+243.5}\\Big)}$$

\\(T\\) = temperature in degrees Celsius (°C)

\\(RH\\) = relative humidity (%)

\\(P\_{stn}\\) = station pressure in millibar (mb)

Note, the above equations can't be solved for \\(T\_{wb}\\) directly, but several iterative methods may be used to determine \\(T\_{wb}\\).

Wind Chill Temperature
======================

Source: [Weather.gov](https://www.weather.gov/media/epz/wxcalc/windChill.pdf)

Wind Chill is calculated for temperatures at or below 50°F and wind speeds above 3mph.

$$T\_{wc} = 35.74 + (0.6215\\times{} T) \\\\- \\Big(35.75\\times{}V^{0.16}\\Big) \\\\+ \\Big(0.4275\\times{}T\\times{}V^{0.16}\\Big)$$

\\(T\\) = temperature in degrees Fahrenheit (°F)

\\(V\\) = wind speed in mph

---

# Tempest Release Notes

[Smart Weather for Android - v5.6.12](https://weatherflow.github.io/Tempest/android/2024/03/08/smart-weather-for-android-v5.6.12.html)

---------------------------------------------------------------------------------------------------------------------------------------

March 08, 2024

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.6.5](https://weatherflow.github.io/Tempest/android/2023/12/22/smart-weather-for-android-v5.6.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 22, 2023

*   Fixed bug where power save mode would erroneously show as enabled

[Smart Weather for iOS - v5.14](https://weatherflow.github.io/Tempest/ios/2023/12/05/smart-weather-for-ios-v5.14.html)

-----------------------------------------------------------------------------------------------------------------------

December 05, 2023

Changes: Our team has been hard at work improving your Tempest experience, and this release brings a fresh look to your tablet display, making it even easier to access and enjoy your weather data. Users can now take advantage of a revamped station display designed specifically for tablets. Effortlessly check current conditions and forecast data on a larger screen, providing a more immersive and detailed view of your Tempest Weather System information. Enabling the new tablet display is a breeze. Open your Tempest App settings, scroll to Full-Screen Mode, and choose Standard.

[Smart Weather for Android - v5.6.3](https://weatherflow.github.io/Tempest/android/2023/12/05/smart-weather-for-android-v5.6.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 05, 2023

Our team has been hard at work improving your Tempest experience, and this release brings a fresh look to your tablet display, making it even easier to access and enjoy your weather data. Users can now take advantage of a revamped station display designed specifically for tablets. Effortlessly check current conditions and forecast data on a larger screen, providing a more immersive and detailed view of your Tempest Weather System information. Enabling the new tablet display is a breeze. Open your Tempest App settings, scroll to Full-Screen Mode, and choose Standard.

[Smart Weather for Android - v5.5.3](https://weatherflow.github.io/Tempest/android/2023/11/08/smart-weather-for-android-v5.5.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

November 08, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.4.5](https://weatherflow.github.io/Tempest/android/2023/10/12/smart-weather-for-android-v5.4.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 12, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for iOS - v5.12](https://weatherflow.github.io/Tempest/ios/2023/09/19/smart-weather-for-ios-v5.13.html)

-----------------------------------------------------------------------------------------------------------------------

September 19, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.12](https://weatherflow.github.io/Tempest/ios/2023/09/19/smart-weather-for-ios-v5.12.html)

-----------------------------------------------------------------------------------------------------------------------

September 19, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for Android - v5.4.4](https://weatherflow.github.io/Tempest/android/2023/09/18/smart-weather-for-android-v5.4.4.html)

-------------------------------------------------------------------------------------------------------------------------------------

September 18, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for iOS - v5.11](https://weatherflow.github.io/Tempest/ios/2023/08/11/smart-weather-for-ios-v5.11.html)

-----------------------------------------------------------------------------------------------------------------------

August 11, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.10](https://weatherflow.github.io/Tempest/ios/2023/07/06/smart-weather-for-ios-v5.10.html)

-----------------------------------------------------------------------------------------------------------------------

July 06, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for Android - v5.3.1](https://weatherflow.github.io/Tempest/android/2023/06/28/smart-weather-for-android-v5.3.1.html)

-------------------------------------------------------------------------------------------------------------------------------------

June 28, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.3.0](https://weatherflow.github.io/Tempest/android/2023/06/09/smart-weather-for-android-v5.3.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

June 09, 2023

*   Updated System Navigation Bar And Status Bar To Follow App Theme
*   Fixed Notification Icon Using Wrong Icon
*   Added Current Conditions App Action

[Smart Weather for iOS - v5.09](https://weatherflow.github.io/Tempest/ios/2023/06/05/smart-weather-for-ios-v5.09.html)

-----------------------------------------------------------------------------------------------------------------------

June 05, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.08](https://weatherflow.github.io/Tempest/ios/2023/04/26/smart-weather-for-ios-v5.08.html)

-----------------------------------------------------------------------------------------------------------------------

April 26, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.07](https://weatherflow.github.io/Tempest/ios/2023/04/11/smart-weather-for-ios-v5.07.html)

-----------------------------------------------------------------------------------------------------------------------

April 11, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for Android - v5.2.13](https://weatherflow.github.io/Tempest/android/2023/04/10/smart-weather-for-android-v5.2.13.html)

---------------------------------------------------------------------------------------------------------------------------------------

April 10, 2023

#### UI & UX

*   Removed ScrollView layout and increased height of top buttons for better visibility.
*   Updated strings for the status page.
*   Adjusted default preference for theme to not solely rely on system theme.
*   Set text\_light color for icon tint in bottom navigation.

#### Code & Dependencies

*   Incremented app version.
*   Increased target SDK version for compatibility with newer devices.
*   Allowed using accum final value for max accum comparison if analysis type == 0.
*   Introduced constant for default theme.
*   Always set SDK listener, even if fine location is not granted.
*   Updated remaining API endpoints that were hard-coded.
*   Switched module level SDK build.gradle to Kotlin DSL.
*   Switched project level build.gradle to Kotlin Gradle DSL.
*   Moved Firebase code to wrapped suspending functions.
*   Changed dev URL to use HTTPS.
*   Removed cleartext rule from manifest.
*   Injected user repository into account actions.
*   Moved login and create account to interface.
*   Added is\_tempest\_one\_hub field to device locked network call.
*   Removed unused hello call.
*   Updated API endpoint to use dynamic URL based on build type.
*   Added utility to open an app by its package name.
*   Implemented local API key usage for better security.
*   Introduced user repository, service, and hello API call.
*   Added Dagger code for injecting the user repository.
*   Implemented new cell\_status endpoint and added cell service with Dagger support.
*   Fixed an issue with the gitignore file to properly ignore the local API key.

[Smart Weather for iOS - v5.06](https://weatherflow.github.io/Tempest/ios/2023/03/30/smart-weather-for-ios-v5.06.html)

-----------------------------------------------------------------------------------------------------------------------

March 30, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.05](https://weatherflow.github.io/Tempest/ios/2023/02/21/smart-weather-for-ios-v5.05.html)

-----------------------------------------------------------------------------------------------------------------------

February 21, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for Android - v5.2.10](https://weatherflow.github.io/Tempest/android/2023/02/13/smart-weather-for-android-v5.2.10.html)

---------------------------------------------------------------------------------------------------------------------------------------

February 13, 2023

*   Fixed candlestick graph bars using wrong average
*   Fixed candlestick graph tooltip displaying wrong average under certain conditions
*   Fixed rain rate graph using wrong value to scale y-axis
*   Fixed lightning graph not displaying x-axis
*   Improved web socket connection stability

[Smart Weather for Android - v5.2.3](https://weatherflow.github.io/Tempest/android/2022/12/16/smart-weather-for-android-v5.2.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 16, 2022

*   Improved compatibility with accessibility settings
    *   Screen readers should be able to select the Sign In button now
*   Added BLE Status to Station Status screen
*   Removed graph line interpolation
*   Fixed repeated values on graph Y-Axis
*   Fixed temperature in notification icon being cut off
*   Medium station widget should no longer get cut off
*   Improvements to widget stability
    *   Should get stuck less often hopefully

[Smart Weather for iOS - v5.03](https://weatherflow.github.io/Tempest/ios/2022/12/13/smart-weather-for-ios-v5.04.html)

-----------------------------------------------------------------------------------------------------------------------

December 13, 2022

Changes:

*   Improved VoiceOver support
*   Added weather alerts to the Watch app and Widgets
*   Reduced app size
*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.03](https://weatherflow.github.io/Tempest/ios/2022/10/19/smart-weather-for-ios-v5.03.html)

-----------------------------------------------------------------------------------------------------------------------

October 19, 2022

We’re constantly working to improve your Tempest experience. In addition bug fixes and performance enhancements, we have added National Weather Service Watches, Warnings and Advisories to this release.

If there is an active Watch, Warning or Advisory issued by the NWS for your station or a saved location, you will now see that information on the main forecast screen. Tapping the Watch, Warning or Advisory will show you the full detailed information as provided by the NWS (U.S. only).

[Smart Weather for Android - v5.2.0](https://weatherflow.github.io/Tempest/android/2022/10/19/smart-weather-for-android-v5.2.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 19, 2022

We’re constantly working to improve your Tempest experience. In addition to bug fixes and performance enhancements, we have added National Weather Service Watches, Warnings and Advisories to this release.

If there is an active Watch, Warning or Advisory issued by the NWS for your station or a saved location, you will now see that information on the main forecast screen. Tapping the Watch, Warning or Advisory will show you the full detailed information as provided by the NWS (U.S. only).

[Smart Weather for iOS - v5.02](https://weatherflow.github.io/Tempest/ios/2022/10/03/smart-weather-for-ios-v5.02.html)

-----------------------------------------------------------------------------------------------------------------------

October 03, 2022

*   Station status page updates
*   iOS 16 Lock Screen widgets
*   Bug fixes and performance enhancements

[Smart Weather for Android - v5.1.0](https://weatherflow.github.io/Tempest/android/2022/10/03/smart-weather-for-android-v5.1.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 03, 2022

*   Updates to the status page
*   Dark mode bug fixes
*   Improved graph performance
*   Added temperature to ongoing notification icon

[Smart Weather for Android - v5.0.2](https://weatherflow.github.io/Tempest/android/2022/07/26/smart-weather-for-android-v5.0.2.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 26, 2022

*   Renamed the add location forecast preview button from “Save” to “Next”
*   Changed the graph data inspection label font to regular weight and color to white
*   Fixed bug where widgets would not refresh
*   Improved back navigation in History View
*   Improved back navigation in Settings
*   Fixed bug in Graph View where line graphs were not being drawn on top of all other data
*   Fixed UI issue where widget error text would not wrap and instead ellipsize, causing the full error message to be cut off

[Smart Weather for iOS - v5.01](https://weatherflow.github.io/Tempest/ios/2022/07/20/smart-weather-for-ios-v5.01.html)

-----------------------------------------------------------------------------------------------------------------------

July 20, 2022

Bug fixes and performance enhancements

[Smart Weather for iOS - v5.0](https://weatherflow.github.io/Tempest/ios/2022/07/11/smart-weather-for-ios-v5.0.html)

---------------------------------------------------------------------------------------------------------------------

July 11, 2022

Out with the blue, in with the new! In addition to a sleek new color scheme and design, the AI-powered Tempest app has added a number of exciting features. These include:

*   Weather Anywhere: Tempest forecasts are not just for Tempest stations anymore! You can now get a Tempest forecast for any location.
*   Widgets
*   Apple Watch App
*   Light / Dark Mode

[Smart Weather for Android - v5.0.0](https://weatherflow.github.io/Tempest/android/2022/07/11/smart-weather-for-android-v5.0.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 11, 2022

Out with the blue, in with the new! In addition to a sleek new color scheme and design, the AI-powered Tempest app has added a number of exciting features. These include:

*   Weather Anywhere: Tempest forecasts are not just for Tempest stations anymore! You can now get a Tempest forecast for any location.
*   Widgets
*   Light / Dark Mode

[Smart Weather for iOS - v4.27](https://weatherflow.github.io/Tempest/ios/2022/05/12/smart-weather-for-ios-v4.27.html)

-----------------------------------------------------------------------------------------------------------------------

May 12, 2022

Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.79](https://weatherflow.github.io/Tempest/android/2022/04/04/smart-weather-for-android-v4.6.79.html)

---------------------------------------------------------------------------------------------------------------------------------------

April 04, 2022

*   Bug Fixes And Performance Enhancements

[Smart Weather for Android - v4.6.78](https://weatherflow.github.io/Tempest/android/2022/01/20/smart-weather-for-android-v4.6.78.html)

---------------------------------------------------------------------------------------------------------------------------------------

January 20, 2022

*   Bug Fixes And Performance Enhancements

[Smart Weather for iOS - v4.25](https://weatherflow.github.io/Tempest/ios/2021/12/21/smart-weather-for-ios-v4.25.html)

-----------------------------------------------------------------------------------------------------------------------

December 21, 2021

Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.75](https://weatherflow.github.io/Tempest/android/2021/12/21/smart-weather-for-android-v4.6.75.html)

---------------------------------------------------------------------------------------------------------------------------------------

December 21, 2021

*   Android 12 Bug Fixes
*   Other Bug Fixes And Performance Enhancements

[Smart Weather for iOS - v4.24](https://weatherflow.github.io/Tempest/ios/2021/11/16/smart-weather-for-ios-v4.24.html)

-----------------------------------------------------------------------------------------------------------------------

November 16, 2021

Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.72](https://weatherflow.github.io/Tempest/android/2021/11/16/smart-weather-for-android-v4.6.72.html)

---------------------------------------------------------------------------------------------------------------------------------------

November 16, 2021

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v4.23](https://weatherflow.github.io/Tempest/ios/2021/09/28/smart-weather-for-ios-v4.23.html)

-----------------------------------------------------------------------------------------------------------------------

September 28, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.22](https://weatherflow.github.io/Tempest/ios/2021/09/20/smart-weather-for-ios-v4.22.html)

-----------------------------------------------------------------------------------------------------------------------

September 20, 2021

Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.5](https://weatherflow.github.io/Tempest/android/2021/09/20/smart-weather-for-android-v4.6.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

September 20, 2021

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v4.21](https://weatherflow.github.io/Tempest/ios/2021/08/25/smart-weather-for-ios-v4.21.html)

-----------------------------------------------------------------------------------------------------------------------

August 25, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.20](https://weatherflow.github.io/Tempest/ios/2021/07/27/smart-weather-for-ios-v4.20.html)

-----------------------------------------------------------------------------------------------------------------------

July 27, 2021

Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.2](https://weatherflow.github.io/Tempest/android/2021/07/27/smart-weather-for-android-v4.6.2.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 27, 2021

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v4.19](https://weatherflow.github.io/Tempest/ios/2021/06/18/smart-weather-for-ios-v4.19.html)

-----------------------------------------------------------------------------------------------------------------------

June 18, 2021

Fixed Delta-T issue Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.18](https://weatherflow.github.io/Tempest/android/2021/06/18/smart-weather-for-android-v4.6.18.html)

---------------------------------------------------------------------------------------------------------------------------------------

June 18, 2021

*   Fixed Delta-T issue
*   Bug fixes and performance enhancements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/06/14/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Smart Weather for iOS - v4.18](https://weatherflow.github.io/Tempest/ios/2021/06/14/smart-weather-for-ios-v4.18.html)

-----------------------------------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Smart Weather for Android - v4.6.17](https://weatherflow.github.io/Tempest/android/2021/06/14/smart-weather-for-android-v4.6.17.html)

---------------------------------------------------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Smart Weather for iOS - v4.17](https://weatherflow.github.io/Tempest/ios/2021/05/10/smart-weather-for-ios-v4.17.html)

-----------------------------------------------------------------------------------------------------------------------

May 10, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for Android - v4.5.8](https://weatherflow.github.io/Tempest/android/2021/05/01/smart-weather-for-android-v4.5.8.html)

-------------------------------------------------------------------------------------------------------------------------------------

May 01, 2021

*   Bug Fixes and Performance Improvements

[Smart Weather for iOS - v4.16](https://weatherflow.github.io/Tempest/ios/2021/04/29/smart-weather-for-ios-v4.16.html)

-----------------------------------------------------------------------------------------------------------------------

April 29, 2021

Improved setup experience for new Tempest users.

[Smart Weather for Android - v4.5.7](https://weatherflow.github.io/Tempest/android/2021/04/29/smart-weather-for-android-v4.5.7.html)

-------------------------------------------------------------------------------------------------------------------------------------

April 29, 2021

*   Updated Tempest Weather System setup experience for new Tempest users.

[Smart Weather for iOS - v4.15](https://weatherflow.github.io/Tempest/ios/2021/03/18/smart-weather-for-ios-v4.15.html)

-----------------------------------------------------------------------------------------------------------------------

March 18, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for Android - v4.4.51](https://weatherflow.github.io/Tempest/android/2021/03/18/smart-weather-for-android-v4.4.51md)

------------------------------------------------------------------------------------------------------------------------------------

March 18, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for iOS - v4.13](https://weatherflow.github.io/Tempest/ios/2021/03/03/smart-weather-for-ios-v4.13.html)

-----------------------------------------------------------------------------------------------------------------------

March 03, 2021

Bluetooth bug fix for older iOS users.

[Smart Weather for iOS - v4.12](https://weatherflow.github.io/Tempest/ios/2021/02/23/smart-weather-for-ios-v4.12.html)

-----------------------------------------------------------------------------------------------------------------------

February 23, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for Android - v4.4.2](https://weatherflow.github.io/Tempest/android/2021/02/23/smart-weather-for-android-v4.4.2md)

----------------------------------------------------------------------------------------------------------------------------------

February 23, 2021

This build includes bug fixes and performance enhancements.

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/02/04/tempest-for-web.html)

---------------------------------------------------------------------------------------------

February 04, 2021

*   Added Power Save Messaging

[Smart Weather for iOS - v4.11](https://weatherflow.github.io/Tempest/ios/2021/02/04/smart-weather-for-ios-v4.11.html)

-----------------------------------------------------------------------------------------------------------------------

February 04, 2021

This build includes primarily bug fixes and performance enhancements. Here are a few of the bugs we squashed with this release:

*   Fixed issue with negative lightning distance display
*   Fixed precision issue with rain accumulation display in the More Current Conditions section of the Forecast view
*   Fixed app crash for users who had zero winds in their hourly forecast. (Those calm winds really tripped us up!)

[Smart Weather for Android - v4.39](https://weatherflow.github.io/Tempest/android/2021/02/04/smart-weather-for-android-v4.39.html)

-----------------------------------------------------------------------------------------------------------------------------------

February 04, 2021

This build includes primarily bug fixes and performance enhancements. Here are a few of the bugs we squashed with this release:

*   Fixed wind speed bar color issue
*   Fixed app crash for Android 4 users

[Smart Weather for iOS - v4.26](https://weatherflow.github.io/Tempest/ios/2021/01/20/smart-weather-for-ios-v4.26.html)

-----------------------------------------------------------------------------------------------------------------------

January 20, 2021

Bug fixes and performance enhancements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/01/12/tempest-for-web.html)

---------------------------------------------------------------------------------------------

January 12, 2021

*   Displaying last observation time on the battery card if we have not heard from your device in over 5 minutes.
*   Fixed an issue with the wind speed bar on the forecast screen when switching stations.

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/01/12/tempest-for-web.html)

---------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View.

Additional bug fixes and minor performance enhancements are also included in this build.

[Smart Weather for iOS - v4.10](https://weatherflow.github.io/Tempest/ios/2021/01/12/smart-weather-for-ios-v4.10.html)

-----------------------------------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View. Additional bug fixes and minor performance enhancements are also included in this build.

[Smart Weather for Android - v4.36](https://weatherflow.github.io/Tempest/android/2021/01/12/smart-weather-for-android-v4.36.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View. Additional bug fixes and minor performance enhancements are also included in this build.

[Smart Weather for Android - v4.15](https://weatherflow.github.io/Tempest/android/2020/12/07/smart-weather-for-android-v4.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

December 07, 2020

*   Minor bug fixes

[Smart Weather for iOS - v4.08](https://weatherflow.github.io/Tempest/ios/2020/11/25/smart-weather-for-ios-v4.08.html)

-----------------------------------------------------------------------------------------------------------------------

November 25, 2020

*   Minor bug fixes and performance enhancements.

[Smart Weather for Android - v4.14](https://weatherflow.github.io/Tempest/android/2020/11/25/smart-weather-for-android-v4.14.html)

-----------------------------------------------------------------------------------------------------------------------------------

November 25, 2020

*   Minor bug fixes and performance enhancements

[Tempest for iOS - v4.07](https://weatherflow.github.io/Tempest/ios/2020/10/06/tempest-for-ios-v4.07.html)

-----------------------------------------------------------------------------------------------------------

October 06, 2020

*   iOS 14 updates and other performance enhancements.

[Tempest for iOS - v4.06](https://weatherflow.github.io/Tempest/ios/2020/09/17/tempest-for-ios-v4.06.html)

-----------------------------------------------------------------------------------------------------------

September 17, 2020

*   Siri Shortcuts (iOS 13 and above only)
*   Get instant access to real-time weather conditions from your Tempest station with our new “Current Conditions” and “Detailed Current Conditions” shortcuts. From your Tempest app, navigate to the “Settings” tab, then click “Siri Shortcuts” in the “Manage” section. You’ll also be able to find your Tempest station data in the Shortcuts app to create even more powerful shortcuts to fit your lifestyle.
    
*   This build also includes a few bug fixes and performance enhancements.

[Tempest for Android - v4.13](https://weatherflow.github.io/Tempest/android/2020/09/08/tempest-for-android-v4.13.html)

-----------------------------------------------------------------------------------------------------------------------

September 08, 2020

*   First time setup improvements
*   Fixed data display issue when receiving data over BLE

[Tempest for Android - v4.12](https://weatherflow.github.io/Tempest/android/2020/07/29/tempest-for-android-v4.12.html)

-----------------------------------------------------------------------------------------------------------------------

July 29, 2020

*   Lightning information from your station is now displayed on the forecast screen.
*   We fixed an issue where lightning information was sometimes not displaying correctly on the station dashboard screen.
*   Minor bug fixes and performance enhancements.

[Tempest Firmware - v143](https://weatherflow.github.io/Tempest/firmware/2020/07/01/tempest-firmware-v143.html)

----------------------------------------------------------------------------------------------------------------

July 01, 2020

*   Added temperature compensation for solar and wind effects
*   Fixed bug causing Hub to “forget” devices that were paired to it
*   Bug Fixes & Performance Improvements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/06/15/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for iOS - v4.04](https://weatherflow.github.io/Tempest/ios/2020/06/15/tempest-for-ios-v4.04.html)

-----------------------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for Android - v4.04](https://weatherflow.github.io/Tempest/android/2020/06/15/tempest-for-android-v4.04.html)

-----------------------------------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/06/03/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 03, 2020

*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest for iOS - v4.03](https://weatherflow.github.io/Tempest/ios/2020/06/03/tempest-for-ios-v4.03.html)

-----------------------------------------------------------------------------------------------------------

June 03, 2020

*   Added share button to the Forecast
*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest for Android - v4.02](https://weatherflow.github.io/Tempest/android/2020/06/03/tempest-for-android-v4.02.html)

-----------------------------------------------------------------------------------------------------------------------

June 03, 2020

*   Added share button to the Forecast
*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest Firmware - v134](https://weatherflow.github.io/Tempest/firmware/2020/05/20/tempest-firmware-v134.html)

----------------------------------------------------------------------------------------------------------------

May 20, 2020

*   Improved UV, rain & lightning calibration settings for Tempest
*   Improved LED brightness control for rev G hubs
*   Updated default rain calibration for Tempest
*   Bug Fixes & Performance Improvements

[Tempest for iOS - v4.02](https://weatherflow.github.io/Tempest/ios/2020/05/19/tempest-for-ios-v4.02.html)

-----------------------------------------------------------------------------------------------------------

May 19, 2020

*   iOS 9/10 Bug Fixes

[Tempest for iOS - v4.01](https://weatherflow.github.io/Tempest/ios/2020/05/16/tempest-for-ios-v4.01.html)

-----------------------------------------------------------------------------------------------------------

May 16, 2020

*   Fixed Display Issue when Forecast Temperatures Exceed 100 Degrees
*   Bug Fixes for iOS 9.x Devices
*   “Other Units” Forecast Bug
*   Other Bugs Fixes & Performance Improvements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/05/13/tempest-for-web.html)

---------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell. Here are the specifics:

*   A New Look: We’ve updated the design of the app, including transitioning all branding from Smart Weather to Tempest.
*   A Better Forecast: WeatherFlow’s AI forecast system uses the best available models & our own in-house modeling suite. Leveraging your station data and powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Tempest for iOS - v4.00](https://weatherflow.github.io/Tempest/ios/2020/05/13/tempest-for-ios-v4.00.html)

-----------------------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell, but here are some specifics:

*   A New Look: We’ve updated the branding and design of the app, transitioning the logos and app icon from Smart Weather to Tempest.
*   A Better Forecast: The main view now includes the current conditions at your station, along with a 10-day hourly forecast. But this isn’t your average forecast! Our atmospheric modeling team is using data from your station, combined with data from the ECMWF & NOAA forecast models, as well as our own in-house modeling suite. Leveraging powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Tempest for Android - v4.00](https://weatherflow.github.io/Tempest/android/2020/05/13/tempest-for-android-v4.00.html)

-----------------------------------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell. Here are the specifics:

*   A New Look: We’ve updated the design of the app, including transitioning all branding from Smart Weather to Tempest.
*   A Better Forecast: WeatherFlow’s AI forecast system uses the best available models & our own in-house modeling suite. Leveraging your station data and powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Smart Weather Firmware - v119](https://weatherflow.github.io/Tempest/firmware/2020/03/27/smart-weather-firmware-v119.html)

----------------------------------------------------------------------------------------------------------------------------

March 27, 2020

*   Fixed null UV index values.
*   Fixed issue with wind direction averages.
*   Fixed some Bluetooth crash issues.

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2020/01/06/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card

[Smart Weather for iOS - v3.40](https://weatherflow.github.io/Tempest/ios/2020/01/06/smart-weather-for-ios-v3.40.html)

-----------------------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card
*   Changes to Support the Tempest Weather System
*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.40](https://weatherflow.github.io/Tempest/android/2020/01/06/smart-weather-for-android-v3.40.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card
*   Changes to Support the Tempest Weather System
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.34](https://weatherflow.github.io/Tempest/ios/2019/10/24/smart-weather-for-ios-v3.34.html)

-----------------------------------------------------------------------------------------------------------------------

October 24, 2019

*   iOS 13 Widget Related Dark Mode Updates
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.33](https://weatherflow.github.io/Tempest/ios/2019/10/21/smart-weather-for-ios-v3.33.html)

-----------------------------------------------------------------------------------------------------------------------

October 21, 2019

*   iOS 13 Related Updates
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.31](https://weatherflow.github.io/Tempest/ios/2019/09/26/smart-weather-for-ios-v3.31.html)

-----------------------------------------------------------------------------------------------------------------------

September 26, 2019

*   Added Messages View - shows a historical list of all messages triggered for your station independent of whether the message was delivered via push notification
*   Added Always On Mode Option - prevents the device from sleeping while the app is active
*   Significant Performance Improvements
*   Bug Fixes

[Smart Weather for Android - v3.25](https://weatherflow.github.io/Tempest/android/2019/09/26/smart-weather-for-android-v3.25.html)

-----------------------------------------------------------------------------------------------------------------------------------

September 26, 2019

*   Added Messages View - shows a historical list of all messages triggered for your station independent of whether the message was delivered via push notification
*   Added Always On Mode Option - prevents the device from sleeping while the app is active
*   Bug Fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/07/30/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved Lightning Distance Display
*   Added WU Settings page
*   Added Station -> Advanced menu

[Smart Weather for iOS - v3.20](https://weatherflow.github.io/Tempest/ios/2019/07/30/smart-weather-for-ios-v3.20.html)

-----------------------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved LIghtning Distance Display
*   Updated WU Settings Page
*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.2](https://weatherflow.github.io/Tempest/android/2019/07/30/smart-weather-for-android-v3.2.html)

---------------------------------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved Lightning Distance Display
*   Updated WU Settings Page
*   Bug Fixes & Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/06/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 12, 2019

*   Added support for WeatherFlow Rain Check

[Smart Weather for Android - v3.10](https://weatherflow.github.io/Tempest/android/2019/06/12/smart-weather-for-android-v3.10.html)

-----------------------------------------------------------------------------------------------------------------------------------

June 12, 2019

*   Added Support for WeatherFlow RainCheck
*   Minor Bug Fixes & Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/05/23/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 23, 2019

*   Updated UI (Tab Navigation)
*   History View
*   Updated station sharing url

[Smart Weather for iOS - v3.0](https://weatherflow.github.io/Tempest/ios/2019/05/23/smart-weather-for-ios-v3.0.html)

---------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Updated UI (Tabbed Navigation)
*   History View
*   Station Map
*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.01](https://weatherflow.github.io/Tempest/android/2019/05/23/smart-weather-for-android-v3.01.html)

-----------------------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Tabbed Navigation
*   History View
*   Station Map
*   Ability to replace device
*   Ability to set wind direction offset
*   Fix station switcher not properly updating data in list view

[Smart Weather Firmware - v114](https://weatherflow.github.io/Tempest/firmware/2019/05/23/smart-weather-firmware-v114.html)

----------------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Added several new parameters to hub\_status message
*   Added filter to remove bad battery voltage readings.
*   Updates to rain-on-plate algorithm.

[Smart Weather for iOS - v2.60](https://weatherflow.github.io/Tempest/ios/2019/04/19/smart-weather-for-ios-v2.60.html)

-----------------------------------------------------------------------------------------------------------------------

April 19, 2019

*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v2.60](https://weatherflow.github.io/Tempest/android/2019/04/19/smart-weather-for-android-v2.60.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 19, 2019

*   Updated setup for solar panel
*   Updated forecast endpoint
*   Added ability to set manual SSID
*   More accurate replace battery voltage threshhold for sky
*   Better pressure sanity check

[Smart Weather Firmware - v105](https://weatherflow.github.io/Tempest/firmware/2019/03/05/smart-weather-firmware-v105.html)

----------------------------------------------------------------------------------------------------------------------------

March 05, 2019

*   Added diagnostic element to radio stats array in HUB status message
*   Fixed bug causing hub to occasionally return very large uptime values
*   Fixed low power mode toggle bug affecting some devices

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/01/04/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 04, 2019

*   Removed reference to station’s WU PWS (if linked) in the extended forecast link within the forecast card
*   Added link to your station’s WU PWS (if linked) in Public Data section of Settings

[Smart Weather for iOS - v2.50](https://weatherflow.github.io/Tempest/ios/2019/01/04/smart-weather-for-ios-v2.50.html)

-----------------------------------------------------------------------------------------------------------------------

January 04, 2019

*   Added Ability to Manually Configure WiFi
*   Minor Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.44](https://weatherflow.github.io/Tempest/ios/2018/12/17/smart-weather-for-ios-v2.44.html)

-----------------------------------------------------------------------------------------------------------------------

December 17, 2018

*   Removed WU PWS Station Reference from Extended Forecast Link
*   Minor Bug Fixes & Performance Improvements

[Smart Weather Firmware - v103](https://weatherflow.github.io/Tempest/firmware/2018/12/05/smart-weather-firmware-v103.html)

----------------------------------------------------------------------------------------------------------------------------

December 05, 2018

*   Improved wind speed QC algorithms
*   Improved RH overflow correction for older AIR units
*   Minor improvements to rain-on-plate algorithm
*   Improved factory testing routines

[Smart Weather for Android - v2.18](https://weatherflow.github.io/Tempest/android/2018/11/26/smart-weather-for-android-v2.18.html)

-----------------------------------------------------------------------------------------------------------------------------------

November 26, 2018

*   Offline mode improvements

[Smart Weather Firmware - v98](https://weatherflow.github.io/Tempest/firmware/2018/10/26/smart-weather-firmware-v98.html)

--------------------------------------------------------------------------------------------------------------------------

October 26, 2018

*   added additional methods to upgrade firmware and set time for increased robustness
*   added watchdog to correct “blue LED lockup” issue.
*   added ability to use sensor devices to set the hub’s time when other methods (Internet, BLE) fail
*   corrected direction calculation for low wind speeds

[Smart Weather for iOS - v2.30](https://weatherflow.github.io/Tempest/ios/2018/10/08/smart-weather-for-ios-v2.30.html)

-----------------------------------------------------------------------------------------------------------------------

October 08, 2018

*   Enhancements to Offline Functionality
*   Other Minor Bug Fixes & Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/09/19/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

September 19, 2018

*   Improved data point display when new obs are added to the graph

[Smart Weather Firmware - v94](https://weatherflow.github.io/Tempest/firmware/2018/09/12/smart-weather-firmware-v94.html)

--------------------------------------------------------------------------------------------------------------------------

September 12, 2018

*   fixes a bug in one of the wind filters
*   adds improved rain sensor calibration algorithm

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/08/24/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 24, 2018

*   Rain card now displays Today and Yesterday rain totals rather than Last 24 Hours and Last Hour
*   Rain graph bar now represents the qualitative intensity (“very light”, “light”, “moderate”, “heavy”, “very heavy” and “extreme”) rather than the quantitative hourly rate
*   Added ability to edit station location
*   Added ability to set station public name and public location
*   Renamed mps to m/s
*   Renamed kph to km/h

[Smart Weather for iOS - v2.23](https://weatherflow.github.io/Tempest/ios/2018/08/24/smart-weather-for-ios-v2.23.html)

-----------------------------------------------------------------------------------------------------------------------

August 24, 2018

*   Added Public Data Related Settings View
*   Added Metric for Today Rain Accumulation to Card, List & Graph
*   Added Metric for Yesterday Rain Accumulation to Card, List & Graph
*   Improved Graph Responsiveness
*   Other Minor Bug Fixes & Performance Improvements

[Smart Weather for Android - v2.15](https://weatherflow.github.io/Tempest/android/2018/08/24/smart-weather-for-android-v2.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 24, 2018

*   Rain Card & Graph Improvements
*   Bluetooth Communication & Reliability Improvements
*   Other Bug Fixes & UI improvements

[Smart Weather Firmware - v91](https://weatherflow.github.io/Tempest/firmware/2018/08/14/smart-weather-firmware-v91.html)

--------------------------------------------------------------------------------------------------------------------------

August 14, 2018

*   improved backfill performance and reliability
*   fixed RH overflow issue (affecting about 10% of the AIR units)
*   corrected several wind speed filter issues (affecting a handful of SKY units)
*   improved watchdogs to reduce unnecessary reboots (affecting a small number of hubs)
*   fixed firmware upgrade issue (affecting a very small number of hubs)
*   major improvements to the networking stack, including:
    
    *   added framework for future IPv6 support
    *   more aggressive WiFi scanning when searching for networks
    *   better handling of Internet and WIFI connection/disconnection issues

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/08/07/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 07, 2018

*   Added link to Lightning Strike Count graph
    *   Clicking the Last 3 hour strike count on the tile takes you to the Strike Count graph
*   Updated Weather Underground Forecast Link

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/07/18/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 18, 2018

*   Fixed SKY battery graph issue

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/06/01/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 01, 2018

*   Added hPa pressure setting
*   Added Status alert toggle

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/05/16/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 16, 2018

*   Lightning graph updates
*   Minor display fixes

[Smart Weather Firmware - v47](https://weatherflow.github.io/Tempest/firmware/2018/05/07/smart-weather-firmware-v47.html)

--------------------------------------------------------------------------------------------------------------------------

May 07, 2018

*   Increased rain precision to detect lighter rain.
*   Added radio frequency to device\_status message.
*   Improved hub to device transmission reliability.
*   Improved detection of Internet offline (but WiFi & local network still up) status to improve backfill process.
*   Improved UDP dropped packet issue when Internet offline (but WiFi & local network still up).
*   Support for older SKY firmware

[Smart Weather for iOS - v1.98](https://weatherflow.github.io/Tempest/ios/2018/05/01/smart-weather-for-ios-v1.98.html)

-----------------------------------------------------------------------------------------------------------------------

May 01, 2018

*   Significant Improvements to Station Setup & First Time User Experience
*   Added Ability to Delete Data for Individual Devices
*   Added hPa Pressure Unit of Measure
*   Reintroduced Lightning Bar Graph
*   Improvements to Graph Parameter Selection
*   Added Ability to Toggle Forecast Card Visibility
*   Added Shortcut from Temperature Card to Humidity Graph
*   Added Shortcut from Light Card to Lux Graph
*   Added Shortcut from Light Card to Solar Radiation Graph
*   Improvements to Offline Status Messaging
*   Other Bug Fixes & Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 27, 2018

*   Added ability to delete data for individual devices
*   Added ability to Disable Lightning for AIR devices
*   Added ability to turn on Power Save mode for SKY devices
*   Added station messaging

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/17/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 17, 2018

*   Added Strike Count Graph

[Smart Weather for iOS - v1.97](https://weatherflow.github.io/Tempest/ios/2018/04/06/smart-weather-for-ios-v1.97.html)

-----------------------------------------------------------------------------------------------------------------------

April 06, 2018

*   Significant Improvements to Station Setup & First Time User Experience
*   Other Bug Fixes & Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/02/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 02, 2018

*   Fixed UV tile icon fill issue

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/03/26/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

March 26, 2018

*   Share link updates

[Smart Weather for iOS - v1.90](https://weatherflow.github.io/Tempest/ios/2018/02/27/smart-weather-for-ios-v1.90.html)

-----------------------------------------------------------------------------------------------------------------------

February 27, 2018

*   Enhancements to First Time User Setup
*   Minor Changes to Forecast Card
*   Minor Changes to Battery Card
*   Other Bug Fixes & Performance Improvements

[Smart Weather for Alexa - v1.2](https://weatherflow.github.io/Tempest/alexa/2018/02/27/smart-weather-for-alexa-v1.2.html)

---------------------------------------------------------------------------------------------------------------------------

February 27, 2018

The WeatherFlow Smart Weather Alexa Skill is now available to our mates in Australia!

[Smart Weather Firmware - v35](https://weatherflow.github.io/Tempest/firmware/2018/02/22/smart-weather-firmware-v35.html)

--------------------------------------------------------------------------------------------------------------------------

February 22, 2018

*   Added additional support for SKY
*   Added fixes and work-arounds for NTP issues
*   Improved firmware upgrade stability
*   Many minor bug fixes and stability improvements
*   Additions and fixes to UDP messages
*   Changed Hub LED to use simpler pattern:
    *   GREEN = online, connected via WiFi
    *   BLUE = online, connected via BLE
    *   RED = offline, not connected via WiFi or BLE
*   Improved WiFi stability
*   Added observation backfill capability to Hubs that support it
*   Added fix for RH overflow issue
*   Fixed bug where UDP broadcasts stop

[Smart Weather for iOS - v1.80](https://weatherflow.github.io/Tempest/ios/2018/02/07/smart-weather-for-ios-v1.80.html)

-----------------------------------------------------------------------------------------------------------------------

February 07, 2018

*   Added Auto-Refresh for Forecast Card
*   Improved Forecast Card Error Handling
*   UV Index Formatting Change (decimal precision)
*   Resolved 24 Hour Clock Date Formatting Issue
*   Resolved Graph Bug Preventing Refresh on Parameter Change
*   Other Minor Graph Improvements
*   Other Bug Fixes & Performance Improvements

[Smart Weather for Android - v1.70](https://weatherflow.github.io/Tempest/android/2018/02/07/smart-weather-for-android-v1.70.html)

-----------------------------------------------------------------------------------------------------------------------------------

February 07, 2018

*   Improvements to Lightning Graph
*   Bug Fixes & Other Performance Improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/02/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

February 05, 2018

*   Updated UV precision
*   Wind Graph Update
    *   Not showing wind speed if average is 0

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/02/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

February 05, 2018

*   Added the ability to update station and device meta data.

[Smart Weather for Android - v1.65](https://weatherflow.github.io/Tempest/android/2018/01/19/smart-weather-for-android-v1.65.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 19, 2018

*   Added rain accumulation line to rain graph
*   Follow system auto-rotate setting
*   Bug fixes and UI improvements

[Smart Weather for iOS - v1.72](https://weatherflow.github.io/Tempest/ios/2018/01/17/smart-weather-for-ios-v1.72.html)

-----------------------------------------------------------------------------------------------------------------------

January 17, 2018

*   Rain Graph Bug Fixes
*   Battery Card Bug Fixes
*   General Performance Improvements & Bug Fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/15/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 15, 2018

*   Updated lightning graph

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/11/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 11, 2018

*   Minor graph updates
    *   Rain Graph: Added label to Y Axis
    *   Battery Graph: Added battery units to tooltip

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/10/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 10, 2018

*   Fixed status page display issues on some mobile devices

[Smart Weather for iOS - v1.71](https://weatherflow.github.io/Tempest/ios/2017/12/19/smart-weather-for-ios-v1.71.html)

-----------------------------------------------------------------------------------------------------------------------

December 19, 2017

*   Updates to Rain Accumulation Graph
*   Updates to Lightning Graph
*   Added Daily Rain Accumulation to List View
*   Graph Refresh Improvements
*   General Performance Improvements & Bug Fixes

[Smart Weather for Android - v1.64](https://weatherflow.github.io/Tempest/android/2017/12/13/smart-weather-for-android-v1.64.html)

-----------------------------------------------------------------------------------------------------------------------------------

December 13, 2017

*   Resolved Sorting Related Bugs
*   Minor Improvements and Bug Fixes

[Smart Weather for iOS - v1.69](https://weatherflow.github.io/Tempest/ios/2017/12/13/smart-weather-for-ios-v1.69.html)

-----------------------------------------------------------------------------------------------------------------------

December 13, 2017

*   Added Rain Accumulation Graph
*   General Performance Improvements & Bug Fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/12/11/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

December 11, 2017

*   Added Rain (Today) to list view

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/11/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

November 27, 2017

*   Added accumulation to the rain graph.

[Smart Weather for Alexa - v1.1](https://weatherflow.github.io/Tempest/alexa/2017/11/18/smart-weather-for-alexa-v1.1.html)

---------------------------------------------------------------------------------------------------------------------------

November 18, 2017

The WeatherFlow Smart Weather Alexa Skill is now available in 3 additional languages. We now support, English (U.K), English (India), and English (Canada).

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/11/14/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

November 14, 2017

*   Added pressure unit mmHg

[Smart Weather for iOS - v1.65](https://weatherflow.github.io/Tempest/ios/2017/11/13/smart-weather-for-ios-v1.65.html)

-----------------------------------------------------------------------------------------------------------------------

November 13, 2017

*   Support for iPhone X
*   Resolved Elevation & Above Ground Level Bug Affecting Regions Using Comma as Decimal Separator
*   Enhancements to SKY Related Functionality
*   Change to Elevation & Above Ground Level to Support Negative Values
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.60](https://weatherflow.github.io/Tempest/ios/2017/10/26/smart-weather-for-ios-v1.60.html)

-----------------------------------------------------------------------------------------------------------------------

October 26, 2017

*   Improvements to Initial Setup Workflow
*   Improvements to Manual WU Integration
*   Improved Handling of Errant Data
*   Added Widgets for Wind, Rain & Light
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.50](https://weatherflow.github.io/Tempest/ios/2017/10/05/smart-weather-for-ios-v1.50.html)

-----------------------------------------------------------------------------------------------------------------------

October 05, 2017

*   Initial Public Release
*   General Performance Improvements & Bug Fixes

[Smart Weather for Android - v1.44](https://weatherflow.github.io/Tempest/android/2017/08/31/smart-weather-for-android-v1.44.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Candlestick charts should now properly draw the average bar
*   Rain rate icon changes to reflect the improved rain rate word ranges introduced in the last update
*   Added dialog to warn about unsaved changes in editable fields
*   Specify average bar size in pixels per supported screen size
*   Fix UV and Lux candlestick loss of float precision when calculating open and close
*   Allow adding a device from another station to a new station
*   Use proper delta-t conversion
*   If diagnostic card enabled, automatically add new diagnostic card when a new device is added
*   Fix status list ordering bug with multiple devices
*   Fix card text clipping issue when system text size preference is large
*   Minor improvements and bug fixes

[Smart Weather for iOS - v1.46](https://weatherflow.github.io/Tempest/ios/2017/08/31/smart-weather-for-ios-v1.45.html)

-----------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Added functionality to support SKY devices
*   Added bucketed lightning values
*   Graph fixes related to year bucket
*   Adjustment to lightning card
*   Text scaling fix for rain card
*   Lightning label terminology changes
*   More concise widget labels to support smaller format devices
*   Fixed issue causing graphs to randomly jump to undesired place in time
*   Revised list view layout to better accommodate longer label descriptions
*   First time user experience improvements / fixes
*   Added logic to detect changes to location / devices when editing
*   Update rain card images
*   iPad Pro UI fix
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather Firmware - v17](https://weatherflow.github.io/Tempest/firmware/2017/08/31/smart-weather-firmware-v17.html)

--------------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Added automatic firmware update capability
*   Added features to support the SKY
*   Added additional NTP servers
*   Improved WiFi connectivity
*   Improved stability
*   Minor bug fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/08/24/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 24, 2017

*   Graph Updates
    *   Maintaining graph scroll position when switching between parameters

[Smart Weather for Android - v1.40](https://weatherflow.github.io/Tempest/android/2017/08/10/smart-weather-for-android-v1.40.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 10, 2017

*   Sensor status added to diagnostic list
*   Functionality added to support SKY devices
*   RH added as separate graph
*   Lightning card improvements - icon changes color when lightning is detected within the last 5 minutes
*   Rain card improvements - improved rain rate word ranges
*   Battery card now shows battery state (good or replace)
*   UV, Brightness, and Solar Radiation as separate graphs
*   Zero y axis minimum for UV/Brightness/Solar Radiation
*   Less top padding for wind graph
*   Wind arrows no longer overlap with lines
*   Wind arrows no longer appear on the bottom of the graph
*   Fixed SKY icon to be more consistent with AIR icon
*   Already paired devices no longer show up on nearby devices list
*   Minor formatting fixes
*   Minor performance improvements and bug fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/07/13/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 13, 2017

*   Rain rate display updates

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/07/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 12, 2017

*   Updating Rain Graph legend text
*   Updating lightning strike distance display

[Smart Weather for iOS - v1.4](https://weatherflow.github.io/Tempest/ios/2017/07/10/smart-weather-for-ios-v1.4.html)

---------------------------------------------------------------------------------------------------------------------

July 10, 2017

*   Added functionality to support SKY devices
*   Graph Enhancement - RH added as separate graph
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 27, 2017

*   Fixed Share URL issue when switching between stations
*   Added Battery State to Battery Card
*   Light Graph Updates

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/21/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 21, 2017

*   Humidity Graph Updates
*   Lightning Card bug fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 12, 2017

*   Battery Card Updates
    *   IE Browsers: Fixed battery icon positioning
    *   Mobile Browsers: Fixed battery icon positioning
*   Graph Bug Fixes
    *   Fixed issue switching between graph parameters if the user has more than one device of the same type
*   Header Updates
    *   Improving header display in mobile browsers

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/09/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 09, 2017

*   Parameter switcher added to the graph view
*   Added humidity graph

[Smart Weather for iOS - v1.3](https://weatherflow.github.io/Tempest/ios/2017/06/09/smart-weather-for-ios-v1.3.html)

---------------------------------------------------------------------------------------------------------------------

June 09, 2017

*   Dew point changes to graph
*   Pressure graph bug fix
*   Bug fix related to editing text elements causing cursor to move to the end of the entry
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for Android - v1.15](https://weatherflow.github.io/Tempest/android/2017/06/09/smart-weather-for-android-v1.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

June 09, 2017

*   No longer persists hub reconnection after sign out
*   Add battery card
*   Add battery graph
*   Improved WebSocket reconnect strategy
*   Socket is closed instead of suppressed when app is in background
*   Show “Last Strike” label in card view
*   Fix bug preventing lightning strike card from updating from lightning events
*   Add lightning strike animation
*   Add ability to sort cards
*   Minor performance improvements

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/08/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 08, 2017

*   Temperature Graph Updates
    *   Humidity was removed
    *   Dew point was added

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 05, 2017

*   Lightning Card Updates
    *   Displaying a yellow lightning bolt icon if a strike was received in the last 5 minutes.

[Smart Weather for iOS - v1.21](https://weatherflow.github.io/Tempest/ios/2017/05/31/smart-weather-for-ios-v1.21.html)

-----------------------------------------------------------------------------------------------------------------------

May 31, 2017

*   Improvements to Widgets Related to Tapping to Open App
*   Improvements to Battery Voltage Card
*   Bug Fixes & Improvements to Lightning Card
*   Bug Fixes for Users with Multiple Hubs
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather Firmware - v13](https://weatherflow.github.io/Tempest/firmware/2017/05/22/smart-weather-firmware-v13.html)

--------------------------------------------------------------------------------------------------------------------------

May 22, 2017

*   Added more diagnostic info.
*   Added a field calibration capability.
*   Changed DHCP hostname to “WeatherFlow”.
*   Enabled local UDP multicast.

[Smart Weather for iOS - v1.20](https://weatherflow.github.io/Tempest/ios/2017/05/08/smart-weather-for-ios-v1.20.html)

-----------------------------------------------------------------------------------------------------------------------

May 08, 2017

*   Added Station Status Indicators (Online / Offline)
*   Added Station Status View with Diagnostic Information
*   Added Basic Sharing Functionality
*   Added Battery Card Item (replaces old diagnostics card)
*   Sea Level Pressure Fix for Pressure Widget
*   Lightning Tile Fix (WS/BLE Co-existence Fix)
*   Improved User Messaging
*   Improved App Start-up Performance
*   Performance Improvements
*   Minor Bug Fixes

[Smart Weather for Android - v1.10](https://weatherflow.github.io/Tempest/android/2017/05/08/smart-weather-for-android-v1.10.html)

-----------------------------------------------------------------------------------------------------------------------------------

May 08, 2017

*   Bluetooth improvements
*   Fixed bug where wifi setup loading dialog would loop indefinitely
*   Fixed bug where firmware setup loading dialog would get “stuck”, even if firmware update was successful
*   Fixed bug where names with spaces would cause unknown errors on Wunderground setup on certain Android versions
*   Add hide/show button for password fields
*   Remove ability to create account with social providers
*   When editing a station’s location, no longer moves location to current location if it has been set previously
*   Add reverse portrait/landscape support
*   Fix notification bug on certain Android versions
*   Add device status notification setting
*   Locations without hubs no longer show “WiFi Setup”, “Advanced”, and WU linking options
*   Increase card view text size for certain screen sizes
*   Changing graph resolution from a bucket with data to one without data shows ‘no data available’ message
*   Add toolbar card with share and diagnostics buttons
*   Add station status indicator on toolbar card, stations list, edit station screen, and station switcher
*   Station settings grouping change
*   Add default units to height above ground setting
*   Improved UI in edit station screen
*   Improved UI in edit device screen
*   Improved UI in station switcher
*   Fix pressure needle rotation
*   Minor unit formatting fixes
*   Other minor bug fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/05/03/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 03, 2017

*   Added Battery Card
*   Diagnostic display updates and minor bug fixes
*   Updating precision of Y-Axis for Pressure Graph

[Smart Weather for Web - v1.02](https://weatherflow.github.io/Tempest/web/2017/04/27/smart-weather-for-web-v1.02.html)

-----------------------------------------------------------------------------------------------------------------------

April 27, 2017

*   Added station status (online / offline) to the main view.
*   Added station diagnostics view. Click on the status station to see the diagnostic details.
*   Updated the Y-Axis of the lightning graph so we don’t display duplicate values.

[Smart Weather Firmware - v12](https://weatherflow.github.io/Tempest/firmware/2017/04/24/smart-weather-firmware-v12.html)

--------------------------------------------------------------------------------------------------------------------------

April 24, 2017

*   Fixed RH values greater than 100%
*   Fixed incorrect AIR firmware values

[Smart Weather for iOS - v1.10](https://weatherflow.github.io/Tempest/ios/2017/04/24/smart-weather-for-ios-v1.10.html)

-----------------------------------------------------------------------------------------------------------------------

April 24, 2017

*   Added Lightning and Pressure Widgets
*   Added Widgets for iPad
*   Changed Widget Text to Black (from white)
*   Added Status Event Type Toggle to Settings (suppresses online/offline events)
*   Added Lightning and Pressure Widgets
*   Add Functionality to Show/Hide Password for Password Entry Fields
*   Station Detail Add/Edit UI Improvements
*   Resolved Initial Keyboard Presentation Lag
*   Add Support for Upside Down Portrait for iPad
*   Improved Instructions and UI for Add Device Process
*   Disabled Map Movement (center on current location) when Station’s Location Already Set
*   Fixed issue where Dialogs would not dismiss under certain circumstances
*   Resolved Graph Humidity Bug
*   Remove Ability to Create Account with Social Providers
*   Lightning Card Fixes

[Smart Weather for iOS - v1.01](https://weatherflow.github.io/Tempest/ios/2017/04/17/smart-weather-for-ios-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------

April 17, 2017

*   Diagnostics Card
*   Lightning Card / Notification Fixes
*   Gradient Background Fix for iPad
*   Resolved Landscape Orientation Load Issue
*   Sea Level Pressure Graph Fix
*   Card / List Toggle Change
*   Replaced Toast-style Messages with Alert Dialogs
*   Fixed Issue with Right Aligned Text Entries Not Immediately Reflects Whitespace Entry
*   Improved Error Handling
*   UI Improvements
*   Bug Fixes

[Smart Weather for Web - v1.01](https://weatherflow.github.io/Tempest/web/2017/04/14/smart-weather-for-web-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------

April 14, 2017

*   Added Imperial or Metric unit setting on the settings page.
*   In the list view, we fixed an issue where air density was not displayed in your preferred units.
*   The Wunderground Forecast table in the tile view now displays the forcasted temperature values in your preferred units.

[Smart Weather for Android - v0.93](https://weatherflow.github.io/Tempest/android/2017/04/14/smart-weather-for-android-v0.93.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 14, 2017

*   Improved runtime pemissions requests
*   Fix bug where duplicate stations were being created during setup
*   Fix bug that would cause Sign Out button to sometimes appear twice during setup
*   Remember hub after serial has been entered in device setup
*   Ask hub for already paired devices during setup
*   Added Bluetooth low energy compatibility checks

[Smart Weather for Android - v0.92](https://weatherflow.github.io/Tempest/android/2017/04/10/smart-weather-for-android-v0.92.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 10, 2017

*   Improved background authentication token refresh
*   Add sign out button to setup
*   Add refresh button to wifi setup
*   Go back to station screen after a firmware upgrade
*   Some improvements to prevent showing old data when there is something newer available

[Smart Weather for Alexa - v1.01](https://weatherflow.github.io/Tempest/alexa/2017/03/09/smart-weather-for-alexa-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------------

March 09, 2017

Based on feedback, we updated the Smart Weather Skill to be more flexible in handling your Smart Weather related questions.

[Smart Weather for Alexa - v1.0](https://weatherflow.github.io/Tempest/alexa/2017/03/09/smart-weather-for-alexa-v1.0.html)

---------------------------------------------------------------------------------------------------------------------------

March 09, 2017

The WeatherFlow Smart Weather Alexa Skill is now live!

Just say “Alexa, enable WeatherFlow Smart Weather,” then link your WeatherFlow Smart Weather account. Once linked, you can ask Alexa things like “Alexa, ask WeatherFlow how’s the weather?” and “Alexa, ask WeatherFlow what is the temperature?”

[Smart Weather for Google Home](https://weatherflow.github.io/Tempest/google/2017/01/04/smart-weather-for-google-home.html)

----------------------------------------------------------------------------------------------------------------------------

January 04, 2017

The WeatherFlow Smart Weather Google Action is now live!

Just say “Hey Google, talk to WeatherFlow.” You will be prompted to link your WeatherFlow Smart Weather account. Once your account is linked you can say things like, “Hey Google, ask WeatherFlow how’s the weather?” and “Hey Google, ask WeatherFlow what is the temperature?”

---

# Code Challenge Tool

Overview
--------

The code challenge tool allows you to test your code challenge generation. Enter your code verifier below to see the generated code challenge, or click the Generate button below to have a code verifier created.

Code Verifier - [Generate](#)

Code Challenge

---

# WeatherFlow Tempest UDP Reference - v171

UDP Versions v17 v30 v35 v40 v47 v70 v80 v82 v85 v87 v91 v94 v96 v98 v103 v105 v112 v114 v119 v143 v170 v171

Change Log Since [143](https://weatherflow.github.io/Tempest/api/udp/v119)

---------------------------------------------------------------------------

### hub\_status

*   Added BLE Connected flag to the radio\_status field

### device\_status

*   Added POWER\_BOOSTER\_DEPLECTED to sensor\_status field
*   Added POWER\_BOOSTER\_SHORE\_POWER to sensor\_status field

UDP Basics
----------

The WeatherFlow Smart Weather Station's hub broadcasts UDP messages over port 50222 on the local network.

Messages
--------

### Rain Start Event \[type = evt\_precip\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"evt_precip",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445]
    	}
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |

### Lightning Strike Event \[type = evt\_strike\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"evt_strike",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445,27,3848]
    	}
    
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Distance | km  |
| 2   | Energy |     |

### Rapid Wind \[type = rapid\_wind\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"rapid_wind",
    	  "hub_sn": "HB-00000001",
    	  "ob":[1493322445,2.3,128]
    	}
    
    
    	

#### Ob Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Speed | mps |
| 2   | Wind Direction | Degrees |

### Observation (AIR) \[type = obs\_air\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"obs_air",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493164835,835.0,10.0,45,0,0,3.46,1]],
    	  "firmware_revision": 17
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Station Pressure | MB  |
| 2   | Air Temperature | C   |
| 3   | Relative Humidity | %   |
| 4   | Lightning Strike Count |     |
| 5   | Lightning Strike Avg Distance | km  |
| 6   | Battery |     |
| 7   | Report Interval | Minutes |

### Observation (Sky) \[type = obs\_sky\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"obs_sky",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493321340,9000,10,0.0,2.6,4.6,7.4,187,3.12,1,130,null,0,3]],
    	  "firmware_revision": 29
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Illuminance | Lux |
| 2   | UV  | Index |
| 3   | Rain amount over previous minute | mm  |
| 4   | Wind Lull (minimum 3 second sample) | m/s |
| 5   | Wind Avg (average over report interval) | m/s |
| 6   | Wind Gust (maximum 3 second sample) | m/s |
| 7   | Wind Direction | Degrees |
| 8   | Battery | Volts |
| 9   | Report Interval | Minutes |
| 10  | Solar Radiation | W/m^2 |
| 11  | Local Day Rain Accumulation | mm  |
| 12  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 13  | Wind Sample Interval | seconds |

### Observation (Tempest) \[type = obs\_st\]

    	
        {
            "serial_number": "ST-00000512",
            "type": "obs_st",
            "hub_sn": "HB-00013030",
            "obs": [\
                [1588948614,0.18,0.22,0.27,144,6,1017.57,22.37,50.26,328,0.03,3,0.000000,0,0,0,2.410,1]\
            ],
            "firmware_revision": 129
        }
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Lull (minimum 3 second sample) | m/s |
| 2   | Wind Avg (average over report interval) | m/s |
| 3   | Wind Gust (maximum 3 second sample) | m/s |
| 4   | Wind Direction | Degrees |
| 5   | Wind Sample Interval | seconds |
| 6   | Station Pressure | MB  |
| 7   | Air Temperature | C   |
| 8   | Relative Humidity | %   |
| 9   | Illuminance | Lux |
| 10  | UV  | Index |
| 11  | Solar Radiation | W/m^2 |
| 12  | Rain amount over previous minute | mm  |
| 13  | Precipitation Type | 0 = none, 1 = rain, 2 = hail, 3 = rain + hail (experimental) |
| 14  | Lightning Strike Avg Distance | km  |
| 15  | Lightning Strike Count |     |
| 16  | Battery | Volts |
| 17  | Report Interval | Minutes |

### Status (device) \[type = device\_status\]

    	{
    	  "serial_number": "AR-00004049",
    	  "type": "device_status",
    	  "hub_sn": "HB-00000001",
    	  "timestamp": 1510855923,
    	  "uptime": 2189,
    	  "voltage": 3.50,
    	  "firmware_revision": 17,
    	  "rssi": -17,
    	  "hub_rssi": -87,
    	  "sensor_status": 0,
    	  "debug": 0
    	}

#### Sensor Status (sensor\_status) is a set of bit flags, encoded in a single decimal value, each bit represents the following

| Binary Value | Applies to device | Status description |
| --- | --- | --- |
| 0b000000000 | All | Sensors OK |
| 0b000000001 | AIR, Tempest | lightning failed |
| 0b000000010 | AIR, Tempest | lightning noise |
| 0b000000100 | AIR, Tempest | lightning disturber |
| 0b000001000 | AIR, Tempest | pressure failed |
| 0b000010000 | AIR, Tempest | temperature failed |
| 0b000100000 | AIR, Tempest | rh failed |
| 0b001000000 | SKY, Tempest | wind failed |
| 0b010000000 | SKY, Tempest | precip failed |
| 0b100000000 | SKY, Tempest | light/uv failed |
| 0x00000200 | Tempest | power booster detected |
| 0x00008000 | Tempest | power booster depleted |
| 0x00010000 | Tempest | power booster shore power |

#### any bits above 0b100000000 are reserved for internal use and should be ignored

#### debug

| Value | Description |
| --- | --- |
| 0   | Debugging is disabled |
| 1   | Debugging is enabled |

### Status (hub) \[type = hub\_status\]

    	{
    	  "serial_number":"HB-00000001",
    	  "type":"hub_status",
    	  "firmware_revision":"35",
    	  "uptime":1670133,
    	  "rssi":-62,
    	  "timestamp":1495724691,
    	  "reset_flags": "BOR,PIN,POR",
    	  "seq": 48,
    	  "fs": [1, 0, 15675411, 524288],
              "radio_stats": [2, 1, 0, 3, 2839],
              "mqtt_stats": [1, 0]
    	}

#### Reset Flag Values

|     |     |
| --- | --- |
| Value | Description |
| BOR | Brownout reset |
| PIN | PIN reset |
| POR | Power reset |
| SFT | Software reset |
| WDG | Watchdog reset |
| WWD | Window watchdog reset |
| LPW | Low-power reset |
| HRDFLT | Hard fault detected |

#### fs

For internal use.

#### radio\_stats

| Index | Field |
| --- | --- |
| 0   | Version |
| 1   | Reboot Count |
| 2   | I2C Bus Error Count |
| 3   | Radio Status (0 = Radio Off, 1 = Radio On, 3 = Radio Active, 7 = BLE Connected) |
| 4   | Radio Network ID |

#### mqtt\_stats

For internal use.

---

# Tempest Google Home Action

[Smart Weather for Google Home](https://weatherflow.github.io/Tempest/google/2017/01/04/smart-weather-for-google-home.html)

----------------------------------------------------------------------------------------------------------------------------

January 04, 2017

The WeatherFlow Smart Weather Google Action is now live!

Just say “Hey Google, talk to WeatherFlow.” You will be prompted to link your WeatherFlow Smart Weather account. Once your account is linked you can say things like, “Hey Google, ask WeatherFlow how’s the weather?” and “Hey Google, ask WeatherFlow what is the temperature?”

---

# Tempest for Alexa

[Smart Weather for Alexa - v1.2](https://weatherflow.github.io/Tempest/alexa/2018/02/27/smart-weather-for-alexa-v1.2.html)

---------------------------------------------------------------------------------------------------------------------------

February 27, 2018

The WeatherFlow Smart Weather Alexa Skill is now available to our mates in Australia!

[Smart Weather for Alexa - v1.1](https://weatherflow.github.io/Tempest/alexa/2017/11/18/smart-weather-for-alexa-v1.1.html)

---------------------------------------------------------------------------------------------------------------------------

November 18, 2017

The WeatherFlow Smart Weather Alexa Skill is now available in 3 additional languages. We now support, English (U.K), English (India), and English (Canada).

[Smart Weather for Alexa - v1.01](https://weatherflow.github.io/Tempest/alexa/2017/03/09/smart-weather-for-alexa-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------------

March 09, 2017

Based on feedback, we updated the Smart Weather Skill to be more flexible in handling your Smart Weather related questions.

[Smart Weather for Alexa - v1.0](https://weatherflow.github.io/Tempest/alexa/2017/03/09/smart-weather-for-alexa-v1.0.html)

---------------------------------------------------------------------------------------------------------------------------

March 09, 2017

The WeatherFlow Smart Weather Alexa Skill is now live!

Just say “Alexa, enable WeatherFlow Smart Weather,” then link your WeatherFlow Smart Weather account. Once linked, you can ask Alexa things like “Alexa, ask WeatherFlow how’s the weather?” and “Alexa, ask WeatherFlow what is the temperature?”

---

# Tempest Website

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/06/14/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/02/04/tempest-for-web.html)

---------------------------------------------------------------------------------------------

February 04, 2021

*   Added Power Save Messaging

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/01/12/tempest-for-web.html)

---------------------------------------------------------------------------------------------

January 12, 2021

*   Displaying last observation time on the battery card if we have not heard from your device in over 5 minutes.
*   Fixed an issue with the wind speed bar on the forecast screen when switching stations.

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2021/01/12/tempest-for-web.html)

---------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View.

Additional bug fixes and minor performance enhancements are also included in this build.

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/06/15/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/06/03/tempest-for-web.html)

---------------------------------------------------------------------------------------------

June 03, 2020

*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest for Web](https://weatherflow.github.io/Tempest/web/2020/05/13/tempest-for-web.html)

---------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell. Here are the specifics:

*   A New Look: We’ve updated the design of the app, including transitioning all branding from Smart Weather to Tempest.
*   A Better Forecast: WeatherFlow’s AI forecast system uses the best available models & our own in-house modeling suite. Leveraging your station data and powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2020/01/06/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/07/30/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved Lightning Distance Display
*   Added WU Settings page
*   Added Station -> Advanced menu

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/06/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 12, 2019

*   Added support for WeatherFlow Rain Check

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/05/23/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 23, 2019

*   Updated UI (Tab Navigation)
*   History View
*   Updated station sharing url

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2019/01/04/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 04, 2019

*   Removed reference to station’s WU PWS (if linked) in the extended forecast link within the forecast card
*   Added link to your station’s WU PWS (if linked) in Public Data section of Settings

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/09/19/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

September 19, 2018

*   Improved data point display when new obs are added to the graph

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/08/24/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 24, 2018

*   Rain card now displays Today and Yesterday rain totals rather than Last 24 Hours and Last Hour
*   Rain graph bar now represents the qualitative intensity (“very light”, “light”, “moderate”, “heavy”, “very heavy” and “extreme”) rather than the quantitative hourly rate
*   Added ability to edit station location
*   Added ability to set station public name and public location
*   Renamed mps to m/s
*   Renamed kph to km/h

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/08/07/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 07, 2018

*   Added link to Lightning Strike Count graph
    *   Clicking the Last 3 hour strike count on the tile takes you to the Strike Count graph
*   Updated Weather Underground Forecast Link

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/07/18/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 18, 2018

*   Fixed SKY battery graph issue

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/06/01/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 01, 2018

*   Added hPa pressure setting
*   Added Status alert toggle

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/05/16/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 16, 2018

*   Lightning graph updates
*   Minor display fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 27, 2018

*   Added ability to delete data for individual devices
*   Added ability to Disable Lightning for AIR devices
*   Added ability to turn on Power Save mode for SKY devices
*   Added station messaging

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/17/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 17, 2018

*   Added Strike Count Graph

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/04/02/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

April 02, 2018

*   Fixed UV tile icon fill issue

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/03/26/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

March 26, 2018

*   Share link updates

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/02/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

February 05, 2018

*   Updated UV precision
*   Wind Graph Update
    *   Not showing wind speed if average is 0

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/02/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

February 05, 2018

*   Added the ability to update station and device meta data.

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/15/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 15, 2018

*   Updated lightning graph

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/11/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 11, 2018

*   Minor graph updates
    *   Rain Graph: Added label to Y Axis
    *   Battery Graph: Added battery units to tooltip

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2018/01/10/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

January 10, 2018

*   Fixed status page display issues on some mobile devices

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/12/11/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

December 11, 2017

*   Added Rain (Today) to list view

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/11/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

November 27, 2017

*   Added accumulation to the rain graph.

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/11/14/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

November 14, 2017

*   Added pressure unit mmHg

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/08/24/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

August 24, 2017

*   Graph Updates
    *   Maintaining graph scroll position when switching between parameters

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/07/13/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 13, 2017

*   Rain rate display updates

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/07/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

July 12, 2017

*   Updating Rain Graph legend text
*   Updating lightning strike distance display

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/27/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 27, 2017

*   Fixed Share URL issue when switching between stations
*   Added Battery State to Battery Card
*   Light Graph Updates

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/21/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 21, 2017

*   Humidity Graph Updates
*   Lightning Card bug fixes

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/12/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 12, 2017

*   Battery Card Updates
    *   IE Browsers: Fixed battery icon positioning
    *   Mobile Browsers: Fixed battery icon positioning
*   Graph Bug Fixes
    *   Fixed issue switching between graph parameters if the user has more than one device of the same type
*   Header Updates
    *   Improving header display in mobile browsers

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/09/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 09, 2017

*   Parameter switcher added to the graph view
*   Added humidity graph

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/08/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 08, 2017

*   Temperature Graph Updates
    *   Humidity was removed
    *   Dew point was added

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/06/05/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

June 05, 2017

*   Lightning Card Updates
    *   Displaying a yellow lightning bolt icon if a strike was received in the last 5 minutes.

[Smart Weather for Web](https://weatherflow.github.io/Tempest/web/2017/05/03/smart-weather-for-web.html)

---------------------------------------------------------------------------------------------------------

May 03, 2017

*   Added Battery Card
*   Diagnostic display updates and minor bug fixes
*   Updating precision of Y-Axis for Pressure Graph

[Smart Weather for Web - v1.02](https://weatherflow.github.io/Tempest/web/2017/04/27/smart-weather-for-web-v1.02.html)

-----------------------------------------------------------------------------------------------------------------------

April 27, 2017

*   Added station status (online / offline) to the main view.
*   Added station diagnostics view. Click on the status station to see the diagnostic details.
*   Updated the Y-Axis of the lightning graph so we don’t display duplicate values.

[Smart Weather for Web - v1.01](https://weatherflow.github.io/Tempest/web/2017/04/14/smart-weather-for-web-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------

April 14, 2017

*   Added Imperial or Metric unit setting on the settings page.
*   In the list view, we fixed an issue where air density was not displayed in your preferred units.
*   The Wunderground Forecast table in the tile view now displays the forcasted temperature values in your preferred units.

---

# WeatherFlow Smart Weather UDP Reference - v119

UDP Versions v17 v30 v35 v40 v47 v70 v80 v82 v85 v87 v91 v94 v96 v98 v103 v105 v112 v114 v119 v143 v170 v171

No UDP changes since [114](https://weatherflow.github.io/Tempest/api/udp/v114)

-------------------------------------------------------------------------------

UDP Basics
----------

The WeatherFlow Smart Weather Station's hub broadcasts UDP messages over port 50222 on the local network.

Messages
--------

### Rain Start Event \[type = evt\_precip\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"evt_precip",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445]
    	}
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |

### Lightning Strike Event \[type = evt\_strike\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"evt_strike",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445,27,3848]
    	}
    
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Distance | km  |
| 2   | Energy |     |

### Rapid Wind \[type = rapid\_wind\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"rapid_wind",
    	  "hub_sn": "HB-00000001",
    	  "ob":[1493322445,2.3,128]
    	}
    
    
    	

#### Ob Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Speed | mps |
| 2   | Wind Direction | Degrees |

### Observation (AIR) \[type = obs\_air\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"obs_air",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493164835,835.0,10.0,45,0,0,3.46,1]],
    	  "firmware_revision": 17
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Station Pressure | MB  |
| 2   | Air Temperature | C   |
| 3   | Relative Humidity | %   |
| 4   | Lightning Strike Count |     |
| 5   | Lightning Strike Avg Distance | km  |
| 6   | Battery |     |
| 7   | Report Interval | Minutes |

### Observation (Sky) \[type = obs\_sky\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"obs_sky",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493321340,9000,10,0.0,2.6,4.6,7.4,187,3.12,1,130,null,0,3]],
    	  "firmware_revision": 29
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Illuminance | Lux |
| 2   | UV  | Index |
| 3   | Rain amount over previous minute | mm  |
| 4   | Wind Lull (minimum 3 second sample) | m/s |
| 5   | Wind Avg (average over report interval) | m/s |
| 6   | Wind Gust (maximum 3 second sample) | m/s |
| 7   | Wind Direction | Degrees |
| 8   | Battery | Volts |
| 9   | Report Interval | Minutes |
| 10  | Solar Radiation | W/m^2 |
| 11  | Local Day Rain Accumulation | mm  |
| 12  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 13  | Wind Sample Interval | seconds |

### Observation (Tempest) \[type = obs\_st\]

    	
        {
            "serial_number": "ST-00000512",
            "type": "obs_st",
            "hub_sn": "HB-00013030",
            "obs": [\
                [1588948614,0.18,0.22,0.27,144,6,1017.57,22.37,50.26,328,0.03,3,0.000000,0,0,0,2.410,1]\
            ],
            "firmware_revision": 129
        }
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Lull (minimum 3 second sample) | m/s |
| 2   | Wind Avg (average over report interval) | m/s |
| 3   | Wind Gust (maximum 3 second sample) | m/s |
| 4   | Wind Direction | Degrees |
| 5   | Wind Sample Interval | seconds |
| 6   | Station Pressure | MB  |
| 7   | Air Temperature | C   |
| 8   | Relative Humidity | %   |
| 9   | Illuminance | Lux |
| 10  | UV  | Index |
| 11  | Solar Radiation | W/m^2 |
| 12  | Rain amount over previous minute | mm  |
| 13  | Precipitation Type | 0 = none, 1 = rain, 2 = hail, 3 = rain + hail (experimental) |
| 14  | Lightning Strike Avg Distance | km  |
| 15  | Lightning Strike Count |     |
| 16  | Battery | Volts |
| 17  | Report Interval | Minutes |

### Status (device) \[type = device\_status\]

    	{
    	  "serial_number": "AR-00004049",
    	  "type": "device_status",
    	  "hub_sn": "HB-00000001",
    	  "timestamp": 1510855923,
    	  "uptime": 2189,
    	  "voltage": 3.50,
    	  "firmware_revision": 17,
    	  "rssi": -17,
    	  "hub_rssi": -87,
    	  "sensor_status": 0,
    	  "debug": 0
    	}

#### Sensor Status (sensor\_status) is a set of bit flags, encoded in a single decimal value, each bit represents the following

| Binary Value | Applies to device | Status description |
| --- | --- | --- |
| 0b000000000 | All | Sensors OK |
| 0b000000001 | AIR, Tempest | lightning failed |
| 0b000000010 | AIR, Tempest | lightning noise |
| 0b000000100 | AIR, Tempest | lightning disturber |
| 0b000001000 | AIR, Tempest | pressure failed |
| 0b000010000 | AIR, Tempest | temperature failed |
| 0b000100000 | AIR, Tempest | rh failed |
| 0b001000000 | SKY, Tempest | wind failed |
| 0b010000000 | SKY, Tempest | precip failed |
| 0b100000000 | SKY, Tempest | light/uv failed |

#### any bits above 0b100000000 are reserved for internal use and should be ignored

#### debug

| Value | Description |
| --- | --- |
| 0   | Debugging is disabled |
| 1   | Debugging is enabled |

### Status (hub) \[type = hub\_status\]

    	{
    	  "serial_number":"HB-00000001",
    	  "type":"hub_status",
    	  "firmware_revision":"35",
    	  "uptime":1670133,
    	  "rssi":-62,
    	  "timestamp":1495724691,
    	  "reset_flags": "BOR,PIN,POR",
    	  "seq": 48,
    	  "fs": [1, 0, 15675411, 524288],
              "radio_stats": [2, 1, 0, 3],
              "mqtt_stats": [1, 0]
    	}

#### Reset Flag Values

|     |     |
| --- | --- |
| Value | Description |
| BOR | Brownout reset |
| PIN | PIN reset |
| POR | Power reset |
| SFT | Software reset |
| WDG | Watchdog reset |
| WWD | Window watchdog reset |
| LPW | Low-power reset |

#### fs

For internal use.

#### radio\_stats

| Index | Field |
| --- | --- |
| 0   | Version |
| 1   | Reboot Count |
| 2   | I2C Bus Error Count |
| 3   | Radio Status (0 = Radio Off, 1 = Radio On, 3 = Radio Active) |

#### mqtt\_stats

For internal use.

---

# Tempest for iOS

[Smart Weather for iOS - v5.14](https://weatherflow.github.io/Tempest/ios/2023/12/05/smart-weather-for-ios-v5.14.html)

-----------------------------------------------------------------------------------------------------------------------

December 05, 2023

Changes: Our team has been hard at work improving your Tempest experience, and this release brings a fresh look to your tablet display, making it even easier to access and enjoy your weather data. Users can now take advantage of a revamped station display designed specifically for tablets. Effortlessly check current conditions and forecast data on a larger screen, providing a more immersive and detailed view of your Tempest Weather System information. Enabling the new tablet display is a breeze. Open your Tempest App settings, scroll to Full-Screen Mode, and choose Standard.

[Smart Weather for iOS - v5.12](https://weatherflow.github.io/Tempest/ios/2023/09/19/smart-weather-for-ios-v5.13.html)

-----------------------------------------------------------------------------------------------------------------------

September 19, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.12](https://weatherflow.github.io/Tempest/ios/2023/09/19/smart-weather-for-ios-v5.12.html)

-----------------------------------------------------------------------------------------------------------------------

September 19, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.11](https://weatherflow.github.io/Tempest/ios/2023/08/11/smart-weather-for-ios-v5.11.html)

-----------------------------------------------------------------------------------------------------------------------

August 11, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.10](https://weatherflow.github.io/Tempest/ios/2023/07/06/smart-weather-for-ios-v5.10.html)

-----------------------------------------------------------------------------------------------------------------------

July 06, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.09](https://weatherflow.github.io/Tempest/ios/2023/06/05/smart-weather-for-ios-v5.09.html)

-----------------------------------------------------------------------------------------------------------------------

June 05, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.08](https://weatherflow.github.io/Tempest/ios/2023/04/26/smart-weather-for-ios-v5.08.html)

-----------------------------------------------------------------------------------------------------------------------

April 26, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.07](https://weatherflow.github.io/Tempest/ios/2023/04/11/smart-weather-for-ios-v5.07.html)

-----------------------------------------------------------------------------------------------------------------------

April 11, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.06](https://weatherflow.github.io/Tempest/ios/2023/03/30/smart-weather-for-ios-v5.06.html)

-----------------------------------------------------------------------------------------------------------------------

March 30, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.05](https://weatherflow.github.io/Tempest/ios/2023/02/21/smart-weather-for-ios-v5.05.html)

-----------------------------------------------------------------------------------------------------------------------

February 21, 2023

Changes:

*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.03](https://weatherflow.github.io/Tempest/ios/2022/12/13/smart-weather-for-ios-v5.04.html)

-----------------------------------------------------------------------------------------------------------------------

December 13, 2022

Changes:

*   Improved VoiceOver support
*   Added weather alerts to the Watch app and Widgets
*   Reduced app size
*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.03](https://weatherflow.github.io/Tempest/ios/2022/10/19/smart-weather-for-ios-v5.03.html)

-----------------------------------------------------------------------------------------------------------------------

October 19, 2022

We’re constantly working to improve your Tempest experience. In addition bug fixes and performance enhancements, we have added National Weather Service Watches, Warnings and Advisories to this release.

If there is an active Watch, Warning or Advisory issued by the NWS for your station or a saved location, you will now see that information on the main forecast screen. Tapping the Watch, Warning or Advisory will show you the full detailed information as provided by the NWS (U.S. only).

[Smart Weather for iOS - v5.02](https://weatherflow.github.io/Tempest/ios/2022/10/03/smart-weather-for-ios-v5.02.html)

-----------------------------------------------------------------------------------------------------------------------

October 03, 2022

*   Station status page updates
*   iOS 16 Lock Screen widgets
*   Bug fixes and performance enhancements

[Smart Weather for iOS - v5.01](https://weatherflow.github.io/Tempest/ios/2022/07/20/smart-weather-for-ios-v5.01.html)

-----------------------------------------------------------------------------------------------------------------------

July 20, 2022

Bug fixes and performance enhancements

[Smart Weather for iOS - v5.0](https://weatherflow.github.io/Tempest/ios/2022/07/11/smart-weather-for-ios-v5.0.html)

---------------------------------------------------------------------------------------------------------------------

July 11, 2022

Out with the blue, in with the new! In addition to a sleek new color scheme and design, the AI-powered Tempest app has added a number of exciting features. These include:

*   Weather Anywhere: Tempest forecasts are not just for Tempest stations anymore! You can now get a Tempest forecast for any location.
*   Widgets
*   Apple Watch App
*   Light / Dark Mode

[Smart Weather for iOS - v4.27](https://weatherflow.github.io/Tempest/ios/2022/05/12/smart-weather-for-ios-v4.27.html)

-----------------------------------------------------------------------------------------------------------------------

May 12, 2022

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.25](https://weatherflow.github.io/Tempest/ios/2021/12/21/smart-weather-for-ios-v4.25.html)

-----------------------------------------------------------------------------------------------------------------------

December 21, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.24](https://weatherflow.github.io/Tempest/ios/2021/11/16/smart-weather-for-ios-v4.24.html)

-----------------------------------------------------------------------------------------------------------------------

November 16, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.23](https://weatherflow.github.io/Tempest/ios/2021/09/28/smart-weather-for-ios-v4.23.html)

-----------------------------------------------------------------------------------------------------------------------

September 28, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.22](https://weatherflow.github.io/Tempest/ios/2021/09/20/smart-weather-for-ios-v4.22.html)

-----------------------------------------------------------------------------------------------------------------------

September 20, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.21](https://weatherflow.github.io/Tempest/ios/2021/08/25/smart-weather-for-ios-v4.21.html)

-----------------------------------------------------------------------------------------------------------------------

August 25, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.20](https://weatherflow.github.io/Tempest/ios/2021/07/27/smart-weather-for-ios-v4.20.html)

-----------------------------------------------------------------------------------------------------------------------

July 27, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.19](https://weatherflow.github.io/Tempest/ios/2021/06/18/smart-weather-for-ios-v4.19.html)

-----------------------------------------------------------------------------------------------------------------------

June 18, 2021

Fixed Delta-T issue Bug fixes and performance enhancements

[Smart Weather for iOS - v4.18](https://weatherflow.github.io/Tempest/ios/2021/06/14/smart-weather-for-ios-v4.18.html)

-----------------------------------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Smart Weather for iOS - v4.17](https://weatherflow.github.io/Tempest/ios/2021/05/10/smart-weather-for-ios-v4.17.html)

-----------------------------------------------------------------------------------------------------------------------

May 10, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for iOS - v4.16](https://weatherflow.github.io/Tempest/ios/2021/04/29/smart-weather-for-ios-v4.16.html)

-----------------------------------------------------------------------------------------------------------------------

April 29, 2021

Improved setup experience for new Tempest users.

[Smart Weather for iOS - v4.15](https://weatherflow.github.io/Tempest/ios/2021/03/18/smart-weather-for-ios-v4.15.html)

-----------------------------------------------------------------------------------------------------------------------

March 18, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for iOS - v4.13](https://weatherflow.github.io/Tempest/ios/2021/03/03/smart-weather-for-ios-v4.13.html)

-----------------------------------------------------------------------------------------------------------------------

March 03, 2021

Bluetooth bug fix for older iOS users.

[Smart Weather for iOS - v4.12](https://weatherflow.github.io/Tempest/ios/2021/02/23/smart-weather-for-ios-v4.12.html)

-----------------------------------------------------------------------------------------------------------------------

February 23, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for iOS - v4.11](https://weatherflow.github.io/Tempest/ios/2021/02/04/smart-weather-for-ios-v4.11.html)

-----------------------------------------------------------------------------------------------------------------------

February 04, 2021

This build includes primarily bug fixes and performance enhancements. Here are a few of the bugs we squashed with this release:

*   Fixed issue with negative lightning distance display
*   Fixed precision issue with rain accumulation display in the More Current Conditions section of the Forecast view
*   Fixed app crash for users who had zero winds in their hourly forecast. (Those calm winds really tripped us up!)

[Smart Weather for iOS - v4.26](https://weatherflow.github.io/Tempest/ios/2021/01/20/smart-weather-for-ios-v4.26.html)

-----------------------------------------------------------------------------------------------------------------------

January 20, 2021

Bug fixes and performance enhancements

[Smart Weather for iOS - v4.10](https://weatherflow.github.io/Tempest/ios/2021/01/12/smart-weather-for-ios-v4.10.html)

-----------------------------------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View. Additional bug fixes and minor performance enhancements are also included in this build.

[Smart Weather for iOS - v4.08](https://weatherflow.github.io/Tempest/ios/2020/11/25/smart-weather-for-ios-v4.08.html)

-----------------------------------------------------------------------------------------------------------------------

November 25, 2020

*   Minor bug fixes and performance enhancements.

[Tempest for iOS - v4.07](https://weatherflow.github.io/Tempest/ios/2020/10/06/tempest-for-ios-v4.07.html)

-----------------------------------------------------------------------------------------------------------

October 06, 2020

*   iOS 14 updates and other performance enhancements.

[Tempest for iOS - v4.06](https://weatherflow.github.io/Tempest/ios/2020/09/17/tempest-for-ios-v4.06.html)

-----------------------------------------------------------------------------------------------------------

September 17, 2020

*   Siri Shortcuts (iOS 13 and above only)
*   Get instant access to real-time weather conditions from your Tempest station with our new “Current Conditions” and “Detailed Current Conditions” shortcuts. From your Tempest app, navigate to the “Settings” tab, then click “Siri Shortcuts” in the “Manage” section. You’ll also be able to find your Tempest station data in the Shortcuts app to create even more powerful shortcuts to fit your lifestyle.
    
*   This build also includes a few bug fixes and performance enhancements.

[Tempest for iOS - v4.04](https://weatherflow.github.io/Tempest/ios/2020/06/15/tempest-for-ios-v4.04.html)

-----------------------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for iOS - v4.03](https://weatherflow.github.io/Tempest/ios/2020/06/03/tempest-for-ios-v4.03.html)

-----------------------------------------------------------------------------------------------------------

June 03, 2020

*   Added share button to the Forecast
*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest for iOS - v4.02](https://weatherflow.github.io/Tempest/ios/2020/05/19/tempest-for-ios-v4.02.html)

-----------------------------------------------------------------------------------------------------------

May 19, 2020

*   iOS 9/10 Bug Fixes

[Tempest for iOS - v4.01](https://weatherflow.github.io/Tempest/ios/2020/05/16/tempest-for-ios-v4.01.html)

-----------------------------------------------------------------------------------------------------------

May 16, 2020

*   Fixed Display Issue when Forecast Temperatures Exceed 100 Degrees
*   Bug Fixes for iOS 9.x Devices
*   “Other Units” Forecast Bug
*   Other Bugs Fixes & Performance Improvements

[Tempest for iOS - v4.00](https://weatherflow.github.io/Tempest/ios/2020/05/13/tempest-for-ios-v4.00.html)

-----------------------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell, but here are some specifics:

*   A New Look: We’ve updated the branding and design of the app, transitioning the logos and app icon from Smart Weather to Tempest.
*   A Better Forecast: The main view now includes the current conditions at your station, along with a 10-day hourly forecast. But this isn’t your average forecast! Our atmospheric modeling team is using data from your station, combined with data from the ECMWF & NOAA forecast models, as well as our own in-house modeling suite. Leveraging powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Smart Weather for iOS - v3.40](https://weatherflow.github.io/Tempest/ios/2020/01/06/smart-weather-for-ios-v3.40.html)

-----------------------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card
*   Changes to Support the Tempest Weather System
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.34](https://weatherflow.github.io/Tempest/ios/2019/10/24/smart-weather-for-ios-v3.34.html)

-----------------------------------------------------------------------------------------------------------------------

October 24, 2019

*   iOS 13 Widget Related Dark Mode Updates
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.33](https://weatherflow.github.io/Tempest/ios/2019/10/21/smart-weather-for-ios-v3.33.html)

-----------------------------------------------------------------------------------------------------------------------

October 21, 2019

*   iOS 13 Related Updates
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.31](https://weatherflow.github.io/Tempest/ios/2019/09/26/smart-weather-for-ios-v3.31.html)

-----------------------------------------------------------------------------------------------------------------------

September 26, 2019

*   Added Messages View - shows a historical list of all messages triggered for your station independent of whether the message was delivered via push notification
*   Added Always On Mode Option - prevents the device from sleeping while the app is active
*   Significant Performance Improvements
*   Bug Fixes

[Smart Weather for iOS - v3.20](https://weatherflow.github.io/Tempest/ios/2019/07/30/smart-weather-for-ios-v3.20.html)

-----------------------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved LIghtning Distance Display
*   Updated WU Settings Page
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v3.0](https://weatherflow.github.io/Tempest/ios/2019/05/23/smart-weather-for-ios-v3.0.html)

---------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Updated UI (Tabbed Navigation)
*   History View
*   Station Map
*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.60](https://weatherflow.github.io/Tempest/ios/2019/04/19/smart-weather-for-ios-v2.60.html)

-----------------------------------------------------------------------------------------------------------------------

April 19, 2019

*   Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.50](https://weatherflow.github.io/Tempest/ios/2019/01/04/smart-weather-for-ios-v2.50.html)

-----------------------------------------------------------------------------------------------------------------------

January 04, 2019

*   Added Ability to Manually Configure WiFi
*   Minor Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.44](https://weatherflow.github.io/Tempest/ios/2018/12/17/smart-weather-for-ios-v2.44.html)

-----------------------------------------------------------------------------------------------------------------------

December 17, 2018

*   Removed WU PWS Station Reference from Extended Forecast Link
*   Minor Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.30](https://weatherflow.github.io/Tempest/ios/2018/10/08/smart-weather-for-ios-v2.30.html)

-----------------------------------------------------------------------------------------------------------------------

October 08, 2018

*   Enhancements to Offline Functionality
*   Other Minor Bug Fixes & Performance Improvements

[Smart Weather for iOS - v2.23](https://weatherflow.github.io/Tempest/ios/2018/08/24/smart-weather-for-ios-v2.23.html)

-----------------------------------------------------------------------------------------------------------------------

August 24, 2018

*   Added Public Data Related Settings View
*   Added Metric for Today Rain Accumulation to Card, List & Graph
*   Added Metric for Yesterday Rain Accumulation to Card, List & Graph
*   Improved Graph Responsiveness
*   Other Minor Bug Fixes & Performance Improvements

[Smart Weather for iOS - v1.98](https://weatherflow.github.io/Tempest/ios/2018/05/01/smart-weather-for-ios-v1.98.html)

-----------------------------------------------------------------------------------------------------------------------

May 01, 2018

*   Significant Improvements to Station Setup & First Time User Experience
*   Added Ability to Delete Data for Individual Devices
*   Added hPa Pressure Unit of Measure
*   Reintroduced Lightning Bar Graph
*   Improvements to Graph Parameter Selection
*   Added Ability to Toggle Forecast Card Visibility
*   Added Shortcut from Temperature Card to Humidity Graph
*   Added Shortcut from Light Card to Lux Graph
*   Added Shortcut from Light Card to Solar Radiation Graph
*   Improvements to Offline Status Messaging
*   Other Bug Fixes & Performance Improvements

[Smart Weather for iOS - v1.97](https://weatherflow.github.io/Tempest/ios/2018/04/06/smart-weather-for-ios-v1.97.html)

-----------------------------------------------------------------------------------------------------------------------

April 06, 2018

*   Significant Improvements to Station Setup & First Time User Experience
*   Other Bug Fixes & Performance Improvements

[Smart Weather for iOS - v1.90](https://weatherflow.github.io/Tempest/ios/2018/02/27/smart-weather-for-ios-v1.90.html)

-----------------------------------------------------------------------------------------------------------------------

February 27, 2018

*   Enhancements to First Time User Setup
*   Minor Changes to Forecast Card
*   Minor Changes to Battery Card
*   Other Bug Fixes & Performance Improvements

[Smart Weather for iOS - v1.80](https://weatherflow.github.io/Tempest/ios/2018/02/07/smart-weather-for-ios-v1.80.html)

-----------------------------------------------------------------------------------------------------------------------

February 07, 2018

*   Added Auto-Refresh for Forecast Card
*   Improved Forecast Card Error Handling
*   UV Index Formatting Change (decimal precision)
*   Resolved 24 Hour Clock Date Formatting Issue
*   Resolved Graph Bug Preventing Refresh on Parameter Change
*   Other Minor Graph Improvements
*   Other Bug Fixes & Performance Improvements

[Smart Weather for iOS - v1.72](https://weatherflow.github.io/Tempest/ios/2018/01/17/smart-weather-for-ios-v1.72.html)

-----------------------------------------------------------------------------------------------------------------------

January 17, 2018

*   Rain Graph Bug Fixes
*   Battery Card Bug Fixes
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.71](https://weatherflow.github.io/Tempest/ios/2017/12/19/smart-weather-for-ios-v1.71.html)

-----------------------------------------------------------------------------------------------------------------------

December 19, 2017

*   Updates to Rain Accumulation Graph
*   Updates to Lightning Graph
*   Added Daily Rain Accumulation to List View
*   Graph Refresh Improvements
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.69](https://weatherflow.github.io/Tempest/ios/2017/12/13/smart-weather-for-ios-v1.69.html)

-----------------------------------------------------------------------------------------------------------------------

December 13, 2017

*   Added Rain Accumulation Graph
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.65](https://weatherflow.github.io/Tempest/ios/2017/11/13/smart-weather-for-ios-v1.65.html)

-----------------------------------------------------------------------------------------------------------------------

November 13, 2017

*   Support for iPhone X
*   Resolved Elevation & Above Ground Level Bug Affecting Regions Using Comma as Decimal Separator
*   Enhancements to SKY Related Functionality
*   Change to Elevation & Above Ground Level to Support Negative Values
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.60](https://weatherflow.github.io/Tempest/ios/2017/10/26/smart-weather-for-ios-v1.60.html)

-----------------------------------------------------------------------------------------------------------------------

October 26, 2017

*   Improvements to Initial Setup Workflow
*   Improvements to Manual WU Integration
*   Improved Handling of Errant Data
*   Added Widgets for Wind, Rain & Light
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.50](https://weatherflow.github.io/Tempest/ios/2017/10/05/smart-weather-for-ios-v1.50.html)

-----------------------------------------------------------------------------------------------------------------------

October 05, 2017

*   Initial Public Release
*   General Performance Improvements & Bug Fixes

[Smart Weather for iOS - v1.46](https://weatherflow.github.io/Tempest/ios/2017/08/31/smart-weather-for-ios-v1.45.html)

-----------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Added functionality to support SKY devices
*   Added bucketed lightning values
*   Graph fixes related to year bucket
*   Adjustment to lightning card
*   Text scaling fix for rain card
*   Lightning label terminology changes
*   More concise widget labels to support smaller format devices
*   Fixed issue causing graphs to randomly jump to undesired place in time
*   Revised list view layout to better accommodate longer label descriptions
*   First time user experience improvements / fixes
*   Added logic to detect changes to location / devices when editing
*   Update rain card images
*   iPad Pro UI fix
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for iOS - v1.4](https://weatherflow.github.io/Tempest/ios/2017/07/10/smart-weather-for-ios-v1.4.html)

---------------------------------------------------------------------------------------------------------------------

July 10, 2017

*   Added functionality to support SKY devices
*   Graph Enhancement - RH added as separate graph
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for iOS - v1.3](https://weatherflow.github.io/Tempest/ios/2017/06/09/smart-weather-for-ios-v1.3.html)

---------------------------------------------------------------------------------------------------------------------

June 09, 2017

*   Dew point changes to graph
*   Pressure graph bug fix
*   Bug fix related to editing text elements causing cursor to move to the end of the entry
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for iOS - v1.21](https://weatherflow.github.io/Tempest/ios/2017/05/31/smart-weather-for-ios-v1.21.html)

-----------------------------------------------------------------------------------------------------------------------

May 31, 2017

*   Improvements to Widgets Related to Tapping to Open App
*   Improvements to Battery Voltage Card
*   Bug Fixes & Improvements to Lightning Card
*   Bug Fixes for Users with Multiple Hubs
*   General UI Improvements
*   Other Minor Bug Fixes

[Smart Weather for iOS - v1.20](https://weatherflow.github.io/Tempest/ios/2017/05/08/smart-weather-for-ios-v1.20.html)

-----------------------------------------------------------------------------------------------------------------------

May 08, 2017

*   Added Station Status Indicators (Online / Offline)
*   Added Station Status View with Diagnostic Information
*   Added Basic Sharing Functionality
*   Added Battery Card Item (replaces old diagnostics card)
*   Sea Level Pressure Fix for Pressure Widget
*   Lightning Tile Fix (WS/BLE Co-existence Fix)
*   Improved User Messaging
*   Improved App Start-up Performance
*   Performance Improvements
*   Minor Bug Fixes

[Smart Weather for iOS - v1.10](https://weatherflow.github.io/Tempest/ios/2017/04/24/smart-weather-for-ios-v1.10.html)

-----------------------------------------------------------------------------------------------------------------------

April 24, 2017

*   Added Lightning and Pressure Widgets
*   Added Widgets for iPad
*   Changed Widget Text to Black (from white)
*   Added Status Event Type Toggle to Settings (suppresses online/offline events)
*   Added Lightning and Pressure Widgets
*   Add Functionality to Show/Hide Password for Password Entry Fields
*   Station Detail Add/Edit UI Improvements
*   Resolved Initial Keyboard Presentation Lag
*   Add Support for Upside Down Portrait for iPad
*   Improved Instructions and UI for Add Device Process
*   Disabled Map Movement (center on current location) when Station’s Location Already Set
*   Fixed issue where Dialogs would not dismiss under certain circumstances
*   Resolved Graph Humidity Bug
*   Remove Ability to Create Account with Social Providers
*   Lightning Card Fixes

[Smart Weather for iOS - v1.01](https://weatherflow.github.io/Tempest/ios/2017/04/17/smart-weather-for-ios-v1.01.html)

-----------------------------------------------------------------------------------------------------------------------

April 17, 2017

*   Diagnostics Card
*   Lightning Card / Notification Fixes
*   Gradient Background Fix for iPad
*   Resolved Landscape Orientation Load Issue
*   Sea Level Pressure Graph Fix
*   Card / List Toggle Change
*   Replaced Toast-style Messages with Alert Dialogs
*   Fixed Issue with Right Aligned Text Entries Not Immediately Reflects Whitespace Entry
*   Improved Error Handling
*   UI Improvements
*   Bug Fixes

---

# Tempest Station Firmware

[Tempest Firmware - v143](https://weatherflow.github.io/Tempest/firmware/2020/07/01/tempest-firmware-v143.html)

----------------------------------------------------------------------------------------------------------------

July 01, 2020

*   Added temperature compensation for solar and wind effects
*   Fixed bug causing Hub to “forget” devices that were paired to it
*   Bug Fixes & Performance Improvements

[Tempest Firmware - v134](https://weatherflow.github.io/Tempest/firmware/2020/05/20/tempest-firmware-v134.html)

----------------------------------------------------------------------------------------------------------------

May 20, 2020

*   Improved UV, rain & lightning calibration settings for Tempest
*   Improved LED brightness control for rev G hubs
*   Updated default rain calibration for Tempest
*   Bug Fixes & Performance Improvements

[Smart Weather Firmware - v119](https://weatherflow.github.io/Tempest/firmware/2020/03/27/smart-weather-firmware-v119.html)

----------------------------------------------------------------------------------------------------------------------------

March 27, 2020

*   Fixed null UV index values.
*   Fixed issue with wind direction averages.
*   Fixed some Bluetooth crash issues.

[Smart Weather Firmware - v114](https://weatherflow.github.io/Tempest/firmware/2019/05/23/smart-weather-firmware-v114.html)

----------------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Added several new parameters to hub\_status message
*   Added filter to remove bad battery voltage readings.
*   Updates to rain-on-plate algorithm.

[Smart Weather Firmware - v105](https://weatherflow.github.io/Tempest/firmware/2019/03/05/smart-weather-firmware-v105.html)

----------------------------------------------------------------------------------------------------------------------------

March 05, 2019

*   Added diagnostic element to radio stats array in HUB status message
*   Fixed bug causing hub to occasionally return very large uptime values
*   Fixed low power mode toggle bug affecting some devices

[Smart Weather Firmware - v103](https://weatherflow.github.io/Tempest/firmware/2018/12/05/smart-weather-firmware-v103.html)

----------------------------------------------------------------------------------------------------------------------------

December 05, 2018

*   Improved wind speed QC algorithms
*   Improved RH overflow correction for older AIR units
*   Minor improvements to rain-on-plate algorithm
*   Improved factory testing routines

[Smart Weather Firmware - v98](https://weatherflow.github.io/Tempest/firmware/2018/10/26/smart-weather-firmware-v98.html)

--------------------------------------------------------------------------------------------------------------------------

October 26, 2018

*   added additional methods to upgrade firmware and set time for increased robustness
*   added watchdog to correct “blue LED lockup” issue.
*   added ability to use sensor devices to set the hub’s time when other methods (Internet, BLE) fail
*   corrected direction calculation for low wind speeds

[Smart Weather Firmware - v94](https://weatherflow.github.io/Tempest/firmware/2018/09/12/smart-weather-firmware-v94.html)

--------------------------------------------------------------------------------------------------------------------------

September 12, 2018

*   fixes a bug in one of the wind filters
*   adds improved rain sensor calibration algorithm

[Smart Weather Firmware - v91](https://weatherflow.github.io/Tempest/firmware/2018/08/14/smart-weather-firmware-v91.html)

--------------------------------------------------------------------------------------------------------------------------

August 14, 2018

*   improved backfill performance and reliability
*   fixed RH overflow issue (affecting about 10% of the AIR units)
*   corrected several wind speed filter issues (affecting a handful of SKY units)
*   improved watchdogs to reduce unnecessary reboots (affecting a small number of hubs)
*   fixed firmware upgrade issue (affecting a very small number of hubs)
*   major improvements to the networking stack, including:
    
    *   added framework for future IPv6 support
    *   more aggressive WiFi scanning when searching for networks
    *   better handling of Internet and WIFI connection/disconnection issues

[Smart Weather Firmware - v47](https://weatherflow.github.io/Tempest/firmware/2018/05/07/smart-weather-firmware-v47.html)

--------------------------------------------------------------------------------------------------------------------------

May 07, 2018

*   Increased rain precision to detect lighter rain.
*   Added radio frequency to device\_status message.
*   Improved hub to device transmission reliability.
*   Improved detection of Internet offline (but WiFi & local network still up) status to improve backfill process.
*   Improved UDP dropped packet issue when Internet offline (but WiFi & local network still up).
*   Support for older SKY firmware

[Smart Weather Firmware - v35](https://weatherflow.github.io/Tempest/firmware/2018/02/22/smart-weather-firmware-v35.html)

--------------------------------------------------------------------------------------------------------------------------

February 22, 2018

*   Added additional support for SKY
*   Added fixes and work-arounds for NTP issues
*   Improved firmware upgrade stability
*   Many minor bug fixes and stability improvements
*   Additions and fixes to UDP messages
*   Changed Hub LED to use simpler pattern:
    *   GREEN = online, connected via WiFi
    *   BLUE = online, connected via BLE
    *   RED = offline, not connected via WiFi or BLE
*   Improved WiFi stability
*   Added observation backfill capability to Hubs that support it
*   Added fix for RH overflow issue
*   Fixed bug where UDP broadcasts stop

[Smart Weather Firmware - v17](https://weatherflow.github.io/Tempest/firmware/2017/08/31/smart-weather-firmware-v17.html)

--------------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Added automatic firmware update capability
*   Added features to support the SKY
*   Added additional NTP servers
*   Improved WiFi connectivity
*   Improved stability
*   Minor bug fixes

[Smart Weather Firmware - v13](https://weatherflow.github.io/Tempest/firmware/2017/05/22/smart-weather-firmware-v13.html)

--------------------------------------------------------------------------------------------------------------------------

May 22, 2017

*   Added more diagnostic info.
*   Added a field calibration capability.
*   Changed DHCP hostname to “WeatherFlow”.
*   Enabled local UDP multicast.

[Smart Weather Firmware - v12](https://weatherflow.github.io/Tempest/firmware/2017/04/24/smart-weather-firmware-v12.html)

--------------------------------------------------------------------------------------------------------------------------

April 24, 2017

*   Fixed RH values greater than 100%
*   Fixed incorrect AIR firmware values

---

# Tempest for Android

[Smart Weather for Android - v5.6.12](https://weatherflow.github.io/Tempest/android/2024/03/08/smart-weather-for-android-v5.6.12.html)

---------------------------------------------------------------------------------------------------------------------------------------

March 08, 2024

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.6.5](https://weatherflow.github.io/Tempest/android/2023/12/22/smart-weather-for-android-v5.6.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 22, 2023

*   Fixed bug where power save mode would erroneously show as enabled

[Smart Weather for Android - v5.6.3](https://weatherflow.github.io/Tempest/android/2023/12/05/smart-weather-for-android-v5.6.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 05, 2023

Our team has been hard at work improving your Tempest experience, and this release brings a fresh look to your tablet display, making it even easier to access and enjoy your weather data. Users can now take advantage of a revamped station display designed specifically for tablets. Effortlessly check current conditions and forecast data on a larger screen, providing a more immersive and detailed view of your Tempest Weather System information. Enabling the new tablet display is a breeze. Open your Tempest App settings, scroll to Full-Screen Mode, and choose Standard.

[Smart Weather for Android - v5.5.3](https://weatherflow.github.io/Tempest/android/2023/11/08/smart-weather-for-android-v5.5.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

November 08, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.4.5](https://weatherflow.github.io/Tempest/android/2023/10/12/smart-weather-for-android-v5.4.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 12, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.4.4](https://weatherflow.github.io/Tempest/android/2023/09/18/smart-weather-for-android-v5.4.4.html)

-------------------------------------------------------------------------------------------------------------------------------------

September 18, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.3.1](https://weatherflow.github.io/Tempest/android/2023/06/28/smart-weather-for-android-v5.3.1.html)

-------------------------------------------------------------------------------------------------------------------------------------

June 28, 2023

*   Bug Fixes and Performance Enhancements

[Smart Weather for Android - v5.3.0](https://weatherflow.github.io/Tempest/android/2023/06/09/smart-weather-for-android-v5.3.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

June 09, 2023

*   Updated System Navigation Bar And Status Bar To Follow App Theme
*   Fixed Notification Icon Using Wrong Icon
*   Added Current Conditions App Action

[Smart Weather for Android - v5.2.13](https://weatherflow.github.io/Tempest/android/2023/04/10/smart-weather-for-android-v5.2.13.html)

---------------------------------------------------------------------------------------------------------------------------------------

April 10, 2023

#### UI & UX

*   Removed ScrollView layout and increased height of top buttons for better visibility.
*   Updated strings for the status page.
*   Adjusted default preference for theme to not solely rely on system theme.
*   Set text\_light color for icon tint in bottom navigation.

#### Code & Dependencies

*   Incremented app version.
*   Increased target SDK version for compatibility with newer devices.
*   Allowed using accum final value for max accum comparison if analysis type == 0.
*   Introduced constant for default theme.
*   Always set SDK listener, even if fine location is not granted.
*   Updated remaining API endpoints that were hard-coded.
*   Switched module level SDK build.gradle to Kotlin DSL.
*   Switched project level build.gradle to Kotlin Gradle DSL.
*   Moved Firebase code to wrapped suspending functions.
*   Changed dev URL to use HTTPS.
*   Removed cleartext rule from manifest.
*   Injected user repository into account actions.
*   Moved login and create account to interface.
*   Added is\_tempest\_one\_hub field to device locked network call.
*   Removed unused hello call.
*   Updated API endpoint to use dynamic URL based on build type.
*   Added utility to open an app by its package name.
*   Implemented local API key usage for better security.
*   Introduced user repository, service, and hello API call.
*   Added Dagger code for injecting the user repository.
*   Implemented new cell\_status endpoint and added cell service with Dagger support.
*   Fixed an issue with the gitignore file to properly ignore the local API key.

[Smart Weather for Android - v5.2.10](https://weatherflow.github.io/Tempest/android/2023/02/13/smart-weather-for-android-v5.2.10.html)

---------------------------------------------------------------------------------------------------------------------------------------

February 13, 2023

*   Fixed candlestick graph bars using wrong average
*   Fixed candlestick graph tooltip displaying wrong average under certain conditions
*   Fixed rain rate graph using wrong value to scale y-axis
*   Fixed lightning graph not displaying x-axis
*   Improved web socket connection stability

[Smart Weather for Android - v5.2.3](https://weatherflow.github.io/Tempest/android/2022/12/16/smart-weather-for-android-v5.2.3.html)

-------------------------------------------------------------------------------------------------------------------------------------

December 16, 2022

*   Improved compatibility with accessibility settings
    *   Screen readers should be able to select the Sign In button now
*   Added BLE Status to Station Status screen
*   Removed graph line interpolation
*   Fixed repeated values on graph Y-Axis
*   Fixed temperature in notification icon being cut off
*   Medium station widget should no longer get cut off
*   Improvements to widget stability
    *   Should get stuck less often hopefully

[Smart Weather for Android - v5.2.0](https://weatherflow.github.io/Tempest/android/2022/10/19/smart-weather-for-android-v5.2.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 19, 2022

We’re constantly working to improve your Tempest experience. In addition to bug fixes and performance enhancements, we have added National Weather Service Watches, Warnings and Advisories to this release.

If there is an active Watch, Warning or Advisory issued by the NWS for your station or a saved location, you will now see that information on the main forecast screen. Tapping the Watch, Warning or Advisory will show you the full detailed information as provided by the NWS (U.S. only).

[Smart Weather for Android - v5.1.0](https://weatherflow.github.io/Tempest/android/2022/10/03/smart-weather-for-android-v5.1.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

October 03, 2022

*   Updates to the status page
*   Dark mode bug fixes
*   Improved graph performance
*   Added temperature to ongoing notification icon

[Smart Weather for Android - v5.0.2](https://weatherflow.github.io/Tempest/android/2022/07/26/smart-weather-for-android-v5.0.2.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 26, 2022

*   Renamed the add location forecast preview button from “Save” to “Next”
*   Changed the graph data inspection label font to regular weight and color to white
*   Fixed bug where widgets would not refresh
*   Improved back navigation in History View
*   Improved back navigation in Settings
*   Fixed bug in Graph View where line graphs were not being drawn on top of all other data
*   Fixed UI issue where widget error text would not wrap and instead ellipsize, causing the full error message to be cut off

[Smart Weather for Android - v5.0.0](https://weatherflow.github.io/Tempest/android/2022/07/11/smart-weather-for-android-v5.0.0.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 11, 2022

Out with the blue, in with the new! In addition to a sleek new color scheme and design, the AI-powered Tempest app has added a number of exciting features. These include:

*   Weather Anywhere: Tempest forecasts are not just for Tempest stations anymore! You can now get a Tempest forecast for any location.
*   Widgets
*   Light / Dark Mode

[Smart Weather for Android - v4.6.79](https://weatherflow.github.io/Tempest/android/2022/04/04/smart-weather-for-android-v4.6.79.html)

---------------------------------------------------------------------------------------------------------------------------------------

April 04, 2022

*   Bug Fixes And Performance Enhancements

[Smart Weather for Android - v4.6.78](https://weatherflow.github.io/Tempest/android/2022/01/20/smart-weather-for-android-v4.6.78.html)

---------------------------------------------------------------------------------------------------------------------------------------

January 20, 2022

*   Bug Fixes And Performance Enhancements

[Smart Weather for Android - v4.6.75](https://weatherflow.github.io/Tempest/android/2021/12/21/smart-weather-for-android-v4.6.75.html)

---------------------------------------------------------------------------------------------------------------------------------------

December 21, 2021

*   Android 12 Bug Fixes
*   Other Bug Fixes And Performance Enhancements

[Smart Weather for Android - v4.6.72](https://weatherflow.github.io/Tempest/android/2021/11/16/smart-weather-for-android-v4.6.72.html)

---------------------------------------------------------------------------------------------------------------------------------------

November 16, 2021

*   Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.5](https://weatherflow.github.io/Tempest/android/2021/09/20/smart-weather-for-android-v4.6.5.html)

-------------------------------------------------------------------------------------------------------------------------------------

September 20, 2021

*   Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.2](https://weatherflow.github.io/Tempest/android/2021/07/27/smart-weather-for-android-v4.6.2.html)

-------------------------------------------------------------------------------------------------------------------------------------

July 27, 2021

*   Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.18](https://weatherflow.github.io/Tempest/android/2021/06/18/smart-weather-for-android-v4.6.18.html)

---------------------------------------------------------------------------------------------------------------------------------------

June 18, 2021

*   Fixed Delta-T issue
*   Bug fixes and performance enhancements

[Smart Weather for Android - v4.6.17](https://weatherflow.github.io/Tempest/android/2021/06/14/smart-weather-for-android-v4.6.17.html)

---------------------------------------------------------------------------------------------------------------------------------------

June 14, 2021

History View Expansion We have added weekly, monthly, yearly and all time statistics for your devices.

Better Forecast UI Improvements We streamlined the UI so that we are not displaying the same information in multiple places. We also added sunrise and sunset data to each forecast day.

Station Dashboard The Station Dashboard is now home to the More Current Conditions section that was previously on the Forecast view. This puts all of your detailed station information in one place.

[Smart Weather for Android - v4.5.8](https://weatherflow.github.io/Tempest/android/2021/05/01/smart-weather-for-android-v4.5.8.html)

-------------------------------------------------------------------------------------------------------------------------------------

May 01, 2021

*   Bug Fixes and Performance Improvements

[Smart Weather for Android - v4.5.7](https://weatherflow.github.io/Tempest/android/2021/04/29/smart-weather-for-android-v4.5.7.html)

-------------------------------------------------------------------------------------------------------------------------------------

April 29, 2021

*   Updated Tempest Weather System setup experience for new Tempest users.

[Smart Weather for Android - v4.4.51](https://weatherflow.github.io/Tempest/android/2021/03/18/smart-weather-for-android-v4.4.51md)

------------------------------------------------------------------------------------------------------------------------------------

March 18, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for Android - v4.4.2](https://weatherflow.github.io/Tempest/android/2021/02/23/smart-weather-for-android-v4.4.2md)

----------------------------------------------------------------------------------------------------------------------------------

February 23, 2021

This build includes bug fixes and performance enhancements.

[Smart Weather for Android - v4.39](https://weatherflow.github.io/Tempest/android/2021/02/04/smart-weather-for-android-v4.39.html)

-----------------------------------------------------------------------------------------------------------------------------------

February 04, 2021

This build includes primarily bug fixes and performance enhancements. Here are a few of the bugs we squashed with this release:

*   Fixed wind speed bar color issue
*   Fixed app crash for Android 4 users

[Smart Weather for Android - v4.36](https://weatherflow.github.io/Tempest/android/2021/01/12/smart-weather-for-android-v4.36.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 12, 2021

More Data at the top of the Main View

*   The “More Current Conditions” section at the bottom of the Main View has always been a great way to see more data from your station. In this release, we are moving a few of those key values up to the Top Box on the Main View. In addition to the wind and UV values, now you can quickly see the humidity, pressure and pressure trend right when you open the app. If it is raining or there is recent lightning in your area, you will also see those data points in the Top Box as well.

Rapid Wind Updates

*   Rapid Wind (wind speed & direction values reported every three seconds) is making its way to the Top Box of the Main View! In addition, the rapid wind display on the Card View has received an update to match the new rapid wind visualization on the Main View. Additional bug fixes and minor performance enhancements are also included in this build.

[Smart Weather for Android - v4.15](https://weatherflow.github.io/Tempest/android/2020/12/07/smart-weather-for-android-v4.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

December 07, 2020

*   Minor bug fixes

[Smart Weather for Android - v4.14](https://weatherflow.github.io/Tempest/android/2020/11/25/smart-weather-for-android-v4.14.html)

-----------------------------------------------------------------------------------------------------------------------------------

November 25, 2020

*   Minor bug fixes and performance enhancements

[Tempest for Android - v4.13](https://weatherflow.github.io/Tempest/android/2020/09/08/tempest-for-android-v4.13.html)

-----------------------------------------------------------------------------------------------------------------------

September 08, 2020

*   First time setup improvements
*   Fixed data display issue when receiving data over BLE

[Tempest for Android - v4.12](https://weatherflow.github.io/Tempest/android/2020/07/29/tempest-for-android-v4.12.html)

-----------------------------------------------------------------------------------------------------------------------

July 29, 2020

*   Lightning information from your station is now displayed on the forecast screen.
*   We fixed an issue where lightning information was sometimes not displaying correctly on the station dashboard screen.
*   Minor bug fixes and performance enhancements.

[Tempest for Android - v4.04](https://weatherflow.github.io/Tempest/android/2020/06/15/tempest-for-android-v4.04.html)

-----------------------------------------------------------------------------------------------------------------------

June 15, 2020

*   Improved forecast refreshing
*   Bug fixes and performance enhancements

[Tempest for Android - v4.02](https://weatherflow.github.io/Tempest/android/2020/06/03/tempest-for-android-v4.02.html)

-----------------------------------------------------------------------------------------------------------------------

June 03, 2020

*   Added share button to the Forecast
*   Added pressure trend to the More Current Conditions section of the Forecast
*   Minor battery graph updates
*   Other bug fixes and performance enhancements

[Tempest for Android - v4.00](https://weatherflow.github.io/Tempest/android/2020/05/13/tempest-for-android-v4.00.html)

-----------------------------------------------------------------------------------------------------------------------

May 13, 2020

Better, faster, stronger. That’s the updated Tempest Smart Weather app in a nutshell. Here are the specifics:

*   A New Look: We’ve updated the design of the app, including transitioning all branding from Smart Weather to Tempest.
*   A Better Forecast: WeatherFlow’s AI forecast system uses the best available models & our own in-house modeling suite. Leveraging your station data and powerful machine learning techniques, we’re able to guarantee a scary accurate forecast that only gets better over time.

[Smart Weather for Android - v3.40](https://weatherflow.github.io/Tempest/android/2020/01/06/smart-weather-for-android-v3.40.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 06, 2020

*   Updates to Feels Like / Dew Point Display Logic on Air Temperature Card
*   Changes to Support the Tempest Weather System
*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.25](https://weatherflow.github.io/Tempest/android/2019/09/26/smart-weather-for-android-v3.25.html)

-----------------------------------------------------------------------------------------------------------------------------------

September 26, 2019

*   Added Messages View - shows a historical list of all messages triggered for your station independent of whether the message was delivered via push notification
*   Added Always On Mode Option - prevents the device from sleeping while the app is active
*   Bug Fixes

[Smart Weather for Android - v3.2](https://weatherflow.github.io/Tempest/android/2019/07/30/smart-weather-for-android-v3.2.html)

---------------------------------------------------------------------------------------------------------------------------------

July 30, 2019

*   Added Rain Rate Graph
*   Improved Lightning Distance Display
*   Updated WU Settings Page
*   Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.10](https://weatherflow.github.io/Tempest/android/2019/06/12/smart-weather-for-android-v3.10.html)

-----------------------------------------------------------------------------------------------------------------------------------

June 12, 2019

*   Added Support for WeatherFlow RainCheck
*   Minor Bug Fixes & Performance Improvements

[Smart Weather for Android - v3.01](https://weatherflow.github.io/Tempest/android/2019/05/23/smart-weather-for-android-v3.01.html)

-----------------------------------------------------------------------------------------------------------------------------------

May 23, 2019

*   Tabbed Navigation
*   History View
*   Station Map
*   Ability to replace device
*   Ability to set wind direction offset
*   Fix station switcher not properly updating data in list view

[Smart Weather for Android - v2.60](https://weatherflow.github.io/Tempest/android/2019/04/19/smart-weather-for-android-v2.60.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 19, 2019

*   Updated setup for solar panel
*   Updated forecast endpoint
*   Added ability to set manual SSID
*   More accurate replace battery voltage threshhold for sky
*   Better pressure sanity check

[Smart Weather for Android - v2.18](https://weatherflow.github.io/Tempest/android/2018/11/26/smart-weather-for-android-v2.18.html)

-----------------------------------------------------------------------------------------------------------------------------------

November 26, 2018

*   Offline mode improvements

[Smart Weather for Android - v2.15](https://weatherflow.github.io/Tempest/android/2018/08/24/smart-weather-for-android-v2.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 24, 2018

*   Rain Card & Graph Improvements
*   Bluetooth Communication & Reliability Improvements
*   Other Bug Fixes & UI improvements

[Smart Weather for Android - v1.70](https://weatherflow.github.io/Tempest/android/2018/02/07/smart-weather-for-android-v1.70.html)

-----------------------------------------------------------------------------------------------------------------------------------

February 07, 2018

*   Improvements to Lightning Graph
*   Bug Fixes & Other Performance Improvements

[Smart Weather for Android - v1.65](https://weatherflow.github.io/Tempest/android/2018/01/19/smart-weather-for-android-v1.65.html)

-----------------------------------------------------------------------------------------------------------------------------------

January 19, 2018

*   Added rain accumulation line to rain graph
*   Follow system auto-rotate setting
*   Bug fixes and UI improvements

[Smart Weather for Android - v1.64](https://weatherflow.github.io/Tempest/android/2017/12/13/smart-weather-for-android-v1.64.html)

-----------------------------------------------------------------------------------------------------------------------------------

December 13, 2017

*   Resolved Sorting Related Bugs
*   Minor Improvements and Bug Fixes

[Smart Weather for Android - v1.44](https://weatherflow.github.io/Tempest/android/2017/08/31/smart-weather-for-android-v1.44.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 31, 2017

*   Candlestick charts should now properly draw the average bar
*   Rain rate icon changes to reflect the improved rain rate word ranges introduced in the last update
*   Added dialog to warn about unsaved changes in editable fields
*   Specify average bar size in pixels per supported screen size
*   Fix UV and Lux candlestick loss of float precision when calculating open and close
*   Allow adding a device from another station to a new station
*   Use proper delta-t conversion
*   If diagnostic card enabled, automatically add new diagnostic card when a new device is added
*   Fix status list ordering bug with multiple devices
*   Fix card text clipping issue when system text size preference is large
*   Minor improvements and bug fixes

[Smart Weather for Android - v1.40](https://weatherflow.github.io/Tempest/android/2017/08/10/smart-weather-for-android-v1.40.html)

-----------------------------------------------------------------------------------------------------------------------------------

August 10, 2017

*   Sensor status added to diagnostic list
*   Functionality added to support SKY devices
*   RH added as separate graph
*   Lightning card improvements - icon changes color when lightning is detected within the last 5 minutes
*   Rain card improvements - improved rain rate word ranges
*   Battery card now shows battery state (good or replace)
*   UV, Brightness, and Solar Radiation as separate graphs
*   Zero y axis minimum for UV/Brightness/Solar Radiation
*   Less top padding for wind graph
*   Wind arrows no longer overlap with lines
*   Wind arrows no longer appear on the bottom of the graph
*   Fixed SKY icon to be more consistent with AIR icon
*   Already paired devices no longer show up on nearby devices list
*   Minor formatting fixes
*   Minor performance improvements and bug fixes

[Smart Weather for Android - v1.15](https://weatherflow.github.io/Tempest/android/2017/06/09/smart-weather-for-android-v1.15.html)

-----------------------------------------------------------------------------------------------------------------------------------

June 09, 2017

*   No longer persists hub reconnection after sign out
*   Add battery card
*   Add battery graph
*   Improved WebSocket reconnect strategy
*   Socket is closed instead of suppressed when app is in background
*   Show “Last Strike” label in card view
*   Fix bug preventing lightning strike card from updating from lightning events
*   Add lightning strike animation
*   Add ability to sort cards
*   Minor performance improvements

[Smart Weather for Android - v1.10](https://weatherflow.github.io/Tempest/android/2017/05/08/smart-weather-for-android-v1.10.html)

-----------------------------------------------------------------------------------------------------------------------------------

May 08, 2017

*   Bluetooth improvements
*   Fixed bug where wifi setup loading dialog would loop indefinitely
*   Fixed bug where firmware setup loading dialog would get “stuck”, even if firmware update was successful
*   Fixed bug where names with spaces would cause unknown errors on Wunderground setup on certain Android versions
*   Add hide/show button for password fields
*   Remove ability to create account with social providers
*   When editing a station’s location, no longer moves location to current location if it has been set previously
*   Add reverse portrait/landscape support
*   Fix notification bug on certain Android versions
*   Add device status notification setting
*   Locations without hubs no longer show “WiFi Setup”, “Advanced”, and WU linking options
*   Increase card view text size for certain screen sizes
*   Changing graph resolution from a bucket with data to one without data shows ‘no data available’ message
*   Add toolbar card with share and diagnostics buttons
*   Add station status indicator on toolbar card, stations list, edit station screen, and station switcher
*   Station settings grouping change
*   Add default units to height above ground setting
*   Improved UI in edit station screen
*   Improved UI in edit device screen
*   Improved UI in station switcher
*   Fix pressure needle rotation
*   Minor unit formatting fixes
*   Other minor bug fixes

[Smart Weather for Android - v0.93](https://weatherflow.github.io/Tempest/android/2017/04/14/smart-weather-for-android-v0.93.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 14, 2017

*   Improved runtime pemissions requests
*   Fix bug where duplicate stations were being created during setup
*   Fix bug that would cause Sign Out button to sometimes appear twice during setup
*   Remember hub after serial has been entered in device setup
*   Ask hub for already paired devices during setup
*   Added Bluetooth low energy compatibility checks

[Smart Weather for Android - v0.92](https://weatherflow.github.io/Tempest/android/2017/04/10/smart-weather-for-android-v0.92.html)

-----------------------------------------------------------------------------------------------------------------------------------

April 10, 2017

*   Improved background authentication token refresh
*   Add sign out button to setup
*   Add refresh button to wifi setup
*   Go back to station screen after a firmware upgrade
*   Some improvements to prevent showing old data when there is something newer available

---

# WeatherFlow Smart Weather UDP Reference - v114

UDP Versions v17 v30 v35 v40 v47 v70 v80 v82 v85 v87 v91 v94 v96 v98 v103 v105 v112 v114 v119 v143 v170 v171

Change Log Since [105](https://weatherflow.github.io/Tempest/api/udp/v105)

---------------------------------------------------------------------------

### hub\_status

*   Additional item added to internal use mqtt\_stats array
*   fs field changed from string to array
*   Additional items added to internal use fs array
*   Added radio status flags to the radio\_status field

UDP Basics
----------

The WeatherFlow Smart Weather Station's hub broadcasts UDP messages over port 50222 on the local network.

Messages
--------

### Rain Start Event \[type = evt\_precip\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"evt_precip",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445]
    	}
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |

### Lightning Strike Event \[type = evt\_strike\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"evt_strike",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445,27,3848]
    	}
    
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Distance | km  |
| 2   | Energy |     |

### Rapid Wind \[type = rapid\_wind\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"rapid_wind",
    	  "hub_sn": "HB-00000001",
    	  "ob":[1493322445,2.3,128]
    	}
    
    
    	

#### Ob Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Speed | mps |
| 2   | Wind Direction | Degrees |

### Observation (AIR) \[type = obs\_air\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"obs_air",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493164835,835.0,10.0,45,0,0,3.46,1]],
    	  "firmware_revision": 17
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Station Pressure | MB  |
| 2   | Air Temperature | C   |
| 3   | Relative Humidity | %   |
| 4   | Lightning Strike Count |     |
| 5   | Lightning Strike Avg Distance | km  |
| 6   | Battery |     |
| 7   | Report Interval | Minutes |

### Observation (Sky) \[type = obs\_sky\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"obs_sky",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493321340,9000,10,0.0,2.6,4.6,7.4,187,3.12,1,130,null,0,3]],
    	  "firmware_revision": 29
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Illuminance | Lux |
| 2   | UV  | Index |
| 3   | Rain amount over previous minute | mm  |
| 4   | Wind Lull (minimum 3 second sample) | m/s |
| 5   | Wind Avg (average over report interval) | m/s |
| 6   | Wind Gust (maximum 3 second sample) | m/s |
| 7   | Wind Direction | Degrees |
| 8   | Battery | Volts |
| 9   | Report Interval | Minutes |
| 10  | Solar Radiation | W/m^2 |
| 11  | Local Day Rain Accumulation | mm  |
| 12  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 13  | Wind Sample Interval | seconds |

### Status (device) \[type = device\_status\]

    	{
    	  "serial_number": "AR-00004049",
    	  "type": "device_status",
    	  "hub_sn": "HB-00000001",
    	  "timestamp": 1510855923,
    	  "uptime": 2189,
    	  "voltage": 3.50,
    	  "firmware_revision": 17,
    	  "rssi": -17,
    	  "hub_rssi": -87,
    	  "sensor_status": 0,
    	  "debug": 0
    	}

#### Sensor Status (sensor\_status) is a set of bit flags, encoded in a single decimal value, each bit represents the following

| Binary Value | Applies to device | Status description |
| --- | --- | --- |
| 0b000000000 | All | Sensors OK |
| 0b000000001 | AIR, Tempest | lightning failed |
| 0b000000010 | AIR, Tempest | lightning noise |
| 0b000000100 | AIR, Tempest | lightning disturber |
| 0b000001000 | AIR, Tempest | pressure failed |
| 0b000010000 | AIR, Tempest | temperature failed |
| 0b000100000 | AIR, Tempest | rh failed |
| 0b001000000 | SKY, Tempest | wind failed |
| 0b010000000 | SKY, Tempest | precip failed |
| 0b100000000 | SKY, Tempest | light/uv failed |

#### any bits above 0b100000000 are reserved for internal use and should be ignored

#### debug

| Value | Description |
| --- | --- |
| 0   | Debugging is disabled |
| 1   | Debugging is enabled |

### Status (hub) \[type = hub\_status\]

    	{
    	  "serial_number":"HB-00000001",
    	  "type":"hub_status",
    	  "firmware_revision":"35",
    	  "uptime":1670133,
    	  "rssi":-62,
    	  "timestamp":1495724691,
    	  "reset_flags": "BOR,PIN,POR",
    	  "seq": 48,
    	  "fs": [1, 0, 15675411, 524288],
              "radio_stats": [2, 1, 0, 3],
              "mqtt_stats": [1, 0]
    	}

#### Reset Flag Values

|     |     |
| --- | --- |
| Value | Description |
| BOR | Brownout reset |
| PIN | PIN reset |
| POR | Power reset |
| SFT | Software reset |
| WDG | Watchdog reset |
| WWD | Window watchdog reset |
| LPW | Low-power reset |

#### fs

For internal use.

#### radio\_stats

| Index | Field |
| --- | --- |
| 0   | Version |
| 1   | Reboot Count |
| 2   | I2C Bus Error Count |
| 3   | Radio Status (0 = Radio Off, 1 = Radio On, 3 = Radio Active) |

#### mqtt\_stats

For internal use.

---

# WeatherFlow Smart Weather UDP Reference - v105

UDP Versions v17 v30 v35 v40 v47 v70 v80 v82 v85 v87 v91 v94 v96 v98 v103 v105 v112 v114 v119 v143 v170 v171

UDP Basics
----------

The WeatherFlow Smart Weather Station's hub broadcasts UDP messages over port 50222 on the local network.

Messages
--------

### Rain Start Event \[type = evt\_precip\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"evt_precip",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445]
    	}
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |

### Lightning Strike Event \[type = evt\_strike\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"evt_strike",
    	  "hub_sn": "HB-00000001",
    	  "evt":[1493322445,27,3848]
    	}
    
    
    	

#### Evt Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Distance | km  |
| 2   | Energy |     |

### Rapid Wind \[type = rapid\_wind\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"rapid_wind",
    	  "hub_sn": "HB-00000001",
    	  "ob":[1493322445,2.3,128]
    	}
    
    
    	

#### Ob Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Wind Speed | mps |
| 2   | Wind Direction | Degrees |

### Observation (AIR) \[type = obs\_air\]

    	
    	{
    	  "serial_number": "AR-00004049",
    	  "type":"obs_air",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493164835,835.0,10.0,45,0,0,3.46,1]],
    	  "firmware_revision": 17
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Station Pressure | MB  |
| 2   | Air Temperature | C   |
| 3   | Relative Humidity | %   |
| 4   | Lightning Strike Count |     |
| 5   | Lightning Strike Avg Distance | km  |
| 6   | Battery |     |
| 7   | Report Interval | Minutes |

### Observation (Sky) \[type = obs\_sky\]

    	
    	{
    	  "serial_number": "SK-00008453",
    	  "type":"obs_sky",
    	  "hub_sn": "HB-00000001",
    	  "obs":[[1493321340,9000,10,0.0,2.6,4.6,7.4,187,3.12,1,130,null,0,3]],
    	  "firmware_revision": 29
    	}
    
    
    	

#### Observation Value Layout

| Index | Field | Units |
| --- | --- | --- |
| 0   | Time Epoch | Seconds |
| 1   | Illuminance | Lux |
| 2   | UV  | Index |
| 3   | Rain amount over previous minute | mm  |
| 4   | Wind Lull (minimum 3 second sample) | m/s |
| 5   | Wind Avg (average over report interval) | m/s |
| 6   | Wind Gust (maximum 3 second sample) | m/s |
| 7   | Wind Direction | Degrees |
| 8   | Battery | Volts |
| 9   | Report Interval | Minutes |
| 10  | Solar Radiation | W/m^2 |
| 11  | Local Day Rain Accumulation | mm  |
| 12  | Precipitation Type | 0 = none, 1 = rain, 2 = hail |
| 13  | Wind Sample Interval | seconds |

### Status (device) \[type = device\_status\]

    	{
    	  "serial_number": "AR-00004049",
    	  "type": "device_status",
    	  "hub_sn": "HB-00000001",
    	  "timestamp": 1510855923,
    	  "uptime": 2189,
    	  "voltage": 3.50,
    	  "firmware_revision": 17,
    	  "rssi": -17,
    	  "hub_rssi": -87,
    	  "sensor_status": 0,
    	  "debug": 0
    	}

#### Sensor Status (sensor\_status) is a set of bit flags, encoded in a single decimal value, each bit represents the following

| Binary Value | Applies to device | Status description |
| --- | --- | --- |
| 0b000000000 | All | Sensors OK |
| 0b000000001 | AIR, Tempest | lightning failed |
| 0b000000010 | AIR, Tempest | lightning noise |
| 0b000000100 | AIR, Tempest | lightning disturber |
| 0b000001000 | AIR, Tempest | pressure failed |
| 0b000010000 | AIR, Tempest | temperature failed |
| 0b000100000 | AIR, Tempest | rh failed |
| 0b001000000 | SKY, Tempest | wind failed |
| 0b010000000 | SKY, Tempest | precip failed |
| 0b100000000 | SKY, Tempest | light/uv failed |

#### any bits above 0b100000000 are reserved for internal use and should be ignored

#### debug

| Value | Description |
| --- | --- |
| 0   | Debugging is disabled |
| 1   | Debugging is enabled |

### Status (hub) \[type = hub\_status\]

    	{
    	  "serial_number":"HB-00000001",
    	  "type":"hub_status",
    	  "firmware_revision":"35",
    	  "uptime":1670133,
    	  "rssi":-62,
    	  "timestamp":1495724691,
    	  "reset_flags": "BOR,PIN,POR",
    	  "seq": 48,
    	  "fs": "0,0",
              "radio_stats": [1, 1, 0],
              "mqtt_stats": [1]
    	}

#### Reset Flag Values

|     |     |
| --- | --- |
| Value | Description |
| BOR | Brownout reset |
| PIN | PIN reset |
| POR | Power reset |
| SFT | Software reset |
| WDG | Watchdog reset |
| WWD | Window watchdog reset |
| LPW | Low-power reset |

#### fs

For internal use.

#### radio\_stats

| Index | Field |
| --- | --- |
| 0   | Version |
| 1   | Reboot Count |
| 2   | I2C Bus Error Count |

#### mqtt\_stats

For internal use.

---

