# Table of Contents

- [FastAPI Users](#fastapi-users)
- [Redirecting](#redirecting)
- [Installation - FastAPI Users](#installation-fastapi-users)
- [Overview - FastAPI Users](#overview-fastapi-users)
- [SQLAlchemy - FastAPI Users](#sqlalchemy-fastapi-users)
- [Create a backend - FastAPI Users](#create-a-backend-fastapi-users)
- [Introduction - FastAPI Users](#introduction-fastapi-users)
- [Beanie - FastAPI Users](#beanie-fastapi-users)
- [UserManager - FastAPI Users](#usermanager-fastapi-users)
- [Schemas - FastAPI Users](#schemas-fastapi-users)
- [Auth router - FastAPI Users](#auth-router-fastapi-users)
- [Introduction - FastAPI Users](#introduction-fastapi-users)
- [Register routes - FastAPI Users](#register-routes-fastapi-users)
- [Verify router - FastAPI Users](#verify-router-fastapi-users)
- [Users router - FastAPI Users](#users-router-fastapi-users)
- [Reset password router - FastAPI Users](#reset-password-router-fastapi-users)
- [Password hash - FastAPI Users](#password-hash-fastapi-users)
- [Full example - FastAPI Users](#full-example-fastapi-users)
- [Routes - FastAPI Users](#routes-fastapi-users)
- [Get current user - FastAPI Users](#get-current-user-fastapi-users)
- [Flow - FastAPI Users](#flow-fastapi-users)
- [Create a user programmatically - FastAPI Users](#create-a-user-programmatically-fastapi-users)
- [0.8.x ➡️ 1.x.x - FastAPI Users](#0-8-x-1-x-x-fastapi-users)
- [1.x.x ➡️ 2.x.x - FastAPI Users](#1-x-x-2-x-x-fastapi-users)
- [2.x.x ➡️ 3.x.x - FastAPI Users](#2-x-x-3-x-x-fastapi-users)
- [3.x.x ➡️ 4.x.x - FastAPI Users](#3-x-x-4-x-x-fastapi-users)
- [4.x.x ➡️ 5.x.x - FastAPI Users](#4-x-x-5-x-x-fastapi-users)
- [6.x.x ➡️ 7.x.x - FastAPI Users](#6-x-x-7-x-x-fastapi-users)
- [7.x.x ➡️ 8.x.x - FastAPI Users](#7-x-x-8-x-x-fastapi-users)
- [8.x.x ➡️ 9.x.x - FastAPI Users](#8-x-x-9-x-x-fastapi-users)
- [9.x.x ➡️ 10.x.x - FastAPI Users](#9-x-x-10-x-x-fastapi-users)
- [OAuth2 - FastAPI Users](#oauth2-fastapi-users)
- [Page not found · GitHub Pages](#page-not-found-github-pages)

---

# FastAPI Users

 



FastAPI Users[¶](#fastapi-users "Permanent link")

==================================================

![FastAPI Users](https://raw.githubusercontent.com/fastapi-users/fastapi-users/master/logo.svg?sanitize=true)

_Ready-to-use and customizable users management for FastAPI_

[![build](https://github.com/fastapi-users/fastapi-users/workflows/Build/badge.svg)](https://github.com/fastapi-users/fastapi-users/actions)
 [![codecov](https://codecov.io/gh/fastapi-users/fastapi-users/branch/master/graph/badge.svg)](https://codecov.io/gh/fastapi-users/fastapi-users)
 [![PyPI version](https://badge.fury.io/py/fastapi-users.svg)](https://badge.fury.io/py/fastapi-users)
 [![Downloads](https://pepy.tech/badge/fastapi-users)](https://pepy.tech/project/fastapi-users)

[![All Contributors](https://img.shields.io/badge/all_contributors-81-orange.svg?style=flat-square)](#contributors-)

 [![Subscribe](https://polar.sh/embed/subscribe.svg?org=frankie567)](https://polar.sh/frankie567)

* * *

**Documentation**: [https://fastapi-users.github.io/fastapi-users/](https://fastapi-users.github.io/fastapi-users/)

**Source Code**: [https://github.com/fastapi-users/fastapi-users](https://github.com/fastapi-users/fastapi-users)

* * *

Add quickly a registration and authentication system to your [FastAPI](https://fastapi.tiangolo.com/)
 project. **FastAPI Users** is designed to be as customizable and adaptable as possible.

Features[¶](#features "Permanent link")

----------------------------------------

*    Extensible base user model
*    Ready-to-use register, login, reset password and verify e-mail routes
*    Ready-to-use social OAuth2 login flow
*    Dependency callables to inject current user in route
*    Pluggable password validation
*    Customizable database backend
    *    [SQLAlchemy ORM async](https://docs.sqlalchemy.org/en/14/orm/extensions/asyncio.html)
         included
    *    [MongoDB with Beanie ODM](https://github.com/roman-right/beanie/)
         included
*    Multiple customizable authentication backends
    *    Transports: Authorization header, Cookie
    *    Strategies: JWT, Database, Redis
*    Full OpenAPI schema support, even with several authentication backends

In a hurry? Discover Fief, the open-source authentication platform[¶](#in-a-hurry-discover-fief-the-open-source-authentication-platform "Permanent link")

----------------------------------------------------------------------------------------------------------------------------------------------------------

![Fief](https://raw.githubusercontent.com/fief-dev/.github/main/logos/logo-full-red.svg?sanitize=true)

![Fief](https://www.fief.dev/illustrations/guard-right.svg)

**Implementing registration, login, social auth is hard and painful. We know it. With our highly secure and open-source users management platform, you can focus on your app while staying in control of your users data.**

*   **Open-source**: self-host it for free
*   **Pre-built login and registration pages**: clean and fast authentication so you don't have to do it yourself
*   **Official Python client** with built-in **FastAPI integration**

  

[![](https://md-buttons.francoisvoron.com/button.svg?text=Get%20started&bg=f43f5e&w=150&px=30)](https://www.fief.dev)

It's free and open-source

Contributors and sponsors ✨☕️[¶](#contributors-and-sponsors "Permanent link")

------------------------------------------------------------------------------

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)
):

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| [![François Voron](https://avatars.githubusercontent.com/u/1144727?v=4?s=100)  <br>**François Voron**](http://francoisvoron.com)<br>  <br>[🚧](#maintenance-frankie567 "Maintenance") | [![Paolo Dina](https://avatars.githubusercontent.com/u/1157401?v=4?s=100)  <br>**Paolo Dina**](https://github.com/paolodina)<br>  <br>[💵](#financial-paolodina "Financial")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=paolodina "Code") | [![Dmytro Ohorodnik](https://avatars.githubusercontent.com/u/46085159?v=4?s=100)  <br>**Dmytro Ohorodnik**](https://freelancehunt.com/freelancer/slado122.html)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Aslado122 "Bug reports") | [![Matthew D. Scholefield](https://avatars.githubusercontent.com/u/5875019?v=4?s=100)  <br>**Matthew D. Scholefield**](http://matthewscholefield.github.io)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3AMatthewScholefield "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=MatthewScholefield "Code") | [![roywes](https://avatars.githubusercontent.com/u/3861579?v=4?s=100)  <br>**roywes**](https://github.com/roywes)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Aroywes "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=roywes "Code") | [![Satwik Kansal](https://avatars.githubusercontent.com/u/10217535?v=4?s=100)  <br>**Satwik Kansal**](https://devwriters.com)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=satwikkansal "Documentation") | [![Edd Salkield](https://avatars.githubusercontent.com/u/30939717?v=4?s=100)  <br>**Edd Salkield**](https://github.com/eddsalkield)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=eddsalkield "Code")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=eddsalkield "Documentation") |
| [![mark-todd](https://avatars.githubusercontent.com/u/60781787?v=4?s=100)  <br>**mark-todd**](https://github.com/mark-todd)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=mark-todd "Code")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=mark-todd "Documentation") | [![lill74](https://avatars.githubusercontent.com/u/12353597?v=4?s=100)  <br>**lill74**](https://github.com/lill74)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Alill74 "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=lill74 "Code")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=lill74 "Documentation") | [![SelfhostedPro](https://avatars.githubusercontent.com/u/66331933?v=4?s=100)  <br>**SelfhostedPro**](https://yacht.sh)<br>  <br>[🛡️](#security-SelfhostedPro "Security")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=SelfhostedPro "Code") | [![Oskar Gmerek](https://avatars.githubusercontent.com/u/53402105?v=4?s=100)  <br>**Oskar Gmerek**](https://github.com/oskar-gmerek)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=oskar-gmerek "Documentation") | [![Martin Collado](https://avatars.githubusercontent.com/u/61695048?v=4?s=100)  <br>**Martin Collado**](https://github.com/mcolladoio)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Amcolladoio "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=mcolladoio "Code") | [![Eric Lopes](https://avatars.githubusercontent.com/u/11466701?v=4?s=100)  <br>**Eric Lopes**](https://github.com/nullhack)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=nullhack "Documentation")<br> [🛡️](#security-nullhack "Security") | [![Beau Breon](https://avatars.githubusercontent.com/u/618839?v=4?s=100)  <br>**Beau Breon**](https://github.com/rnd42)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=rnd42 "Code") |
| [![Niyas Mohammed](https://avatars.githubusercontent.com/u/2761491?v=4?s=100)  <br>**Niyas Mohammed**](https://github.com/niazangels)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=niazangels "Documentation") | [![prostomarkeloff](https://avatars.githubusercontent.com/u/28061158?v=4?s=100)  <br>**prostomarkeloff**](https://github.com/prostomarkeloff)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=prostomarkeloff "Documentation")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=prostomarkeloff "Code") | [![Marius Mézerette](https://avatars.githubusercontent.com/u/952685?v=4?s=100)  <br>**Marius Mézerette**](https://www.linkedin.com/in/mariusmezerette/)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3AMariusMez "Bug reports")<br> [🤔](#ideas-MariusMez "Ideas, Planning, & Feedback") | [![Nickolas Grigoriadis](https://avatars.githubusercontent.com/u/1309160?v=4?s=100)  <br>**Nickolas Grigoriadis**](https://github.com/grigi)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Agrigi "Bug reports") | [![Open Data Coder](https://avatars.githubusercontent.com/u/7386680?v=4?s=100)  <br>**Open Data Coder**](https://opendatacoder.me)<br>  <br>[🤔](#ideas-p3t3r67x0 "Ideas, Planning, & Feedback") | [![Mohammed Alshehri](https://avatars.githubusercontent.com/u/542855?v=4?s=100)  <br>**Mohammed Alshehri**](https://www.dralshehri.com/)<br>  <br>[🤔](#ideas-dralshehri "Ideas, Planning, & Feedback") | [![Tyler Renelle](https://avatars.githubusercontent.com/u/195202?v=4?s=100)  <br>**Tyler Renelle**](https://www.linkedin.com/in/lefnire/)<br>  <br>[🤔](#ideas-lefnire "Ideas, Planning, & Feedback") |
| [![collerek](https://avatars.githubusercontent.com/u/16324238?v=4?s=100)  <br>**collerek**](https://github.com/collerek)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=collerek "Code") | [![Robert Bracco](https://avatars.githubusercontent.com/u/47190785?v=4?s=100)  <br>**Robert Bracco**](https://github.com/rbracco)<br>  <br>[💵](#financial-rbracco "Financial") | [![Augusto Herrmann](https://avatars.githubusercontent.com/u/1058414?v=4?s=100)  <br>**Augusto Herrmann**](https://herrmann.tech)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=augusto-herrmann "Documentation") | [![Smithybrewer](https://avatars.githubusercontent.com/u/57669591?v=4?s=100)  <br>**Smithybrewer**](https://github.com/Smithybrewer)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3ASmithybrewer "Bug reports") | [![silllli](https://avatars.githubusercontent.com/u/9334305?v=4?s=100)  <br>**silllli**](https://github.com/silllli)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=silllli "Documentation") | [![alexferrari88](https://avatars.githubusercontent.com/u/49028826?v=4?s=100)  <br>**alexferrari88**](https://github.com/alexferrari88)<br>  <br>[💵](#financial-alexferrari88 "Financial") | [![sandalwoodbox](https://avatars.githubusercontent.com/u/80227316?v=4?s=100)  <br>**sandalwoodbox**](https://github.com/sandalwoodbox)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Asandalwoodbox "Bug reports")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=sandalwoodbox "Documentation") |
| [![Vlad Hoi](https://avatars.githubusercontent.com/u/33840957?v=4?s=100)  <br>**Vlad Hoi**](https://github.com/vladhoi)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=vladhoi "Documentation") | [![Joe Nudell](https://avatars.githubusercontent.com/u/1069899?v=4?s=100)  <br>**Joe Nudell**](https://github.com/jnu)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Ajnu "Bug reports") | [![Ben](https://avatars.githubusercontent.com/u/1540682?v=4?s=100)  <br>**Ben**](https://github.com/cosmosquark)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=cosmosquark "Code") | [![BoYanZh](https://avatars.githubusercontent.com/u/32470225?v=4?s=100)  <br>**BoYanZh**](https://github.com/BoYanZh)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=BoYanZh "Documentation") | [![David Brochart](https://avatars.githubusercontent.com/u/4711805?v=4?s=100)  <br>**David Brochart**](https://github.com/davidbrochart)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=davidbrochart "Documentation")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=davidbrochart "Code") | [![Daan Beverdam](https://avatars.githubusercontent.com/u/13944585?v=4?s=100)  <br>**Daan Beverdam**](https://www.daanbeverdam.com)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=daanbeverdam "Code") | [![Stéphane Raimbault](https://avatars.githubusercontent.com/u/1815?v=4?s=100)  <br>**Stéphane Raimbault**](http://sralab.com)<br>  <br>[⚠️](https://github.com/fastapi-users/fastapi-users/commits?author=stephane "Tests")<br> [🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Astephane "Bug reports") |
| [![Sondre Lillebø Gundersen](https://avatars.githubusercontent.com/u/25310870?v=4?s=100)  <br>**Sondre Lillebø Gundersen**](https://github.com/sondrelg)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=sondrelg "Documentation") | [![Maxim](https://avatars.githubusercontent.com/u/1503245?v=4?s=100)  <br>**Maxim**](https://github.com/maximka1221)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=maximka1221 "Documentation")<br> [🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Amaximka1221 "Bug reports") | [![scottdavort](https://avatars.githubusercontent.com/u/58272461?v=4?s=100)  <br>**scottdavort**](https://github.com/scottdavort)<br>  <br>[💵](#financial-scottdavort "Financial") | [![John Dukewich](https://avatars.githubusercontent.com/u/37190801?v=4?s=100)  <br>**John Dukewich**](https://github.com/jdukewich)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=jdukewich "Documentation") | [![Yasser Tahiri](https://avatars.githubusercontent.com/u/52716203?v=4?s=100)  <br>**Yasser Tahiri**](http://yezz.me)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=yezz123 "Code") | [![Brandon H. Goding](https://avatars.githubusercontent.com/u/17888319?v=4?s=100)  <br>**Brandon H. Goding**](https://www.brandongoding.tech)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=BrandonGoding "Code")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=BrandonGoding "Documentation") | [![PovilasK](https://avatars.githubusercontent.com/u/7852173?v=4?s=100)  <br>**PovilasK**](https://github.com/PovilasKud)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=PovilasKud "Code") |
| [![Just van den Broecke](https://avatars.githubusercontent.com/u/582630?v=4?s=100)  <br>**Just van den Broecke**](http://justobjects.nl)<br>  <br>[💵](#financial-justb4 "Financial") | [![jakemanger](https://avatars.githubusercontent.com/u/52495554?v=4?s=100)  <br>**jakemanger**](https://github.com/jakemanger)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Ajakemanger "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=jakemanger "Code") | [![Ikko Ashimine](https://avatars.githubusercontent.com/u/22633385?v=4?s=100)  <br>**Ikko Ashimine**](https://bandism.net/)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=eltociear "Code") | [![Matyáš Richter](https://avatars.githubusercontent.com/u/20258539?v=4?s=100)  <br>**Matyáš Richter**](https://github.com/matyasrichter)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=matyasrichter "Code") | [![Hazedd](https://avatars.githubusercontent.com/u/20663495?v=4?s=100)  <br>**Hazedd**](https://github.com/Hazedd)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3AHazedd "Bug reports")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=Hazedd "Documentation") | [![Luis Roel](https://avatars.githubusercontent.com/u/44761184?v=4?s=100)  <br>**Luis Roel**](https://github.com/luisroel91)<br>  <br>[💵](#financial-luisroel91 "Financial") | [![Alexandr Makurin](https://avatars.githubusercontent.com/u/43097289?v=4?s=100)  <br>**Alexandr Makurin**](https://ae-mc.ru)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=Ae-Mc "Code")<br> [🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3AAe-Mc "Bug reports") |
| [![Leon Thurner](https://avatars.githubusercontent.com/u/23637821?v=4?s=100)  <br>**Leon Thurner**](http://www.retoflow.de)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=lthurner "Documentation") | [![Goran Mekić](https://avatars.githubusercontent.com/u/610855?v=4?s=100)  <br>**Goran Mekić**](http://meka.rs)<br>  <br>[📦](#platform-mekanix "Packaging/porting to new platform") | [![Gaganpreet](https://avatars.githubusercontent.com/u/815873?v=4?s=100)  <br>**Gaganpreet**](https://gaganpreet.in/)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=gaganpreet "Code") | [![Joe Taylor](https://avatars.githubusercontent.com/u/29302451?v=4?s=100)  <br>**Joe Taylor**](https://github.com/jtv8)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=jtv8 "Code") | [![Richard Friberg](https://avatars.githubusercontent.com/u/21967765?v=4?s=100)  <br>**Richard Friberg**](https://github.com/ricfri)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Aricfri "Bug reports") | [![Kenton Parton](https://avatars.githubusercontent.com/u/20202312?v=4?s=100)  <br>**Kenton Parton**](http://www.kentonparton.com)<br>  <br>[💵](#financial-KentonParton "Financial") | [![Adrian Ciołek](https://avatars.githubusercontent.com/u/23024321?v=4?s=100)  <br>**Adrian Ciołek**](https://github.com/Qwizi)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3AQwizi "Bug reports") |
| [![⭕Alexander Rymdeko-Harvey](https://avatars.githubusercontent.com/u/8761706?v=4?s=100)  <br>**⭕Alexander Rymdeko-Harvey**](https://blog.obscuritylabs.com)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=killswitch-GUI "Documentation") | [![schwannden](https://avatars.githubusercontent.com/u/5753086?v=4?s=100)  <br>**schwannden**](http://schwannden.com)<br>  <br>[🚧](#maintenance-schwannden "Maintenance")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=schwannden "Code") | [![Jimmy Angel Pérez Díaz](https://avatars.githubusercontent.com/u/27647007?v=4?s=100)  <br>**Jimmy Angel Pérez Díaz**](https://jimscope.is-a.dev)<br>  <br>[🛡️](#security-JimScope "Security") | [![Austin Orr](https://avatars.githubusercontent.com/u/8422403?v=4?s=100)  <br>**Austin Orr**](http://austinmartinorr.com)<br>  <br>[🚧](#maintenance-austinorr "Maintenance") | [![Carlo Eugster](https://avatars.githubusercontent.com/u/299107?v=4?s=100)  <br>**Carlo Eugster**](http://carlo.io)<br>  <br>[🛡️](#security-carloe "Security") | [![Vittorio Zamboni](https://avatars.githubusercontent.com/u/1734279?v=4?s=100)  <br>**Vittorio Zamboni**](http://www.vzamboni.io)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=vittoriozamboni "Code") | [![Andrey](https://avatars.githubusercontent.com/u/26593349?v=4?s=100)  <br>**Andrey**](https://github.com/aryadovoy)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=aryadovoy "Documentation") |
| [![Can H. Tartanoglu](https://avatars.githubusercontent.com/u/29519599?v=4?s=100)  <br>**Can H. Tartanoglu**](http://linkedin.com/in/canhtartanoglu)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Acaniko "Bug reports") | [![Filipe Nascimento](https://avatars.githubusercontent.com/u/22459623?v=4?s=100)  <br>**Filipe Nascimento**](https://github.com/flipee)<br>  <br>[🛡️](#security-flipee "Security") | [![dudulu](https://avatars.githubusercontent.com/u/50397689?v=4?s=100)  <br>**dudulu**](https://duduru.website/)<br>  <br>[💵](#financial-hgalytoby "Financial")<br> [🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Ahgalytoby "Bug reports")<br> [💬](#question-hgalytoby "Answering Questions") | [![Toni Alatalo](https://avatars.githubusercontent.com/u/201016?v=4?s=100)  <br>**Toni Alatalo**](https://github.com/antont)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=antont "Code")<br> [📖](https://github.com/fastapi-users/fastapi-users/commits?author=antont "Documentation") | [![Börge Kiss](https://avatars.githubusercontent.com/u/9215743?v=4?s=100)  <br>**Börge Kiss**](https://bkis.github.io)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=bkis "Documentation") | [![Guilherme Caminha](https://avatars.githubusercontent.com/u/4080737?v=4?s=100)  <br>**Guilherme Caminha**](http://www.praciano.com.br)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=gpkc "Documentation") | [![Téva KRIEF](https://avatars.githubusercontent.com/u/32820423?v=4?s=100)  <br>**Téva KRIEF**](https://github.com/sorasful)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=sorasful "Code") |
| [![Essa Alshammri](https://avatars.githubusercontent.com/u/10750698?v=4?s=100)  <br>**Essa Alshammri**](https://github.com/EssaAlshammri)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=EssaAlshammri "Documentation") | [![0xJan](https://avatars.githubusercontent.com/u/34775247?v=4?s=100)  <br>**0xJan**](https://github.com/jankadel)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Ajankadel "Bug reports") | [![Justin Thomas](https://avatars.githubusercontent.com/u/29140428?v=4?s=100)  <br>**Justin Thomas**](https://www.justhomas.in/)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=justhomas "Code") | [![Adam Israel](https://avatars.githubusercontent.com/u/125008?v=4?s=100)  <br>**Adam Israel**](http://www.adamisrael.com/)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=AdamIsrael "Code") | [![Nerixjk](https://avatars.githubusercontent.com/u/32194858?v=4?s=100)  <br>**Nerixjk**](https://github.com/Nerixjk)<br>  <br>[🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3ANerixjk "Bug reports")<br> [💻](https://github.com/fastapi-users/fastapi-users/commits?author=Nerixjk "Code") | [![Mike Fotinakis](https://avatars.githubusercontent.com/u/75300?v=4?s=100)  <br>**Mike Fotinakis**](https://github.com/fotinakis)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=fotinakis "Code")<br> [🐛](https://github.com/fastapi-users/fastapi-users/issues?q=author%3Afotinakis "Bug reports") | [![lifengmds](https://avatars.githubusercontent.com/u/8794442?v=4?s=100)  <br>**lifengmds**](https://github.com/lifengmds)<br>  <br>[💵](#financial-lifengmds "Financial") |
| [![raindata5](https://avatars.githubusercontent.com/u/87434335?v=4?s=100)  <br>**raindata5**](https://github.com/raindata5)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=raindata5 "Documentation") | [![Mark Donnelly](https://avatars.githubusercontent.com/u/1457654?v=4?s=100)  <br>**Mark Donnelly**](https://github.com/mdonnellyli)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=mdonnellyli "Documentation") | [![Alexander Zinov](https://avatars.githubusercontent.com/u/33320473?v=4?s=100)  <br>**Alexander Zinov**](https://github.com/sashkent3)<br>  <br>[💻](https://github.com/fastapi-users/fastapi-users/commits?author=sashkent3 "Code") | [![nimaxin](https://avatars.githubusercontent.com/u/97331299?v=4?s=100)  <br>**nimaxin**](https://github.com/nimaxin)<br>  <br>[📖](https://github.com/fastapi-users/fastapi-users/commits?author=nimaxin "Documentation") |

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
 specification. Contributions of any kind welcome!

Development[¶](#development "Permanent link")

----------------------------------------------

### Setup environment[¶](#setup-environment "Permanent link")

We use [Hatch](https://hatch.pypa.io/latest/install/)
 to manage the development environment and production build. Ensure it's installed on your system.

### Run unit tests[¶](#run-unit-tests "Permanent link")

You can run all the tests with:

`[](#__codelineno-0-1) hatch run test:test`

### Format the code[¶](#format-the-code "Permanent link")

Execute the following command to apply linting and check typing:

`[](#__codelineno-1-1) hatch run lint`

### Serve the documentation[¶](#serve-the-documentation "Permanent link")

You can serve the documentation locally with the following command:

`[](#__codelineno-2-1) hatch run docs`

The documentation will be available on [http://localhost:8000](http://localhost:8000)
.

License[¶](#license "Permanent link")

--------------------------------------

This project is licensed under the terms of the MIT license.

Back to top

---

# Redirecting

Redirecting to [latest/](latest/)
...

---

# Installation - FastAPI Users

 



Installation[¶](#installation "Permanent link")

================================================

You can add **FastAPI Users** to your FastAPI project in a few easy steps. First of all, install the dependency:

With SQLAlchemy support[¶](#with-sqlalchemy-support "Permanent link")

----------------------------------------------------------------------

`[](#__codelineno-0-1) pip install 'fastapi-users[sqlalchemy]'`

With Beanie support[¶](#with-beanie-support "Permanent link")

--------------------------------------------------------------

`[](#__codelineno-1-1) pip install 'fastapi-users[beanie]'`

With Redis authentication backend support[¶](#with-redis-authentication-backend-support "Permanent link")

----------------------------------------------------------------------------------------------------------

Information on installing with proper database support can be found in the [Redis](../configuration/authentication/strategies/redis/)
 section.

With OAuth2 support[¶](#with-oauth2-support "Permanent link")

--------------------------------------------------------------

Information on installing with proper database support can be found in the [OAuth2](../configuration/oauth/)
 section.

* * *

That's it! In the next section, we'll have an [overview](../configuration/overview/)
 of how things work.

Back to top

---

# Overview - FastAPI Users

 



Overview[¶](#overview "Permanent link")

========================================

The schema below shows you how the library is structured and how each part fit together.

    flowchart TB
        FASTAPI_USERS{FastAPIUsers}
        USER_MANAGER{UserManager}
        USER_MODEL{User model}
        DATABASE_DEPENDENCY[[get_user_db]]
        USER_MANAGER_DEPENDENCY[[get_user_manager]]
        CURRENT_USER[[current_user]]
        subgraph SCHEMAS[Schemas]
            USER[User]
            USER_CREATE[UserCreate]
            USER_UPDATE[UserUpdate]
        end
        subgraph DATABASE[Database adapters]
            SQLALCHEMY[SQLAlchemy]
            BEANIE[Beanie]
        end
        subgraph ROUTERS[Routers]
            AUTH[[get_auth_router]]
            OAUTH[[get_oauth_router]]
            OAUTH_ASSOCIATE[[get_oauth_associate_router]]
            REGISTER[[get_register_router]]
            VERIFY[[get_verify_router]]
            RESET[[get_reset_password_router]]
            USERS[[get_users_router]]
        end
        subgraph AUTH_BACKENDS[Authentication]
            subgraph TRANSPORTS[Transports]
                COOKIE[CookieTransport]
                BEARER[BearerTransport]
            end
            subgraph STRATEGIES[Strategies]
                DB[DatabaseStrategy]
                JWT[JWTStrategy]
                REDIS[RedisStrategy]
            end
            AUTH_BACKEND{AuthenticationBackend}
        end
        DATABASE --> DATABASE_DEPENDENCY
        USER_MODEL --> DATABASE_DEPENDENCY
        DATABASE_DEPENDENCY --> USER_MANAGER
    
        USER_MANAGER --> USER_MANAGER_DEPENDENCY
        USER_MANAGER_DEPENDENCY --> FASTAPI_USERS
    
        FASTAPI_USERS --> ROUTERS
    
        TRANSPORTS --> AUTH_BACKEND
        STRATEGIES --> AUTH_BACKEND
    
        AUTH_BACKEND --> ROUTERS
        AUTH_BACKEND --> FASTAPI_USERS
    
        FASTAPI_USERS --> CURRENT_USER
    
        SCHEMAS --> ROUTERS

User model and database adapters[¶](#user-model-and-database-adapters "Permanent link")

----------------------------------------------------------------------------------------

FastAPI Users is compatible with various **databases and ORM**. To build the interface between those database tools and the library, we provide database adapters classes that you need to instantiate and configure.

➡️ [I'm using SQLAlchemy](../databases/sqlalchemy/)

➡️ [I'm using Beanie](../databases/beanie/)

Authentication backends[¶](#authentication-backends "Permanent link")

----------------------------------------------------------------------

Authentication backends define the way users sessions are managed in your app, like access tokens or cookies.

They are composed of two parts: a **transport**, which is how the token will be carried over the requests (e.g. cookies, headers...) and a **strategy**, which is how the token will be generated and secured (e.g. a JWT, a token in database...).

➡️ [Configure the authentication backends](../authentication/)

`UserManager`[¶](#usermanager "Permanent link")

------------------------------------------------

The `UserManager` object bears most of the logic of FastAPI Users: registration, verification, password reset... We provide a `BaseUserManager` with this common logic; which you should overload to define how to validate passwords or handle events.

This `UserManager` object should be provided through a FastAPI dependency, `get_user_manager`.

➡️ [Configure `UserManager`](../user-manager/)

Schemas[¶](#schemas "Permanent link")

--------------------------------------

FastAPI is heavily using [Pydantic models](https://pydantic-docs.helpmanual.io/)
 to validate request payloads and serialize responses. **FastAPI Users** is no exception and will expect you to provide Pydantic schemas representing a user when it's read, created and updated.

➡️ [Configure schemas](../schemas/)

`FastAPIUsers` and routers[¶](#fastapiusers-and-routers "Permanent link")

--------------------------------------------------------------------------

Finally, `FastAPIUsers` object is the main class from which you'll be able to generate routers for classic routes like registration or login, but also get the `current_user` dependency factory to inject the authenticated user in your own routes.

➡️ [Configure `FastAPIUsers` and routers](../routers/)

Back to top

---

# SQLAlchemy - FastAPI Users

 



SQLAlchemy[¶](#sqlalchemy "Permanent link")

============================================

**FastAPI Users** provides the necessary tools to work with SQL databases thanks to [SQLAlchemy ORM with asyncio](https://docs.sqlalchemy.org/en/14/orm/extensions/asyncio.html)
.

Asynchronous driver[¶](#asynchronous-driver "Permanent link")

--------------------------------------------------------------

To work with your DBMS, you'll need to install the corresponding asyncio driver. The common choices are:

*   For PostgreSQL: `pip install asyncpg`
*   For SQLite: `pip install aiosqlite`

Examples of `DB_URL`s are:

*   PostgreSQL: `postgresql+asyncpg://user:password@host:port/name`
*   SQLite: `sqlite+aiosqlite:///name.db`

For the sake of this tutorial from now on, we'll use a simple SQLite database.

Warning

When using asynchronous sessions, ensure `Session.expire_on_commit` is set to `False` as recommended by the [SQLAlchemy docs on asyncio](https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html#asyncio-orm-avoid-lazyloads)
. The examples on this documentation already have this setting correctly defined to `False` when using the `async_sessionmaker` factory.

Create the User model[¶](#create-the-user-model "Permanent link")

------------------------------------------------------------------

As for any SQLAlchemy ORM model, we'll create a `User` model.

`[](#__codelineno-0-1) from collections.abc import AsyncGenerator [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import Depends [](#__codelineno-0-4) from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase [](#__codelineno-0-5) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-0-6) from sqlalchemy.orm import DeclarativeBase [](#__codelineno-0-7) [](#__codelineno-0-8) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-0-9) [](#__codelineno-0-10) [](#__codelineno-0-11) class Base(DeclarativeBase): [](#__codelineno-0-12)     pass [](#__codelineno-0-13) [](#__codelineno-0-14) [](#__codelineno-0-15) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-0-16)     pass [](#__codelineno-0-17) [](#__codelineno-0-18) [](#__codelineno-0-19) engine = create_async_engine(DATABASE_URL) [](#__codelineno-0-20) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-0-21) [](#__codelineno-0-22) [](#__codelineno-0-23) async def create_db_and_tables(): [](#__codelineno-0-24)     async with engine.begin() as conn: [](#__codelineno-0-25)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-0-26) [](#__codelineno-0-27) [](#__codelineno-0-28) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-0-29)     async with async_session_maker() as session: [](#__codelineno-0-30)         yield session [](#__codelineno-0-31) [](#__codelineno-0-32) [](#__codelineno-0-33) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-0-34)     yield SQLAlchemyUserDatabase(session, User)`

As you can see, **FastAPI Users** provides a base class that will include base fields for our `User` table. You can of course add you own fields there to fit to your needs!

Primary key is defined as UUID

By default, we use UUID as a primary key ID for your user. If you want to use another type, like an auto-incremented integer, you can use `SQLAlchemyBaseUserTable` as base class and define your own `id` column.

`[](#__codelineno-1-1) class User(SQLAlchemyBaseUserTable[int], Base): [](#__codelineno-1-2)     id: Mapped[int] = mapped_column(Integer, primary_key=True)`

Notice that `SQLAlchemyBaseUserTable` expects a generic type to define the actual type of ID you use.

Implement a function to create the tables[¶](#implement-a-function-to-create-the-tables "Permanent link")

----------------------------------------------------------------------------------------------------------

We'll now create an utility function to create all the defined tables.

`[](#__codelineno-2-1) from collections.abc import AsyncGenerator [](#__codelineno-2-2) [](#__codelineno-2-3) from fastapi import Depends [](#__codelineno-2-4) from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase [](#__codelineno-2-5) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-2-6) from sqlalchemy.orm import DeclarativeBase [](#__codelineno-2-7) [](#__codelineno-2-8) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-2-9) [](#__codelineno-2-10) [](#__codelineno-2-11) class Base(DeclarativeBase): [](#__codelineno-2-12)     pass [](#__codelineno-2-13) [](#__codelineno-2-14) [](#__codelineno-2-15) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-2-16)     pass [](#__codelineno-2-17) [](#__codelineno-2-18) [](#__codelineno-2-19) engine = create_async_engine(DATABASE_URL) [](#__codelineno-2-20) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-2-21) [](#__codelineno-2-22) [](#__codelineno-2-23) async def create_db_and_tables(): [](#__codelineno-2-24)     async with engine.begin() as conn: [](#__codelineno-2-25)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-2-26) [](#__codelineno-2-27) [](#__codelineno-2-28) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-2-29)     async with async_session_maker() as session: [](#__codelineno-2-30)         yield session [](#__codelineno-2-31) [](#__codelineno-2-32) [](#__codelineno-2-33) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-2-34)     yield SQLAlchemyUserDatabase(session, User)`

This function can be called, for example, during the initialization of your FastAPI app.

Warning

In production, it's strongly recommended to setup a migration system to update your SQL schemas. See [Alembic](https://alembic.sqlalchemy.org/en/latest/)
.

Create the database adapter dependency[¶](#create-the-database-adapter-dependency "Permanent link")

----------------------------------------------------------------------------------------------------

The database adapter of **FastAPI Users** makes the link between your database configuration and the users logic. It should be generated by a FastAPI dependency.

`[](#__codelineno-3-1) from collections.abc import AsyncGenerator [](#__codelineno-3-2) [](#__codelineno-3-3) from fastapi import Depends [](#__codelineno-3-4) from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase [](#__codelineno-3-5) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-3-6) from sqlalchemy.orm import DeclarativeBase [](#__codelineno-3-7) [](#__codelineno-3-8) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-3-9) [](#__codelineno-3-10) [](#__codelineno-3-11) class Base(DeclarativeBase): [](#__codelineno-3-12)     pass [](#__codelineno-3-13) [](#__codelineno-3-14) [](#__codelineno-3-15) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-3-16)     pass [](#__codelineno-3-17) [](#__codelineno-3-18) [](#__codelineno-3-19) engine = create_async_engine(DATABASE_URL) [](#__codelineno-3-20) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-3-21) [](#__codelineno-3-22) [](#__codelineno-3-23) async def create_db_and_tables(): [](#__codelineno-3-24)     async with engine.begin() as conn: [](#__codelineno-3-25)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-3-26) [](#__codelineno-3-27) [](#__codelineno-3-28) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-3-29)     async with async_session_maker() as session: [](#__codelineno-3-30)         yield session [](#__codelineno-3-31) [](#__codelineno-3-32) [](#__codelineno-3-33) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-3-34)     yield SQLAlchemyUserDatabase(session, User)`

Notice that we define first a `get_async_session` dependency returning us a fresh SQLAlchemy session to interact with the database.

It's then used inside the `get_user_db` dependency to generate our adapter. Notice that we pass it two things:

*   The `session` instance we just injected.
*   The `User` class, which is the actual SQLAlchemy model.

Back to top

---

# Create a backend - FastAPI Users

 



Create a backend[¶](#create-a-backend "Permanent link")

========================================================

As we said, a backend is the combination of a transport and a strategy. That way, you can create a complete strategy exactly fitting your needs.

For this, you have to use the `AuthenticationBackend` class.

`[](#__codelineno-0-1) from fastapi_users.authentication import AuthenticationBackend, BearerTransport, JWTStrategy [](#__codelineno-0-2) [](#__codelineno-0-3) SECRET = "SECRET" [](#__codelineno-0-4) [](#__codelineno-0-5) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-0-6) [](#__codelineno-0-7) def get_jwt_strategy() -> JWTStrategy: [](#__codelineno-0-8)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-0-9) [](#__codelineno-0-10) auth_backend = AuthenticationBackend( [](#__codelineno-0-11)     name="jwt", [](#__codelineno-0-12)     transport=bearer_transport, [](#__codelineno-0-13)     get_strategy=get_jwt_strategy, [](#__codelineno-0-14) )`

As you can see, instantiation is quite simple. It accepts the following arguments:

*   `name` (`str`): Name of the backend. Each backend should have a unique name.
*   `transport` (`Transport`): An instance of a `Transport` class.
*   `get_strategy` (`Callable[..., Strategy]`): A dependency callable returning an instance of a `Strategy` class.

Next steps[¶](#next-steps "Permanent link")

--------------------------------------------

You can have as many authentication backends as you wish. You'll then have to pass those backends to your `FastAPIUsers` instance and generate an auth router for each one of them.

Back to top

---

# Introduction - FastAPI Users

 



Authentication[¶](#authentication "Permanent link")

====================================================

**FastAPI Users** allows you to plug in several authentication methods.

How it works?[¶](#how-it-works "Permanent link")

-------------------------------------------------

You can have **several** authentication methods, e.g. a cookie authentication for browser-based queries and a JWT token authentication for pure API queries.

When checking authentication, each method is run one after the other. The first method yielding a user wins. If no method yields a user, an `HTTPException` is raised.

For each backend, you'll be able to add a router with the corresponding `/login` and `/logout`. More on this in the [routers documentation](../routers/)
.

Transport + Strategy = Authentication backend[¶](#transport-strategy-authentication-backend "Permanent link")

--------------------------------------------------------------------------------------------------------------

An authentication backend is composed of two parts:

### Transport[¶](#transport "Permanent link")

It manages how the token will be carried over the request. We currently provide two methods:

#### [Bearer](transports/bearer/)
[¶](#bearer "Permanent link")

The token will be sent through an `Authorization: Bearer` header.

Pros and cons

*   ✅ Easy to read and set in every requests.
*   ❌ Needs to be stored manually somewhere in the client.

➡️ Use it if you want to implement a mobile application or a pure REST API.

The token will be sent through a cookie.

Pros and cons

*   ✅ Automatically stored and sent securely by web browsers in every requests.
*   ✅ Automatically removed at expiration by web browsers.
*   ❌ Needs a CSRF protection for maximum security.
*   ❌ Harder to work with outside a browser, like a mobile app or a server.

➡️ Use it if you want to implement a web frontend.

### Strategy[¶](#strategy "Permanent link")

It manages how the token is generated and secured. We currently provide three methods:

#### [JWT](strategies/jwt/)
[¶](#jwt "Permanent link")

The token is self-contained in a JSON Web Token.

Pros and cons

*   ✅ Self-contained: it doesn't need to be stored in a database.
*   ❌ Can't be invalidated on the server-side: it's valid until it expires.

➡️ Use it if you want to get up-and-running quickly.

#### [Database](strategies/database/)
[¶](#database "Permanent link")

The token is stored in a table (or collection) in your database.

Pros and cons

*   ✅ Secure and performant.
*   ✅ Tokens can be invalidated server-side by removing them from the database.
*   ✅ Highly customizable: add your own fields, create an API to retrieve the active sessions of your users, etc.
*   ❌ Configuration is a bit more complex.

➡️ Use it if you want maximum flexibility in your token management.

#### [Redis](strategies/redis/)
[¶](#redis "Permanent link")

The token is stored in a Redis key-store.

Pros and cons

*   ✅ Secure and performant.
*   ✅ Tokens can be invalidated server-side by removing them from Redis.
*   ❌ A Redis server is needed.

➡️ Use it if you want maximum performance while being able to invalidate tokens.

Back to top

---

# Beanie - FastAPI Users

 



Beanie[¶](#beanie "Permanent link")

====================================

**FastAPI Users** provides the necessary tools to work with MongoDB databases using the [Beanie ODM](https://github.com/roman-right/beanie)
.

Setup database connection and collection[¶](#setup-database-connection-and-collection "Permanent link")

--------------------------------------------------------------------------------------------------------

The first thing to do is to create a MongoDB connection using [mongodb/motor](https://github.com/mongodb/motor)
 (automatically installed with Beanie).

`[](#__codelineno-0-1) import motor.motor_asyncio [](#__codelineno-0-2) from beanie import Document [](#__codelineno-0-3) from fastapi_users.db import BeanieBaseUser, BeanieUserDatabase [](#__codelineno-0-4) [](#__codelineno-0-5) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-0-6) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-0-7)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-0-8) ) [](#__codelineno-0-9) db = client["database_name"] [](#__codelineno-0-10) [](#__codelineno-0-11) [](#__codelineno-0-12) class User(BeanieBaseUser, Document): [](#__codelineno-0-13)     pass [](#__codelineno-0-14) [](#__codelineno-0-15) [](#__codelineno-0-16) async def get_user_db(): [](#__codelineno-0-17)     yield BeanieUserDatabase(User)`

You can choose any name for the database.

Create the User model[¶](#create-the-user-model "Permanent link")

------------------------------------------------------------------

As for any Beanie ODM model, we'll create a `User` model.

`[](#__codelineno-1-1) import motor.motor_asyncio [](#__codelineno-1-2) from beanie import Document [](#__codelineno-1-3) from fastapi_users.db import BeanieBaseUser, BeanieUserDatabase [](#__codelineno-1-4) [](#__codelineno-1-5) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-1-6) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-1-7)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-1-8) ) [](#__codelineno-1-9) db = client["database_name"] [](#__codelineno-1-10) [](#__codelineno-1-11) [](#__codelineno-1-12) class User(BeanieBaseUser, Document): [](#__codelineno-1-13)     pass [](#__codelineno-1-14) [](#__codelineno-1-15) [](#__codelineno-1-16) async def get_user_db(): [](#__codelineno-1-17)     yield BeanieUserDatabase(User)`

As you can see, **FastAPI Users** provides a base class that will include base fields for our `User` table. You can of course add you own fields there to fit to your needs!

Info

The base class is configured to automatically create a [unique index](https://roman-right.github.io/beanie/tutorial/defining-a-document/#indexes)
 on `id` and `email`.

Info

If you want to add your own custom settings to your `User` document model - like changing the collection name - don't forget to let your inner `Settings` class inherit the pre-defined settings from `BeanieBaseUser` like this: `class Settings(BeanieBaseUser.Settings): # ...`! See Beanie's [documentation on `Settings`](https://beanie-odm.dev/tutorial/defining-a-document/#settings)
 for details.

Create the database adapter[¶](#create-the-database-adapter "Permanent link")

------------------------------------------------------------------------------

The database adapter of **FastAPI Users** makes the link between your database configuration and the users logic. It should be generated by a FastAPI dependency.

`[](#__codelineno-2-1) import motor.motor_asyncio [](#__codelineno-2-2) from beanie import Document [](#__codelineno-2-3) from fastapi_users.db import BeanieBaseUser, BeanieUserDatabase [](#__codelineno-2-4) [](#__codelineno-2-5) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-2-6) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-2-7)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-2-8) ) [](#__codelineno-2-9) db = client["database_name"] [](#__codelineno-2-10) [](#__codelineno-2-11) [](#__codelineno-2-12) class User(BeanieBaseUser, Document): [](#__codelineno-2-13)     pass [](#__codelineno-2-14) [](#__codelineno-2-15) [](#__codelineno-2-16) async def get_user_db(): [](#__codelineno-2-17)     yield BeanieUserDatabase(User)`

Notice that we pass a reference to the `User` model we defined above.

Initialize Beanie[¶](#initialize-beanie "Permanent link")

----------------------------------------------------------

When initializing your FastAPI app, it's important that you [**initialize Beanie**](https://roman-right.github.io/beanie/tutorial/initialization/)
 so it can discover your models. We can achieve this using [**Lifespan Events**](https://fastapi.tiangolo.com/advanced/events/)
 on the FastAPI app:

`[](#__codelineno-3-1) from contextlib import asynccontextmanager [](#__codelineno-3-2) from beanie import init_beanie [](#__codelineno-3-3) [](#__codelineno-3-4) [](#__codelineno-3-5) @asynccontextmanager [](#__codelineno-3-6) async def lifespan(app: FastAPI): [](#__codelineno-3-7)     await init_beanie( [](#__codelineno-3-8)         database=db,  # (1)! [](#__codelineno-3-9)         document_models=[ [](#__codelineno-3-10)             User,  # (2)! [](#__codelineno-3-11)         ], [](#__codelineno-3-12)     ) [](#__codelineno-3-13)     yield [](#__codelineno-3-14) [](#__codelineno-3-15) app = FastAPI(lifespan=lifespan)`

1.  This is the `db` Motor database instance we defined above.
    
2.  This is the Beanie `User` model we defined above. Don't forget to also add your very own models!
    

Back to top

---

# UserManager - FastAPI Users

 



UserManager[¶](#usermanager "Permanent link")

==============================================

The `UserManager` class is the core logic of FastAPI Users. We provide the `BaseUserManager` class which you should extend to set some parameters and define logic, for example when a user just registered or forgot its password.

It's designed to be easily extensible and customizable so that you can integrate your very own logic.

Create your `UserManager` class[¶](#create-your-usermanager-class "Permanent link")

------------------------------------------------------------------------------------

You should define your own version of the `UserManager` class to set various parameters.

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) from typing import Optional [](#__codelineno-0-3) [](#__codelineno-0-4) from fastapi import Depends, Request [](#__codelineno-0-5) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-0-6) [](#__codelineno-0-7) from .db import User, get_user_db [](#__codelineno-0-8) [](#__codelineno-0-9) SECRET = "SECRET" [](#__codelineno-0-10) [](#__codelineno-0-11) [](#__codelineno-0-12) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-0-13)     reset_password_token_secret = SECRET [](#__codelineno-0-14)     verification_token_secret = SECRET [](#__codelineno-0-15) [](#__codelineno-0-16)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-0-17)         print(f"User {user.id} has registered.") [](#__codelineno-0-18) [](#__codelineno-0-19)     async def on_after_forgot_password( [](#__codelineno-0-20)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-0-21)     ): [](#__codelineno-0-22)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-0-23) [](#__codelineno-0-24)     async def on_after_request_verify( [](#__codelineno-0-25)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-0-26)     ): [](#__codelineno-0-27)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-0-28) [](#__codelineno-0-29) [](#__codelineno-0-30) async def get_user_manager(user_db=Depends(get_user_db)): [](#__codelineno-0-31)     yield UserManager(user_db)`

As you can see, you have to define here various attributes and methods. You can find the complete list of those below.

Typing: User and ID generic types are expected

You can see that we define two generic types when extending the base class:

*   `User`, which is the user model we defined in the database part
*   The ID, which should correspond to the type of ID you use on your model. Here, we chose UUID, but it can be anything, like an integer or a MongoDB ObjectID.

It'll help you to have **good type-checking and auto-completion** when implementing the custom methods.

### The ID parser mixin[¶](#the-id-parser-mixin "Permanent link")

Since the user ID is fully generic, we need a way to **parse it reliably when it'll come from API requests**, typically as URL path attributes.

That's why we added the `UUIDIDMixin` in the example above. It implements the `parse_id` method, ensuring UUID are valid and correctly parsed.

Of course, it's important that this logic **matches the type of your ID**. To help you with this, we provide mixins for the most common cases:

*   `UUIDIDMixin`, for UUID ID.
*   `IntegerIDMixin`, for integer ID.
*   `ObjectIDIDMixin` (provided by `fastapi_users_db_beanie`), for MongoDB ObjectID.

Inheritance order matters

Notice in your example that **the mixin comes first in our `UserManager` inheritance**. Because of the Method-Resolution-Order (MRO) of Python, the left-most element takes precedence.

If you need another type of ID, you can simply overload the `parse_id` method on your `UserManager` class:

`[](#__codelineno-1-1) from fastapi_users import BaseUserManager, InvalidID [](#__codelineno-1-2) [](#__codelineno-1-3) [](#__codelineno-1-4) class UserManager(BaseUserManager[User, MyCustomID]): [](#__codelineno-1-5)     def parse_id(self, value: Any) -> MyCustomID: [](#__codelineno-1-6)         try: [](#__codelineno-1-7)             return MyCustomID(value) [](#__codelineno-1-8)         except ValueError as e: [](#__codelineno-1-9)             raise InvalidID() from e  # (1)!`

1.  If the ID can't be parsed into the desired type, you'll need to raise an `InvalidID` exception.

Create `get_user_manager` dependency[¶](#create-get_user_manager-dependency "Permanent link")

----------------------------------------------------------------------------------------------

The `UserManager` class will be injected at runtime using a FastAPI dependency. This way, you can run it in a database session or swap it with a mock during testing.

`[](#__codelineno-2-1) import uuid [](#__codelineno-2-2) from typing import Optional [](#__codelineno-2-3) [](#__codelineno-2-4) from fastapi import Depends, Request [](#__codelineno-2-5) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-2-6) [](#__codelineno-2-7) from .db import User, get_user_db [](#__codelineno-2-8) [](#__codelineno-2-9) SECRET = "SECRET" [](#__codelineno-2-10) [](#__codelineno-2-11) [](#__codelineno-2-12) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-2-13)     reset_password_token_secret = SECRET [](#__codelineno-2-14)     verification_token_secret = SECRET [](#__codelineno-2-15) [](#__codelineno-2-16)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-2-17)         print(f"User {user.id} has registered.") [](#__codelineno-2-18) [](#__codelineno-2-19)     async def on_after_forgot_password( [](#__codelineno-2-20)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-2-21)     ): [](#__codelineno-2-22)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-2-23) [](#__codelineno-2-24)     async def on_after_request_verify( [](#__codelineno-2-25)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-2-26)     ): [](#__codelineno-2-27)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-2-28) [](#__codelineno-2-29) [](#__codelineno-2-30) async def get_user_manager(user_db=Depends(get_user_db)): [](#__codelineno-2-31)     yield UserManager(user_db)`

Notice that we use the `get_user_db` dependency we defined earlier to inject the database instance.

Customize attributes and methods[¶](#customize-attributes-and-methods "Permanent link")

----------------------------------------------------------------------------------------

### Attributes[¶](#attributes "Permanent link")

*   `reset_password_token_secret`: Secret to encode reset password token. **Use a strong passphrase and keep it secure.**
*   `reset_password_token_lifetime_seconds`: Lifetime of reset password token. Defaults to 3600.
*   `reset_password_token_audience`: JWT audience of reset password token. Defaults to `fastapi-users:reset`.
*   `verification_token_secret`: Secret to encode verification token. **Use a strong passphrase and keep it secure.**
*   `verification_token_lifetime_seconds`: Lifetime of verification token. Defaults to 3600.
*   `verification_token_audience`: JWT audience of verification token. Defaults to `fastapi-users:verify`.

### Methods[¶](#methods "Permanent link")

#### `validate_password`[¶](#validate_password "Permanent link")

Validate a password.

**Arguments**

*   `password` (`str`): the password to validate.
*   `user` (`Union[UserCreate, User]`): user model which we are currently validating the password. Useful if you want to check that the password doesn't contain the name or the birthdate of the user for example.

**Output**

This function should return `None` if the password is valid or raise `InvalidPasswordException` if not. This exception expects an argument `reason` telling why the password is invalid. It'll be part of the error response.

**Example**

`[](#__codelineno-3-1) from fastapi_users import BaseUserManager, InvalidPasswordException, UUIDIDMixin [](#__codelineno-3-2) [](#__codelineno-3-3) [](#__codelineno-3-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-3-5)     # ... [](#__codelineno-3-6)     async def validate_password( [](#__codelineno-3-7)         self, [](#__codelineno-3-8)         password: str, [](#__codelineno-3-9)         user: Union[UserCreate, User], [](#__codelineno-3-10)     ) -> None: [](#__codelineno-3-11)         if len(password) < 8: [](#__codelineno-3-12)             raise InvalidPasswordException( [](#__codelineno-3-13)                 reason="Password should be at least 8 characters" [](#__codelineno-3-14)             ) [](#__codelineno-3-15)         if user.email in password: [](#__codelineno-3-16)             raise InvalidPasswordException( [](#__codelineno-3-17)                 reason="Password should not contain e-mail" [](#__codelineno-3-18)             )`

#### `on_after_register`[¶](#on_after_register "Permanent link")

Perform logic after successful user registration.

Typically, you'll want to **send a welcome e-mail** or add it to your marketing analytics pipeline.

**Arguments**

*   `user` (`User`): the registered user.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-4-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-4-2) [](#__codelineno-4-3) [](#__codelineno-4-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-4-5)     # ... [](#__codelineno-4-6)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-4-7)         print(f"User {user.id} has registered.")`

#### `on_after_update`[¶](#on_after_update "Permanent link")

Perform logic after successful user update.

It may be useful, for example, if you wish to update your user in a data analytics or customer success platform.

**Arguments**

*   `user` (`User`): the updated user.
*   `update_dict` (`Dict[str, Any]`): dictionary with the updated user fields.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-5-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-5-2) [](#__codelineno-5-3) [](#__codelineno-5-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-5-5)     # ... [](#__codelineno-5-6)     async def on_after_update( [](#__codelineno-5-7)         self, [](#__codelineno-5-8)         user: User, [](#__codelineno-5-9)         update_dict: Dict[str, Any], [](#__codelineno-5-10)         request: Optional[Request] = None, [](#__codelineno-5-11)     ): [](#__codelineno-5-12)         print(f"User {user.id} has been updated with {update_dict}.")`

#### `on_after_login`[¶](#on_after_login "Permanent link")

Perform logic after a successful user login.

It may be useful for custom logic or processes triggered by new logins, for example a daily login reward or for analytics.

**Arguments**

*   `user` (`User`): the updated user.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.
*   `response` (`Optional[Response]`): Optional response built by the transport. Defaults to None.

**Example**

`[](#__codelineno-6-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-6-2) [](#__codelineno-6-3) [](#__codelineno-6-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-6-5)     # ... [](#__codelineno-6-6)     async def on_after_login( [](#__codelineno-6-7)         self, [](#__codelineno-6-8)         user: User, [](#__codelineno-6-9)         request: Optional[Request] = None, [](#__codelineno-6-10)         response: Optional[Response] = None, [](#__codelineno-6-11)     ): [](#__codelineno-6-12)         print(f"User {user.id} logged in.")`

#### `on_after_request_verify`[¶](#on_after_request_verify "Permanent link")

Perform logic after successful verification request.

Typically, you'll want to **send an e-mail** with the link (and the token) that allows the user to verify their e-mail.

**Arguments**

*   `user` (`User`): the user to verify.
*   `token` (`str`): the verification token.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-7-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-7-2) [](#__codelineno-7-3) [](#__codelineno-7-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-7-5)     # ... [](#__codelineno-7-6)     async def on_after_request_verify( [](#__codelineno-7-7)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-7-8)     ): [](#__codelineno-7-9)         print(f"Verification requested for user {user.id}. Verification token: {token}")`

#### `on_after_verify`[¶](#on_after_verify "Permanent link")

Perform logic after successful user verification.

This may be useful if you wish to send another e-mail or store this information in a data analytics or customer success platform.

**Arguments**

*   `user` (`User`): the verified user.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-8-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-8-2) [](#__codelineno-8-3) [](#__codelineno-8-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-8-5)     # ... [](#__codelineno-8-6)     async def on_after_verify( [](#__codelineno-8-7)         self, user: User, request: Optional[Request] = None [](#__codelineno-8-8)     ): [](#__codelineno-8-9)         print(f"User {user.id} has been verified")`

#### `on_after_forgot_password`[¶](#on_after_forgot_password "Permanent link")

Perform logic after successful forgot password request.

Typically, you'll want to **send an e-mail** with the link (and the token) that allows the user to reset their password.

**Arguments**

*   `user` (`User`): the user that forgot its password.
*   `token` (`str`): the forgot password token
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-9-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-9-2) [](#__codelineno-9-3) [](#__codelineno-9-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-9-5)     # ... [](#__codelineno-9-6)     async def on_after_forgot_password( [](#__codelineno-9-7)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-9-8)     ): [](#__codelineno-9-9)         print(f"User {user.id} has forgot their password. Reset token: {token}")`

#### `on_after_reset_password`[¶](#on_after_reset_password "Permanent link")

Perform logic after successful password reset.

For example, you may want to **send an e-mail** to the concerned user to warn him that their password has been changed and that they should take action if they think they have been hacked.

**Arguments**

*   `user` (`User`): the user that reset its password.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-10-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-10-2) [](#__codelineno-10-3) [](#__codelineno-10-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-10-5)     # ... [](#__codelineno-10-6)     async def on_after_reset_password(self, user: User, request: Optional[Request] = None): [](#__codelineno-10-7)         print(f"User {user.id} has reset their password.")`

#### `on_before_delete`[¶](#on_before_delete "Permanent link")

Perform logic before user delete.

For example, you may want to **valide user resource integrity** to see if any related user resource need to be marked inactive, or delete them recursively.

**Arguments**

*   `user` (`User`): the user to be deleted.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-11-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-11-2) [](#__codelineno-11-3) [](#__codelineno-11-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-11-5)     # ... [](#__codelineno-11-6)     async def on_before_delete(self, user: User, request: Optional[Request] = None): [](#__codelineno-11-7)         print(f"User {user.id} is going to be deleted")`

#### `on_after_delete`[¶](#on_after_delete "Permanent link")

Perform logic after user delete.

For example, you may want to **send an email** to the administrator about the event.

**Arguments**

*   `user` (`User`): the user to be deleted.
*   `request` (`Optional[Request]`): optional FastAPI request object that triggered the operation. Defaults to None.

**Example**

`[](#__codelineno-12-1) from fastapi_users import BaseUserManager, UUIDIDMixin [](#__codelineno-12-2) [](#__codelineno-12-3) [](#__codelineno-12-4) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-12-5)     # ... [](#__codelineno-12-6)     async def on_after_delete(self, user: User, request: Optional[Request] = None): [](#__codelineno-12-7)         print(f"User {user.id} is successfully deleted")`

Back to top

---

# Schemas - FastAPI Users

 



Schemas[¶](#schemas "Permanent link")

======================================

FastAPI is heavily using [Pydantic models](https://pydantic-docs.helpmanual.io/)
 to validate request payloads and serialize responses. **FastAPI Users** is no exception and will expect you to provide Pydantic schemas representing a user when it's read, created and updated.

It's **different from your `User` model**, which is an object that actually interacts with the database. Those schemas on the other hand are here to validate data and correctly serialize it in the API.

**FastAPI Users** provides a base structure to cover its needs. It is structured like this:

*   `id` (`ID`) – Unique identifier of the user. It matches the type of your ID, like UUID or integer.
*   `email` (`str`) – Email of the user. Validated by [`email-validator`](https://github.com/JoshData/python-email-validator)
    .
*   `is_active` (`bool`) – Whether or not the user is active. If not, login and forgot password requests will be denied. Defaults to `True`.
*   `is_verified` (`bool`) – Whether or not the user is verified. Optional but helpful with the [`verify` router](../routers/verify/)
     logic. Defaults to `False`.
*   `is_superuser` (`bool`) – Whether or not the user is a superuser. Useful to implement administration logic. Defaults to `False`.

Define your schemas[¶](#define-your-schemas "Permanent link")

--------------------------------------------------------------

There are four Pydantic models variations provided as mixins:

*   `BaseUser`, which provides the basic fields and validation;
*   `BaseCreateUser`, dedicated to user registration, which consists of compulsory `email` and `password` fields;
*   `BaseUpdateUser`, dedicated to user profile update, which adds an optional `password` field;

You should define each of those variations, inheriting from each mixin:

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi_users import schemas [](#__codelineno-0-4) [](#__codelineno-0-5) [](#__codelineno-0-6) class UserRead(schemas.BaseUser[uuid.UUID]): [](#__codelineno-0-7)     pass [](#__codelineno-0-8) [](#__codelineno-0-9) [](#__codelineno-0-10) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-0-11)     pass [](#__codelineno-0-12) [](#__codelineno-0-13) [](#__codelineno-0-14) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-0-15)     pass`

Typing: ID generic type is expected

You can see that we define a generic type when extending the `BaseUser` class. It should correspond to the type of ID you use on your model. Here, we chose UUID, but it can be anything, like an integer or a MongoDB ObjectID.

### Adding your own fields[¶](#adding-your-own-fields "Permanent link")

You can of course add your own properties there to fit to your needs. In the example below, we add a required string property, `first_name`, and an optional date property, `birthdate`.

`[](#__codelineno-1-1) import datetime [](#__codelineno-1-2) import uuid [](#__codelineno-1-3) [](#__codelineno-1-4) from fastapi_users import schemas [](#__codelineno-1-5) [](#__codelineno-1-6) [](#__codelineno-1-7) class UserRead(schemas.BaseUser[uuid.UUID]): [](#__codelineno-1-8)     first_name: str [](#__codelineno-1-9)     birthdate: Optional[datetime.date] [](#__codelineno-1-10) [](#__codelineno-1-11) [](#__codelineno-1-12) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-1-13)     first_name: str [](#__codelineno-1-14)     birthdate: Optional[datetime.date] [](#__codelineno-1-15) [](#__codelineno-1-16) [](#__codelineno-1-17) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-1-18)     first_name: Optional[str] [](#__codelineno-1-19)     birthdate: Optional[datetime.date]`

Make sure to mirror this in your database model

The `User` model you defined earlier for your specific database will be the central object that will actually store the data. Therefore, you need to define the very same fields in it so the data can be actually stored.

Back to top

---

# Auth router - FastAPI Users

 



Auth router[¶](#auth-router "Permanent link")

==============================================

The auth router will generate `/login` and `/logout` routes for a given [authentication backend](../../authentication/)
.

Check the [routes usage](../../../usage/routes/)
 to learn how to use them.

Setup[¶](#setup "Permanent link")

----------------------------------

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import FastAPI [](#__codelineno-0-4) from fastapi_users import FastAPIUsers [](#__codelineno-0-5) [](#__codelineno-0-6) from .db import User [](#__codelineno-0-7) [](#__codelineno-0-8) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-9)     get_user_manager, [](#__codelineno-0-10)     [auth_backend], [](#__codelineno-0-11) ) [](#__codelineno-0-12) [](#__codelineno-0-13) app = FastAPI() [](#__codelineno-0-14) app.include_router( [](#__codelineno-0-15)     fastapi_users.get_auth_router(auth_backend), [](#__codelineno-0-16)     prefix="/auth/jwt", [](#__codelineno-0-17)     tags=["auth"], [](#__codelineno-0-18) )`

### Optional: user verification[¶](#optional-user-verification "Permanent link")

You can require the user to be **verified** (i.e. `is_verified` property set to `True`) to allow login. You have to set the `requires_verification` parameter to `True` on the router instantiation method:

`[](#__codelineno-1-1) app.include_router( [](#__codelineno-1-2)     fastapi_users.get_auth_router(auth_backend, requires_verification=True), [](#__codelineno-1-3)     prefix="/auth/jwt", [](#__codelineno-1-4)     tags=["auth"], [](#__codelineno-1-5) )`

Back to top

---

# Introduction - FastAPI Users

 



Routers[¶](#routers "Permanent link")

======================================

We're almost there! The last step is to configure the `FastAPIUsers` object that will wire the user manager, the authentication classes and let us generate the actual **API routes**.

Configure `FastAPIUsers`[¶](#configure-fastapiusers "Permanent link")

----------------------------------------------------------------------

Configure `FastAPIUsers` object with the elements we defined before. More precisely:

*   `get_user_manager`: Dependency callable getter to inject the user manager class instance. See [UserManager](../user-manager/)
    .
*   `auth_backends`: List of authentication backends. See [Authentication](../authentication/)
    .

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi_users import FastAPIUsers [](#__codelineno-0-4) [](#__codelineno-0-5) from .db import User [](#__codelineno-0-6) [](#__codelineno-0-7) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-8)     get_user_manager, [](#__codelineno-0-9)     [auth_backend], [](#__codelineno-0-10) )`

Typing: User and ID generic types are expected

You can see that we define two generic types when instantiating:

*   `User`, which is the user model we defined in the database part
*   The ID, which should correspond to the type of ID you use on your model. Here, we chose UUID, but it can be anything, like an integer or a MongoDB ObjectID.

It'll help you to have **good type-checking and auto-completion**.

Available routers[¶](#available-routers "Permanent link")

----------------------------------------------------------

This helper class will let you generate useful routers to setup the authentication system. Each of them is **optional**, so you can pick only the one that you are interested in! Here are the routers provided:

*   [Auth router](auth/)
    : Provides `/login` and `/logout` routes for a given [authentication backend](../authentication/)
    .
*   [Register router](register/)
    : Provides `/register` routes to allow a user to create a new account.
*   [Reset password router](reset/)
    : Provides `/forgot-password` and `/reset-password` routes to allow a user to reset its password.
*   [Verify router](verify/)
    : Provides `/request-verify-token` and `/verify` routes to manage user e-mail verification.
*   [Users router](users/)
    : Provides routes to manage users.
*   [OAuth router](../oauth/)
    : Provides routes to perform an OAuth authentication against a service provider (like Google or Facebook).

You should check out each of them to understand how to use them.

Back to top

---

# Register routes - FastAPI Users

 



Register routes[¶](#register-routes "Permanent link")

======================================================

The register router will generate a `/register` route to allow a user to create a new account.

Check the [routes usage](../../../usage/routes/)
 to learn how to use them.

Setup[¶](#setup "Permanent link")

----------------------------------

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import FastAPI [](#__codelineno-0-4) from fastapi_users import FastAPIUsers [](#__codelineno-0-5) [](#__codelineno-0-6) from .db import User [](#__codelineno-0-7) from .schemas import UserCreate, UserRead [](#__codelineno-0-8) [](#__codelineno-0-9) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-10)     get_user_manager, [](#__codelineno-0-11)     [auth_backend], [](#__codelineno-0-12) ) [](#__codelineno-0-13) [](#__codelineno-0-14) app = FastAPI() [](#__codelineno-0-15) app.include_router( [](#__codelineno-0-16)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-0-17)     prefix="/auth", [](#__codelineno-0-18)     tags=["auth"], [](#__codelineno-0-19) )`

Back to top

---

# Verify router - FastAPI Users

 



Verify router[¶](#verify-router "Permanent link")

==================================================

This router provides routes to manage user email verification. Check the [routes usage](../../../usage/routes/)
 to learn how to use them.

👏👏👏

A big thank you to [Edd Salkield](https://github.com/eddsalkield)
 and [Mark Todd](https://github.com/mark-todd)
 who worked hard on this feature!

Setup[¶](#setup "Permanent link")

----------------------------------

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import FastAPI [](#__codelineno-0-4) from fastapi_users import FastAPIUsers [](#__codelineno-0-5) [](#__codelineno-0-6) from .db import User [](#__codelineno-0-7) from .schemas import UserRead [](#__codelineno-0-8) [](#__codelineno-0-9) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-10)     get_user_manager, [](#__codelineno-0-11)     [auth_backend], [](#__codelineno-0-12) ) [](#__codelineno-0-13) [](#__codelineno-0-14) app = FastAPI() [](#__codelineno-0-15) app.include_router( [](#__codelineno-0-16)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-0-17)     prefix="/auth", [](#__codelineno-0-18)     tags=["auth"], [](#__codelineno-0-19) )`

Back to top

---

# Users router - FastAPI Users

 



Users router[¶](#users-router "Permanent link")

================================================

This router provides routes to manage users. Check the [routes usage](../../../usage/routes/)
 to learn how to use them.

Setup[¶](#setup "Permanent link")

----------------------------------

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import FastAPI [](#__codelineno-0-4) from fastapi_users import FastAPIUsers [](#__codelineno-0-5) [](#__codelineno-0-6) from .db import User [](#__codelineno-0-7) from .schemas import UserRead, UserUpdate [](#__codelineno-0-8) [](#__codelineno-0-9) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-10)     get_user_manager, [](#__codelineno-0-11)     [auth_backend], [](#__codelineno-0-12) ) [](#__codelineno-0-13) [](#__codelineno-0-14) app = FastAPI() [](#__codelineno-0-15) app.include_router( [](#__codelineno-0-16)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-0-17)     prefix="/users", [](#__codelineno-0-18)     tags=["users"], [](#__codelineno-0-19) )`

### Optional: user verification[¶](#optional-user-verification "Permanent link")

You can require the user to be **verified** (i.e. `is_verified` property set to `True`) to access those routes. You have to set the `requires_verification` parameter to `True` on the router instantiation method:

`[](#__codelineno-1-1) app.include_router( [](#__codelineno-1-2)     fastapi_users.get_users_router(UserRead, UserUpdate, requires_verification=True), [](#__codelineno-1-3)     prefix="/users", [](#__codelineno-1-4)     tags=["users"], [](#__codelineno-1-5) )`

Back to top

---

# Reset password router - FastAPI Users

 



Reset password router[¶](#reset-password-router "Permanent link")

==================================================================

The reset password router will generate `/forgot-password` (the user asks for a token to reset its password) and `/reset-password` (the user changes its password given the token) routes.

Check the [routes usage](../../../usage/routes/)
 to learn how to use them.

Setup[¶](#setup "Permanent link")

----------------------------------

`[](#__codelineno-0-1) import uuid [](#__codelineno-0-2) [](#__codelineno-0-3) from fastapi import FastAPI [](#__codelineno-0-4) from fastapi_users import FastAPIUsers [](#__codelineno-0-5) [](#__codelineno-0-6) from .db import User [](#__codelineno-0-7) [](#__codelineno-0-8) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-0-9)     get_user_manager, [](#__codelineno-0-10)     [auth_backend], [](#__codelineno-0-11) ) [](#__codelineno-0-12) [](#__codelineno-0-13) app = FastAPI() [](#__codelineno-0-14) app.include_router( [](#__codelineno-0-15)     fastapi_users.get_reset_password_router(), [](#__codelineno-0-16)     prefix="/auth", [](#__codelineno-0-17)     tags=["auth"], [](#__codelineno-0-18) )`

Back to top

---

# Password hash - FastAPI Users

 



Password hash[¶](#password-hash "Permanent link")

==================================================

By default, FastAPI Users will use the [Argon2 algorithm](https://en.wikipedia.org/wiki/Argon2)
 to **hash and salt** passwords before storing them in the database, with backwards-compatibility with [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
.

The implementation is provided by [pwdlib](https://github.com/frankie567/pwdlib)
, a modern password hashing wrapper.

Customize `PasswordHash`[¶](#customize-passwordhash "Permanent link")

----------------------------------------------------------------------

If you need to tune the algorithms used or their settings, you can customize the [`PasswordHash` object of pwdlib](https://frankie567.github.io/pwdlib/reference/pwdlib/#pwdlib.PasswordHash)
.

For this, you'll need to instantiate the `PasswordHelper` class and pass it your `PasswordHash`. The example below shows you how you can create a `PasswordHash` to only support the Argon2 algorithm.

`[](#__codelineno-0-1) from fastapi_users.password import PasswordHelper [](#__codelineno-0-2) from pwdlib import PasswordHash, exceptions [](#__codelineno-0-3) from pwdlib.hashers.argon2 import Argon2Hasher [](#__codelineno-0-4) [](#__codelineno-0-5) password_hash = PasswordHash(( [](#__codelineno-0-6)     Argon2Hasher(), [](#__codelineno-0-7) )) [](#__codelineno-0-8) password_helper = PasswordHelper(password_hash)`

Finally, pass the `password_helper` variable while instantiating your `UserManager`:

`[](#__codelineno-1-1) async def get_user_manager(user_db=Depends(get_user_db)): [](#__codelineno-1-2)     yield UserManager(user_db, password_helper)`

Password hashes are automatically upgraded

FastAPI Users takes care of upgrading the password hash to a more recent algorithm when needed.

Typically, when a user logs in, we'll check if the password hash algorithm is deprecated.

If it is, we take the opportunity of having the password in plain-text at hand (since the user just logged in!) to hash it with a better algorithm and update it in database.

Full customization[¶](#full-customization "Permanent link")

------------------------------------------------------------

If you don't wish to use `pwdlib` at all – **which we don't recommend unless you're absolutely sure of what you're doing** — you can implement your own `PasswordHelper` class as long as it implements the `PasswordHelperProtocol` and its methods.

`[](#__codelineno-2-1) from typing import Tuple [](#__codelineno-2-2) [](#__codelineno-2-3) from fastapi_users.password import PasswordHelperProtocol [](#__codelineno-2-4) [](#__codelineno-2-5) class PasswordHelper(PasswordHelperProtocol): [](#__codelineno-2-6)     def verify_and_update( [](#__codelineno-2-7)         self, plain_password: str, hashed_password: str [](#__codelineno-2-8)     ) -> Tuple[bool, str]: [](#__codelineno-2-9)         ... [](#__codelineno-2-10) [](#__codelineno-2-11)     def hash(self, password: str) -> str: [](#__codelineno-2-12)         ... [](#__codelineno-2-13) [](#__codelineno-2-14)     def generate(self) -> str: [](#__codelineno-2-15)         ...`

Back to top

---

# Full example - FastAPI Users

 



Full example[¶](#full-example "Permanent link")

================================================

Here is a full working example with JWT authentication to help get you started.

Warning

Notice that **SECRET** should be changed to a strong passphrase. Insecure passwords may give attackers full access to your database.

SQLAlchemy[¶](#sqlalchemy "Permanent link")

--------------------------------------------

[Open](https://github.com/fastapi-users/fastapi-users/tree/master/examples/sqlalchemy)

requirements.txtmain.pyapp/app.pyapp/db.pyapp/schemas.pyapp/users.py

`[](#__codelineno-0-1) fastapi [](#__codelineno-0-2) fastapi-users[sqlalchemy] [](#__codelineno-0-3) uvicorn[standard] [](#__codelineno-0-4) aiosqlite`

`[](#__codelineno-1-1) import uvicorn [](#__codelineno-1-2) [](#__codelineno-1-3) if __name__ == "__main__": [](#__codelineno-1-4)     uvicorn.run("app.app:app", host="0.0.0.0", log_level="info")`

`[](#__codelineno-2-1) from contextlib import asynccontextmanager [](#__codelineno-2-2) [](#__codelineno-2-3) from fastapi import Depends, FastAPI [](#__codelineno-2-4) [](#__codelineno-2-5) from app.db import User, create_db_and_tables [](#__codelineno-2-6) from app.schemas import UserCreate, UserRead, UserUpdate [](#__codelineno-2-7) from app.users import auth_backend, current_active_user, fastapi_users [](#__codelineno-2-8) [](#__codelineno-2-9) [](#__codelineno-2-10) @asynccontextmanager [](#__codelineno-2-11) async def lifespan(app: FastAPI): [](#__codelineno-2-12)     # Not needed if you setup a migration system like Alembic [](#__codelineno-2-13)     await create_db_and_tables() [](#__codelineno-2-14)     yield [](#__codelineno-2-15) [](#__codelineno-2-16) [](#__codelineno-2-17) app = FastAPI(lifespan=lifespan) [](#__codelineno-2-18) [](#__codelineno-2-19) app.include_router( [](#__codelineno-2-20)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-2-21) ) [](#__codelineno-2-22) app.include_router( [](#__codelineno-2-23)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-2-24)     prefix="/auth", [](#__codelineno-2-25)     tags=["auth"], [](#__codelineno-2-26) ) [](#__codelineno-2-27) app.include_router( [](#__codelineno-2-28)     fastapi_users.get_reset_password_router(), [](#__codelineno-2-29)     prefix="/auth", [](#__codelineno-2-30)     tags=["auth"], [](#__codelineno-2-31) ) [](#__codelineno-2-32) app.include_router( [](#__codelineno-2-33)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-2-34)     prefix="/auth", [](#__codelineno-2-35)     tags=["auth"], [](#__codelineno-2-36) ) [](#__codelineno-2-37) app.include_router( [](#__codelineno-2-38)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-2-39)     prefix="/users", [](#__codelineno-2-40)     tags=["users"], [](#__codelineno-2-41) ) [](#__codelineno-2-42) [](#__codelineno-2-43) [](#__codelineno-2-44) @app.get("/authenticated-route") [](#__codelineno-2-45) async def authenticated_route(user: User = Depends(current_active_user)): [](#__codelineno-2-46)     return {"message": f"Hello {user.email}!"}`

`[](#__codelineno-3-1) from collections.abc import AsyncGenerator [](#__codelineno-3-2) [](#__codelineno-3-3) from fastapi import Depends [](#__codelineno-3-4) from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase [](#__codelineno-3-5) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-3-6) from sqlalchemy.orm import DeclarativeBase [](#__codelineno-3-7) [](#__codelineno-3-8) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-3-9) [](#__codelineno-3-10) [](#__codelineno-3-11) class Base(DeclarativeBase): [](#__codelineno-3-12)     pass [](#__codelineno-3-13) [](#__codelineno-3-14) [](#__codelineno-3-15) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-3-16)     pass [](#__codelineno-3-17) [](#__codelineno-3-18) [](#__codelineno-3-19) engine = create_async_engine(DATABASE_URL) [](#__codelineno-3-20) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-3-21) [](#__codelineno-3-22) [](#__codelineno-3-23) async def create_db_and_tables(): [](#__codelineno-3-24)     async with engine.begin() as conn: [](#__codelineno-3-25)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-3-26) [](#__codelineno-3-27) [](#__codelineno-3-28) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-3-29)     async with async_session_maker() as session: [](#__codelineno-3-30)         yield session [](#__codelineno-3-31) [](#__codelineno-3-32) [](#__codelineno-3-33) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-3-34)     yield SQLAlchemyUserDatabase(session, User)`

`[](#__codelineno-4-1) import uuid [](#__codelineno-4-2) [](#__codelineno-4-3) from fastapi_users import schemas [](#__codelineno-4-4) [](#__codelineno-4-5) [](#__codelineno-4-6) class UserRead(schemas.BaseUser[uuid.UUID]): [](#__codelineno-4-7)     pass [](#__codelineno-4-8) [](#__codelineno-4-9) [](#__codelineno-4-10) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-4-11)     pass [](#__codelineno-4-12) [](#__codelineno-4-13) [](#__codelineno-4-14) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-4-15)     pass`

`[](#__codelineno-5-1) import uuid [](#__codelineno-5-2) from typing import Optional [](#__codelineno-5-3) [](#__codelineno-5-4) from fastapi import Depends, Request [](#__codelineno-5-5) from fastapi_users import BaseUserManager, FastAPIUsers, UUIDIDMixin, models [](#__codelineno-5-6) from fastapi_users.authentication import ( [](#__codelineno-5-7)     AuthenticationBackend, [](#__codelineno-5-8)     BearerTransport, [](#__codelineno-5-9)     JWTStrategy, [](#__codelineno-5-10) ) [](#__codelineno-5-11) from fastapi_users.db import SQLAlchemyUserDatabase [](#__codelineno-5-12) [](#__codelineno-5-13) from app.db import User, get_user_db [](#__codelineno-5-14) [](#__codelineno-5-15) SECRET = "SECRET" [](#__codelineno-5-16) [](#__codelineno-5-17) [](#__codelineno-5-18) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-5-19)     reset_password_token_secret = SECRET [](#__codelineno-5-20)     verification_token_secret = SECRET [](#__codelineno-5-21) [](#__codelineno-5-22)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-5-23)         print(f"User {user.id} has registered.") [](#__codelineno-5-24) [](#__codelineno-5-25)     async def on_after_forgot_password( [](#__codelineno-5-26)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-5-27)     ): [](#__codelineno-5-28)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-5-29) [](#__codelineno-5-30)     async def on_after_request_verify( [](#__codelineno-5-31)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-5-32)     ): [](#__codelineno-5-33)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-5-34) [](#__codelineno-5-35) [](#__codelineno-5-36) async def get_user_manager(user_db: SQLAlchemyUserDatabase = Depends(get_user_db)): [](#__codelineno-5-37)     yield UserManager(user_db) [](#__codelineno-5-38) [](#__codelineno-5-39) [](#__codelineno-5-40) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-5-41) [](#__codelineno-5-42) [](#__codelineno-5-43) def get_jwt_strategy() -> JWTStrategy[models.UP, models.ID]: [](#__codelineno-5-44)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-5-45) [](#__codelineno-5-46) [](#__codelineno-5-47) auth_backend = AuthenticationBackend( [](#__codelineno-5-48)     name="jwt", [](#__codelineno-5-49)     transport=bearer_transport, [](#__codelineno-5-50)     get_strategy=get_jwt_strategy, [](#__codelineno-5-51) ) [](#__codelineno-5-52) [](#__codelineno-5-53) fastapi_users = FastAPIUsers[User, uuid.UUID](get_user_manager, [auth_backend]) [](#__codelineno-5-54) [](#__codelineno-5-55) current_active_user = fastapi_users.current_user(active=True)`

Beanie[¶](#beanie "Permanent link")

------------------------------------

[Open](https://github.com/fastapi-users/fastapi-users/tree/master/examples/beanie)

requirements.txtmain.pyapp/app.pyapp/db.pyapp/schemas.pyapp/users.py

`[](#__codelineno-6-1) fastapi [](#__codelineno-6-2) fastapi-users[beanie] [](#__codelineno-6-3) uvicorn[standard]`

`[](#__codelineno-7-1) import uvicorn [](#__codelineno-7-2) [](#__codelineno-7-3) if __name__ == "__main__": [](#__codelineno-7-4)     uvicorn.run("app.app:app", host="0.0.0.0", log_level="info")`

`[](#__codelineno-8-1) from contextlib import asynccontextmanager [](#__codelineno-8-2) [](#__codelineno-8-3) from beanie import init_beanie [](#__codelineno-8-4) from fastapi import Depends, FastAPI [](#__codelineno-8-5) [](#__codelineno-8-6) from app.db import User, db [](#__codelineno-8-7) from app.schemas import UserCreate, UserRead, UserUpdate [](#__codelineno-8-8) from app.users import auth_backend, current_active_user, fastapi_users [](#__codelineno-8-9) [](#__codelineno-8-10) [](#__codelineno-8-11) @asynccontextmanager [](#__codelineno-8-12) async def lifespan(app: FastAPI): [](#__codelineno-8-13)     await init_beanie( [](#__codelineno-8-14)         database=db, [](#__codelineno-8-15)         document_models=[ [](#__codelineno-8-16)             User, [](#__codelineno-8-17)         ], [](#__codelineno-8-18)     ) [](#__codelineno-8-19)     yield [](#__codelineno-8-20) [](#__codelineno-8-21) [](#__codelineno-8-22) app = FastAPI(lifespan=lifespan) [](#__codelineno-8-23) [](#__codelineno-8-24) [](#__codelineno-8-25) app.include_router( [](#__codelineno-8-26)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-8-27) ) [](#__codelineno-8-28) app.include_router( [](#__codelineno-8-29)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-8-30)     prefix="/auth", [](#__codelineno-8-31)     tags=["auth"], [](#__codelineno-8-32) ) [](#__codelineno-8-33) app.include_router( [](#__codelineno-8-34)     fastapi_users.get_reset_password_router(), [](#__codelineno-8-35)     prefix="/auth", [](#__codelineno-8-36)     tags=["auth"], [](#__codelineno-8-37) ) [](#__codelineno-8-38) app.include_router( [](#__codelineno-8-39)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-8-40)     prefix="/auth", [](#__codelineno-8-41)     tags=["auth"], [](#__codelineno-8-42) ) [](#__codelineno-8-43) app.include_router( [](#__codelineno-8-44)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-8-45)     prefix="/users", [](#__codelineno-8-46)     tags=["users"], [](#__codelineno-8-47) ) [](#__codelineno-8-48) [](#__codelineno-8-49) [](#__codelineno-8-50) @app.get("/authenticated-route") [](#__codelineno-8-51) async def authenticated_route(user: User = Depends(current_active_user)): [](#__codelineno-8-52)     return {"message": f"Hello {user.email}!"}`

`[](#__codelineno-9-1) import motor.motor_asyncio [](#__codelineno-9-2) from beanie import Document [](#__codelineno-9-3) from fastapi_users.db import BeanieBaseUser [](#__codelineno-9-4) from fastapi_users_db_beanie import BeanieUserDatabase [](#__codelineno-9-5) [](#__codelineno-9-6) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-9-7) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-9-8)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-9-9) ) [](#__codelineno-9-10) db = client["database_name"] [](#__codelineno-9-11) [](#__codelineno-9-12) [](#__codelineno-9-13) class User(BeanieBaseUser, Document): [](#__codelineno-9-14)     pass [](#__codelineno-9-15) [](#__codelineno-9-16) [](#__codelineno-9-17) async def get_user_db(): [](#__codelineno-9-18)     yield BeanieUserDatabase(User)`

`[](#__codelineno-10-1) from beanie import PydanticObjectId [](#__codelineno-10-2) from fastapi_users import schemas [](#__codelineno-10-3) [](#__codelineno-10-4) [](#__codelineno-10-5) class UserRead(schemas.BaseUser[PydanticObjectId]): [](#__codelineno-10-6)     pass [](#__codelineno-10-7) [](#__codelineno-10-8) [](#__codelineno-10-9) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-10-10)     pass [](#__codelineno-10-11) [](#__codelineno-10-12) [](#__codelineno-10-13) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-10-14)     pass`

`[](#__codelineno-11-1) from typing import Optional [](#__codelineno-11-2) [](#__codelineno-11-3) from beanie import PydanticObjectId [](#__codelineno-11-4) from fastapi import Depends, Request [](#__codelineno-11-5) from fastapi_users import BaseUserManager, FastAPIUsers [](#__codelineno-11-6) from fastapi_users.authentication import ( [](#__codelineno-11-7)     AuthenticationBackend, [](#__codelineno-11-8)     BearerTransport, [](#__codelineno-11-9)     JWTStrategy, [](#__codelineno-11-10) ) [](#__codelineno-11-11) from fastapi_users.db import BeanieUserDatabase, ObjectIDIDMixin [](#__codelineno-11-12) [](#__codelineno-11-13) from app.db import User, get_user_db [](#__codelineno-11-14) [](#__codelineno-11-15) SECRET = "SECRET" [](#__codelineno-11-16) [](#__codelineno-11-17) [](#__codelineno-11-18) class UserManager(ObjectIDIDMixin, BaseUserManager[User, PydanticObjectId]): [](#__codelineno-11-19)     reset_password_token_secret = SECRET [](#__codelineno-11-20)     verification_token_secret = SECRET [](#__codelineno-11-21) [](#__codelineno-11-22)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-11-23)         print(f"User {user.id} has registered.") [](#__codelineno-11-24) [](#__codelineno-11-25)     async def on_after_forgot_password( [](#__codelineno-11-26)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-11-27)     ): [](#__codelineno-11-28)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-11-29) [](#__codelineno-11-30)     async def on_after_request_verify( [](#__codelineno-11-31)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-11-32)     ): [](#__codelineno-11-33)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-11-34) [](#__codelineno-11-35) [](#__codelineno-11-36) async def get_user_manager(user_db: BeanieUserDatabase = Depends(get_user_db)): [](#__codelineno-11-37)     yield UserManager(user_db) [](#__codelineno-11-38) [](#__codelineno-11-39) [](#__codelineno-11-40) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-11-41) [](#__codelineno-11-42) [](#__codelineno-11-43) def get_jwt_strategy() -> JWTStrategy: [](#__codelineno-11-44)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-11-45) [](#__codelineno-11-46) [](#__codelineno-11-47) auth_backend = AuthenticationBackend( [](#__codelineno-11-48)     name="jwt", [](#__codelineno-11-49)     transport=bearer_transport, [](#__codelineno-11-50)     get_strategy=get_jwt_strategy, [](#__codelineno-11-51) ) [](#__codelineno-11-52) [](#__codelineno-11-53) fastapi_users = FastAPIUsers[User, PydanticObjectId](get_user_manager, [auth_backend]) [](#__codelineno-11-54) [](#__codelineno-11-55) current_active_user = fastapi_users.current_user(active=True)`

What now?[¶](#what-now "Permanent link")

-----------------------------------------

You're ready to go! Be sure to check the [Usage](../../usage/routes/)
 section to understand how to work with **FastAPI Users**.

Back to top

---

# Routes - FastAPI Users

 



Routes[¶](#routes "Permanent link")

====================================

You'll find here the routes exposed by **FastAPI Users**. Note that you can also review them through the [interactive API docs](https://fastapi.tiangolo.com/tutorial/first-steps/#interactive-api-docs)
.

Auth router[¶](#auth-router "Permanent link")

----------------------------------------------

Each [authentication backend](../../configuration/authentication/)
 you [generate a router for](../../configuration/routers/auth/)
 will produce the following routes. Take care about the prefix you gave it, especially if you have several backends.

### `POST /login`[¶](#post-login "Permanent link")

Login a user against the method named `name`. Check the corresponding [authentication method](../../configuration/authentication/)
 to view the success response.

Payload (`application/x-www-form-urlencoded`)

`[](#__codelineno-0-1) username=king.arthur@camelot.bt&password=guinevere`

`422 Validation Error`

`400 Bad Request`

Bad credentials or the user is inactive.

`[](#__codelineno-1-1) { [](#__codelineno-1-2)     "detail": "LOGIN_BAD_CREDENTIALS" [](#__codelineno-1-3) }`

`400 Bad Request`

The user is not verified.

`[](#__codelineno-2-1) { [](#__codelineno-2-2)     "detail": "LOGIN_USER_NOT_VERIFIED" [](#__codelineno-2-3) }`

### `POST /logout`[¶](#post-logout "Permanent link")

Logout the authenticated user against the method named `name`. Check the corresponding [authentication method](../../configuration/authentication/)
 to view the success response.

`401 Unauthorized`

Missing token or inactive user.

`204 No content`

The logout process was successful.

Register router[¶](#register-router "Permanent link")

------------------------------------------------------

### `POST /register`[¶](#post-register "Permanent link")

Register a new user. Will call the `on_after_register` [handler](../../configuration/user-manager/#on_after_register)
 on successful registration.

Payload

`[](#__codelineno-3-1) { [](#__codelineno-3-2)     "email": "king.arthur@camelot.bt", [](#__codelineno-3-3)     "password": "guinevere" [](#__codelineno-3-4) }`

`201 Created`

`[](#__codelineno-4-1) { [](#__codelineno-4-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-4-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-4-4)     "is_active": true, [](#__codelineno-4-5)     "is_superuser": false [](#__codelineno-4-6) }`

`422 Validation Error`

`400 Bad Request`

A user already exists with this email.

`[](#__codelineno-5-1) { [](#__codelineno-5-2)     "detail": "REGISTER_USER_ALREADY_EXISTS" [](#__codelineno-5-3) }`

`400 Bad Request`

[Password validation](../../configuration/user-manager/#validate_password)
 failed.

`[](#__codelineno-6-1) { [](#__codelineno-6-2)     "detail": { [](#__codelineno-6-3)         "code": "REGISTER_INVALID_PASSWORD", [](#__codelineno-6-4)         "reason": "Password should be at least 3 characters" [](#__codelineno-6-5)     } [](#__codelineno-6-6) }`

Reset password router[¶](#reset-password-router "Permanent link")

------------------------------------------------------------------

### `POST /forgot-password`[¶](#post-forgot-password "Permanent link")

Request a reset password procedure. Will generate a temporary token and call the `on_after_forgot_password` [handler](../../configuration/user-manager/#on_after_forgot_password)
 if the user exists.

To prevent malicious users from guessing existing users in your database, the route will always return a `202 Accepted` response, even if the user requested does not exist.

Payload

`[](#__codelineno-7-1) { [](#__codelineno-7-2)     "email": "king.arthur@camelot.bt" [](#__codelineno-7-3) }`

`202 Accepted`

### `POST /reset-password`[¶](#post-reset-password "Permanent link")

Reset a password. Requires the token generated by the `/forgot-password` route.

Payload

`[](#__codelineno-8-1) { [](#__codelineno-8-2)     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTIyMWZmYzktNjQwZi00MzcyLTg2ZDMtY2U2NDJjYmE1NjAzIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTcxNTA0MTkzfQ.M10bjOe45I5Ncu_uXvOmVV8QxnL-nZfcH96U90JaocI", [](#__codelineno-8-3)     "password": "merlin" [](#__codelineno-8-4) }`

`200 OK`

`422 Validation Error`

`400 Bad Request`

Bad or expired token.

`[](#__codelineno-9-1) { [](#__codelineno-9-2)     "detail": "RESET_PASSWORD_BAD_TOKEN" [](#__codelineno-9-3) }`

`400 Bad Request`

[Password validation](../../configuration/user-manager/#validate_password)
 failed.

`[](#__codelineno-10-1) { [](#__codelineno-10-2)     "detail": { [](#__codelineno-10-3)         "code": "RESET_PASSWORD_INVALID_PASSWORD", [](#__codelineno-10-4)         "reason": "Password should be at least 3 characters" [](#__codelineno-10-5)     } [](#__codelineno-10-6) }`

Verify router[¶](#verify-router "Permanent link")

--------------------------------------------------

### `POST /request-verify-token`[¶](#post-request-verify-token "Permanent link")

Request a user to verify their e-mail. Will generate a temporary token and call the `on_after_request_verify` [handler](../../configuration/user-manager/#on_after_request_verify)
 if the user **exists**, **active** and **not already verified**.

To prevent malicious users from guessing existing users in your database, the route will always return a `202 Accepted` response, even if the user requested does not exist, not active or already verified.

Payload

`[](#__codelineno-11-1) { [](#__codelineno-11-2)     "email": "king.arthur@camelot.bt" [](#__codelineno-11-3) }`

`202 Accepted`

### `POST /verify`[¶](#post-verify "Permanent link")

Verify a user. Requires the token generated by the `/request-verify-token` route. Will call the call the `on_after_verify` [handler](../../configuration/user-manager/#on_after_verify)
 on success.

Payload

`[](#__codelineno-12-1) { [](#__codelineno-12-2)     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTIyMWZmYzktNjQwZi00MzcyLTg2ZDMtY2U2NDJjYmE1NjAzIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTcxNTA0MTkzfQ.M10bjOe45I5Ncu_uXvOmVV8QxnL-nZfcH96U90JaocI" [](#__codelineno-12-3) }`

`200 OK`

`422 Validation Error`

`400 Bad Request`

Bad token, not existing user or not the e-mail currently set for the user.

`[](#__codelineno-13-1) { [](#__codelineno-13-2)     "detail": "VERIFY_USER_BAD_TOKEN" [](#__codelineno-13-3) }`

`400 Bad Request`

The user is already verified.

`[](#__codelineno-14-1) { [](#__codelineno-14-2)     "detail": "VERIFY_USER_ALREADY_VERIFIED" [](#__codelineno-14-3) }`

OAuth router[¶](#oauth-router "Permanent link")

------------------------------------------------

Each OAuth router you define will expose the two following routes.

### `GET /authorize`[¶](#get-authorize "Permanent link")

Return the authorization URL for the OAuth service where you should redirect your user.

Query parameters

*   `scopes`: Optional list of scopes to ask for. Expected format: `scopes=a&scopes=b`.

`200 OK`

`[](#__codelineno-15-1) { [](#__codelineno-15-2)     "authorization_url": "https://www.tintagel.bt/oauth/authorize?client_id=CLIENT_ID&scopes=a+b&redirect_uri=https://www.camelot.bt/oauth/callback" [](#__codelineno-15-3) }`

### `GET /callback`[¶](#get-callback "Permanent link")

Handle the OAuth callback.

Query parameters

*   `code`: OAuth callback code.
*   `state`: State token.
*   `error`: OAuth error.

Depending on the situation, several things can happen:

*   The OAuth account exists in database and is linked to a user:
    *   OAuth account is updated in database with fresh access token.
    *   The user is authenticated following the chosen [authentication method](../../configuration/authentication/)
        .
*   The OAuth account doesn't exist in database but a user with the same email address exists:
    *   By default, an HTTP 400 error is raised.
    *   If [the `associate_by_email` flag is set to `True`](../../configuration/oauth/#existing-account-association)
         on the router declaration, OAuth account is linked to the user. The user is authenticated following the chosen [authentication method](../../configuration/authentication/)
        .
*   The OAuth account doesn't exist in database and no user with the email address exists:
    *   A new user is created and linked to the OAuth account.
    *   The user is authenticated following the chosen [authentication method](../../configuration/authentication/)
        .

`400 Bad Request`

Invalid token.

`400 Bad Request`

The OAuth provider didn't return an e-mail address. Make sure this provider return e-mail address through their API and you have asked for the required scope.

`[](#__codelineno-16-1) { [](#__codelineno-16-2)     "detail": "OAUTH_NOT_AVAILABLE_EMAIL" [](#__codelineno-16-3) }`

`400 Bad Request`

Another user with the same e-mail address already exists.

`[](#__codelineno-17-1) { [](#__codelineno-17-2)     "detail": "OAUTH_USER_ALREADY_EXISTS" [](#__codelineno-17-3) }`

`400 Bad Request`

User is inactive.

`[](#__codelineno-18-1) { [](#__codelineno-18-2)     "detail": "LOGIN_BAD_CREDENTIALS" [](#__codelineno-18-3) }`

OAuth association router[¶](#oauth-association-router "Permanent link")

------------------------------------------------------------------------

Each OAuth association router you define will expose the two following routes.

### `GET /authorize`[¶](#get-authorize_1 "Permanent link")

Return the authorization URL for the OAuth service where you should redirect your user.

Query parameters

*   `scopes`: Optional list of scopes to ask for. Expected format: `scopes=a&scopes=b`.

`401 Unauthorized`

Missing token or inactive user.

`200 OK`

`[](#__codelineno-19-1) { [](#__codelineno-19-2)     "authorization_url": "https://www.tintagel.bt/oauth/authorize?client_id=CLIENT_ID&scopes=a+b&redirect_uri=https://www.camelot.bt/oauth/callback" [](#__codelineno-19-3) }`

### `GET /callback`[¶](#get-callback_1 "Permanent link")

Handle the OAuth callback and add the OAuth account to the current authenticated active user.

Query parameters

*   `code`: OAuth callback code.
*   `state`: State token.
*   `error`: OAuth error.

`401 Unauthorized`

Missing token or inactive user.

`400 Bad Request`

Invalid token.

`400 Bad Request`

The OAuth provider didn't return an e-mail address. Make sure this provider return e-mail address through their API and you have asked for the required scope.

`[](#__codelineno-20-1) { [](#__codelineno-20-2)     "detail": "OAUTH_NOT_AVAILABLE_EMAIL" [](#__codelineno-20-3) }`

`200 OK`

`[](#__codelineno-21-1) { [](#__codelineno-21-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-21-3)     "email": "king.arthur@tintagel.bt", [](#__codelineno-21-4)     "is_active": true, [](#__codelineno-21-5)     "is_superuser": false, [](#__codelineno-21-6)     "oauth_accounts": [ [](#__codelineno-21-7)         { [](#__codelineno-21-8)             "id": "6c98caf5-9bc5-4c4f-8a45-a0ae0c40cd77", [](#__codelineno-21-9)             "oauth_name": "TINTAGEL", [](#__codelineno-21-10)             "access_token": "ACCESS_TOKEN", [](#__codelineno-21-11)             "expires_at": "1641040620", [](#__codelineno-21-12)             "account_id": "king_arthur_tintagel", [](#__codelineno-21-13)             "account_email": "king.arthur@tintagel.bt" [](#__codelineno-21-14)         } [](#__codelineno-21-15)     ] [](#__codelineno-21-16) }`

Users router[¶](#users-router "Permanent link")

------------------------------------------------

### `GET /me`[¶](#get-me "Permanent link")

Return the current authenticated active user.

`200 OK`

`[](#__codelineno-22-1) { [](#__codelineno-22-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-22-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-22-4)     "is_active": true, [](#__codelineno-22-5)     "is_superuser": false [](#__codelineno-22-6) }`

`401 Unauthorized`

Missing token or inactive user.

### `PATCH /me`[¶](#patch-me "Permanent link")

Update the current authenticated active user.

Payload

`[](#__codelineno-23-1) { [](#__codelineno-23-2)     "email": "king.arthur@tintagel.bt", [](#__codelineno-23-3)     "password": "merlin" [](#__codelineno-23-4) }`

`200 OK`

`[](#__codelineno-24-1) { [](#__codelineno-24-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-24-3)     "email": "king.arthur@tintagel.bt", [](#__codelineno-24-4)     "is_active": true, [](#__codelineno-24-5)     "is_superuser": false [](#__codelineno-24-6) }`

`401 Unauthorized`

Missing token or inactive user.

`400 Bad Request`

[Password validation](../../configuration/user-manager/#validate_password)
 failed.

`[](#__codelineno-25-1) { [](#__codelineno-25-2)     "detail": { [](#__codelineno-25-3)         "code": "UPDATE_USER_INVALID_PASSWORD", [](#__codelineno-25-4)         "reason": "Password should be at least 3 characters" [](#__codelineno-25-5)     } [](#__codelineno-25-6) }`

`400 Bad Request`

A user with this email already exists.

`[](#__codelineno-26-1) { [](#__codelineno-26-2)     "detail": "UPDATE_USER_EMAIL_ALREADY_EXISTS" [](#__codelineno-26-3) }`

`422 Validation Error`

### `GET /{user_id}`[¶](#get-user_id "Permanent link")

Return the user with id `user_id`.

`200 OK`

`[](#__codelineno-27-1) { [](#__codelineno-27-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-27-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-27-4)     "is_active": true, [](#__codelineno-27-5)     "is_superuser": false [](#__codelineno-27-6) }`

`401 Unauthorized`

Missing token or inactive user.

`403 Forbidden`

Not a superuser.

`404 Not found`

The user does not exist.

### `PATCH /{user_id}`[¶](#patch-user_id "Permanent link")

Update the user with id `user_id`.

Payload

`[](#__codelineno-28-1) { [](#__codelineno-28-2)     "email": "king.arthur@tintagel.bt", [](#__codelineno-28-3)     "password": "merlin", [](#__codelineno-28-4)     "is_active": false, [](#__codelineno-28-5)     "is_superuser": true [](#__codelineno-28-6) }`

`200 OK`

`[](#__codelineno-29-1) { [](#__codelineno-29-2)     "id": "57cbb51a-ab71-4009-8802-3f54b4f2e23", [](#__codelineno-29-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-29-4)     "is_active": false, [](#__codelineno-29-5)     "is_superuser": true [](#__codelineno-29-6) }`

`401 Unauthorized`

Missing token or inactive user.

`403 Forbidden`

Not a superuser.

`404 Not found`

The user does not exist.

`400 Bad Request`

[Password validation](../../configuration/user-manager/#validate_password)
 failed.

`[](#__codelineno-30-1) { [](#__codelineno-30-2)     "detail": { [](#__codelineno-30-3)         "code": "UPDATE_USER_INVALID_PASSWORD", [](#__codelineno-30-4)         "reason": "Password should be at least 3 characters" [](#__codelineno-30-5)     } [](#__codelineno-30-6) }`

`400 Bad Request`

A user with this email already exists.

`[](#__codelineno-31-1) { [](#__codelineno-31-2)     "detail": "UPDATE_USER_EMAIL_ALREADY_EXISTS" [](#__codelineno-31-3) }`

### `DELETE /{user_id}`[¶](#delete-user_id "Permanent link")

Delete the user with id `user_id`.

`204 No content`

`401 Unauthorized`

Missing token or inactive user.

`403 Forbidden`

Not a superuser.

`404 Not found`

The user does not exist.

Back to top

---

# Get current user - FastAPI Users

 



Get current user[¶](#get-current-user "Permanent link")

========================================================

**FastAPI Users** provides a dependency callable to easily inject authenticated user in your routes. They are available from your `FastAPIUsers` instance.

Tip

For more information about how to make an authenticated request to your API, check the documentation of your [Authentication method](../../configuration/authentication/)
.

`current_user`[¶](#current_user "Permanent link")

--------------------------------------------------

Return a dependency callable to retrieve currently authenticated user, passing the following parameters:

*   `optional`: If `True`, `None` is returned if there is no authenticated user or if it doesn't pass the other requirements. Otherwise, throw `401 Unauthorized`. Defaults to `False`.
*   `active`: If `True`, throw `401 Unauthorized` if the authenticated user is inactive. Defaults to `False`.
*   `verified`: If `True`, throw `403 Forbidden` if the authenticated user is not verified. Defaults to `False`.
*   `superuser`: If `True`, throw `403 Forbidden` if the authenticated user is not a superuser. Defaults to `False`.
*   `get_enabled_backends`: Optional dependency callable returning a list of enabled authentication backends. Useful if you want to dynamically enable some authentication backends based on external logic, like a configuration in database. By default, all specified authentication backends are enabled. _Please not however that every backends will appear in the OpenAPI documentation, as FastAPI resolves it statically._

Create it once and reuse it

This function is a **factory**, a function returning another function 🤯

It's this returned function that will be the dependency called by FastAPI in your API routes.

To avoid having to generate it on each route and avoid issues when unit testing, it's **strongly recommended** that you assign the result in a variable and reuse it at will in your routes. The examples below demonstrate this pattern.

Examples[¶](#examples "Permanent link")

----------------------------------------

### Get the current user (**active or not**)[¶](#get-the-current-user-active-or-not "Permanent link")

`[](#__codelineno-0-1) current_user = fastapi_users.current_user() [](#__codelineno-0-2) [](#__codelineno-0-3) @app.get("/protected-route") [](#__codelineno-0-4) def protected_route(user: User = Depends(current_user)): [](#__codelineno-0-5)     return f"Hello, {user.email}"`

### Get the current **active** user[¶](#get-the-current-active-user "Permanent link")

`[](#__codelineno-1-1) current_active_user = fastapi_users.current_user(active=True) [](#__codelineno-1-2) [](#__codelineno-1-3) @app.get("/protected-route") [](#__codelineno-1-4) def protected_route(user: User = Depends(current_active_user)): [](#__codelineno-1-5)     return f"Hello, {user.email}"`

### Get the current **active** and **verified** user[¶](#get-the-current-active-and-verified-user "Permanent link")

`[](#__codelineno-2-1) current_active_verified_user = fastapi_users.current_user(active=True, verified=True) [](#__codelineno-2-2) [](#__codelineno-2-3) @app.get("/protected-route") [](#__codelineno-2-4) def protected_route(user: User = Depends(current_active_verified_user)): [](#__codelineno-2-5)     return f"Hello, {user.email}"`

### Get the current active **superuser**[¶](#get-the-current-active-superuser "Permanent link")

`[](#__codelineno-3-1) current_superuser = fastapi_users.current_user(active=True, superuser=True) [](#__codelineno-3-2) [](#__codelineno-3-3) @app.get("/protected-route") [](#__codelineno-3-4) def protected_route(user: User = Depends(current_superuser)): [](#__codelineno-3-5)     return f"Hello, {user.email}"`

### Dynamically enable authentication backends[¶](#dynamically-enable-authentication-backends "Permanent link")

Warning

This is an advanced feature for cases where you have several authentication backends that are enabled conditionally. In most cases, you won't need this option.

`[](#__codelineno-4-1) from fastapi import Request [](#__codelineno-4-2) from fastapi_users.authentication import AuthenticationBackend, BearerTransport, CookieTransport, JWTStrategy [](#__codelineno-4-3) [](#__codelineno-4-4) SECRET = "SECRET" [](#__codelineno-4-5) [](#__codelineno-4-6) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-4-7) cookie_transport = CookieTransport(cookie_max_age=3600) [](#__codelineno-4-8) [](#__codelineno-4-9) def get_jwt_strategy() -> JWTStrategy: [](#__codelineno-4-10)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-4-11) [](#__codelineno-4-12) jwt_backend = AuthenticationBackend( [](#__codelineno-4-13)     name="jwt", [](#__codelineno-4-14)     transport=bearer_transport, [](#__codelineno-4-15)     get_strategy=get_jwt_strategy, [](#__codelineno-4-16) ) [](#__codelineno-4-17) cookie_backend = AuthenticationBackend( [](#__codelineno-4-18)     name="jwt", [](#__codelineno-4-19)     transport=cookie_transport, [](#__codelineno-4-20)     get_strategy=get_jwt_strategy, [](#__codelineno-4-21) ) [](#__codelineno-4-22) [](#__codelineno-4-23) async def get_enabled_backends(request: Request): [](#__codelineno-4-24)     """Return the enabled dependencies following custom logic.""" [](#__codelineno-4-25)     if request.url.path == "/protected-route-only-jwt": [](#__codelineno-4-26)         return [jwt_backend] [](#__codelineno-4-27)     else: [](#__codelineno-4-28)         return [cookie_backend, jwt_backend] [](#__codelineno-4-29) [](#__codelineno-4-30) [](#__codelineno-4-31) current_active_user = fastapi_users.current_user(active=True, get_enabled_backends=get_enabled_backends) [](#__codelineno-4-32) [](#__codelineno-4-33) [](#__codelineno-4-34) @app.get("/protected-route") [](#__codelineno-4-35) def protected_route(user: User = Depends(current_active_user)): [](#__codelineno-4-36)     return f"Hello, {user.email}. You are authenticated with a cookie or a JWT." [](#__codelineno-4-37) [](#__codelineno-4-38) [](#__codelineno-4-39) @app.get("/protected-route-only-jwt") [](#__codelineno-4-40) def protected_route(user: User = Depends(current_active_user)): [](#__codelineno-4-41)     return f"Hello, {user.email}. You are authenticated with a JWT."`

In a path operation[¶](#in-a-path-operation "Permanent link")

--------------------------------------------------------------

If you don't need the user in the route logic, you can use this syntax:

`[](#__codelineno-5-1) @app.get("/protected-route", dependencies=[Depends(current_superuser)]) [](#__codelineno-5-2) def protected_route(): [](#__codelineno-5-3)     return "Hello, some user."`

You can read more about this [in FastAPI docs](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-in-path-operation-decorators/)
.

Back to top

---

# Flow - FastAPI Users

 



Flow[¶](#flow "Permanent link")

================================

This page will present you a complete registration and authentication flow once you've setup **FastAPI Users**. Each example will be presented with a `cURL` and an `axios` example.

1\. Registration[¶](#1-registration "Permanent link")

------------------------------------------------------

First step, of course, is to register as a user.

### Request[¶](#request "Permanent link")

cURLaxios

`[](#__codelineno-0-1) curl \ [](#__codelineno-0-2) -H "Content-Type: application/json" \ [](#__codelineno-0-3) -X POST \ [](#__codelineno-0-4) -d "{\"email\": \"king.arthur@camelot.bt\",\"password\": \"guinevere\"}" \ [](#__codelineno-0-5) http://localhost:8000/auth/register`

`[](#__codelineno-1-1) axios.post('http://localhost:8000/auth/register', { [](#__codelineno-1-2)     email: 'king.arthur@camelot.bt', [](#__codelineno-1-3)     password: 'guinevere', [](#__codelineno-1-4) }) [](#__codelineno-1-5) .then((response) => console.log(response)) [](#__codelineno-1-6) .catch((error) => console.log(error));`

### Response[¶](#response "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-2-1) { [](#__codelineno-2-2)     "id": "4fd3477b-eccf-4ee3-8f7d-68ad72261476", [](#__codelineno-2-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-2-4)     "is_active": true, [](#__codelineno-2-5)     "is_superuser": false [](#__codelineno-2-6) }`

Info

Several things to bear in mind:

*   If you have defined other required fields in your `User` model (like a first name or a birthdate), you'll have to provide them in the payload.
*   The user is active by default.
*   The user cannot set `is_active` or `is_superuser` itself at registration. Only a superuser can do it by PATCHing the user.

2\. Login[¶](#2-login "Permanent link")

----------------------------------------

Now, you can login as this new user.

You can generate a [login route](../../configuration/routers/auth/)
 for each [authentication backend](../../configuration/authentication/)
. Each backend will have a different response.

### Bearer + JWT[¶](#bearer-jwt "Permanent link")

#### Request[¶](#request_1 "Permanent link")

cURLaxios

`[](#__codelineno-3-1) curl \ [](#__codelineno-3-2) -H "Content-Type: multipart/form-data" \ [](#__codelineno-3-3) -X POST \ [](#__codelineno-3-4) -F "username=king.arthur@camelot.bt" \ [](#__codelineno-3-5) -F "password=guinevere" \ [](#__codelineno-3-6) http://localhost:8000/auth/jwt/login`

`[](#__codelineno-4-1) const formData = new FormData(); [](#__codelineno-4-2) formData.set('username', 'king.arthur@camelot.bt'); [](#__codelineno-4-3) formData.set('password', 'guinevere'); [](#__codelineno-4-4) axios.post( [](#__codelineno-4-5)     'http://localhost:8000/auth/jwt/login', [](#__codelineno-4-6)     formData, [](#__codelineno-4-7)     { [](#__codelineno-4-8)         headers: { [](#__codelineno-4-9)             'Content-Type': 'multipart/form-data', [](#__codelineno-4-10)         }, [](#__codelineno-4-11)     }, [](#__codelineno-4-12) ) [](#__codelineno-4-13) .then((response) => console.log(response)) [](#__codelineno-4-14) .catch((error) => console.log(error));`

Warning

Notice that we don't send it as a JSON payload here but with **form data** instead. Also, the email is provided by a field named **`username`**.

#### Response[¶](#response_1 "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-5-1) { [](#__codelineno-5-2)     "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNGZkMzQ3N2ItZWNjZi00ZWUzLThmN2QtNjhhZDcyMjYxNDc2IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTg3ODE4NDI5fQ.anO3JR8-WYCozZ4_2-PQ2Ov9O38RaLP2RAzQIiZhteM", [](#__codelineno-5-3)     "token_type": "bearer" [](#__codelineno-5-4) }`

You can use this token to make authenticated requests as the user `king.arthur@camelot.bt`. We'll see how in the next section.

### Cookie + JWT[¶](#cookie-jwt "Permanent link")

#### Request[¶](#request_2 "Permanent link")

cURLaxios

`[](#__codelineno-6-1) curl \ [](#__codelineno-6-2) -v \ [](#__codelineno-6-3) -H "Content-Type: multipart/form-data" \ [](#__codelineno-6-4) -X POST \ [](#__codelineno-6-5) -F "username=king.arthur@camelot.bt" \ [](#__codelineno-6-6) -F "password=guinevere" \ [](#__codelineno-6-7) http://localhost:8000/auth/cookie/login`

`[](#__codelineno-7-1) const formData = new FormData(); [](#__codelineno-7-2) formData.set('username', 'king.arthur@camelot.bt'); [](#__codelineno-7-3) formData.set('password', 'guinevere'); [](#__codelineno-7-4) axios.post( [](#__codelineno-7-5)     'http://localhost:8000/auth/cookie/login', [](#__codelineno-7-6)     formData, [](#__codelineno-7-7)     { [](#__codelineno-7-8)         headers: { [](#__codelineno-7-9)             'Content-Type': 'multipart/form-data', [](#__codelineno-7-10)         }, [](#__codelineno-7-11)     }, [](#__codelineno-7-12) ) [](#__codelineno-7-13) .then((response) => console.log(response)) [](#__codelineno-7-14) .catch((error) => console.log(error));`

Warning

Notice that we don't send it as a JSON payload here but with **form data** instead. Also, the email is provided by a field named **`username`**.

#### Response[¶](#response_2 "Permanent link")

You'll get an empty response. However, the response will come with a `Set-Cookie` header (that's why we added the `-v` option in `cURL` to see them).

`[](#__codelineno-8-1) set-cookie: fastapiusersauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYzYwNjBmMTEtNTM0OS00YTI0LThiNGEtYTJhODc1ZGM1Mzk1IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTg3ODE4OTQ3fQ.qNA4oPVYhoqrJIk-zvAyEfEVoEnP156G30H_SWEU0sU; HttpOnly; Max-Age=3600; Path=/; Secure`

You can make authenticated requests as the user `king.arthur@camelot.bt` by setting a `Cookie` header with this cookie.

Tip

The cookie backend is more suited for browsers, as they handle them automatically. This means that if you make a login request in the browser, it will automatically store the cookie and automatically send it in subsequent requests.

3\. Get my profile[¶](#3-get-my-profile "Permanent link")

----------------------------------------------------------

Now that we can authenticate, we can get our own profile data. Depending on your [authentication backend](../../configuration/authentication/)
, the method to authenticate the request will vary. We'll stick with JWT from now on.

### Request[¶](#request_3 "Permanent link")

cURLaxios

`[](#__codelineno-9-1) export TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNGZkMzQ3N2ItZWNjZi00ZWUzLThmN2QtNjhhZDcyMjYxNDc2IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTg3ODE4NDI5fQ.anO3JR8-WYCozZ4_2-PQ2Ov9O38RaLP2RAzQIiZhteM"; [](#__codelineno-9-2) curl \ [](#__codelineno-9-3) -H "Content-Type: application/json" \ [](#__codelineno-9-4) -H "Authorization: Bearer $TOKEN" \ [](#__codelineno-9-5) -X GET \ [](#__codelineno-9-6) http://localhost:8000/users/me`

``[](#__codelineno-10-1) const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNGZkMzQ3N2ItZWNjZi00ZWUzLThmN2QtNjhhZDcyMjYxNDc2IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTg3ODE4NDI5fQ.anO3JR8-WYCozZ4_2-PQ2Ov9O38RaLP2RAzQIiZhteM'; [](#__codelineno-10-2) axios.get( [](#__codelineno-10-3)     'http://localhost:8000/users/me', { [](#__codelineno-10-4)     headers: { [](#__codelineno-10-5)         'Authorization': `Bearer ${TOKEN}`, [](#__codelineno-10-6)     }, [](#__codelineno-10-7) }) [](#__codelineno-10-8) .then((response) => console.log(response)) [](#__codelineno-10-9) .catch((error) => console.log(error));``

### Response[¶](#response_3 "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-11-1) { [](#__codelineno-11-2)     "id": "4fd3477b-eccf-4ee3-8f7d-68ad72261476", [](#__codelineno-11-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-11-4)     "is_active": true, [](#__codelineno-11-5)     "is_superuser": false [](#__codelineno-11-6) }`

Tip

If you use one of the [dependency callable](../current-user/)
 to protect one of your own endpoint, you'll have to authenticate exactly in the same way.

4\. Update my profile[¶](#4-update-my-profile "Permanent link")

----------------------------------------------------------------

We can also update our own profile. For example, we can change our password like this.

### Request[¶](#request_4 "Permanent link")

cURLaxios

`[](#__codelineno-12-1) curl \ [](#__codelineno-12-2) -H "Content-Type: application/json" \ [](#__codelineno-12-3) -H "Authorization: Bearer $TOKEN" \ [](#__codelineno-12-4) -X PATCH \ [](#__codelineno-12-5) -d "{\"password\": \"lancelot\"}" \ [](#__codelineno-12-6) http://localhost:8000/users/me`

``[](#__codelineno-13-1) axios.patch( [](#__codelineno-13-2)     'http://localhost:8000/users/me', [](#__codelineno-13-3)     { [](#__codelineno-13-4)         password: 'lancelot', [](#__codelineno-13-5)     }, [](#__codelineno-13-6)     { [](#__codelineno-13-7)         headers: { [](#__codelineno-13-8)             'Authorization': `Bearer ${TOKEN}`, [](#__codelineno-13-9)         }, [](#__codelineno-13-10)     }, [](#__codelineno-13-11) ) [](#__codelineno-13-12) .then((response) => console.log(response)) [](#__codelineno-13-13) .catch((error) => console.log(error));``

### Response[¶](#response_4 "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-14-1) { [](#__codelineno-14-2)     "id": "4fd3477b-eccf-4ee3-8f7d-68ad72261476", [](#__codelineno-14-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-14-4)     "is_active": true, [](#__codelineno-14-5)     "is_superuser": false [](#__codelineno-14-6) }`

Info

Once again, the user cannot set `is_active` or `is_superuser` itself. Only a superuser can do it by PATCHing the user.

5\. Become a superuser 🦸🏻‍♂️[¶](#5-become-a-superuser "Permanent link")

--------------------------------------------------------------------------

If you want to manage the users of your application, you'll have to become a **superuser**.

The very first superuser can only be set at **database level**: open it through a CLI or a GUI, find your user and set the `is_superuser` column/property to `true`.

### 5.1. Get the profile of any user[¶](#51-get-the-profile-of-any-user "Permanent link")

Now that you are a superuser, you can leverage the power of [superuser routes](../routes/#superuser)
. You can for example get the profile of any user in the database given its id.

#### Request[¶](#request_5 "Permanent link")

cURLaxios

`[](#__codelineno-15-1) curl \ [](#__codelineno-15-2) -H "Content-Type: application/json" \ [](#__codelineno-15-3) -H "Authorization: Bearer $TOKEN" \ [](#__codelineno-15-4) -X GET \ [](#__codelineno-15-5) http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476`

``[](#__codelineno-16-1) axios.get( [](#__codelineno-16-2)     'http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476', { [](#__codelineno-16-3)     headers: { [](#__codelineno-16-4)         'Authorization': `Bearer ${TOKEN}`, [](#__codelineno-16-5)     }, [](#__codelineno-16-6) }) [](#__codelineno-16-7) .then((response) => console.log(response)) [](#__codelineno-16-8) .catch((error) => console.log(error));``

#### Response[¶](#response_5 "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-17-1) { [](#__codelineno-17-2)     "id": "4fd3477b-eccf-4ee3-8f7d-68ad72261476", [](#__codelineno-17-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-17-4)     "is_active": true, [](#__codelineno-17-5)     "is_superuser": false [](#__codelineno-17-6) }`

### 5.1. Update any user[¶](#51-update-any-user "Permanent link")

We can now update the profile of any user. For example, we can promote it as superuser.

#### Request[¶](#request_6 "Permanent link")

cURLaxios

`[](#__codelineno-18-1) curl \ [](#__codelineno-18-2) -H "Content-Type: application/json" \ [](#__codelineno-18-3) -H "Authorization: Bearer $TOKEN" \ [](#__codelineno-18-4) -X PATCH \ [](#__codelineno-18-5)  -d "{\"is_superuser\": true}" \ [](#__codelineno-18-6) http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476`

``[](#__codelineno-19-1) axios.patch( [](#__codelineno-19-2)     'http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476', [](#__codelineno-19-3)     { [](#__codelineno-19-4)         is_superuser: true, [](#__codelineno-19-5)     }, [](#__codelineno-19-6)     { [](#__codelineno-19-7)         headers: { [](#__codelineno-19-8)             'Authorization': `Bearer ${TOKEN}`, [](#__codelineno-19-9)         }, [](#__codelineno-19-10)     }, [](#__codelineno-19-11) ) [](#__codelineno-19-12) .then((response) => console.log(response)) [](#__codelineno-19-13) .catch((error) => console.log(error));``

#### Response[¶](#response_6 "Permanent link")

You'll get a JSON response looking like this:

`[](#__codelineno-20-1) { [](#__codelineno-20-2)     "id": "4fd3477b-eccf-4ee3-8f7d-68ad72261476", [](#__codelineno-20-3)     "email": "king.arthur@camelot.bt", [](#__codelineno-20-4)     "is_active": true, [](#__codelineno-20-5)     "is_superuser": true [](#__codelineno-20-6) }`

### 5.2. Delete any user[¶](#52-delete-any-user "Permanent link")

Finally, we can delete a user.

#### Request[¶](#request_7 "Permanent link")

cURLaxios

`[](#__codelineno-21-1) curl \ [](#__codelineno-21-2) -H "Content-Type: application/json" \ [](#__codelineno-21-3) -H "Authorization: Bearer $TOKEN" \ [](#__codelineno-21-4) -X DELETE \ [](#__codelineno-21-5) http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476`

``[](#__codelineno-22-1) axios.delete( [](#__codelineno-22-2)     'http://localhost:8000/users/4fd3477b-eccf-4ee3-8f7d-68ad72261476', [](#__codelineno-22-3)     { [](#__codelineno-22-4)         headers: { [](#__codelineno-22-5)             'Authorization': `Bearer ${TOKEN}`, [](#__codelineno-22-6)         }, [](#__codelineno-22-7)     }, [](#__codelineno-22-8) ) [](#__codelineno-22-9) .then((response) => console.log(response)) [](#__codelineno-22-10) .catch((error) => console.log(error));``

#### Response[¶](#response_7 "Permanent link")

You'll get an empty response.

6\. Logout[¶](#6-logout "Permanent link")

------------------------------------------

We can also end the session.

### Request[¶](#request_8 "Permanent link")

cURLaxios

`[](#__codelineno-23-1) curl \ [](#__codelineno-23-2) -H "Content-Type: application/json" \ [](#__codelineno-23-3) -H "Cookie: fastapiusersauth=$TOKEN" \ [](#__codelineno-23-4) -X POST \ [](#__codelineno-23-5) http://localhost:8000/auth/cookie/logout`

``[](#__codelineno-24-1) axios.post('http://localhost:8000/auth/cookie/logout', [](#__codelineno-24-2)     null, [](#__codelineno-24-3)     { [](#__codelineno-24-4)         headers: { [](#__codelineno-24-5)             'Cookie': `fastapiusersauth=${TOKEN}`, [](#__codelineno-24-6)         }, [](#__codelineno-24-7)     } [](#__codelineno-24-8) ) [](#__codelineno-24-9) .then((response) => console.log(response)) [](#__codelineno-24-10) .catch((error) => console.log(error));``

### Response[¶](#response_8 "Permanent link")

You'll get an empty response.

Conclusion[¶](#conclusion "Permanent link")

--------------------------------------------

That's it! You now have a good overview of how you can manage the users through the API. Be sure to check the [Routes](../routes/)
 page to have all the details about each endpoints.

Back to top

---

# Create a user programmatically - FastAPI Users

 



Create a user programmatically[¶](#create-a-user-programmatically "Permanent link")

====================================================================================

Sometimes, you'll need to create a user programmatically in the code rather than passing by the REST API endpoint. To do this, we'll create a function that you can call from your code.

In this context, we are outside the dependency injection mechanism of FastAPI, so we have to take care of instantiating the [`UserManager` class](../../configuration/user-manager/)
 and all other dependent objects **manually**.

For this cookbook, we'll consider you are starting from the [SQLAlchemy full example](../../configuration/full-example/)
, but it'll be rather similar for other DBMS.

1\. Define dependencies as context managers[¶](#1-define-dependencies-as-context-managers "Permanent link")

------------------------------------------------------------------------------------------------------------

Generally, FastAPI dependencies are defined as **generators**, using the `yield` keyword. FastAPI knows very well to handle them inside its dependency injection system. For example, here is the definition of the `get_user_manager` dependency:

`[](#__codelineno-0-1) async def get_user_manager(user_db: SQLAlchemyUserDatabase = Depends(get_user_db)): [](#__codelineno-0-2)   yield UserManager(user_db)`

In Python, when we want to use a generator, we have to use a `for` loop, which would be a bit unnatural in this context since we have only one value to get, the user manager instance. To avoid this, we'll transform them into **context managers**, so we can call them using the `with..as` syntax. Fortunately, the standard library provides tools to automatically transform generators into context managers.

In the following sample, we import our dependencies and create a context manager version using `contextlib.asynccontextmanager`:

`[](#__codelineno-1-1) import contextlib [](#__codelineno-1-2) [](#__codelineno-1-3) from app.db import get_async_session, get_user_db [](#__codelineno-1-4) from app.schemas import UserCreate [](#__codelineno-1-5) from app.users import get_user_manager [](#__codelineno-1-6) from fastapi_users.exceptions import UserAlreadyExists [](#__codelineno-1-7) [](#__codelineno-1-8) get_async_session_context = contextlib.asynccontextmanager(get_async_session) [](#__codelineno-1-9) get_user_db_context = contextlib.asynccontextmanager(get_user_db) [](#__codelineno-1-10) get_user_manager_context = contextlib.asynccontextmanager(get_user_manager) [](#__codelineno-1-11) [](#__codelineno-1-12) [](#__codelineno-1-13) async def create_user(email: str, password: str, is_superuser: bool = False): [](#__codelineno-1-14)     try: [](#__codelineno-1-15)         async with get_async_session_context() as session: [](#__codelineno-1-16)             async with get_user_db_context(session) as user_db: [](#__codelineno-1-17)                 async with get_user_manager_context(user_db) as user_manager: [](#__codelineno-1-18)                     user = await user_manager.create( [](#__codelineno-1-19)                         UserCreate( [](#__codelineno-1-20)                             email=email, password=password, is_superuser=is_superuser [](#__codelineno-1-21)                         ) [](#__codelineno-1-22)                     ) [](#__codelineno-1-23)                     print(f"User created {user}") [](#__codelineno-1-24)                     return user [](#__codelineno-1-25)     except UserAlreadyExists: [](#__codelineno-1-26)         print(f"User {email} already exists") [](#__codelineno-1-27)         raise`

I have other dependencies

Since FastAPI Users fully embraces dependency injection, you may have more arguments passed to your database or user manager dependencies. It's important then to not forget anyone. Once again, outside the dependency injection system, you are responsible of instantiating **everything** yourself.

2\. Write a function[¶](#2-write-a-function "Permanent link")

--------------------------------------------------------------

We are now ready to write a function. The example below shows you a basic example but you can of course adapt it to your own needs. The key part here is once again to **take care of opening every context managers and pass them every required arguments**, as the dependency manager would do.

`[](#__codelineno-2-1) import contextlib [](#__codelineno-2-2) [](#__codelineno-2-3) from app.db import get_async_session, get_user_db [](#__codelineno-2-4) from app.schemas import UserCreate [](#__codelineno-2-5) from app.users import get_user_manager [](#__codelineno-2-6) from fastapi_users.exceptions import UserAlreadyExists [](#__codelineno-2-7) [](#__codelineno-2-8) get_async_session_context = contextlib.asynccontextmanager(get_async_session) [](#__codelineno-2-9) get_user_db_context = contextlib.asynccontextmanager(get_user_db) [](#__codelineno-2-10) get_user_manager_context = contextlib.asynccontextmanager(get_user_manager) [](#__codelineno-2-11) [](#__codelineno-2-12) [](#__codelineno-2-13) async def create_user(email: str, password: str, is_superuser: bool = False): [](#__codelineno-2-14)     try: [](#__codelineno-2-15)         async with get_async_session_context() as session: [](#__codelineno-2-16)             async with get_user_db_context(session) as user_db: [](#__codelineno-2-17)                 async with get_user_manager_context(user_db) as user_manager: [](#__codelineno-2-18)                     user = await user_manager.create( [](#__codelineno-2-19)                         UserCreate( [](#__codelineno-2-20)                             email=email, password=password, is_superuser=is_superuser [](#__codelineno-2-21)                         ) [](#__codelineno-2-22)                     ) [](#__codelineno-2-23)                     print(f"User created {user}") [](#__codelineno-2-24)                     return user [](#__codelineno-2-25)     except UserAlreadyExists: [](#__codelineno-2-26)         print(f"User {email} already exists") [](#__codelineno-2-27)         raise`

3\. Use it[¶](#3-use-it "Permanent link")

------------------------------------------

You can now easily use it in a script. For example:

`[](#__codelineno-3-1) import asyncio [](#__codelineno-3-2) [](#__codelineno-3-3) if __name__ == "__main__": [](#__codelineno-3-4)   asyncio.run(create_user("king.arthur@camelot.bt", "guinevere"))`

Back to top

---

# 0.8.x ➡️ 1.x.x - FastAPI Users

 



0.8.x ➡️ 1.x.x[¶](#08x-1xx "Permanent link")

=============================================

1.0 version introduces major breaking changes that need you to update some of your code and migrate your data.

Id. are UUID[¶](#id-are-uuid "Permanent link")

-----------------------------------------------

Users and OAuth accounts id. are now represented as real UUID objects instead of plain strings. This change was introduced to leverage efficient storage and indexing for DBMS that supports UUID (especially PostgreSQL and Mongo).

### In Python code[¶](#in-python-code "Permanent link")

If you were doing comparison betwen a user id. and a string (in unit tests for example), you should now cast the id. to string:

`[](#__codelineno-0-1) # Before [](#__codelineno-0-2) assert "d35d213e-f3d8-4f08-954a-7e0d1bea286f" == user.id [](#__codelineno-0-3) [](#__codelineno-0-4) # Now [](#__codelineno-0-5) assert "d35d213e-f3d8-4f08-954a-7e0d1bea286f" == str(user.id)`

If you were refering to user id. in your Pydantic models, the field should now be of `UUID4` type instead of `str`:

`[](#__codelineno-1-1) from pydantic import BaseModel, UUID4 [](#__codelineno-1-2) [](#__codelineno-1-3) # Before [](#__codelineno-1-4) class Model(BaseModel): [](#__codelineno-1-5)     user_id: str [](#__codelineno-1-6) [](#__codelineno-1-7) # After [](#__codelineno-1-8) class Model(BaseModel): [](#__codelineno-1-9)     user_id: UUID4`

#### MongoDB[¶](#mongodb "Permanent link")

To avoid any issues, it's recommended to use the `standard` UUID representation when instantiating the MongoDB client:

`[](#__codelineno-2-1) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-2-2) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-2-3)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-2-4) )`

This parameter controls how the UUID values will be encoded in the database. By default, it's set to `pythonLegacy` but new applications should consider setting this to `standard` for cross language compatibility. [Read more about this](https://pymongo.readthedocs.io/en/stable/api/pymongo/mongo_client.html#pymongo.mongo_client.MongoClient)
.

### In database[¶](#in-database "Permanent link")

Id. were before stored as strings in the database. You should make a migration to convert string data to UUID data.

Danger

Scripts below are provided as guidelines. Please **review them carefully**, **adapt them** and check that they are working on a test database before applying them to production. **BE CAREFUL. THEY CAN DESTROY YOUR DATA.**.

#### PostgreSQL[¶](#postgresql "Permanent link")

PostgreSQL supports UUID type. If not already, you should enable the `uuid-ossp` extension:

`[](#__codelineno-3-1) CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

To convert the existing id. string column, we can:

1.  Create a new column with UUID type.
2.  Fill it with the id. converted to UUID.
3.  Drop the original id. column.
4.  Make the new column a primary key and rename it.

`[](#__codelineno-4-1) ALTER TABLE "user" ADD uuid_id UUID; [](#__codelineno-4-2) UPDATE "user" SET uuid_id = uuid(id); [](#__codelineno-4-3) ALTER TABLE "user" DROP id; [](#__codelineno-4-4) ALTER TABLE "user" ADD PRIMARY KEY (uuid_id); [](#__codelineno-4-5) ALTER TABLE "user" RENAME COLUMN uuid_id TO id;`

#### MySQL[¶](#mysql "Permanent link")

MySQL doesn't support UUID type. We'll just convert the column to `CHAR(36)` type:

`[](#__codelineno-5-1) ALTER TABLE "user" MODIFY id CHAR(36);`

#### MongoDB[¶](#mongodb_1 "Permanent link")

##### Mongo shell[¶](#mongo-shell "Permanent link")

For MongoDB, we can use a `forEach` iterator to convert the id. for each document:

`[](#__codelineno-6-1) db.getCollection('users').find().forEach(function(user) { [](#__codelineno-6-2)   var uuid = UUID(user.id); [](#__codelineno-6-3)   db.getCollection('users').update({_id: user._id}, [{$set: {id: uuid}}]); [](#__codelineno-6-4) });`

##### Python[¶](#python "Permanent link")

`[](#__codelineno-7-1) import uuid [](#__codelineno-7-2) [](#__codelineno-7-3) import motor.motor_asyncio [](#__codelineno-7-4) [](#__codelineno-7-5) [](#__codelineno-7-6) async def migrate_uuid(): [](#__codelineno-7-7)     client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-7-8)         DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-7-9)     ) [](#__codelineno-7-10)     db = client["database_name"] [](#__codelineno-7-11)     users = db["users"] [](#__codelineno-7-12) [](#__codelineno-7-13)     async for user in users.find({}): [](#__codelineno-7-14)         await users.update_one( [](#__codelineno-7-15)             {"_id": user["_id"]}, [](#__codelineno-7-16)             {"$set": {"id": uuid.UUID(user["id"])}}, [](#__codelineno-7-17)         )`

Splitted routers[¶](#splitted-routers "Permanent link")

--------------------------------------------------------

You now have the responsibility to **wire the routers**. FastAPI Users doesn't give a bloated users router anymore.

**Event handlers** are also removed. You have to provide your "after-" logic as a parameter of the router generator.

### Before[¶](#before "Permanent link")

`[](#__codelineno-8-1) jwt_authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-8-2) [](#__codelineno-8-3) app = FastAPI() [](#__codelineno-8-4) fastapi_users = FastAPIUsers( [](#__codelineno-8-5)     user_db, [jwt_authentication], User, UserCreate, UserUpdate, UserDB, [](#__codelineno-8-6) ) [](#__codelineno-8-7) app.include_router(fastapi_users.router, prefix="/users", tags=["users"]) [](#__codelineno-8-8) [](#__codelineno-8-9) [](#__codelineno-8-10) @fastapi_users.on_after_register() [](#__codelineno-8-11) def on_after_register(user: User, request: Request): [](#__codelineno-8-12)     print(f"User {user.id} has registered.") [](#__codelineno-8-13) [](#__codelineno-8-14) [](#__codelineno-8-15) @fastapi_users.on_after_forgot_password() [](#__codelineno-8-16) def on_after_forgot_password(user: User, token: str, request: Request): [](#__codelineno-8-17)     print(f"User {user.id} has forgot their password. Reset token: {token}")`

### After[¶](#after "Permanent link")

`[](#__codelineno-9-1) def on_after_register(user: UserDB, request: Request): [](#__codelineno-9-2)     print(f"User {user.id} has registered.") [](#__codelineno-9-3) [](#__codelineno-9-4) [](#__codelineno-9-5) def on_after_forgot_password(user: UserDB, token: str, request: Request): [](#__codelineno-9-6)     print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-9-7) [](#__codelineno-9-8) [](#__codelineno-9-9) jwt_authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-9-10) [](#__codelineno-9-11) app = FastAPI() [](#__codelineno-9-12) fastapi_users = FastAPIUsers( [](#__codelineno-9-13)     user_db, [jwt_authentication], User, UserCreate, UserUpdate, UserDB, [](#__codelineno-9-14) ) [](#__codelineno-9-15) app.include_router( [](#__codelineno-9-16)     fastapi_users.get_auth_router(jwt_authentication), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-9-17) ) [](#__codelineno-9-18) app.include_router( [](#__codelineno-9-19)     fastapi_users.get_register_router(on_after_register), prefix="/auth", tags=["auth"] [](#__codelineno-9-20) ) [](#__codelineno-9-21) app.include_router( [](#__codelineno-9-22)     fastapi_users.get_reset_password_router( [](#__codelineno-9-23)         SECRET, after_forgot_password=on_after_forgot_password [](#__codelineno-9-24)     ), [](#__codelineno-9-25)     prefix="/auth", [](#__codelineno-9-26)     tags=["auth"], [](#__codelineno-9-27) ) [](#__codelineno-9-28) app.include_router(fastapi_users.get_users_router(), prefix="/users", tags=["users"])`

Important things to notice:

*   `FastAPIUsers` takes two arguments less (`reset_password_token_secret` and `reset_password_token_lifetime_seconds`).
*   You have more flexibility to choose the **prefix** and **tags** of the routers.
*   The `/login`/`/logout` are now your responsibility to include for each backend. The path will change (before `/login/jwt`, after `/jwt/login`).
*   If you don't care about some of those routers, you can discard them.

Back to top

---

# 1.x.x ➡️ 2.x.x - FastAPI Users

 



1.x.x ➡️ 2.x.x[¶](#1xx-2xx "Permanent link")

=============================================

JWT authentication backend[¶](#jwt-authentication-backend "Permanent link")

----------------------------------------------------------------------------

To be fully compatible with Swagger authentication, the output of a successful login operation with the JWT authentication backend has changed:

**Before**

`[](#__codelineno-0-1) { [](#__codelineno-0-2)     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTIyMWZmYzktNjQwZi00MzcyLTg2ZDMtY2U2NDJjYmE1NjAzIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTcxNTA0MTkzfQ.M10bjOe45I5Ncu_uXvOmVV8QxnL-nZfcH96U90JaocI" [](#__codelineno-0-3) }`

**After**

`[](#__codelineno-1-1) { [](#__codelineno-1-2)     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTIyMWZmYzktNjQwZi00MzcyLTg2ZDMtY2U2NDJjYmE1NjAzIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTcxNTA0MTkzfQ.M10bjOe45I5Ncu_uXvOmVV8QxnL-nZfcH96U90JaocI", [](#__codelineno-1-3)     "token_type": "bearer" [](#__codelineno-1-4) }`

Make sure to update your clients to read the token in the right property.

Back to top

---

# 2.x.x ➡️ 3.x.x - FastAPI Users

 



2.x.x ➡️ 3.x.x[¶](#2xx-3xx "Permanent link")

=============================================

Emails are now case-insensitive[¶](#emails-are-now-case-insensitive "Permanent link")

--------------------------------------------------------------------------------------

Before 3.x.x, the local part (before the @) of the email address was case-sensitive. Therefore, `king.arthur@camelot.bt` and `King.Arthur@camelot.bt` were considered as **two different users**. This behaviour was a bit confusing and not consistent with 99% of web services out there.

After 3.x.x, users are fetched from the database with a case-insensitive email search. Bear in mind though that if the user registers with the email `King.Arthur@camelot.bt`, it will be stored exactly like this in the database (with casing) ; but he will be able to login as `king.arthur@camelot.bt`.

Danger

It's super important then, before you upgrade to 3.x.x that you **check if there are several users with the same email with different cases** ; and that you **merge or delete those accounts**.

Back to top

---

# 3.x.x ➡️ 4.x.x - FastAPI Users

 



3.x.x ➡️ 4.x.x[¶](#3xx-4xx "Permanent link")

=============================================

`expires_at` property in `OAuthAccount` is now optional[¶](#expires_at-property-in-oauthaccount-is-now-optional "Permanent link")

----------------------------------------------------------------------------------------------------------------------------------

Before 4.x.x, the `expires_at` property in `OAuthAccount` model was mandatory. It was causing issues with some services that don't have such expiration property.

If you use **SQLAlchemy** or **Tortoise** databases adapters, you'll have to make a migration to update your database schema.

Back to top

---

# 4.x.x ➡️ 5.x.x - FastAPI Users

 



4.x.x ➡️ 5.x.x[¶](#4xx-5xx "Permanent link")

=============================================

New property `is_verified` in `User` model.[¶](#new-property-is_verified-in-user-model "Permanent link")

---------------------------------------------------------------------------------------------------------

Starting 5.x.x., there is a new [e-mail verification feature](../../configuration/routers/verify/)
. Even if optional, the `is_verified` property has been added to the `User` model.

If you use **SQLAlchemy** or **Tortoise** databases adapters, you'll have to make a migration to update your database schema.

Back to top

---

# 6.x.x ➡️ 7.x.x - FastAPI Users

 



6.x.x ➡️ 7.x.x[¶](#6xx-7xx "Permanent link")

=============================================

*   The deprecated dependencies to retrieve current user have been removed. Use the `current_user` factory instead. \[[Documentation](https://fastapi-users.github.io/fastapi-users/usage/current-user/)\
    \]
*   When trying to authenticate a not verified user, a **status code 403** is raised instead of status code 401. Thanks @daanbeverdam 🎉 \[[Documentation](https://fastapi-users.github.io/fastapi-users/usage/current-user/#current_user)\
    \]
*   Your `UserUpdate` model shouldn't inherit from the base `User` class. If you have custom fields, you should repeat them in this model. \[[Documentation](https://fastapi-users.github.io/fastapi-users/configuration/model/#define-your-models)\
    \]

* * *

*   Database adapters now live in their [own repositories and packages](https://github.com/fastapi-users)
    .
*   When upgrading to v7.0.0, the dependency for your database adapter should automatically be installed.
*   The `import` statements remain unchanged.

Back to top

---

# 7.x.x ➡️ 8.x.x - FastAPI Users

 



7.x.x ➡️ 8.x.x[¶](#7xx-8xx "Permanent link")

=============================================

Version 8 includes the biggest code changes since version 1. We reorganized lot of parts of the code to make it even more modular and integrate more into the dependency injection system of FastAPI.

Most importantly, you need now to implement a `UserManager` class and a associated dependency to create an instance of this class.

Event handlers should live in the `UserManager`[¶](#event-handlers-should-live-in-the-usermanager "Permanent link")

--------------------------------------------------------------------------------------------------------------------

Before, event handlers like `on_after_register` or `on_after_forgot_password` were defined in their own functions that were passed as arguments of router generators.

Now, they should be **methods** of the `UserManager` class.

You can read more in the [`UserManager` documentation](../../configuration/user-manager/)
.

Password validation should live in the `UserManager`[¶](#password-validation-should-live-in-the-usermanager "Permanent link")

------------------------------------------------------------------------------------------------------------------------------

Before, password validation was defined in its own function that was passed as argument of `FastAPIUsers`.

Now, it should be a method of the `UserManager` class.

You can read more in the [`UserManager` documentation](../../configuration/user-manager/)
.

Verify token secret and lifetime parameters are attributes of `UserManager`[¶](#verify-token-secret-and-lifetime-parameters-are-attributes-of-usermanager "Permanent link")

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Before, verify token and lifetime parameters were passed as argument of `get_verify_router`.

Now, they should be defined as attributes of the `UserManager` class.

You can read more in the [`UserManager` documentation](../../configuration/user-manager/)
.

Reset password token secret and lifetime parameters are attributes of `UserManager`[¶](#reset-password-token-secret-and-lifetime-parameters-are-attributes-of-usermanager "Permanent link")

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Before, reset password token and lifetime parameters were passed as argument of `get_verify_router`.

Now, they should be defined as attributes of the `UserManager` class.

You can read more in the [`UserManager` documentation](../../configuration/user-manager/)
.

Database adapter should be provided in a dependency[¶](#database-adapter-should-be-provided-in-a-dependency "Permanent link")

------------------------------------------------------------------------------------------------------------------------------

Before, we advised to directly instantiate the database adapter class.

Now, it should be instantiated inside a dependency that you define yourself. The benefit of this is that it lives in the dependency injection system of FastAPI, allowing you to have more dynamic logic to create your instance.

➡️ [I'm using SQLAlchemy](../../configuration/databases/sqlalchemy/)

➡️ [I'm using MongoDB](../configuration/databases/mongodb.md)

➡️ [I'm using Tortoise ORM](../configuration/databases/tortoise.md)

➡️ [I'm using ormar](../configuration/databases/ormar.md)

FastAPIUsers now expect a `get_user_manager` dependency[¶](#fastapiusers-now-expect-a-get_user_manager-dependency "Permanent link")

------------------------------------------------------------------------------------------------------------------------------------

Before, the database adapter instance was passed as argument of `FastAPIUsers`.

Now, you should define a `get_user_manager` dependency returning an instance of your `UserManager` class. This dependency will be dependent of the database adapter dependency.

You can read more in the [`UserManager` documentation](../../configuration/user-manager/)
 and [`FastAPIUsers` documentation](http://localhost:8000/configuration/routers/)

Lost?[¶](#lost "Permanent link")

---------------------------------

If you're unsure or a bit lost, make sure to check the [full working examples](../../configuration/full-example/)
.

Back to top

---

# 8.x.x ➡️ 9.x.x - FastAPI Users

 



8.x.x ➡️ 9.x.x[¶](#8xx-9xx "Permanent link")

=============================================

Version 9 revamps the authentication backends: we splitted the logic of a backend into two: the **transport**, which is how the token will be carried over the request and the **strategy**, which is how the token is generated and secured.

The benefit of this is that we'll soon be able to propose new strategies, like database session tokens, without having to repeat the transport logic which remains the same.

Convert the authentication backend[¶](#convert-the-authentication-backend "Permanent link")

--------------------------------------------------------------------------------------------

You now have to generate an authentication backend with a transport and a strategy.

### I used JWTAuthentication[¶](#i-used-jwtauthentication "Permanent link")

BeforeAfter

`[](#__codelineno-0-1) from fastapi_users.authentication import JWTAuthentication [](#__codelineno-0-2) [](#__codelineno-0-3) jwt_authentication = JWTAuthentication( [](#__codelineno-0-4)     secret=SECRET, lifetime_seconds=3600, tokenUrl="auth/jwt/login" [](#__codelineno-0-5) )`

`[](#__codelineno-1-1) from fastapi_users.authentication import AuthenticationBackend, BearerTransport, JWTStrategy [](#__codelineno-1-2) [](#__codelineno-1-3) SECRET = "SECRET" [](#__codelineno-1-4) [](#__codelineno-1-5) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-1-6) [](#__codelineno-1-7) def get_jwt_strategy() -> JWTStrategy: [](#__codelineno-1-8)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-1-9) [](#__codelineno-1-10) auth_backend = AuthenticationBackend( [](#__codelineno-1-11)     name="jwt", [](#__codelineno-1-12)     transport=bearer_transport, [](#__codelineno-1-13)     get_strategy=get_jwt_strategy, [](#__codelineno-1-14) )`

Warning

There is no default `name` anymore: you need to provide it yourself for each of your backends.

### I used CookieAuthentication[¶](#i-used-cookieauthentication "Permanent link")

BeforeAfter

`[](#__codelineno-2-1) from fastapi_users.authentication import CookieAuthentication [](#__codelineno-2-2) [](#__codelineno-2-3) cookie_authentication = CookieAuthentication(secret=SECRET, lifetime_seconds=3600)`

`[](#__codelineno-3-1) from fastapi_users.authentication import AuthenticationBackend, CookieTransport, JWTStrategy [](#__codelineno-3-2) [](#__codelineno-3-3) SECRET = "SECRET" [](#__codelineno-3-4) [](#__codelineno-3-5) cookie_transport = CookieTransport(cookie_max_age=3600) [](#__codelineno-3-6) [](#__codelineno-3-7) def get_jwt_strategy() -> JWTStrategy: [](#__codelineno-3-8)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-3-9) [](#__codelineno-3-10) auth_backend = AuthenticationBackend( [](#__codelineno-3-11)     name="cookie", [](#__codelineno-3-12)     transport=cookie_transport, [](#__codelineno-3-13)     get_strategy=get_jwt_strategy, [](#__codelineno-3-14) )`

Warning

There is no default `name` anymore: you need to provide it yourself for each of your backends.

Tip

Notice that the strategy is the same for both authentication backends. That's the beauty of this approach: the token generation is decoupled from its transport.

OAuth: one router for each backend[¶](#oauth-one-router-for-each-backend "Permanent link")

-------------------------------------------------------------------------------------------

Before, a single OAuth router was enough to login with any of your authentication backend. Now, you need to generate a router for each of your backends.

BeforeAfter

`[](#__codelineno-4-1) app.include_router( [](#__codelineno-4-2)     fastapi_users.get_oauth_router(google_oauth_client, "SECRET"), [](#__codelineno-4-3)     prefix="/auth/google", [](#__codelineno-4-4)     tags=["auth"], [](#__codelineno-4-5) )`

`[](#__codelineno-5-1) app.include_router( [](#__codelineno-5-2)     fastapi_users.get_oauth_router(google_oauth_client, auth_backend, "SECRET"), [](#__codelineno-5-3)     prefix="/auth/google", [](#__codelineno-5-4)     tags=["auth"], [](#__codelineno-5-5) )`

### `authentication_backend` is not needed on `/authorize`[¶](#authentication_backend-is-not-needed-on-authorize "Permanent link")

The consequence of this is that you don't need to specify the authentication backend when making a request to `/authorize`.

BeforeAfter

`[](#__codelineno-6-1) curl \ [](#__codelineno-6-2) -H "Content-Type: application/json" \ [](#__codelineno-6-3) -X GET \ [](#__codelineno-6-4) http://localhost:8000/auth/google/authorize?authentication_backend=jwt`

`[](#__codelineno-7-1) curl \ [](#__codelineno-7-2) -H "Content-Type: application/json" \ [](#__codelineno-7-3) -X GET \ [](#__codelineno-7-4) http://localhost:8000/auth/google/authorize`

Lost?[¶](#lost "Permanent link")

---------------------------------

If you're unsure or a bit lost, make sure to check the [full working examples](../../configuration/full-example/)
.

Back to top

---

# 9.x.x ➡️ 10.x.x - FastAPI Users

 



9.x.x ➡️ 10.x.x[¶](#9xx-10xx "Permanent link")

===============================================

Version 10 marks important changes in how we manage User models and their ID.

Before, we were relying only on Pydantic models to work with users. In particular the [`current_user` dependency](../../usage/current-user/)
 would return you an instance of `UserDB`, a Pydantic model. This proved to be quite problematic with some ORM if you ever needed to **retrieve relationship data** or make specific requests.

Now, FastAPI Users is designed to always return you a **native object for your ORM model**, whether it's an SQLAlchemy model or a Beanie document. Pydantic models are now only used for validation and serialization inside the API.

Before, we were forcing the use of UUID as primary key ID; a consequence of the design above. This proved to be quite problematic on some databases, like MongoDB which uses a special ObjectID format by default. Some SQL folks also prefer to use traditional auto-increment integers.

Now, FastAPI Users is designed to use **generic ID type**. It means that you can use any type you want for your user's ID. By default, SQLAlchemy adapter still use UUID; but you can quite easily switch to another thing, like an integer. Beanie adapter for MongoDB will use native ObjectID by default, but it also can be overriden.

As you may have guessed, those changes imply quite a lot of **breaking changes**.

User models and database adapter[¶](#user-models-and-database-adapter "Permanent link")

----------------------------------------------------------------------------------------

### SQLAlchemy ORM[¶](#sqlalchemy-orm "Permanent link")

We've removed the old SQLAlchemy dependency support, so the dependency is now `fastapi-users[sqlalchemy]`.

BeforeAfter

`[](#__codelineno-0-1) fastapi [](#__codelineno-0-2) fastapi-users[sqlalchemy2] [](#__codelineno-0-3) uvicorn[standard] [](#__codelineno-0-4) aiosqlite`

`[](#__codelineno-1-1) fastapi [](#__codelineno-1-2) fastapi-users[sqlalchemy] [](#__codelineno-1-3) uvicorn[standard] [](#__codelineno-1-4) aiosqlite`

The User model base class for SQLAlchemy slightly changed to support UUID by default.

We changed the name of the class from `UserTable` to `User`: it's not a compulsory change, but since there is no risk of confusion with Pydantic models anymore, it's probably a more idiomatic naming.

BeforeAfter

`[](#__codelineno-2-1) class UserTable(Base, SQLAlchemyBaseUserTable): [](#__codelineno-2-2)     pass`

`[](#__codelineno-3-1) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-3-2)     pass`

Instantiating the `SQLAlchemyUserDatabase` adapter now only expects this `User` model. `UserDB` is removed.

BeforeAfter

`[](#__codelineno-4-1) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-4-2)     yield SQLAlchemyUserDatabase(UserDB, session, UserTable)`

`[](#__codelineno-5-1) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-5-2)     yield SQLAlchemyUserDatabase(session, User)`

### MongoDB[¶](#mongodb "Permanent link")

MongoDB support is now only provided through [Beanie ODM](https://github.com/roman-right/beanie/)
. Even if you don't use it for the rest of your project, it's a very light addition that shouldn't interfere much.

BeforeAfter

`[](#__codelineno-6-1) fastapi [](#__codelineno-6-2) fastapi-users[mongodb] [](#__codelineno-6-3) uvicorn[standard] [](#__codelineno-6-4) aiosqlite`

`[](#__codelineno-7-1) fastapi [](#__codelineno-7-2) fastapi-users[beanie] [](#__codelineno-7-3) uvicorn[standard] [](#__codelineno-7-4) aiosqlite`

You now need to define a proper User model using Beanie.

BeforeAfter

`[](#__codelineno-8-1) import os [](#__codelineno-8-2) [](#__codelineno-8-3) import motor.motor_asyncio [](#__codelineno-8-4) from fastapi_users.db import MongoDBUserDatabase [](#__codelineno-8-5) [](#__codelineno-8-6) from app.models import UserDB [](#__codelineno-8-7) [](#__codelineno-8-8) DATABASE_URL = os.environ["DATABASE_URL"] [](#__codelineno-8-9) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-8-10)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-8-11) ) [](#__codelineno-8-12) db = client["database_name"] [](#__codelineno-8-13) collection = db["users"] [](#__codelineno-8-14) [](#__codelineno-8-15) [](#__codelineno-8-16) async def get_user_db(): [](#__codelineno-8-17)     yield MongoDBUserDatabase(UserDB, collection)`

`[](#__codelineno-9-1) import motor.motor_asyncio [](#__codelineno-9-2) from beanie import PydanticObjectId [](#__codelineno-9-3) from fastapi_users.db import BeanieBaseUser, BeanieUserDatabase [](#__codelineno-9-4) [](#__codelineno-9-5) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-9-6) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-9-7)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-9-8) ) [](#__codelineno-9-9) db = client["database_name"] [](#__codelineno-9-10) [](#__codelineno-9-11) [](#__codelineno-9-12) class User(BeanieBaseUser[PydanticObjectId]): [](#__codelineno-9-13)     pass [](#__codelineno-9-14) [](#__codelineno-9-15) [](#__codelineno-9-16) async def get_user_db(): [](#__codelineno-9-17)     yield BeanieUserDatabase(User)`

ID are now ObjectID by default

By default, User ID will now be native MongoDB ObjectID. If you don't want to make the transition and keep UUID you can do so by overriding the `id` field:

`[](#__codelineno-10-1) import uuid [](#__codelineno-10-2) [](#__codelineno-10-3) from pydantic import Field [](#__codelineno-10-4) [](#__codelineno-10-5) [](#__codelineno-10-6) class User(BeanieBaseUser[uuid.UUID]): [](#__codelineno-10-7)     id: uuid.UUID = Field(default_factory=uuid.uuid4)`

Beanie also needs to be initialized in a startup event handler of your FastAPI app:

`[](#__codelineno-11-1) from beanie import init_beanie [](#__codelineno-11-2) [](#__codelineno-11-3) [](#__codelineno-11-4) @app.on_event("startup") [](#__codelineno-11-5) async def on_startup(): [](#__codelineno-11-6)     await init_beanie( [](#__codelineno-11-7)         database=db, [](#__codelineno-11-8)         document_models=[ [](#__codelineno-11-9)             User, [](#__codelineno-11-10)         ], [](#__codelineno-11-11)     )`

### Tortoise ORM and ormar[¶](#tortoise-orm-and-ormar "Permanent link")

Unfortunately, we sometimes need to make difficult choices to keep things sustainable. That's why we decided to **not support Tortoise ORM and ormar** anymore. It appeared they were not widely used.

You can still add support for those ORM yourself by implementing the necessary adapter. You can take inspiration from [the SQLAlchemy one](https://github.com/fastapi-users/fastapi-users-db-sqlalchemy)
.

`UserManager`[¶](#usermanager "Permanent link")

------------------------------------------------

There is some slight changes on the `UserManager` class. In particular, it now needs a `parse_id` method that can be provided through built-in mixins.

Generic typing now expects your **native User model class** and the **type of ID**.

The `user_db_model` class property is **removed**.

BeforeAfter

`[](#__codelineno-12-1) class UserManager(BaseUserManager[UserCreate, UserDB]): [](#__codelineno-12-2)     user_db_model = UserDB [](#__codelineno-12-3)     reset_password_token_secret = SECRET [](#__codelineno-12-4)     verification_token_secret = SECRET [](#__codelineno-12-5) [](#__codelineno-12-6)     async def on_after_register(self, user: UserDB, request: Optional[Request] = None): [](#__codelineno-12-7)         print(f"User {user.id} has registered.") [](#__codelineno-12-8) [](#__codelineno-12-9)     async def on_after_forgot_password( [](#__codelineno-12-10)         self, user: UserDB, token: str, request: Optional[Request] = None [](#__codelineno-12-11)     ): [](#__codelineno-12-12)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-12-13) [](#__codelineno-12-14)     async def on_after_request_verify( [](#__codelineno-12-15)         self, user: UserDB, token: str, request: Optional[Request] = None [](#__codelineno-12-16)     ): [](#__codelineno-12-17)         print(f"Verification requested for user {user.id}. Verification token: {token}")`

`[](#__codelineno-13-1) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-13-2)     reset_password_token_secret = SECRET [](#__codelineno-13-3)     verification_token_secret = SECRET [](#__codelineno-13-4) [](#__codelineno-13-5)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-13-6)         print(f"User {user.id} has registered.") [](#__codelineno-13-7) [](#__codelineno-13-8)     async def on_after_forgot_password( [](#__codelineno-13-9)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-13-10)     ): [](#__codelineno-13-11)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-13-12) [](#__codelineno-13-13)     async def on_after_request_verify( [](#__codelineno-13-14)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-13-15)     ): [](#__codelineno-13-16)         print(f"Verification requested for user {user.id}. Verification token: {token}")`

If you need to support other types of ID, you can read more about it [in the dedicated section](../../configuration/user-manager/#the-id-parser-mixin)
.

Pydantic models[¶](#pydantic-models "Permanent link")

------------------------------------------------------

To better distinguish them from the ORM models, Pydantic models are now called **schemas**.

**`UserDB` has been removed** in favor of native models.

We changed the name of `User` to `UserRead`: it's not a compulsory change, but since there is a **risk of confusion** with the native model, it's highly recommended.

Besides, the `BaseUser` schema now accepts a generic type to specify the type of ID you use.

BeforeAfter

`[](#__codelineno-14-1) from fastapi_users import models [](#__codelineno-14-2) [](#__codelineno-14-3) [](#__codelineno-14-4) class User(models.BaseUser): [](#__codelineno-14-5)     pass [](#__codelineno-14-6) [](#__codelineno-14-7) [](#__codelineno-14-8) class UserCreate(models.BaseUserCreate): [](#__codelineno-14-9)     pass [](#__codelineno-14-10) [](#__codelineno-14-11) [](#__codelineno-14-12) class UserUpdate(models.BaseUserUpdate): [](#__codelineno-14-13)     pass [](#__codelineno-14-14) [](#__codelineno-14-15) [](#__codelineno-14-16) class UserDB(User, models.BaseUserDB): [](#__codelineno-14-17)     pass`

`[](#__codelineno-15-1) import uuid [](#__codelineno-15-2) [](#__codelineno-15-3) from fastapi_users import schemas [](#__codelineno-15-4) [](#__codelineno-15-5) [](#__codelineno-15-6) class UserRead(schemas.BaseUser[uuid.UUID]): [](#__codelineno-15-7)     pass [](#__codelineno-15-8) [](#__codelineno-15-9) [](#__codelineno-15-10) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-15-11)     pass [](#__codelineno-15-12) [](#__codelineno-15-13) [](#__codelineno-15-14) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-15-15)     pass`

FastAPI Users and routers[¶](#fastapi-users-and-routers "Permanent link")

--------------------------------------------------------------------------

Pydantic schemas are now way less important in this new design. As such, you don't need to pass them when initializing the `FastAPIUsers` class:

BeforeAfter

`[](#__codelineno-16-1) fastapi_users = FastAPIUsers( [](#__codelineno-16-2)     get_user_manager, [](#__codelineno-16-3)     [auth_backend], [](#__codelineno-16-4)     User, [](#__codelineno-16-5)     UserCreate, [](#__codelineno-16-6)     UserUpdate, [](#__codelineno-16-7)     UserDB, [](#__codelineno-16-8) )`

`[](#__codelineno-17-1) fastapi_users = FastAPIUsers[User, uuid.UUID]( [](#__codelineno-17-2)     get_user_manager, [](#__codelineno-17-3)     [auth_backend], [](#__codelineno-17-4) )`

As a consequence, those schemas need to be passed when initializing the router that needs them: `get_register_router`, `get_verify_router` and `get_users_router`.

BeforeAfter

`[](#__codelineno-18-1) app.include_router( [](#__codelineno-18-2)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-18-3) ) [](#__codelineno-18-4) app.include_router(fastapi_users.get_register_router(), prefix="/auth", tags=["auth"]) [](#__codelineno-18-5) app.include_router( [](#__codelineno-18-6)     fastapi_users.get_reset_password_router(), [](#__codelineno-18-7)     prefix="/auth", [](#__codelineno-18-8)     tags=["auth"], [](#__codelineno-18-9) ) [](#__codelineno-18-10) app.include_router( [](#__codelineno-18-11)     fastapi_users.get_verify_router(), [](#__codelineno-18-12)     prefix="/auth", [](#__codelineno-18-13)     tags=["auth"], [](#__codelineno-18-14) ) [](#__codelineno-18-15) app.include_router(fastapi_users.get_users_router(), prefix="/users", tags=["users"])`

`[](#__codelineno-19-1) app.include_router( [](#__codelineno-19-2)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-19-3) ) [](#__codelineno-19-4) app.include_router( [](#__codelineno-19-5)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-19-6)     prefix="/auth", [](#__codelineno-19-7)     tags=["auth"], [](#__codelineno-19-8) ) [](#__codelineno-19-9) app.include_router( [](#__codelineno-19-10)     fastapi_users.get_reset_password_router(), [](#__codelineno-19-11)     prefix="/auth", [](#__codelineno-19-12)     tags=["auth"], [](#__codelineno-19-13) ) [](#__codelineno-19-14) app.include_router( [](#__codelineno-19-15)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-19-16)     prefix="/auth", [](#__codelineno-19-17)     tags=["auth"], [](#__codelineno-19-18) ) [](#__codelineno-19-19) app.include_router( [](#__codelineno-19-20)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-19-21)     prefix="/users", [](#__codelineno-19-22)     tags=["users"], [](#__codelineno-19-23) )`

Lost?[¶](#lost "Permanent link")

---------------------------------

If you're unsure or a bit lost, make sure to check the [full working examples](../../configuration/full-example/)
.

Back to top

---

# OAuth2 - FastAPI Users

 



OAuth2[¶](#oauth2 "Permanent link")

====================================

FastAPI Users provides an optional OAuth2 authentication support. It relies on [HTTPX OAuth library](https://frankie567.github.io/httpx-oauth/)
, which is a pure-async implementation of OAuth2.

Installation[¶](#installation "Permanent link")

------------------------------------------------

You should install the library with the optional dependencies for OAuth:

`[](#__codelineno-0-1) pip install 'fastapi-users[sqlalchemy,oauth]'`

`[](#__codelineno-1-1) pip install 'fastapi-users[beanie,oauth]'`

Configuration[¶](#configuration "Permanent link")

--------------------------------------------------

### Instantiate an OAuth2 client[¶](#instantiate-an-oauth2-client "Permanent link")

You first need to get an HTTPX OAuth client instance. [Read the documentation](https://frankie567.github.io/httpx-oauth/oauth2/)
 for more information.

`[](#__codelineno-2-1) from httpx_oauth.clients.google import GoogleOAuth2 [](#__codelineno-2-2) [](#__codelineno-2-3) google_oauth_client = GoogleOAuth2("CLIENT_ID", "CLIENT_SECRET")`

### Setup the database adapter[¶](#setup-the-database-adapter "Permanent link")

#### SQLAlchemy[¶](#sqlalchemy "Permanent link")

You'll need to define the SQLAlchemy model for storing OAuth accounts. We provide a base one for this:

`[](#__codelineno-3-1) from collections.abc import AsyncGenerator [](#__codelineno-3-2) [](#__codelineno-3-3) from fastapi import Depends [](#__codelineno-3-4) from fastapi_users.db import ( [](#__codelineno-3-5)     SQLAlchemyBaseOAuthAccountTableUUID, [](#__codelineno-3-6)     SQLAlchemyBaseUserTableUUID, [](#__codelineno-3-7)     SQLAlchemyUserDatabase, [](#__codelineno-3-8) ) [](#__codelineno-3-9) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-3-10) from sqlalchemy.orm import DeclarativeBase, Mapped, relationship [](#__codelineno-3-11) [](#__codelineno-3-12) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-3-13) [](#__codelineno-3-14) [](#__codelineno-3-15) class Base(DeclarativeBase): [](#__codelineno-3-16)     pass [](#__codelineno-3-17) [](#__codelineno-3-18) [](#__codelineno-3-19) class OAuthAccount(SQLAlchemyBaseOAuthAccountTableUUID, Base): [](#__codelineno-3-20)     pass [](#__codelineno-3-21) [](#__codelineno-3-22) [](#__codelineno-3-23) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-3-24)     oauth_accounts: Mapped[list[OAuthAccount]] = relationship( [](#__codelineno-3-25)         "OAuthAccount", lazy="joined" [](#__codelineno-3-26)     ) [](#__codelineno-3-27) [](#__codelineno-3-28) [](#__codelineno-3-29) engine = create_async_engine(DATABASE_URL) [](#__codelineno-3-30) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-3-31) [](#__codelineno-3-32) [](#__codelineno-3-33) async def create_db_and_tables(): [](#__codelineno-3-34)     async with engine.begin() as conn: [](#__codelineno-3-35)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-3-36) [](#__codelineno-3-37) [](#__codelineno-3-38) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-3-39)     async with async_session_maker() as session: [](#__codelineno-3-40)         yield session [](#__codelineno-3-41) [](#__codelineno-3-42) [](#__codelineno-3-43) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-3-44)     yield SQLAlchemyUserDatabase(session, User, OAuthAccount)`

Notice that we also manually added a `relationship` on `User` so that SQLAlchemy can properly retrieve the OAuth accounts of the user.

Besides, when instantiating the database adapter, we need pass this SQLAlchemy model as third argument.

Primary key is defined as UUID

By default, we use UUID as a primary key ID for your user. If you want to use another type, like an auto-incremented integer, you can use `SQLAlchemyBaseOAuthAccountTable` as base class and define your own `id` and `user_id` column.

`[](#__codelineno-4-1) class OAuthAccount(SQLAlchemyBaseOAuthAccountTable[int], Base): [](#__codelineno-4-2)     id: Mapped[int] = mapped_column(Integer, primary_key=True) [](#__codelineno-4-3) [](#__codelineno-4-4)     @declared_attr [](#__codelineno-4-5)     def user_id(cls) -> Mapped[int]: [](#__codelineno-4-6)         return mapped_column(Integer, ForeignKey("user.id", ondelete="cascade"), nullable=False)`

Notice that `SQLAlchemyBaseOAuthAccountTable` expects a generic type to define the actual type of ID you use.

#### Beanie[¶](#beanie "Permanent link")

The advantage of MongoDB is that you can easily embed sub-objects in a single document. That's why the configuration for Beanie is quite simple. All we need to do is to define another class to structure an OAuth account object.

`[](#__codelineno-5-1) import motor.motor_asyncio [](#__codelineno-5-2) from beanie import Document [](#__codelineno-5-3) from fastapi_users.db import BaseOAuthAccount, BeanieBaseUser, BeanieUserDatabase [](#__codelineno-5-4) from pydantic import Field [](#__codelineno-5-5) [](#__codelineno-5-6) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-5-7) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-5-8)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-5-9) ) [](#__codelineno-5-10) db = client["database_name"] [](#__codelineno-5-11) [](#__codelineno-5-12) [](#__codelineno-5-13) class OAuthAccount(BaseOAuthAccount): [](#__codelineno-5-14)     pass [](#__codelineno-5-15) [](#__codelineno-5-16) [](#__codelineno-5-17) class User(BeanieBaseUser, Document): [](#__codelineno-5-18)     oauth_accounts: list[OAuthAccount] = Field(default_factory=list) [](#__codelineno-5-19) [](#__codelineno-5-20) [](#__codelineno-5-21) async def get_user_db(): [](#__codelineno-5-22)     yield BeanieUserDatabase(User, OAuthAccount)`

It's worth to note that `OAuthAccount` is **not a Beanie document** but a Pydantic model that we'll embed inside the `User` document, through the `oauth_accounts` array.

### Generate routers[¶](#generate-routers "Permanent link")

Once you have a `FastAPIUsers` instance, you can make it generate a single OAuth router for a given client **and** authentication backend.

`[](#__codelineno-6-1) app.include_router( [](#__codelineno-6-2)     fastapi_users.get_oauth_router(google_oauth_client, auth_backend, "SECRET"), [](#__codelineno-6-3)     prefix="/auth/google", [](#__codelineno-6-4)     tags=["auth"], [](#__codelineno-6-5) )`

Tip

If you have several OAuth clients and/or several authentication backends, you'll need to create a router for each pair you want to support.

#### Existing account association[¶](#existing-account-association "Permanent link")

If a user with the same e-mail address already exists, an HTTP 400 error will be raised by default.

You can however choose to automatically link this OAuth account to the existing user account by setting the `associate_by_email` flag:

`[](#__codelineno-7-1) app.include_router( [](#__codelineno-7-2)     fastapi_users.get_oauth_router( [](#__codelineno-7-3)         google_oauth_client, [](#__codelineno-7-4)         auth_backend, [](#__codelineno-7-5)         "SECRET", [](#__codelineno-7-6)         associate_by_email=True, [](#__codelineno-7-7)     ), [](#__codelineno-7-8)     prefix="/auth/google", [](#__codelineno-7-9)     tags=["auth"], [](#__codelineno-7-10) )`

Bear in mind though that it can lead to security breaches if the OAuth provider does not validate e-mail addresses. How?

*   Let's say your app support an OAuth provider, _Merlinbook_, which does not validate e-mail addresses.
*   Imagine a user registers to your app with the e-mail address `lancelot@camelot.bt`.
*   Now, a malicious user creates an account on _Merlinbook_ with the same e-mail address. Without e-mail validation, the malicious user can use this account without limitation.
*   The malicious user authenticates using _Merlinbook_ OAuth on your app, which automatically associates to the existing `lancelot@camelot.bt`.
*   Now, the malicious user has full access to the user account on your app 😞

#### Association router for authenticated users[¶](#association-router-for-authenticated-users "Permanent link")

We also provide a router to associate an already authenticated user with an OAuth account. After this association, the user will be able to authenticate with this OAuth provider.

`[](#__codelineno-8-1) app.include_router( [](#__codelineno-8-2)     fastapi_users.get_oauth_associate_router(google_oauth_client, UserRead, "SECRET"), [](#__codelineno-8-3)     prefix="/auth/associate/google", [](#__codelineno-8-4)     tags=["auth"], [](#__codelineno-8-5) )`

Notice that, just like for the [Users router](../routers/users/)
, you have to pass the `UserRead` Pydantic schema.

#### Set `is_verified` to `True` by default[¶](#set-is_verified-to-true-by-default "Permanent link")

This section is only useful if you set up email verification

You can read more about this feature [here](../routers/verify/)
.

When a new user registers with an OAuth provider, the `is_verified` flag is set to `False`, which requires the user to verify its email address.

You can choose to trust the email address given by the OAuth provider and set the `is_verified` flag to `True` after registration. You can do this by setting the `is_verified_by_default` argument:

`[](#__codelineno-9-1) app.include_router( [](#__codelineno-9-2)     fastapi_users.get_oauth_router( [](#__codelineno-9-3)         google_oauth_client, [](#__codelineno-9-4)         auth_backend, [](#__codelineno-9-5)         "SECRET", [](#__codelineno-9-6)         is_verified_by_default=True, [](#__codelineno-9-7)     ), [](#__codelineno-9-8)     prefix="/auth/google", [](#__codelineno-9-9)     tags=["auth"], [](#__codelineno-9-10) )`

Make sure you can trust the OAuth provider

Make sure the OAuth provider you're using **does verify** the email address before enabling this flag.

### Full example[¶](#full-example "Permanent link")

Warning

Notice that **SECRET** should be changed to a strong passphrase. Insecure passwords may give attackers full access to your database.

#### SQLAlchemy[¶](#sqlalchemy_1 "Permanent link")

[Open](https://github.com/fastapi-users/fastapi-users/tree/master/examples/sqlalchemy-oauth)

requirements.txtmain.pyapp/app.pyapp/db.pyapp/schemas.pyapp/users.py

`[](#__codelineno-10-1) fastapi [](#__codelineno-10-2) fastapi-users[sqlalchemy,oauth] [](#__codelineno-10-3) uvicorn[standard] [](#__codelineno-10-4) aiosqlite`

`[](#__codelineno-11-1) import uvicorn [](#__codelineno-11-2) [](#__codelineno-11-3) if __name__ == "__main__": [](#__codelineno-11-4)     uvicorn.run("app.app:app", host="0.0.0.0", log_level="info")`

`[](#__codelineno-12-1) from contextlib import asynccontextmanager [](#__codelineno-12-2) [](#__codelineno-12-3) from fastapi import Depends, FastAPI [](#__codelineno-12-4) [](#__codelineno-12-5) from app.db import User, create_db_and_tables [](#__codelineno-12-6) from app.schemas import UserCreate, UserRead, UserUpdate [](#__codelineno-12-7) from app.users import ( [](#__codelineno-12-8)     SECRET, [](#__codelineno-12-9)     auth_backend, [](#__codelineno-12-10)     current_active_user, [](#__codelineno-12-11)     fastapi_users, [](#__codelineno-12-12)     google_oauth_client, [](#__codelineno-12-13) ) [](#__codelineno-12-14) [](#__codelineno-12-15) [](#__codelineno-12-16) @asynccontextmanager [](#__codelineno-12-17) async def lifespan(app: FastAPI): [](#__codelineno-12-18)     # Not needed if you setup a migration system like Alembic [](#__codelineno-12-19)     await create_db_and_tables() [](#__codelineno-12-20)     yield [](#__codelineno-12-21) [](#__codelineno-12-22) [](#__codelineno-12-23) app = FastAPI(lifespan=lifespan) [](#__codelineno-12-24) [](#__codelineno-12-25) app.include_router( [](#__codelineno-12-26)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-12-27) ) [](#__codelineno-12-28) app.include_router( [](#__codelineno-12-29)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-12-30)     prefix="/auth", [](#__codelineno-12-31)     tags=["auth"], [](#__codelineno-12-32) ) [](#__codelineno-12-33) app.include_router( [](#__codelineno-12-34)     fastapi_users.get_reset_password_router(), [](#__codelineno-12-35)     prefix="/auth", [](#__codelineno-12-36)     tags=["auth"], [](#__codelineno-12-37) ) [](#__codelineno-12-38) app.include_router( [](#__codelineno-12-39)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-12-40)     prefix="/auth", [](#__codelineno-12-41)     tags=["auth"], [](#__codelineno-12-42) ) [](#__codelineno-12-43) app.include_router( [](#__codelineno-12-44)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-12-45)     prefix="/users", [](#__codelineno-12-46)     tags=["users"], [](#__codelineno-12-47) ) [](#__codelineno-12-48) app.include_router( [](#__codelineno-12-49)     fastapi_users.get_oauth_router(google_oauth_client, auth_backend, SECRET), [](#__codelineno-12-50)     prefix="/auth/google", [](#__codelineno-12-51)     tags=["auth"], [](#__codelineno-12-52) ) [](#__codelineno-12-53) [](#__codelineno-12-54) [](#__codelineno-12-55) @app.get("/authenticated-route") [](#__codelineno-12-56) async def authenticated_route(user: User = Depends(current_active_user)): [](#__codelineno-12-57)     return {"message": f"Hello {user.email}!"}`

`[](#__codelineno-13-1) from collections.abc import AsyncGenerator [](#__codelineno-13-2) [](#__codelineno-13-3) from fastapi import Depends [](#__codelineno-13-4) from fastapi_users.db import ( [](#__codelineno-13-5)     SQLAlchemyBaseOAuthAccountTableUUID, [](#__codelineno-13-6)     SQLAlchemyBaseUserTableUUID, [](#__codelineno-13-7)     SQLAlchemyUserDatabase, [](#__codelineno-13-8) ) [](#__codelineno-13-9) from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine [](#__codelineno-13-10) from sqlalchemy.orm import DeclarativeBase, Mapped, relationship [](#__codelineno-13-11) [](#__codelineno-13-12) DATABASE_URL = "sqlite+aiosqlite:///./test.db" [](#__codelineno-13-13) [](#__codelineno-13-14) [](#__codelineno-13-15) class Base(DeclarativeBase): [](#__codelineno-13-16)     pass [](#__codelineno-13-17) [](#__codelineno-13-18) [](#__codelineno-13-19) class OAuthAccount(SQLAlchemyBaseOAuthAccountTableUUID, Base): [](#__codelineno-13-20)     pass [](#__codelineno-13-21) [](#__codelineno-13-22) [](#__codelineno-13-23) class User(SQLAlchemyBaseUserTableUUID, Base): [](#__codelineno-13-24)     oauth_accounts: Mapped[list[OAuthAccount]] = relationship( [](#__codelineno-13-25)         "OAuthAccount", lazy="joined" [](#__codelineno-13-26)     ) [](#__codelineno-13-27) [](#__codelineno-13-28) [](#__codelineno-13-29) engine = create_async_engine(DATABASE_URL) [](#__codelineno-13-30) async_session_maker = async_sessionmaker(engine, expire_on_commit=False) [](#__codelineno-13-31) [](#__codelineno-13-32) [](#__codelineno-13-33) async def create_db_and_tables(): [](#__codelineno-13-34)     async with engine.begin() as conn: [](#__codelineno-13-35)         await conn.run_sync(Base.metadata.create_all) [](#__codelineno-13-36) [](#__codelineno-13-37) [](#__codelineno-13-38) async def get_async_session() -> AsyncGenerator[AsyncSession, None]: [](#__codelineno-13-39)     async with async_session_maker() as session: [](#__codelineno-13-40)         yield session [](#__codelineno-13-41) [](#__codelineno-13-42) [](#__codelineno-13-43) async def get_user_db(session: AsyncSession = Depends(get_async_session)): [](#__codelineno-13-44)     yield SQLAlchemyUserDatabase(session, User, OAuthAccount)`

`[](#__codelineno-14-1) import uuid [](#__codelineno-14-2) [](#__codelineno-14-3) from fastapi_users import schemas [](#__codelineno-14-4) [](#__codelineno-14-5) [](#__codelineno-14-6) class UserRead(schemas.BaseUser[uuid.UUID]): [](#__codelineno-14-7)     pass [](#__codelineno-14-8) [](#__codelineno-14-9) [](#__codelineno-14-10) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-14-11)     pass [](#__codelineno-14-12) [](#__codelineno-14-13) [](#__codelineno-14-14) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-14-15)     pass`

`[](#__codelineno-15-1) import os [](#__codelineno-15-2) import uuid [](#__codelineno-15-3) from typing import Optional [](#__codelineno-15-4) [](#__codelineno-15-5) from fastapi import Depends, Request [](#__codelineno-15-6) from fastapi_users import BaseUserManager, FastAPIUsers, UUIDIDMixin, models [](#__codelineno-15-7) from fastapi_users.authentication import ( [](#__codelineno-15-8)     AuthenticationBackend, [](#__codelineno-15-9)     BearerTransport, [](#__codelineno-15-10)     JWTStrategy, [](#__codelineno-15-11) ) [](#__codelineno-15-12) from fastapi_users.db import SQLAlchemyUserDatabase [](#__codelineno-15-13) from httpx_oauth.clients.google import GoogleOAuth2 [](#__codelineno-15-14) [](#__codelineno-15-15) from app.db import User, get_user_db [](#__codelineno-15-16) [](#__codelineno-15-17) SECRET = "SECRET" [](#__codelineno-15-18) [](#__codelineno-15-19) google_oauth_client = GoogleOAuth2( [](#__codelineno-15-20)     os.getenv("GOOGLE_OAUTH_CLIENT_ID", ""), [](#__codelineno-15-21)     os.getenv("GOOGLE_OAUTH_CLIENT_SECRET", ""), [](#__codelineno-15-22) ) [](#__codelineno-15-23) [](#__codelineno-15-24) [](#__codelineno-15-25) class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]): [](#__codelineno-15-26)     reset_password_token_secret = SECRET [](#__codelineno-15-27)     verification_token_secret = SECRET [](#__codelineno-15-28) [](#__codelineno-15-29)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-15-30)         print(f"User {user.id} has registered.") [](#__codelineno-15-31) [](#__codelineno-15-32)     async def on_after_forgot_password( [](#__codelineno-15-33)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-15-34)     ): [](#__codelineno-15-35)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-15-36) [](#__codelineno-15-37)     async def on_after_request_verify( [](#__codelineno-15-38)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-15-39)     ): [](#__codelineno-15-40)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-15-41) [](#__codelineno-15-42) [](#__codelineno-15-43) async def get_user_manager(user_db: SQLAlchemyUserDatabase = Depends(get_user_db)): [](#__codelineno-15-44)     yield UserManager(user_db) [](#__codelineno-15-45) [](#__codelineno-15-46) [](#__codelineno-15-47) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-15-48) [](#__codelineno-15-49) [](#__codelineno-15-50) def get_jwt_strategy() -> JWTStrategy[models.UP, models.ID]: [](#__codelineno-15-51)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-15-52) [](#__codelineno-15-53) [](#__codelineno-15-54) auth_backend = AuthenticationBackend( [](#__codelineno-15-55)     name="jwt", [](#__codelineno-15-56)     transport=bearer_transport, [](#__codelineno-15-57)     get_strategy=get_jwt_strategy, [](#__codelineno-15-58) ) [](#__codelineno-15-59) [](#__codelineno-15-60) fastapi_users = FastAPIUsers[User, uuid.UUID](get_user_manager, [auth_backend]) [](#__codelineno-15-61) [](#__codelineno-15-62) current_active_user = fastapi_users.current_user(active=True)`

#### Beanie[¶](#beanie_1 "Permanent link")

[Open](https://github.com/fastapi-users/fastapi-users/tree/master/examples/beanie-oauth)

requirements.txtmain.pyapp/app.pyapp/db.pyapp/schemas.pyapp/users.py

`[](#__codelineno-16-1) fastapi [](#__codelineno-16-2) fastapi-users[beanie,oauth] [](#__codelineno-16-3) uvicorn[standard]`

`[](#__codelineno-17-1) import uvicorn [](#__codelineno-17-2) [](#__codelineno-17-3) if __name__ == "__main__": [](#__codelineno-17-4)     uvicorn.run("app.app:app", host="0.0.0.0", log_level="info")`

`[](#__codelineno-18-1) from contextlib import asynccontextmanager [](#__codelineno-18-2) [](#__codelineno-18-3) from beanie import init_beanie [](#__codelineno-18-4) from fastapi import Depends, FastAPI [](#__codelineno-18-5) [](#__codelineno-18-6) from app.db import User, db [](#__codelineno-18-7) from app.schemas import UserCreate, UserRead, UserUpdate [](#__codelineno-18-8) from app.users import ( [](#__codelineno-18-9)     SECRET, [](#__codelineno-18-10)     auth_backend, [](#__codelineno-18-11)     current_active_user, [](#__codelineno-18-12)     fastapi_users, [](#__codelineno-18-13)     google_oauth_client, [](#__codelineno-18-14) ) [](#__codelineno-18-15) [](#__codelineno-18-16) [](#__codelineno-18-17) @asynccontextmanager [](#__codelineno-18-18) async def lifespan(app: FastAPI): [](#__codelineno-18-19)     await init_beanie( [](#__codelineno-18-20)         database=db, [](#__codelineno-18-21)         document_models=[ [](#__codelineno-18-22)             User, [](#__codelineno-18-23)         ], [](#__codelineno-18-24)     ) [](#__codelineno-18-25)     yield [](#__codelineno-18-26) [](#__codelineno-18-27) [](#__codelineno-18-28) app = FastAPI(lifespan=lifespan) [](#__codelineno-18-29) [](#__codelineno-18-30) app.include_router( [](#__codelineno-18-31)     fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"] [](#__codelineno-18-32) ) [](#__codelineno-18-33) app.include_router( [](#__codelineno-18-34)     fastapi_users.get_register_router(UserRead, UserCreate), [](#__codelineno-18-35)     prefix="/auth", [](#__codelineno-18-36)     tags=["auth"], [](#__codelineno-18-37) ) [](#__codelineno-18-38) app.include_router( [](#__codelineno-18-39)     fastapi_users.get_reset_password_router(), [](#__codelineno-18-40)     prefix="/auth", [](#__codelineno-18-41)     tags=["auth"], [](#__codelineno-18-42) ) [](#__codelineno-18-43) app.include_router( [](#__codelineno-18-44)     fastapi_users.get_verify_router(UserRead), [](#__codelineno-18-45)     prefix="/auth", [](#__codelineno-18-46)     tags=["auth"], [](#__codelineno-18-47) ) [](#__codelineno-18-48) app.include_router( [](#__codelineno-18-49)     fastapi_users.get_users_router(UserRead, UserUpdate), [](#__codelineno-18-50)     prefix="/users", [](#__codelineno-18-51)     tags=["users"], [](#__codelineno-18-52) ) [](#__codelineno-18-53) app.include_router( [](#__codelineno-18-54)     fastapi_users.get_oauth_router(google_oauth_client, auth_backend, SECRET), [](#__codelineno-18-55)     prefix="/auth/google", [](#__codelineno-18-56)     tags=["auth"], [](#__codelineno-18-57) ) [](#__codelineno-18-58) [](#__codelineno-18-59) [](#__codelineno-18-60) @app.get("/authenticated-route") [](#__codelineno-18-61) async def authenticated_route(user: User = Depends(current_active_user)): [](#__codelineno-18-62)     return {"message": f"Hello {user.email}!"}`

`[](#__codelineno-19-1) import motor.motor_asyncio [](#__codelineno-19-2) from beanie import Document [](#__codelineno-19-3) from fastapi_users.db import BaseOAuthAccount, BeanieBaseUser, BeanieUserDatabase [](#__codelineno-19-4) from pydantic import Field [](#__codelineno-19-5) [](#__codelineno-19-6) DATABASE_URL = "mongodb://localhost:27017" [](#__codelineno-19-7) client = motor.motor_asyncio.AsyncIOMotorClient( [](#__codelineno-19-8)     DATABASE_URL, uuidRepresentation="standard" [](#__codelineno-19-9) ) [](#__codelineno-19-10) db = client["database_name"] [](#__codelineno-19-11) [](#__codelineno-19-12) [](#__codelineno-19-13) class OAuthAccount(BaseOAuthAccount): [](#__codelineno-19-14)     pass [](#__codelineno-19-15) [](#__codelineno-19-16) [](#__codelineno-19-17) class User(BeanieBaseUser, Document): [](#__codelineno-19-18)     oauth_accounts: list[OAuthAccount] = Field(default_factory=list) [](#__codelineno-19-19) [](#__codelineno-19-20) [](#__codelineno-19-21) async def get_user_db(): [](#__codelineno-19-22)     yield BeanieUserDatabase(User, OAuthAccount)`

`[](#__codelineno-20-1) from beanie import PydanticObjectId [](#__codelineno-20-2) from fastapi_users import schemas [](#__codelineno-20-3) [](#__codelineno-20-4) [](#__codelineno-20-5) class UserRead(schemas.BaseUser[PydanticObjectId]): [](#__codelineno-20-6)     pass [](#__codelineno-20-7) [](#__codelineno-20-8) [](#__codelineno-20-9) class UserCreate(schemas.BaseUserCreate): [](#__codelineno-20-10)     pass [](#__codelineno-20-11) [](#__codelineno-20-12) [](#__codelineno-20-13) class UserUpdate(schemas.BaseUserUpdate): [](#__codelineno-20-14)     pass`

`[](#__codelineno-21-1) import os [](#__codelineno-21-2) from typing import Optional [](#__codelineno-21-3) [](#__codelineno-21-4) from beanie import PydanticObjectId [](#__codelineno-21-5) from fastapi import Depends, Request [](#__codelineno-21-6) from fastapi_users import BaseUserManager, FastAPIUsers, models [](#__codelineno-21-7) from fastapi_users.authentication import ( [](#__codelineno-21-8)     AuthenticationBackend, [](#__codelineno-21-9)     BearerTransport, [](#__codelineno-21-10)     JWTStrategy, [](#__codelineno-21-11) ) [](#__codelineno-21-12) from fastapi_users.db import BeanieUserDatabase, ObjectIDIDMixin [](#__codelineno-21-13) from httpx_oauth.clients.google import GoogleOAuth2 [](#__codelineno-21-14) [](#__codelineno-21-15) from app.db import User, get_user_db [](#__codelineno-21-16) [](#__codelineno-21-17) SECRET = "SECRET" [](#__codelineno-21-18) [](#__codelineno-21-19) google_oauth_client = GoogleOAuth2( [](#__codelineno-21-20)     os.getenv("GOOGLE_OAUTH_CLIENT_ID", ""), [](#__codelineno-21-21)     os.getenv("GOOGLE_OAUTH_CLIENT_SECRET", ""), [](#__codelineno-21-22) ) [](#__codelineno-21-23) [](#__codelineno-21-24) [](#__codelineno-21-25) class UserManager(ObjectIDIDMixin, BaseUserManager[User, PydanticObjectId]): [](#__codelineno-21-26)     reset_password_token_secret = SECRET [](#__codelineno-21-27)     verification_token_secret = SECRET [](#__codelineno-21-28) [](#__codelineno-21-29)     async def on_after_register(self, user: User, request: Optional[Request] = None): [](#__codelineno-21-30)         print(f"User {user.id} has registered.") [](#__codelineno-21-31) [](#__codelineno-21-32)     async def on_after_forgot_password( [](#__codelineno-21-33)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-21-34)     ): [](#__codelineno-21-35)         print(f"User {user.id} has forgot their password. Reset token: {token}") [](#__codelineno-21-36) [](#__codelineno-21-37)     async def on_after_request_verify( [](#__codelineno-21-38)         self, user: User, token: str, request: Optional[Request] = None [](#__codelineno-21-39)     ): [](#__codelineno-21-40)         print(f"Verification requested for user {user.id}. Verification token: {token}") [](#__codelineno-21-41) [](#__codelineno-21-42) [](#__codelineno-21-43) async def get_user_manager(user_db: BeanieUserDatabase = Depends(get_user_db)): [](#__codelineno-21-44)     yield UserManager(user_db) [](#__codelineno-21-45) [](#__codelineno-21-46) [](#__codelineno-21-47) bearer_transport = BearerTransport(tokenUrl="auth/jwt/login") [](#__codelineno-21-48) [](#__codelineno-21-49) [](#__codelineno-21-50) def get_jwt_strategy() -> JWTStrategy[models.UP, models.ID]: [](#__codelineno-21-51)     return JWTStrategy(secret=SECRET, lifetime_seconds=3600) [](#__codelineno-21-52) [](#__codelineno-21-53) [](#__codelineno-21-54) auth_backend = AuthenticationBackend( [](#__codelineno-21-55)     name="jwt", [](#__codelineno-21-56)     transport=bearer_transport, [](#__codelineno-21-57)     get_strategy=get_jwt_strategy, [](#__codelineno-21-58) ) [](#__codelineno-21-59) [](#__codelineno-21-60) fastapi_users = FastAPIUsers[User, PydanticObjectId](get_user_manager, [auth_backend]) [](#__codelineno-21-61) [](#__codelineno-21-62) current_active_user = fastapi_users.current_user(active=True)`

Back to top

---

# Page not found · GitHub Pages

404
===

**File not found**

The site configured at this address does not contain the requested file.

If this is your site, make sure that the filename case matches the URL as well as any file permissions.  
For root URLs (like `http://example.com/`) you must provide an `index.html` file.

[Read the full documentation](https://help.github.com/pages/)
 for more information about using **GitHub Pages**.

[GitHub Status](https://githubstatus.com)
 — [@githubstatus](https://twitter.com/githubstatus)

 [![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTZCRDY3REIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTZCRDY3RUIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdCQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjdDQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SM9MCAAAA+5JREFUeNrEV11Ik1EY3s4+ddOp29Q5b0opCgKFsoKoi5Kg6CIhuwi6zLJLoYLopq4qsKKgi4i6CYIoU/q5iDAKs6syoS76IRWtyJ+p7cdt7sf1PGOD+e0c3dygAx/67ZzzPM95/877GYdHRg3ZjMXFxepQKNS6sLCwJxqNNuFpiMfjVs4ZjUa/pmmjeD6VlJS8NpvNT4QQ7mxwjSsJiEQim/1+/9lgMHgIr5ohuxG1WCw9Vqv1clFR0dCqBODElV6v90ogEDjGdYbVjXhpaendioqK07CIR7ZAqE49PT09BPL2PMgTByQGsYiZlQD4uMXtdr+JxWINhgINYhGT2MsKgMrm2dnZXgRXhaHAg5jEJodUAHxux4LudHJE9RdEdA+i3Juz7bGHe4mhE9FNrgwBCLirMFV9Okh5eflFh8PR5nK5nDabrR2BNJlKO0T35+Li4n4+/J+/JQCxhmu5h3uJoXNHPbmWZAHMshWB8l5/ipqammaAf0zPDDx1ONV3vurdidqwAQL+pEc8sLcAe1CCvQ3YHxIW8Pl85xSWNC1hADDIv0rIE/o4J0k3kww4xSlwIhcq3EFFOm7KN/hUGOQkt0CFa5WpNJlMvxBEz/IVQAxg/ZRZl9wiHA63yDYieM7DnLP5CiAGsC7I5sgtYKJGWe2A8seFqgFJrJjEPY1Cn3pJ8/9W1e5VWsFDTEmFrBcoDhZJEQkXuhICMyKpjhahqN21hRYATKfUOlDmkygrR4o4C0VOLGJKrOITKB4jijzdXygBKixyC5TDQdnk/Pz8qRw6oOWGlsTKGOQW6OH6FBWsyePxdOXLTgxiyebILZCjz+GLgMIKnXNzc49YMlcRdHXcSwxFVgTInQhC9G33UhNoJLuqq6t345p9y3eUy8OTk5PjAHuI9uo4b07FBaOhsu0A4Unc+T1TU1Nj3KsSSE5yJ65jqF2DDd8QqWYmAZrIM2VlZTdnZmb6AbpdV9V6ec9znf5Q7HjYumdRE0JOp3MjitO4SFa+cZz8Umqe3TCbSLvdfkR/kWDdNQl5InuTcysOcpFT35ZrbBxx4p3JAHlZVVW1D/634VRt+FvLBgK/v5LV9WS+10xMTEwtRw7XvqOL+e2Q8V3AYIOIAXQ26/heWVnZCVfcyKHg2CBgTpmPmjYM8l24GyaUHyaIh7XwfR9ErE8qHoDfn2LTNAVC0HX6MFcBIP8Bi+6F6cdW/DICkANRfx99fEYFQ7Nph5i/uQiA214gno7K+guhaiKg9gC62+M8eR7XsBsYJ4ilam60Fb7r7uAj8wFyuwM1oIOWgfmDy6RXEEQzJMPe23DXrVS7rtyD3Df8z/FPgAEAzWU5Ku59ZAUAAAAASUVORK5CYII=)](/)
[![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUM1QkUxRUI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUM1QkUxRkI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdGQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjgwQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hfPRaQAAB6lJREFUeNrsW2mME2UYbodtt+2222u35QheoCCYGBQligIJgkZJNPzgigoaTEj8AdFEMfADfyABkgWiiWcieK4S+QOiHAYUj2hMNKgYlEujpNttu9vttbvdw+chU1K6M535pt3ubHCSyezR+b73eb73+t7vrfXsufOW4bz6+vom9/b23ovnNNw34b5xYGAgODg46Mbt4mesVmsWd1qSpHhdXd2fuP/Afcput5/A88xwymcdBgLqenp6FuRyuWV4zu/v759QyWBjxoz5t76+/gun09mK5xFyakoCAPSaTCazNpvNPoYVbh6O1YKGRF0u13sNDQ27QMzfpiAAKj0lnU6/gBVfAZW2WWpwwVzy0IgP3G73FpjI6REhAGA9qVRqA1b9mVoBVyIC2tDi8Xg24+dUzQiAbS/s7Ox8G2o/3mKCC+Zw0efzPQEfcVjYrARX3dbV1bUtHo8fMgt42f+Mp0yUTVQbdWsAHVsikdiHkHaPxcQXQufXgUBgMRxme9U0AAxfH4vFvjM7eF6UkbJS5qoQwEQGA57Ac5JllFyUVZZ5ckUEgMVxsK2jlSYzI+QXJsiyjzNEAJyJAzb/KQa41jJKL8pODMQiTEAymXw5n8/P0IjD3bh7Rgog59aanxiIRTVvV/oj0tnHca/WMrVwODwB3raTGxzkBg/gnZVapFV62Wy2n5AO70HM/5wbJ0QnXyQSaVPDIuNZzY0V3ntHMwxiwHA0Gj2Np7ecIBDgaDAYXKCQJM1DhrgJ3nhulcPbl8j4NmHe46X/g60fwbz3aewjkqFQaAqebWU1AOqyQwt8Id6qEHMc97zu7u7FGGsn7HAiVuosVw7P35C1nccdgSCxop1dHeZswmfHMnxBo6ZTk+jN8dl/vF7vWofDsa+MLN9oEUBMxOb3+1eoEsBVw6Zmua49r8YmhAKDiEPcMwBsxMiqQ+ixzPFxZyqRpXARG/YOr1ObFJ0gUskXBbamcR1OKmMUvDxHRAu8/LmY3jFLMUpFqz9HxG65smYJdyKyECOxDiEAe/p1gjF2oonivZAsxVgl2daa4EQWCW6J55qFAFFZiJWYLxNQy2qOSUzGRsyXCUDIeliwAHEO4WSlWQBRFoZakXcKmCXmyXAKs0Ve9vl8q42WoIYpJU4hV3hKcNs8m9gl7p/xQ73eF5kB4j5mNrWmTJRNwAzqiV1CxjVTZCIkEq+Z1bZFZSN2CenmVAFVy4Plz8xKAGWjjAKFk6lCBMDR/MJjLLMSQNm43xAiQKTaA+9/wewhDjL+JVI1kkTSSOTcKbMTwPqESAot6dn6Fr1gHwVJju6IRuyiByPuUUBAg5DGkAgBmxlvdgIEK9gDkohdY/BJo4CAG0R8miRSsGABkgVQs4KXu098IgUXSSRsFAoKZiVAVDY2WUiiPTjYRi41KwGisrGsLtlsth8Fiwnz2fBkQvWfRtlE3iF2yW63/yCacXZ1dW02GwGyTFaRd4idJnCKHRaCxYRHoG5LTKT6SyiToP1fJHbmAYPYRR0UnZQtMnA6s0zg+GZBlt0Gdo7EPHgpE3Q6nZ8YyLhc8Xj8MJh/aKTAY+5FPAKHLE7RdwuYJZmNwzyCMkBCYyKROJBMJl9B/PXXCjjmCmDOVzH3fiPpObEWGqoKe4EBl8v1hlqsdLvd23mkxHM9pc9kMpmno9HoeTii7ewbHEZPPx1ztLS1tV3AnGuMjiNjvbQFuHw6zDo5By7dTPAQNBgMLrRarTkSls1mnwT7uwp9virx9QzbW/HuV/j5d/b+6jniKlllP8lkeONJDk+dq9GsQTnC4fB1heO0K47Hwe7WdDr9nAKgXwOBwHI+C45Htj1d6sd429TUNEcmUdc+PRaLHcvn87dXW4ugzdsaGxufL94NFv9zi1J7GVbhlvb2dnaJ3SVrxfc+n2+NTsZ7/H7/Mr3g5XdSIHyJSH1PZ+7fToyl2+ErqilgZ4NaLYB9goVGaHjR93Hv1ZrU4XDsFT20kH3PObzbWk0CgG1jacVIUnAQb9F+VexyLMzkpcLv0IJV7AHQIOCAUYHx7v5qgScmYHtTqSAyZLEJTK22Bie4iq3xsqpm4SAf9Hq9a2DnJ4uLK3SEULcdRvp3i3zHySqpficxEdsQc1NrlYXXvR+O7qASSezXB+h1SuUomgg9LL8BUoV4749EIolKh+EiqWmqVEZlDgHks2pxHw7xTqUQw9J5NcAXOK10AGIoZ6Zli6JY6Z1Q461KoZ4NiKLHarW+KDsxlDUPHZ5zPQZqUVDPJsTqb5n9malbpAh8C2XXDLl62+WZIDFRUlNVOiwencnNU3aQEkL+cDMSoLvZo2fQB7AJssNAuFuvorlDVVkkg2I87+jo2K2QAVphDrfyViK5VqtO34OkaxXCp+7drdDBCAdubm6eidX+2WwqT5komwh4YQLk+H4aE93h8Xg2gvHekQZOGSgLZTLyDTLJ4Lx9/KZWKBSainT4Iy3FqQBfnUZR42PKQFksBr9QKVXCPusD3OiA/RkQ5kP8qV/Jl1WywAp/6+dcmPM2zL1UrUahe4JqfnWWKXIul3uUbfP8njAFLW1OFr3gdFtZ72cNH+PtQT7/brW+NXqJAHh0y9V8/U/A1U7AfwIMAD7mS3pCbuWJAAAAAElFTkSuQmCC)](/)

---

