---
layout: bos_content
permalink: /example
breadcrumbs:
 - title: Home
   url: "/"
 - title: Dept
   url: "/departments"
 - current: Executive Summary
 - published: 2/15/17
intro:
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
text_block:
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
spanning_image:
  - title: Lorem ipsum title
    desc: This is the description for the spanning image
    link:
      - text: Click Here
        url: https://google.com
    src: https://www.boston.gov/sites/default/files/styles/resp_wide_2000x800custom_boston_wide_1x/public/winter_swimming_10.jpg?itok=W91jOE5G&timestamp=1452037695    
    alt: Placeholder alt text
    title: Placeholder image title
text_block+:
  - title: Revenue
    body: >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit id 
      felis sed iaculis. Sed ac nisl eu lacus porta pharetra. Suspendisse a tortor vel 
      velit egestas porttitor et a mi. Nam nunc ipsum, elementum a nisi nec, scelerisque 
      blandit orci. Ut in sollicitudin turpis, non malesuada leo. Morbi vehicula sit 
      amet est sed luctus. Suspendisse massa turpis, iaculis at fermentum placerat, 
      scelerisque ultricies est. Nulla facilisi. In scelerisque ornare tincidunt.
js_table:
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
spanning_image+:
  - title: Lorem ipsum title
    desc: This is the description for the spanning image
    link:
      - text: Click This!
        url: https://google.com
    src: https://central.wordcamp.org/files/2013/04/boston-skyline-for-banner1.jpg
    alt: Placeholder alt text
    title: Placeholder image title
text_col_2:
  -col_1: >
    <p>First Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
    Sed eleifend orci pretium magna tempus vehicula. </p>
    <ol>
    <li>Donec sodales massa vel leo porttitor</li>
    <li>condimentum. Ut condimentum commodo quam.</li>
    <li>Phasellus sed metus eu velit pellentesque</li>
    </ol>
  -col_2: >
    Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
    Sed eleifend orci pretium magna tempus vehicula.
    <blockquote>Donec sodales massa vel leo porttitor. Ut condimentum commodo quam.</blockquote>
    condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
    porta. Suspendisse iaculis feugiat accumsan.
grid:
  - grid_title: General
  - title: Boston Common
    subtitle: Downtown
    body: >
      Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok=jMsIfnJ6
    link: https://boston.gov
  - title: Another Title
    subtitle: Subtitle
    body: >
      New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/backbay5.jpg?itok=sA4Mz_05
    link: https://google.com
  - title: Test
    subtitle: test
    body: >
      NEW New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/bayvillage3.jpg?itok=iDf79UIP
    link: /
text_col_3:
  -col_1: >
    <p>Fisrt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
    Sed eleifend orci pretium magna tempus vehicula. </p>
    <p>Donec sodales massa vel leo porttitor
    condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
    porta. Suspendisse iaculis feugiat accumsan.</p>
  -col_2: >
    Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
    Sed eleifend orci pretium magna tempus vehicula.
    <blockquote>Donec sodales massa vel leo porttitor</blockquote>
    condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
    porta.
  -col_3: >
    Third Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis nibh.
    <ul>
    <li>Sed eleifend orci pretium magna tempus vehicula.</li>
    <li>Donec sodales massa vel leo porttitor</li>
    </ul>
    condimentum. Ut condimentum commodo quam. Phasellus sed metus eu velit pellentesque
    Sed eleifend orci.
grid+:
  - grid_title: Revene
  - title: Something Else
    subtitle: Downtown
    body: >
      Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok=jMsIfnJ6
    link: https://boston.gov
  - title: New Another Title
    subtitle: Subtitle
    body: >
      New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/backbay5.jpg?itok=sA4Mz_05
    link: https://google.com
  - title: Test 2
    subtitle: test
    body: >
      NEW New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/bayvillage3.jpg?itok=iDf79UIP
    link: /
  - title: Something Else
    subtitle: Downtown
    body: >
      Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok=jMsIfnJ6
    link: https://boston.gov
  - title: New Another Title
    subtitle: Subtitle
    body: >
      New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/backbay5.jpg?itok=sA4Mz_05
    link: https://google.com
  - title: Test 2
    subtitle: test
    body: >
      NEW New Two centuries separate the creation of the Boston Common and the Public Garden, 
      and what a difference that period made.
    img: https://www.boston.gov/sites/default/files/styles/grid_card_image/public/bayvillage3.jpg?itok=iDf79UIP
    link: /
---
