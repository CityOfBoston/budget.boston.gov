# budget.boston.gov

## Overview
The City of Boston's [Office of Budget Management](https://www.boston.gov/budget) (OBM) engaged the Department of Innovation and Technology’s (DoIT) [Digital Team](https://www.boston.gov/digital) in fall 2016 to create a website that displayed the City of Boston’s budget books online. 

The books come in a three-volume set totaling well over 800 pages.
* Volume 1 contains the budget narrative describing the City’s investments and explaining why it made those investments. 
* Volumes 2 and 3 are much more data heavy and are divided by City Cabinet. Each Cabinet section has information down to the program level (Cabinet >> Department >> Program) on actual and projected budgets, as well as personnel and capital plan data. 

This web application uses JSON files that were automatically exported from a content management system for Volumes 2 and 3 and displays them online, often alongside Volume 1 content. The site also displays markdown files created from remaining Volume 1 content. 

Parts of the site:
* Executive Summary - the Executive Summary of Volume 1 of the budget book. Some sections are compressed to be “featured analysis cards”, which link off to pages offering analysis on a specific topic.
* Featured Analysis - a grouping of all featured analysis cards, ordered by section.
* Capital Projects - a mostly-automated display of information from the Capital Planning chapter (Volume 1) and capital projects (Volumes 2 and 3). 
* Operating Budget - a mostly-automated display of information from the Summary Budget chapter (Volume 1) and operating budget data (Volumes 2 and 3).
* Sidebar - links to pages that can help people understand the budget or offer people insight into the City’s financial management.

The site is hosted on Heroku and assets are built using Gulp and Jekyll. It uses JSON, markdown, JavaScript, and HTML.

## Getting started (technical)

This Jekyll implementation creates static archives of the City of Boston's fiscal budgets. It uses Gulp to build everything, so that we can more easily incorporate things like BrowserSync, Stylus and any necessary plugins.

To get up and running, download (or fork) this repo. Then in your project run:

``` sh
bundle install
npm install
```

Now use gulp to build the site.
REQUIRED: Set a "source" in order to build the project using data from a specific fiscal year, for example:

```
gulp --source fy18_recommended
```

Create an environment specific configuration file in order to serve the site from a URL that differs from your production domain. For example, set the URL for a staging site in _config_stg.yml and pass the "staging" flag like so:

```
gulp --staging --source fy18_recommended
```

For local development pass the "local" flag:

```
gulp --local --source fy18_recommended
```

At this point, you should be able to visit your site at `http://127.0.0.1:4000`.

---

In order to prevent breaking relative links from the boston.gov wrapper and serve the appropriate assets (like images, css, and js) from boston.gov, we need to preserve its base_url (found in the `<head` as `<base href="https://www.boston.gov">`). We also need to be able to use relative links and assets specific to the budget app when runing this site locally and in production. We accomplish this with the `url` directive in `_config.yml`. We also needed to create a config file with a url specifically for local dev. If you've already built the site with gulp, you can run it locally using that config file:
```
bundle exec jekyll serve --config _config_dev.yml
```
This will make the site available at http://127.0.0.1:4000/

---

To create custom pages, you can simply add reusable components to markdown files. 
> IMPORTANT: Before adding any components you must add the "components:" key.

Here's a short list of some common components you can use:

**Breadcrumbs**
![Screenshot of breadcrumb page navigation](/readme_images/breadcrumbs.png "Breadcrumbs Screenshot")

> Set local key to true in order to use app domain (e.g. budget.boston.gov) instead of wrapper base domain (e.g. boston.gov)

```
- breadcrumbs:
  - title: Home
    url: "/"
  - title: Budget
    url: "/budget"
  - title: Operating Budget
    url: "/operating-budget"
    local: true
  - current: Cabinets
  - published: 3/28/17
```

---

**Intro**
![Screenshot of page introductory section](/readme_images/intro.png "Intro Screenshot")

> Set sidebar_menu to false in order to have full spanning title, short description, and description sections

```
- intro:
  - title: Executive Summary
    short_desc: >
      <div>"This budget is a manifestation of my vision for a
      Thriving, Healthy, and Innovative Boston."</div>
      <div>- Martin J. Walsh, Mayor</div>
    description: >
      Mayor Walsh presented a balanced budget that maintains 
      high levels of support in critical areas such as education 
      and public safety, makes limited strategic investments,
      continues the City's commitment to addressing its long-term
      liabilities, and builds on the Administration's record of 
      strong fiscal management. This is made possible by the 
      Administration's achievement of efficiencies and savings. 
      The City's data-driven managerial approach was recently 
      validated by the affirmation of Boston's triple A bond rating.
    sidebar_menu: true
```

---

**Text Block**
![Screenshot of a block of text component](/readme_images/text_block.png "Text Block Screenshot")

> Omit the right_image key to have the text span the full screen

```
- text_block:
  - title: Introduction
    body: >
      At the time Mayor Walsh took office, the City of Boston had successfully 
      weathered the storms of previous recessions. However, several major revenue
      sources never fully recovered, cost pressures continued to grow, and deferred
      investments persisted across City government. In its first two years, the 
      administration has systematically engaged in independent operational reviews
      and other planning efforts aimed at making government more efficient in order 
      to address areas needing renewed attention.
    right_image: http://tomakeawebsite.net/wp-content/uploads/2015/03/Google-charts-plugin.jpg
```

---

