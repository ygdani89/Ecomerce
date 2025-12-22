import { create } from 'zustand';
import initialData from './seed'
import prisma from '../lib/prisma';
import { log } from 'console';



async function main() {

  // 1. Borrar registros previos
  await Promise.all([

    prisma.productImage.deleteMany(),
    prisma.category.deleteMany(),
    prisma.product.deleteMany()
  ]);

  // await prisma.category.create({
  //   data: {
  //     name: 'Shirts'
  //   }
  // })

  const { categories, products } = initialData

  const categoriesDAta = categories.map(name => ({ name }));


  await prisma.category.createMany({

    data: categoriesDAta
  }
  )



  console.log('Seed ejecutado correctamente');
}









(() => {

  if (process.env.NODE_ENV === 'production') return;


  main();
})();