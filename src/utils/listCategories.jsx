export default function ListCategories(listCategories) {
    let listFatherCategories = [];
    listCategories.forEach((category, index) => {
        if (!category.fatherCateId) {
            listFatherCategories.push(category)
        }
    })

    const setListCategoriesAgain = listFatherCategories.map(value => {
        let listChildCategoriesArray = []
        for (let i = 0; i < listCategories.length; i++) {
            if (listCategories[i].fatherCateId === value.id) {
                listChildCategoriesArray.push(listCategories[i])
            }
        }
        return { id: value.id, name: value.name, listChildCategories: listChildCategoriesArray }
    })
    return setListCategoriesAgain

};

