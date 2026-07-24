a=[1,2,3,4,5,6,7,8,9,10];
const b=a.filter((i)=>(i%2==0));
console.log("Even",b);
const c=b.map((i)=>(i*i));
console.log("Squares of even numbers",c);
const d=c.reduce((i,j)=>(i+j));
console.log("Sum of squares of even numbers",d);
