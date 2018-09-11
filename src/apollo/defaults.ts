import { AppMode } from "../enums/appMode";
import NewsStandSize from "../enums/newsStandSize";
import Categories from "../settings/categories";
import Countries from "../settings/countries";

export default {
  appMode: {
    __typename: "AppMode",
    id: "app-mode",
    name: "Light",
    value: AppMode.LIGHT
  },
  categories: {
    __typename: "DefaultCategories",
    id: "DefaultCategories",
    value: Categories
  },
  countries: {
    __typename: "countries",
    id: "countries",
    items: Countries
  },
  defaultCategory: {
    __typename: "defaultCategory",
    id: "defaultCategory",
    value: "general"
  },
  defaultCountry: {
    __typename: "DefaultCountry",
    country: "us",
    id: "default-country",
  },
  defaultNewstandSize: {
    __typename: "defaultNewstandSize",
    id: "defaultNewstandSize",
    value: NewsStandSize.COZY
  },
  quickViewUrl: {
    __typename: "QuickviewUrl",
    id: "quickviewurl",
    isOpen: false,
    url: "",
  },
  searchPage: {
    __typename: "SearchPage",
    id: "searchpage",
    number: 0,
  },
  searchTerm: {
    __typename: "SearchTerm",
    value: ""
  },
};
