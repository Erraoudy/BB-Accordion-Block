// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls, 
	InnerBlocks, 
	RichText, 
	useBlockProps 
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { useRef, useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

// Internal dependencies
import icons from './icons';

// Edit
export default function Edit( { attributes, setAttributes, context, clientId } ) {

	// Attributes
	const { 
		uid,
		textAlign,
		headerElement,
		headerHeadingLevel,
		headerText
	} = attributes;
	
	// Set attributes with parent values
	setAttributes( {
		headerElement: context[ "accordion/headerElement" ],
		headerHeadingLevel: context[ "accordion/headerHeadingLevel" ]
		
	} );
	
	// Block ID
	setAttributes( { uid: clientId } );
	
	// Block content
	const blockContent = () => {	
		
		// Wrapper 
		const wrapperAttributes = useBlockProps( {
			className: classnames( {
				[ `has-text-align-${ textAlign }` ]: textAlign
			} ),
		} );
		
		// Heading
		const Heading = headerElement === 'heading' ? 'h' + headerHeadingLevel : 'p';
		
		// Button
		const button = useRef();
		
		// Panel
		const panel = useRef();

		// Get the default state from the parent block
		const { defaultState } = context['accordion/defaultState'];

		// Set the initial state of the accordion item
		const [isOpen, setIsOpen] = useState(defaultState === 'expanded');

		// Update the state when the defaultState changes
		useEffect(() => {
			setIsOpen(defaultState === 'expanded');
		}, [defaultState]);

		// Toggle function
		function toggle(event) {
			if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
				setIsOpen(!isOpen);
			}
		}
		
		// All other blocks
		const allOtherBlocks = wp.blocks.getBlockTypes().map( block => block.name ).filter( name => name !== 'bb/accordion-item' );
		
		return(	
			<li { ...wrapperAttributes }>
				<Heading className="wp-block-bb-accordion-item-header">
					<button
						ref={button}
						onClick={toggle}
						onKeyDown={toggle}
						className="wp-block-bb-accordion-item-header-button"
						id={"wp-block-bb-accordion-item-header-button-" + uid}
						aria-expanded={isOpen}
						aria-controls={"wp-block-bb-accordion-item-panel-" + uid}
						type="button"
					>
						<RichText
							tagName="span"
							className="wp-block-bb-accordion-item-header-button-text"
							value={ headerText }
							allowedFormats={ ['core/bold', 'core/italic'] }
							placeholder={ __( 'Add title', 'accordion-item' ) }
							onChange={ ( value ) => setAttributes( { headerText: value } ) }
						/>
						<span 
							className="wp-block-bb-accordion-item-header-button-icon-arrow"
						>
							<Icon
						    	icon={ icons.arrow }
						    />
						</span>
					</button>
				</Heading>
				<div
					ref={panel}
					className={`wp-block-bb-accordion-item-panel ${isOpen ? 'open' : ''}`}
					id={"wp-block-bb-accordion-item-panel-" + uid}
					aria-labelledby={"wp-block-bb-accordion-item-header-button-" + uid}
					role="region"
					hidden={!isOpen}
				>
					<InnerBlocks 
						allowedBlocks={ allOtherBlocks } 
					/>
				</div>
			</li>
		)
	}

	// Block controls
	const blockControls = () => {
		return(	
			<BlockControls group="block">
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) => setAttributes( { textAlign: value } ) }
				/>
			</BlockControls>
		)
	}
	
	// Editor
	return (
		<>
			{ blockControls() }
			{ blockContent() }
		</>
	);
};