import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    return (<div { ...useBlockProps.save() } blockname={attributes.blockname}> 
        <InnerBlocks.Content />
    </div>);
}
