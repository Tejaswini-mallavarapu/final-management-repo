import React, { useRef, useState } from 'react'
import { BiBold } from "react-icons/bi";
import { FaItalic } from "react-icons/fa";
import { FiUnderline } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { IoList } from "react-icons/io5";
import { BsJustifyLeft,BsJustify,BsJustifyRight } from "react-icons/bs";

const TextAreaEditor = ({placeholder="Enter",onChange}) => {
    const [content,setContent]=useState("");
    const [activeFormats,setActiveFormats]=useState([]);

    const editorRef=useRef(null);

    const handleInput=(e)=>{
        const value = e.curretTarget.innerText;
        setContent(value);
        onChange && onChange(value);
        updateActiveFormats();
    };

    const updateActiveFormats=()=>{
        const formats = [];
        if (document.queryCommandState("bold")) formats.push("bold");
        if (document.queryCommandState("italic")) formats.push("italic");
        if (document.queryCommandState("underline")) formats.push("underline");
        if (document.queryCommandState("strikeThrough")) formats.push("strikeThrough");

        setActiveFormats(formats);
    }
    const toggleFormat=(type)=>{
        editorRef.current?.focus();
        document.execCommand(type);
        updateActiveFormats();

        setActiveFormats((prev)=>
        prev.includes(type)
        ? prev.filter((f)=>f !==type)
        :[...prev, type]
        )
    }

    const isActive=(type)=>activeFormats.includes(type);
    return ( 
            <div className='text-area'>
                <div className='edit-icons'>
                    <div className={`icon ${isActive("bold") ? "active" : ""}`} onClick={()=>toggleFormat("bold")}>
                        <span className='logo'><BiBold /></span>
                    </div>
                    <div className={`icon ${isActive("italic") ? "active" : ""}`} onClick={()=>toggleFormat("italic")}>
                        <span className='logo'><FaItalic /></span>
                    </div>
                    <div className={`icon ${isActive("underline") ? "active" : ""}`} onClick={()=>toggleFormat("underline")}>
                        <span className='logo'><FiUnderline /></span>
                    </div>
                    <div className={`icon ${isActive("strikeThrough") ? "active" : ""}`} onClick={()=>toggleFormat("strikeThrough")}>
                        <span className='logo'><AiOutlineStrikethrough /></span>
                    </div>
                    <div className={`icon ${isActive("insertUnorderedList") ? "active" : ""}`} onClick={() => toggleFormat("insertUnorderedList")}>
                        <span className="logo"><IoList /></span>
                    </div>
                    <div className={`icon ${isActive("justifyLeft") ? "active" : ""}`}  onClick={() => toggleFormat("justifyLeft")} >
                        <span className="logo"><BsJustifyLeft /></span>
                    </div>
                    <div className={`icon ${isActive("justifyCenter") ? "active" : ""}`} onClick={() => toggleFormat("justifyCenter")} >
                        <span className="logo"><BsJustify /></span>
                    </div>  
                    <div className={`icon ${isActive("justifyRight") ? "active" : ""}`} onClick={() => toggleFormat("justifyRight")} >
                        <span className="logo"><BsJustifyRight /></span>
                    </div>
                </div>
                <div ref={editorRef}
                className={`text ${content ? "has-content": ""}`}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                onKeyUp={updateActiveFormats}
                onMouseUp={updateActiveFormats}
                data-placeholder={placeholder}
                >
                </div>
            </div>
    )
}

export default TextAreaEditor