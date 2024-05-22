'use client'
import React from "react";
import { useRouter } from "next/navigation";
function BloodBank({params}){
    const router=useRouter()
    const id=params.id
    console.log(id)
    return (
        <>
          <p>Blood bank</p>
        </>
    )
}
export default BloodBank