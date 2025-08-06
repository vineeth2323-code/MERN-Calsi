const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.listen(5000,()=>{
    console.log('Server is running on port 5000');      
})
// app.get('/api/factorial',(req,res)=>{
//     const n=parseInt(req.query.n);
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result*=i;
//     }
//     res.send(`Factorial of ${n} = ${result}`);
// });

// GCD

// app.get('/api/GCD',(req,res)=>{
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     let gcd=1;
//     for(let i=1;i<=a && i<=b;i++){
//         if(a%i===0 && b%i===0){
//             gcd=i;
//         }
//     }
//     let  op=req.query.op;
//     if(op === 'gcd') {
//     res.send(`GCD of ${a} and ${b} = ${gcd}`);
//     } else if(op === 'lcm') {
//     res.send(`LCM of ${a} and ${b} = ${(a*b)/gcd}`);
//     }
//     else {
//         res.send('Invalid operation');
//     }
// });

//LCM

// app.get('/api/LCM',(req,res)=>{
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     let g=1;
//     for(let i=1;i<=a && i<=b;i++){
//         if(a%i===0 && b%i===0){
//             g=i;
//         }
//     }
//     res.send(`LCM of ${a} and ${b} = ${(a*b)/g}`);
// });


//Calculator

app.get('/api/calc',(req,res)=>{
    const x=parseInt(req.query.n1);
    const y=parseInt(req.query.n2);
    let op=req.query.op;
    let result=0;
    switch(op){
        case 'add':
            result = x + y;
            operator="+";
            break;
        case 'sub':
            result = x - y;
            operator="-";
            break;
        case 'mul':
            result = x * y;
            operator="*";
            break;
        case 'div':
            result = (x / y).toFixed(2);
            operator="/";
            break;
        default:
            res.send('Invalid operation');
    }
    res.send(`${x} ${operator} ${y} = ${result}`);
});


