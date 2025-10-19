/**
 * Seed data for ER 4.0
 * 
 * Multi-locale content for:
 * - 2 countries (Czech Republic, Germany)
 * - 3 cities (Prague, Brno, Berlin)
 * - 3 categories (Escorts, Erotic Massage, BDSM)
 * - 6 profiles (multilingual)
 */

import countriesData from './countries.json';
import citiesData from './cities.json';
import categoriesData from './categories.json';
import profilesData from './profiles.json';

export const countries = countriesData.countries;
export const cities = citiesData.cities;
export const categories = categoriesData.categories;
export const profiles = profilesData.profiles;

export default {
  countries,
  cities,
  categories,
  profiles
};
