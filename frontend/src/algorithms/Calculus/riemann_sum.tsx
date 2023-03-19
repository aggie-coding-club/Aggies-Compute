export function riemann_sum(fnc,typ:string,lwr:number,upr:number,subint:number) {
  var deltax = (upr - lwr) / subint

  return deltax;
  
}

export function riemann_sum_table(xpoints:number[],ypoints:number[],type:string) {
  if (type == "left"){
    ypoints.splice(-1,1)
  }
  else if (type == "right"){
    ypoints.splice(0,1)
  }
  else {
    xpoints = xpoints.filter((element,index)=>{return index%2==0})
    ypoints = ypoints.filter((element,index)=>{return index%2==1})
  }
  var xinterval:number[] = [];
  for (var i = 1; i < xpoints.length;++i){
      xinterval.push(xpoints[i]-xpoints[i-1])
  }
  var sum:number = 0;
  for (var i = 0; i < xinterval.length;++i){
      sum += xinterval[i]*ypoints[i]
  }
  return sum;
}

console.log(riemann_sum_table([1,2,3,4,5,6,7],[3,4,5,6,7,8,9],"midpoint"))
