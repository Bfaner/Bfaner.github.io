hexo.extend.helper.register('get_category_posts',function(){
    var categoryPostArr = []
    hexo.locals.get('categories').map(function (category) {
        var categoryArr = []
        // console.log(category)
        for (let i=0;i<category.posts.length;i++){
            let post = category.posts.data[i];
            categoryArr.push({ name: post.title, value: post.path })
        }
        categoryPostArr.push({
            name: category.name, 
            path: category.path, 
            content: categoryArr,
            id :category._id, 
            children: [], 
            hasParent: 0})
        if('parent' in category){
            categoryPostArr[categoryPostArr.length-1].hasParent = 1
            var index = -1
            for(let i=0; i<categoryPostArr.length; i++){
                if(categoryPostArr[i].id == category.parent){
                    index=i
                    break
                }
            }
            // console.log(index)
            categoryPostArr[index].children.push(categoryPostArr.length-1)
        }
        // console.log({name: category.name,content: categoryArr})
    })
    // console.log(categoryPostArr)
    strCategories = `<style type="text/css"> 
        .category-lists {font-size:20px; color:#00FFFF;}
        .category-lists-second {font-size:18px; color:#FF0000;}
        .category-articles {font-size:16px; color:#FF0000;}
        </style>`
        console.log(categoryPostArr.length)
    for (let i = 0; i < categoryPostArr.length; i++) {
        if(categoryPostArr[i].hasParent){
            continue
        }
        
        strTemp=`
            <div class="category-lists" id="${categoryPostArr[i].name}">
            <a href="../${categoryPostArr[i].path}">${categoryPostArr[i].name}</a>
            </div>`
        if(categoryPostArr[i].children.length == 0){
            for(let j = 0; j < categoryPostArr[i].content.length; j++){
                strTemp+=`
                    <div class="category-articles" id="${categoryPostArr[i].content[j].name}">
                    <a href="../${categoryPostArr[i].content[j].value}">&emsp;${categoryPostArr[i].content[j].name}</a>
                    </div>`
            }
        }
        else{
            for(let j=0; j<categoryPostArr[i].children.length; j++){
                var categoryTmp = categoryPostArr[categoryPostArr[i].children[j]]
                strTemp+=`
                    <div class="category-lists-second" id="${categoryTmp.name}">
                    <a href="../${categoryTmp.path}">&emsp;${categoryTmp.name}</a>
                    </div>`
                for(let k = 0; k < categoryTmp.content.length; k++){
                    strTemp+=`
                        <div class="category-articles" id="${categoryTmp.content[k].name}">
                        <a href="../${categoryTmp.content[k].value}">&emsp;&emsp;${categoryTmp.content[k].name}</a>
                        </div>`
                }
            }
        }
        strCategories+=strTemp
    }
    console.log(strCategories)
    return strCategories
})