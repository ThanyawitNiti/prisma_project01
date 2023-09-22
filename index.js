const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // is asynchronous

const run = async () => {
  try {
    //CREATE
    // const result = await prisma.user.create(  
    //     //รอให้ค่าทำเสร็จแล้วใส่ result จะต้องใส่ await  
    //     //ปกติ async แบบอื่นทำงานทันที แต่prismaอันนี้ จะยังไม่ทำงาน ถ้ายังไม่มี await 
    //     { data: { 
    //         username:'john',
    //         password: '123456'
    //             } 
    //     });
//createMany ใช้ nested ไม่ได้
    // const result = await prisma.category.createMany({
    //     //return { count :2 } means insert 2 unit
    //     data:[
    //         {name : 'Food'},
    //         {name:'Transport'}
    //     ]
    // })
    // const result = await prisma.transaction.create({
    //     data:{
    //         payee : '7-11',
    //         amount : 20,
    //         date :new Date('2023-09-02'),
    //         userId:1,
    //         categoryId:1
    //     }
    // })
    // const result = await prisma.transaction.create({
    //     data:{
    //         payee : 'Tesco',
    //         amount : 60,
    //         date :new Date('2023-09-03'),
    //         user:{
    //             create : {
    //                 username :'Jack',
    //                 password :'123456'
    //             }
    //         },
    //         category:{
    //             create : {
    //                 name :'Grocery'
    //             }
    //         }
    //     }
    // })

    // const result = await prisma.transaction.create({
    //     data:{
    //         payee : 'Safari World',
    //         amount : 500,
    //         date :new Date('2023-09-03'),
    //         user:{
    //             create : {
    //                 username :'Jane',
    //                 password :'5555'
    //             }
    //         },
    //         category:{
    //             create : {
    //                 name :'Travel'
    //             }
    //         }
    //     },
    //     include:{
    //         user: true,
    //         category:true
    //     }
    // })
    // const result = await prisma.user.create({
    //     data:{
    //         username:'max',
    //         password:'123',
    //         transactions:{
    //             create:[
    //                 { payee : '7-11' , amount:68 ,date: new Date('2030-09-04'), categoryId:3},
    //                 { payee : 'CJ' , amount:123 ,date: new Date('2030-09-04'), categoryId:2},
    //             ]
    //         }
    //     }
    // })
    // const result = await prisma.user.create({
    //     data:{
    //         username:'max',
    //         password:'123',
    //         transactions:{
    //             create:[
    //                 { payee : '7-11' , amount:68 ,date: new Date('2030-09-04'), categoryId:3},
    //                 { payee : 'CJ' , amount:123 ,date: new Date('2030-09-04'), categoryId:2},
    //             ]
    //         }
    //     },
    //     include:{
    //         transactions: true
    //     }
    // })
    // const result = await prisma.user.create({
    //     data:{
    //         username:'manuel',
    //         password:'1234',
    //         transactions:{
    //             create:{ 
    //                 payee : '7-11' , 
    //                 amount:68 ,
    //                 date: new Date('2030-09-04'), 
    //                 category:{
    //                     create:{
    //                         name:'Beverage'
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     include:{
    //         transactions: true
    //     }
    // })
    // UPDATE 
    // const result = await prisma.user.update({ //ได้อันเดียว
    //     data:{
    //         password:'654321'
    //     },
    //     where:{
    //         id:1
    //     }
    // })
    // Update many 
    // const result = await prisma.user.updateMany({
    //     data:{
    //         password:'098765'
    //     },
    //     where:{
    //         username:{
    //             startsWith:'J'
    //         }
    //     }
    // })
    //ถ้ามี update ถ้าไม่มี create 
// const result = await prisma.user.upsert({
//     create:{
//         username:'ann',
//         password:'1234556'
//     },
//     update:{
//         password:'123456'
//     },
//     where:{
//         username:'ann'
//     }
// })
//Delete
// const result = await prisma.user.delete({
//     where :{
//         username:'ann'
//     }
// })
const result = await prisma.transaction.deleteMany({
    where :{
        payee:'7-11'
    }
})


    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
