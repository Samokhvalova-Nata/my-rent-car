const getAge = (rentalConditions) => {
    const result = {};
    const ageCondition = rentalConditions.split('\n')[0];
    const words = ageCondition.split(' ');
    result.conditionText = words.slice(0, 2).join(' ');
    result.minAge = words[words.length - 1];

    return result;
};

export default getAge;