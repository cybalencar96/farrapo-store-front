function toggleOptionCheckbox(areOptionsChecked, setAreOptionsChecked, type, index) {
    const updatedArray = type === "radio" ? areOptionsChecked.map(() => false) : [...areOptionsChecked];
    updatedArray[index] = !updatedArray[index];
    setAreOptionsChecked(updatedArray);
}


export {
    toggleOptionCheckbox,
}