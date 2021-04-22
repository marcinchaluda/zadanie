const getUniqueNames = (nameList) => {
    console.log('Name list with unique names: ')
    return [...new Set(nameList)];
}

module.exports = getUniqueNames;
