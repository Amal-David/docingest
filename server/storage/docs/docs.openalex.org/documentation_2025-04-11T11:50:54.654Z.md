# Table of Contents

- [Overview | OpenAlex technical documentation](#overview-openalex-technical-documentation)
- [Works | OpenAlex technical documentation](#works-openalex-technical-documentation)
- [Entities overview | OpenAlex technical documentation](#entities-overview-openalex-technical-documentation)
- [Quickstart tutorial | OpenAlex technical documentation](#quickstart-tutorial-openalex-technical-documentation)
- [Get a single work | OpenAlex technical documentation](#get-a-single-work-openalex-technical-documentation)
- [Authorship object | OpenAlex technical documentation](#authorship-object-openalex-technical-documentation)
- [Location object | OpenAlex technical documentation](#location-object-openalex-technical-documentation)
- [Work object | OpenAlex technical documentation](#work-object-openalex-technical-documentation)
- [Get lists of works | OpenAlex technical documentation](#get-lists-of-works-openalex-technical-documentation)
- [Authors | OpenAlex technical documentation](#authors-openalex-technical-documentation)
- [Get lists of authors | OpenAlex technical documentation](#get-lists-of-authors-openalex-technical-documentation)
- [Get a single author | OpenAlex technical documentation](#get-a-single-author-openalex-technical-documentation)
- [Sources | OpenAlex technical documentation](#sources-openalex-technical-documentation)
- [Search works | OpenAlex technical documentation](#search-works-openalex-technical-documentation)
- [Get a single source | OpenAlex technical documentation](#get-a-single-source-openalex-technical-documentation)
- [Limitations | OpenAlex technical documentation](#limitations-openalex-technical-documentation)
- [Search authors | OpenAlex technical documentation](#search-authors-openalex-technical-documentation)
- [Author disambiguation | OpenAlex technical documentation](#author-disambiguation-openalex-technical-documentation)

---

# Overview | OpenAlex technical documentation

[NextQuickstart tutorial](/quickstart-tutorial)

Last updated 2 months ago

[**OpenAlex**](https://openalex.org)
 is a fully open catalog of the global research system. It's named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria)
 and made by the nonprofit [OurResearch](https://ourresearch.org/)
.

This is the **technical documentation for OpenAlex,** including the [**OpenAlex API**](/how-to-use-the-api/api-overview)
 and the [**data snapshot**](https://docs.openalex.org/download-all-data/openalex-snapshot)
**.** Here, you can learn how to set up your code to access OpenAlex's data. If you want to explore the data as a human, you may be more interested in [**OpenAlex Web**](https://help.openalex.org)
**.**

[](#data)

Data


-------------------

The OpenAlex dataset describes scholarly [_entities_](/api-entities/entities-overview)
 and how those entities are connected to each other. Types of entities include [works](/api-entities/works)
, [authors](/api-entities/authors)
, [sources](/api-entities/sources)
, [institutions](/api-entities/institutions)
, [topics](/api-entities/topics)
, [publishers](/api-entities/publishers)
, and [funders](/api-entities/funders)
.

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph_theory)
) of hundreds of millions of entities and billions of connections between them all.

Learn more at our general help center article: [About the data](https://help.openalex.org/hc/en-us/articles/24397285563671-About-the-data)

[](#access)

Access


-----------------------

There is also a complete database snapshot available to download. [Learn more about the data snapshot here.](/download-all-data/openalex-snapshot)

The API has a limit of 100,000 calls per day, and the snapshot is updated monthly. If you need a higher limit, or more frequent updates, please look into [**OpenAlex Premium.**](https://openalex.org/pricing)

The web interface for OpenAlex, built directly on top of the API, is the quickest and easiest way to [get started with OpenAlex](https://help.openalex.org/getting-started)
.

[](#why-openalex)

Why OpenAlex?


------------------------------------

OpenAlex offers an open replacement for industry-standard scientific knowledge bases like Elsevier's Scopus and Clarivate's Web of Science. [Compared to](https://openalex.org/about#comparison)
 these paywalled services, OpenAlex offers significant advantages in terms of inclusivity, affordability, and avaliability.

OpenAlex is:

*   _Big —_ We have about twice the coverage of the other services, and have significantly better coverage of non-English works and works from the Global South.
    
*   _Easy —_ Our service is fast, modern, and well-documented.
    
*   _Open —_ Our complete dataset is free under the CC0 license, which allows for transparency and reuse.
    

Many people and organizations have already found great value using OpenAlex. Have a look at the [Testimonials](https://openalex.org/testimonials)
 to hear what they've said!

[](#contact)

Contact


-------------------------

For tech support and bug reports, please visit our [help page](https://openalex.org/help)
. You can also join the [OpenAlex user group](https://groups.google.com/g/openalex-users)
, and follow us on [Twitter (@OpenAlex\_org)](https://twitter.com/openalex_org)
 and [Mastodon](https://mastodon.social/@OpenAlex)
.

[](#citation)

Citation


---------------------------

If you use OpenAlex in research, please cite [this paper](https://arxiv.org/abs/2205.01833)
:

> Priem, J., Piwowar, H., & Orr, R. (2022). _OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts_. ArXiv. https://arxiv.org/abs/2205.01833

We offer a fast, modern REST API to get OpenAlex data programmatically. It's free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, to all API requests, like `mailto=example@domain.com`. [Learn more](/how-to-use-the-api/api-overview)

[add your email](/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)

![](https://docs.openalex.org/~gitbook/image?url=https%3A%2F%2F334408415-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHVuV3Ib5KXeBKft4Kcl%252Fuploads%252FQnHeDMjZBUI44XSz97TK%252Fopenalex_logo_text_transparent_20240117.png%3Falt%3Dmedia%26token%3D00c4f5aa-555b-477a-9ec0-14fe3512d2ea&width=768&dpr=4&quality=100&sign=df52886d&sv=2)

---

# Works | OpenAlex technical documentation

[PreviousEntities overview](/api-entities/entities-overview)
[NextWork object](/api-entities/works/work-object)

Last updated 1 year ago

Works are scholarly documents like journal articles, books, datasets, and theses. OpenAlex indexes over 240M works, with about 50,000 added daily. You can access a work in the OpenAlex API like this:

*   Get a list of OpenAlex works:
    

That will return a list of object, describing everything OpenAlex knows about each work. We collect new works from many sources, including Crossref, PubMed, institutional and discipline-specific repositories (eg, arXiv). Many older works come from the now-defunct Microsoft Academic Graph (MAG).

Works are linked to other works via the (outgoing citations), (incoming citations), and properties.

[](#whats-next)

What's next


--------------------------------

Learn more about what you can do with works:

📄

[`https://api.openalex.org/works`](https://api.openalex.org/works)

[`Work`](/api-entities/works/work-object)

[The Work object](/api-entities/works/work-object)

[Get a single work](/api-entities/works/get-a-single-work)

[Get lists of works](/api-entities/works/get-lists-of-works)

[Filter works](/api-entities/works/filter-works)

[Search for works](/api-entities/works/search-works)

[Group works](/api-entities/works/group-works)

[Get N-grams](/api-entities/works/get-n-grams)

[`referenced_works`](/api-entities/works/work-object#referenced_works)

[`cited_by_api_url`](/api-entities/works/work-object#cited_by_api_url)

[`related_works`](/api-entities/works/work-object#related_works)

---

# Entities overview | OpenAlex technical documentation

[PreviousQuickstart tutorial](/quickstart-tutorial)
[NextWorks](/api-entities/works)

Last updated 1 year ago

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. Together, these make a huge web (or more technically, heterogeneous directed ) of hundreds of millions of entities and billions of connections between them all.

Learn more about the OpenAlex entities:

*   : Scholarly documents like journal articles, books, datasets, and theses
    
*   : People who create works
    
*   : Where works are hosted (such as journals, conferences, and repositories)
    
*   : Universities and other organizations to which authors claim affiliations
    
*   : Topics assigned to works
    
*   : Companies and organizations that distribute works
    
*   : Organizations that fund research
    
*   : Where things are in the world
    

[graph](https://en.wikipedia.org/wiki/Graph_theory)

[Works](/api-entities/works)

[Authors](/api-entities/authors)

[Sources](/api-entities/sources)

[Institutions](/api-entities/institutions)

[Topics](/api-entities/topics)

[Publishers](/api-entities/publishers)

[Funders](/api-entities/funders)

[Geo](/api-entities/geo)

![Entity relation diagram for OpenAlex](https://docs.openalex.org/~gitbook/image?url=https%3A%2F%2F334408415-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHVuV3Ib5KXeBKft4Kcl%252Fuploads%252Fgit-blob-f2467ba820f38bcd9dc58a791415c8bd1fbcafec%252Fentities.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=60a05a56&sv=2)

---

# Quickstart tutorial | OpenAlex technical documentation

[PreviousOverview](/)
[NextEntities overview](/api-entities/entities-overview)

Last updated 1 year ago

Lets use the OpenAlex API to get journal articles and books published by authors at Stanford University. We'll limit our search to articles published between 2010 and 2020. Since OpenAlex is free and openly available, these examples work without any login or account creation.

If you open these examples in a web browser, they will look _much_ better if you have a browser plug-in such as installed.

### 

[](#id-1.-find-the-institution)

1\. Find the institution

You can use the endpoint to learn about universities and research centers. OpenAlex has a powerful search feature that searches across 108,000 institutions.

Lets use it to search for Stanford University:

*   Find Stanford University
    

Our first result looks correct (yeah!):

Copy

    {
      "id": "https://openalex.org/I97018004",
      "ror": "https://ror.org/00f54p054",
      "display_name": "Stanford University",
      "country_code": "US",
      "type": "education",
      "homepage_url": "http://www.stanford.edu/"
      // other fields removed
    }

We can use the ID `https://openalex.org/I97018004` in that result to find out more.

### 

[](#id-2.-find-articles-works-associated-with-stanford-university)

2\. Find articles (works) associated with Stanford University

This is just one of the 50+ ways that you can filter works!

### 

[](#id-3.-filter-works-by-publication-year)

3\. Filter works by publication year

Right now the list shows records for all years. Lets narrow it down to works that were published between 2010 to 2020, and sort from newest to oldest.

### 

[](#id-4.-group-works-by-publication-year-to-show-counts-by-year)

4\. Group works by publication year to show counts by year

Finally, you can group our result by publication year to get our final result, which is the number of articles produced by Stanford, by year from 2010 to 2020. There are more than 30 ways to group records in OpenAlex, including by publisher, journal, and open access status.

That gives a result like this:

Copy

    [\
      {\
        "key": "2020",\
        "key_display_name": "2020",\
        "count": 18627\
      },\
      {\
        "key": "2019",\
        "key_display_name": "2019",\
        "count": 15933\
      },\
      {\
        "key": "2017",\
        "key_display_name": "2017",\
        "count": 14789\
      },\
      ...\
    ]

[](#whats-next)

What's next?


---------------------------------

Jump into an area of OpenAlex that interests you:

The endpoint contains over 240 million articles, books, and theses . We can filter to show works associated with Stanford.

Show works where at least one author is associated with Stanford University

Show works with publication years 2010 to 2020, associated with Stanford University

Group records by publication year

There you have it! This same technique can be applied to hundreds of questions around scholarly data. The data you received is under a , so not only did you access it easily, you can share it freely!

And check out our page for some hands-on examples!

👍

[JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc)

[institutions](/api-entities/institutions)

[`https://api.openalex.org/institutions?search=stanford`](https://api.openalex.org/institutions?search=stanford)

😲

[works](/api-entities/works)

[`https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004`](https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004)

[https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004,publication\_year:2010-2020&sort=publication\_date:desc](https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004,publication_year:2010-2020&sort=publication_date:desc)

[`https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004,publication\_year:2010-2020\&group-by=publication\_year`](https://api.openalex.org/works?filter=institutions.id:https://openalex.org/I97018004,publication_year:2010-2020&group-by=publication_year)

🎉

[CC0 license](https://creativecommons.org/publicdomain/zero/1.0/)

[Works](/api-entities/works)

[Authors](/api-entities/authors)

[Sources](/api-entities/sources)

[Institutions](/api-entities/institutions)

[Topics](/api-entities/topics)

[Publishers](/api-entities/publishers)

[Funders](/api-entities/funders)

[tutorials](/additional-help/tutorials)

---

# Get a single work | OpenAlex technical documentation

[PreviousLocation object](/api-entities/works/work-object/location-object)
[NextGet lists of works](/api-entities/works/get-lists-of-works)

Last updated 2 years ago

It's easy to get a work from from the API with: `/works/<entity_id>` Here's an example:

*   Get the work with the `W2741809807`:
    

That will return a object, describing everything OpenAlex knows about the work with that ID.

Copy

    {
        "id": "https://openalex.org/W2741809807",
        "doi": "https://doi.org/10.7717/peerj.4375",
        "title": "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
        "display_name": "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
        "publication_year": 2018,
        "publication_date": "2018-02-13",
        // other fields removed for brevity
    }

You can make up to 50 of these queries at once by requesting a list of entities and filtering on IDs ().

[](#external-ids)

External IDs


-----------------------------------

You can look up works using external IDs such as a DOI:

*   Get the work with this DOI: `https://doi.org/10.7717/peerj.4375`:
    

You can use the full ID or a shorter Uniform Resource Name (URN) format like so:

*   Get the work with PubMed ID: `https://pubmed.ncbi.nlm.nih.gov/14907713`:
    

Available external IDs for works are:

External ID

URN

DOI

`doi`

Microsoft Academic Graph (MAG)

`mag`

PubMed ID (PMID)

`pmid`

PubMed Central ID (PMCID)

`pmcid`

You must make sure that the ID(s) you supply are valid and correct. If an ID you request is incorrect, you will get no result. If you request an illegal ID—such as one containing a `,` or `&`, the query will fail and you will get a 403 error.

### 

[](#select-fields)

Select fields

You can use `select` to limit the fields that are returned in a work object. More details are .

Display only the `id` and `display_name` for a work object

📄

[here](/how-to-use-the-api/get-lists-of-entities/select-fields)

[https://api.openalex.org/works/W2741809807?select=id,display\_name](https://api.openalex.org/works/W2741809807?select=id,display_name)

[`https://api.openalex.org/works/W2741809807`](https://api.openalex.org/works/W2741809807)

[`Work`](/api-entities/works/work-object)

[tutorial](https://blog.ourresearch.org/fetch-multiple-dois-in-one-openalex-api-request/)

[https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375](https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375)

[https://api.openalex.org/works/pmid:14907713](https://api.openalex.org/works/pmid:14907713)

[using OR syntax](/how-to-use-the-api/get-lists-of-entities/filter-entity-lists#addition-or)

[OpenAlex ID](/how-to-use-the-api/get-single-entities#the-openalex-id)

---

# Authorship object | OpenAlex technical documentation

[PreviousWork object](/api-entities/works/work-object)
[NextLocation object](/api-entities/works/work-object/location-object)

Last updated 9 months ago

The Authorship object represents a single author and her institutional affiliations in the context of a given work. It is only found as part of a `Work` object, in the property.

### 

[](#affiliations)

`affiliations`

_List:_ List of objects

Each institutional affiliation that this author has claimed will be listed here: the raw affiliation string that we found, along with the OpenAlex ID or IDs that we matched it to.

This information will be redundant with below, but is useful if you need to know about what we used to match institutions.

Copy

    affiliations: [\
        {\
            raw_affiliation_string: "Scholarly Communications Lab, Simon Fraser University, Vancouver, Canada",\
            institution_ids: [\
                "https://openalex.org/I18014758"\
            ]\
        }\
    ]

### 

[](#author)

`author`

_String:_ An author of this work, as a dehydrated object.

Note that, sometimes, we assign ORCID using , so the ORCID we associate with an author was not necessarily included with this work.

Copy

    author: {
        id: "https://openalex.org/A5085171399",
        display_name: "Juan Pablo Alperin",
        orcid: "https://orcid.org/0000-0002-9344-7439"
    }

### 

[](#author_position)

`author_position`

_String:_ A summarized description of this author's position in the work's author list. Possible values are `first`, `middle`, and `last`.

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some contexts to have this as a categorical value.

Copy

    author_position: "first"

### 

[](#countries)

`countries`

_List:_ The country or countries for this author.

We determine the countries using a combination of matched institutions and parsing of the raw affiliation strings, so we can have this information for some authors even if we do not have a specific institutional affiliation.

Copy

    countries: [\
        "US"\
    ]

### 

[](#institutions)

`institutions`

Copy

    institutions: [\
        {\
            id: "https://openalex.org/I18014758",\
            display_name: "Simon Fraser University",\
            ror: "https://ror.org/0213rcc28",\
            country_code: "CA",\
            type: "education",\
            lineage: ["https://openalex.org/I18014758"]\
        }\
    ]

### 

[](#is_corresponding)

`is_corresponding`

_Boolean:_ If `true`, this is a corresponding author for this work.

This is a new feature, and the information may be missing for many works. We are working on this, and coverage will improve soon.

### 

[](#raw_affiliation_strings)

`raw_affiliation_strings`

_List:_ This author's affiliation as it originally came to us (on a webpage or in an API), as a list of raw unformatted strings. If there is only one affiliation, it will be a list of length one.

Copy

    raw_affiliation_strings: [\
        "Canadian Institute for Studies in Publishing, Simon Fraser University"\
    ],

### 

[](#raw_author_name)

`raw_author_name`

_String:_ This author's name as it originally came to us (on a webpage or in an API), as a raw unformatted string.

Copy

    raw_author_name: "Juan Pablo Alperin"

_List:_ The institutional affiliations this author claimed in the context of this work, as objects.

📄

[`Institution`](/api-entities/institutions)

[`Author`](/api-entities/authors/author-object)

[author disambiguation](https://github.com/ourresearch/openalex-docs/blob/main/api-entities/works/authors/author-disambiguation.md)

[`institutions`](/api-entities/works/work-object/authorship-object#institutions)

[dehydrated `Institution`](/api-entities/institutions/institution-object#the-dehydratedinstitution-object)

[`work.authorships`](/api-entities/works/work-object#authorships)

---

# Location object | OpenAlex technical documentation

[PreviousAuthorship object](/api-entities/works/work-object/authorship-object)
[NextGet a single work](/api-entities/works/get-a-single-work)

Last updated 12 months ago

The `Location` object describes the location of a given work. It's only found as part of the `Work` object.

Locations are meant to capture the way that a work exists in different versions. So, for example, a work may have a version that has been peer-reviewed and published in a journal (the ). This would be one of the work's locations. It may have another version available on a preprint server like —this version having been posted before it was accepted for publication. This would be another one of the work's locations.

Below is an example of a work in OpenAlex () that has multiple locations with different properties. The version of record, published in a peer-reviewed journal, is listed first, and is not open-access. The second location is a university repository, where one can find an open-access copy of the published version of the work. Other locations are listed below.

There are three places in the `Work` object where you can find locations:

### 

[](#is_accepted)

`is_accepted`

Copy

    is_accepted: true

### 

[](#is_oa)

`is_oa`

_Boolean:_ `True` if an Open Access (OA) version of this work is available at this location.

Copy

    is_oa: true

### 

[](#is_published)

`is_published`

Copy

    is_published: true

### 

[](#landing_page_url)

landing\_page\_url

_String:_ The landing page URL for this location.

Copy

    landing_page_url: "https://doi.org/10.1590/s1678-77572010000100010"

### 

[](#license)

license

Copy

    license: "cc-by"

### 

[](#source)

source

The concept of a source is meant to capture a certain social relationship between the host organization and a version of a work. When an organization puts the work on the internet, there is an understanding that they have, at some level, endorsed the work. This level varies, and can be very different depending on the source!

Copy

    source {
        id: "https://openalex.org/S125754415",
        display_name: "Proceedings of the National Academy of Sciences of the United States of America",
        issn_l: "0027-8424",
        issn: ["1091-6490", "0027-8424"],
        host_organization: "https://openalex.org/P4310320052",
        type: "journal"
    }

### 

[](#pdf_url)

pdf\_url

_String:_ A URL where you can find this location as a PDF.

Copy

    pdf_url: "http://www.scielo.br/pdf/jaos/v18n1/a10v18n1.pdf"

### 

[](#version)

version

*   `publishedVersion`: The document’s version of record. This is the most authoritative version.
    
*   `acceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `publishedVersion`.
    
*   `submittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. Its content may differ significantly from that of the accepted article.
    

Copy

    version: "publishedVersion"

Locations are meant to cover anywhere that a given work can be found. This can include journals, proceedings, institutional repositories, and subject-area repositories like and . If you are only interested in a certain one of these (like journal), you can use a to specify the `locations.source.type`. ()

: The best (closest to the ) copy of this work.

: The best available open access location of this work.

: A list of all of the locations where this work lives. This will include the two locations above if availabe, and can also include other locations.

_Boolean:_ `true` if this location's is either `acceptedVersion` or `publishedVersion`; otherwise `false`.

There are . OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in.

_Boolean:_ `true` if this location's is `publishedVersion`; otherwise `false`.

_String:_ The location's publishing license. This can be a license such as cc0 or cc-by, a publisher-specific license, or null which means we are not able to determine a license for this location.

_Object:_ Information about the source of this location, as a object.

_String:_ The version of the work, based on the Possible values are:.

📄

[many ways to define OA](https://peerj.com/articles/4375/#literature-review)

[Creative Commons](https://creativecommons.org/about/cclicenses/)

[DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings)

[`version`](/api-entities/works/work-object/location-object#version)

[`version`](/api-entities/works/work-object/location-object#version)

[version of record](https://en.wikipedia.org/wiki/Version_of_record)

[bioRxiv](https://www.biorxiv.org/)

[https://openalex.org/W2807749226](https://openalex.org/W2807749226)

[arXiv](https://arxiv.org/)

[bioRxiv](https://www.biorxiv.org/)

[filter](/api-entities/works/filter-works)

[version of record](https://en.wikipedia.org/wiki/Version_of_record)

[Learn more about types here.](/api-entities/sources/source-object#type)

[`DehydratedSource`](/api-entities/sources/source-object#the-dehydratedsource-object)

One work can have multiple locations. These locations can differ in properties such as version and open-access status.

![](https://docs.openalex.org/~gitbook/image?url=https%3A%2F%2F334408415-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHVuV3Ib5KXeBKft4Kcl%252Fuploads%252Fgit-blob-8779363a164439931806e9f21b1c3560d0e372f3%252Flocations_screenshot_annotate.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=c015e591&sv=2)

[`primary_location`](/api-entities/works/work-object#primary_location)

[`best_oa_location`](/api-entities/works/work-object#best_oa_location)

[`locations`](/api-entities/works/work-object#locations)

---

# Work object | OpenAlex technical documentation

[PreviousWorks](/api-entities/works)
[NextAuthorship object](/api-entities/works/work-object/authorship-object)

Last updated 2 months ago

There's a lot of useful data inside a work. When you use the API to get a or , this is what's returned.

### 

[](#abstract_inverted_index)

`abstract_inverted_index`

_Object:_ The abstract of the work, as an , which encodes information about the abstract's words and their positions within the text. , OpenAlex doesn't include plaintext abstracts due to legal constraints.

Copy

    abstract_inverted_index: {
        Despite: [\
            0\
        ],
        growing: [\
            1\
        ],
        interest: [\
            2\
        ],
        in: [\
            3,\
            57,\
            73,\
            110,\
            122\
        ],
        Open: [\
            4,\
            201\
        ],
        Access: [\
            5\
        ],
        ...
    }

#### 

[](#abstract-inverted-index-coverage)

Abstract inverted index coverage

Newer works are more likely to have an abstract inverted index. For example, over 60% of works in 2022 have abstract data, compared to 45% for works older than 2000. Full chart is below:

### 

[](#alternate_host_venues-deprecated)

`alternate_host_venues` (deprecated)

### 

[](#authorships)

`authorships`

Copy

    authorships: [\
        // first authorship object:\
        {\
            author_position: "middle",\
            author: {\
                id: "https://openalex.org/A5023888391",\
                display_name: "Jason Priem",\
                orcid: "https://orcid.org/0000-0001-6187-6610"\
            },\
            institutions: [\
                {\
                    id: "https://openalex.org/I4200000001",\
                    display_name: "OurResearch",\
                    ror: "https://ror.org/02nr0ka47",\
                    country_code: "US",\
                    type: "nonprofit"\
                }\
            ],\
            // other fields removed for brevity. See the Authorship object documentation\
        },\
        \
        // more authorship objects go here\
    ]

### 

[](#apc_list)

`apc_list`

*   `value`: _Integer_
    
*   `currency`: _String_
    
*   `provenance`: _String_ — the source of this data. Currently the only value is “doaj” (DOAJ)
    
*   `value_usd`: _Integer_ — the APC converted into USD
    

Copy

    apc_payment: {
        value: 3200,
        currency: "USD",
        value_usd: 3200,
        provenance: "doaj"
    }

### 

[](#apc_paid)

`apc_paid`

*   `value`: _Integer_
    
*   `currency`: _String_
    
*   `provenance`: _String_ — currently either `openapc` or `doaj`, but more will be added; see below for details.
    
*   `value_usd`: _Integer_ — the APC converted into USD
    

Copy

    apc_payment: {
        value: 2250,
        currency: "EUR",
        value_usd: 2426,
        provenance: "openapc"
    }

### 

[](#best_oa_location)

`best_oa_location`

We score open locations to determine which is best using these factors:

1.  Must have is\_oa: true
    
2.  type\_:\_ "publisher" is better than "repository".
    
3.  version: "publishedVersion" is better than "acceptedVersion", which is better than "submittedVersion".
    
4.  pdf\_url: A location with a direct PDF link is better than one without.
    
5.  repository rankings: Some major repositories like PubMed Central and arXiv are ranked above others.
    

Copy

    best_oa_location: {
      is_oa: true,
      landing_page_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1398957",
      pdf_url: null,
      source: {
        id: "https://openalex.org/S2764455111",
        display_name: "PubMed Central",
        issn_l: null,
        issn: null,
        host_organization: "https://openalex.org/I1299303238",
        type: "repository"
      },
      license: null,
      version: "publishedVersion"
    }

### 

[](#biblio)

`biblio`

_Object:_ Old-timey bibliographic info for this work. This is mostly useful only in citation/reference contexts. These are all strings because sometimes you'll get fun values like "Spring" and "Inside cover."

*   `volume` (_String_)
    
*   `issue` (_String_)
    
*   `first_page` (_String_)
    
*   `last_page` (_String_)
    

Copy

    biblio: {
        volume: "495",
        issue: "7442",
        first_page: "437",
        last_page: "440"
    }

### 

[](#citation_normalized_percentile)

`citation_normalized_percentile`

Copy

    citation_normalized_percentile: {
            value: 0.999948,
            is_in_top_1_percent: true,
            is_in_top_10_percent": true
    }

### 

[](#cited_by_api_url)

`cited_by_api_url`

### 

[](#cited_by_count)

`cited_by_count`

_Integer:_ The number of citations to this work. These are the times that other works have cited this work: Other works ➞ This work.

Copy

    cited_by_count: 382

### 

[](#concepts)

`concepts`

Each `Concept` object in the list also has one additional property:

Concepts with a score of at least 0.3 are assigned to the work. However, ancestors of an assigned concept are also added to the work, even if the ancestor scores are below 0.3.

Because ancestor concepts are assigned to works, you may see concepts in works with very low scores, even some zero scores.

Copy

    concepts: [\
        {\
            id: "https://openalex.org/C71924100",\
            wikidata: "https://www.wikidata.org/wiki/Q11190",\
            display_name: "Medicine",\
            level: 0,\
            score: 0.9187037\
        },\
        {\
            id: "https://openalex.org/C3007834351",\
            wikidata: "https://www.wikidata.org/wiki/Q82069695",\
            display_name: "Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)",\
            level: 5,\
            score: 0.8070164\
        },\
        ...\
        {\
            id: "https://openalex.org/C191935318",\
            wikidata: "https://www.wikidata.org/wiki/Q148",\
            display_name: "China",\
            level: 2,\
            score: 0.5948172\
        },\
        ...\
        {\
            id: "https://openalex.org/C121608353",\
            wikidata: "https://www.wikidata.org/wiki/Q12078",\
            display_name: "Cancer",\
            level: 2,\
            score: 0.46887803\
        },\
        ...\
        {\
            id: "https://openalex.org/C17744445",\
            wikidata: "https://www.wikidata.org/wiki/Q36442",\
            display_name: "Political science",\
            level: 0,\
            score: 0\
        }\
    ]

### 

[](#corresponding_author_ids)

`corresponding_author_ids`

Copy

    corresponding_author_ids: ["https://openalex.org/A5004365451"]

### 

[](#corresponding_institution_ids)

`corresponding_institution_ids`

Copy

    corresponding_institution_ids: ["https://openalex.org/I4210123613"]

### 

[](#countries_distinct_count)

`countries_distinct_count`

Copy

    countries_distinct_count: 4

### 

[](#counts_by_year)

`counts_by_year`

Any citations older than ten years old aren't included. Years with zero citations have been removed so you will need to add those in if you need them.

Copy

    counts_by_year: [\
        {\
            year: 2022,\
            cited_by_count: 8\
        },\
        {\
            year: 2021,\
            cited_by_count: 252\
        },\
        ...\
        {\
            year: 2012,\
            cited_by_count: 79\
        }\
    ]

### 

[](#created_date)

`created_date`

Copy

    created_date: "2017-08-08"

### 

[](#display_name)

`display_name`

Copy

    display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",

### 

[](#doi)

`doi`

Copy

    doi: "https://doi.org/10.7717/peerj.4375"

### 

[](#fulltext_origin)

`fulltext_origin`

This attribute is only available for works with `has_fulltext:true`.

Copy

    fulltext_origin: "pdf"

### 

[](#fwci)

`fwci`

Copy

    fwci: 76.992

### 

[](#grants)

`grants`

Copy

    grants: [\
        // grant for which we have the grant details:\
        {\
            funder: "https://openalex.org/F4320306076",\
            funder_display_name: "National Science Foundation",\
            award_id: "ABI 1661218",\
        },\
        // grant for which we do not have the details:\
        {\
            funder: "https://openalex.org/F4320306084",\
            funder_display_name: "U.S. Department of Energy",\
            award_id: null,\
        },\
    ]

### 

[](#has_fulltext)

`has_fulltext`

Copy

    has_fulltext: true

### 

[](#host_venue-deprecated)

`host_venue` (deprecated)

### 

[](#id)

`id`

Copy

    id: "https://openalex.org/W2741809807"

### 

[](#ids)

`ids`

_Object:_ All the external identifiers that we know about for this work. IDs are expressed as URIs whenever possible. Possible ID types:

Most works are missing one or more ID types (either because we don't know the ID, or because it was never assigned). Keys for `null` IDs are not displayed.

Copy

    ids: {
        openalex: "https://openalex.org/W2741809807",
        doi: "https://doi.org/10.7717/peerj.4375",
        mag: 2741809807,
        pmid: "https://pubmed.ncbi.nlm.nih.gov/29456894"
    }

### 

[](#indexed_in)

`indexed_in`

_List:_ The sources this work is indexed in. Possible values: `arxiv`, `crossref`, `doaj`, `pubmed`.

Copy

    indexed_in: [\
        "arxiv", "crossref", "pubmed"\
    ] 

### 

[](#institutions_distinct_count)

`institutions_distinct_count`

Copy

    institutions_distinct_count: 4

### 

[](#is_paratext)

`is_paratext`

In our context, paratext is stuff that's in a scholarly venue (like a journal) but is _about the venue_ rather than a scholarly work properly speaking. Some examples and nonexamples:

*   **yep it's paratext**: front cover, back cover, table of contents, editorial board listing, issue information, masthead.
    
*   **no, not paratext**: research paper, dataset, letters to the editor, figures
    

Turns out there is a lot of paratext in registries like Crossref. That's not a bad thing... but we've found that it's good to have a way to filter it out.

We determine `is_paratext` algorithmically using title heuristics.

Copy

    is_paratext: false 

### 

[](#is_retracted)

`is_retracted`

_Boolean:_ True if we know this work has been retracted.

Copy

    is_retracted: false 

### 

[](#keywords)

`keywords`

The score for each keyword represents the similarity score of that keyword to the title and abstract text of the work.

We provide up to 5 keywords per work, for all keywords with scores above a certain threshold.

Copy

    [\
        {\
            id: "https://openalex.org/keywords/global-seaweed-distribution",\
            display_name: "Global Seaweed Distribution",\
            score: 0.559386\
        },\
        {\
            id: "https://openalex.org/keywords/climate-change-impacts",\
            display_name: "Climate Change Impacts",\
            score: 0.535795\
        },\
        {\
            id: "https://openalex.org/keywords/ecosystem-resilience",\
            display_name: "Ecosystem Resilience",\
            score: 0.502789\
        }\
    ]

### 

[](#language)

`language`

A few things to keep in mind about this:

*   We don't always assign a language if we do not have enough words available to accurately guess.
    
*   We report the language of the metadata, not the full text. For example, if a work is in French, but the title and abstract are in English, we report the language as English.
    
*   In some cases, abstracts are in two different languages. Unfortunately, when this happens, what we report will not be accurate.
    

Copy

    language: "en"

### 

[](#license)

`license`

_String:_ The license applied to this work at this host. Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

Copy

    license: "cc-by"

### 

[](#locations)

`locations`

Copy

    locations: [ \
      {\
        is_oa: true,\
        landing_page_url: "https://doi.org/10.1073/pnas.17.6.401",\
        pdf_url: "http://www.pnas.org/content/17/6/401.full.pdf",\
        source: {\
          id: "https://openalex.org/S125754415",\
          display_name: "Proceedings of the National Academy of Sciences of the United States of America",\
          issn_l: "0027-8424",\
          issn: ["1091-6490", "0027-8424"],\
          host_organization: "https://openalex.org/P4310320052",\
          type: "journal"\
        },\
        license: null,\
        version: "publishedVersion"\
      },\
      {\
        is_oa: true,\
        landing_page_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1076072",\
        pdf_url: null,\
        source: {\
          id: "https://openalex.org/S2764455111",\
          display_name: "PubMed Central",\
          issn_l: null,\
          issn: null,\
          host_organization: "https://openalex.org/I1299303238",\
          type: "repository"\
        },\
        license: null,\
        version: "publishedVersion"\
      }\
    ]

### 

[](#locations_count)

`locations_count`

Copy

    locations_count: 3

### 

[](#mesh)

`mesh`

Copy

    mesh: [\
        {\
            descriptor_ui: "D017712",\
            descriptor_name: "Peer Review, Research",\
            qualifier_ui: "Q000379",\
            qualifier_name: "methods",\
            is_major_topic: false\
        },\
        {\
            descriptor_ui: "D017712",\
            descriptor_name: "Peer Review, Research",\
            qualifier_ui: "Q000592",\
            qualifier_name: "standards",\
            is_major_topic: true\
        }\
    ]

### 

[](#open_access)

`open_access`

Copy

    open_access: {
        is_oa: true,
        oa_status: "gold",
        oa_url: "https://peerj.com/articles/4375.pdf",
        any_repository_has_fulltext: true
    },

### 

[](#primary_location)

`primary_location`

Copy

    primary_location: {
      is_oa: true,
      landing_page_url: "https://doi.org/10.1073/pnas.17.6.401",
      pdf_url: "http://www.pnas.org/content/17/6/401.full.pdf",
      source: {
        id: "https://openalex.org/S125754415",
        display_name: "Proceedings of the National Academy of Sciences of the United States of America",
        issn_l: "0027-8424",
        issn: ["1091-6490", "0027-8424"],
        host_organization: "https://openalex.org/P4310320052",
        type: "journal"
      },
      license: null,
      version: "publishedVersion"
    }

### 

[](#primary_topic)

`primary_topic`

_Object_

Copy

    primary_topic: {
        id: "https://openalex.org/T12419",
        display_name: "Analysis of Cardiac and Respiratory Sounds",
        score: 	0.9997,
        subfield: {
            id: 2740,
            display_name: "Pulmonary and Respiratory Medicine"
        }
        field: {
            id: 27,
            display_name: "Medicine"
        }
        domain: {
            id: 4,
            display_name: "Health Sciences"
        }
    }

### 

[](#publication_date)

`publication_date`

Where different publication dates exist, we usually select the earliest available date of electronic publication.

Copy

    publication_date: "2018-02-13"

### 

[](#publication_year)

`publication_year`

_Integer:_ The year this work was published.

Copy

    publication_year: 2018

### 

[](#referenced_works)

`referenced_works`

Copy

    referenced_works: [\
        "https://openalex.org/W2753353163",\
        "https://openalex.org/W2785823074",\
        "https://openalex.org/W2511661767",\
        "https://openalex.org/W2115339903",\
        "https://openalex.org/W2031754690"\
    ]

### 

[](#related_works)

`related_works`

Copy

    related_works: [\
        "https://openalex.org/W2753353163",\
        "https://openalex.org/W2785823074",\
        "https://openalex.org/W2511661767",\
        "https://openalex.org/W2115339903",\
        "https://openalex.org/W2031754690",\
    ]

### 

[](#sustainable_development_goals)

`sustainable_development_goals`

_List:_ List of objects

We display all of the SDGs with a prediction score higher than 0.4.

Copy

    sustainable_development_goals: [\
        {\
            id: "https://metadata.un.org/sdg/3",\
            display_name: "Good health and well-being",\
            score: 	0.95\
        }\
    ]

### 

[](#topics)

`topics`

_List:_ List of objects

Copy

    topics: [\
        {\
            id: "https://openalex.org/T12419",\
            display_name: "Analysis of Cardiac and Respiratory Sounds",\
            score: 	0.9997,\
            subfield: {\
                id: 2740,\
                display_name: "Pulmonary and Respiratory Medicine"\
            }\
            field: {\
                id: 27,\
                display_name: "Medicine"\
            }\
            domain: {\
                id: 4,\
                display_name: "Health Sciences"\
            }\
        }\
        ...\
    ]

### 

[](#title)

`title`

_String:_ The title of this work.

Copy

    title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",

### 

[](#type)

`type`

_String:_ The type of the work.

(Note that distinguishing between journals and conferences is a hard problem, one we often get wrong. We are working on improving this, but we also point out that the two have a lot of overlap in terms of their roles as hosts of research publications.)

Works that are hosted primarily on a preprint, or that are identified speicifically as preprints in the metadata we receive, are assigned the type `preprint` rather than `article`.

Works that represent stuff that is _about_ the venue (such as a journal)—rather than a scholarly work properly speaking—have type `paratext`. These include things like front-covers, back-covers, tables of contents, and the journal itself (e.g., `https://openalex.org/W4232230324`).

We also have types for `letter` , `editorial` , `erratum` (corrections), `libguides` , `supplementary-materials` , and `review` (currently, articles that come from journals that exclusively publish review articles). Coverage is low on these but will improve.

Copy

    type: "article"

### 

[](#type_crossref)

`type_crossref`

_String:_ Legacy type information, using Crossref's "type" controlled vocabulary.

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves.

Copy

    type_crossref: "journal-article"

### 

[](#updated_date)

`updated_date`

Copy

    updated_date: "2022-01-02T00:22:35.180390"

[](#the-openaccess-object)

The `OpenAccess` object


-------------------------------------------------------

The `OpenAccess` object describes access options for a given work. It's only found as part of the `Work` object.

### 

[](#any_repository_has_fulltext)

`any_repository_has_fulltext`

Copy

    any_repository_has_fulltext: true

### 

[](#is_oa)

`is_oa`

_Boolean:_ `True` if this work is Open Access (OA).

Copy

    is_oa: true

### 

[](#oa_status)

`oa_status`

_String:_ The Open Access (OA) status of this work. Possible values are:

*   `**gold**`: Published in a fully OA journal.
    

*   `**bronze**`: Free to read on the publisher landing page, but without any identifiable license.
    
*   `**closed**`: All other articles.
    

Copy

    oa_status: "gold"

### 

[](#oa_url)

`oa_url`

_String:_ The best Open Access (OA) URL for this work.

This URL might be a direct link to a PDF, or it might be to a landing page that links to the free PDF

Copy

    oa_url: "https://peerj.com/articles/4375.pdf"

The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of and . The attributes `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.

_List:_ List of objects, each representing an author and their institution. the first 100 authors to maintain API performance.

For more information, see the page.

_Object:_ Information about this work's APC (). The object contains:

This value is the APC list price–the price as listed by the journal’s publisher. That’s not always the price _actually_ paid, because publishers may offer various discounts to authors. Unfortunately we don’t always know this discounted price, but when we do you can find it in .

Currently our only source for this data is , and so `doaj` is the only value for `apc_list.provenance`, but we’ll add other sources over time.

We currently don’t have information on the list price for hybrid journals (toll-access journals that also provide an open-access option), but we will add this at some point. We do have information for hybrid OA works occasionally.

You can use this attribute to find works published in journals by looking at works where `apc_list.value` is zero. See for more info.

_Object:_ Information about the _paid_ APC () for this work. The object contains:

You can find the _listed_ APC price (when we know it) for a given work using . However, authors don’t always pay the listed price; often they get a discounted price from publishers. So it’s useful to know the APC actually paid by authors, as distinct from the list price. This is our effort to provide this.

Our best source for the actually paid price is the project. Where available, we use that data, and so `apc_paid.provenance` is `openapc`. Where OpenAPC data is unavailable (and unfortunately this is common) we make our best guess by assuming the author paid the APC list price, and apc\_paid.provenance will be set to wherever we got the list price from.

_Object:_ A object with the best available open access location for this work.

_Object:_ The percentile of this work's citation count normalized by work type, publication year, and subfield. This field represents the same information as the FWCI expressed as a percentile. Learn more in the reference article: .

_String:_ A URL that uses the filter to display a list of works that cite this work. This is a way to expand into an actual list of works.

_List:_ List of dehydrated .

`score` (_Float_): The strength of the connection between the work and this concept (higher is stronger). This number is produced by AWS Sagemaker, in the last layer of the that assigns concepts.

_List:_ of any authors for which is `true`.

_List:_ of any institutions found within an `authorship` for which is `true`.

_Integer:_ Number of distinct `country_codes` among the for this work.

_List:_ for each of the last ten years, binned by year. To put it another way: each year, you can see how many times this work was cited.

_String:_ The date this `Work` object was created in the OpenAlex dataset, expressed as an date string.

_String:_ Exactly the same as . It's useful for `Work`s to include a `display_name` property, since all the other entities have one.

_String:_ The DOI for the work. This is the for works.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on , and another DOI for the . However, this field always has just one DOI, the DOI for the published work.

_String:_ If a work's full text is searchable in OpenAlex ( is `true`), this tells you how we got the text. This will be one of:

`pdf`: We used to get the text from an open-access PDF.

`ngrams`: Full text search is enabled using .

_Float:_ The Field-weighted Citation Impact (FWCI), calculated for a work as the ratio of citations received / citations expected in the year of publications and three following years. Learn more in the reference article: .

_List:_ List of grant objects, which include the and the award ID, if available. Our grants data comes from Crossref, and is currently fairly limited.

_Boolean:_ Set to `true` if the work's full text is searchable in OpenAlex. This does not necessarily mean that the full text is available to you, dear reader; rather, it means that we have indexed the full text and can use it to help power . If you are trying to find the full text for yourself, try looking in .

We get access to the full text in one of two ways: either using an open-access PDF, or using . You can learn where a work's full text came from at .

The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of and . The attributes `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.

_String:_ The for this work.

`doi` (_String:_ The . Same as )

`mag` (_Integer:_ the ID)

`openalex` (_String:_ The . Same as )

`pmid` (_String:_ The )

`pmcid` (_String_: the )

_Integer:_ Number of distinct among the for this work.

_Boolean:_ True if we think this work is .

We identify works that have been retracted using the public , a public resource made possible by a partnership between Crossref and The Center for Scientific Integrity.

_List of objects:_ Short phrases identified based on works' Topics. For background on how Keywords are identified, see .

_String:_ The language of the work in . The language is automatically detected using the information we have about the work. We use the software library on the words in the work's abstract, or the title if we do not have the abstract. The source code for this procedure is Keep in mind that this method is not perfect, and that in some cases the language of the title or abstract could be different from the body of the work.

_List:_ A list of objects describing all unique places where this work lives.

_Integer:_ Number of for this work.

_List:_ List of tag objects. Only works found in have MeSH tags; for all other works, this is an empty list.

_Object:_ Information about the access status of this work, as an object.

_Object:_ A object with the primary location of this work.

The `primary_location` is where you can find the best (closest to the ) copy of this work. For a peer-reviewed journal article, this would be a full text published version, hosted by the publisher at the article's DOI URL.

The top ranked for this work. This is the same as the first item in .

_String:_ The day when this work was published, formatted as an date.

This date applies to the version found at . The other versions, found in , may have been published at different (earlier) dates.

This year applies to the version found at . The other versions, found in , may have been published in different (earlier) years.

_List:_ for works that this work cites. These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.

_List:_ for works related to this work. Related works are computed algorithmically; the algorithm finds recent papers with the most concepts in common with the current paper.

The United Nations' are a collection of goals at the heart of a global "shared blueprint for peace and prosperity for people and the planet." We use a machine learning model to tag works with their relevance to these goals based on our , an mBERT machine learning model developed by the . The `score` represents the model's predicted probability of the work's relevance for a particular goal.

The top ranked for this work. We provide up to 3 topics per work.

This is exactly the same as . We include both attributes with the same information because we want all entities to have a `display_name`, but there's a longstanding tradition of calling this the "title," so we figured you'll be expecting works to have it as a property.

You can see all of the different types along with their counts in the OpenAlex API here: .

Most works are type `article`. This includes what was formerly (and currently in ) labeled as `journal-article`, `proceedings-article`, and `posted-content`. We consider all of these to be `article` type works, and the distinctions between them to be more about where they are published or hosted:

Journal articles will have a of `journal`

Conference proceedings will have a of `conference`

Preprints or "posted content" will have a of `submittedVersion`

Other work types follow the Crossref "type" controlled vocabulary—see .

These are the work types that we used to use, before switching to our current system (see ).

You can see all possible values of Crossref's "type" controlled vocabulary via the Crossref api here: .

_String:_ The last time anything in this `Work` object changed, expressed as an date string (in UTC). This date is updated for _any change at all_, including increases in various counts.

_Boolean:_ `True` if any of this work's has `location.is_oa=true` and `location.source.type=repository`.

Use case: researchers want to track Green OA, using a definition of "any repository hosts this." OpenAlex's definition (as used in ) doesn't support this, because as soon as there's a publisher-hosted copy (bronze, hybrid, or gold), oa\_status is set to that publisher-hosted status.

So there's a lot of repository-hosted content that the `oa_status` can't tell you about. Our calls this "shadowed Green." This feature makes it possible to track shadowed Green.

There are . OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in. You can use the and fields to narrow your results further, accommodating any definition of OA you like.

: Published in a fully OA journal—one that is indexed by the or that we have determined to be OA—with no article processing charges (i.e., free for both readers and authors).

`**green**`: Toll-access on the publisher landing page, but there is a free copy in an .

`**hybrid**`: Free under an in a toll-access journal.

Although there are , in this context an OA URL is one where you can read the fulltext of this work without needing to pay money or log in. The "best" such URL is the one closest to the version of record.

📄

[single work](/api-entities/works/get-a-single-work)

[lists of works](/api-entities/works/get-lists-of-works)

[inverted index](https://en.wikipedia.org/wiki/Inverted_index)

[Like Microsoft Academic Graph](https://web.archive.org/web/20220721160540/https://docs.microsoft.com/en-us/academic-services/graph/resources-faq#what-format-are-paper-abstracts-published-in)

[`Authorship`](/api-entities/works/work-object/authorship-object)

[Limited to](/api-entities/authors/limitations)

[Authorship object](/api-entities/works/work-object/authorship-object)

[article processing charge](https://en.wikipedia.org/wiki/Article_processing_charge)

[DOAJ](https://doaj.org/)

[article processing charge](https://en.wikipedia.org/wiki/Article_processing_charge)

[OpenAPC](https://openapc.net/)

[`Location`](/api-entities/works/work-object/location-object)

[Field Weighted Citation Impact (FWCI)](https://help.openalex.org/hc/en-us/articles/24735753007895-Field-Weighted-Citation-Impact-FWCI)

[`Concept` objects](/api-entities/concepts/concept-object)

[machine learning model](https://github.com/ourresearch/openalex-concept-tagging)

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

[Grobid](https://grobid.readthedocs.io)

[N-grams obtained from the Internet Archive](/api-entities/works/get-n-grams)

[Field Weighted Citation Impact (FWCI)](https://help.openalex.org/hc/en-us/articles/24735753007895-Field-Weighted-Citation-Impact-FWCI)

[`Funder`](/api-entities/funders)

[Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/)

[Pubmed Identifier](https://en.wikipedia.org/wiki/PubMed#PubMed_identifier)

[Pubmed Central identifier](https://www.ncbi.nlm.nih.gov/pmc/about/public-access-info/)

[paratext](https://en.wikipedia.org/wiki/Paratext)

[Retraction Watch database](https://doi.org/10.13003/c23rw1d9)

[the Keywords page at OpenAlex help pages](https://help.openalex.org/how-it-works/keywords)

[ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

[langdetect](https://pypi.org/project/langdetect/)

[here.](https://github.com/ourresearch/openalex-guts/blob/54471c6c8e3c59662c4a4d9c37320af7b1667b2b/models/work.py#LL1102C1-L1102C1)

[`Location`](/api-entities/works/work-object/location-object)

[MeSH](https://www.nlm.nih.gov/mesh/meshhome.html)

[PubMed](https://pubmed.ncbi.nlm.nih.gov/)

[`Location`](/api-entities/works/work-object/location-object)

[version of record](https://en.wikipedia.org/wiki/Version_of_record)

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

[17 Sustainable Development Goals](https://sdgs.un.org/goals)

[OpenAlex SDG Classifier](https://github.com/ourresearch/openalex-sdg-classifier)

[Aurora Universities Network](https://aurora-universities.eu/sdg-research/)

[`Topics`](/api-entities/topics)

[`https://api.openalex.org/works?group_by=type`](https://api.openalex.org/works?group_by=type)

[`https://api.crossref.org/types`](https://api.crossref.org/types)

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

[State of OA paper](https://peerj.com/articles/4375/)

[`**diamond**`](https://en.wikipedia.org/wiki/Diamond_open_access)

[DOAJ](https://doaj.org/)

[OA repository](https://en.wikipedia.org/wiki/Open-access_repository)

[open license](https://support.unpaywall.org/support/solutions/articles/44002063718-what-is-an-oa-license-)

[many ways to define OA](https://peerj.com/articles/4375/#literature-review)

[`primary_location`](/api-entities/works/work-object#primary_location)

[`locations`](/api-entities/works/work-object#locations)

[`apc_paid`](/api-entities/works/work-object#apc_paid)

[`apc_paid`](/api-entities/works/work-object#apc_paid)

[Diamond open access](https://en.wikipedia.org/wiki/Diamond_open_access)

[`open_access.oa_status`](/api-entities/works/work-object#oa_status)

[`apc_list`](/api-entities/works/work-object#apc_list)

[`Works.cited_by_count`](/api-entities/works/work-object#cited_by_count)

[`Work.title`](/api-entities/works/work-object#title)

[bioRxiv](https://www.biorxiv.org/)

[published version](/api-entities/works/work-object#version)

[`has_fulltext`](/api-entities/works/work-object#has_fulltext)

[searches](/api-entities/works/search-works)

[`open_access.oa_url`](/api-entities/works/work-object#open_access)

[N-grams obtained from the Internet Archive](/api-entities/works/get-n-grams)

[`fulltext_origin`](/api-entities/works/work-object#fulltext_origin)

[`primary_location`](/api-entities/works/work-object#primary_location)

[`locations`](/api-entities/works/work-object#locations)

[DOI](https://en.wikipedia.org/wiki/Digital_object_identifier)

[`Work.doi`](/api-entities/works/work-object#title)

[`locations`](/api-entities/works/work-object#locations)

[`OpenAccess`](/api-entities/works/work-object#the-openaccess-object)

[`Topic`](/api-entities/topics)

[`Work.topics`](/api-entities/works/work-object#topics)

[`Work.url`](/api-entities/works/work-object#url)

[`Work.locations`](/api-entities/works/work-object#locations)

[`Work.url`](/api-entities/works/work-object#url)

[`Work.locations`](/api-entities/works/work-object#locations)

[`Work.display_name`](/api-entities/works/work-object#display_name)

[`type_crossref`](/api-entities/works/work-object#type_crossref)

[`type_crossref`](/api-entities/works/work-object#type_crossref)

[`type`](/api-entities/works/work-object#type)

[`locations`](/api-entities/works/work-object#locations)

[`oa_status`](/api-entities/works/work-object#oa_status)

[many ways to define OA](https://peerj.com/articles/4375/#literature-review)

[`locations`](/api-entities/works/work-object#locations)

[`oa_status`](/api-entities/works/work-object#oa_status)

[`institutions`](/api-entities/institutions)

[`cited_by_count`](/api-entities/works/work-object#cited_by_count)

[`Work.id`](/api-entities/works/work-object#id)

[Canonical External ID](/how-to-use-the-api/get-single-entities#canonical-external-ids)

[OpenAlex ID](/how-to-use-the-api/get-single-entities#the-openalex-id)

[OpenAlex ID](/how-to-use-the-api/get-single-entities#the-openalex-id)

[OpenAlex IDs](/how-to-use-the-api/get-single-entities#the-openalex-id)

[OpenAlex IDs](/how-to-use-the-api/get-single-entities#the-openalex-id)

[`primary_location.source.type`](/api-entities/works/work-object/location-object#source)

[`primary_location.source.type`](/api-entities/works/work-object/location-object#source)

[`primary_location.version`](/api-entities/works/work-object/location-object#version)

[OpenAlex IDs](/how-to-use-the-api/get-single-entities#the-openalex-id)

[authorships.is\_corresponding](/api-entities/works/work-object/authorship-object#is_corresponding)

[OpenAlex IDs](/how-to-use-the-api/get-single-entities#the-openalex-id)

[authorships.is\_corresponding](/api-entities/works/work-object/authorship-object#is_corresponding)

[`authorships`](/api-entities/works/work-object/authorship-object#institutions)

[`authorships`](/api-entities/works/work-object/authorship-object#institutions)

![](https://334408415-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpHVuV3Ib5KXeBKft4Kcl%2Fuploads%2Fgit-blob-5176d795ac3e51302772756edecd834dcbd14c48%2FOpenAlex%20works%20with%20abstracts%20by%20year%20(percent)%20(1).svg?alt=media)

[`cites`](/api-entities/works/filter-works#cites)

---

# Get lists of works | OpenAlex technical documentation

[PreviousGet a single work](/api-entities/works/get-a-single-work)
[NextFilter works](/api-entities/works/filter-works)

Last updated 11 months ago

You can get lists of works:

*   Get _all_ of the works in OpenAlex
    

Which returns a response like this:

Copy

    {
        "meta": {
            "count": 245684392,
            "db_response_time_ms": 929,
            "page": 1,
            "per_page": 25
        },
        "results": [\
            {\
                "id": "https://openalex.org/W1775749144",\
                "doi": "https://doi.org/10.1016/s0021-9258(19)52451-6",\
                "title": "PROTEIN MEASUREMENT WITH THE FOLIN PHENOL REAGENT",\
                // more fields (removed to save space)\
            },\
            {\
                "id": "https://openalex.org/W2100837269",\
                "doi": "https://doi.org/10.1038/227680a0",\
                "title": "Cleavage of Structural Proteins during the Assembly of the Head of Bacteriophage T4",\
                // more fields (removed to save space)\
            },\
            // more results (removed to save space)\
        ],
        "group_by": []
    }

[](#page-and-sort-works)

Page and sort works


-------------------------------------------------

[](#sample-works)

Sample works


-----------------------------------

[](#select-fields)

Select fields


-------------------------------------

You can works and change the default number of results returned with the `page` and `per-page` parameters:

Get a second page of results with 50 results per page

You can with the `sort` parameter:

Sort works by publication year

Continue on to learn how you can and lists of works.

You can use `sample` to get a random batch of works. Read more about sampling and how to add a `seed` value .

Get 20 random works

You can use `select` to limit the fields that are returned in a list of works. More details are .

Display only the `id` and `display_name` within works results

📄

[`https://api.openalex.org/works`](https://api.openalex.org/works)

[page through](/how-to-use-the-api/get-lists-of-entities/paging)

[`https://api.openalex.org/works?per-page=50\&page=2`](https://api.openalex.org/works?per-page=50&page=2)

[sort results](/how-to-use-the-api/get-lists-of-entities/sort-entity-lists)

[`https://api.openalex.org/works?sort=publication\_year`](https://api.openalex.org/works?sort=publication_year)

[filter](/api-entities/works/filter-works)

[search](/api-entities/works/search-works)

[here](/how-to-use-the-api/get-lists-of-entities/sample-entity-lists)

[`https://api.openalex.org/works?sample=20`](https://api.openalex.org/works?sample=20)

[here](/how-to-use-the-api/get-lists-of-entities/select-fields)

[`https://api.openalex.org/works?select=id,display\_name`](https://api.openalex.org/works?select=id,display_name)

---

# Authors | OpenAlex technical documentation

[PreviousGet N-grams](/api-entities/works/get-n-grams)
[NextAuthor object](/api-entities/authors/author-object)

Last updated 3 months ago

Authors are people who create works. You can get an author from the API like this:

*   Get a list of OpenAlex authors:
    

The for authors is ORCID; only a small percentage of authors have one, but the percentage is higher for more recent works.

Our information about authors comes from MAG, Crossref, PubMed, ORCID, and publisher websites, among other sources. To learn more about how we combine this information to get OpenAlex Authors, see .

Authors are linked to works via the property.

[](#whats-next)

What's next


--------------------------------

Learn more about what you can with authors:

👩

[`https://api.openalex.org/authors`](https://api.openalex.org/authors)

[Author Disambiguation](https://help.openalex.org/hc/en-us/articles/24347048891543-Author-disambiguation)

[The Author object](/api-entities/authors/author-object)

[Get a single author](/api-entities/authors/get-a-single-author)

[Get lists of authors](/api-entities/authors/get-lists-of-authors)

[Filter authors](/api-entities/authors/filter-authors)

[Search authors](/api-entities/authors/search-authors)

[Group authors](/api-entities/authors/group-authors)

[Canonical External ID](/how-to-use-the-api/get-single-entities#canonical-external-ids)

[`works.authorships`](/api-entities/works/work-object#authorships)

---

# Get lists of authors | OpenAlex technical documentation

[PreviousGet a single author](/api-entities/authors/get-a-single-author)
[NextFilter authors](/api-entities/authors/filter-authors)

Last updated 1 year ago

You can get lists of authors:

*   Get _all_ authors in OpenAlex
    

Which returns a response like this:

Copy

    {
        "meta": {
            "count": 93011659,
            "db_response_time_ms": 150,
            "page": 1,
            "per_page": 25
        },
        "results": [\
            {\
                "id": "https://openalex.org/A5053780153",\
                // more fields (removed to save space)\
            },\
            {\
                "id": "https://openalex.org/A5032245741",\
                // more fields (removed to save space)\
            },\
            // more results (removed to save space)\
        ],
        "group_by": []
    }

[](#page-and-sort-authors)

Page and sort authors


-----------------------------------------------------

[](#sample-authors)

Sample authors


---------------------------------------

[](#select-fields)

Select fields


-------------------------------------

By default we return 25 results per page. You can change this default and through works with the `per-page` and `page` parameters:

Get the second page of authors results, with 50 results returned per page

You also can with the `sort` parameter:

Sort authors by cited by count, descending

Continue on to learn how you can and lists of authors.

You can use `sample` to get a random batch of authors. Read more about sampling and how to add a `seed` value .

Get 25 random authors

You can use `select` to limit the fields that are returned in a list of authors. More details are .

Display only the `id` and `display_name` and `orcid` within authors results

👩

[`https://api.openalex.org/authors`](https://api.openalex.org/authors)

[page](/how-to-use-the-api/get-lists-of-entities/paging)

[`https://api.openalex.org/authors?per-page=50\&page=2`](https://api.openalex.org/authors?per-page=50&page=2)

[sort results](/how-to-use-the-api/get-lists-of-entities/sort-entity-lists)

[`https://api.openalex.org/authors?sort=cited\_by\_count:desc`](https://api.openalex.org/authors?sort=cited_by_count:desc)

[filter](/api-entities/authors/filter-authors)

[search](/api-entities/authors/search-authors)

[here](/how-to-use-the-api/get-lists-of-entities/sample-entity-lists)

[`https://api.openalex.org/authors?sample=25`](https://api.openalex.org/authors?sample=25)

[here](/how-to-use-the-api/get-lists-of-entities/select-fields)

[`https://api.openalex.org/authors?select=id,display\_name,orcid`](https://api.openalex.org/authors?select=id,display_name,orcid)

---

# Get a single author | OpenAlex technical documentation

[PreviousAuthor object](/api-entities/authors/author-object)
[NextGet lists of authors](/api-entities/authors/get-lists-of-authors)

Last updated 1 year ago

It's easy to get an author from from the API with: `/authors/<entity_id>`. Here's an example:

*   Get the author with the `A5023888391`:
    

That will return an object, describing everything OpenAlex knows about the author with that ID:

Copy

    {
        "id": "https://openalex.org/A5023888391",
        "orcid": "https://orcid.org/0000-0001-6187-6610",
        "display_name": "Jason Priem",
        "display_name_alternatives": [],
        "works_count": 53,
        // other fields removed for brevity
    }

You can make up to 50 of these queries at once by .

Authors are also available via an alias: `/people`

[](#external-ids)

External IDs


-----------------------------------

You can look up authors using external IDs such as an ORCID:

*   Get the author with this ORCID: `https://orcid.org/0000-0002-1298-3089`:
    

You can use the full ID or a shorter Uniform Resource Name (URN) format like so:

Available external IDs for authors are:

External ID

URN

ORCID

`orcid`

Scopus

`scopus`

Twitter

`twitter`

Wikipedia

`wikipedia`

[](#select-fields)

Select fields


-------------------------------------

You can use `select` to limit the fields that are returned in an author object. More details are .

Display only the `id` and `display_name` and orcid for an author object

👩

[here](/how-to-use-the-api/get-lists-of-entities/select-fields)

[`https://api.openalex.org/authors/A5023888391?select=id,display_name,orcid`](https://api.openalex.org/authors/A5023888391?select=id,display_name,orcid)

[`https://api.openalex.org/authors/A5023888391`](https://api.openalex.org/authors/A5023888391)

[`Author`](/api-entities/authors/author-object)

[`https://api.openalex.org/authors/https://orcid.org/0000-0002-1298-3089`](https://api.openalex.org/authors/https://orcid.org/0000-0002-1298-3089)

[`https://api.openalex.org/authors/orcid:0000-0002-1298-3089`](https://api.openalex.org/authors/orcid:0000-0002-1298-3089)

[OpenAlex ID](/how-to-use-the-api/get-single-entities#the-openalex-id)

[requesting a list of entities and filtering on IDs using OR syntax](/how-to-use-the-api/get-lists-of-entities/filter-entity-lists#addition-or)

---

# Sources | OpenAlex technical documentation

[PreviousAuthor disambiguation](/api-entities/authors/author-disambiguation)
[NextSource object](/api-entities/sources/source-object)

Last updated 1 year ago

Sources are where works are hosted. OpenAlex indexes about 249,000 sources. There are several types, including journals, conferences, preprint repositories, and institutional repositories.

*   Get a list of OpenAlex sources:
    

The for sources is ISSN-L, which is a special "main" ISSN assigned to every sources (sources tend to have multiple ISSNs). About 90% of sources in OpenAlex have an ISSN-L or ISSN.

Our information about sources comes from Crossref, the ISSN Network, and MAG. These datasets are joined automatically where possible, but there’s also a lot of manual combining involved. We do not curate journals, so any journal that is available in the data sources should make its way into OpenAlex.

Several sources may host the same work. OpenAlex reports both the primary host source (generally wherever the lives), and alternate host sources (like preprint repositories).

Sources are linked to works via the and properties.

Check out the , a Jupyter notebook showing how to use Python and the API to learn about all of the sources in a country.

[](#whats-next)

What's next


--------------------------------

Learn more about what you can do with sources:

📚

[`https://api.openalex.org/sources`](https://api.openalex.org/sources)

[version of record](https://en.wikipedia.org/wiki/Version_of_record)

[Japanese Sources tutorial](https://github.com/ourresearch/openalex-api-tutorials/blob/main/notebooks/institutions/japan_sources.ipynb)

[The Source object](/api-entities/sources/source-object)

[Get a single source](/api-entities/sources/get-a-single-source)

[Get lists of sources](/api-entities/sources/get-lists-of-sources)

[Filter sources](/api-entities/sources/filter-sources)

[Search sources](/api-entities/sources/search-sources)

[Group sources](/api-entities/sources/group-sources)

[Canonical External ID](/how-to-use-the-api/get-single-entities#canonical-external-ids)

[`works.primary_location`](/api-entities/works/work-object#primary_location)

[`works.locations`](/api-entities/works/work-object#locations)

---

# Search works | OpenAlex technical documentation

[PreviousFilter works](/api-entities/works/filter-works)
[NextGroup works](/api-entities/works/group-works)

Last updated 10 months ago

The best way to search for works is to use the `search` query parameter, which searches across , , and . Example:

*   Get works with search term "dna" in the title, abstract, or fulltext:
    

Fulltext search is available for a subset of works, see for more details.

You can read more about search . It will show you how relevance score is calculated, how words are stemmed to improve search results, and how to do complex boolean searches.

[](#search-a-specific-field)

Search a specific field


---------------------------------------------------------

You can use search as a , allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

*   Get works with "cubist" in the title:
    

The following fields can be searched within works:

Search filter

Field that is searched

You can also use the filter `default.search`, which works the same as using the .

These searches make use of stemming and stop-word removal. You can disable this for searches on titles and abstracts. Learn how to do this .

### 

[](#why-cant-i-search-by-name-of-related-entity-author-name-institution-name-etc)

Why can't I search by name of related entity (author name, institution name, etc.)?

Rather than searching for the _names_ of entities related to works—such as authors, institutions, and sources—you need to search by a more unique identifier for that entity, like the OpenAlex ID. This means that there is a 2 step process:

Why can't you do this in just one step? Well, if you use the search term, "NYU," you might end up missing the ones that use the full name "New York University," rather than the initials. Sure, you could try to think of all possible variants and search for all of them, but you might miss some, and you risk putting in search terms that let in works that you're not interested in. Figuring out which works are actually associated with the "NYU" you're interested shouldn't be your responsibility—that's our job! We've done that work for you, so all the relevant works should be associated with one unique ID.

[](#autocomplete-works)

Autocomplete works


-----------------------------------------------

You can autocomplete works to create a very fast type-ahead style search function:

This returns a list of works titles with the author of each work set as the hint:

Copy

    { 
      "results": [\
        {\
          "id": "https://openalex.org/W2125098916",\
          "display_name": "Crouching tigers, hidden prey: Sumatran tiger and prey populations in a tropical forest landscape",\
          "hint": "Timothy G. O'Brien, Margaret F. Kinnaird, Hariyo T. Wibisono",\
          "cited_by_count": 620,\
          "works_count": null,\
          "entity_type": "work",\
          "external_id": "https://doi.org/10.1017/s1367943003003172"\
        },\
        ...\
      ]
    }

fulltext via

and

Find the ID of the related entity. For example, if you're interested in works associated with NYU, you could search the `/institutions` endpoint for that name: . Looking at the first result, you'll see that the OpenAlex ID for NYU is `I57206974`.

Use a with the `/works` endpoint to get all of the works: .

Autocomplete works with "tigers" in the title:

Read more about .

📄

[`https://api.openalex.org/institutions?search=nyu`](https://api.openalex.org/institutions?search=nyu)

[filter](/api-entities/works/filter-works)

[`https://api.openalex.org/works?filter=institutions.id:I57206974`](https://api.openalex.org/works?filter=institutions.id:I57206974)

[`https://api.openalex.org/autocomplete/works?q=tigers`](https://api.openalex.org/autocomplete/works?q=tigers)

[autocomplete](/how-to-use-the-api/get-lists-of-entities/autocomplete-entities)

[`n-grams`](/api-entities/works/get-n-grams)

[`https://api.openalex.org/works?search=dna`](https://api.openalex.org/works?search=dna)

[here](/how-to-use-the-api/get-lists-of-entities/search-entities)

[filter](/how-to-use-the-api/get-lists-of-entities/filter-entity-lists)

[`https://api.openalex.org/works?filter=title.search:cubist`](https://api.openalex.org/works?filter=title.search:cubist)

[`search` parameter](/api-entities/works/search-works#search-works)

[`authorships.raw_affiliation_strings`](/api-entities/works/work-object/authorship-object#raw_affiliation_strings)

[here](/how-to-use-the-api/get-lists-of-entities/search-entities#search-without-stemming)

[`abstract.search`](/api-entities/works/filter-works#abstract.search)

[`display_name.search`](/api-entities/works/filter-works#display_name.search-alias-title.search)

[`fulltext.search`](/api-entities/works/filter-works#fulltext.search)

[`raw_affiliation_strings.search`](/api-entities/works/filter-works#raw_affiliation_stringssearch)

[`title.search`](/api-entities/works/filter-works#display_name.search-alias-title.search)

[`title_and_abstract.search`](/api-entities/works/filter-works#title_and_abstractsearch)

[titles](/api-entities/works/work-object#title)

[abstracts](/api-entities/works/work-object#abstract_inverted_index)

[fulltext](/api-entities/works/work-object#has_fulltext)

[`Work.has_fulltext`](/api-entities/works/work-object#has_fulltext)

[`abstract_inverted_index`](/api-entities/works/work-object#abstract_inverted_index)

[`display_name`](/api-entities/works/work-object#display_name)

[`display_name`](/api-entities/works/work-object#display_name)

[`display_name`](/api-entities/works/work-object#display_name)

[`abstract_inverted_index`](/api-entities/works/work-object#abstract_inverted_index)

---

# Get a single source | OpenAlex technical documentation

[PreviousSource object](/api-entities/sources/source-object)
[NextGet lists of sources](/api-entities/sources/get-lists-of-sources)

Last updated 1 year ago

It's easy to get a source from from the API with: `/sources/<entity_id>`. Here's an example:

*   Get the source with the `S137773608`:
    

That will return an object, describing everything OpenAlex knows about the source with that ID:

Copy

    {
        "id": "https://openalex.org/S137773608",
        "issn_l": "0028-0836",
        "issn": [\
            "1476-4687",\
            "0028-0836"\
        ],
        "display_name": "Nature",
        // other fields removed for brevity
    }

You can make up to 50 of these queries at once by .

Sources are also available via an alias: `/journals`

### 

[](#external-ids)

External IDs

You can look up journals using external IDs such as an ISSN:

*   Get the source with ISSN: `2041-1723`:
    

Available external IDs for sources are:

External ID

URN

ISSN

`issn`

Fatcat

`fatcat`

Microsoft Academic Graph (MAG)

`mag`

Wikidata

`wikidata`

### 

[](#select-fields)

Select fields

You can use `select` to limit the fields that are returned in a source object. More details are .

Display only the `id` and `display_name` for a source object

📚

[here](/how-to-use-the-api/get-lists-of-entities/select-fields)

[https://api.openalex.org/sources/S137773608?select=id,display\_name](https://api.openalex.org/sources/S137773608?select=id,display_name)

[https://api.openalex.org/sources/S137773608](https://api.openalex.org/sources/S137773608)

[`Source`](/api-entities/sources/source-object)

[`https://api.openalex.org/sources/issn:2041-1723`](https://api.openalex.org/sources/issn:2041-1723)

[OpenAlex ID](/how-to-use-the-api/get-single-entities#the-openalex-id)

[requesting a list of entities and filtering on IDs using OR syntax](/how-to-use-the-api/get-lists-of-entities/filter-entity-lists#addition-or)

---

# Limitations | OpenAlex technical documentation

[PreviousGroup authors](/api-entities/authors/group-authors)
[NextAuthor disambiguation](/api-entities/authors/author-disambiguation)

Last updated 1 year ago

[](#works-with-more-than-100-authors-are-truncated)

Works with more than 100 authors are truncated


-------------------------------------------------------------------------------------------------------

When retrieving a list of works in the API, the `authorships` list within each work will be cut off at 100 authorships objects in order to keep things running well. When this happens the boolean value `is_authors_truncated` will be available and set to `true`. This affects a small portion of OpenAlex, as there are around 35,000 works with more than 100 authors. This limitation does not apply to the .

*   Example list of works with truncated authors
    

To see the full list of authors, go to the individual record for the work, which is never truncated.

*   Work with all 249 authors available
    

This affects filtering as well. So if you filter works using an author ID or ROR, you will not receive works where that author is listed further than 100 places down on the list of authors. We plan to change this in the future, so that filtering works as expected.

👩

[data snapshot](/download-all-data/openalex-snapshot)

[`https://api.openalex.org/works?filter=authors\_count:>100`](https://api.openalex.org/works?filter=authors_count:%3E100)

[`https://api.openalex.org/works/W2168909179`](https://api.openalex.org/works/W2168909179)

---

# Search authors | OpenAlex technical documentation

[PreviousFilter authors](/api-entities/authors/filter-authors)
[NextGroup authors](/api-entities/authors/group-authors)

Last updated 1 year ago

The best way to search for authors is to use the `search` query parameter, which searches the and the fields. Example:

*   Get works with the author name "Carl Sagan":
    

Searching without a middle initial returns names with _and_ without middle initials. So a search for "John Smith" will also return "John W. Smith".

Names with diacritics are flexible as well. So a search for David Tarrago can return David Tarragó, and a search for David Tarragó can return David Tarrago. When searching with a diacritic, diacritic versions of the names are prioritized in order to honor the original form of the author's name. Read more about our handling of diacritics .

You can read more in the in the API Guide. It will show you how relevance score is calculated, how words are stemmed to improve search results, and how to do complex boolean searches.

[](#search-a-specific-field)

Search a specific field


---------------------------------------------------------

You can also use search as a , by appending `.search` to the end of the property you are filtering for:

*   Get authors with the name "john smith" in the display\_name:
    

When searching for authors, there is no difference when using the `search` parameter or the filter `display_name.search`, since display\_name is the only field searched when finding authors.

Search filter

Field that is searched

You can also use the filter `default.search`, which works the same as using the .

[](#autocomplete-authors)

Autocomplete authors


---------------------------------------------------

You can autocomplete authors to create a very fast type-ahead style search function:

*   Autocomplete authors with "ronald sw" in the display name:
    

This returns a list of authors with their last known affiliated institution as the hint:

Copy

    { 
      "results": [\
          {\
              "id": "https://openalex.org/A5007433649",\
              "display_name": "Ronald Swanstrom",\
              "hint": "University of North Carolina at Chapel Hill, USA",\
              "cited_by_count": 19142,\
              "works_count": 339,\
              "entity_type": "author",\
              "external_id": "https://orcid.org/0000-0001-7777-0773",\
              "filter_key": "authorships.author.id"\
           },\
           ...\
      ]
    }

Read more about .

👩

[autocomplete](/how-to-use-the-api/get-lists-of-entities/autocomplete-entities)

[`https://api.openalex.org/authors?search=carl sagan`](https://api.openalex.org/authors?search=carl%20sagan)

[here](https://blog.ourresearch.org/author-search-in-openalex-improved-handling-of-diacritics-within-names/)

[search page](/how-to-use-the-api/get-lists-of-entities/search-entities)

[filter](/how-to-use-the-api/get-lists-of-entities/filter-entity-lists)

[`https://api.openalex.org/authors?filter=display\_name.search:john smith`](https://api.openalex.org/authors?filter=display_name.search:john%20smith)

[`https://api.openalex.org/autocomplete/authors?q=ronald sw`](https://api.openalex.org/autocomplete/authors?q=ronald%20sw)

[`search` parameter](/api-entities/authors/search-authors#search-authors)

[`display_name`](/api-entities/authors/author-object#display_name)

[`display_name_alternatives`](/api-entities/authors/author-object#display_name_alternatives)

[`display_name`](/api-entities/authors/author-object#display_name)

[`display_name.search`](/api-entities/authors/filter-authors#display_name.search)

---

# Author disambiguation | OpenAlex technical documentation

[PreviousLimitations](/api-entities/authors/limitations)
[NextSources](/api-entities/sources)

Last updated 3 months ago

We have created a page in our help docs to give you all the information you need about our author disambiguation including information about author IDs, how we disambiguate authors, and how you can curate your author profile. Go to to find out what you need to know!

👩

[this page](https://help.openalex.org/hc/en-us/articles/24347048891543-Author-disambiguation)

---

