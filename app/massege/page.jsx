'use client'
import React, { useState } from 'react'
import { useRef } from "react";

const page = () => {

    const dialogRef = useRef(null);

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };
    const opendialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };


    const [showModel, setShowModel] = useState(false)
    return (
        <div>
            <div>
                <h4 className=' bg-slate-500 m-5 p-5 leading-relaxed rounded-2xl text-2xl text-center'>
                    بقالك كام يوم بتدحي وكده , حتي لو انتي مش حاسة انك بتنجزي كتير بس انا متاكد انك بتعملي كل اللي بتقدري عليه كملي ..خلاص اسبوعين وناخد برييك

                    <span>
                        💃
                    </span>

                    <div>
                        <h5 onClick={opendialog} className=' bg-slate-800 text-slate-400 p-5 m-4 rounded-xl shadow-xl shadow-slate-600 text-4xl'>دوسي هنا</h5>
                    </div>

                    <dialog  ref={dialogRef} className='  bg-white/10  backdrop-blur-xl p-5 rounded-xl text-white'>
                        <h1 className=' m-2'>هدير تاااااني خالص</h1>
                        <img src="bah.jpg" alt="" />
                        <button
                            onClick={closeDialog}

                            className=' flex justify-end text-2xl m-2 p-2  bg-white/20 rounded-xl'>اقفل</button>
                    </dialog>
                </h4>
            </div>
        </div>
    )
}

export default page