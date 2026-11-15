'use client'
import {useEffect,useState} from 'react'
export function SystemLine(){const [n,setN]=useState(0);useEffect(()=>{const id=setInterval(()=>setN(v=>(v+1)%4),1800);return()=>clearInterval(id)},[]);return <div className="system-line"><span className="pulse"/> system online <span className="dots">{'.'.repeat(n)}</span><span className="system-right">local / Kolkata • build 2.0</span></div>}
