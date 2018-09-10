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
  appModes: {
    __typename: "AppModes",
    id: "app-modes",
    items: [
      {
        __typename: "AppMode_Item",
        id: "Light",
        name: "Light",
        value: AppMode.LIGHT
      },
      {
        __typename: "AppMode_Item",
        id: "Dark",
        name: "Dark",
        value: AppMode.DARK
      }
    ]
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
  newStandSizes: {
    __typename: "newStandSizes",
    id: "newStandSizes",
    sizes: [
      {
        __typename: "newStandSizes_item",
        name: "Comfortable",
        value: NewsStandSize.COZY
      },
      {
        __typename: "newStandSizes_item",
        name: "Compact",
        value: NewsStandSize.COMPACT
      },
      {
        __typename: "newStandSizes_item",
        name: "Image free",
        value: NewsStandSize.IMAGE_FREE
      }
    ]
  },
  searchTerm: {
    __typename: "SearchTerm",
    value: ""
  }
};
