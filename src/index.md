---
title: Hello World
layout: "base.njk"
---

Hello Jamstack Fam!

{% for page in collections.pages %}

- [{{page.data.title}}]({{ page.url }})

{%- endfor %}
