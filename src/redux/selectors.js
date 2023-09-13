import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectCar = (state) => state.cars.shownItem;
export const selectFilterBrand = (state) => state.filter.filterBrand;
export const selectFilterPrice = (state) => state.filter.filterPrice;
export const selectFilterMileage = (state) => state.filter.filterMileage;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectCarsByBrand = createSelector(
    [selectCars, selectFilterBrand],
    (filterBrand, cars) => {
        return cars.filter((car) => car.make === filterBrand);
    }
);

export const selectCarsByPrice = createSelector(
    [selectCars, selectFilterPrice],
    (filterPrice, cars) => {
        return cars.filter((car) => car.rentalPrice <= filterPrice);
    }
);

export const selectCarsByMileage = createSelector(
    [selectCars, selectFilterMileage],
    (filterMileage, cars) => {
        return cars.filter((car) => (car.mileage <= filterMileage.to) && (car.mileage >= filterMileage.from) );
    }
);