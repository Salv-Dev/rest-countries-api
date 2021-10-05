export default function filterByRegion(data, selectedOption) {
    const newData = data.filter(item => {
        return item.region.toLowerCase() == selectedOption.toLowerCase() && item;
    });

    return newData;
}