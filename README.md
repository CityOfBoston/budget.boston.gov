# budget.boston.gov

This is a basic Jekyll starter project. It uses Gulp for building everything, so that we can more easily incorporate things like BrowserSync, Stylus and any necessary plugins.

To get up and running, download (or fork) this repo. Then in your project run:

``` sh
bundle install
npm install
gulp
```

At this point, you should be able to visit `https://0.0.0.0:3000`.

---

To create custom pages, you can simply add reusable components to markdown files. 
> If you need to use the same component multiple times in the same file, you need to append the plus "+" character to the end of the key. An additional "+" needs to be added for each repeating component (e.g. to add a 3rd text_box use `text_box++:`).

Here's a short list of some common components you can use:
**Breadcrumbs**
![Screenshot of breadcrumb page navigation](/images/breadcrumbs.png "Breadcrumbs Screenshot")
```
breadcrumbs:
 - title: Home
   url: "/"
 - title: Dept
   url: "/departments"
 - current: Executive Summary
 - published: 2/15/17
```
