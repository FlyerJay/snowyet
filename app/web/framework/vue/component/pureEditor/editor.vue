<template>
    <div class="pure-editor">
        <div class="pure-editor-toolbar">
            <ToolBar/>
        </div>
        <div class="pure-editor-txt" contentEditable="true"></div>
    </div>
</template>
<style>

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
