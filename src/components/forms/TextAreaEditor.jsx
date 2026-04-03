import React, { useEffect, useRef } from "react";
import Quill from "quill";

import { BiBold } from "react-icons/bi";
import { FaItalic } from "react-icons/fa";
import { FiUnderline } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { IoList } from "react-icons/io5";
import { BsJustifyLeft, BsJustify, BsJustifyRight } from "react-icons/bs";

const TextAreaEditor = ({ placeholder = "Enter", onChange }) => {
    const editorRef = useRef(null);
    const quillRef = useRef(null);
    const toolbarRef = useRef(null);

    useEffect(() => {
    if (!quillRef.current && editorRef.current && toolbarRef.current) {
        const quill = new Quill(editorRef.current, {
        theme: null,
        placeholder,
        formats: ["bold","italic", "underline", "strike", "list", "align" ],
        modules: {
            toolbar: toolbarRef.current
        }
        });

        quill.on("text-change", () => {
        const html =
            editorRef.current.querySelector(".ql-editor").innerHTML;
        onChange && onChange(html);
        });

        quillRef.current = quill;
    }
    }, []);
    return (
        <div  className="text-area">
            <div ref={toolbarRef} id="toolbar" className="edit-icons">

                <button className="ql-bold">
                <span className="icon"><BiBold className="logo"/></span>
                </button>

                <button className="ql-italic">
                <span className="icon"><FaItalic className="logo"/></span>
                </button>

                <button className="ql-underline">
                <span className="icon"><FiUnderline className="logo"/></span>
                </button>

                <button className="ql-strike">
                <span className="icon"><AiOutlineStrikethrough className="logo"/></span>
                </button>

                <button className="ql-list" value="bullet" type="button">
                <span className="icon"><IoList className="logo"/></span>
                </button>

                <button className="ql-align" value="">
                <span className="icon"><BsJustifyLeft className="logo"/></span>
                </button>

                <button className="ql-align" value="center">
                <span className="icon"><BsJustify className="logo"/></span>
                </button>

                <button className="ql-align" value="right">
                <span className="icon"><BsJustifyRight className="logo"/></span>
                </button>

            </div>

        <div
            ref={editorRef}
            className="text"
            data-placeholder={placeholder}
        />
        </div>
    );
};

export default TextAreaEditor;