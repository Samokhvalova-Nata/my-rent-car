import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectCar = (state) => state.cars.shownItem;
export const selectFilterBrand = (state) => state.filter.filterBrand;
export const selectFilterPrice = (state) => state.filter.filterPrice;
export const selectFilterMileageFrom = (state) => state.filter.filterMileage.from;
export const selectFilterMileageTo = (state) => state.filter.filterMileage.to;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectCarsByBrand = createSelector(
    [selectFilterBrand, selectCars ],
    (filterBrand, cars) => {
        const normalizeFilterBrand = filterBrand.toLowerCase();
        return cars.filter((car) =>
            car.make.toLowerCase().includes(normalizeFilterBrand)
        );
    }
);

export const selectCarsByPrice = createSelector(
    [selectFilterPrice, selectCars],
    (filterPrice, cars) => {
        return cars.filter((car) => car.rentalPrice <= filterPrice);
    }
);

// export const selectCarsByMileage = createSelector(
//     [selectFilterMileage, selectCars],
//     (filterMileage, cars) => {
//         return cars.filter((car) => (car.mileage <= filterMileage.to) && (car.mileage >= filterMileage.from) );
//     }
// );

// export const selectFiltredCars = createSelector(
//     [
//     selectCars,
//     selectFilterBrand,
//     selectFilterPrice,
//     selectFilterMileageFrom,
//     selectFilterMileageTo,
//     ],
//     (cars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
//         let carsByBrand = [];
//         let carsByPrice = [];
//         let carsByMileage =[];

//         if (filterBrand !== '') {
//             const normalizeFilterBrand = filterBrand.toLowerCase();
//             const selectCarsByBrand = cars.filter((car) =>
//                     car.make.toLowerCase().includes(normalizeFilterBrand)
//             );
//             carsByBrand.push(...selectCarsByBrand);
//         }

//         if (filterPrice !== '') {
//             const selectCarsByPrice = cars.filter((car) => car.rentalPrice <= filterPrice)
//             carsByPrice.push(...selectCarsByPrice);
//         }

//         if (filterMileageFrom !== '' && filterMileageTo !== '') {
//             const selectCarsByMileage = cars.filter((car) =>
//                 (car.mileage <= filterMileageTo) && (car.mileage >= filterMileageFrom))
//             carsByMileage.push(...selectCarsByMileage);
//         }

//         console.log('carsByBrand', carsByBrand)
//         console.log('carsByPrice', carsByPrice)
//         console.log('carsByMileage', carsByMileage)

//         const filtredCars = carsByBrand.filter(
//             (el) => carsByPrice.includes(el) && carsByMileage.includes(el)
//         );


//         return filtredCars;

//     }
// );

export const selectFiltredCars = createSelector(
    [
    selectCars,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
    ],
    (cars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
        if (
            filterBrand !== ""
            && filterPrice !== ""
            && filterMileageFrom !== ''
            && filterMileageTo !== '') {

            const normalizeFilterBrand = filterBrand.toLowerCase();

            const selectCarsByBrand = cars.filter((car) =>
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