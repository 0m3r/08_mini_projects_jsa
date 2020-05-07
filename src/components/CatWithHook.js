import  React from 'react';
import  {useMouse} from '../hooks/useMouse';
import logo from '../logo.svg';

 export  default function CatWithHook()  {

    const {pos, handleMouseMove} = useMouse();

    return (
        <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>

            <img src={logo}
                 width={100}
                 style={{position: "fixed", left: pos.x, top: pos.y}}
                 alt=""/>
        </div>
    )
}