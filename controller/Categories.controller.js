import Category from "../model/Product.js";

export const addCategoryPage = (request,response,next)=>{
    response.render("add-category.ejs");
}

export const addcategoryAction = (request,response,next)=>{
    let {Category_name} = request.body;    
    let p = new Category(null,Category_name);
    p.save()
    .then(result=>{
      response.redirect("/Category/view");
    }).catch(err=>{
        console.log(err);
    })
}

export const viewCategoryPage = async (request,response,next)=>{
    try{ 
     let result = await Category.viewCategory();
     return response.render("view-category.ejs",{category: result});
    }
    catch(err){
     console.log(err);
    }
 }
 export const deleteCategory = (request,response,next)=>{
    let CategoryId = request.params.CategoryId;
  Category.delete(CategoryId)
    .then(result=>{
        return response.redirect("/Category/view-Category");
    }).catch(err=>{
        console.log(err);
    })
}