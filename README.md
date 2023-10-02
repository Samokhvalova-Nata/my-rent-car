## Application for a company providing car rental services in Ukraine

Click link: [MyRentCar](https://samokhvalova-nata.github.io/my-rent-car/).

## The application consists of 3 pages:

### Home

- "/" - the homepage with a general description of the services provided by the company.

![Main page](/assets/images/main3.png)

### Catalog

- "/catalog" - a page containing a catalog of cars with various configurations that users can filter by brand, hourly rental price, and mileage driven by the car during its use.

![Catalog page](/assets/images/catalog_filter.png)

#### Load more

The first page of the catalog displays 8 listings, and the rest of them - on clicking the 'Load more' button

![Button Load more](/assets/images/catalog_pagination.png)

#### Learn more

Clicking the 'Learn more' button opens a modal window with detailed information about the car and its rental terms

![Button Learn more](/assets/images/learn_more.png)

![Modal](/assets/images/car_info.png)

#### Rent car

Clicking the 'Rental car' button allows the user to contact the company by phone

![Rent car](/assets/images/call_for_rent.png)

#### Add to favorites

Clicking the 'heart-shaped' icon on the listing card adds it to the favorites list.\
In case of a repeated click on the 'heart-shaped' icon, the listing is removed from the favorites list, and the button's color reverts to its initial state.

![Icon favorite](/assets/images/add_to_favorites.png)

### Favorites

- "/favorites" - a page with listings that have been added to the user's favorites.

![Favorite page](/assets/images/favotites.png)

If no listings have been added to the favorites list, a button to return to the catalog appears:

![No Favorites](/assets/images/no_favotites.png)

## For start use command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technology Stack:

![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![ReactRouter](https://img.shields.io/badge/-ReactRouter-05122A?style=flat&logo=ReactRouter)&nbsp;
![ReactRedux](https://img.shields.io/badge/-ReactRedux-05122A?style=flat&logo=React)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![Axios](https://img.shields.io/badge/-Axios-05122A?style=flat&logo=Axios)&nbsp;
![Mockapi](https://img.shields.io/badge/-Mockapi-05122A?style=flat&logo=Mockapi)&nbsp;
