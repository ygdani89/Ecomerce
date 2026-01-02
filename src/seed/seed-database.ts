import { create } from 'zustand';
import initialData from './seed';
import prisma from '../lib/prisma';



async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);

  const { categories, products } = initialData;


  //  Categorias
  // {
  //   name: 'Shirt'
  // }
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData
  });


  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>



  // Productos

const product1 =products[0]
  const {images} = products[0]

  await prisma.product.create({
    data:{
      ...product1,
      categoryId: categoriesMap["shirts"]
    }
  })

  // products.forEach(async (product) => {


  //   // tupe , Size gender , tags 
  //   // const {  images ,sizes , type, tags , gender ,...rest } = products[0];

  //   // await prisma.product.create({

  //   //   data: {
  //   //     ...rest,
  //   //     categoryId: categoriesMap['shirts']
  //   //   }
  //   // })


  //   // // Images
  //   // const imagesData = images.map((image) => ({
  //   //   ulr: image,                 // Prisma espera `ulr`
  //   //   productID: dbProduct.id,    // Prisma espera `productID`
  //   // }));


  //   // await prisma.productImage.createMany({
  //   //   data: imagesData
  //   // });

  // });





  console.log('Seed ejecutado correctamente', product1);
}








(() => {

  if (process.env.NODE_ENV === 'production') return;


  main();
})();