import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    // console.log("Yup, I am called!");
    // const props = useBlockProps().save();
    // const myval = (<div { ...props }>
    //             <InnerBlocks.Content />
    //         </div>);
    // console.log('props' + props.toString());
    // console.log('myval' + myval.toString());
	// return (<div>  I am alive!!! </div>);
    return (<div { ...useBlockProps.save() }> 
        <InnerBlocks.Content />
    </div>);
}
