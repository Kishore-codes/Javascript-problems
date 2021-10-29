const a = (c) => {
  const b = (a) => {
    console.log(a + c);
  };
  return b;
};
let c = a(2);
c(20);
