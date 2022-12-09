import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, Icon } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
    const changename = (newname)  => {  setAttributes( { blockname: newname }) }
    const changedescription = ( dis ) => { setAttributes( { description: dis }) }
    const moresign = () => <Icon icon="more" />;
	return (
		<div { ...useBlockProps() }>
            <div class="title">{ attributes.blockname }</div>
            <InnerBlocks/>

            <InspectorControls key="setting">
                <PanelBody title="CBlock Instructions" icon={ moresign } initialOpen={ true }>
                    <p>This block will only be shown if there is code that makes that happen.  
                        You can change the content of the block as much as you like, but if you add or 
                        remove these blocks, or want to change what makes them be displayed, 
                        you must tell webmaster.</p>
                    <p><b>Settings</b>:</p>
                    <ul>
                        <li><b>Title</b> names this particular block; it should be unique on the page.</li> 
                        <li><b>Description</b>is optional and used to explain the purpose of the block.</li>
                    </ul>
                </PanelBody>
                <PanelBody title="CBlock Settings" icon={ moresign } initialOpen={ true }>
                    <PanelRow>
                        <TextControl
                            label="title"
                            value={ attributes.blockname }
                            onChange={ changename }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label="description"
                            value={ attributes.description }
                            onChange={ changedescription }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
		</div>
	);
}

// changename is not defined.