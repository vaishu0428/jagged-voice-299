import React from "react";
const Page = ({total,curr,handleClick}) =>
{ const pages= new Array(total).fill(0).map((a,i) =>
    <button key={i} onClick={()=>handleClick(i+1)}>{i+1}</button>
)
return (
    <div>
        {pages}
    </div>
)
}
export default Page;