---
layout: bos_content
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
  - title: Remote JSON
    json_source_url: "http://mysafeinfo.com/api/data?list=presidents&format=json"
    columns:
      - column_name: Name
        json_key: nm
      - column_name: Party
        json_key: pp
      - column_name: Term
        json_key: tm
  - title: Local JSON
    json_source_url: "http://localhost:3000/test.json"
    columns:
      - column_name: Name
        json_key: nm
      - column_name: Party
        json_key: pp
      - column_name: Term
        json_key: tm
      - column_name: Custom
        json_key: custom
  - title: 2nd Local test
    json_source_url: "http://localhost:3000/test2.json"
    columns:
      - column_name: New title
        json_key: this thing
      - column_name: Name
        json_key: nombre
      - column_name: Other
        json_key: other thing
      - column_name: Last Col
        json_key: custom
spanning_image+:
  - title: Lorem ipsum title
    desc: This is the description for the spanning image
    link:
      - text: Click This!
        url: https://google.com
    src: https://central.wordcamp.org/files/2013/04/boston-skyline-for-banner1.jpg
    alt: Placeholder alt text
    title: Placeholder image title
---
