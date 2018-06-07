// import external dependencies
import 'jquery';
import fontawesome from '@fortawesome/fontawesome'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

fontawesome.library.add(faMapMarkerAlt, faPhone, faEnvelope)

// Import everything from autoload
import "./autoload/**/*"

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
