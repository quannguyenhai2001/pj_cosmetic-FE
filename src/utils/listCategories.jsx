
const listCategories = (childCategories, fatherCategories) => {
    let newArray = [...fatherCategories]
    const addProperty = newArray.map(value => {
        let listChildCategoriesArray = []
        for (let i = 0; i < childCategories.length; i++) {
            if (childCategories[i].fatherCateId === value.id) {
                listChildCategoriesArray.push(childCategories[i])
            }
        }
        return { id: value.id, name: value.name, listChildCategories: listChildCategoriesArray }
    })
    return addProperty
};

export default listCategories;