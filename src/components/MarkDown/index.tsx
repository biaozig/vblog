import React, { useState } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './index.scss'

// 文档编辑器
function MarkDown (props:{onSave?:Function}) {
    // 创建一个空的editorState作为初始值
    const [editorState, setEditorState] = useState(null);

    // 提交到发布
    const submitContent = () => {
        props.onSave && props.onSave(editorState);
    }

    return (
        <div className='app-markdown'>
            <BraftEditor
                value={editorState}
                onChange={(editorState) => setEditorState(editorState)}
                onSave={submitContent}
            />
        </div>
    )
}

export default MarkDown