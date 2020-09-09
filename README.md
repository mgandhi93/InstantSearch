
# InstantSearch

## Overview
Used concerts dataset (provided by Algolia) and React app using Algolia's InstantSearch API
to build a searchable index. <p>
The goal of the project was to successfully demonstrate a working app, using Algolia's InstantSearch API. I was curious to see if the API would be able to provide the entire search experience without the need for a backend service to communicate with Algolia. <p>
I used a Windows machine for development. I used wget to download the large JSON file containing the concert dataset.
From there, I used Algolia's dashboard to upload the dataset, and added configurations to the index.
I made the index searchable by all 3 attributes - name, date, and location. I opted to set the default
sorting by the date, and adding a custom ranking for the name and location attributes.
I also enabled pagination with limits of 50 hits per page, and a default of 20. Lastly, I added all 3 aforementioned
attributes for faceting, which was necessary for the RefinedList.<p>
I originally used only the RefinementList and Searchbox options with InstantSearch, and proceeded
to add Pagination, and PoweredBy widgets. I had some trouble adding the last widget - Autocomplete, as
I have very little frontend experience, and no React experience so it took some time to fix a few issues I had with integrating the Autocomplete
widget, but the documentation was very helpful in solving those problems. <p>
I overall enjoyed the project, and it gave me a great chance to gain familiarity with Algolia's InstantSearch product and how to integrate it into an app.

Added Autocomplete, RefinementList, Pagination, and PoweredBy widgets.

## Widgets Used
~Autocomplete<p>
~RefinementList<p>
~Pagination<p>
~PoweredBy<p>

## Getting Started
