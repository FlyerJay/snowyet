<template>
    <div class="pure-editor">
        <div class="pure-editor-toolbar">
            <ToolBar/>
        </div>
        <div class="pure-editor-txt" contentEditable="true"></div>
    </div>
</template>
<style lang="less" scoped>
    .pure-editor{
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
            .pure-editor-toolbar{
            border-bottom: 1px solid #ccc;
        }
        .pure-editor-txt{
            background-color: #fafafa;
            outline: none;
            padding: 10px;
            flex-grow: 1;
        }
    }
</style>
<script>
    import ToolBar from "./toolbar";
    export default {
        name: 'pureEditor',
        components: {
            ToolBar
        }
    }
</script>
