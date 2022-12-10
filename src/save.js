import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    console.log("Yup, I am called!");
    myval = (<div { ...useBlockProps().save() }>
                <InnerBlocks.Content />
            </div>);
    console.log(myval);
	return myval;
}
