import { create } from 'zustand';
import initialData from './seed';
import prisma from '../lib/prisma';



async function main() {

  // 1. Borrar registros previos
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ])

  //Inssertar una categoria 

  // await prisma.category.create({
  //   data: {
  //     name: "Rhirts"
  //   }
  // })


  // trayendo el seed de mi BD
  const { categories, products } = initialData;

  // Poniendo en un  arreglo  
  const categoriesData = categories.map((name) => ({ name }))


  // insertar todas las Categorias 
  await prisma.category.createMany({
    // createMany  Esta esperando que le mande un arreglo  por eso marca error 
    data: categoriesData,
    skipDuplicates: true
  });




  // Categorias ID

  // llamado a la BD  , por las categorias 
  const categoriesDB = await prisma.category.findMany();


  // un Mapa para que cuando consulte la categrotia sea shirt hat , me devuelva un ID 
  const categoriesMap = categoriesDB.reduce((map, category) => {

    // normalizo los datos poniendolos en Minusculas  y  cada categoria  señala un ID 
    map[category.name.toLowerCase()] = category.id

    return map
  }, {} as Record<string, string>)




   const {images , type, ...product1} = products[0]


  await prisma.product.create({
    data: {
...product1,
      // title: "daniel",
      // description: "daniel Para la casa",
      // inStock: 36,
      // // price       Float    @default(0)
      // sizes: ["L"],
      // slug: "ajsdbkajd",
      // tags: ["String[]"],
      // gender: ["men"],
      categoryId: categoriesMap["shirts"]
    }
  })







  console.log('Seed ejecutado correctamente',);
}








(() => {

  if (process.env.NODE_ENV === 'production') return;


  main();
})();