import images from "./images";

const wines = [
  {
    title: "Catena Malbee",
    price: "€22",
    tags: "AU | Bottle",
  },
  {
    title: "Chapel Hill Shiraz",
    price: "€30",
    tags: "AU | Bottle",
  },
  {
    title: "Rhino Pale Ale",
    price: "€16",
    tags: "CA | 750 ml",
  },
  {
    title: "La Vieillw Rose",
    price: "€25",
    tags: "FR | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "€15",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Cosmopolitan",
    price: "€10",
    tags: "Vodka | Cranberry juice | Slice of lemon",
  },
  {
    title: "Aperol Sprtiz",
    price: "€12",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Daiquiri",
    price: "€10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "€15",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "€15",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Best International Cocktail Bar",
    subtitle:
      "Bar that sets the highest of standards in the industry and has influenced national cocktail trends.",
  },
  {
    imgUrl: images.award02,
    title: "Visionary Award",
    subtitle:
      "This award recognizes an individual who has encouraged mentorship and contributed to making the hospitality industry equitable and inclusi.",
  },
  {
    imgUrl: images.award03,
    title: "Best New Spirit or Cocktail Ingredient",
    subtitle:
      "This award recognizes the item that has made the most significant impact on the cocktail and bar industry in the last year.",
  },
  {
    imgUrl: images.award05,
    title: "World’s Best Cocktail Menu",
    subtitle:
      "This award recognizes the bar’s ability to communicate its offerings to their guests in a physical manner–via hard copy bar menu or board.",
  },
];

export default { wines, cocktails, awards };
