const getFirstLetters = (nameList) => {
    console.log('List with first names first letter: ')
    return nameList.map(name => name.charAt(0));
}

module.exports = getFirstLetters;
