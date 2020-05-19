import React, { useState, useEffect } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.scss'

// 文档编辑器
function MarkDown (props:{defaultValue?:string,onSave?:Function,onChange?:Function}) {
    // 创建一个空的editorState作为初始值
    const [editorState, setEditorState] = useState(String);


    // 提交到发布
    const handleChange = (editorState:any) => {
        const htmlString = editorState.toHTML();

        setEditorState(editorState);
        props.onChange && props.onChange(htmlString);
    }

    // 提交到发布
    const submitContent = () => {
        props.onSave && props.onSave(editorState);
    }

    // 文本配置
    const options:Array<any> = [
        'undo', 'redo', 'separator',
        'font-size', 'line-height', 'letter-spacing', 'separator',
        // 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
        // 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
        // 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
        // 'link', 'separator', 'hr', 'separator',
        // 'media', 'separator',
        // 'clear'
    ]

    // 设置默认defaultValue
    useEffect(() => {
        let val = BraftEditor.createEditorState(props.defaultValue);
        setEditorState(val)
    }, [])

    return (
        <div className='app-markdown' style={{border:'1px solid #d9d9d9'}}>
            <BraftEditor
                controls={options}
                value={editorState}
                defaultValue={props.defaultValue}
                onChange={handleChange}
                onSave={submitContent}
            />
        </div>
    )
}

export default MarkDown