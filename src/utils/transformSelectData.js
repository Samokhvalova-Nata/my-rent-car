const transformSelectData = (data) => 
    data.map(item => ({
        value: item,
        label: item,
    }));

export default transformSelectData;