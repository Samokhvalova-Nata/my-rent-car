import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectAllCar = (state) => state.cars.allCars;
export const selectFilterBrand = (state) => state.filter.filterBrand;
export const selectFilterPrice = (state) => state.filter.filterPrice;
export const selectFilterMileageFrom = (state) => state.filter.filterMileage.from;
export const selectFilterMileageTo = (state) => state.filter.filterMileage.to;
export const selectIsFiltred = (state) => state.filter.isFiltred;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavorites = (state) => state.favorites.favorites;


export const selectFiltredCars = createSelector(
    [
    selectAllCar,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
    ],
    (allCars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
        if (
            filterBrand !== ""
            && filterPrice !== ""
            && filterMileageFrom !== ''
            && filterMileageTo !== '') {

            const normalizeFilterBrand = filterBrand.toLowerCase();

            const selectCarsByBrand = allCars.filter((car) =>
                car.make.toLowerCase().includes(normalizeFilterBrand));

            const selectCarsByPrice = selectCarsByBrand.filter((car) =>
                car.rentalPrice <= filterPrice);

            const selectCarsByMileage = selectCarsByPrice.filter((car) =>
                car.mileage <= filterMileageTo &&
                car.mileage >= filterMileageFrom);

            return selectCarsByMileage;
        }
    }
);

export const selectFavoriteCars = createSelector([selectAllCar, selectFavorites],
    (allCars, favorites) => {
        return allCars.filter(car => favorites.includes(car.id))
    }
);

export const selectFiltredFavoriteCars = createSelector(
    [selectFiltredCars, selectFavorites],
    (filtredCars, favorites) => {
        if (filtredCars) {
            return filtredCars.filter((car) => favorites.includes(car.id));
        }
    }
);