/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { BlockEditorProvider } from '@wordpress/block-editor';

const EMPTY_ARRAY = [];

export default function WidgetAreasBlockEditorProvider( {
	blockEditorSettings,
	...props
} ) {
	const areas = useSelect( ( select ) => {
		const { getEntityRecords } = select( 'core' );
		return getEntityRecords( 'root', 'widgetArea' ) || EMPTY_ARRAY;
	} );
	const [ blocks, setBlocks ] = useState( [] );
	useEffect( () => {
		if ( ! areas ) {
			return null;
		}
		setBlocks(
			areas.map( ( { id } ) => {
				return createBlock( 'core/widget-area', { id } );
			} )
		);
	}, [ areas ] );
	return (
		<BlockEditorProvider
			value={ blocks }
			onInput={ setBlocks }
			onChange={ setBlocks }
			settings={ { ...blockEditorSettings, templateLock: 'all' } }
			{ ...props }
		/>
	);
}
