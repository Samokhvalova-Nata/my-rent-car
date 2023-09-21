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
        const filteredCars = allCars.filter((car) => {
            const carPriceToNum = parseInt(car.rentalPrice.replace("$", ""));
            const filterPriceToNum = parseInt(filterPrice);

            if (filterBrand && car.make.toLowerCase() !== filterBrand.toLowerCase()) {
                return false;
            }

            if (filterPrice && carPriceToNum > filterPriceToNum) {
                return false;
            }

            if (
                filterMileageFrom &&
                filterMileageTo &&
                (car.mileage < filterMileageFrom || car.mileage > filterMileageTo)
            ) {
                return false;
            }
            return true;
        });

        return filteredCars;
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