**Spanning Image**
![Screenshot of an image that spans the full screen](/readme_images/spanning_image.png "Spanning Image Screenshot")
```
spanning_image:
  - title: Lorem ipsum title
    desc: This is the description for the spanning image
    link:
      - text: Click Here
        url: https://google.com
    src: https://www.boston.gov/sites/default/files/styles/resp_wide_2000x800custom_boston_wide_1x/public/winter_swimming_10.jpg?itok=W91jOE5G&timestamp=1452037695
    alt: Placeholder alt text
    title: Placeholder image title
```

---

**Grid**
![Screenshot of a grid of items](/readme_images/grid.png "Grid Screenshot")

```
- grid:
  - grid_title: Revenue
  - title: Revenue overview
    body: >
      Get a broad understanding of where Boston's revenue comes from.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok=jMsIfnJ6
    link: 
      path: https://google.com
      external: true
  - title: Property tax
    body: >
      Property taxes provide more than two-thirds of the City's revenue. See the details of this important revenue source.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/backbay5.jpg?itok=sA4Mz_05
    link: /featured-analysis/property-tax/
  - title: State aid
    body: >
      State aid to Boston never recovered after the Great Recession. Learn about the impacts.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/bayvillage3.jpg?itok=iDf79UIP
    link: /featured-analysis/state-aid/
```

---

**Table**
![Screenshot of a simple table component](/readme_images/table.png "Table Screenshot")

```
- table:
  - title: Budget summary
    right_text: 
      name: To some page
      link: /example
    columns:
      - "Category": Total revenues
        "FY15 Actual": 2,780.42
        "FY16 Actual": 2,883.01
        "FY17 Budget": 2,996.09
        "FY18 Budget": 3,139.79
      - "Category": Total expenditures
        "FY15 Actual": 2,773.06
        "FY16 Actual": 2,881.09
        "FY17 Budget": 2,996.09
        "FY18 Budget": 3,139.79
      - "Category": 
          name: Test Link
          link: /example
        "FY15 Actual": 
          value: 2773
          filter: money
        "FY16 Actual": 
          value: 288109
          filter: delimiter
        "FY17 Budget": 
          value: 90
          filter: percent
        "FY18 Budget": 3,139.79
      - "Category": Surplus (Deficit)
        "total": true
        "FY15 Actual": 7.36
        "FY16 Actual": 1.92
        "FY17 Budget": 0.00
        "FY18 Budget": 0.00
```

---

**JS Table**
![Screenshot of a table that pulls data from a JSON source](/readme_images/js_table.png "JS Table Screenshot")

```
- js_table:
  - title: NERD
    json_source_url: "https://spreadsheets.google.com/feeds/list/1mfGnwQDsx5Am-_VDvcYiRUzuKsUjlhkx4hVjUOjl2Rc/od6/public/values?alt=json"
    columns:
      - column_name: Session Name
        json_key: gsx$title
      - column_name: Presenter
        json_key: gsx$presenter
      - column_name: Description
        json_key: gsx$description
      - column_name: Day
        json_key: gsx$day
      - column_name: Time
        json_key: gsx$time
  - title: Remote JSON
    json_source_url: "http://mysafeinfo.com/api/data?list=presidents&format=json"
    columns:
      - column_name: Name
        json_key: nm
      - column_name: Party
        json_key: pp
      - column_name: Term
        json_key: tm
  - title: Test
    json_source_url: "https://spreadsheets.google.com/feeds/list/17BxE2iSmejr7iJKoudYjqIe52c4z3bjqsjb2boDh8yw/od6/public/values?alt=json"
    columns:
      - column_name: Test HEY
        json_key: gsx$test
      - column_name: THINGY
        json_key: gsx$thing
      - column_name: Other Thing!
        json_key: gsx$otherthing
```

---

**2 Column Text Block**
![Screenshot of two columns of text](/readme_images/text_col_2.png "Text Col 2")

```
- text_col_2:
  - col: >
      <p>First Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
      Sed eleifend orci pretium magna tempus vehicula. </p>
      <ol>
      <li>Donec sodales massa vel leo porttitor</li>
      <li>condimentum. Ut condimentum commodo quam.</li>
      <li>Phasellus sed metus eu velit pellentesque</li>
      </ol>
      <p>Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
      Sed eleifend orci pretium magna tempus vehicula.</p>
      <p>Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
      Sed eleifend orci pretium magna tempus vehicula.</p>
  - col:
    - blurb: >
        Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
        Sed eleifend orci pretium magna tempus vehicula.
    - img: /img/mayor.jpg
    - blurb: >
        <blockquote>Donec sodales massa vel leo porttitor. Ut condimentum commodo quam.</blockquote>
        condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
        porta. Suspendisse iaculis feugiat accumsan.
```

---

**3 Column Text Block**
![Screenshot of three columns of text](/readme_images/text_col_3.png "Text Col 3")

```
- text_col_3:
  - col:
    - blurb: > 
        <p>Fisrt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
        Sed eleifend orci 
    - link:
       title: TEST
       path: /
    - blurb: > 
        pretium magna tempus vehicula. </p>
        <p>Donec sodales massa vel leo porttitor
        condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
        porta. Suspendisse iaculis feugiat accumsan.</p>
  - col: >
      Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
      Sed eleifend orci pretium magna tempus vehicula.
      <blockquote>Donec sodales massa vel leo porttitor</blockquote>
      condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
      porta.
  - col: >
      Third Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
      <ul>
      <li>Sed eleifend orci pretium magna tempus vehicula.</li>
      <li>Donec sodales massa vel leo porttitor</li>
      </ul>
      condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
      Sed eleifend orci.
```
