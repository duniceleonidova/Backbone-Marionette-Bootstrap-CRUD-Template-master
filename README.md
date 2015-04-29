# Backbone-Marionette-Bootstrap-CRUD-Template
"Simple" CRUD template for Backbone and Marionette apps with a mix of Require JS and Bootstrap for the UI

# Structure

## components

Each component is modular and does not require or depend on other components. The component can be initiated by requiring its index.js file. Each component view, model and controller emit events that component controllers other components can listen to. Component controllers listen its own component events and other component events.

- models
  - user.js
- collections
  - users.js
- controllers
  - edit.js
  - detail.js
  - item.js
  - list.js
- templates
  - edit.js
  - detail.js
  - item.js
  - list.js
- views
  - edit.js
  - detail.js
  - item.js
  - list.js
- index.js

# Setup

## Setup Local Config File

Create a cinfig JS file in the root directory called "config.local.js". Add the following gloabl vars in the file for API.

- window.app_base_url = 'https://domain.com';
- window.app_api_url = '/api';
- window.app_api_version = '/v2';
- window.access_token = '';